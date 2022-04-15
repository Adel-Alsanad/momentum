const quotes = [
  {
    quote: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
  },
  {
    quote: "Life is what happens when you’re busy making other plans.",
    author: "John Lennon",
  },
  {
    quote: "Get busy living or get busy dying.",
    author: "Stephen King",
  },
  {
    quote: "Never let the fear of striking out keep you from playing the game.",
    author: "Babe Ruth",
  },
  {
    quote: "Not how long, but how well you have lived is the main thing.",
    author: "Seneca",
  },
  {
    quote: "In order to write about life first you must live it.",
    author: "Ernest Hemingway",
  },
  {
    quote: "The unexamined life is not worth living.",
    author: "Socrates",
  },
  {
    quote: "Turn your wounds into wisdom.",
    author: "Oprah Winfrey",
  },
  {
    quote: "I like criticism. It makes you strong.",
    author: "LeBron James",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
