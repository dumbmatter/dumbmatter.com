---
date: 2018-05-29
layout: post.html
tags: ads, programming
title: Upgrading Prebid.js from 0.34 to 1.x when using the Index Exchange adapter
---

Over at [Basketball GM](https://basketball-gm.com/), when I upgraded Prebid.js from 0.34 to 1.x, most of the bid adapters could just be easily copied over. Index Exchange was the one exception. For a while it wasn't availble at all on 1.x, but that changed with version 1.10.0, released a few weeks ago. However it requires some changes to your configuration to upgrade from 0.34 to 1.10+, and I found the documentation to be a bit lacking, so I wrote a blog post!

<!--more-->

First, find your old bidder configuration:

    {
      bidder: "indexExchange",
      params: {
        siteID: "12345",
        id: "1"
      }
    }

Make three changes. Change `indexExchange` to `ix` because they renamed the adapter for some reason. Change `siteID` to `siteId` because fuck you, I guess - that one took me a while to debug! And instead of `id`, it needs a `size` field containing the size of the ad unit. I'm not really sure why that is necessary because there is size configuration elsewhere in the Prebid.js config, but oh well. The end result looks like this:

    {
      bidder: "ix",
      params: {
        siteId: "12345",
        size: [728, 90]
      }
    }

However, there is one more catch! If you don't explicitly specify that the ad unit is a banner, the ix adapter will ignore it. This is not documented anywhere and is probably [a bug](https://github.com/prebid/Prebid.js/issues/2574) since the Prebid.js documentation says it assumes the it is a banner by default.

Bug or not, we can work around it. Your ad unit configuration needs to look something like this:

    {
        code: "whatever",
        mediaTypes: {
          banner: { sizes: [[728, 90]] }
        },
        sizes: [[728, 90]],
        bids: [
          {
            bidder: "ix",
            params: {
              siteId: "12345",
              size: [728, 90]
            }
          }
        ]
    }

So there you have it. The ix adapter working in Prebid.js 1.x. And it only requires you to specify the size three times:

1. `sizes` is needed because it's a required parameter, as per the Prebid.js documentation
2. `mediaTypes` is needed despite the documentation saying it is optional, otherwise ix won't work
3. The ix configuration needs its own `size` parameter too, for some reason.

I hope this saves you from banging your head against your desk as much as I did while figuring out how to get it working!
