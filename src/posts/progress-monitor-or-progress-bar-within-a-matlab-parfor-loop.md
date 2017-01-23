---
date: 2011-06-11
layout: post.html
tags: matlab, programming
title: Progress monitor (or progress bar) within a MATLAB parfor loop
---

In MATLAB, it is really easy to do parallel processing of trivially parallelizable problems with a <a href="http://www.mathworks.com/help/toolbox/distcomp/parfor.html">`parfor`</a> loop. I do it all the time. It's great. A problem with this is that, if you need to parallelize something in the first place, it's typically something that takes a really long time to run. Some type of progress monitor is normally easier to make, but because `parfor` does not iterate in order and the workers cannot communicate with one another, it's a little tricky to do in the parallel case.

<!--more-->

So I made a very hacky solution to this problem. Basically, I start with a blank file (parfor_progress.txt) and add a line to it each time an iteration of the loop finishes. At that time, I also count the number of lines in parfor_progress.txt and display that as a percentage of the total number of iterations.

I put all this in a function that you can download from the <a href="http://www.mathworks.com/matlabcentral/fileexchange/32101">MATLAB Central File Exchange</a> or <a href="https://github.com/dumbmatter/parfor_progress">GitHub</a> or just copy/paste <code>parfor_progress.m</code> from here:

    function percent = parfor_progress(N)
    %PARFOR_PROGRESS Progress monitor (progress bar) that works with parfor.
    %   PARFOR_PROGRESS works by creating a file called parfor_progress.txt in
    %   your working directory, and then keeping track of the parfor loop's
    %   progress within that file. This workaround is necessary because parfor
    %   workers cannot communicate with one another so there is no simple way
    %   to know which iterations have finished and which haven't.
    %
    %   PARFOR_PROGRESS(N) initializes the progress monitor for a set of N
    %   upcoming calculations.
    %
    %   PARFOR_PROGRESS updates the progress inside your parfor loop and
    %   displays an updated progress bar.
    %
    %   PARFOR_PROGRESS(0) deletes parfor_progress.txt and finalizes progress
    %   bar.
    %
    %   To suppress output from any of these functions, just ask for a return
    %   variable from the function calls, like PERCENT = PARFOR_PROGRESS which
    %   returns the percentage of completion.
    %
    %   Example:
    %
    %      N = 100;
    %      parfor_progress(N);
    %      parfor i=1:N
    %         pause(rand); % Replace with real code
    %         parfor_progress;
    %      end
    %      parfor_progress(0);
    %
    %   See also PARFOR.

    % By Jeremy Scheff - jdscheff@gmail.com - http://www.jeremyscheff.com/

    narginchk(0, 1);

    if nargin < 1
        N = -1;
    end

    percent = 0;
    w = 50; % Width of progress bar

    if N > 0
        f = fopen('parfor_progress.txt', 'w');
        if f<0
            error('Do you have write permissions for %s?', pwd);
        end
        fprintf(f, '%d\n', N); % Save N at the top of progress.txt
        fclose(f);
        
        if nargout == 0
            disp(['  0%[>', repmat(' ', 1, w), ']']);
        end
    elseif N == 0
        delete('parfor_progress.txt');
        percent = 100;
        
        if nargout == 0
            disp([repmat(char(8), 1, (w+9)), char(10), '100%[', repmat('=', 1, w+1), ']']);
        end
    else
        if ~exist('parfor_progress.txt', 'file')
            error('parfor_progress.txt not found. Run PARFOR_PROGRESS(N) before PARFOR_PROGRESS to initialize parfor_progress.txt.');
        end
        
        f = fopen('parfor_progress.txt', 'a');
        fprintf(f, '1\n');
        fclose(f);
        
        f = fopen('parfor_progress.txt', 'r');
        progress = fscanf(f, '%d');
        fclose(f);
        percent = (length(progress)-1)/progress(1)*100;
        
        if nargout == 0
            perc = sprintf('%3.0f%%', percent); % 4 characters wide, percentage
            disp([repmat(char(8), 1, (w+9)), char(10), perc, '[', repmat('=', 1, round(percent*w/100)), '>', repmat(' ', 1, w - round(percent*w/100)), ']']);
        end
    end

Then, to get a progress bar for a `parfor` loop, all you have to do is something like this:

    N = 100;
    parfor_progress(N);
    parfor i=1:N
        pause(rand); % Replace with real code
        parfor_progress;
    end
    parfor_progress(0);

You should thank commenter <a href="#comment-773">Ben Aernouts</a> for helping me make the progress bar pretty.

<h2 id="comments">8 archived comments &raquo;</h2>

<ol id="commentlist">
    <li class="comment even thread-even depth-1" id="comment-680">
    <p>Hey Jeremy,</p>
<p>I found this while Googling for something similar. I ran into a problem while trying to run this, though, in which a test loop of mine would finish, but the indicator would be around 50%. I think it may have been that two or more processors were trying to read/write to the file at the same time. Did you happen to encounter something like that?</p>
<p>The way I fixed it for my particular application was to create a directory instead, and have each call create a new file in that directory, then compare the number of files to the range of the loop. Still kind of hacky, and not sure how well that would scale, but it worked for me.</p>
    <p><cite>Comment by Kevin &#8212; October 11, 2011 @ <a href="#comment-680">2:23 pm</a></cite></p>
    </li>

    <li class="comment byuser comment-author-admin bypostauthor odd alt thread-odd thread-alt depth-1" id="comment-693">
    <p>Kevin: I have used this script extensively with no problems, although due to its hacky nature, it's not surprising that some version of MATLAB on some operating system might fail. Your solution is similarly hacky, but as long as you're not nearing the limit of the number of files in a directory, it sounds like it should work. You should share your version with others in case someone else has the same problem: <a href="https://gist.github.com/" rel="nofollow">https://gist.github.com/</a></p>
    <p><cite>Comment by <a href='http://www.jeremyscheff.com/' rel='external nofollow' class='url'>Jeremy Scheff</a> &#8212; October 12, 2011 @ <a href="#comment-693">10:31 am</a></cite></p>
    </li>

    <li class="comment even thread-even depth-1" id="comment-773">
    <p>Dear Jeremy Scheff,</p>
<p>I found a solution to your &#8216;pretty text progress bar' problem:</p>
<p>%Parameters<br />
length_waitbar = 50;<br />
nr_loops = 100;</p>
<p>%Parfor loop<br />
if matlabpool(&#8216;size') ==0; matlabpool; end<br />
parfor_progress(nr_loops);<br />
disp([&#8216;Progress:' char(10) repmat(&#8216; &#8216;,1,length_waitbar)]);<br />
parfor i = 1:nr_loops<br />
    pause(rand) % Calculations<br />
    percent = parfor_progress;<br />
    disp([repmat(char(8),1,(length_waitbar+2)) char(10) repmat(&#8216;.',1,round(percent*length_waitbar/100))...<br />
        repmat(&#8216;*',1,length_waitbar-round(percent*length_waitbar/100))]);<br />
end<br />
parfor_progress(0);</p>
<p>Thanks for your &#8216;parfor_progress.m' file.</p>
<p>Best regards,</p>
<p>Ben Aernouts</p>
    <p><cite>Comment by <a href='http://www.kuleuven.be/wieiswie/en/person/u0072735' rel='external nofollow' class='url'>Ben Aernouts</a> &#8212; October 20, 2011 @ <a href="#comment-773">10:59 am</a></cite></p>
    </li>

    <li class="comment byuser comment-author-admin bypostauthor odd alt thread-odd thread-alt depth-1" id="comment-817">
    <p>Ben: Thanks for your pretty progress bar. I swear I tried something very similar and couldn't get it to work. But yours does seem to work. I prettied it up even further, integrated it into the main function, and updated my blog post. If someone wants to do even better, an estimate of time remaining could still be added...</p>
    <p><cite>Comment by <a href='http://www.jeremyscheff.com/' rel='external nofollow' class='url'>Jeremy Scheff</a> &#8212; October 25, 2011 @ <a href="#comment-817">11:50 pm</a></cite></p>
    </li>

    <li class="comment even thread-even depth-1" id="comment-12815">
    <p>Good work! Excellent!</p>
    <p><cite>Comment by Eric Lee &#8212; March 23, 2012 @ <a href="#comment-12815">4:08 am</a></cite>  |<a class="comment-edit-link" href="http://dumbmatter.com/wp-admin/comment.php?action=editcomment&#038;c=12815">Edit this</a></p>
    </li>

    <li class="comment odd alt thread-odd thread-alt depth-1" id="comment-17964">
    <p>Very nice work! It makes simulation of complicated experiments sufferable. Thank you!</p>
    <p><cite>Comment by Emil &#8212; April 25, 2012 @ <a href="#comment-17964">11:55 am</a></cite></p>
    </li>

    <li class="comment even thread-even depth-1" id="comment-38018">
    <p>Hi,</p>
<p>I added code that calculates and displays the estimated time remaining by saving the start time in the parfor_progress.txt file.</p>
<p><a href="http://cl.ly/2b2O1F3x1i3a0r231p3x" rel="nofollow">http://cl.ly/2b2O1F3x1i3a0r231p3x</a></p>
<p>-Albert</p>
    <p><cite>Comment by <a href='http://www.aonicc.com' rel='external nofollow' class='url'>Albert Wu</a> &#8212; July 16, 2012 @ <a href="#comment-38018">4:40 pm</a></cite></p>
    </li>

    <li class="comment odd alt thread-odd thread-alt depth-1" id="comment-38023">
    <p>Oops, fixed a bug. Here's the new url: <a href="http://cl.ly/1D2x3F0r0u2L0q293u2h" rel="nofollow">http://cl.ly/1D2x3F0r0u2L0q293u2h</a></p>
    <p><cite>Comment by <a href='http://www.aonicc.com' rel='external nofollow' class='url'>Albert Wu</a> &#8212; July 16, 2012 @ <a href="#comment-38023">4:46 pm</a></cite></p>
    </li>


</ol>
