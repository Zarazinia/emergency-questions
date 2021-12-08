var quotes = [
 
    'If you could have a fifth season, what would it be, and when would you have it?',
    'What does Father Christmas need to do to modernize?',
    'What would you like your pet sound like if it could talk?',
    'What\'s the most annoying place you\'ve ever been to?',
    'What would be the funniest thing to fill a pi&ntilde;ata with?',
    'If you could jump into a pool of something, what would it be?',
    'If you could be part Grufallo, would you have claws, fangs, horns, or spikes?',
    'What\'s the worst present you\'ve ever recieved?',
    'What fictional character have you had a crush on, other than Mr Darcy?',
    'What\'s your favourite flat thing?',
    'If you could hypnotise someone, who would it be, and what would you make them do?',
    'Where\'s the worst place you\'ve ever been?', 
    'What New Years resolutions will you fail to keep next year?',
    'What would your so-called best friend say was your biggest flaw?',
    'How would you describe yourself to an impressionable stranger?',
    'If you were given one extra hour a day, how much more alcohol would you drink?',
    'What\'s your favourite smell?',
    'What\'s your worst fashion decision?',
    'If you had to be a celebrity\'s pet, what would you be, and who would you belong to?',
    'If you could have any animal as a pet what would it be?',
    'What\'s the worst thing you\'ve ever eaten?',
    'What\'s the strangest thing you\'ve found in the fridge?',
    'What do you own that you have no idea how to use?',
    'What\'s the first thing you\'d do if you became a god?',
    'What would you like rainbows to smell of?',
    'What would you name your boat, if you had one?',
    'Which part of your body would you cybernetically enhance?',
    'What have you got rid of, or sold, that you wish you hadn\'t?',
    'What\'s the largest animal you think you can beat in a fight?',
    'What will you win a Nobel Prize for?',
    'Would you prefer a cruise with Tom Cruise or a walking holiday with Christopher Walken?',
    'What sport would be the funniest to add a mandatory amount of alcohol to?',
    'What\'s the most annoying thing that your parents do?',
    'What would be the hat to end all hats? What could you wear on your head that would make people stop what they are doing and stare in awe and amazement?',
    'What would be the coolest animal to scale up to the size of a horse?',
    'If you were wrongfully put into an insane asylum, how would you convince them that you’re actually sane and not just pretending to be sane?',
    'If you were arrested with no explanation, what would your friends and family assume you had done?'
    

]

function newQuote(){
    var randomNumber = Math.floor(Math.random()*quotes.length);
    document.getElementById('quotes').innerHTML = quotes[randomNumber];
}

