---
date: 2022-11-10
layout: post.html
tags: Programming
title: OffscreenCanvas pain points
---

I am working on a side project that makes heavy use of the [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) and I cam across [OffscreenCanvas](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas) which seemed to have some compelling features. Wouldn't it be nice for performance to do all of my rendering in a web worker? Well I gave it a try, but wound up not going forward with it due to several reasons:

<!--more-->

## 1. Browser support

OffscreenCanvas originally was only in Chrome. Firefox recently added support. But it's still not in Safari. So if you want to use it, you'll need a fallback using a normal canvas. Which isn't really too hard, but it's more code to test, and you can't rely on any performance gains from OffscreenCanvas to make your app usable, since you probably still want it to work well in Safari.

## 2. SVG support in workers

One of the things I was doing was rendering SVGs to the canvas. That works fine in a normal Canvas. But for an OffscreenCanvas you run into problems because [Chrome doesn't have a good way to rasterize SVGs in workers, and also has no plan to improve the situation](https://bugs.chromium.org/p/chromium/issues/detail?id=606317). So I'd be stuck doing that work on the main thread and then sending bitmaps to the worker. That partially defeats the purpose of using OffscreenCanvas in the first place, which is to offload work to a worker.

## 3. UI interaction performance

What if you want to respond to clicks on your canvas? Well, that's still happening in the main thread, even if you use OffscreenCanvas. So if something is blocking the main thread, you still need to wait for that to complete before responding to the event. And then when you do respond to the event, there is the (small yet non-zero) overhead of communicating between the main thread and the worker. [There is a proposal to improve this situation](https://github.com/WICG/input-for-workers), but it doesn't seem to have much momentum.

A similar problem exists for apps that have use both canvas and normal HTML elements in their UI. You can't access the DOM from the worker, so if you're going to keep your application state/logic in the worker, then you'll have some communication overhead to send that info to your HTML UI. That's especially problematic if you have some computationally intensive thing happening in the worker - you have freed the main thread from rendering the canvas with OffscreenCanvas, but other UI elements will still be laggy if they need to communicate with a busy worker.

## 4. Suspending animations in inactive tab

This one is more minor than the others, but I'm just putting it here for completeness.

Normally, if you're rendering something to a canvas in a [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) loop, that loop gets throttled when the tab is inactive, automatically saving a lot of CPU resources. For whatever reason, this throttling seems to not happen if the same code is running in a worker in an OffscreenCanvas. Sure you can write your own logic to detect this situation and throttle your own loop, but that's kind of annoying when it works for free normally.

## Conclusion

There are surely some niche cases where the above concerns don't apply, but for most projects, I don't think there is much to gain from OffscreenCanvas currently. Basically any type of parallel processing in JS is a challenge.
