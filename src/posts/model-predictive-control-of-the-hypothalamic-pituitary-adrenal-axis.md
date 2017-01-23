---
date: 2011-09-22
layout: post.html
tags: Research Blogging, Science
title: Model predictive control of the hypothalamic-pituitary-adrenal axis
---

<div style="float:right; padding: 0 0 5px 5px;"><a href="http://www.researchblogging.org"><img style="border:0;" src="/wp-content/themes/jeremy2/images/icons/rb2_large_gray.png" alt="ResearchBlogging.org" /></a></a></div>

<p>Very recently, I've been intrigued by control theory applied to systems biology. This strategy seems to often produce insightful and unintuitive results. In this blog post, I'm going to take a look at <a href="http://dx.doi.org/10.1371/journal.pcbi.1000273">a very cool article by Ben-Zvi and coworkers</a> that applies control theory to a mathematical model of the hypothalamic-pituitary-adrenal (HPA) axis, and hopefully put it in a bit of a broader context.</p>

<!--more-->

<p>The HPA axis has a wide range of physiological functions, including its role as a regulator of the immune response through the release of the stress hormone <a href="http://en.wikipedia.org/wiki/Cortisol">cortisol</a>. Basically, if your body is to respond appropriately to an injury or an infection, the acute release of cortisol via the HPA axis is critical. However, a number of chronic diseases (largely those related to stress, depression, and anxiety) are characterized by HPA axis dysfunction. To gain a better understanding of how these diseases function, and furthermore what potential treatments could be, we need to understand how the HPA axis functions normally and how its normal function is lost in disease.</p>

<p>Towards these ends, there has been much interest in <a href="http://scholar.google.com/scholar?q=%22mathematical+model%22+%22hpa+axis%22">developing mathematical models of the HPA axis</a> and related systems. Mathematical models not only allow for the simulation of experiments which would be infeasible to perform in reality, they also allow for a mathematical analysis of the system to identify fundamental properties of the system, such as steady states and bifurcation points.</p>

<p>In the paper I am discussing here, a mathematical model of the HPA axis was studied with the goal of identifying how the system could be pushed from a pathological state to a healthy state. This is based on <a href="http://dx.doi.org/10.1186/1742-4682-4-8">a previously published model</a> which exhibits multiple steady states which possibly correspond to healthy (normal cortisol levels) and diseased (abnormally low cortisol levels, or hypocortisolism) states.</p>

<p>To identify possible corrective measures, they applied <a href="http://en.wikipedia.org/wiki/Model_predictive_control">model predictive control</a>. This is a mathematical tool which allows you to discover perturbations to a system which lead to a desired result; in this case, they use it to find how changing the concentration of cortisol can move the system towards the healthy steady state.<p>

<p>The intuitive answer would be to add cortisol to the system. After all, the healthy state is at a higher cortisol concentration than the unhealthy hypocortisolic state. But even if that were the answer, it's still not obvious what the optimal dose is. Clinically, a doctor wants to give the lowest effective dose to minimize side effects, but they don't want to give a dose so small that it doesn't have the desired effect.</p>

<p>But nonlinear systems of coupled differential equations are often unintuitive, as is the case here. The primary result of the paper was the discovery that, to switch from the (unhealthy) low cortisol state to the (healthy) normal cortisol state, the treatment should be to <i>remove</i> cortisol from the system. This will cause the body's natural homeostatic mechanisms to kick into effect and ultimately restore the system to the healthy steady state.</p>

<p>In other words, to increase cortisol levels, you have to decrease them first and then let the HPA axis take over. The optimal treatment is the opposite of naive intuition.</p>

<p>As with any purely mathematical/computational result in systems biology, there are several caveats, some of which are discussed in the paper. The authors note that reducing the level of cortisol is a bit more challenging than increasing it (you can't give an IV with a negative concentration of cortisol), but there are proteins which bind to and thus inactivate cortisol, such as <a href="http://en.wikipedia.org/wiki/Transcortin">corticosteroid-binding globulin</a>, which could serve as potential therapeutic agents.</p>

<p>Another major issue is the validity of the model. This work is based on a relatively simple model of the HPA axis, consisting only of four variables: <a href="http://en.wikipedia.org/wiki/Corticotropin-releasing_hormone">CRH</a>, <a href="http://en.wikipedia.org/wiki/Adrenocorticotropic_hormone">ACTH</a>, <a href="http://en.wikipedia.org/wiki/Glucocorticoid_receptor">GR</a>, and cortisol. This is the kind of model that is simple enough to satisfy a mathematician, because you can intuitively understand each variable and parameter and various mathematical/computational analyses are generally feasible, but not complex enough to satisfy a biologist, because it ignores a significant amount of physiological detail.</p>

<p>For instance, in the paper, they mention the interplay between inflammation and the HPA axis as one of the important missing components. But not only is the HPA axis "affected by ... cytokines", it is affected by cytokines in unintuitive and nuanced ways. <a href="http://www.ncbi.nlm.nih.gov/pubmed/8436830">Depending on the timing of giving cortisol and an inflammatory stimulus</a>, cortisol can either increase or decrease the magnitude of resulting inflammatory response. Similarly, <a href="http://dx.doi.org/10.1097/CCM.0b013e3181a592b3">depending on the concentration of cortisol given before an inflammatory stimulus</a>, cortisol can either increase or decrease the magnitude of the resulting inflammatory response. The mechanisms driving these nonlinear responses are not well understood, which I think underscores the inherent uncertainty in our ability to translate interesting yet simplified mathematical results to physiological reality. This doesn't mean it's impossible, but it does mean that there are many confounding factors that could plausibly lead to results that cannot be predicted by a simple model.</p>

<p>Another issue is rhythmic variability in HPA axis function. It is well known that circadian rhythmicity in cortisol is important, and indeed in the paper they mention that cortisol suppression treatment might be most effective near the natural daily nadir in cortisol concentration. That may be true, but would circadian dynamics have any more fundamental impact on the model? Furthermore, ultradian (roughly hourly) rhythms in cortisol release have <a href="http://dx.doi.org/10.1038/nrn2914">recently received a lot of attention</a> as potentially having important physiological properties. (Shameless plug: <a href="http://dx.doi.org/10.1109/TBME.2011.2162236">I have done some modeling work in this field</a>, based on a similar model as is described here, and I have another even cooler paper along these lines that is currently under revision; I should probably be working on that rather than blogging.) In light of the growing consensus on the importance of ultradian rhythms, one naturally wonders how short term variations in cortisol concentration might impact the results of this study.</p>

<p>As has been described by <a href="http://dx.doi.org/10.1007/s00285-010-0384-2">Vinther and coworkers</a>, accounting for circadian and ultradian rhythms in HPA axis function is not trivial and may produce models with unique steady states. In that light, it's not clear that the multiple steady states observed in the model discussed here correspond to multiple physiological states in reality. Maybe hypocortisolism reflects some other steady state that is not present in these models. Or maybe it reflects perturbed parameter values, not necessarily a new steady state.</p>

<p>But I don't want to seem too negative, which the past few paragraphs may be. This is still a very cool result, and the criticisms I gave are par for the course in systems biology. That doesn't mean that computational studies are useless. To the contrary, they are often quite useful, despite their inherent simplifications and uncertainties. The application of model predictive control to systems biology models to determine unintuitive and creative potential therapies is an excellent idea, and the techniques used in this paper should be more broadly applied in other fields.</p>

<h3>References</h3>

<p>
<span class="Z3988" title="ctx_ver=Z39.88-2004&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&rft.jtitle=PLoS+Computational+Biology&rft_id=info%3Adoi%2F10.1371%2Fjournal.pcbi.1000273&rfr_id=info%3Asid%2Fresearchblogging.org&rft.atitle=Model-Based+Therapeutic+Correction+of+Hypothalamic-Pituitary-Adrenal+Axis+Dysfunction&rft.issn=1553-7358&rft.date=2009&rft.volume=5&rft.issue=1&rft.spage=0&rft.epage=&rft.artnum=http%3A%2F%2Fdx.plos.org%2F10.1371%2Fjournal.pcbi.1000273&rft.au=Ben-Zvi%2C+A.&rft.au=Vernon%2C+S.&rft.au=Broderick%2C+G.&rfe_dat=bpr3.included=1;bpr3.tags=Biology%2CBiomedical+Engineering%2C+Computational+Biology%2C+Systems+Biology">Ben-Zvi, A., Vernon, S., & Broderick, G. (2009). Model-Based Therapeutic Correction of Hypothalamic-Pituitary-Adrenal Axis Dysfunction <span style="font-style: italic;">PLoS Computational Biology, 5</span> (1) DOI: <a rev="review" href="http://dx.doi.org/10.1371/journal.pcbi.1000273">10.1371/journal.pcbi.1000273</a></span>
</p>

<h2 id="comments">1 archived comment</h2>

<ol id="commentlist">

    <li class="comment even thread-even depth-1" id="comment-122248">
    <p>Dear Jeremy,<br />
This blog is very interesting and inspired me to react.<br />
Recently I published a paper about the application of control theory<br />
in the hypothalamus pituitary thyroid axis (HPT) which is illustrative,<br />
correct and practical for clinical applications.<br />
Could we develop a discussion about this subject?<br />
Best regards,</p>
<p>Simon L Goede</p>
    <p><cite>Comment by Simon &#8212; April 7, 2014 @ <a href="#comment-122248">3:11 am</a></cite> </p>
    </li>


</ol>
