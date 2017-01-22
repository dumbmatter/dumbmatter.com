(function () {
    "use strict";

    function nav() {
        var hash, option, root;

        hash = window.location.hash.slice(1);

        root = hash.split("-")[0];

        $("#nav li").removeClass("active");
        $("#nav-" + root).addClass("active");

        if (hash === "about") {
            $("#nav-options").css('display', 'none');
        } else {
            $("#nav-options").css('display', 'block').html(
                '<ul class="nav nav-list">' +
                '  <li class="nav-header">Options</li>' +
                '  <li id="nav-option-1"><a href="#' + root + '">Default</a></li>' +
                '  <li id="nav-option-2"><a href="#' + root + '-2">Alternative LF and HF calculation</a></li>' +
                '  <li id="nav-option-3"><a href="#' + root + '-3">Amplitudes proportional to means</a></li>' +
                '  <li id="nav-option-4"><a href="#' + root + '-4">Both</a></li>' +
                '</ul>'
            );

            option = hash.split("-")[1];
            if (option) {
                $("#nav-option-" + option).addClass("active");
            } else {
                $("#nav-option-1").addClass("active");
            }
        }
    }

    google.load("visualization", "1", {packages: ["corechart"]});
    google.setOnLoadCallback(function () {
        $(document).ready(function () {
            var hash;

            routie({
                "fig4*": function () {
                    $("#content").html("Loading...");
                    nav();
                    paperFigs.fig4(hash);
                },
                "fig5*": function () {
                    $("#content").html("Loading...");
                    nav();
                    paperFigs.fig5(hash);
                },
                "about": function () {
                    nav();
                    $("#content").html(
                        '<p>These are some figures based on a publication I am currently working on. I wanted a way to show the response of a model to different conditions without creating a ton of separate image files, and this website is what I came up with. When the paper is finished/accepted, I will post it here along with explanations and captions; in the mean time, these are basically just pretty figures implemented in a neat way.</p>' +
                        '<p>Click a link to the left to view a figure. Each figure takes a few seconds to load because they are not just displaying data, they are <b>running simulations and analyses from scratch</b> (initial conditions → model equations → output → FFT → summary plots), all running in JavaScript in your web browser. The only server involved is the one that sent your browser some static JavaScript/CSS/HTML files.</p>' +
                        '<p class="bottom">Libraries used: <a href="http://www.numericjs.com/">Numeric Javascript</a>, <a href="https://developers.google.com/chart/">Google Chart Tools</a>, <a href="http://jquery.com/">jQuery</a>, <a href="http://projects.jga.me/routie/">Routie</a>, <a href="http://twitter.github.io/bootstrap/">Bootstrap</a>' +
                        '<p class="bottom">Made by <a href="http://www.jeremyscheff.com/">Jeremy Scheff</a></p>'
                    );
                }
            });

            if (window.location.hash === "") {
                routie("about");
            }
        });
    });
}());