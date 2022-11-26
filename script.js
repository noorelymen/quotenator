var quotes;

var quote = document.getElementById("quote");
var author = document.getElementById("author");

//quotes = fetch("https://type.fit/api/quotes")

function generateQuote() {
  if (quotes.length != 0) {
    var randomIndex = parseInt(Math.random() * quotes.length);

    quote.innerText = quotes[randomIndex].text;

    quotes[randomIndex].author
      ? (author.innerText = "- " + quotes[randomIndex].author)
      : (author.innerText = "Anonymous");

    quotes.splice(randomIndex, 1);
  } else {
    quote.innerText = "No more quotes";
    author.innerText = "";
  }
}

fetch("https://type.fit/api/quotes")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    quotes = data;
    generateQuote();

    console.log("Quotes = ", quotes);
  });

// btn.addEventListener("click", function () {
//   generateQuote(); //the only thing it does is calling another function that doesn't take parameters
// });

var btn = document.getElementById("generate");
btn.addEventListener("click", generateQuote);
