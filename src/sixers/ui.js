(function (d3) {
    "use strict";

    // Based on http://techslides.com/demos/d3/d3-histogram-generator.html
    function tweetsHistogram() {
        var bar, buckets, container, data, height, margin, numTweets, svg, width, x, xAxis, xlabel, y, ylabel;

        container = document.getElementById("tweets-histogram");
        numTweets = [3062, 3151, 3083, 2850, 3029, 614, 3141, 3070, 1, 3151, 430, 3153, 3189, 3089, 3193, 52, 41, 3177, 3201, 3063, 103, 3166, 13, 908, 2576, 3124, 3, 3216, 702, 999, 3058, 3044, 233, 3139, 1541, 3200, 1571, 3132, 3175, 10, 3098, 3051, 392, 1993, 1553, 583, 3107, 3143, 3150, 3220, 3, 91, 3137, 723, 3137, 1303, 995, 3155, 3, 932, 3157, 3105, 153, 3168, 3061, 8, 406, 3177, 2138, 3037, 3157, 3185, 3170, 3186, 3129, 2675, 16, 3196];
        buckets = 10;
        xlabel = "Number of Tweets";
        ylabel = "Players";

        margin = {top: 10, right: 30, bottom: 40, left: 30};
        width = container.offsetWidth - margin.left - margin.right;
        height = container.offsetHeight - margin.top - margin.bottom;

        x = d3.scale.linear()
            .domain([0, d3.max(numTweets) + 1])
            .range([0, width]);


        data = d3.layout.histogram()
            .bins(x.ticks(buckets))(numTweets);

        y = d3.scale.linear()
            .domain([0, d3.max(data, function (d) { return d.y; })])
            .range([height, 0]);


        xAxis = d3.svg.axis()
            .scale(x)
            .ticks(buckets)
            .orient("bottom");

        svg = d3.select("#tweets-histogram").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        bar = svg.selectAll(".histogram-bar")
            .data(data)
            .enter().append("g")
            .attr("class", "histogram-bar")
            .attr("transform", function (d) { return "translate(" + x(d.x) + "," + y(d.y) + ")"; });

        bar.append("rect")
            .attr("x", 1)
            .attr("width", x(data[0].dx) - 1)
            .attr("height", function (d) { return height - y(d.y); });

        bar.append("text")
            .attr("dy", ".75em")
            .attr("y", 6)
            .attr("x", x(data[0].dx) / 2)
            .attr("text-anchor", "middle")
            .attr("style", "fill:#fff")
            .text(function (d) { return d.y; });

        svg.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        svg.append("text")
                    .attr("text-anchor", "middle")
                    .attr("class", "histogram-black")
                    .attr("transform", "translate(" + (width / 2) + "," + (height + 40) + ")")
                    .text(xlabel);

        svg.append("text")
                    .attr("text-anchor", "middle")
                    .attr("class", "black")
                    .attr("transform", "translate(" + (-10) + "," + (height / 2) + ")rotate(-90)")
                    .text(ylabel);
    }

    // Based on http://bl.ocks.org/weiglemc/6185069
    function scatter(container, dataset, xValue, yValue, xLim, yLim, xLabel, yLabel, r) {
        var div, height, margin, svg, width, xAxis, xMap, xScale, xTicks, yAxis, yMap, yScale;

        margin = {top: 20, right: 20, bottom: 20, left: 40};
        width = container.offsetWidth - margin.left - margin.right;
        height = container.offsetHeight - margin.top - margin.bottom;

        if (width < 250) {
            xTicks = 6;
        } else {
            xTicks = 10;
        }

        // setup x 
        xScale = d3.scale.linear().range([0, width]); // value -> display
        xMap = function (d) { return xScale(xValue(d)); }; // data -> display
        xAxis = d3.svg.axis().scale(xScale).orient("bottom").ticks(xTicks);
        xScale.domain(xLim);

        // setup y
        yScale = d3.scale.linear().range([height, 0]); // value -> display
        yMap = function (d) { return yScale(yValue(d)); }; // data -> display
        yAxis = d3.svg.axis().scale(yScale).orient("left").ticks(6);
        yScale.domain(yLim);

        //Create SVG element
        svg = d3.select("#" + container.id)
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        // Tooltips
        div = d3.select("#" + container.id).append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

        // x-axis
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
          .append("text")
            .attr("class", "label")
            .attr("x", width)
            .attr("y", -6)
            .style("text-anchor", "end")
            .text(xLabel);

        // y-axis
        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
          .append("text")
            .attr("class", "label")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text(yLabel);

        // Points
        svg.selectAll("circle")
            .data(dataset)
            .enter()
            .append("circle")
            .style("fill", "#3071A9")
            .style("opacity", 0.4)
            .style("stroke", "black")
            .style("stroke-opacity", 1)
            .style("stroke-width", 1)
            .attr("cx", function (d) { return xMap(d); })
            .attr("cy", function (d) { return yMap(d); })
            .attr("r", r)
            .on("mouseover", function (d) {
                div.transition()
                    .duration(200)
                    .style("opacity", 0.8);
                var parentOffset = $(this).parent().offset();
                div.text(d.name)
                    .style("left", (d3.event.pageX - parentOffset.left) + "px")
                    .style("top", (d3.event.pageY - parentOffset.top - 28) + "px");
            })
            .on("mouseout", function () {
                div.transition()
                    .duration(500)
                    .style("opacity", 0);
            });

        return {
            svg: svg,
            xScale: xScale,
            yScale: yScale
        };
    }

    function sentimentAnalysisScatter() {
        var container, dataset, s, xValue, yValue;

        dataset = [{"polarity": 0.13913332058103645, "name": "Aaron Harrison", "subjectivity": 0.2825213053813642}, {"polarity": 0.12876410627768334, "name": "Alan Williams", "subjectivity": 0.28659839164091916}, {"polarity": 0.1873189393137368, "name": "Alex Poythress", "subjectivity": 0.3160886650170647}, {"polarity": 0.12216278061153808, "name": "Amida Brimah", "subjectivity": 0.29861451678600837}, {"polarity": 0.15924850477756722, "name": "Andrew Harrison", "subjectivity": 0.3063026156009003}, {"polarity": 0.18675740654568018, "name": "Andzejs Pasecniks", "subjectivity": 0.3166563259397136}, {"polarity": 0.14157193296671514, "name": "Austin Nichols", "subjectivity": 0.27524027656608885}, {"polarity": 0.1145855756697258, "name": "Bobby Portis", "subjectivity": 0.2633713780383574}, {"polarity": 0.20350395981408698, "name": "Branden Dawson", "subjectivity": 0.36933190589486475}, {"polarity": 0.18053804687837072, "name": "Brandon Ashley", "subjectivity": 0.3595006811971095}, {"polarity": 0.10187053047503428, "name": "Briante Weber", "subjectivity": 0.2567008983628748}, {"polarity": 0.12882666175684235, "name": "Brice Johnson", "subjectivity": 0.3391589792606977}, {"polarity": 0.19894006975098866, "name": "Buddy Hield", "subjectivity": 0.3211766489763021}, {"polarity": 0.23002438673319847, "name": "Cameron Ridley", "subjectivity": 0.36380755187442015}, {"polarity": 0.16827670236638861, "name": "Chris Walker", "subjectivity": 0.3409179261892129}, {"polarity": 0.06930194589187877, "name": "Cliff Alexander", "subjectivity": 0.18630811412227427}, {"polarity": 0.19173135165757355, "name": "Dakari Johnson", "subjectivity": 0.34063503632022035}, {"polarity": 0.13325104484739836, "name": "Devin Booker", "subjectivity": 0.2760090991663177}, {"polarity": 0.26449521763769496, "name": "Dorian Finney-Smith", "subjectivity": 0.3997368244009204}, {"polarity": 0.2317121991459627, "name": "Egemen Guven", "subjectivity": 0.32841257097371235}, {"polarity": 0.09385642465056525, "name": "Frank Kaminsky", "subjectivity": 0.3258522184737771}, {"polarity": 0.18142577988810848, "name": "Georges Niang", "subjectivity": 0.35277229296954854}, {"polarity": 0.009997477445394113, "name": "Guillem Vives", "subjectivity": 0.07302416376490448}, {"polarity": 0.05749326335263837, "name": "Ilimane Diop", "subjectivity": 0.14942720859387532}, {"polarity": 0.11779706149937344, "name": "Isaiah Taylor", "subjectivity": 0.31347003911265836}, {"polarity": 0.20557249363763072, "name": "Jahlil Okafor", "subjectivity": 0.3580194113903342}, {"polarity": 0.1259641183194891, "name": "Jerian Grant", "subjectivity": 0.304513051014565}, {"polarity": 0.07319299083284027, "name": "Jordan Mickey", "subjectivity": 0.25591065665773644}, {"polarity": 0.14260421467866036, "name": "Joseph Young", "subjectivity": 0.2922026673787132}, {"polarity": 0.21721679738306765, "name": "Justin Jackson", "subjectivity": 0.34759997949335864}, {"polarity": 0.09382271362097036, "name": "Justise Winslow", "subjectivity": 0.2882885073307326}, {"polarity": 0.14704074285118385, "name": "Juwan Staten", "subjectivity": 0.2949482607069243}, {"polarity": 0.18032832551597822, "name": "Karl Towns", "subjectivity": 0.3305021768932363}, {"polarity": 0.14542363166287375, "name": "Kelly Oubre", "subjectivity": 0.2780621021791137}, {"polarity": 0.19132363172541753, "name": "Kenan Sipahi", "subjectivity": 0.3681881313131313}, {"polarity": 0.1671740149264607, "name": "Kennedy Meeks", "subjectivity": 0.293433031724552}, {"polarity": 0.1169597674892083, "name": "Kevon Looney", "subjectivity": 0.3077361675969211}, {"polarity": 0.24355916352325005, "name": "Kristaps Porzingis", "subjectivity": 0.34899163158168317}, {"polarity": 0.1910414593167253, "name": "LeBryan Nash", "subjectivity": 0.29566759945582094}, {"polarity": 0.12275366264534628, "name": "Marcus Foster", "subjectivity": 0.26785514998929755}, {"polarity": 0.1463669849399901, "name": "Marcus Lee", "subjectivity": 0.3054718854012788}, {"polarity": 0.17687812666776678, "name": "Marcus Paige", "subjectivity": 0.3616883490129622}, {"polarity": 0.08715205653933908, "name": "Michael Qualls", "subjectivity": 0.28706378435877217}, {"polarity": 0.15122687638420695, "name": "Mike Tobey", "subjectivity": 0.3186005014912346}, {"polarity": 0.11839845256660309, "name": "Montrezl Harrell", "subjectivity": 0.2809798805487372}, {"polarity": 0.15018515613096378, "name": "Moses Kingsley", "subjectivity": 0.3127949870188931}, {"polarity": 0.1672422155986461, "name": "Mouhammadou Jaiteh", "subjectivity": 0.2654568296025579}, {"polarity": 0.09685771378833288, "name": "Myles Turner", "subjectivity": 0.2669019034466743}, {"polarity": 0.15183389831957125, "name": "Perry Ellis", "subjectivity": 0.2683803305262528}, {"polarity": 0.1564709609201826, "name": "R.J. Hunter", "subjectivity": 0.31737339564054107}, {"polarity": 0.23501943866793587, "name": "Rashad Vaughn", "subjectivity": 0.3556701251646933}, {"polarity": 0.148512680989903, "name": "Ron Baker", "subjectivity": 0.2843876593807547}, {"polarity": 0.19322681458814356, "name": "Rondae Hollis-Jefferson", "subjectivity": 0.330025814370394}, {"polarity": 0.0695706634763362, "name": "Sam Dekker", "subjectivity": 0.26822534220933225}, {"polarity": 0.09272530353382301, "name": "Sindarius Thornwell", "subjectivity": 0.24973321423648115}, {"polarity": 0.13903527515931352, "name": "Stanley Johnson", "subjectivity": 0.2775095679145027}, {"polarity": 0.14014142134341553, "name": "Terry Rozier", "subjectivity": 0.29333156136111377}, {"polarity": 0.1494347292161616, "name": "Theo Pinson", "subjectivity": 0.29767307243285335}, {"polarity": 0.14977601463611961, "name": "Trey Lyles", "subjectivity": 0.2970568765207707}, {"polarity": 0.17588193867271773, "name": "Tyus Jones", "subjectivity": 0.3339737293361513}, {"polarity": 0.18096032931392214, "name": "Wayne Selden", "subjectivity": 0.29327351625845255}, {"polarity": 0.1364911507599556, "name": "Willie Cauley-Stein", "subjectivity": 0.2913592753271977}, {"polarity": 0.16601740271675636, "name": "Winston Shepard", "subjectivity": 0.3136287269151772}, {"polarity": 0.21168955862839653, "name": "Zak Irvin", "subjectivity": 0.3244648730435643}];

        container = document.getElementById("sentiment-analysis-scatter");

        xValue = function (d) { return d.polarity; };
        yValue = function (d) { return d.subjectivity; };

        s = scatter(container, dataset, xValue, yValue, [-1, 1], [0, 1], "Polarity", "Subjectivity", 10);

        s.svg.append("text")
            .attr("x", s.xScale(0.9))
            .attr("y", s.yScale(0.85))
            .text("Positive and subjective")
            .attr("text-anchor", "end")
            .attr("font-family", "sans-serif")
            .attr("font-size", "20px");

        s.svg.append("text")
            .attr("x", s.xScale(-0.9))
            .attr("y", s.yScale(0.1))
            .text("Negative and objective")
            .attr("font-family", "sans-serif")
            .attr("font-size", "20px");
    }

    function contentAnalysisScatters() {
        var container, dataset, s, xValue, yValue;

        dataset = [{name:"Aaron Harrison",basketball:59.0,girls:18.8,other:21.6},{name:"Alan Williams",basketball:60.5,girls:4.7,other:34.1},{name:"Alex Poythress",basketball:53.2,girls:13.3,other:32.4},{name:"Amida Brimah",basketball:34.3,girls:8.0,other:57.1},{name:"Andrew Harrison",basketball:54.1,girls:19.2,other:25.9},{name:"Austin Nichols",basketball:34.5,girls:6.0,other:59.3},{name:"Bobby Portis",basketball:61.9,girls:1.4,other:36.0},{name:"Branden Dawson",basketball:37.3,girls:12.7,other:48.1},{name:"Briante Weber",basketball:21.7,girls:50.2,other:26.0},{name:"Brice Johnson",basketball:38.0,girls:8.2,other:52.3},{name:"Buddy Hield",basketball:37.3,girls:37.3,other:24.4},{name:"Cameron Ridley",basketball:42.5,girls:22.0,other:35.0},{name:"Chris Walker",basketball:65.7,girls:6.1,other:27.5},{name:"Cliff Alexander",basketball:41.0,girls:12.2,other:43.9},{name:"Dakari Johnson",basketball:76.7,girls:0.6,other:22.4},{name:"Devin Booker",basketball:72.0,girls:1.8,other:26.0},{name:"Frank Kaminsky",basketball:44.9,girls:4.4,other:49.9},{name:"Georges Niang",basketball:47.3,girls:5.2,other:45.7},{name:"Isaiah Taylor",basketball:61.4,girls:4.7,other:33.5},{name:"Jahlil Okafor",basketball:73.4,girls:3.6,other:22.5},{name:"Jerian Grant",basketball:67.2,girls:3.9,other:28.2},{name:"Jordan Mickey",basketball:60.1,girls:5.5,other:34.4},{name:"Joseph Young",basketball:41.5,girls:9.4,other:48.8},{name:"Justin Jackson",basketball:83.1,girls:0.3,other:15.7},{name:"Justise Winslow",basketball:62.7,girls:3.2,other:34.0},{name:"Juwan Staten",basketball:55.0,girls:2.9,other:41.4},{name:"Karl Towns",basketball:74.1,girls:11.3,other:13.8},{name:"Kelly Oubre",basketball:70.2,girls:3.5,other:24.9},{name:"Kennedy Meeks",basketball:40.2,girls:5.4,other:54.4},{name:"Kevon Looney",basketball:70.0,girls:1.4,other:27.6},{name:"LeBryan Nash",basketball:60.8,girls:2.4,other:35.7},{name:"Marcus Foster",basketball:55.1,girls:3.6,other:41.1},{name:"Marcus Lee",basketball:36.0,girls:30.8,other:32.0},{name:"Marcus Paige",basketball:55.3,girls:2.4,other:41.2},{name:"Michael Qualls",basketball:42.9,girls:27.4,other:28.5},{name:"Montrezl Harrell",basketball:26.5,girls:52.0,other:21.2},{name:"Moses Kingsley",basketball:69.1,girls:1.8,other:28.5},{name:"Myles Turner",basketball:65.1,girls:3.3,other:31.0},{name:"R.J. Hunter",basketball:52.9,girls:2.2,other:44.3},{name:"Rashad Vaughn",basketball:57.8,girls:1.8,other:39.6},{name:"Ron Baker",basketball:47.2,girls:4.3,other:47.4},{name:"Rondae Hollis-Jefferson",basketball:30.2,girls:24.5,other:44.0},{name:"Sindarius Thornwell",basketball:46.8,girls:5.8,other:45.5},{name:"Stanley Johnson",basketball:77.0,girls:0.6,other:21.9},{name:"Terry Rozier",basketball:27.6,girls:34.8,other:36.8},{name:"Theo Pinson",basketball:80.5,girls:1.1,other:18.1},{name:"Trey Lyles",basketball:65.8,girls:5.8,other:27.2},{name:"Tyus Jones",basketball:67.5,girls:1.3,other:31.1},{name:"Wayne Selden",basketball:44.1,girls:3.1,other:51.9},{name:"Willie Cauley-Stein",basketball:36.7,girls:30.2,other:32.7},{name:"Winston Shepard",basketball:66.9,girls:5.5,other:26.6},{name:"Zak Irvin",basketball:43.8,girls:3.4,other:52.4}];

        container = document.getElementById("basketball-girls-scatter");
        xValue = function (d) { return d.basketball; };
        yValue = function (d) { return d.girls; };
        scatter(container, dataset, xValue, yValue, [0, 100], [0, 100], "Basketball %", "Girls %", 5);

        container = document.getElementById("basketball-other-scatter");
        xValue = function (d) { return d.basketball; };
        yValue = function (d) { return d.other; };
        scatter(container, dataset, xValue, yValue, [0, 100], [0, 100], "Basketball %", "Other %", 5);

        container = document.getElementById("girls-other-scatter");
        xValue = function (d) { return d.girls; };
        yValue = function (d) { return d.other; };
        scatter(container, dataset, xValue, yValue, [0, 100], [0, 100], "Girls %", "Other %", 5);
    }

    tweetsHistogram();
    sentimentAnalysisScatter();
    contentAnalysisScatters();

    // For responsiveness on window resize
    window.addEventListener("resize", function () {
        // Remove old graphs before redrawing
        d3.selectAll("svg").remove();

        tweetsHistogram();
        sentimentAnalysisScatter();
        contentAnalysisScatters();
    });

    // Disable form submission, for demo of categorizer
    var forms = document.getElementsByTagName("form");
    for (var i = 0; i < forms.length; i++) {
        forms[i].addEventListener("submit", function (e) {
            e.preventDefault();
        });
    }
}(window.d3));