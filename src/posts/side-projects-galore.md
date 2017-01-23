---
date: 2016-06-18
layout: post.html
tags: Basketball GM, FOSS, Programming, Statistics, Web Development
title: Side projects galore
---

God damn, I've been neglecting this blog. It's sad really, because I do have a lot to say. I guess I've just been talking to myself instead of blogging lately, which maybe says something about my mental stability, but whatever. I'm blogging now, and I'm going to blog the fuck out of this blog.

It's 2016. My job is pretty cool in some ways, but in some other ways it bothers me a great deal. It's probably not in my best interest to go into that in great detail here (as if anyone is reading this, right?) so I will leave the rest unsaid, and just get to the broader point. I am someone who cares a great deal about science, engineering, creating cool things, doing things the right way, etc. And when I say "cares a great deal" I mean probably more than I can adequately articulate with my pedestrian writing skills. It's almost like a spiritual thing. So for someone like me, what do you do when your day job is preventing you from attaining your desired level of spiritual satisfaction?

Side projects!

<!--more-->

Do some shitty work 9-5? Come home and do some good work on your own projects! What could be more fun than that? Okay, okay, I can hear what you're saying. "Friends!" "Sports!" "Games!" Well guess what, I have time for all that stuff too, not an issue. "Family!" "Kids!" There's your big timesinks! Sadly/fortunately, my idea of a relationship right now comes from Tinder, and that doesn't really take much time or effort (praise the God of Genetics for making me a 6'3" white guy). In total, that leaves plenty of time for...

Side projects!

So I'm going to write about a few things I've been working on lately.

<b>Project #1: Basketball GM</b>

Ah yes, first and foremost, my most successful current project. If you're not aware, <a href="https://basketball-gm.com/">check it out</a>. There's about a 99% chance you'll think it's really stupid. But if you're in that 1%, you'll thank me.

I still put a lot of time into Basketball GM. Much effort has gone into modernizing the codebase. When I started writing the JavaScript version, callbacks were king, RequireJS provided modularity, and the strict rules of JSLint kept me from shooting myself in my foot. Now I'm using all kinds of crazy shit like ES2015 (and newer!), Babel, and Browserify. It's a lot of churn, but it keeps me on the cutting edge and it staves off code rot (BTW see side project #2 for some more code rot discussion). And it's just plain satisfying when you go from the old way to the new way and the new way is just objectively better. My dick got hard when I got async/await compiled to Bluebird working. (And for those who are still reading through this paragraph of technical jargon, I am still using Bluebird because I can't rely on native promises using microtasks "correctly", and "correctly" is in quotes because as best I can tell the spec is ambiguous, yay!)

I also spend an inordinate amount of time geeking out on relatively minor details of Basketball GM. Like player names. Imagine you're writing a game, and you need to generate hundreds of fake names. "Well make a list of names and pick randomly from it, problem solved." Fuck you! That is not an acceptable solution. I am compelled to do better. And as I'm typing this I really want to go off on a long discussion on this topic... except I already did that in <a href="https://basketball-gm.com/blog/2016/06/more-realistic-player-names-including-international-players/">a blog post on the Basketball GM blog</a>.

Another cool thing that happened lately: logos! Basketball GM uses fake teams because I tragically do not have a license from the NBA. The existence of these fake team names fits into the "geeking out" category as well, but that was <a href="https://basketball-gm.com/blog/2014/01/the-great-realignment/">years</a><a href="https://basketball-gm.com/blog/2014/01/new-team-regions-and-names/">ago</a> at this point. But the logos, that's new. I found a great artist to work for a reasonable price, but as is the case in many aspects of life, there are tradeoffs, and in this case the tradeoff was time. These logos were in the works for a long fucking time until they recently were completed, but that's okay because they are really good. <a href="https://basketball-gm.com/blog/2016/06/logos-for-default-teams/">Check it out.</a> For many of them, you wouldn't think twice if you saw the logo on a real uniform. So fucking cool.

Another cool thing about the logos was <a href="https://www.reddit.com/r/BasketballGM/comments/4mfx1g/theyre_almost_here/d3vdomy?context=3">the greatest comment in the history of my fledgling Basketball GM subreddit</a>.

And one other cool thing... for a few months I had a Donald Trump easter egg. Very rarely, <a href="https://i.imgur.com/7eJ4y7H.png">Donald Trump would appear</a>, dominate your league for a year, and then retire. What was his best skill? Perimeter defense, of course! I crack myself up.

I hope to get back into more of the core AI/simulation aspects of the game soon, because there is a lot that could be improved there. But I don't know if I'll actually follow through or if I'll be perpetually distracted by shiny things on the periphery.

<b>Project #2: Screw</b>

I'm a big hip hop fan. I really like <a href="https://en.wikipedia.org/wiki/Chopped_and_screwed">chopped and screwed</a> songs. You know, the ones where the music is slowed down and the pitch drops and it's just awesome. Often I ask myself, "Why isn't more music chopped and screwed? Heck, why isn't all music chopped and screwed?"

Well the chopping part is hard, that requires a lot of skill and manual effort. But the screwing part is easy. Just slow the music down and/or decrease the pitch. Absolutely trivial. Yet does your music player have a "slow this song down by 20%" button? No? Why the fuck not! As I mentioned before, it's 2016. We have the technology.

But fuck 2016, we had the technology way before that. How do I know? Because <a href="https://mail.gnome.org/archives/banshee-list/2013-May/msg00034.html">I solved this problem in 2013</a>. I created a plugin for the Banshee music player (my music player of choice) which gave you a button to press to alter the tempo and pitch of playback. So I could just put my whole hip hop library on shuffle and listen to screwed versions of every song in my collection. Paradise!

Sadly, paradise then burned to the ground when the next version of Ubuntu was released and bit rot set in. See, Banshee is written in C#. C# is a fairly nice programming language created by Microsoft with the goal of ruthlessly subjugating the world. That made it somewhat controversial in the Linux world - some people liked it because it was fairly nice, others were not on board with subjugating the world. In the end, the latter group of people won and C# on Linux has been dead in the water for years. I was not able to overcome the extent of the bit rot, so my Banshee plugin only runs on 2013-era Linux distros. No fun.

In 2016, we have a better [citation needed] platform than C#: the web! Write once, run anywhere, but for real this time (except for cross-browser compatibility)! Joking aside, I really do fucking love the web, its overarching goals, and the results you can achieve with it. So I decided to port my Banshee plugin to client-side JavaScript. That's a perfectly sensible and normal thing to do, right? Right??

I probably would have failed if I didn't eventually find <a href="https://github.com/also/soundtouch-js">a 4 year old undocumented library</a> that helped me figure out the proper incantations to make the Web Audio API do what I want. I'm not sure if that is awesome or terrifying. But the end result is <a href="http://dumbmatter.com/screw/">Screw</a>. Change the tempo and pitch of an audio file, all in your web browser using client-side JS.

It's still not as good as my old Banshee plugin because it doesn't integrate with my music library and it only plays one song at a time. But it changes the fucking tempo and pitch of an audio file in client-fucking-side JS. That's good enough for me.

When I was building and testing it, I listened to <a href="https://www.youtube.com/watch?v=Z6JlTnGD_so">Peace of Paper/Cup of Jayzus by Lupe Fiasco</a> about 5000 times, and I'm still not tired of it. It sounds great slowed down and pitched down about 20%.

<b>Project #3: SAS7BDAT Web Viewer</b>

This one is even more esoteric.

SAS is some ridiculously expensive statistics software that I've never even used, because I prefer open source and I don't like ridiculously expensive things. But it's super popular in my industry (pharma) so people often send me SAS files and expect me to do things with them. But my company won't even give me a SAS license because it's so fucking expensive. They do give me a <a href="http://www.stattransfer.com/">Stat/Transfer</a> license which I can use to convert SAS files to CSV, but wouldn't it be nicer if there was some open source library we could simply integrate into our data flow pipeline?

Well, there are a few. But none in JavaScript, and actually it would be slightly more convenient for me if there was a native Node.js one. And obviously this is not a great use of my time, so I did it on my own time, not company time. I took <a href="https://bitbucket.org/jaredhobbs/sas7bdat">this Python library</a> and <a href="https://github.com/dumbmatter/sas7bdat-js">converted it to JavaScript</a>, which is already pretty insane. But wait, we're not done.

In the process of porting that library, I wrote a ton of tests to compare my output to Stat/Transfer. I tested on all the files I could find on Google, plus every file I had on my workstation. Turned out that, even after squashing all the bugs introduced in porting, there were still like 2% of files that would get parsed wrong. SAS7BDAT is just a very flexible format, and people apparently get very creative with it. It'd probably take a ton of work to solve that 2%, which is probably why Stat/Transfer exists as a company. So sadly, after all this work, I was left with something that I can't actually use on real data because I can't just ignore that 2%.

So I decided to try something different, to salvage some meaningfulness out of this endeavor. I got my library to run in client-side JS and <a href="http://dumbmatter.com/sas7bdat/">build a nifty-little UI for it</a>. So there you have it. SAS7BDAT to CSV conversion in client-side JavaScript. The future is now.

But is it actually useful? Turns out, yes! I was sitting in my cubicle at work a few days ago and I overhear a conversation in the cubicle next to mine: "hey, do you know how to open SAS files?" Naturally I had to butt in and force him to use my app, which actually worked! Score one for the SAS7BDAT Web Viewer side project.
