importScripts("lib/numeric.js", "fakelab.js", "ipfmNew.js");

onmessage = function (event) {
    var j, m, means, p, ps, q, result;

    q = event.data;

    w = {};
    w.type = q.type;
    w.mi = [];
    w.lf = [];
    w.hf = [];

    p = ipfmNew.defaultParams(w.type);

    means = [[1, 1], [1.5, 1], [0.5, 1], [1, 1.5], [1, 0.5]];

    w.lf = [0, 0, 0, 0, 0];
    w.hf = [0, 0, 0, 0, 0];
    m = [];

    for (j = 0; j < means.length; j++) {
        p.mNor = means[j][0];
        p.mAch = means[j][1];
        result = ipfmNew.run(p, q.runMethod);
        ps = ipfmNew.powerSpectrum(result.tK, result.rr, p.tMax, q.powerSpectrumMethod);

        w.lf[j] = ipfmNew.lf(ps.f, ps.P);
        w.hf[j] = ipfmNew.hf(ps.f, ps.P);
        m[j] = result.y.m;
    }

    // Normalize relative to homeostasis
    w.lf = numeric.div(w.lf, w.lf[0]);
    w.hf = numeric.div(w.hf, w.hf[0]);

    // Interpolate m before plotting
    w.ti = numeric.linspace(0, 20, 100);
    w.mi = [];
    for (j = 0; j < m.length; j++) {
        w.mi[j] = fakelab.interp1(result.t, m[j], w.ti)
    }

    postMessage(w);
};