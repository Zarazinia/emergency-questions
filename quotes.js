var quotes = [
 
    'Would you rather your only mode of transportation be a donkey or a giraffe?',
    'Would rather have 100 duck-sized elephants or 1 elephant-sized duck?',
    'Would you rather speak to animals or know other people’s thoughts?',
    'Would you rather Have no one to show up for your wedding or your funeral?',
    'Would you rather be super strong or super fast?',
    'Would you rather be always cold or always hot?',
    'Would you rather be really tall or really short?',
    'Would you rather drink black tea or have coffee everyday?',
    'Would you rather have your own robot or a jetpack?',
    'Would you rather have the ability to fly or be invisible?',
    'Would you rather eat pizza or ice cream as your own meal for the rest of your life?',
    'Would you rather have a rewind button or a pause button on your life?'
    

]

function newQuote(){
    var randomNumber = Math.floor(Math.random()*quotes.length);
    document.getElementById('quotes').innerHTML = quotes[randomNumber];
}

