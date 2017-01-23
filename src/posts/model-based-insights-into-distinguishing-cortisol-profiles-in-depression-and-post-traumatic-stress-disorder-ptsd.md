---
date: 2013-03-05
layout: post.html
tags: Research Blogging, Science
title: Model-based insights into distinguishing cortisol profiles in depression and post-traumatic stress disorder (PTSD)
---

<div style="float:right; padding: 0 0 5px 5px;"><a href="http://www.researchblogging.org"><img style="border:0;" src="/files/icons/rb2_large_gray.png" alt="ResearchBlogging.org" /></a></a></div>

<p>One of my main scientific goals is the application of mathematical models to find interesting insights into biological systems. This is a really broad goal, as depending on the area, there may be very different ways to gain insight. Here, I want to discuss one example, <a href="http://dx.doi.org/10.1371/journal.pcbi.1002379">an interesting paper by Sriram and coworkers</a> that was published in PLOS Computational Biology last year entitled "Modeling cortisol dynamics in the neuro-endocrine axis distinguishes normal, depression, and post-traumatic stress disorder (PTSD) in humans".</p>

<!--more-->

<p>From the title of this paper alone it is already clear that an interesting application of a model is their primary goal. Their hypothesis (based on a prior hypothesis in the literature) is that differences in cortisol profiles between different types of stress can be explained by the responsiveness of <a href="http://en.wikipedia.org/wiki/Hypothalamic%E2%80%93pituitary%E2%80%93adrenal_axis">the hypothalamic-pituitary-adrenal (HPA) axis</a>, a key player in the body's response to stress. They built a model of the HPA axis not dissimilar to <a href="http://dx.doi.org/10.1152/physiolgenomics.00128.2011">a model that I previously studied</a>, albeit with very different goals (if you trace the citation history back, both my paper and Sriram's paper are based on <a href="http://dx.doi.org/10.1186/1742-4682-4-8">this paper</a>).</p>

<p>But this isn't about me. Let's get back to the topic at hand.</p>

<p>From a purely mathematical perspective, the primary novelty in Sriram's model is the inclusion of an additional degradation term in every equation. So instead of just having a first order degradation term in each equation, they also added a Michaelis-Menten degradation term meant to model enzymatic degradation.</p>

<p>They fit this model to three different datasets: PTSD, depressed, and normal. One concern, which they mention, is that they are heavily data-limited and thus have only 3 cortisol profiles for each case. That of course makes you wonder about how generalizable and predictive this is, since with that little data you can't cross-validate, but it is certainly enough for an interesting preliminary study. They use the different fits of the model to conclude that the feedback properties of the HPA axis (<i>i.e.</i>, model parameters) are different under the different types of chronic stress, as they hypothesized.</p>

<p>In other words, the model also allows them to look at how different types of stress look in the parameter space, rather than just by looking at a somewhat arbitrary high-level marker like cortisol levels which may not reveal the full picture of what's really going on. The model also allows them to explore bifurcations, transitions between different types of stress, and various interesting things like that.</p>

<p>However, I am a bit concerned by this passage from the Methods section:</p>

<blockquote>Although more parameters could be different between the three groups, according to the hypothesis, only two kinetic parameters, namely <i>k<sub>stress</sub></i> and <i>K<sub>i</sub></i>, are considered to be significantly different in the three pathological cases. Therefore, the model calibration was performed simultaneously for the three time series, allowing <i>k<sub>stress</sub></i> and <i>K<sub>i</sub></i> to differ for all the three cases, and forcing the remaining 18 parameters to be the same.</blockquote>

<p>If their hypothesis is that everything is driven by those two parameters, and thus they only allow those two parameters to vary when they're fitting their three different cases, and then they observe different values for those two parameters in those three cases, that's not really strong support of their hypothesis, is it? They never discuss if other combinations of parameters could capture the same results when allowed to vary and fit to the same data. Maybe they could have achieved similar results with some other parameters. But we don't know, because they only tested the ones that they <i>a priori</i> hypothesized to be important.</p>

<p>Another interesting aspect of this paper relates to biological rhythms. Well-known are circadian rhythms, which lead to a clear 24 hour pattern in the output of the HPA axis. Less well-known are ultradian rhythms, a term basically referring to any rhythm faster than 24 hours, which in the context of the HPA axis is apparent in roughly hourly oscillations in HPA axis output. This paper says that their model can reproduce both circadian and ultradian rhythms in a single model, given appropriate parametrization. However, their simulations don't actually show this, as the parametrizations they reached had only circadian rhythms. Therefore, it is not clear to me if there are actually reasonable parameter values that give rise to reasonable dual rhythms.</p>

<p>The authors note that it is the addition of the Michaelis-Menten degradation terms that allows for the production of both circadian and ultradian rhythms. What seems less clear to me is the precise physiological processes meant to be represented by these terms and whether there is sufficient data/evidence to include those terms (and their numerous parameters) rather than, say, <a href="http://dx.doi.org/10.1098/rspb.2009.2148">adding an explicit delay</a>. As their sensitivity analysis (Figure 7) found, some parameters related to degradation have extremely low sensitivities, for instance <i>V<sub>S5</sub></i> which govern the enzymatic degradation of cortisol. The parameter governing the linear degradation of cortisol, <i>K<sub>d3</sub></i>, has a much higher sensitivity. Looking at the parameter values in Table 1, <i>K<sub>d3</sub></i> is a c couple orders of magnitude larger than <i>V<sub>S5</sub></i>, so it's doesn't seem surprising that when these factors are used as coefficients for linear combinations of terms, the former turns out to be far more sensitive.</p>

<p>In total, I really like the conceptual idea behind this paper, the idea of using models to assess more fundamental underlying parameters that are difficult to directly measured. However, I'm not sure how much these results contribute towards supporting the hypothesis that it is the feedback properties of the HPA axis that produce different outputs in response to different stressors. Even so, I found the paper to be interesting and suggestive of model-based approaches towards stratification that may be useful in a variety of different domains.</p>

<p><em>Some of the content in this post was based on discussions with my friend <a href="http://www.linkedin.com/pub/panteleimon-mavroudis/31/407/a66/">Pantelis Mavroudis</a>.</em></p>

<h3>References</h3>

<p>
<span class="Z3988" title="ctx_ver=Z39.88-2004&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&rft.jtitle=PLoS+Computational+Biology&rft_id=info%3Adoi%2F10.1371%2Fjournal.pcbi.1002379&rfr_id=info%3Asid%2Fresearchblogging.org&rft.atitle=Modeling+Cortisol+Dynamics+in+the+Neuro-endocrine+Axis+Distinguishes+Normal%2C+Depression%2C+and+Post-traumatic+Stress+Disorder+%28PTSD%29+in+Humans&rft.issn=1553-7358&rft.date=2012&rft.volume=8&rft.issue=2&rft.spage=0&rft.epage=&rft.artnum=http%3A%2F%2Fdx.plos.org%2F10.1371%2Fjournal.pcbi.1002379&rft.au=Sriram%2C+K.&rft.au=Rodriguez-Fernandez%2C+M.&rft.au=Doyle%2C+F.&rfe_dat=bpr3.included=1;bpr3.tags=Biology%2CComputational+Biology%2C+Systems+Biology">Sriram, K., Rodriguez-Fernandez, M., & Doyle, F. (2012). Modeling Cortisol Dynamics in the Neuro-endocrine Axis Distinguishes Normal, Depression, and Post-traumatic Stress Disorder (PTSD) in Humans <span style="font-style: italic;">PLoS Computational Biology, 8</span> (2) DOI: <a rev="review" href="http://dx.doi.org/10.1371/journal.pcbi.1002379">10.1371/journal.pcbi.1002379</a></span>
</p>
