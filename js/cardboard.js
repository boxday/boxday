"use strict"

var quotes = [
    "Do you ever feel\n" +
    "like a <span class=\"cardboard\">cardboard box</span>?\n" +
    "-Katy Perry"
];

var quote = quotes[Math.floor(Math.random() * quotes.length)];

console.log(quote);

var holder = document.getElementById('quote-holder');

holder.innerHTML = quote.quote;
