---
date: 2021-06-03
layout: post.html
tags: Programming
title: Streaming data from IndexedDB to a file with the File System Access API
---

I was playing around with this for use in [my video games](https://zengm.com/) which store a ton of data in IndexedDB (too much to read into memory at once) and thought maybe some other people might be interested in it too, since I haven't seen any other discussion of this topic.

The goal here is to move data from IndexedDB to a file without reading all of the data into memory at once. If you are able to read your data into memory, you can create a `blob` and use `URL.createObjectURL` to download it to a file - but that's old news. This is about streaming.

The building blocks of this are two fairly new web APIs: the [Streams API](https://web.dev/streams/) and the [File System Access API](https://web.dev/file-system-access/). The File System Access API is currently only supported in recent versions of Chrome, but it's the only way to stream data to a file.

What about getting data out of IndexedDB? The IndexedDB API predates streams, so it has no built-in support for that. But it does have cursors, which allow you to iterate over data in your database, which is basically the same thing.

<!--more-->

That gives the general idea... somehow turn an IndexedDB cursor into a stream and send that to a file with the File System Access API.

That "somehow" in the previous sentence is doing a lot of work though! IndexedDB is a notoriously difficult API to work with. In this case, the sticking point is that IndexedDB transactions automatically close whenever they are not active, and "not active" includes things like "waiting for some other async activity to resolve". And you know what involves a lot of asynchronous stuff? Streams. So if you build a naive readable stream on IndexedDB, you run into inactive transaction errors.

A solution is to do something like this:

```
<button id="button">Stream</button>

<script type="module">
import { openDB } from "https://unpkg.com/idb@^6?module";

const STORE_NAME = "test";

const connectDB = async () => {
  const db = await openDB("streamingTestDB", 1, {
    upgrade(db) {
      const store = db.createObjectStore(STORE_NAME, {
        keyPath: "id"
      });

      for (let i = 0; i < 1000; i++) {
        store.add({
          id: i,
          random: Math.random(),
        });
      }
    },
    blocked() {
      throw new Error("blocked");
    },
    blocking() {
      throw new Error("blocking");
    },
    terminated() {
      throw new Error("terminated");
    },
  });

  return db;
};

const makeReadableStream = (db, store) => {
  let prevKey;

  return new ReadableStream({
    async pull(controller) {
      const range = prevKey !== undefined
        ? IDBKeyRange.lowerBound(prevKey, true)
        : undefined;

      let batchCount = 0;

      let cursor = await db.transaction(store).store.openCursor(range);
      while (cursor) {
        controller.enqueue(`${JSON.stringify(cursor.value)}\n`);
        prevKey = cursor.key
        batchCount += 1;

        if (controller.desiredSize > 0) {
          cursor = await cursor.continue();
        } else {
          break;
        }
      }

      console.log(`Done batch of ${batchCount} object`);

      if (!cursor) {
        // Actually done with this store, not just paused
        console.log("Completely done");
        controller.close();
      }
    },
  }, {
    highWaterMark: 100,
  });
};

const getNewFileHandle = async () => {
  const handle = await window.showSaveFilePicker({
    suggestedName: "foo.txt",
    types: [
      {
        description: "Text Files",
        accept: {
          "text/plain": [".txt"],
        },
      },
    ],
  });
  return handle;
};

document.getElementById("button").addEventListener("click", async () => {
  const fileHandle = await getNewFileHandle();
  const writableStream = await fileHandle.createWritable();

  const db = await connectDB();
  const readableStream = makeReadableStream(db, STORE_NAME);

  await readableStream.pipeTo(writableStream);
});
</script>
```

`makeReadableStream` returns a `ReadableStream` that pulls data from IndexedDB. The `highWaterMark` of 100 means it will read up to 100 records into memory as a buffer before pausing. Since our test data has 1000 records and reading data from IndexedDB is faster than writing to disk, this ensures we see streaming behavior. It will load 100 (and a few more) records in the first batch, and then pause until it's ready to load more, while storing the place it left off in `prevKey`. Then each time more data is requested from our readable stream, it creates a brand new IndexedDB transaction, starting from `prevKey`.

There's a problem with this code though! `pull` gets called each time the buffer falls under `highWaterMark`. That often means it's called when there are 99 records in the buffer, resulting in a new transaction being created just to pull a single additional record, which shows up on the console as a bunch of "Done batch of 1 object" messages. That's kind of slow because there is some cost associated with creating a transaction.

To work around that, I introduced another variable `MIN_BATCH_SIZE`. I'm using that in addition to the built-in `controller.desiredSize` to ensure that if we're going to go through the trouble of creating a transaction, we're at least going to use that transaction for multiple records. Here's the final code:

```
<button id="button">Stream</button>

<script type="module">
import { openDB } from "https://unpkg.com/idb@^6?module";

const STORE_NAME = "test";

const connectDB = async () => {
  const db = await openDB("streamingTestDB", 1, {
    upgrade(db) {
      const store = db.createObjectStore(STORE_NAME, {
        keyPath: "id"
      });

      for (let i = 0; i < 1000; i++) {
        store.add({
          id: i,
          random: Math.random(),
        });
      }
    },
    blocked() {
      throw new Error("blocked");
    },
    blocking() {
      throw new Error("blocking");
    },
    terminated() {
      throw new Error("terminated");
    },
  });

  return db;
};

const makeReadableStream = (db, store) => {
  let prevKey;

  return new ReadableStream({
    async pull(controller) {
      const range = prevKey !== undefined
        ? IDBKeyRange.lowerBound(prevKey, true)
        : undefined;

      const MIN_BATCH_SIZE = 100;
      let batchCount = 0;

      let cursor = await db.transaction(store).store.openCursor(range);
      while (cursor) {
        controller.enqueue(`${JSON.stringify(cursor.value)}\n`);
        prevKey = cursor.key
        batchCount += 1;

        if (controller.desiredSize > 0 || batchCount < MIN_BATCH_SIZE) {
          cursor = await cursor.continue();
        } else {
          break;
        }
      }

      console.log(`Done batch of ${batchCount} object`);

      if (!cursor) {
        // Actually done with this store, not just paused
        console.log("Completely done");
        controller.close();
      }
    },
  }, {
    highWaterMark: 100,
  });
};

const getNewFileHandle = async () => {
  const handle = await window.showSaveFilePicker({
    suggestedName: "foo.txt",
    types: [
      {
        description: "Text Files",
        accept: {
          "text/plain": [".txt"],
        },
      },
    ],
  });
  return handle;
};

document.getElementById("button").addEventListener("click", async () => {
  const fileHandle = await getNewFileHandle();
  const writableStream = await fileHandle.createWritable();

  const db = await connectDB();
  const readableStream = makeReadableStream(db, STORE_NAME);

  await readableStream.pipeTo(writableStream);
});
</script>
```

And here's a runnable version of it (only works in recent versions of Chrome, at the time of writing):

<button id="button">Stream</button>

<script type="module">
import { openDB } from "https://unpkg.com/idb@^6?module";

const STORE_NAME = "test";

const connectDB = async () => {
  const db = await openDB("streamingTestDB", 1, {
    upgrade(db) {
      const store = db.createObjectStore(STORE_NAME, {
        keyPath: "id"
      });

      for (let i = 0; i < 1000; i++) {
        store.add({
          id: i,
          random: Math.random(),
        });
      }
    },
    blocked() {
      throw new Error("blocked");
    },
    blocking() {
      throw new Error("blocking");
    },
    terminated() {
      throw new Error("terminated");
    },
  });

  return db;
};

const makeReadableStream = (db, store) => {
  let prevKey;

  return new ReadableStream({
    async pull(controller) {
      const range = prevKey !== undefined
        ? IDBKeyRange.lowerBound(prevKey, true)
        : undefined;

      const MIN_BATCH_SIZE = 100;
      let batchCount = 0;

      let cursor = await db.transaction(store).store.openCursor(range);
      while (cursor) {
        controller.enqueue(`${JSON.stringify(cursor.value)}\n`);
        prevKey = cursor.key
        batchCount += 1;

        if (controller.desiredSize > 0 || batchCount < MIN_BATCH_SIZE) {
          cursor = await cursor.continue();
        } else {
          break;
        }
      }

      console.log(`Done batch of ${batchCount} object`);

      if (!cursor) {
        // Actually done with this store, not just paused
        console.log("Completely done");
        controller.close();
      }
    },
  }, {
    highWaterMark: 100,
  });
};

const getNewFileHandle = async () => {
  const handle = await window.showSaveFilePicker({
    suggestedName: "foo.txt",
    types: [
      {
        description: "Text Files",
        accept: {
          "text/plain": [".txt"],
        },
      },
    ],
  });
  return handle;
};

document.getElementById("button").addEventListener("click", async () => {
  const fileHandle = await getNewFileHandle();
  const writableStream = await fileHandle.createWritable();

  const db = await connectDB();
  const readableStream = makeReadableStream(db, STORE_NAME);

  await readableStream.pipeTo(writableStream);
});
</script>

There's a lot more functionality in all of the APIs used here, but hopefully this is a useful minimal example of how to put them all together. And yet, none of this thrills me. A simpler or more efficient way to stream data out of IndexedDB would be pretty neat. If you can think of some way to improve this, [please let me know](mailto:jdscheff@gmail.com)!
