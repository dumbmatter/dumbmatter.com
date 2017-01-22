---
date: 2013-01-14
layout: post.html
tags: football, programming, sports, statistics
title: Did Adrian Peterson actually rush for more yards than Eric Dickerson but have it go unnoticed due to measurement error?
---

<p>Despite miraculously recovering from ACL surgery and successfully leading his team for the playoffs, Adrian Peterson tragically missed the all time rushing record by 9 yards.</p>

<p><em>...or did he?</em></p>

<p>Let's think about how the NFL measures yardage. They take the difference between where the ball was before the play and where the ball is after the play, and then they round to the nearest integer. What happens if you rush for half a yard? It'll get recorded as either 0 yards or 1 yard. Spread out over an entire season, and this kind of rounding error can have a big impact.</p>

<!--more-->

<p>So here's the idea: let's calculate the odds that Adrian Peterson actually outrushed Eric Dickerson. To do this, I made some assumptions and then ran a bunch of simulations.</p>

<p>The main assumption was that the length of every rushing attempt could fall anywhere within -0.5 and +0.5 yards of the reported total, with uniform probability. I think that makes sense, because a carry reported as 6 yards could just as easily be 5.7 yards or 6.4 yards or whatever. There are obviously some caveats to that, but I think it's good enough for some quick estimates.</p>

<p>Based on that assumption, I took the actual rushing totals and added a random error for each carry to come up with one realization of what true unrounded yardage total could have led to the total in the record books. I repeated this a lot of times, for both Peterson and Dickerson. In other words, I calculated the distributions of real rushing totals that could, through accumulated rounding errors, end up reported as 2097 yards for Peterson and 2105 yards for Dickerson. Here's what it looks like:</p>

<p><img src="/files/adrian_peterson.png" class="img-responsive"></p>

<p>Clearly, these two distributions overlap significantly. If they didn't overlap, that would mean that one player's rushing total was always higher than the other's. Instead, it means that it is possible that Peterson actually outrushed Dickerson.</p>

<p>From these simulations, it was straightforward to assign probabilities to these possibilities by testing which player had more simulated years as the overall rushing champ. I found that 85% of the time, Dickerson came out on top. This means that...</p>

<p><em>There is approximately a 15% chance that Adrian Peterson actually broke Dickerson's record, but it was not noticed due errors accumulated by rounding the lengths of rushes to integer values.</em></p>

<p><a href="http://www.youtube.com/watch?v=istPbwEfVZs">Nine yards what?</a> Indeed.</p>

<p>For completeness, here is the MATLAB code I used to run the simulations, generate the plot, and estimate the probabilities.</p>

    % Simulations
    N = 100000; % Number of random seasons to simulate
    yp = zeros(1, N) + 2097; % Peterson's total yards for each random season
    yd = zeros(1, N) + 2105; % Dickerson's total yards for each random season
    for i=1:N
        % For each player in each simulated season, add a random error (between
        % -0.5 and 0.5) for each carry
        yp(i) = yp(i) + sum(rand(348, 1) - 0.5);
        yd(i) = yd(i) + sum(rand(379, 1) - 0.5);
    end

    % The sum of random uniform numbers produces a normal distrubtion..
    x = linspace(2070, 2130, 500);
    figure;
    h = plot(x, normpdf(x, mean(yp), std(yp)), x, normpdf(x, mean(yd), std(yd)));
    legend('Adrian Peterson', 'Eric Dickerson', 'Location', 'Northwest');
    xlabel('Total Yards');
    ylabel('Probability Density');
    xlim([2070, 2130]);

    % Line styling
    set(h(1), 'Color', [122, 16, 228]/255, 'LineWidth', 3);
    set(h(2), 'Color', [0 0 1], 'LineWidth', 3);

    sum(yp > yd)/N % Probability that Peterson's total is higher than Dickerson's

<h2 id="comments">1 archived comment</h2>

<ol id="commentlist">

    <li class="pingback even thread-even depth-1" id="comment-97094">
        <p>[&#8230;] According to Jeremy Scheff, a graduate student at Rutgers University who specializes in data analysis, Peterson might have actually beat Eric Dickerson&#8217;s record. [&#8230;]</p>
    <p><cite>Pingback by <a href='http://sportingsota.com/2013/02/27/there-is-a-chance-adrian-peterson-actually-beat-eric-dickersons-rushing-record/' rel='external nofollow' class='url'>There is a chance Adrian Peterson actually beat Eric Dickerson&#039;s rushing record - Sporting Sota - A Minnesota Sports Site - Vikings, Twins, Grizzlies, Wild, and Golden Gophers</a> &#8212; August 9, 2013 @ <a href="#comment-97094">11:28 pm</a></cite> </p>
    </li>


</ol>
