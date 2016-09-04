"use strict"

var quotes = [
  {
    quote: "Do you ever feel\n" +
           "like a [[Cardboard Box]]?",
    author: "Katy Perry"
  },
  {
    quote: "Any person ... any [[Box]]",
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
    quote: "I'mma be, I'mma be, I'mma I'mma I'mma [[Box]]",
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
  },
  {
    quote: "My [[Box]] runneth over",
    author: "Psalm 23:5"
  },
  {
    quote: "One fort to bring them all and in the [[Cardboard]] bind them\n" +
           "On the Slope of Cornell where the boxes lie",
    author: "J.R.R. Tolkien"
  },
  {
    quote: "Life, Liberty and the pursuit of [[Box Day]]",
    author: "Thomas Jefferson"
  },
  {
    quote: "And I find it kinda funny, I find it kinda sad.\n" +
           "The dreams in which its [[Box Day]] are the best I've ever had",
    author: "Tears for Fears"
  },
  {
    quote: "I love the smell of [[Cardboard]] in the morning!",
    author: "Lieutenant Colonel Bill Kilgore"
  },
  {
    quote: "There's no place like a [[Box Fort]]",
    author: "Dorothy Gale"
  },
  {
    quote: "Tell me about the [[Cardboard]], George",
    author: "John Steinbeck"
  },
  {
    quote: "I have always depended on the [[Boxes]] of strangers",
    author: "Tennessee Williams"
  },
  {
    quote: "[[Box Day's]] the thing wherein I'll catch the conscience of the king",
    author: "William Shakespeare"
  },
  {
    quote: "Where the fear has gone there will be nothing.\n" +
           "Only [[Boxes]] will remain",
    author: "Frank Herbert"
  },
  {
    quote: "Hokey religions and ancient weapons are no substitute for a good [[Box]] at your side, kid",
    author: "Han Solo"
  },
  {
    quote: "We're gonna need a bigger [[Box]]",
    author: "Martin Brody"
  },
  {
    quote: "From Bethe on West to McGraw on Central,\n" +
           "a [[Cardboard]] curtain has descended upon this campus",
    author: "Winston Churchill"
  },
  {
    quote: "I came, I saw, I built a [[Box Fort]]",
    author: "Julius Caesar"
  },
  {
    quote: "The most wasted of all days is one without a [[Box Fort]]",
    author: "e e cummings" 
  },
  {
    quote: "People will forget what you said,\n" +
           "people will forget what you did,\n" +
           "but they will never forget a good [[Box Fort]]",
    author: "Maya Angelou"
  },
  {
    quote: "[[Box Day]] is intelligence having fun",
    author: "Albert Einstein"
  },
  {
    quote: "We build too many walls, and not enough [[Box Forts]]",
    author: "Sir Isaac Newton"
  },
  {
    quote: "Logic will take you from A-Z, but [[Boxes]] will take you anywhere",
    author: "Albert Einstein"
  },
  {
    quote: "Just remember, it all began with a [[Box Fort]]",
    author: "Walt Disney"
  },
  {
    quote: "The two most important days in your life are the day you were born,\n" +
           "and the day you build a [[Box Fort]]",
    author: "Mark Twain"
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
