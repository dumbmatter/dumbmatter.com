window.paperFigs = (function () {
    "use strict";

    var colors;

    // Matlab colors
    colors = ["#0000FF", "#008000", "#FF0000", "#00BFBF", "#BF00BF", "#BFBF00", "#404040"];

    function fig4(filename) {
        var hash0, powerSpectrumMethod, runWorker, runMethod;

        hash0 = window.location.hash;

        if (filename === "fig4-2" || filename === "fig4-4") {
            powerSpectrumMethod = "hr";
        } else {
            powerSpectrumMethod = "rr";
        }
        if (filename === "fig4-3" || filename === "fig4-4") {
            runMethod = "amplitudeProportional";
        } else {
            runMethod = "amplitudeNotProportional";
        }

        runWorker = function (type) {
            var deferred, fig4worker;

            deferred = $.Deferred();

            fig4worker = new Worker("js/fig4worker.js");

            fig4worker.onmessage = function (event) {
                deferred.resolve(event.data);
            };

            fig4worker.postMessage({
                type: type,
                powerSpectrumMethod: powerSpectrumMethod,
                runMethod: runMethod
            });

            return deferred.promise();
        }

        $.when(
            runWorker("linear"),
            runWorker("nonlinear")
        ).done(function () {
            var chart, data, formatter, i, j, offset, options, w;

            if (window.location.hash !== hash0) {
                return;
            }

            formatter = new google.visualization.NumberFormat({pattern: '#.##'});

            $("#content").html(
                '<div class="title4">Linear Model</div>' +
                '<div class="title4">Nonlinear Model</div>' +
                '<div id="fig1" class="plot4 clear"></div>' +
                '<div id="fig2" class="plot4"></div>' +
                '<div id="fig3" class="plot4 clear"></div>' +
                '<div id="fig4" class="plot4"></div>' +
                '<div id="legend" class="legend-bottom clear"></div>'
            );

            w = arguments;

            for (i = 0; i < w.length; i++) {
                if (w[i].type === "linear") {
                    offset = 0;
                } else {
                    offset = 1;
                }

                // Line chart
                data = [["Time (s)", "Homeostasis", "Sympathetic ↑", "Sympathetic ↓", "Parasympathetic ↑", "Parasympathetic ↓"]];
                for (j = 0; j < w[i].ti.length; j++) {
                    if (runMethod === "amplitudeNotProportional" && w[i].type === "linear" && Math.round(w[i].ti[j]) % 2 === 0) {
                        // This makes the identical lines alternate between colors, which is only necessary when runMethod is amplitudeNotProportional
                        data.push([w[i].ti[j], w[i].mi[0][j], w[i].mi[1][j], w[i].mi[2][j], NaN, NaN]);
                    } else {
                        data.push([w[i].ti[j], w[i].mi[0][j], w[i].mi[1][j], w[i].mi[2][j], w[i].mi[3][j], w[i].mi[4][j]]);
                    }
                }
                data = google.visualization.arrayToDataTable(data);
                formatter.format(data, 0);
                formatter.format(data, 1);
                formatter.format(data, 2);
                formatter.format(data, 3);
                formatter.format(data, 4);
                formatter.format(data, 5);
                options = {
                    chartArea: {
                        left: "15%",
                        top: "4%",
                        width: "82%",
                        height: "81%"
                    },
                    colors: colors,
                    fontSize: 14,
                    legend: {position: "none"},
                    lineWidth: 4,
                    vAxis: {
                        minValue: 0,
                        maxValue: 2,
                        title: "m(t)"
                    },
                    hAxis: {
                        title: "Time (s)"
                    }
                };
                chart = new google.visualization.LineChart(document.getElementById("fig" + (1 + offset)));
                chart.draw(data, options);

                // Bar chart
                data = google.visualization.arrayToDataTable([
                    ["Type", "Homeostasis", "Sympathetic ↑", "Sympathetic ↓", "Parasympathetic ↑", "Parasympathetic ↓"],
                    ["LF"].concat(w[i].lf),
                    ["HF"].concat(w[i].hf)
                ]);
                formatter.format(data, 1);
                formatter.format(data, 2);
                formatter.format(data, 3);
                formatter.format(data, 4);
                formatter.format(data, 5);
                options = {
                    chartArea: {
                        left: "15%",
                        top: "4%",
                        width: "82%",
                        height: "87.5%"
                    },
                    colors: colors,
                    fontSize: 14,
                    legend: {position: "none"},
                    vAxis: {
                        viewWindow: {
                            min: 0,
                            max: 4.1
                        },
                        title: "Relative Power"
                    }
                };
                chart = new google.visualization.ColumnChart(document.getElementById("fig" + (3 + offset)));
                chart.draw(data, options);
            }

            // Legend
            options = {
                chartArea: {
                    left: 0,
                    top: "40%",
                    width: "100%",
                    height: 0
                },
                colors: colors,
                fontSize: 14,
                hAxis: {textPosition: "none"},
                legend: {position: "top"}
            };
            chart = new google.visualization.ColumnChart(document.getElementById("legend"));
            chart.draw(data, options);
        });
    }

    function fig5row(row, p, powerSpectrumMethod, runMethod) {
        var deferred, fig5worker;

        deferred = $.Deferred();

        fig5worker = new Worker("js/fig5worker.js");

        fig5worker.onmessage = function (event) {
            deferred.resolve(event.data);
        };

        fig5worker.postMessage({
            row: row,
            p: p,
            powerSpectrumMethod: powerSpectrumMethod,
            runMethod: runMethod
        });

        return deferred.promise();
    }

    function fig5(filename) {
        var hash0, p, p1, p2, p3, powerSpectrumMethod, runMethod;

        hash0 = window.location.hash;

        if (filename === "fig5-2" || filename === "fig5-4") {
            powerSpectrumMethod = "hr";
        } else {
            powerSpectrumMethod = "rr";
        }
        if (filename === "fig5-3" || filename === "fig5-4") {
            runMethod = "amplitudeProportional";
        } else {
            runMethod = "amplitudeNotProportional";
        }

        // Homeostasis
        p = ipfmNew.defaultParams();

        // Hypothesis 1: sym and par both increase, decoupling is due to saturation
        p1 = ipfmNew.defaultParams();
        p1.mNor = 10;
        p1.mAch = 5;
        p1.ach1 = 1;
        p1.ach2 = 1.5;

        // Hypothesis 2: sym increases and par does whatever, decoupling is due to loss of sensitivity
        p2 = ipfmNew.defaultParams();
        p2.mNor = 10;
        p2.mAch = 0.5;
        p2.rAdr = 0.5;
        p2.rCho = 0.5;

        // Hypothesis 3: sym and par do whatever, decoupling is due to loss of sensitivity
        p3 = ipfmNew.defaultParams();
        p3.mNor = 0.5;
        p3.mAch = 5;
        p3.icpm = 1.4;
        p3.rAdr = 0.1;
        p3.rCho = 0.1;

        $.when(
            fig5row(1, p, powerSpectrumMethod, runMethod),
            fig5row(2, p1, powerSpectrumMethod, runMethod),
            fig5row(3, p2, powerSpectrumMethod, runMethod),
            fig5row(4, p3, powerSpectrumMethod, runMethod)
        ).done(function () {
            var chart, data, formatter, i, j, options, w;

            if (window.location.hash !== hash0) {
                return;
            }

            formatter = new google.visualization.NumberFormat({pattern: '#.##'});

            $("#content").html(
                '<div class="title5"><br>adr</div>' +
                '<div class="title5"><br>cho</div>' +
                '<div class="title5"><br>m(t)</div>' +
                '<div class="title5">Relative to homeostasis</div>' +
                '<div class="title5"><br>Autonomic stimuli</div>' +
                '<div id="fig1" class="plot5 clear"></div>' +
                '<div id="fig2" class="plot5"></div>' +
                '<div id="fig3" class="plot5"></div>' +
                '<div id="fig4" class="plot5"></div>' +
                '<div id="fig5" class="plot5"></div>' +
                '<div id="fig6" class="plot5 clear"></div>' +
                '<div id="fig7" class="plot5"></div>' +
                '<div id="fig8" class="plot5"></div>' +
                '<div id="fig9" class="plot5"></div>' +
                '<div id="fig10" class="plot5"></div>' +
                '<div id="fig11" class="plot5 clear"></div>' +
                '<div id="fig12" class="plot5"></div>' +
                '<div id="fig13" class="plot5"></div>' +
                '<div id="fig14" class="plot5"></div>' +
                '<div id="fig15" class="plot5"></div>' +
                '<div id="fig16" class="plot5 clear"></div>' +
                '<div id="fig17" class="plot5"></div>' +
                '<div id="fig18" class="plot5"></div>' +
                '<div id="fig19" class="plot5"></div>' +
                '<div id="fig20" class="plot5"></div>' +
                '<div class="xlabel5 clear">nor</div>' +
                '<div class="xlabel5">ach</div>' +
                '<div class="xlabel5">Time (s)</div>'
            );

            for (j = 0; j < arguments.length; j++) {
                w = arguments[j];

                // Column 1
                data = [["nor", "adr", "adr"]];
                for (i = 0; i < w.neurotransmitterRange.length; i++) {
                    data.push([
                        w.neurotransmitterRange[i],
                        numeric.div(w.neurotransmitterRange[i], numeric.add(w.p.nor1, numeric.mul(w.p.nor2, w.neurotransmitterRange[i]))),
                        numeric.div(w.nori[i], numeric.add(w.p.nor1, numeric.mul(w.p.nor2, w.nori[i])))
                    ]);
                }
                data = google.visualization.arrayToDataTable(data);
                formatter.format(data, 0);
                formatter.format(data, 1);
                formatter.format(data, 2);
                options = {
                    chartArea: {
                        left: "16%",
                        top: "5%",
                        width: "82%",
                        height: "80%"
                    },
                    colors: colors,
                    fontSize: 14,
                    legend: {position: "none"},
                    series: [
                        {
                            lineWidth: 4
                        },
                        {
                            lineWidth: 10
                        }
                    ],
                    hAxis: {
                        format: "#",
                        gridlines: {
                            count: 3
                        }
                    },
                    vAxis: {
                        format: "#.#",
                        gridlines: {
                            count: 3
                        },
                        minValue: 0,
                        maxValue: 1
                    }
                };
                chart = new google.visualization.LineChart(document.getElementById("fig" + (1 + (w.row - 1) * 5)));
                chart.draw(data, options);

                // Column 2
                data = [["ach", "cho", "cho"]];
                for (i = 0; i < w.neurotransmitterRange.length; i++) {
                    data.push([
                        w.neurotransmitterRange[i],
                        numeric.div(w.neurotransmitterRange[i], numeric.add(w.p.ach1, numeric.mul(w.p.ach2, w.neurotransmitterRange[i]))),
                        numeric.div(w.achi[i], numeric.add(w.p.ach1, numeric.mul(w.p.ach2, w.achi[i])))
                    ]);
                }
                data = google.visualization.arrayToDataTable(data);
                formatter.format(data, 0);
                formatter.format(data, 1);
                formatter.format(data, 2);
                chart = new google.visualization.LineChart(document.getElementById("fig" + (2 + (w.row - 1) * 5)));
                chart.draw(data, options);

                // Column 3
                data = [["Time (s)", "m(t)"]];
                for (i = 0; i < w.ti.length; i++) {
                    data.push([w.ti[i], w.mi[i]]);
                }
                data = google.visualization.arrayToDataTable(data);
                formatter.format(data, 0);
                formatter.format(data, 1);
                options.vAxis.viewWindow = {
                    min: 0.8,
                    max: 1.5
                };
                chart = new google.visualization.LineChart(document.getElementById("fig" + (3 + (w.row - 1) * 5)));
                chart.draw(data, options);

                // Column 4
                data = google.visualization.arrayToDataTable([
                    ["Type", "Relative Power"],
                    ["HR", w.hr / w.hr0],
                    ["LF", w.lf / w.lf0],
                    ["HF", w.hf / w.hf0]
                ]);
                formatter.format(data, 1);
                options = {
                    chartArea: {
                        left: "16%",
                        top: "5%",
                        width: "82%",
                        height: "80%"
                    },
                    colors: colors,
                    fontSize: 14,
                    legend: {position: "none"},
                    vAxis: {
                        gridlines: {
                            count: 4
                        },
                        viewWindow: {
                            min: 0,
                            max: 1.5
                        }
                    }
                };
                chart = new google.visualization.ColumnChart(document.getElementById("fig" + (4 + (w.row - 1) * 5)));
                chart.draw(data, options);

                // Column 5
                data = google.visualization.arrayToDataTable([
                    ["Type", "Sympathetic ↑", "Sympathetic ↓", "Parasympathetic ↑", "Parasympathetic ↓"],
                    ["HR"].concat(numeric.div(w.hrs, w.hr0)),
                    ["LF"].concat(numeric.div(w.lfs, w.lf0)),
                    ["HF"].concat(numeric.div(w.hfs, w.hf0))
                ]);
                formatter.format(data, 1);
                formatter.format(data, 2);
                formatter.format(data, 3);
                formatter.format(data, 4);
                options = {
                    chartArea: {
                        left: "16%",
                        top: "5%",
                        width: "82%",
                        height: "80%"
                    },
                    colors: colors.slice(1),
                    fontSize: 14,
                    legend: {position: "none"},
                    vAxis: {
                        gridlines: {
                            count: 4
                        },
                        viewWindow: {
                            min: 0,
                            max: 3
                        }
                    }
                };
                chart = new google.visualization.ColumnChart(document.getElementById("fig" + (5 + (w.row - 1) * 5)));
                chart.draw(data, options);
            }
        });
    }

    return {
        fig4: fig4,
        fig5: fig5
    };
}());