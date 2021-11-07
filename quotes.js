var quotes = [
 
    '<img src="Luv2meetU-logo-300x286.png" alt="Luv 2 meet U logo">',
    'Would you rather find your true love or a suitcase with five million dollars inside?',
    'Would you rather type faster or dance better?',
    'Would you rather have free Wi-Fi wherever you go or be able to drink unlimited free coffee at any coffee shop?',
    'Would you rather live on the beach or in a cabin in the woods?',
    'Would you rather have a flying carpet or a car that can drive underwater?',
    'Would you rather be an amazing painter or a brilliant mathematician?',
    'Would you rather have a completely automated home or a self-driving car?',
    'Would you rather never be able to eat meat or never be able to eat vegetables?',
    'Would you rather live in a cave or live in a tree house?',
    'Would you rather there be a perpetual water balloon war going on in your city/town or a perpetual food fight?',
    'Would you rather be a successful artist or a successful business owner?',
    'Would you rather be born again in the same country or a different one of your choosing?',
    'Would you rather be forced to dance every time you heard music or be forced to sing along to any song you heard?',
    'Would you rather be covered in fur or covered in scales?',
    'Would you rather always be 10 minutes late or always be 20 minutes early?',
    'Would you rather your only mode of transportation be a donkey or a giraffe?',
    'Would you rather have 100 duck-sized elephants or 1 elephant-sized duck?',
    'Would you rather speak to animals or know other people’s thoughts?',
    'Would you rather have no one to show up for your wedding or your funeral?',
    'Would you rather be super strong or super fast?',
    'Would you rather be always cold or always hot?',
    'Would you rather be really tall or really short?',
    'Would you rather drink black tea or have coffee everyday?',
    'Would you rather have your own robot or a jetpack?',
    'Would you rather have the ability to fly or be invisible?',
    'Would you rather eat pizza or ice cream as your only meal for the rest of your life?',
    'Would you rather have a rewind button or a pause button on your life?',
    'Would you rather be transported 500 years into the future or 500 years into the past?',
    'Would you rather be constantly tired no matter how much you sleep or constantly hungry no matter how much you eat?'

]

function newQuote(){
    var randomNumber = Math.floor(Math.random()*quotes.length);
    document.getElementById('quotes').innerHTML = quotes[randomNumber];
}

