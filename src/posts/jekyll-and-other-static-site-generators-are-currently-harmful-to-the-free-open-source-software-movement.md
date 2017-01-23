---
date: 2011-08-29
layout: post.html
tags: FOSS, Programming
title: Jekyll and other static site generators are, currently, harmful to the free, open source software movement
---

<p>My blog is powered by WordPress. WordPress remains at its core a monstrous amalgamation of PHP spaghetti code. Thus, despite the fact that WordPress is free (beer+speech), easy to use, well supported, well documented, and all that jazz... it still pains my hacker sensibilities to use it. For similar reasons, a lot of hacker types are moving away from WordPress and similar blog software to static site generators like <a href="http://jekyllrb.com/">jekyll</a>.</p>

<!--more-->

<p>Basically, the idea is that you define the components of your site (pages, blog posts, etc) in a text-based markup language, and then the static site generator will process the text files and produce static HTML files for your website. This approach has numerous advantages, mainly due to the fact that no code runs on your web-accessible server. This makes it both fast and secure. But static pages have one major drawback: if everything is just static HTML pages, there's no easy way to allow for dynamic features like comments (and, to a lesser extent, search). Using something like WordPress, you get dynamic features automatically.</p>

<p>Most people solve the comments problem by using <a href="http://disqus.com/">Disqus</a>. All you have to do is put a little bit of Javascript on your page, and Disqus will handle comments for you. It's simple, looks pretty, and integrates with all the social networking sites.</p>

<p>But there is one problem: Disqus isn't open source. So we have all these hackers rushing to switch their blogs over to static site generators with Disqus comments, which is effectively an exodus from completely free systems like WordPress to proprietary systems like Disqus. I find this to be problematic for all the same reasons that <a href="http://www.gnu.org/philosophy/">RMS and others have outlined about proprietary software</a> (and also <a href="http://www.gnu.org/philosophy/who-does-that-server-really-serve.html">software as a service</a>) over the years.</p>

<p>But the allure of these static site generators is such that they <i>feel</i> like they are the pinnacle of open source hackery goodness. The generators themselves are generally open source, and they work similarly to all the open source command line tools we know and love. But, until there is a better solution for comments than Disqus, static site generators encourage dependence on proprietary software.</p>

<p>So I guess what I'm saying is that we need an open source (preferably <a href="http://www.gnu.org/licenses/agpl.html">AGPL</a>) Disqus. Or, if such a service already exists and I've just not heard of it (certainly I'm not the first one to <a href="http://www.tildehash.com/?article=why-im-reinventing-disqus">make this point</a>), then we need to do a heck of a lot better promoting it. Otherwise, all the user-generated content in the form of blog comments will be perpetually locked in Disqus's proprietary vault.</p>

<p><em>Edit 2012-02-02:</em> In the comments, <a href="http://www.jeremyscheff.com/2011/08/jekyll-and-other-static-site-generators-are-currently-harmful-to-the-free-open-source-software-movement/#comment-2021">Haschek</a> provided a link to a project called <a href="https://github.com/phusion/juvia">Juvia</a> which is "an open source commenting system ... similar to Disqus and IntenseDebate". If you have the same concerns as me, take a look at Juvia if you're in need of a standalone commenting system.</p>

<p><em>Edit 2017-01-22:</em> Uh... I think I'm moving this blog to a static site generator, for all the typical reasons. What about comments? I think... no comments. I guess that's kind of sad, but comments seem like more of a marginal benefit now, at least for my rarely-updated blog.</p>

<h2 id="comments">53 archived comments</a>
</h2>

<ol id="commentlist">

    <li class="comment even thread-even depth-1" id="comment-313">
    <p>What's funny is, you seemed to be annoyed about this.. yet you freely use "free software" and "open source" interchangeably.</p>
    <p><cite>Comment by joey &#8212; August 29, 2011 @ <a href="#comment-313">8:07 pm</a></cite> </p>
    </li>

    <li class="comment byuser comment-author-admin bypostauthor odd alt thread-odd thread-alt depth-1" id="comment-314">
    <p>joey: I don't see how that's relevant. In the context of this post, the distinction between free software and open source software doesn't matter. When it does matter (which is rarely), I'm more precise.</p>
    <p><cite>Comment by admin &#8212; August 29, 2011 @ <a href="#comment-314">8:49 pm</a></cite> </p>
    </li>

    <li class="comment even thread-even depth-1" id="comment-316">
    <p>Maybe it's just me, but Disqus comments never seem to work for me.  If I want to leave a comment and it's Disqus, I generally don't.  Much as WordPress software irritates me by stripping out code it doesn't like, I'd switch back to Windows before tying myself to Disqus.</p>
    <p><cite>Comment by <a href='http://laurelrusswurm.wordpress.com/' rel='external nofollow' class='url'>Laurel L. Russwurm</a> &#8212; August 30, 2011 @ <a href="#comment-316">2:12 am</a></cite> </p>
    </li>

    <li class="comment odd alt thread-odd thread-alt depth-1" id="comment-317">
    <p>A few months ago, I read from Karsten Wade on identi.ca a mention about this, suggesting Automatic Inc people probably would be the best candidate for hosting a Disqus like SaaS, but opensource at its core. I know SaaS is something you are warning about, but probably some JavaScript could probably develop a kind of plugin to Jekyll or so, in order to let people share hosted comments subsystem.</p>
<p>I really don't understand how the Disqus API works in a static html page, but probably this is the hardest thing to achieve in order to being able to embed comments hosted in other site.</p>
    <p><cite>Comment by <a href='http://tzkmx.wordpress.com/' rel='external nofollow' class='url'>Jesús Franco</a> &#8212; August 30, 2011 @ <a href="#comment-317">2:16 am</a></cite> </p>
    </li>

    <li class="comment even thread-even depth-1" id="comment-318">
    <p>@joey: Perhaps you are confusing concern with annoyance. Also, you are an arse weasel.</p>
    <p><cite>Comment by anon &#8212; August 30, 2011 @ <a href="#comment-318">4:47 am</a></cite> </p>
    </li>

    <li class="comment odd alt thread-odd thread-alt depth-1" id="comment-321">
    <p>The way I see it, if those systems make static webpages, why don't we add static comments to that? Anyway, a lot of us are already using some form of captcha or comments moderation, so it could be seen as comment moderation and after moderated they would appear on the static webpage.</p>
    <p><cite>Comment by <a href='http://gedece.blogspot.com/' rel='external nofollow' class='url'>Gustavo Campanelli</a> &#8212; August 30, 2011 @ <a href="#comment-321">1:53 pm</a></cite> </p>
    </li>

    <li class="comment even thread-even depth-1" id="comment-322">
    <p>Perhaps my comment system isn't superior to Disqus yet, but I think it does a very nice job in comparison to other comment systems like WordPress' and that other one people using Drupal seem to like. There are only a few things it needs still:</p>
<p>1. Better style<br />
2. Ability to edit comments<br />
3. Some form of restricting name usage</p>
<p>As it sits, everything is saved on the server running the script. I actually put in code to stop the script from being used on remote websites. It wouldn't be hard for someone to take my comment system, remove those few lines, and thereby create a service like Disqus. If anyone's interested, it's AGPL, so go for it :)</p>
    <p><cite>Comment by <a href='http://www.tildehash.com/' rel='external nofollow' class='url'>Jacob Barkdull</a> &#8212; August 30, 2011 @ <a href="#comment-322">2:12 pm</a></cite> </p>
    </li>

    <li class="comment odd alt thread-odd thread-alt depth-1" id="comment-325">
    <p>My main issue with your post is, that it blames Jekyll and other static site generators for the spreading use of Disqus. I've seen as many wordpress and other non-static sites use Disqus as I've seen static ones, simply because Disqus gets the job done, and most comment systems that come with various blog software (WordPress included) are horribly broken and useless.</p>
<p>It's not the static generators that hurt FOSS, it's Disqus. Present an open source alternative, that works at least half aswell, and many people (myself included) will switch that very instant. But as it currently stands, if I want comments on my site, I don't really have any other option except rolling my own. And that's the last thing I'll do.</p>
    <p><cite>Comment by <a href='http://asylum.madhouse-project.org/' rel='external nofollow' class='url'>Gergely Nagy</a> &#8212; August 30, 2011 @ <a href="#comment-325">6:10 pm</a></cite> </p>
    </li>

    <li class="comment even thread-even depth-1" id="comment-327">
    <p>"Present an open source alternative, that works at least half aswell, and many people (myself included) will switch that very instant."</p>
<p>Here in lies the crux of the matter. Open sores folks are always the first to tell others what they should and shouldn't use in the name of "freedom", but don't provide an equivalent or better solution to the problem. In this guys case, he throws blame at the innocent out of frustration, seems quite childish.</p>
    <p><cite>Comment by sulfide &#8212; August 30, 2011 @ <a href="#comment-327">10:00 pm</a></cite> </p>
    </li>

    <li class="comment odd alt thread-odd thread-alt depth-1" id="comment-329">
    <p>here is someone working on a clone:<br />
<a href="http://www.tildehash.com/?article=why-im-reinventing-disqus" rel="nofollow">http://www.tildehash.com/?article=why-im-reinventing-disqus</a></p>
    <p><cite>Comment by eMBee &#8212; August 30, 2011 @ <a href="#comment-329">11:36 pm</a></cite> </p>
    </li>

    <li class="comment even thread-even depth-1" id="comment-330">
    <p>Well, there's Dokuwiki (<a href="http://www.dokuwiki.org/" rel="nofollow">http://www.dokuwiki.org/</a>) which is GPL and works as a blog with comments with the BlogTNG plugin (<a href="http://www.dokuwiki.org/plugin:blogtng" rel="nofollow">http://www.dokuwiki.org/plugin:blogtng</a>), especially if used with the mnml-blog template/skin/theme/whatever-you-want-to-call-it (<a href="http://www.dokuwiki.org/template:mnml-blog" rel="nofollow">http://www.dokuwiki.org/template:mnml-blog</a>)</p>
<p>The author of the template's site: <a href="http://blog.andreas-haerter.com/" rel="nofollow">http://blog.andreas-haerter.com/</a></p>
<p>And mine: <a href="http://linuxisit.com/" rel="nofollow">http://linuxisit.com</a></p>
<p>Has been working well for me.</p>
<p>cheers<br />
mark</p>
    <p><cite>Comment by <a href='http://linuxisit.com/' rel='external nofollow' class='url'>mark</a> &#8212; August 31, 2011 @ <a href="#comment-330">12:44 am</a></cite> </p>
    </li>

    <li class="comment byuser comment-author-admin bypostauthor odd alt thread-odd thread-alt depth-1" id="comment-331">
    <p>mark: Correct me if I'm wrong, but that just looks like a WordPress equivalent shoehorned into a wiki engine. I don't see how that serves the same market as static site generators.</p>
    <p><cite>Comment by admin &#8212; August 31, 2011 @ <a href="#comment-331">12:48 am</a></cite> </p>
    </li>

    <li class="pingback even thread-even depth-1" id="comment-332">
        <p>[...] jazz… it still pains my hacker sensibilities to use it. For similar reasons, a lot of hacker... Read more...   Categories: Linux&nbsp;&nbsp;    &nbsp;   Share |              Related [...]</p>
    <p><cite>Pingback by <a href='http://www.syngu.com/development/319152350/static-site-generators-harmful-to-free-open-source-software-movement/' rel='external nofollow' class='url'>Static Site Generators, Harmful to Free/Open... | Linux | Syngu</a> &#8212; August 31, 2011 @ <a href="#comment-332">1:39 am</a></cite> </p>
    </li>

    <li class="comment odd alt thread-odd thread-alt depth-1" id="comment-333">
    <p>Joomla! is the answer.. Opensource and powerful, with plenty of commenting systems plus loads of other great extensions and themes. Problem solved!</p>
    <p><cite>Comment by <a href='http://www.patrickmcgonigle.com/' rel='external nofollow' class='url'>Patrick</a> &#8212; August 31, 2011 @ <a href="#comment-333">7:44 am</a></cite> </p>
    </li>

    <li class="comment even thread-even depth-1" id="comment-334">
    <p>admin/jeremy,</p>
<p>Yes, that's correct. When I posted I was just thinking of Free alternatives, not specifically static site generators. My bad. Still, though, it might be work a look.</p>
<p>cheers<br />
mark</p>
    <p><cite>Comment by <a href='http://linuxisit.com/' rel='external nofollow' class='url'>mark</a> &#8212; August 31, 2011 @ <a href="#comment-334">8:03 am</a></cite> </p>
    </li>

    <li class="comment byuser comment-author-admin bypostauthor odd alt thread-odd thread-alt depth-1" id="comment-335">
    <p>Patrick: As I said to Mark, there is no shortage of open source blog software. The issue is static site generators, which Joomla most certainly is not.</p>
    <p><cite>Comment by admin &#8212; August 31, 2011 @ <a href="#comment-335">8:32 am</a></cite> </p>
    </li>

    <li class="pingback even thread-even depth-1" id="comment-340">
        <p>[...] Jekyll and other static site generators are, currently, harmful to the free, open source software mo... My blog is powered by WordPress. WordPress remains at its core a monstrous amalgamation of PHP spaghetti code. Thus, despite the fact that WordPress is free (beer+speech), easy to use, well supported, well documented, and all that jazz… it still pains my hacker sensibilities to use it. For similar reasons, a lot of hacker types are moving away from WordPress and similar blog software to static site generators like jekyll. [...]</p>
    <p><cite>Pingback by <a href='http://techrights.org/2011/08/31/rhel-7/' rel='external nofollow' class='url'>Links 31/8/2011: RHEL 7, LibreOffice 3.4.3 | Techrights</a> &#8212; August 31, 2011 @ <a href="#comment-340">8:48 pm</a></cite> </p>
    </li>

    <li class="comment odd alt thread-odd thread-alt depth-1" id="comment-371">
    <p>Firstly, we're making a mistake by comparing a technological advantage (that static site generators present) DIRECTLY to a philosophical one (the opensource movement).</p>
<p>There are a lot of reasons why opensource is encouraged. One of them is that hackers can play around and improve the system. But if we don't have a simple opensource JavaScript based (and PHP backend) self-hosted "script" that acts like Disqus, then are we really hackers? We talk about WordPress a lot, yet can't implement a subset of it (the commenting system)?</p>
<p>The problem is not with static site generators then, it's with us! Static site generators do have a lot of advantages (by compromising dynamicity), but we can't blame the technology on it's face value just because of our philosophical beliefs.</p>
<p>We just need to create a good commenting system, and get over it.</p>
    <p><cite>Comment by <a href='http://www.revolves.net/' rel='external nofollow' class='url'>Revolves</a> &#8212; September 4, 2011 @ <a href="#comment-371">12:07 pm</a></cite> </p>
    </li>

    <li class="comment even thread-even depth-1" id="comment-372">
    <p>Dude, your talkin bout blogs. Not software for the NSA. Blogs. Why are you so concerned about "speghetti code" when you are so willing to use such a horrid service as Disqus anyways? It doesn't concern you that you can't use your "hacker" skillz on you current Disqus installations?</p>
    <p><cite>Comment by Ed &#8212; September 4, 2011 @ <a href="#comment-372">12:29 pm</a></cite> </p>
    </li>

    <li class="comment byuser comment-author-admin bypostauthor odd alt thread-odd thread-alt depth-1" id="comment-373">
    <p>Revolves: I largely agree with you. My point is only that, in encouraging the use of static site generators now, we're effectively encouraging people to use non-free software and to lose control of their data. The fact that you or me or someone else *could* write a free replacement for Disqus doesn't change the fact that such a free replacement doesn't currently exist (or it isn't widely known, or it's not usable, or ...).</p>
<p>Ed: I'm not "so concerned" about spaghetti code. I use WordPress and think it's great, even if it's not 100% perfect. And I'm not willing to use a horrid service like Disqus which is why I am still using WordPress intead of jekyll or something similar. Working on a free Disqus replacement is on my list of things to do if I lose my current job, but as I don't personally have the time to do it now, I just wrote a short blog about it to hopefully motivate someone else to do it.</p>
    <p><cite>Comment by admin &#8212; September 4, 2011 @ <a href="#comment-373">12:38 pm</a></cite> </p>
    </li>

    <li class="comment even thread-even depth-1" id="comment-374">
    <p>Ghandi said "You must be the change you wish to see." The uncharitable translation is "PDI or STFU."</p>
<p>"Free software movement" is a historical term, no longer relevant in the social coding, GitHub world which the free software movement, when it existed, made possible; we should admire them and be grateful for them, but pretending they still mean anything is not for grownups to do.</p>
<p>Even if it did still exist, the idea that you can harm a free software movement by writing and releasing free software is ridiculous. When you write a blog post, first condense the whole post to one sentence and ask yourself if the sentence makes any sense.</p>
<p>Disqus annoys me too, click my name for why, but less falling sky, more simple hacks.</p>
    <p><cite>Comment by <a href='http://gilesbowkett.blogspot.com/2010/11/blog-comment-similarity-detector-free.html' rel='external nofollow' class='url'>Giles Bowkett</a> &#8212; September 4, 2011 @ <a href="#comment-374">12:40 pm</a></cite> </p>
    </li>

    <li class="comment byuser comment-author-admin bypostauthor odd alt thread-odd thread-alt depth-1" id="comment-375">
    <p>Giles: If I condensed this post into one sentence, it'd be "Static site generators are cool, but the only way to easily get comments is to use a proprietary service, which sucks and is a step back in freedom relative to traditional solutions like WordPress." I think that sentence makes sense.</p>
    <p><cite>Comment by admin &#8212; September 4, 2011 @ <a href="#comment-375">12:48 pm</a></cite> </p>
    </li>

    <li class="comment even thread-even depth-1" id="comment-376">
    <p>Stupid post aside, this is funny because before WP became the dominant blog platform, there was Movable Type which, while it had its own license problems, did static site generation, including updating pages on new comments.</p>
    <p><cite>Comment by Jay &#8212; September 4, 2011 @ <a href="#comment-376">3:02 pm</a></cite> </p>
    </li>

    <li class="comment byuser comment-author-admin bypostauthor odd alt thread-odd thread-alt depth-1" id="comment-377">
    <p>Jay: WordPress has various plugins that can do the same thing, but they aren't as fun as dedicated static site generators. It's the workflow that is key differentiator for jekyll and friends.</p>
    <p><cite>Comment by admin &#8212; September 4, 2011 @ <a href="#comment-377">3:22 pm</a></cite> </p>
    </li>

    <li class="comment even thread-even depth-1" id="comment-379">
    <p>This is a solution looking for a problem.  Just because a site is statically generated doesn't mean that you can't display dynamically generated content.  You don't need to invent some bloated, open SaaS platform for blog comments.  Just keep it simple, stupid.  If you can't figure out how to embed dynamic content into a static page then your tech blog is going to have a much more immediate dilemma than being powered by WordPress.</p>
    <p><cite>Comment by <a href='http://mvanveen.net/' rel='external nofollow' class='url'>mvanveen</a> &#8212; September 4, 2011 @ <a href="#comment-379">5:48 pm</a></cite> </p>
    </li>

    <li class="comment odd alt thread-odd thread-alt depth-1" id="comment-380">
    <p>It seems like your attacking a software solution based on the fact you don't like how most people solve their dynamic sitepart problem. And to put the icing on the cake you want others to develop software for you. </p>
<p>You can create a javascript/ajax based commenting system that you can include with one file. If you use CouchDB you don't even need a server side language.</p>
<p>Another solution is to hack the static generator to allow parts to be dynamic. No one ordered you to treat the generator as a black box.</p>
    <p><cite>Comment by david &#8212; September 4, 2011 @ <a href="#comment-380">6:37 pm</a></cite> </p>
    </li>

    <li class="comment even thread-even depth-1" id="comment-382">
    <p>I don't think you've phrased properly what you actually mean (which is probably what I just did in this sentence) but I use jekyll on serverascode.com and also disqus. I'd prefer not to use disqus, but I want a static site, plain html, no php AND comments.</p>
<p>It'd be great if there as an open disqus of some kind. But it'd be great if there was an open social network as well. Clearly this takes some cash given how the Internet currently works. If the internet was more like distributed torrents or something. :) But then I'd be out of a job. :)</p>
    <p><cite>Comment by <a href='http://serverascode.com/' rel='external nofollow' class='url'>curtis</a> &#8212; September 4, 2011 @ <a href="#comment-382">10:02 pm</a></cite> </p>
    </li>

    <li class="comment byuser comment-author-admin bypostauthor odd alt thread-odd thread-alt depth-1" id="comment-383">
    <p>mvanveen: You are correct, but in practice, most people just use Disqus and forget it. Free software isn't just about writing some arcane lisp software that solves everything for you and only you.</p>
<p>david: I don't think you read the article. It concludes with "So I guess what I'm saying is that we need an open source (preferably AGPL) Disqus." I am aware that it is technically possible to do damn near anything, but the point is that nobody's sufficiently done it yet so in practice content is being locked up in proprietary systems. This is a step back relative to things like WordPress.</p>
    <p><cite>Comment by admin &#8212; September 4, 2011 @ <a href="#comment-383">10:07 pm</a></cite> </p>
    </li>

    <li class="comment even thread-even depth-1" id="comment-473">
    <p>I personally think the largest concern with using something like disqus is the fact that they're most likely selling your users' data to other parties in the process, e.g. whomever visits your site becomes the product in the form of data for 3rd parties.</p>
<p>Anywhom.</p>
    <p><cite>Comment by <a href='http://fused.com/' rel='external nofollow' class='url'>David</a> &#8212; September 11, 2011 @ <a href="#comment-473">9:06 pm</a></cite> </p>
    </li>

    <li class="comment odd alt thread-odd thread-alt depth-1" id="comment-638">
    <p>I like disqus but @David if you say Disqus is selling users' data I should check that out.</p>
    <p><cite>Comment by <a href='http://www.crowdcontrolmarketing.com/' rel='external nofollow' class='url'>SEO Singapore</a> &#8212; October 4, 2011 @ <a href="#comment-638">12:21 am</a></cite> </p>
    </li>

    <li class="comment even thread-even depth-1" id="comment-705">
    <p>Use Ikiwiki or similar. Static html that is regenerated as needed (i.e. for comments) from sources stored in a vcs. Ikiwiki is a nice, modern Perl code base. Others are available in other languages.</p>
    <p><cite>Comment by Kelly Clowers &#8212; October 13, 2011 @ <a href="#comment-705">3:58 pm</a></cite> </p>
    </li>

    <li class="comment odd alt thread-odd thread-alt depth-1" id="comment-970">
    <p>David – Disqus doesn't sell your information to 3rd parties. Our privacy policy is here: <a href="http://docs.disqus.com/help/30/" rel="nofollow">http://docs.disqus.com/help/30/</a></p>
    <p><cite>Comment by <a href='http://benv.ca/' rel='external nofollow' class='url'>Ben Vinegar</a> &#8212; November 14, 2011 @ <a href="#comment-970">6:37 pm</a></cite> </p>
    </li>

    <li class="comment even thread-even depth-1" id="comment-1008">
    <p>Ben: You're kind of splitting hairs here. From the policy: "We may use and disclose non-personal information for any number of reasons and with any number of third parties". I'm guessing David has issue with that statement, especially given that you define the IP address as "non-personal".</p>
<p>Many people, whether you agree with them or not, do not feel comfortable being tracked as they move between pages with Disqus comments. Of course the same concerns apply to similar services, like Google Analytics (which I do use).</p>
    <p><cite>Comment by <a href='http://wxs.ca/' rel='external nofollow' class='url'>Xavier</a> &#8212; November 18, 2011 @ <a href="#comment-1008">5:38 pm</a></cite> </p>
    </li>

    <li class="comment odd alt thread-odd thread-alt depth-1" id="comment-1236">
    <p>It's apparently tangential but perhaps fundamental to the issue at-hand to inquire: What's the utility of comments, anyway? We each probably have our opinion on the topic. I generally find them useful for my ego, occasionally interesting or even enlightening, and overall offer either the silo of your WP database or effective 3rd-party ownership of Disqus.</p>
<p>I don't have a particular issue with Disqus, and have used the service periodically. I currently don't enable comments, and have considered how I might direct motivated readers to Twitter or email instead. Greg Knauss is trying something similarly minded, but much lighter, with Zezim (<a href="http://extramoon.tumblr.com/" rel="nofollow">http://extramoon.tumblr.com/</a>). I have no idea how far he's getting with it; it may collapse or already have.</p>
    <p><cite>Comment by <a href='http://erectlocution.com/' rel='external nofollow' class='url'>Daniel Black</a> &#8212; December 13, 2011 @ <a href="#comment-1236">4:01 pm</a></cite> </p>
    </li>

    <li class="comment even thread-even depth-1" id="comment-2021">
    <p>The Ruby guys could use Juvia:</p>
<p>"Juvia is an open source commenting system. It allows you to outsource your commenting needs to an external system so that you don't have to build your own commenting system for each website or each web app. Embedding a Juvia commenting page only involves pasting a JavaScript snippet into your web page."</p>
<p><a href="https://github.com/phusion/juvia" rel="nofollow">https://github.com/phusion/juvia</a></p>
<p>It looks very promising and it is very actively developed. I really that there is someone who has enough time porting this to the PHP world :)</p>
    <p><cite>Comment by <a href='http://blog.eye48.com/' rel='external nofollow' class='url'>Haschek</a> &#8212; February 2, 2012 @ <a href="#comment-2021">3:03 pm</a></cite> </p>
    </li>

    <li class="pingback odd alt thread-odd thread-alt depth-1" id="comment-12600">
        <p>[...] criticism of static generators is that they encourage the use of proprietary systems such as Disqus. However, [...]</p>
    <p><cite>Pingback by <a href='http://www.plugin-directory.com/5-minimalist-static-blog-generators-to-check-out/' rel='external nofollow' class='url'>5 Minimalist Static Blog Generators to Check Out - Plugin Directory</a> &#8212; March 22, 2012 @ <a href="#comment-12600">1:41 pm</a></cite> </p>
    </li>

    <li class="comment even thread-even depth-1" id="comment-14296">
    <p>One potential option is to limit commenting to people who make pull requests on GitHub. :)</p>
    <p><cite>Comment by <a href='http://jonathancutrell.com/' rel='external nofollow' class='url'>Jonathan</a> &#8212; March 28, 2012 @ <a href="#comment-14296">4:25 pm</a></cite> </p>
    </li>

    <li class="comment odd alt thread-odd thread-alt depth-1" id="comment-14771">
    <p>Here's a Rails commenting app from '07: <a href="http://code.google.com/p/comment-it/" rel="nofollow">http://code.google.com/p/comment-it/</a></p>
    <p><cite>Comment by <a href='http://farazyashar.com/' rel='external nofollow' class='url'>Faraz Yashar</a> &#8212; April 2, 2012 @ <a href="#comment-14771">9:34 pm</a></cite> </p>
    </li>

    <li class="pingback even thread-even depth-1" id="comment-17365">
        <p>[...] Kontrolle über seine Daten an eine externe Stelle abgegeben muss oder nicht. Diese Bedenken hat Jeremy Scheff auf den Punkt [...]</p>
    <p><cite>Pingback by <a href='http://www.gambaru.de/blog/2012/04/21/die-eigene-homepage-cms-blogkompilierer-und-statisches-xhtml/' rel='external nofollow' class='url'>Die eigene Homepage: CMS, Blogkompilierer und statisches XHTML &laquo; gambaru.de</a> &#8212; April 20, 2012 @ <a href="#comment-17365">11:01 pm</a></cite> </p>
    </li>

    <li class="comment odd alt thread-odd thread-alt depth-1" id="comment-25719">
    <p>What about having no comments at all on your website. The web is still free and we can all trackback, comment on Twitter/Identi.ca, etc.</p>
<p>RMS by the way has all his page without comment and apparently static. I really see no harm on it. It's just a matter of freedom of choice. Most likely 99% will stick with WordPress.</p>
    <p><cite>Comment by <a href='http://lucasarruda.com/' rel='external nofollow' class='url'>Lucas Arruda</a> &#8212; June 4, 2012 @ <a href="#comment-25719">12:47 pm</a></cite> </p>
    </li>

    <li class="comment even thread-even depth-1" id="comment-26598">
    <p>Perhaps late to the game, considering when most of the comments here were made, but there's a man who has a decent alternative: <a href="http://camendesign.com/code/nononsense_forum" rel="nofollow">http://camendesign.com/code/nononsense_forum</a></p>
<p>It's not really commenting since everything is done via a forum, but it's quite clean, indiscriminate and free + open source. Much better than any of the convoluted solution presented so far.</p>
    <p><cite>Comment by svr89 &#8212; June 11, 2012 @ <a href="#comment-26598">12:43 pm</a></cite> </p>
    </li>

    <li class="comment odd alt thread-odd thread-alt depth-1" id="comment-45339">
    <p>&gt; But the allure of these static site generators is such that they feel like they are the pinnacle of open source hackery goodness.</p>
<p>I try to avoid embedding _any_ external services on a website - even if it was "free" or "open source".</p>
<p>A week ago I've looked through the options for my ex-WP blog, which is now migrated to Jekyll.</p>
<p>For 1-2 hours I compared Disqus to IntenseDebate and the like. Feeling repelled while doing so, I finally found this solution:</p>
<p> <a href="http://hezmatt.org/~mpalmer/blog/2011/07/19/static-comments-in-jekyll.html" rel="nofollow">http://hezmatt.org/~mpalmer/blog/2011/07/19/static-comments-in-jekyll.html</a></p>
<p>It's even utilizing ones existing email spam filter for coping with comments.</p>
<p>So here we have it: The pinnacle of open source hackery goodness 😉</p>
    <p><cite>Comment by <a href='http://groovy-skills.com/' rel='external nofollow' class='url'>Dice</a> &#8212; August 19, 2012 @ <a href="#comment-45339">2:41 pm</a></cite> </p>
    </li>

    <li class="comment even thread-even depth-1" id="comment-49266">
    <p>You could use openshift free and fire up a juvia app/instance and then use that for commenting...</p>
<p><a href="https://github.com/openshift/juvia-example" rel="nofollow">https://github.com/openshift/juvia-example</a></p>
    <p><cite>Comment by <a href='http://inthenoc.com/' rel='external nofollow' class='url'>Jonathan Brown</a> &#8212; September 16, 2012 @ <a href="#comment-49266">12:44 pm</a></cite> </p>
    </li>

    <li class="comment odd alt thread-odd thread-alt depth-1" id="comment-93933">
    <p>Hello,</p>
<p>I use Jekyll for building my website and I have no problems for comments:<br />
An HTML form allow the users to post comments, and the comments are sent to a CGI script.<br />
The CGI script sends me the comments by email, and I use the Jekyll static comments plugin render them.</p>
<p>Here is a blog post about this Jekyll plugin:<br />
<a href="http://hezmatt.org/~mpalmer/blog/2011/07/19/static-comments-in-jekyll.html" rel="nofollow">http://hezmatt.org/~mpalmer/blog/2011/07/19/static-comments-in-jekyll.html</a></p>
    <p><cite>Comment by grumpyHacker &#8212; July 25, 2013 &#8212; <a href="#comment-93933">1:56 pm</a></cite> </p>
    </li>

    <li class="comment even thread-even depth-1" id="comment-94448">
    <p>Harmful? Since when non-open source projects are harmful to anything? This is like saying that deers are harmful to the porcupine movement. Closed and open source software are two elements of an overall software ecology. Of course it's always great to have open source equivalents, but from that to harm I think you are stretching your title by a ton ... and I'm probably contributing by posting something that states the blatantly obvious</p>
    <p><cite>Comment by me &#8212; July 28, 2013 @ <a href="#comment-94448">9:48 am</a></cite> </p>
    </li>

    <li class="comment odd alt thread-odd thread-alt depth-1" id="comment-97524">
    <p>Have a look at discourse.org</p>
<p>It's spearheaded by Jeff Atwood from StackOverflow, 100% open source and already employed by big sites like HowToGeek and BoingBoing as a replacement for Disqus. It's not strictly a commenting engine, it's an entire forum platform, but it works supremely well as both.</p>
<p>I love the new approach that static site generators like Jekyll are bringing to the table, and I don't fear for open source whatsoever. What we'll do is offload the dynamic content to open source "apps" like Discourse and Juvia; everyone's happy and the open web powers onward.</p>
    <p><cite>Comment by <a href='http://jmonkeyengine.org/' rel='external nofollow' class='url'>Erlend Sogge Heggen</a> &#8212; August 13, 2013 @ <a href="#comment-97524">8:26 am</a></cite> </p>
    </li>

    <li class="comment even thread-even depth-1" id="comment-98792">
    <p>You seem to be annoyed about Disqus (which is legit). Personally, I'm not commenting on those websites.<br />
But please, don't say "Static site generators are harmful to the free, open source software movement" because this is just false. Your title is untruthful, if you want to complain about Disqus, don't "attack" Jekyll or the others generators.<br />
Most site generators are licensed under ISC, GPL or other free licenses, so I don't understand what's the problem.<br />
If you don't want to use Disqus, don't do it. There are plenty of comment systems (jskomment, commentcava and we also have a Jekyll plugin).<br />
I have two Jekyll blogs (without comments) and I have not the impression to violate free software.</p>
    <p><cite>Comment by <a href='http://tetedulinuxien.fr/' rel='external nofollow' class='url'>Ypnose</a> &#8212; August 19, 2013 @ <a href="#comment-98792">3:47 pm</a></cite> </p>
    </li>

    <li class="comment odd alt thread-odd thread-alt depth-1" id="comment-114466">
    <p>I can appreciate your sentiment, but there are two major issues here:</p>
<p>1) The allure for me is that I no longer have a database I have to maintain. That's one reason I prefer offloading my commenting engine to someone else. People aren't moving away from WordPress because Jekyll is any more open-source, a major component is that we don't have to worry about all the security patches, database management and online mode.</p>
<p>2) WordPress comment filtering sucks. That's why people use Livefyre or Disqus move to those platforms, because they do a better job. You mentioned that if there was something better that's open source then you'd use it, but it brings us right back to having to manage some sort of database.</p>
<p>I agree with a lot of the other comments, the post title seems more like link bait than a valid argument.</p>
    <p><cite>Comment by <a href='http://realchaseadams.com/' rel='external nofollow' class='url'>Chase Adams</a> &#8212; December 28, 2013 @ <a href="#comment-114466">5:44 pm</a></cite> </p>
    </li>

    <li class="comment even thread-even depth-1" id="comment-117290">
    <p>I'm actually developing an open source alternative to Disqus, licensed under the AGPL as you suggested :-)</p>
<p>It's Debiki Embedded Comments, <a href="http://www.debiki.com/embedded-comments" rel="nofollow">http://www.debiki.com/embedded-comments</a></p>
<p>It's available as a service too, in case people would like to try it out or use it without setting up their own server.</p>
<p>Debiki has some Wiki-like features; it currently uses a novel 2D layout that hopefully contributes to a more varied discussion; and it has various features intended to save people's time.</p>
<p>Feedback would be very welcome.</p>
<p>I noticed you mentioned Juvia. There's also Isso, <a href="http://posativ.org/isso" rel="nofollow">http://posativ.org/isso</a>.</p>
    <p><cite>Comment by <a href='http://www.debiki.com/' rel='external nofollow' class='url'>KajMagnus</a> &#8212; February 8, 2014 @ <a href="#comment-117290">8:40 pm</a></cite> </p>
    </li>

    <li class="comment odd alt thread-odd thread-alt depth-1" id="comment-292475">
    <p>Free, open source projects are harmful to free, open source projects?<br />
Wait, what?...</p>
    <p><cite>Comment by <a href='http://aveame.github.io/' rel='external nofollow' class='url'>av</a> &#8212; May 14, 2015 @ <a href="#comment-292475">3:14 pm</a></cite> </p>
    </li>

    <li class="comment even thread-even depth-1" id="comment-312238">
    <p>I created a service which allows to receive comments on Github Pages. Rather than storing it in the service database, it uses the Github API to commit comments in Jekyll files. You can try it there : <a href="https://commentit.io" rel="nofollow">https://commentit.io</a></p>
    <p><cite>Comment by <a href='http://blog.guilro.com/' rel='external nofollow' class='url'>Guillaume Royer</a> &#8212; October 5, 2015 @ <a href="#comment-312238">6:37 am</a></cite> </p>
    </li>

    <li class="comment odd alt thread-odd thread-alt depth-1" id="comment-326107">
    <p>Have you heard of sandstorm.io?  This seems like a perfect problem for a sandstorm app...</p>
    <p><cite>Comment by <a href='http://wondering.xyz' rel='external nofollow' class='url'>Micah</a> &#8212; September 25, 2016 @ <a href="#comment-326107">5:53 pm</a></cite> </p>
    </li>

    <li class="comment even thread-even depth-1" id="comment-329076">
    <p>Can we build this with PouchDB and CouchDB and sending data over CORS at this point? Essentially, we'd be crafting our own comments API for our own database, leveraging the sync feature of PouchDB (and CouchDB) to keep things up to date and synced up.</p>
    <p><cite>Comment by <a href='http://twitter.com/IdeasAndAction' rel='external nofollow' class='url'>Costa</a> &#8212; December 20, 2016 @ <a href="#comment-329076">4:56 am</a></cite> </p>
    </li>


</ol>
