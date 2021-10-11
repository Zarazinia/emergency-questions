var quotes = [
  'What\'s the worst thing you\'ve ever eaten?',
  'What\'s the best thing you\'ve ever eaten?',
]
function newQuote() {
  var randomNumber = Math.floor(Math.random)) * (quotes.length)); 
  document.GetElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
