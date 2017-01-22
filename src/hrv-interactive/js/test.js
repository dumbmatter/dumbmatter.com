/**
 * basic testing
 */

/*var p, ps, result;

p = defaultParams();

result = run(p);

ps = powerSpectrum(result.tK, result.rr, p.tMax);

$(document).ready(function () {
    fakelab.plot("#fig1", result.t, result.y.nor);
    fakelab.plot("#fig2", result.t, result.y.ach);
    fakelab.plot("#fig3", result.t, result.y.rAdr);
    fakelab.plot("#fig4", result.t, result.y.rCho);
    fakelab.plot("#fig5", result.t, result.y.m);
    plot(result.t, result.y);
});*/





/**
 * test_chiu
 */

$(document).ready(function () {
    var cases, hf, hfUd, i, lf, lfUd, means, meanRr, meanRrUd, p, ps, result;

    p = ipfmNew.defaultParams();

    // Reproduce Chiu's results

    means = [[1, 1], [1.5, 1], [0.5, 1], [1, 1.5], [1, 0.5]];

    meanRr = [0, 0, 0, 0, 0];
    lf = [0, 0, 0, 0, 0];
    hf = [0, 0, 0, 0, 0];

    for (i = 0; i < means.length; i++) {
        p.mNor = means[i][0];
        p.mAch = means[i][1];
        result = ipfmNew.run(p);

        ps = ipfmNew.powerSpectrum(result.tK, result.rr, p.tMax);

        fakelab.plot("#fig" + (i + 1), ps.f, ps.P, {
            xaxes: [{
                axisLabel: "Frequency (Hz)"
            }],
            yaxes: [{
                axisLabel: "Power"
            }]
        });
    /*    title("Power spectrum (fft)");
        xlim([0, 0.4]);*/

        meanRr[i] = fakelab.mean(result.rr);
        lf[i] = ipfmNew.lf(ps.f, ps.P);
        hf[i] = ipfmNew.hf(ps.f, ps.P);
    }

    cases = ["Increase mean sympathetic activity", "Decrease mean sympathetic activity", "Increase mean parasympathetic activity", "Decrease mean parasympathetic activity"];

    for (i = 0; i < cases.length; i++) {
        console.log(cases[i]);

        // Up or down?
        if (meanRr[i + 1] > meanRr[0]) {
            meanRrUd = "Up";
        } else {
            meanRrUd = "Down";
        }
        if (lf[i + 1] > lf[0]) {
            lfUd = "Up";
        } else {
            lfUd = "Down";
        }
        if (hf[i + 1] > hf[0]) {
            hfUd = "Up";
        } else {
            hfUd = "Down";
        }

        console.log("RR: " + meanRrUd + " (" + Math.round(100 * meanRr[i + 1] / meanRr[0]) + "%)");
        console.log("LF: " + lfUd + " (" + Math.round(100 * lf[i + 1] / lf[0]) + "%)");
        console.log("HF: " + hfUd + " (" + Math.round(100 * hf[i + 1] / hf[0]) + "%)");
        console.log(" ");
    }
});