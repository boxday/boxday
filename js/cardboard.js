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
  },
  {
    quote: "[[Box Day]] is great",
    author: "Kathy Zoner"
  },
  {
    quote: "The [[Box Fort]] just got 10 feet taller!",
    author: "Donald Trump"
  },
  {
    quote: "I'mma be, I'mma be, I'mma I'mma I'mma [[box]]",
    author: "will.i.am"
  },
  {
    quote: "[[Boxes]] out for Harambe",
    author: "<a href=\"https://www.reddit.com/r/harambe\">Reddit</a>"
  },
  {
    quote: "Build a fort up on that slope, that's a [[Box Day]]",
    author: "Kanye West/Big Sean"
  },
  {
    quote: "Move fast and built a [[Box Fort]]",
    author: "Mark Zuckerburg"
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
