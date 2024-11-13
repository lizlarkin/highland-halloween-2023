
var bonnieButton = document.querySelector("#bonnieBtn");
// var claudiaButton = document.querySelector("#claudiaBtn");
// var dionButton = document.querySelector("#dionBtn");
var darrenButton = document.querySelector("#darrenBtn");
var garvinButton = document.querySelector("#garvinBtn");
// var jessicaButton = document.querySelector("#jessicaBtn");
var karenButton = document.querySelector("#karenBtn");
var karlaButton = document.querySelector("#karlaBtn");
// var lisaButton = document.querySelector("#lisaBtn");
var lizButton = document.querySelector("#lizBtn");
var miguelButton = document.querySelector("#miguelBtn");
var nathanButton = document.querySelector("#nathanBtn");
var premilaButton = document.querySelector("#premilaBtn");
var robButton = document.querySelector("#robBtn");
var tinaButton = document.querySelector("#tinaBtn");
var voteButton = document.querySelector("#voteBtn");

let introEl = document.querySelector("#Intro-div");
let bonnieEl = document.querySelector("#Bonnie-div");
// let claudiaEl = document.querySelector("#Claudia-div");
// let dionEl = document.querySelector("#Dion-div");
let darrenEl = document.querySelector("#Darren-div");
let garvinEl = document.querySelector("#Garvin-div");
// let jessicaEl = document.querySelector("#Jessica-div");
let karenEl = document.querySelector("#Karen-div");
let karlaEl = document.querySelector("#Karla-div");
// let lisaEl = document.querySelector("#Lisa-div");
let lizEl = document.querySelector("#Liz-div");
let miguelEl = document.querySelector("#Miguel-div");
let nathanEl = document.querySelector("#Nathan-div");
let premilaEl = document.querySelector("#Premila-div");
let robEl = document.querySelector("#Rob-div");
let tinaEl = document.querySelector("#Tina-div");

function start () {
    introEl.style.display="block";
    bonnieEl.style.display="none";
    // claudiaEl.style.display="none";
    // dionEl.style.display="none";
    darrenEl.style.display="none";
    garvinEl.style.display="none";
    // jessicaEl.style.display="none";
    karenEl.style.display="none";
    karlaEl.style.display="none";
    // lisaEl.style.display="none";
    lizEl.style.display="none";
    miguelEl.style.display="none";
    nathanEl.style.display="none";
    premilaEl.style.display="none";
    robEl.style.display="none";
    tinaEl.style.display="none";
}

function reset () {
    introEl.style.display="none";
    bonnieEl.style.display="none";
    // claudiaEl.style.display="none";
    // dionEl.style.display="none";
    darrenEl.style.display="none";
    garvinEl.style.display="none";
    // jessicaEl.style.display="none";
    karenEl.style.display="none";
    karlaEl.style.display="none";
    // lisaEl.style.display="none";
    lizEl.style.display="none";
    miguelEl.style.display="none";
    nathanEl.style.display="none";
    premilaEl.style.display="none";
    robEl.style.display="none";
    tinaEl.style.display="none";
}

start();

// angieButton.addEventListener ("click", function() {
//     reset()
//     angieEl.style.display="block";
// });

bonnieButton.addEventListener ("click", function() {
    reset()
    bonnieEl.style.display="block";
});

// claudiaButton.addEventListener ("click", function() {
//     reset()
//     claudiaEl.style.display="block";
// });

// dionButton.addEventListener ("click", function() {
//     reset()
//     dionEl.style.display="block";
// });

darrenButton.addEventListener ("click", function() {
    reset()
    darrenEl.style.display="block";
});

garvinButton.addEventListener ("click", function() {
    reset()
    garvinEl.style.display="block";
});


// jessicaButton.addEventListener ("click", function() {
//     reset()
//     jessicaEl.style.display="block";
// });

karenButton.addEventListener ("click", function() {
    reset()
    karenEl.style.display="block";
});

karlaButton.addEventListener ("click", function() {
    reset()
    karlaEl.style.display="block";
});

// lisaButton.addEventListener ("click", function() {
//     reset()
//     lisaEl.style.display="block";
// });

lizButton.addEventListener ("click", function() {
    reset()
    lizEl.style.display="block";
});

miguelButton.addEventListener ("click", function() {
    reset()
    miguelEl.style.display="block";
});

nathanButton.addEventListener ("click", function() {
    reset()
    nathanEl.style.display="block";
});

premilaButton.addEventListener ("click", function() {
    reset()
    premilaEl.style.display="block";
});

robButton.addEventListener ("click", function() {
    reset()
    robEl.style.display="block";
});

tinaButton.addEventListener ("click", function() {
    reset()
    tinaEl.style.display="block";
});

voteButton.addEventListener ("click", function() {
    location.href = "https://www.surveymonkey.com/r/GYJ8PYC";
});


