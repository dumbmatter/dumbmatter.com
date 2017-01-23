---
date: 2011-09-13
layout: post.html
tags: Science
title: "QR codes in academic poster presentations: A case study at ICCAI 2011"
---

It's hard to deal with introversion. Even [a scientific approach](http://xkcd.com/55/) doesn't offer many solutions. Sure, you can observe extroverts in their native habitats, but it often seems as if much of their power derives from some combination of status and network effects. No status, no network, no effects.

<!--more-->

So how do you crack that nut (or crack your shell, if we're using cracking analogies)? One seemingly universal constant is not giving a fuck. Not giving a fuck is a very difficult thing for many introverts to do, which is kind of strange if you think about it. From a scientific perspective, not giving a fuck makes a lot of sense. I'll probably be dead in about 50 years anyway, so why give too much of a fuck about what people think? I guess if you were religious you might view things differently... certainly I would give a fuck about the vengeful Biblical God if I thought he was real. But I don't really give a fuck about religion.

Unfortunately, for whatever reason, it's not always so easy to be logical. But I've been trying to internalize this not giving a fuck mindset. It helps when you have some rudimentary (or, better yet, more than rudimentary) financial, intellectual, and social capital built up, kind of as a buffer against giving a fuck. If you're living paycheck to paycheck, you most certainly must give a fuck about a lot of stuff that you'd ideally prefer not to give a fuck about. If you are not thoughtful enough to consider the implications of giving a fuck or not giving a fuck, then you won't even comprehend the concept of not giving a fuck. If you don't have some (not a lot... but some) friends who won't give a fuck about the implications of you not giving a fuck, then you might worry too much about losing whatever small bits of human contact you experience due to giving a fuck.

But I'm not worried about any of that. I'm set.

So how does not giving a fuck manifest itself in the daily life of a naive aspiring scientist?

I ask questions. Maybe not enough still, but more than the guy sitting in the back corner of the room. Actually... I think I'm much stronger than that guy. In fact, I probably ask more questions than the average person, not just the average recluse. See the problem with questions is that, in addition to the philosophy of not giving a fuck, I also a very strong aversion to like a moron. This is good in some cases. I like to be prepared, well read, all that good stuff. Fine. But if the aversion to looking like an imbecile dominates not giving a fuck, then you never put yourself out there. And putting yourself out there is the cornerstone of not giving a fuck. So not looking like an idiot is fine as long as it is a secondary life philosophy. 

I don't worry about criticism. This ties in with the above concept of how not looking like a nincompoop must always defer to not giving a fuck. But furthermore, it's not getting worked up over critiques. It's existing at a higher mental level, above whatever trivial argument is being made in the short term, and understanding that you can use this information in a positive way. And not just that you can improve yourself or your work in response to the specific criticism you face; that is the naive way of looking at it. You can also think about what kind of things provoke criticism, how to steer criticism towards positive ends, how to deflect criticism, how to defuse criticism, and all that devious stuff.

I take care of myself. If I want to play basketball, work out, cook a nice dinner... that stuff is almost non-negotiable for me. And if it becomes negotiable due to some extreme circumstances, it is non-negotiable that those circumstances be transient. And if that becomes a problem... I don't really give a fuck. I will simply adjust my life so that there is no more problem.

So that brings me here, to my blog. Why blog? I already write a fair amount of academic junk, but that is an outlet only for science, not for any other drivel I want to effuse. But I don't need to blog as an outlet, really. I have made (and continue to operate) many websites in the past. I write what I think there. I write plenty of stuff on all kinds of topics on various other websites that eventually gets lost in some corner of the Internet. But much of that is anonymous (or at least not with my name advertised in the domain name and in big letters at the top of the screen). And what is the cornerstone of not giving a fuck? Putting yourself out there. So here I am, writing what otherwise would have been said in private to friends, posted in an uncoordinated fashion somewhere online, or stuck in my mind until the thought decayed. But here, my thoughts may be tempered with a bit of not wanting to look like an idiot.

Oh, and I also wouldn't mind if this helped me improve as a writer. As with most things in life, you get better at writing by writing a lot. So this can't hurt.
<p>I've found that most people don't know what a QR code is, so let me explain. A <a href="http://en.wikipedia.org/wiki/QR_code">QR code</a> is a 2d barcode that contains some content (typically a URL) and is intended to be scanned by a smartphone camera. You often see them in ads, linking to a product's website or something. I recently (very recently... I wrote most of this while I was delayed at the airport on my trip home) presented a poster at <a href="http://iccai.org/">ICCAI 2011</a>, and I tried to use all this fancy smartphone scanning technology to enhance my poster.</p>

<!--more-->

<p>Let me be academic about this. First, the literature review. Several other people have blogged about QR codes in similar contexts. <a href="http://blog.postersession.com/2011/03/29/qr-codes-on-a-research-poster/">Others have suggested</a> to use QR codes on posters to link to a personal website or <a href="https://blogs.dal.ca/sim/2011/03/17/qr-codes-in-an-academic-setting/">your contact info</a> or <a href="http://www.poweredbyosteons.org/2011/04/qr-code-for-academic-posters.html">a copy of the poster</a>/<a href="http://chronicle.com/blogs/profhacker/using-twitter-and-qr-codes-at-conferences/33334">paper</a> or <a href="http://betterposters.blogspot.com/2011/03/smart-posters.html">various other things</a>.</p>

<p><a href="http://hiact.posterous.com/twitter-and-qr-codes-at-science-conferences-a">The most detailed account of this kind of thing</a> basically concluded that nobody knows how to use QR codes, nobody wants to use QR codes, and thus nobody actually will read whatever extra content you put on your poster -- even if you bribe people with a contest and a prize.</p>

<p>But whatever. It's fun.</p>

<p>So basically, as far as I can tell, QR codes have been used for two things.</p>

<ol>
<li>Self-promotion</li>
<li>Linking to content that would have been on your poster, if only you had an infinitely large poster</li>
</ol>

<p>Both of those are extremely important and clever applications of QR codes in the context of an academic poster presentation. But I want to go a little deeper:</p>

<p>What about things that can't possibly be included in a poster? Things that nobody is expecting to see at all in a poster presentation? I'm talking about multimedia, interactive demos, that type of thing. The transition from old school projectors to PowerPoint presentations opened up those options for talks, but posters are still stuck in the 20th century until Apple releases the iPoster in 2021. But with QR codes and fellow academics armed with smartphones and tablets, we don't need to wait for the iPoster.</p>

<p>Obviously, the extent to which QR codes can be used to enhance a poster presentation depends highly on the subject matter. My latest poster presentation was an obvious candidate for an interactive demo. I was presenting a fairly simple model that can execute very quickly. So it was fairly easy to write a web interface to the model that allows people to play around with initial conditions and parameter values and see what happens. I translated my MATLAB code to Python, wrote a simple web interface using <a href="http://webpy.org/">web.py</a>, and I gave it a pretty iPhone-like UI with <a href="http://jquerymobile.com/">jQuery Mobile</a> (caveat: I needed to <a href="https://github.com/jdscheff/jquery-mobile">hack it</a> to get the slider widget working correctly). The end result? Well, I don't have it up anymore because I don't want the whole Internet hammering my server, but here's what it looked like:</p>

<img src="/files/iccai.png" class="img-responsive">

<p>I put a QR code and a shortened URL (as not everyone has a QR code reader) on my poster thus completing the easy parts of all this. The only thing remaining was the hard part: getting people to actually use it and seeing if they think it's useful. I showed it to a few people before the conference, and the universal response was "What's a QR code? Oh, that's pretty cool"... but how does that translate when I'm talking to strangers at a conference?</p>

<p>At the conference, there was a formal poster walk around, so like 30 people came at once and I got 3 minutes to talk to all of them. In my 3 minutes, I made a plug for the QR code and the live web-based demo. Nobody reached for a smartphone. In smaller conversations, I continued to plug it. My favorite response was (with a good natured smile), "I would look at it, but I don't give a damn".</p>

<p>But my poster was up for 2 full days, so maybe someone tried my demo when I wasn't there. I eagerly checked my server access logs when I got home. The end result? Three people accessed my demo. And only one of them played around with the options.</p>

<p>But whatever, it was fun.</p>

<h2 id="comments">1 archived comment</h2>

<ol id="commentlist">

    <li class="comment even thread-even depth-1" id="comment-913">
    <p>Jeremy, I'm hearing you. Nice write up; And thx for linking.<br />
The interactive web app for your data is a brilliant idea, sorry to read that you had the same somewhat disappointing experience; but I agree, it's fun. It still is.<br />
Science is just not there yet, go iPoster 2021!</p>
    <p><cite>Comment by <a href='http://hiact.info' rel='external nofollow' class='url'>Gregor</a> &#8212; November 9, 2011 @ <a href="#comment-913">6:54 am</a></cite> </p>
    </li>


</ol>
