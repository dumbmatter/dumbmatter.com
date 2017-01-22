---
date: 2011-06-02
layout: post.html
tags: programming, research-blogging, science
title:  "Retrospective bioinformatics: the feasibility overlapping genetic codes"
---

<div style="float:right; padding: 0 0 5px 5px;"><a href="http://www.researchblogging.org"><img style="border:0;" src="/files/icons/rb2_large_gray.png" alt="ResearchBlogging.org" /></a><br>
<a href="http://researchblogging.org/news/?p=2724"><img alt="This post was chosen as an Editor's Selection for ResearchBlogging.org" src="/files/icons/rb_editors-selection.png" style="border:0;"/></a></div>

In 1957, we knew what DNA was. We were pretty sure that proteins were determined by sequences of DNA. But we didn't know exactly how this happened. In other words, the <a href="http://en.wikipedia.org/wiki/Genetic_code">genetic code</a> was still a mystery back then. This was a particularly perplexing problem, because a very simple question could be stated with no obvious answer: How does a language (DNA sequences) with four letters (the nucleotides A, C, G, and T) get translated into a language (protein sequences) with twenty letters (amino acids)... and furthermore, is there some higher purpose to having these two different alphabets?

<!--more-->

Lacking direct experimental results at the time, there were numerous fascinating hypotheses that all turned out to be completely wrong. The history of these hypotheses and how the real genetic code was eventually discovered is summarized in <a href="http://dx.doi.org/10.1511/1998.1.8">this excellent article by Brian Hayes</a>; this is one example of the depressing reality of molecular biology over the past 50 years, that things just become more and more complicated the closer we investigate them. However, the disproved hypotheses are still quite interesting. One critical question most of the hypothesized genetic codes tried to answer was the alphabet problem. If your "word size" (the number of letters to code from nucleotides to proteins) was 1, you could represent 4 different amino acids (one for each of the 4 nucleotides). For 2 letters, you have 4^2=16 possible words. That's not quite enough to represent 20 nucleotides. But for 3 letters, you wind up with 4^3=64 possible combinations, which is a lot more than 20. That seems very inefficient, doesn't it? So, many scientists assumed there must be some deep underlying reason that explains this discrepancy. Personally, I find <a href="http://dx.doi.org/10.1073/pnas.43.5.416">Crick's comma-free code</a> to be a particularly elegant hypothesis along these lines, but I'm going to focus on another class of explanations.

One hypothesis on nature of the genetic code was that it could be an overlapping code. For instance, consider a DNA sequence like `AGATTC`. We now know that these six nucleotides code for two amino acids (if the open reading frame starts at the beginning). `AGA` is arginine and `TTC` is phenylalanine. But what if codons (sequences of three nucleotides which code for an amino acid) could overlap? Then, for instance, you could take the same six nucleotides and get `AGA`, `GAT`, `ATT`, and `TTC`. This would make our DNA much more compact and thus much more energetically efficient, which was then (before the sequencing of the genome) believed to be of critical importance.

Even before <a href="http://nobelprize.org/educational/medicine/gene-code/history.html">scientists began to decipher the true genetic code in the 1960s</a>, some aspects of the hypothesized codes could be tested. Consider a dipeptide (two adjacent amino acids). If no restriction is placed on the sequence of amino acids, then there are 20*20=400 possible dipeptides. But for an overlapping code, a dipeptide is defined by just four nucleotides (<i>e.g.</i> `AGAT` gives `AGA` and `GAT`). This means that an overlapping code has at most 4^4=256 possible dipeptides. Along these lines, clever combinatorics could put testable constraints on the feasibility of overlapping codes, which is <a href="http://dx.doi.org/10.1073/pnas.43.8.687">exactly what Sidney Brenner did</a>:

Consider an amino acid, which has adjacent amino acids at both of its ends, called C-neighbors and N-neighbors. As each unique triple can be preceded by and followed by any one of the four nucleotides, a single codon could have at most four C-neighbors and four N-neighbors. If more than four neighbors exist, then there must be more than one codon coding for that amino acid (remember, we have 64 triplets and 20 amino acids, so that allows for 44 redundant codons). For instance, an amino acid with 13 known C-neighbors and 15 known N-neighbors must have at least 4 different codons, as that would allow for 4^4=16 possible neighbors on each side.

Back in 1957, protein sequencing was a very young field, but there were a handful known sequences. Brenner used sequences of seven known proteins to find the number C-neighbors and N-neighbors for each amino acid, and then calculated the number of codons that would be needed to represent all of those dipeptides. He found that 70 different codons were required, and since this is more than the 64 that is possible for a simple triplet code, the existence of an overlapping triplet code was disproved.

Now, in 2011, we know the sequences of many more than seven proteins. Brenner's experiment can be performed on much more comprehensive data with just a bit of programming. So let's try it. First, we need some protein sequence data. This can be downloaded from <a href="http://www.uniprot.org/">UniProt</a>. I'm going to use the <a href="http://www.uniprot.org/downloads">UniProtKB/Swiss-Prot</a> database in <a href="http://en.wikipedia.org/wiki/FASTA_format">FASTA format</a>. Once the .gz file is uncompressed, it becomes apparent that it is just a plain text file in a standard format which has protein sequences.

Then, we have to install Perl and BioPerl. On Ubuntu, that's just an `apt-get install bioperl` away. Now it's time to code, starting with some boilerplate and module loading:

    #!/usr/bin/perl -w

    use strict;

    use Bio::SeqIO;

We want to calculate the frequency of all dipeptides. This can be done by scanning through each protein sequence and keeping a count of all the dipeptides. I will store all of the counts in a two-dimensional matrix `@count` with 20 rows and 20 columns. This will replicate Table 2 in Brenner's paper. I also define the hash `%labels` which contains the 20 amino acids that correspond to the rows and columns of `@count`.

    # 20x20 matrix for dipeptide frequencies
    my @count;
    for (my $i=0; $i<20; $i++) {
        for (my $j=0; $j<20; $j++) {
            $count[$i][$j] = 0;
        }
    }

    # Amino acids corresponding to rows/columns of @count
    my %labels = (
        A => 0,
        C => 1,
        D => 2,
        E => 3,
        F => 4,
        G => 5,
        H => 6,
        I => 7,
        K => 8,
        L => 9,
        M => 10,
        N => 11,
        P => 12,
        Q => 13,
        R => 14,
        S => 15,
        T => 16,
        V => 17,
        W => 18,
        Y => 19,
    );

Then comes the first bit of BioPerl magic, loading the FASTA file. Without standard file formats and standard programming interfaces, this would require custom code to be written to process every different type of file. I am grateful that other hackers came before me so I can just write some simple code like this:

    my $seqio = Bio::SeqIO->new(-file => 'uniprot_sprot.fasta');

Then we can use the nice BioPerl data structure to look at all of the protein sequences. The bit with the `defined` functions is to ignore anything that is not one of the 20 standard amino acids.

    while (my $seq = $seqio->next_seq()) {
        my @aa = split(//, $seq->seq());
        my $size = $seq->length();

        # Count the frequency of dipeptides
        for (my $i=0; $i<$size-1; $i++) {
            if (defined($labels{$aa[$i]}) && defined($labels{$aa[$i+1]})) {
                $count[$labels{$aa[$i]}][$labels{$aa[$i+1]}]++;
            }
        }
    }

Then simply save the output to a CSV file.

    open(OUT, '>out.txt');
    foreach my $row(@count) {
        print OUT join(',', @{$row}), "\n";
    }
    close(OUT);

On my four year old laptop, this script takes several minutes to run on the UniProt file I downloaded. The output is the following table.

<div style="margin-bottom: 1em; overflow: scroll; overflow-y: hidden;">
<table>
<tr><th></th><th>A</th><th>C</th><th>D</th><th>E</th><th>F</th><th>G</th><th>H</th><th>I</th><th>K</th><th>L</th><th>M</th><th>N</th><th>P</th><th>Q</th><th>R</th><th>S</th><th>T</th><th>V</th><th>W</th><th>Y</th></tr>
<tr><th>A</th><td>1604350</td><td>195182</td><td>822398</td><td>1044202</td><td>552296</td><td>1158886</td><td>320361</td><td>883073</td><td>857065</td><td>1588339</td><td>357454</td><td>529350</td><td>645313</td><td>613666</td><td>874430</td><td>939788</td><td>785165</td><td>1089590</td><td>154667</td><td>392376</td></tr>
<tr><th>C</th><td>174130</td><td>58499</td><td>138705</td><td>148016</td><td>103913</td><td>227743</td><td>70985</td><td>135499</td><td>130730</td><td>235749</td><td>45384</td><td>103432</td><td>139410</td><td>99012</td><td>144379</td><td>190093</td><td>130271</td><td>161362</td><td>31710</td><td>81394</td></tr>
<tr><th>D</th><td>827445</td><td>132752</td><td>578593</td><td>744270</td><td>446042</td><td>716855</td><td>211155</td><td>684994</td><td>556923</td><td>1019856</td><td>220821</td><td>383099</td><td>479704</td><td>332924</td><td>515621</td><td>609928</td><td>495489</td><td>741802</td><td>130625</td><td>350202</td></tr>
<tr><th>E</th><td>1078101</td><td>142692</td><td>686431</td><td>1067085</td><td>439071</td><td>774305</td><td>267415</td><td>817232</td><td>891635</td><td>1225847</td><td>299511</td><td>550953</td><td>439135</td><td>537320</td><td>745843</td><td>662946</td><td>635891</td><td>866060</td><td>127733</td><td>341910</td></tr>
<tr><th>F</th><td>533809</td><td>121718</td><td>450059</td><td>450999</td><td>312612</td><td>541059</td><td>169544</td><td>435875</td><td>381373</td><td>687454</td><td>146401</td><td>310279</td><td>311603</td><td>252249</td><td>355298</td><td>541662</td><td>402970</td><td>480058</td><td>85220</td><td>234312</td></tr>
<tr><th>G</th><td>1043943</td><td>189990</td><td>696738</td><td>825576</td><td>552099</td><td>1066213</td><td>320105</td><td>830120</td><td>829867</td><td>1215270</td><td>312678</td><td>479838</td><td>512268</td><td>484335</td><td>750996</td><td>864545</td><td>722355</td><td>951778</td><td>158808</td><td>411564</td></tr>
<tr><th>H</th><td>308719</td><td>71130</td><td>195973</td><td>224532</td><td>189524</td><td>321458</td><td>138965</td><td>258138</td><td>198526</td><td>437238</td><td>84493</td><td>161914</td><td>260307</td><td>177599</td><td>242326</td><td>273822</td><td>220482</td><td>271193</td><td>49896</td><td>147018</td></tr>
<tr><th>I</th><td>933722</td><td>163420</td><td>696647</td><td>779148</td><td>413674</td><td>775075</td><td>248568</td><td>689560</td><td>665501</td><td>998339</td><td>209124</td><td>505839</td><td>536561</td><td>394941</td><td>586852</td><td>749331</td><td>633140</td><td>745150</td><td>103013</td><td>322834</td></tr>
<tr><th>K</th><td>866387</td><td>123427</td><td>597071</td><td>845021</td><td>352420</td><td>674838</td><td>224900</td><td>689040</td><td>833329</td><td>999805</td><td>230527</td><td>499704</td><td>478812</td><td>433871</td><td>618957</td><td>649117</td><td>592149</td><td>734724</td><td>102558</td><td>330326</td></tr>
<tr><th>L</th><td>1577014</td><td>245724</td><td>1010174</td><td>1209093</td><td>673188</td><td>1234601</td><td>415640</td><td>973104</td><td>1078886</td><td>1774109</td><td>368336</td><td>737749</td><td>915158</td><td>726217</td><td>1038774</td><td>1248515</td><td>982929</td><td>1164291</td><td>180014</td><td>472504</td></tr>
<tr><th>M</th><td>435247</td><td>50382</td><td>245208</td><td>291077</td><td>152180</td><td>316570</td><td>95204</td><td>251080</td><td>290926</td><td>413850</td><td>117451</td><td>199689</td><td>215996</td><td>174459</td><td>242775</td><td>319577</td><td>261128</td><td>304354</td><td>36375</td><td>108406</td></tr>
<tr><th>N</th><td>554118</td><td>106037</td><td>378931</td><td>459348</td><td>309755</td><td>524590</td><td>166632</td><td>520787</td><td>453269</td><td>714592</td><td>162639</td><td>418656</td><td>421842</td><td>292950</td><td>368217</td><td>491895</td><td>385191</td><td>503131</td><td>87700</td><td>248285</td></tr>
<tr><th>P</th><td>714406</td><td>107407</td><td>481661</td><td>675169</td><td>343068</td><td>669937</td><td>203444</td><td>445798</td><td>438734</td><td>798215</td><td>172183</td><td>325933</td><td>504394</td><td>354379</td><td>426646</td><td>616487</td><td>475868</td><td>653357</td><td>98682</td><td>260902</td></tr>
<tr><th>Q</th><td>649443</td><td>91724</td><td>334988</td><td>485523</td><td>260767</td><td>467674</td><td>178795</td><td>427814</td><td>430406</td><td>746243</td><td>170464</td><td>286123</td><td>347358</td><td>445493</td><td>443371</td><td>421132</td><td>367001</td><td>493498</td><td>84418</td><td>205712</td></tr>
<tr><th>R</th><td>819841</td><td>134578</td><td>563050</td><td>730657</td><td>422276</td><td>678711</td><td>256094</td><td>614800</td><td>596058</td><td>1017683</td><td>227775</td><td>397183</td><td>460706</td><td>434279</td><td>715987</td><td>614290</td><td>491147</td><td>696504</td><td>117367</td><td>322554</td></tr>
<tr><th>S</th><td>903056</td><td>177942</td><td>634626</td><td>724284</td><td>500281</td><td>936876</td><td>281252</td><td>691235</td><td>663922</td><td>1189788</td><td>251608</td><td>489757</td><td>610758</td><td>477067</td><td>653919</td><td>1039613</td><td>671654</td><td>797089</td><td>139655</td><td>353170</td></tr>
<tr><th>T</th><td>807206</td><td>142149</td><td>516545</td><td>591659</td><td>393125</td><td>773111</td><td>226037</td><td>601197</td><td>500720</td><td>1020373</td><td>201492</td><td>376965</td><td>571417</td><td>354351</td><td>496334</td><td>668873</td><td>600541</td><td>739356</td><td>109986</td><td>277183</td></tr>
<tr><th>V</th><td>1096070</td><td>182993</td><td>747045</td><td>887345</td><td>481224</td><td>853259</td><td>265110</td><td>790477</td><td>735570</td><td>1233197</td><td>281514</td><td>506873</td><td>606861</td><td>441079</td><td>686430</td><td>835395</td><td>741120</td><td>974728</td><td>129389</td><td>346900</td></tr>
<tr><th>W</th><td>144012</td><td>31093</td><td>111942</td><td>116299</td><td>85858</td><td>129009</td><td>50467</td><td>119014</td><td>115293</td><td>225991</td><td>49921</td><td>91136</td><td>77790</td><td>99612</td><td>121738</td><td>125757</td><td>99874</td><td>129496</td><td>31518</td><td>62207</td></tr>
<tr><th>Y</th><td>385674</td><td>89301</td><td>316970</td><td>336107</td><td>243821</td><td>408022</td><td>136323</td><td>314029</td><td>290346</td><td>529055</td><td>105459</td><td>237805</td><td>246395</td><td>232667</td><td>318950</td><td>359767</td><td>286293</td><td>352826</td><td>66302</td><td>190585</td></tr>
</table>
</div>

Clearly, this is overkill. Rather than a sparsely populated grid like Brenner's Table 2, there are thousands upon thousands of every dipeptide combination. This means that each amino acid has 20 C-neighbors and 20 N-neighbors, which would take 5 different triplets for each amino acid, or 100 triplets. Thus, even more conclusively than Brenner's original paper, I have disproved the existence of an overlapping triplet genetic code. Of course we already knew this. A non-obvious thing that these results tell us is that the distribution of dipeptides is certainly not uniform.

One striking aspect of Brenner's paper is that it is written incredibly confidently. In my own writing, I struggle to convey such confidence (sometimes for good reason). But it is interesting that Brenner does not 100% conclusively prove what he claims, given that <a href="http://en.wikipedia.org/wiki/Posttranslational_modification">posttranslational modification</a> could account for some anomalies in protein sequence data.

<h3>References</h3>

<span class="Z3988" title="ctx_ver=Z39.88-2004&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&rft.jtitle=Proceedings+of+the+National+Academy+of+Sciences&rft_id=info%3Adoi%2F10.1073%2Fpnas.43.8.687&rfr_id=info%3Asid%2Fresearchblogging.org&rft.atitle=On+the+Impossibility+of+all+Overlapping+Triplet+Codes+in+Information+Transfer+from+Nucleic+Acid+to+Proteins&rft.issn=0027-8424&rft.date=1957&rft.volume=43&rft.issue=8&rft.spage=687&rft.epage=694&rft.artnum=http%3A%2F%2Fwww.pnas.org%2Fcgi%2Fdoi%2F10.1073%2Fpnas.43.8.687&rft.au=Brenner%2C+S.&rfe_dat=bpr3.included=1;bpr3.tags=Biology%2CBioinformatics%2C+Computational+Biology">Brenner, S. (1957). On the Impossibility of all Overlapping Triplet Codes in Information Transfer from Nucleic Acid to Proteins <span style="font-style: italic;">Proceedings of the National Academy of Sciences, 43</span> (8), 687-694 DOI: <a rev="review" href="http://dx.doi.org/10.1073/pnas.43.8.687">10.1073/pnas.43.8.687</a></span>
