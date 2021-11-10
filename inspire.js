var inspire = [
 

    'Be happy!',
    'Smile!'

]

function newinspire(){
    var randomNumber = Math.floor(Math.random()*inspire.length);
    document.getElementById('quotes').innerHTML = inspire[randomNumber];
}
