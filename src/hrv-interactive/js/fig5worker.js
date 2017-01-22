importScripts("lib/numeric.js", "fakelab.js", "ipfmNew.js");

onmessage = function (event) {
    var factors, i, maxAch, maxNor, minAch, minNor, p0mAch, p0mNor, ps, ps5, q, result, result5, w;

    q = event.data;
    w = {
        row: q.row,
        p: q.p
    };

    result = ipfmNew.run(q.p, q.runMethod);
    ps = ipfmNew.powerSpectrum(result.tK, result.rr, q.p.tMax, q.powerSpectrumMethod);
    w.hr = 60 / fakelab.mean(result.rr);
    w.lf = ipfmNew.lf(ps.f, ps.P);
    w.hf = ipfmNew.hf(ps.f, ps.P);

    // For column 5
    p0mNor = q.p.mNor;
    p0mAch = q.p.mAch;
    factors = [[1.5, 1], [0.5, 1], [1, 1.5], [1, 0.5]];
    w.hrs = [0, 0, 0, 0];
    w.lfs = [0, 0, 0, 0];
    w.hfs = [0, 0, 0, 0];
    for (i = 0; i < factors.length; i++) {
        q.p.mNor = p0mNor * factors[i][0];
        q.p.mAch = p0mAch * factors[i][1];

        result5 = ipfmNew.run(q.p, q.runMethod);
        ps5 = ipfmNew.powerSpectrum(result5.tK, result5.rr, q.p.tMax, q.powerSpectrumMethod);

        w.hrs[i] = 60 / fakelab.mean(result5.rr);
        w.lfs[i] = ipfmNew.lf(ps5.f, ps5.P);
        w.hfs[i] = ipfmNew.hf(ps5.f, ps5.P);
    }

    // Interpolate
    w.ti = numeric.linspace(0, 20, 75);
    w.mi = fakelab.interp1(result.t, result.y.m, w.ti);
    w.neurotransmitterRange = numeric.linspace(0, 12, 200);
    w.nori = [];
    minNor = fakelab.min(result.y.nor);
    maxNor = fakelab.max(result.y.nor);
    w.achi = [];
    minAch = fakelab.min(result.y.ach);
    maxAch = fakelab.max(result.y.ach);
    for (i = 0; i < w.neurotransmitterRange.length; i++) {
        if (w.neurotransmitterRange[i] > minNor && w.neurotransmitterRange[i] < maxNor) {
            w.nori.push(w.neurotransmitterRange[i]);
        } else {
            w.nori.push(NaN);
        }
        if (w.neurotransmitterRange[i] > minAch && w.neurotransmitterRange[i] < maxAch) {
            w.achi.push(w.neurotransmitterRange[i]);
        } else {
            w.achi.push(NaN);
        }
    }

    // Reference values, default params
    result = ipfmNew.run(ipfmNew.defaultParams());
    ps = ipfmNew.powerSpectrum(result.tK, result.rr, q.p.tMax, q.powerSpectrumMethod);
    w.hr0 = 60 / fakelab.mean(result.rr);
    w.lf0 = ipfmNew.lf(ps.f, ps.P);
    w.hf0 = ipfmNew.hf(ps.f, ps.P);

    postMessage(w);
};