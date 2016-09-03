"use strict"

var quotes = [
  {
    quote: "Do you ever feel\n" +
           "like a [[cardboard box]]?",
    author: "Katy Perry"
  },
  {
    quote: "Any person ... any [[box]]",
    author: "Ezra Cornell"
  }
];

var quote = quotes[Math.floor(Math.random() * quotes.length)];

quote.quote = quote.quote
                .replace("[[", "<span class=\"cardboard\">")
                .replace("]]", "</span>");
quote.author = "-" + quote.author;

var quoteHolder = document.getElementById('quote');
var authorHolder = document.getElementById('author');

quoteHolder.innerHTML = quote.quote;
authorHolder.innerHTML = quote.author
