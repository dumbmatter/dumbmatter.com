---
date: 2011-08-13
layout: post.html
tags: matlab, politics, programming, statistics
title: Relationship between Ames Straw Poll and Iowa Caucuses results
---

In recent weeks, there have been a lot of people decrying the importance of the Ames Straw poll, likely because the mainstream media is worried that Ron Paul will win it. <a href="http://www.usnews.com/news/articles/2011/08/13/the-ames-straw-poll-has-limited-predictive-value">Here's one prominent example, titled "The Ames Straw Poll Has Limited Predictive Value".</a> Of course, if you actually read the article, it doesn't really demonstrate what is claimed in the title. So, I wanted to look at this issue a little more systematically. Unfortunately, <a href="http://fivethirtyeight.blogs.nytimes.com/2011/08/13/why-ames-actually-matters/">I got scooped by that bastard Nate Silver who wrote an article about this exact issue this morning</a>, after I had already almost finished mine. So instead, this will be an exercise in open source journalism.

<!--more-->

To assess the predictive power of the Straw Poll, a first try would be to just compare the percentages candidates won in the Straw Poll with the percentages they won in the Caucuses. But not all candidates participated in both. Some candidates hadn't entered the race before the Straw Poll. Others dropped out before the Caucuses. Still others ignored both. I think it makes most sense to remove those data points. This excludes, amongst others, McCain in 2000 and Fred Thompson in 2008, as they hadn't declared their candidacies before the Straw Poll; as well as Giuliani and McCain in 2008, as they purposely skipped the Straw Poll. The remaining data points look like this:

<img src="/files/strawpoll.png" class="img-responsive">

If you look at <a href="http://fivethirtyeight.blogs.nytimes.com/2011/08/13/why-ames-actually-matters/">the first plot of the aforementioned FiveThirtyEight article</a>, it's clear that they didn't remove the data points like I did. You can see this by looking at the points in their plot that have near 0% support in one poll but significant support in the other. But it doesn't change the R<sup>2</sup> much. Mine is a bit higher, 0.64 rather than 0.58. So, if anything, the Straw Poll has been slightly more predictive of the Caucuses than the FiveThirtyEight article suggests, although their cautionary note about sample size still applies:

> Now for the caution: because the Ames Straw Poll has only been conducted five times in the past, there's not all that much precedent to rely upon. In other words, precedent could easily be broken. (This is a common, and underappreciated, problem when working with elections-related data.) Particularly if Mr. Paul wins, the media may dismiss the importance of the contest. And we have the unusual circumstance this year of a candidate who could be a big factor in Iowa, Rick Perry, having entered the race quite late. (Mr. Perry will announce his candidacy Saturday - in South Carolina.)

And now, as promised, the open source journalism part. I scraped my data from Wikipedia articles that all are well sourced and don't seem to have been vandalized recently: <a href="http://en.wikipedia.org/wiki/Iowa_caucuses#Past_winners">Iowa caucuses</a> and <a href="http://en.wikipedia.org/wiki/Ames_Straw_Poll#Detailed_year-by-year_results">Ames Straw Poll</a>. I am a bit curious about the quality of this data, as FiveThirtyEight shows the point with the highest Ames Straw Poll vote at over 35% while Wikipedia puts the maximum at 33.6% for Pat Robertson in 1987. Maybe that is from the 1979 poll which Wikipedia says "had low voter turnout". Unfortunately, it's not easy to compare datasets as FiveThirtyEight doesn't include enough detail in their article.

Anyway, here is the data and code that produced the figure above. This script will run in MATLAB ($$$) or <a href="http://www.gnu.org/software/octave/">Octave (free)</a> (although it is a bit hacky since <a href="http://savannah.gnu.org/bugs/?33541">they output correlation coefficients slightly differently</a>).

    % Data
    % First column: Perfentage from caucus; Second column: Percentage in Ames
    % straw poll. Only for candidates participating both in:
    % http://en.wikipedia.org/wiki/Iowa_caucuses#Past_winners
    % http://en.wikipedia.org/wiki/Ames_Straw_Poll#Detailed_year-by-year_results
    x = [37 24.9; 25 33.6; 19 22.5; 11 13.5; 7 4.2]; % 1988
    x = [x; 26 23.6; 23 17.5; 18 10.5; 9 23.6; 7 7.3; 4 4.3; 1 7.3]; % 1996
    x = [x; 41 31.3; 30 20.8; 14 4.6; 9 8.9; 1 2.4]; % 2000
    x = [x; 34 18.1; 25 31.6; 10 9.1; 1 1.2]; % 2008

    figure;
    plot(x(:,2), x(:,1), 'ob', 'LineWidth', 2);
    xlabel('Ames Straw Poll percentage');
    ylabel('Iowa Caucuses percentage');

    % Linear regression
    hold on;
    xlims = get(gca, 'xlim');
    c = polyfit(x(:,2), x(:,1), 1);
    plot(xlims, polyval(c, xlims), 'b', 'LineWidth', 2);
    xlim(xlims);
    h = title('Iowa Caucuses results versus Ames Straw Poll results');
    set(h, 'FontSize', 14)

    % Correlation
    R = corrcoef(x(:,2), x(:,1));
    % Account for MATLAB/Octave corrcoef differences
    if length(R) == 1
        R2 = R^2;
    else
        R2 = R(1,2)^2;
    end
    text(30, 30, sprintf('R^2=%.2f', R2));

    set(gcf, 'PaperPosition', [0 0 6, 5]);
    print('-dpng', '-r200', 'strawpoll.png');
