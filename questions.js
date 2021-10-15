var questions = [
    '\"What\'s the worst thing you've ever eaten?',
    '\"Dog or cat?'
]

function newQuestion(){
    var randomNumber = Math.floor(Math.random()*question.length);
    document.getElementById('questions').innerHTML = questions[randomNumber];
}
