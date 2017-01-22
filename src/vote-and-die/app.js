var appState = {
    state: 'New Jersey',
    distance: 2,
    transportation: 'Car',
    resultVisible: false
};

var formElement = document.getElementById('form');
var calculateElement = document.getElementById('calculate');
var resultElement = document.getElementById('result');
var resultTextElement = document.getElementById('result-text');
var twitterButtonElement = document.getElementById('twitter-button2');
var stateElement = document.getElementById('state');
var distanceElement = document.getElementById('distance');
var transportationElement = document.getElementById('transportation');
var showExplanationElement = document.getElementById('show-explanation');
var explanationElement = document.getElementById('explanation');

var swingOdds = {
    'Alabama': 8.1585e-11,
    'Alaska': 4.0796e-10,
    'Arizona': 8.4531e-10,
    'Arkansas': 9.7008e-10,
    'California': 1.4064e-09,
    'Colorado': 1.0027e-07,
    'Connecticut': 2.1056e-09,
    'Delaware': 2.0878e-09,
    'District of Columbia': 2.0721e-12,
    'Florida': 2.6628e-08,
    'Georgia': 1.3264e-09,
    'Hawaii': 6.9937e-10,
    'Idaho': 1.0425e-10,
    'Illinois': 4.2082e-10,
    'Indiana': 2.0487e-08,
    'Iowa': 8.0978e-09,
    'Kansas': 4.3922e-10,
    'Kentucky': 4.0324e-10,
    'Louisiana': 5.0158e-10,
    'Maine': 1.4524e-08,
    'Maryland': 5.3789e-10,
    'Massachusetts': 9.0457e-10,
    'Michigan': 1.6329e-08,
    'Minnesota': 3.0858e-08,
    'Mississippi': 1.4487e-09,
    'Missouri': 1.5618e-08,
    'Montana': 6.5501e-09,
    'Nebraska': 1.3493e-09,
    'Nevada': 3.5048e-08,
    'New Hampshire': 1.2646e-07,
    'New Jersey': 6.7321e-09,
    'New Mexico': 1.6421e-07,
    'New York': 5.2393e-10,
    'North Carolina': 1.6201e-08,
    'North Dakota': 1.8017e-08,
    'Ohio': 3.0717e-08,
    'Oklahoma': 4.9895e-11,
    'Oregon': 4.7062e-09,
    'Pennsylvania': 3.0923e-08,
    'Rhode Island': 2.0022e-09,
    'South Carolina': 4.0324e-10,
    'South Dakota': 3.1678e-09,
    'Tennessee': 3.3107e-10,
    'Texas': 2.3492e-10,
    'Utah': 1.7585e-10,
    'Vermont': 7.8829e-10,
    'Virginia': 1.2657e-07,
    'Washington': 5.5681e-09,
    'West Virginia': 2.0681e-09,
    'Wisconsin': 1.1957e-08,
    'Wyoming': 1.2845e-10
};

var deathOdds = {
    'Bicycle': 1e-7,
    'Car': 1.23e-8,
    'Motorcycle': 4.5e-7,
    'Public Transportation': 4.5e-10,
    'Walk': 1.43e-8
};

function updateUrl() {
    if (appState.resultVisible) {
        // Do this instead of directly setting window.location.hash to prevent adding extra history entries
        var baseUrl = window.location.href.split('#')[0];
        window.location.replace(baseUrl + '#' + encodeURIComponent(appState.state + ',' + appState.distance + ',' + appState.transportation));
    }
}

function updateResult() {
    var distance = parseFloat(distanceElement.value);

    if (!isNaN(distance) && distance >= 0) {
        var state = stateElement.value;
        var transportation = transportationElement.value;

        var transportationText;
        if (transportation === "Bicycle") {
            transportationText = "ride a bike";
        } else if (transportation === "Car") {
            transportationText = "drive a car";
        } else if (transportation === "Motorcycle") {
            transportationText = "ride a motorcycle";
        } else if (transportation === "Public Transportation") {
            transportationText = "take public transportation";
        } else if (transportation === "Walk") {
            transportationText = "walk";
        }
        var msg = 'If you live in ' + state + ' and ' + transportationText + ' ' + distance + ' miles to your polling place, you are <span class="text-highlight">';

        var odds = 2 * distance * deathOdds[transportation] / swingOdds[state];

        var msgAfter, msgBefore, twitterMsg;
        if (odds > 1) {
            msgBefore = '<img src="gravesite-with-flowers-johnny-jay.svg" align="left" width="150" />Oh no! ';
            msgAfter = Number(odds).toPrecision(3) + ' times more likely to die on your way to the polling booth</span> than you are to cast a meaningful vote in the 2016 presidential election.';
            twitterMsg = 'I am ' + Number(odds).toPrecision(3) + ' times more likely to die on my way to vote than cast a meaningful vote for president';
        } else {
            odds = swingOdds[state] / (distance * deathOdds[transportation]);
            msgBefore = '<img src="thumbs_up.svg" align="left" width="130" style="margin-right: 20px" />Congratulations! ';
            msgAfter = Number(odds).toPrecision(3) + ' times more likely to cast a meaningful vote</span> in the 2016 presidential election than you are to die on your way to the polling booth.';
            twitterMsg = 'I am ' + Number(odds).toPrecision(3) + ' times more likely to cast a meaningful vote for president than die on my way to vote';
        }

        resultTextElement.innerHTML = msgBefore + msg + msgAfter;

        twitterButtonElement.innerHTML = '<a id="twitter-button" href="https://twitter.com/intent/tweet?button_hashtag=VoteAndDie&text=' + encodeURIComponent(twitterMsg) + '" class="twitter-hashtag-button" data-size="large" data-url="http://dumbmatter.com/vote-and-die/">Tweet #VoteAndDie</a>';
        if (typeof twttr !== 'undefined') {
            twttr.widgets.load();
        }

        appState.state = state;
        appState.distance = distance;
        appState.transportation = transportation;
    } else {
        resultTextElement.innerHTML = 'Enter a valid number for the distance to your polling place in miles.';
    }
}

function showResult() {
    resultElement.style.display = 'block';
    calculate.style.display = 'none';
    appState.resultVisible = true;
    updateUrl();
}

function showExplanation() {
    explanationElement.style.display = 'block';
    showExplanationElement.style.display = 'none';
}

function onFormChange() {
    if (appState.resultVisible) {
        updateResult();
        updateUrl();
    }
}





// Load initial state, either defaults or from URL

var parts = decodeURIComponent(window.location.hash).split(',');
parts[0] = parts[0].slice(1); // Get rid of #
if (parts.length === 3 && swingOdds.hasOwnProperty(parts[0]) && !isNaN(parseFloat(parts[1])) && deathOdds.hasOwnProperty(parts[2])) {
    var appState = {
        state: parts[0],
        distance: parts[1],
        transportation: parts[2],
        resultVisible: true
    };
}

stateElement.value = appState.state;
distanceElement.value = appState.distance;
transportationElement.value = appState.transportation;

updateResult();

if (appState.resultVisible) {
    showResult();
}



// Event listeners

calculateElement.addEventListener('click', function (e) {
    e.preventDefault();

    updateResult();
    showResult();
});

showExplanationElement.addEventListener('click', function (e) {
    e.preventDefault();

    showExplanation();
});

stateElement.addEventListener('change', onFormChange);
distanceElement.addEventListener('change', onFormChange);
transportationElement.addEventListener('change', onFormChange);