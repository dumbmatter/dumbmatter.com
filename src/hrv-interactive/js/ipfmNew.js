ipfmNew = (function () {
    "use strict";

    function defaultParams(type) {
        type = type !== undefined ? type : "nonlinear";

        return {
            // Mean autonomic tones
            mNor: 1, // Sympathetic
            mAch: 1, // Parasympathetic

            // Amplitudes of upstream oscillators
            aNor: 0.25,
            aAch: 0.25,

            // Frequencies of upstream oscillators
            fNor: 0.095, // Average frequency of standard LF range
            fAch: 0.275, // Average frequency of standard HF range

            // Norepinephrine-adrenergic receptor sigmoid
            nor1: 1,
            nor2: type === "linear" ? 0 : 1,

            // Acytlcholine-cholinergic receptor sigmoid
            ach1: 1,
            ach2: type === "linear" ? 0 : 1,

            // Linear combination in m(t)
            rCho: 1,
            rAdr: 1,

            // Intrinsic cardiac pacemaker parameter - sets the default mean beating rate of
            // the heart in the absence of autonomic stimulation
            icpm: 1, // [1/s]

            // Time
            dt: 0.01, // [s]
            tMax: 100 // [s]
        };
    }

    function run(p, method) {
        var i, j, jj, pi, q, rr, t, tK, w, y;

        method = method !== undefined ? method : "amplitudeNotProportional";

        pi = 3.141592653589793;

        t = numeric.linspace(0, p.tMax, Math.round(p.tMax / p.dt)); // [s]

        // Model

        y = {};

        // Neurotransmitter concentrations at the SA node, factoring in time delay
        // for stimulus. A value of 1 is the homeostatic mean.
        if (method === "amplitudeProportional") {
            y.nor = numeric.mul(p.mNor, numeric.add(1, numeric.mul(p.aNor, numeric.sin(numeric.mul(2, pi, p.fNor, t))))); // Norepinephrine
            y.ach = numeric.mul(p.mAch, numeric.add(1, numeric.mul(p.aAch, numeric.sin(numeric.mul(2, pi, p.fAch, t))))); // Acetylcholine
        } else {
            y.nor = numeric.add(p.mNor, numeric.mul(p.aNor, numeric.sin(numeric.mul(2, pi, p.fNor, t)))); // Norepinephrine
            y.ach = numeric.add(p.mAch, numeric.mul(p.aAch, numeric.sin(numeric.mul(2, pi, p.fAch, t)))); // Acetylcholine
        }

        // Sigmoidal binding
        y.rAdr = numeric.div(y.nor, numeric.add(p.nor1, numeric.mul(p.nor2, y.nor))); // Activated adrenergic receptors
        y.rCho = numeric.div(y.ach, numeric.add(p.ach1, numeric.mul(p.ach2, y.ach))); // Activated cholinergic receptors

        // m(t)
        y.m = numeric.add(p.icpm, numeric.mul(p.rAdr, y.rAdr), numeric.mul(-1, p.rCho, y.rCho));


        //// IPFM
        i = 0;
        j = 1;
        w = 1;
        tK = [];
        tK[w - 1] = 0;
        jj = y.m.length - 1;
        while (j < jj) {
            q = 0;

            while (q < 1) {
                q = fakelab.trapz(t.slice(i, j + 1), y.m.slice(i, j + 1));

                if (j < jj) {
                    j = j + 1;
                } else {
                    break;
                }
            }

            if (j < jj) { // Ignore the last section since it probably hasn't reached the threshold
                i = j - 1;
                tK[w] = t[i];
                w = w + 1;
            }
        }

        //// HR/HRV calculation

        rr = fakelab.diff(tK);

        return {
            rr: rr,
            tK: tK,
            t: t,
            y: y
        };
    }

    function powerSpectrum(tK, rr, tMax, method) {
        var dt, i, f,  Fs, L, nfft, P, rrInterp, tRr, x, xPadded, Yabs;

        method = method !== undefined ? method : "rr";

        if (method === "hr") {
            rr = numeric.div(60, rr);
        }

        dt = 1; // For interpolation before power spectrum estimation
        tRr = numeric.linspace(0, tMax - 10, Math.round((tMax - 10) / dt)); // Cut off last 10 seconds because the last beat might occur before the end of the time exactly
        rrInterp = fakelab.interp1(tK.slice(0, -1), rr, tRr);
        x = numeric.sub(rrInterp, fakelab.mean(rrInterp)); // Subtract the mean

        Fs = 1 / dt;
        L = rrInterp.length;
        nfft = Math.pow(2, fakelab.nextpow2(L)); // Next power of 2 from length of data
        xPadded = x;
        while (xPadded.length < nfft) {
            xPadded.push(0);
        }
        Yabs = numeric.div((new numeric.T(xPadded)).fft().abs().x, L);
        P = numeric.mul(2, Yabs.slice(0, nfft/2+1));

        f = numeric.mul(Fs / 2, numeric.linspace(0, 1, nfft / 2 + 1));

        return {
            f: f,
            P: P
        };
    }

    function lf(f, P) {
        var fi, Pi;

        fi = [0.04];
        while (fi[fi.length - 1] < 0.15) {
            fi.push(fi[fi.length - 1] + 0.001);
        }
        Pi = fakelab.interp1(f, P, fi);

        return fakelab.trapz(fi, Pi);
    }

    function hf(f, P) {
        var fi, Pi;

        fi = [0.15];
        while (fi[fi.length - 1] < 0.5) {
            fi.push(fi[fi.length - 1] + 0.001);
        }
        Pi = fakelab.interp1(f, P, fi);

        // Floating point hack
        fi[fi.length - 1] = f[f.length - 1];
        Pi[Pi.length - 1] = P[P.length - 1];

        return fakelab.trapz(fi, Pi);
    }

    return {
        defaultParams: defaultParams,
        run: run,
        powerSpectrum: powerSpectrum,
        lf: lf,
        hf: hf
    };
}());