var inspire = [
 

    'Be happy!',
    'Don\'t panic!', 
    'Smile!'

]

function newinspire(){
    var randomNumber = Math.floor(Math.random()*inspire.length);
    document.getElementById('inspire').innerHTML = inspire[randomNumber];
}
