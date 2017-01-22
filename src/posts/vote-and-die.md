---
date: 2012-09-13
layout: post.html
tags: politics, statistics
title: "Vote and die: are you more likely to cast the deciding vote in the election, or to die on your way to your polling place?"
---

<p><a href="http://www.southparkstudios.com/clips/104400/vote-or-die">Vote or die?</a> Or, vote and die?</p>

<p>Here is a calculator that will compare the odds of your single vote swinging the 2012 US presidential election with the odds of you dying on the way to your polling place.</p>

<!--more-->

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<hr>
<label>State: <select id="vote_and_die_swing">
    <option value="8.1585e-11">Alabama</option>
    <option value="4.0796e-10">Alaska</option>
    <option value="8.4531e-10">Arizona</option>
    <option value="9.7008e-10">Arkansas</option>
    <option value="1.4064e-09">California</option>
    <option value="1.0027e-07">Colorado</option>
    <option value="2.1056e-09">Connecticut</option>
    <option value="2.0878e-09">Delaware</option>
    <option value="2.0721e-12">District of Columbia</option>
    <option value="2.6628e-08">Florida</option>
    <option value="1.3264e-09">Georgia</option>
    <option value="6.9937e-10">Hawaii</option>
    <option value="1.0425e-10">Idaho</option>
    <option value="4.2082e-10">Illinois</option>
    <option value="2.0487e-08">Indiana</option>
    <option value="8.0978e-09">Iowa</option>
    <option value="4.3922e-10">Kansas</option>
    <option value="4.0324e-10">Kentucky</option>
    <option value="5.0158e-10">Louisiana</option>
    <option value="1.4524e-08">Maine</option>
    <option value="5.3789e-10">Maryland</option>
    <option value="9.0457e-10">Massachusetts</option>
    <option value="1.6329e-08">Michigan</option>
    <option value="3.0858e-08">Minnesota</option>
    <option value="1.4487e-09">Mississippi</option>
    <option value="1.5618e-08">Missouri</option>
    <option value="6.5501e-09">Montana</option>
    <option value="1.3493e-09">Nebraska</option>
    <option value="3.5048e-08">Nevada</option>
    <option value="1.2646e-07">New Hampshire</option>
    <option value="6.7321e-09" selected="selected">New Jersey</option>
    <option value="1.6421e-07">New Mexico</option>
    <option value="5.2393e-10">New York</option>
    <option value="1.6201e-08">North Carolina</option>
    <option value="1.8017e-08">North Dakota</option>
    <option value="3.0717e-08">Ohio</option>
    <option value="4.9895e-11">Oklahoma</option>
    <option value="4.7062e-09">Oregon</option>
    <option value="3.0923e-08">Pennsylvania</option>
    <option value="2.0022e-09">Rhode Island</option>
    <option value="4.0324e-10">South Carolina</option>
    <option value="3.1678e-09">South Dakota</option>
    <option value="3.3107e-10">Tennessee</option>
    <option value="2.3492e-10">Texas</option>
    <option value="1.7585e-10">Utah</option>
    <option value="7.8829e-10">Vermont</option>
    <option value="1.2657e-07">Virginia</option>
    <option value="5.5681e-09">Washington</option>
    <option value="2.0681e-09">West Virginia</option>
    <option value="1.1957e-08">Wisconsin</option>
    <option value="1.2845e-10">Wyoming</option>
</select></label><br>
<label>Round trip distance to polling place (in miles): <input type="text" id="vote_and_die_distance" size="4" value="4"></label><br>
<label>Mode of transportation: <select id="vote_and_die_risk">
    <option value="1e-7" selected="selected">Bicycle</option>
    <option value="1.23e-8">Car</option>
    <option value="4.5e-7">Motorcycle</option>
    <option value="4.5e-10">Public Transportation</option>
    <option value="1.43e-8">Walk</option>
</select></label><br>
<!--<button onclick="vote_and_die_update()">Submit</button><br>--><br>
<div id="vote_and_die_result"></div>
<hr>
<script>
function vote_and_die_update() {
    var swing = parseFloat($("#vote_and_die_swing").val());
    var distance = parseFloat($("#vote_and_die_distance").val());
    var risk = parseFloat($("#vote_and_die_risk").val());

    if (!isNaN(distance)) {
        var state = $('#vote_and_die_swing option:selected').text();
        var transportation = $('#vote_and_die_risk option:selected').text();
        if (transportation === "Bicycle") {
            var transportationText = "ride a bike";
        } else if (transportation === "Car") {
            var transportationText = "drive a car";
        } else if (transportation === "Motorcycle") {
            var transportationText = "drive a motorcycle";
        } else if (transportation === "Public Transportation") {
            var transportationText = "take public transportation";
        } else if (transportation === "Walk") {
            var transportationText = "walk";
        }
        var msg = "If you live in " + state + " and " + transportationText + " " + distance + " miles to your polling place, <i>you are roughly ";

        var odds = distance * risk / swing;
        if (odds > 1) {
            var msgBefore = "Oh no! ";
            var msgAfter = parseFloat(Number(odds).toPrecision(3)) + " times more likely to die on your way to the polling booth than you are to cast a meaningful vote in the 2012 presidential election.";
        } else {
            odds = swing / (distance * risk);
            var msgBefore = "Congratulations! ";
            var msgAfter = parseFloat(Number(odds).toPrecision(3)) + " times more likely to cast a meaningful vote in the 2012 presidential election than you are to die on your way to the polling booth.";
        }

        $("#vote_and_die_result").html(msgBefore + msg + msgAfter + "</i>");

        msgAfter = msgAfter.replace("you are", "I am");
        msgAfter = msgAfter.replace("your", "my");
        var tweetButton = document.getElementById("vote_and_die_tweet");
        tweetButton.src = tweetButton.src.replace(/&text=[^&]+/, "&text=" + encodeURIComponent("I am " + msgAfter));
    } else {
        $("#vote_and_die_result").html("Enter a number (in miles) for the distance to your polling place.");
    }
}

$("#vote_and_die_swing").change(vote_and_die_update);
$("#vote_and_die_swing").on("keyup", vote_and_die_update);
$("#vote_and_die_distance").change(vote_and_die_update);
$("#vote_and_die_distance").on("keyup", vote_and_die_update);
$("#vote_and_die_risk").change(vote_and_die_update);
$("#vote_and_die_risk").on("keyup", vote_and_die_update);

vote_and_die_update();
</script>

<p>So, how is this estimate made? Well, just think about what rare confluence of events would have to occur for your vote to swing the election.</p>

<p><a href="http://fivethirtyeight.blogs.nytimes.com/">Nate Silver currently claims that there is an 0.4% chance that my home state of New Jersey will be the "tipping point" state in the 2012 election.</a> What does that mean? The tipping point state is the state that provides the decisive electoral vote. An example: imagine Romney wins the election and manages to carry New Jersey. Did New Jersey really matter?</p>

<p>Probably not.</p>

<p>New Jersey is so liberal that, if Romney won New Jersey, there is roughly a 99.6% chance that he would have already had enough electoral votes from states he won by larger margins, so swapping the results in New Jersey wouldn't have changed the anything. There is only an 0.4% chance that New Jersey would be that bellwether between winning and losing.</p>

<p>But even in a landslide election there is a tipping point state, a state that lies at the center of the electoral vote distribution. So what are the odds that New Jersey will be the tipping point state <i>and</i> the election will be decided by only the tipping point state? Far lower than 0.4%.</p>

<p>We all remember the tipping point state in 2000: Florida, <a href="http://en.wikipedia.org/wiki/U.S._presidential_election,_2000">decided by a margin of 537 votes</a>. We don't all remember New Mexico in 2000, which <a href="http://en.wikipedia.org/wiki/U.S._presidential_election,_2000">actually had a smaller margin of 366 votes</a> but didn't get much publicity because it was not the tipping point state - no matter which way New Mexico voted, the results were the same. But still, New Mexico in 2000 was the closest result ever in a US presidential election.</p>

<p>But even 366 is far greater than 1. If a single extra New Mexican decided to vote that day, then instead Gore would have won New Mexico by 365 or 367. Big deal. What are the odds that a state will be the tipping point state <i>and</i> also have a single vote decide its result?</p>

<p>I won't bore you with the details (read: I don't want to bore myself with the details), but <a href="http://www.stat.columbia.edu/~gelman/research/published/decisive.pdf">this question has been investigated by by Gelman <i>et al.</i></a>. They found that, for the 1992 election, there was roughly a 1 in 10 million chance that New Jersey would decide the entire national election by a single vote. After doing some more reading, I noticed <a href="http://papers.nber.org/papers/w15220">a more recent paper by Gelman <i>et al.</i> (with the <i>et al.</i> now including Nate Silver) studying the 2008 election</a>, and it makes things look even worse. A single New Jersey voter in 2008 only had roughly a 1 in 150 million chance of deciding the election. Given that the 2012 election is probably going to be similar to the 2008 election, I'll use this value.</p>

<p>However, those 1 in 150 million odds don't necessarily factor in what actually happens in close elections like the 2000 presidential election. <a href="http://www.nytimes.com/2005/11/06/magazine/06freak.html?pagewanted=all">"It is true that the outcome of that election came down to a handful of voters; but their names were Kennedy, O'Connor, Rehnquist, Scalia and Thomas. And it was only the votes they cast while wearing their robes that mattered, not the ones they may have cast in their home precincts."</a> So even if your vote is truly the deciding vote in the election, the inherent error in counting ballots will likely make it such that a somewhat arbitrary legal process will decide the election. And in that case, does it really matter what your vote was?</p>

<p>However, that line of reasoning is somewhat convincingly refuted by <a href="http://www.stat.columbia.edu/~gelman/research/published/gelmankatzbafumi.pdf">yet another paper by Gelman <i>et al.</i> (see: the appendix)</a>. Basically, just as a vote can swing an election from 50-50, you can also imagine a vote moving the outcome from inside to outside the range of closeness needed to instigate an arbitrary legal resolution to the election. So I'm going to stick with the 1 in 150 million estimate.</p>

<p>I bike to get around. <a href="http://bicycleuniverse.info/transpo/almanac-safety.html">There is about one bicycle death per 10 million miles.</a> Biking to my polling place adds 4 miles beyond my normal daily commute. That means that the odds of me dying in an accident on the way to vote are roughly 4 in 10 million - 60 times the odds of my vote swinging the election.</p>

<p>Repeat: <i>I am roughly 60 times more likely to die on my way to the polling booth than I am to cast a meaningful vote in the Presidential election</i>. Similar odds probably hold true for you. Try the calculator above to find out.</p>

<p>There is only one thing we say to the God of Death: <a href="http://www.youtube.com/watch?v=BqihaEPq_lY">not today</a>. So I'll skip that 4 mile death ride and let the rest of you guys decide which neocon wins the presidency.</p>

<h3>References</h3>

<p>The death rates for various modes of transportation come from a <a href="http://www-nrd.nhtsa.dot.gov/Pubs/810968.pdf">few</a> <a href="http://bicycleuniverse.info/transpo/almanac-safety.html">different</a> <a href="http://books.google.com/books?id=YeNe2vBFdzIC&pg=PA100&lpg=PA100&dq=rate+of+death+per+mile+by+mode+of+transportation&source=bl&ots=rUVuhWSZ8l&sig=bK4-amX77W2Ro2QYewMIDlHGYHs&hl=en#v=onepage&q=rate%20of%20death%20per%20mile%20by%20mode%20of%20transportation&f=false">sources</a>. Let me know if you find a better source.</p>

<p>The data on the odds of swinging a presidential election come from <a href="http://papers.nber.org/papers/w15220">"What is the probability your vote will make a difference?" by Andrew Gelman, Nate Silver, Aaron Edlin</a>. These estimates are from the 2008 election, but they are the most recent ones available (AFAIK) and they are probably pretty similar to the 2012 values.</p>

<h2 id="comments">2 archived comments</h2>

<ol id="commentlist">

    <li class="pingback even thread-even depth-1" id="comment-108520">
        <p>[&#8230;] via Hacker News <a href="http://www.jeremyscheff.com/2012/09/vote-and-die/" rel="nofollow">http://www.jeremyscheff.com/2012/09/vote-and-die/</a> [&#8230;]</p>
    <p><cite>Pingback by <a href='http://jeremiahtillman.wordpress.com/2013/11/14/are-you-more-likely-to-cast-the-deciding-vote-or-die-on-your-way-to-the-polls/' rel='external nofollow' class='url'>Are you more likely to cast the deciding vote or die on your way to the polls? | Enjoying The Moment</a> &#8212; November 13, 2013 @ <a href="#comment-108520">7:13 pm</a></cite> </p>
    </li>

    <li class="pingback odd alt thread-odd thread-alt depth-1" id="comment-327412">
        <p>[&#8230;] decide the presidential election is effectively nil, regardless of how close the polls are. You are more likely to die while traveling to or from the polling place than you are to cast a decisive vote in most cases. [&#8230;]</p>
    <p><cite>Pingback by <a href='https://reece.liberty.me/vote-swapping-rebuttal-penn-jillette/' rel='external nofollow' class='url'>Against Vote Swapping: A Rebuttal to Penn Jillette - Zeroth Position - Liberty.me</a> &#8212; November 8, 2016 @ <a href="#comment-327412">7:33 am</a></cite> </p>
    </li>


</ol>
