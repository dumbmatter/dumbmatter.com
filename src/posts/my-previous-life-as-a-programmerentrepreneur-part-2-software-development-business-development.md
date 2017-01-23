---
date: 2011-08-21
layout: post.html
tags: avatic, mplaape
title: "My previous life as a programmer/entrepreneur - Part 2: Software development, business development"
---

<p><em>This is part 2 of a series of articles. If you missed the previous article, you should <a href="/2011/08/my-previous-life-as-a-programmerentrepreneur-part-1-origins/">start at the beginning</a>.</em></p>

<p>In <a href="/2011/08/my-previous-life-as-a-programmerentrepreneur-part-1-origins/">the last article</a>, I went from being an 11 year old with no clue about anything to a 15 year old with half a clue when I publicly released my first piece of software. In this article, I talk about acquiring users, getting unexpected contributions through the wonders of open source software, trying (and failing) to make money, and not trying to make money but actually making a little bit.</p>

<!--more-->

<p>February 2001. I had just released version 2.1 of Aardvark Topsites, which was the first to have simple web-based administration tools. At this point, I considered my software to be superior (or at least equal) to the commercial alternatives. And right then, something very cool happened.</p>

<p>I got an email from a French guy (unfortunately I don't have any record of this anymore, so I have no idea who it was), complimenting my work, and including a patch. The patch factored out all the hardcoded text into a separate file, and also included a French translation of that file. At that point in my life, this was basically the coolest thing that ever happened to me. I knew other people were using my script, and I had received some positive feedback, but this was the first time someone else contributed actual code to the project. And it was very important code, making the script usable for people who speak French and introducing a framework to allow other people to easily translate it into their own language. Ultimately, many years down the road, this culminated in 23 different translations, all contributed by volunteers around the world.</p>

<p>Maybe the most surprising part about this contribution was that I wasn't actively soliciting for help, and my code wasn't even explicitly open source. Any Perl script is effectively quasi open source in the sense that it's not compiled so you can view the source... but I wasn't doing anything to encourage people to help me. And yet, they did help. I look at it as an example of the power of the free software ideology.</p>

<p>After several months of refinement, I had a product that was clearly superior to any other. It had a customizable template system, multiple translations, and more features than any competing software package. And yet, the competition was charging $250 for a copy of their software. My software really only had one problem, which represented my first major software engineering challenge. It used a flatfile database to store all the stats, which became both very slow and very unstable for large, popular websites. The stability was the main problem, and the speed only compounded it. Basically, when two instances of the script opened the database file at the same time and both tried to write to the database file at the same time, it would get corrupted. Even with file locking turned on, high traffic would inevitably lead to corruption.</p>

<p>But that's not a problem unique to me, it's a problem that people ran into decades before. The solution is to use real database software, rather than an ad hoc flatfile database. MySQL was (and still is) a popular and free choice, and there were Perl libraries to easily work with MySQL databases. So I figured... let me accomplish two goals at once. If I switched out my crappy database for MySQL, then my script would undoubtedly be the best on the market, by far. Then I could charge for it. The old free version was known to be unstable on popular websites, so people would have to buy the commercial version to have a reliable topsites list. Furthermore, I figured that any income is better than nothing since I had no real expenses as a 16 year old kid, so I could afford to severely undercut the competition's price, and then totally dominate the market. That was the plan at least.</p>

<p>Thus, <a href="http://web.archive.org/web/20020202213522/http://www.aardvarkind.com/cgi/topsitessql/">Aardvark Topsites SQL</a> was born, and you could get a copy for the low low price of only $30. I was serious. I knew I was better than the competition on price and features. I even had a cute little logo. I even lied to PayPal and told them I was 18 so I could accept online payments. I was ready to go.</p>

<p>But my customers weren't. I think I sold a total of about 5 copies of the script. $150 is nice... but I was thinking bigger. And it felt pretty crappy knowing you had 5 users when you used to have hundreds of (albeit nonpaying) users.</p>

<p>But there were bigger problems. People needed tech support. People had problems with all kinds of stuff, and I wasn't prepared to handle it like a real business. I was on the basketball team in high school, and my Aardvark Topsites SQL experiment started during basketball season, when we had practice after school every day. So I would only have, as most, an hour or so per day to do anything business related.</p>

<p>So, the commercial software business was much less glamorous than I imagined. I wasn't making much money, I wasn't making much of an impact on the world, and I was spending my free time on tech support. So just 2 months and 5 customers into my first business venture, I blew it up. By now I had been influenced by Richard Stallman's writing, so I decided to release everything under the GPL. Then my old users were back in the picture, and even if they didn't give me any money, they did give me a little bit of Internet fame. And that made me happier than $150.</p>

<p>But I didn't just win back my old users. I found new ones. My software was more popular than ever. And at this time, I realized that I could actually make more money giving my software away than I could selling it. People wanted to pay me to install it for them, or to customize it, or just to show some appreciation for my work. Even better, having my code out there got me a bit of a reputation as a programmer. It was like an artist's portfolio. Soon, I was doing freelance programming work completely unrelated to my software. The network effect was incredible. I would get repeat customers, and those repeat customers would refer their friends to me. I had a full slate of projects to work on.</p>

<p>My favorite freelance project was a content rotator I wrote to run a network of porn sites (yes, I was still in high school at the time). Basically it allowed my client to run several porn sites off of one database of images. It stored the images on a central server and automatically updated multiple seemingly independent sites with different "new" images from the collection. The sites and schedules were all defined from an intuitive web-based UI. I was quite proud of it.</p>

<p>It was around this time that I also ported Aardvark Topsites from Perl to PHP -- 2003, to be exact. At that point, basically Perl was old and busted and PHP was the new hotness. That may sound unfathomable to web developers now, as PHP is the leading example of a horrible programming language these days, but it offered a lot of advantages back then. Mainly, its default install integrated with Apache for very good performance, whereas Perl's default install was much more inefficient and integrating it with Apache required jumping through a lot of hoops. So, in practice, most people had access to a very fast copy of PHP and a very slow copy of Perl. For software like mine that is repeatedly executed, this made a huge difference. So, I hopped on the PHP bandwagon and released the fourth major version of my software, now called Aardvark Topsites PHP (which remains the current name to this day), in June 2003, the summer before my senior year of high school.</p>

<p>Immediately, Aardvark Topsites PHP 4 was an even bigger hit than the old version. As we're moving into the not-so-distant past now, I actually have some records I kept all these years. Version 4.x was downloaded over 150,000 times. <a href="http://www.google.com/search?q=%22powered+by+aardvark+topsites+php+4.2%22+inurl:join">Googling finds</a> 50 people still using it today, even though much newer and better versions were subsequently released.</p>

<p>And with more popularity came more opportunities to make money. Again, all based on a free product. But to really make money online, you have to straddle the line between shady and unethical. I'll leave that part of the story for next time.</p>

<p><em>Want to keep reading? <a href="/2011/08/my-previous-life-as-a-programmerentrepreneur-part-3-first-steps-into-the-dirty-underworld-of-search-engine-optimization/">Go to Part 3 of the series!</a></em></p>

<h2 id="comments">2 archived comments</a>
</h2>

<ol id="commentlist">

    <li class="comment even thread-even depth-1" id="comment-326527">
    <p>Wow!<br />
Having a lot of fun reading your journey. I found you from the Basketball GM game you posted on Reddit and now I can't bring myself to stop reading. LOL</p>
    <p><cite>Comment by <a href='http://iballup.com' rel='external nofollow' class='url'>Nelly</a> &#8212; October 14, 2016 @ <a href="#comment-326527">2:23 pm</a></cite> </p>
    </li>

    <li class="comment byuser comment-author-admin bypostauthor odd alt thread-odd thread-alt depth-1" id="comment-326549">
    <p>Thanks for your comments 🙂 it's cool that someone is reading this after so long!</p>
    <p><cite>Comment by <a href='http://www.jeremyscheff.com/' rel='external nofollow' class='url'>Jeremy Scheff</a> &#8212; October 14, 2016 @ <a href="#comment-326549">11:34 pm</a></cite> </p>
    </li>


</ol>
