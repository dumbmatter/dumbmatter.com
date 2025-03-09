---
date: 2013-11-13
layout: post.html
tags: Politics, Programming, Statistics
title: Basic income vs. basic job
---

<p><a href="http://www.chrisstucchio.com/blog/2013/basic_income_vs_basic_job.html">Chris Stucchio wrote an article</a> about the differences between <a href="http://en.wikipedia.org/wiki/Basic_income">basic income</a> and basic job policies, based on <a href="https://gist.github.com/stucchio/7447067">relatively straightforward math</a>. Briefly, basic income says give everyone money with no strings attached and get rid of other forms of welfare. Basic job is the same, except anyone who can work is mandated to work, either in a normal job like today or in a New Deal-style government works program.</p>

<p>Chris's main conclusion was that basic job came out looking way better than basic income. Additionally, a major purpose of his post was to encourage other people to play around with the math as well rather than just bloviating. Since I'm a big basic income proponent and have some quibbles with how he came to conclude that basic income doesn't look too good, I will follow his lead and play around with the math.</p>

<!--more-->

<p>I don't know Chris Stucchio and I don't know if he was inherently biased for basic income or basic job, but I'm definitely inherently biased for basic income, so take this whole post with a grain of salt. However, to give it some semblance of fairness, I'm going to write this whole thing without doing any math. I'm going to make what I think are reasonable changes to Chris's assumptions and see what that tells me. Maybe it will say basic income sucks, and then I will be sad, but I will still publish those results. You'll just have to trust that I'm telling the truth, I suppose.</p>

<p>In Chris's model, basic income is paid to everyone. It is also possible to have a system like progressive income tax, where it gradually phases out; in fact, fellow Rutgers alumnus Milton Friedman proposed to implement basic income through a negative income tax. So let's imagine some system like that and reduce the costs by 50% right off the bat.</p>

    direct_costs = num_adults * basic_income / 2

<p>Chris correctly noted that there are incentives for more work and less work in basic income. He thinks it's more likely that the negative incentive will be more prominent. I think it's more fair to just call it a wash, since it's very unclear. So I deleted that part of his model. I doubt this has a big impact on anything anyway.</p>

<p>At this point, I want to add an effect that has been neglected. Chris treated the number of disabled adults as a constant, but <a href="http://apps.npr.org/unfit-for-work/">that is likely not true</a>. So let's conservatively say 2 million people currently on disability would start working if they got a basic income, likely at some not-so-great wage.</p>

    undisabled = 2e6
    undisabled_hourly_wage = uniform(0, 10).rvs()
    undisabled_cost_benefit = -1 * undisabled * (40*52*undisabled_hourly_wage)

<p>Chris included the "JK Rowling effect", the odds that someone not forced to work a shitty job could create a great achievement that would have a significant positive economic impact, like JK Rowling writing Harry Potter while on welfare. I think there should be an additional effect for less spectacular events. With a basic income, many people would be free to pursue new career paths and start small businesses (or even bring existing careers and businesses out from under the table, as people on welfare often cannot work without facing penalties). How big is this effect? Fuck if I know. But I want to include something. Fuck, let's just say that basic income improves average productivity by something between 0 and 20%. The average hourly wage in the US is about $25/hr and I don't know if the average wage for increased productivity should be higher or lower, so let's pick it from between $10 and $30.</p>

    avg_hourly_wage = uniform(10, 30).rvs()
    productivity_multiplier = uniform(0.0, 0.2).rvs()
    productivity_cost_benefit = (-1 * labor_force * (40*52*avg_hourly_wage) *
                                 productivity_multiplier)

<p>Now let's move to basic job. Most of Chris's assumptions seem good enough. I'll make one change - the value of work from people who currently aren't working. Chris says it's worth somewhere between $0/hr and $7.25/hr, as otherwise they'd probably be working a minimum wage or higher job. Sounds reasonable enough, but there are also people who bring negative value to the table. These people would be forced to work, likely in some boring job they hate. So I'm doing this:</p>

    basic_job_hourly_productivity = uniform(-7.25, 7.25).rvs()

<p>I could definitely quibble more, but somebody could quibble with my changes too, so I don't want to go too crazy. The above changes seem reasonable enough to me. So <a href="https://gist.github.com/dumbmatter/7457890">here's my modified code</a>. Now I'm going to try to run it. This will be interesting not only to see the results,  but to see if I could make these changes without introducing a syntax error!</p>

<img src="/files/basic-income-basic-job.png" class="img-responsive dark-invert">

<p>Lower is better on these plots, so it looks like basic income wins! At least, if you agree with my completely unbiased assessment...</p>

<p><b>Update:</b> <a href="http://www.chrisstucchio.com/blog/2013/basic_income_vs_basic_job2.html">Chris posted a follow-up article</a> that I basically entirely agree with.</p>

<h2 id="comments">4 archived comments</h2>

<ol id="commentlist">

    <li class="comment even thread-even depth-1" id="comment-153214">
    <p>direct_costs = num_adults \* basic_income / 2</p>
<p>Milton Friedman's proposal looks similar to this, but he proposed the cutoff would be at twice subsistence level, assuming a 50% claw-back. So &#8216;basic income' in that formula has to be twice as high as &#8216;existential/socio-cultural minimum'</p>
    <p><cite>Comment by Raoul &#8212; July 29, 2014 @ <a href="#comment-153214">12:58 pm</a></cite> </p>
    </li>

    <li class="comment odd alt thread-odd thread-alt depth-1" id="comment-153216">
    <p>Where's the edit button I phrased that quite poorly.</p>
<p>Oh well. All I mean is, a NIT model proposes a cutoff point above the subsistence level, in correlation to the clawback rate. So the assumption remains, that anyone at any point in time can claim a check of at least subsistence level, and if they earn money on the market, the check diminishes at clawback rate.</p>
<p>So I don't quite understand how to interpret</p>
<p>direct_costs = num_adults \* basic_income / 2</p>
    <p><cite>Comment by Raoul &#8212; July 29, 2014 @ <a href="#comment-153216">1:03 pm</a></cite> </p>
    </li>

    <li class="comment even thread-even depth-1" id="comment-153219">
    <p>An alternative thing to keep in mind for keeping cost in check though, is to stop excluding existential minimum from taxation.</p>
<p>I only know the German numbers but there I know for a fact, that we're already giving the poor and middle class here tax exemptions that alone could nearly cover the supposed financing gap of basic income models.</p>
<p>I mean over 8000 euro per year per adult and nearly 8000 euro per year per child, tax free, plus income taxation starting in the low 20%s past that. plus lower rates if you have a partner for life, for one of the partners. It's a triple digit billion deal in Germany.</p>
    <p><cite>Comment by Raoul &#8212; July 29, 2014 @ <a href="#comment-153219">1:10 pm</a></cite> </p>
    </li>

    <li class="comment byuser comment-author-admin bypostauthor odd alt thread-odd thread-alt depth-1" id="comment-153256">
    <p>Raoul, it's just a rough estimate. The upper bound for no clawback would be num_adults*basic_income. Add clawback and you get something less than that. I just arbitrarily picked 1/2 as a factor to represent "there is some clawback going on". Change the 1/2 to 3/4 and it doesn't substantially change the conclusions, it just shifts the Basic Income cost curve to the right by about 1e12.</p>
    <p><cite>Comment by <a href='http://www.jeremyscheff.com/' rel='external nofollow' class='url'>Jeremy Scheff</a> &#8212; July 29, 2014 @ <a href="#comment-153256">6:31 pm</a></cite> </p>
    </li>


</ol>
