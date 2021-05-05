---
date: 2021-05-04
layout: post.html
tags: Avatic, FOSS, Programming
title: An 18 year old bug
---

I got a fun email earlier today - a support request for literally the second piece of software I ever wrote, back in 2001 when I was a kid with a couple months of programming under my belt.

It's a click tracker that I called Click Manager. Pretty simple stuff - a Perl CGI script that counts how many times a link was clicked, storing the data in a flat file database.

Eventually I even added a nifty UI to view the stats. Check it out, in all its early 2000s glory:

<!--more-->

<img src="/files/click-manager.png" class="img-responsive">

Anyway, point is, someone emailed me about a bug in Click Manager. That absolutely made my day, to learn that somebody was still using my old script.

I took a look at it. Turns out he was using [version 2.2.5, from 2003](https://web.archive.org/web/20030622044521/http://www.aardvarkind.com:80/index.php?page=clickmanager). That is not the latest version though! The latest version is [version 2.2.6, from 2005](https://web.archive.org/web/20051026143510/http://www.aardvarkind.com:80/index.php?page=other). (You can actually [still download it from my website](http://www.aardvarktopsitesphp.com/index.php?page=other), but I like linking to those nice old layouts that archive.org has saved.)

After looking at a diff between version 2.2.5 and 2.2.6 (this was back before I used version control) it became clear that the only thing version 2.2.6 did was fix the exact bug he emailed me about!

Moral of the story: please update your software at least once per decade, or this might happen to you :)
