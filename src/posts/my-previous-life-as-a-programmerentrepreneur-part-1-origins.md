---
date: 2011-08-20
layout: post.html
tags: avatic, mplaape
title:  "My previous life as a programmer/entrepreneur - Part 1: Origins"
---

<p>This is the first in a series of articles about (broadly) my experiences as a web developer. I plan on having the whole series range from my adolescence, where I began building websites and learning how to program, and ending as an undergrad in college when I decided to try to sell as much of my stuff as possible and move on to other things. So, I don't know if anyone will find this series of articles interesting; maybe I'm just writing them to reminisce more than anything.</p>

<p>This being the first article in the series, it starts with my first forays into programming and ends with the seemingly benign beginnings of what would eventually become a fairly profitable enterprise.</p>

<!--more-->

<p>To jump to another part of the series, follow one of these links. Otherwise, continue reading below for Part 1.</p>

<ul>
<li><a href="#part1">Part 1: Origins</a></li>
<li><a href="/2011/08/my-previous-life-as-a-programmerentrepreneur-part-2-software-development-business-development/">Part 2: Software development, business development</a></li>
<li><a href="/2011/08/my-previous-life-as-a-programmerentrepreneur-part-3-first-steps-into-the-dirty-underworld-of-search-engine-optimization/">Part 3: First steps into the dirty underworld of search engine optimization</a></li>
<li><a href="/2011/11/my-previous-life-as-a-programmerentrepreneur-part-4-avatic/">Part 4: Avatic</a></li>
<li><a href="/2011/12/my-previous-life-as-a-programmerentrepreneur-part-5-getting-fucked-over-but-still-making-a-profit/">Part 5: Getting fucked over, but still making a profit</a></li>
<li><a href="/2011/12/my-previous-life-as-a-programmerentrepreneur-part-6-the-shadier-the-seo-the-bigger-the-profit/">Part 6: The shadier the SEO, the bigger the profit</a></li>
<li>Part 7: SEO mercenary for hire</li>
</ul>

<a name="part1"></a>

<p>My first experience whatsoever with programming wasn't really programming at all. When I was a young child, my first exposure to computers was from my grandfather. He was somewhat of a computer nerd, so he had an IBM clone running DOS that us grandkids would use to play video games. The ability to play video games at all was a novelty for me at the time, so I had a lot of fun playing Frogger and things like that.</p>

<p>I had a little less fun playing a blackjack game. That's because, in addition to blackjack not really being very interesting compared to other video games, this blackjack game had a bug in it. I'm not really sure what it was, but I noticed that it spit out the line number in a data file that it didn't like. So whenever this happened, I would go into the data file, find the offending line, and delete it; then, the game would run again, at least for a little while. So I guess I was a bug fixer before I was a programmer.</p>

<p>My second experience with programming also wasn't really programming. It was building websites. If I recall correctly, my family got the Internet in 1996 when I was 11 years old. It all seemed kind of wonderful and magical to me for a while, as I'm sure it did to everyone back then. We also had a subscription to the now-defunct <a href="http://en.wikipedia.org/wiki/Internet_Magazine">Internet Magazine</a>. Looking back on it, it seems rather absurd that there was a dead tree magazine devoted to telling you cool things about the Internet, but that's the way things worked back in the old days. Anyway, I remember an article in an issue of Internet Magazine called "Build your own website in 15 minutes!" or something like that. If was basically a very very basic introduction to HTML along with a link to the also-now-defunct <a href="http://en.wikipedia.org/wiki/GeoCities">GeoCities</a>, a free web host at the time. I was shocked that it looked so simple. Being a nice obedient child, I asked my parents if I was allowed to make a website. They said no. Being a nerd, I did it anyway. And it actually worked! I really could build my own website in 15 minutes without spending any money! As an 11 year old in the previous millennium, that felt like an incredible discovery.</p>

<p>So at this point, I had the ability to tell <em>the whole world</em> about whatever it is that a kid my age cared about - mainly video games, TV shows, and sports. So I made a variety of exceedingly unpopular websites. Although I never figured out how to create content that people actually wanted to read (and judging by the popularity of this blog, I don't think I ever figured that out), I did discover one thing: HTML is not a programming language. By that, I mean that you can't do anything dynamic or interactive in just HTML; all you can do is just display some static content, basically text and pictures. To get anything cooler than that (message boards, games, search engines, stat trackers, whatever), you needed to use CGI scripts.</p>

<p>Ah, CGI scripts. They're still around today, but they were quite a different beast back 10 years ago. Back then, they were almost exclusively written in Perl, and somehow C was probably the second most popular language. The libraries were few and far between, and the ones that did exist sucked. Available software was sparse, and the ones that did exist sucked and were expensive. Tutorials were wrong, misleading, and filled with security holes. In short, it was a horrible environment to learn programming. But, of course, I didn't know that at the time.</p>

<p>One particular type of script caught my fancy: so-called "topsites list" or "top sites list" scripts. Basically, a topsites list is a public stat tracker designed to foster competition between a group of related sites. One person sets it up, encourages other people with similar sites to join, and they get ranked by their traffic. This appealed to me because it's basically a form of passive traffic for the person who controls the topsites list. Everyone else is competing to bring traffic and exposure to you, and you don't have to do anything.</p>

<p>There were a couple topsites scripts (CGI scripts implementing topsites lists) available. The most common was <a href="http://web.archive.org/web/20010413101014/http://solutionscripts.com/vault/topsites/">Solution Scripts Top Sites</a>. It came in a commercial version that cost $250 and didn't have many features, and a free version that had nearly no features. Of course, $250 was way out of my budget, so the commercial version wasn't even an option for me. There was also another available script called <a href="http://web.archive.org/web/20010424025728/http://www.animelab.com/cgi/">DTP Topsites</a>, which was a lot cheaper than $250 but still cost money (although an old free version was floating around the tubes). It was generally better than Solution Scripts Top Sites.</p>

<p>So basically, the situation was that there weren't any good free topsites scripts, and the commercial options weren't very good either but they were still out of my price range. So, I decided to try making my own. And finally, after 10 paragraphs, we come to the point where I actually start to learn some programming.</p>

<p>I started to learn Perl based on the horribly wrong tutorials and horribly bad code that was available at the time. And, to my honest surprise, I found that it was actually pretty easy. Within a couple weeks, I went from never having done any programming to having something that was roughly comparable to the commercial scripts. I called it "Aardvark Topsites", based on an inside joke and the fact that the word "aardvark" starts with aa and thus would be listed at the top of any alphabetical list. On October 11, 2000, I released the first version, 1.00.10.11 (I was ahead of the curve with this whole dates-in-the-version-number thing that is semi-popular these days). Over the next couple months I kept working on it, eventually releasing a completely rewritten version 2.0 in December of that year. The earliest version I can find on the Wayback Machine is <a href="http://web.archive.org/web/200012181029/http://www.aardvark.nu/topsites/topsites.cgi?1">a beta of 2.0</a>.</p>

<p>And that's probably enough rambling for the first article in the series. Next time, I'll talk about my first experience with the advantage of open source programming, my first (and largely unsuccessful) attempt to make money from the Internet, and how I kept pace with changing technologies as the Internet ecosystem evolved around me.</p>

<p><em>Want to keep reading? <a href="/2011/08/my-previous-life-as-a-programmerentrepreneur-part-2-software-development-business-development/">Go to Part 2 of the series!</a></em></p>
