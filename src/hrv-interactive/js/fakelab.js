/**
 * Some functions designed to replicate or be similar to MATLAB functions.
 */
fakelab = (function () {
    "use strict";

    function diff(x) {
        var i, y;

        y = [];
        for (i = 0; i < x.length - 1; i++) {
            y[i] = x[i + 1] - x[i];
        }

        return y;
    }

    // x and xq must be monotonically increasing
    // Returns NaN for any xq larger or smaller than every value in x
    function interp1(x, v, xq) {
        var i, j, jPrev, vq;

        jPrev = 0;
        vq = [];
        for (i = 0; i < xq.length; i++) {
            // Find nearest neighbors in x
            for (j = jPrev; j < x.length; j++) {
                if (x[j] > xq[i]) {
                    break;
                }
            }
            jPrev = j;

            if (j === 0 || j === x.length) {
                // Can't go out of range
                vq[i] = NaN;
            } else {
                vq[i] = v[j - 1] + (v[j] - v[j - 1]) / (x[j] - x[j - 1]) * (xq[i] - x[j - 1]);
            }
        }

        return vq;
    }

    function max(x) {
        var i, y;

        y = -Infinity;
        for (i = 0; i < x.length; i++) {
            if (x[i] > y) {
                y = x[i];
            }
        }

        return y;
    }

    function mean(x) {
        var i, sum;

        sum = 0;
        for (i = 0; i < x.length; i++) {
            sum += x[i];
        }

        return sum / x.length;
    }

    function min(x) {
        var i, y;

        y = Infinity;
        for (i = 0; i < x.length; i++) {
            if (x[i] < y) {
                y = x[i];
            }
        }

        return y;
    }

    function nextpow2(x) {
        var y;

        y = 0;
        while (Math.pow(2, y) < x) {
            y++;
        }

        return y;
    }

    function trapz(x, y) {
        var i, sum;

        sum = 0;
        for (i = 0; i < x.length - 1; i++) {
            sum += (x[i + 1] - x[i]) * (y[i + 1] + y[i]);
        }
        return sum / 2;
    }

    return {
        diff: diff,
        interp1: interp1,
        max: max,
        mean: mean,
        min: min,
        nextpow2: nextpow2,
        trapz: trapz
    };
}());