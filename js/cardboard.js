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
    quote: "Move fast and build a [[Box Fort]]",
    author: "Mark Zuckerburg"
  },
  {
    quote: "A [[Box]] by any other name would smell as sweet",
    author: "William Shakespeare"
  },
  {
    quote: "A person who never made a [[Box Fort]] never tried anything new",
    author: "Albert Einstein"
  },
  {
    quote: "Don't cry because it's over, smile because you built a [[Box Fort]]",
    author: "Dr. Suess"
  },
  {
    quote: "You miss 100 percent of the [[Box Days]] you don't attend",
    author: "Wayne Gretzky"
  },
  {
    quote: "You must build the [[Box Fort]] you wish to see in the world",
    author: "Mahatma Gandhi"
  },
  {
    quote: "The cure for boredom is curiosity. The cure for curiosity is [[Cardboard Boxes]]",
    author: "Ellen Parr"
  }
];

var quote = quotes[Math.floor(Math.random() * quotes.length)];

quote.quote = quote.quote
                .replace("[[", "<span class=\"cardboard\">")
                .replace("]]", "</span>");
quote.author = "—" + quote.author;

var quoteHolder = document.getElementById('quote');
var authorHolder = document.getElementById('author');

quoteHolder.innerHTML = quote.quote;
authorHolder.innerHTML = quote.author
