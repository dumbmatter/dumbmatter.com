---
date: 2020-04-07
layout: post.html
tags: COVID-19, Epidemiology, Politics, Statistics
title: A simple explanation for why modeling COVID-19 is hard
---

Over at FiveThirtyEight there is [a great article about why it's so hard to model the effects COVID-19](https://fivethirtyeight.com/features/why-its-so-freaking-hard-to-make-a-good-covid-19-model/). Basically their answer is that there are many factors that go into a model, but many of them are very uncertain, and many of them are also dynamic. For instance, what is the probability of transmission when an infected person interacts with a non-infected person? There's a lot of uncertainty in that estimate. But also, it's going to change over time. Particularly, as the pandemic worsens, people will likely do more social distancing and other mitigation strategies, resulting in a lower transmission rate.

Tricky stuff to predict precisely! But I think that's not quite the complete picture, and there's an even simpler and clearer explanation.

<!--more-->

I'm thinking about this issue more because of [the IHME COVID-19 model](http://covid19.healthdata.org/united-states-of-america). They are trying to predict hospital resources needed to treat COVID-19 patients, which is even harder than modeling the spread of COVID-19. As new data comes in and they [tweak their model](http://www.healthdata.org/covid/updates), sometimes the results change a lot. This has led to articles like [HUGE! Official IHME Model for Coronavirus Used by CDC Just Cut Their Numbers by Half!... They're Making It Up As they Go Along!](https://www.thegatewaypundit.com/2020/04/huge-official-imhe-model-coronavirus-used-cdc-just-cut-numbers-half-making-go-along/) getting shared a lot on social media.

And that interpretation of the IHME model is understandable. This is supposed to be the gold standard synthesis of all expert opinion that goverments use to set policy. Sure there's a lot of uncertainty in it, but to cut their predictions in half in a single day seems beyond the pale.

But consider exponential growth, since infectious diseases tend to spread exponentially, not linearly.

Imagine a hypothetical disease that starts in 1 person, and then it spreads to 2 new people every day. After a month, it will have spread to over 2 billion people. Exponential growth is wild!

Now imagine a slightly different scenario. It doesn't spread to 2 new people every day, it just spreads to an average of 1.8 new people every day. There's not a big difference between 2 and 1.8, right? Just a 10% difference. Well, in the 1.8 case it will only spread to 100 million people in a month. That's 95% fewer cases, just by decreasing the transmission rate by 10%.

Models involving exponential growth are incredibly sensitive to their parameters. This is not the fault of the people who make the models, it's the fault of math and reality. So if you have a model with many uncertain parameters that govern exponential growth, expect your projections to be wrong. Very wrong.

Does that mean modeling should not be done in cases like this? Definitely not. Models can still help us understand the range of possible outcomes, even if that range is wide. We just need to be careful about how we interpret the results.
