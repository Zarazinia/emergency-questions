var quotes = [
 
    'Which is your favourite relative or sibling?',
    'Would you rather co-own a car with Jimmy Carr, a lorry with Hugh Laurie, or a van with Van Morrison?',
    'Would you rather be a mime or one of those people who pretends to be a statue?',
    'What have you done today to make you feel proud?',
    'What\'s your favourite collective noun?',
    'What\'s the most recent joke you\'ve heard?',
    'What bin do you need to put out this week?',
    'Who is the best super villain of all time?',
    'What\’s your favorite thing you own, and why?',
    'What\’s your survival plan during a zombie apocalypse?',
    'If you had to create an alter ego for yourself, who would it be and what would you name them?',
    'If a song played every time you entered a room, what would it be?',
    'Who\'s your favourite Alan?',
    'If you had the planet to yourself, where would you live?',
    'Which is best, Christmas in Summer, or Christmas in Winter?',
    'Which celebrity will play you in the film about your life?',
    'Do you have any feelings about how cutlery should be placed in the dishwasher?',
    'What song would you like to replace our national anthem with?',
    'Have you ever fallen out of a hammock or the top bed of a bunkbed?',
    'What is your favourite anagram?',
    'Have you ever had anything removed from your body?',
    'How do you feel about marmite?',
    'Have you ever pretended to be your own twin?',
    'What one photo would you send out to aliens?',
    'If you could have a fifth season, what would it be, and when would you have it?',
    'What would your wrestling name be?',
    'What\'s your favourite long red thing?',
    'What film or story would you like to see remade by the muppets?',
    'Can money buy you happiness?',
    'If you could only eat one thing for the rest of your life what would it be?',
    'Which country would you like to be the ruler of?',
    'Would you rather have wooden teeth, or a wooden leg?',
    'What do you think the tooth fairy is doing with all those teeth?',
    'What\'s your favourite round thing?',
    'How do you decide when it\'s time to retire a pair of pants?',
    'What does Father Christmas need to do to modernize?',
    'What would you like your pet to sound like if it could talk?',
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
    'Who would you most like to punch in the face?',
    'Which one of the people in this room would you like in your gang during a zombie apocalypse?',
    'Why do round pizzas come in square boxes?',
    'What should we call a male ladybug?',
    'Have you got an imaginary friend?',
    'Who is the first person on your hit list?',
    'What are you going to leave me in your will? Take into consideration that this will affect how I treat you for the rest of your life!',
    'Why do you think Donkey Kong is a monkey and not a donkey?',
    'Why do you think the word gullible isn\'t in the dictionary?',
    'Where does prune juice come from if prunes are dried plums?',
    'If we can turn peanuts into butter what other thing would you like to be turned into butter?',
    'What would be the worst Buy One Get One Free sale of all time?',
    'If you were an action figure, what accessories would you be sold with?',
    'Would you consider having sex with an alien?',
    'What\'s the last dream you can remember?',
    'What are you scared of?',
    'If you could merge two different animals to create a third animal, what would you choose, and what would it\s major characteristics be?',
    'What\'s the difference between compulsory, mandatory, and obligatory?',
    'Why is drowsiness listed as a side effect for sleeping pills?',
    'Is honesty the best policy?',
    'What do you call a female Daddy Long Legs?',
    'Which fictional character would be the most annoying in real life?',
    'Which two public figures would you like to see fight each other, and which one would win?',
    'What will you win a Nobel Prize for?',
    'Would you prefer a cruise with Tom Cruise or a walking holiday with Christopher Walken?',
    'What sport would be the funniest to add a mandatory amount of alcohol to?',
    'What\'s the most annoying thing that your parents do?',
    'What would be the hat to end all hats? What could you wear on your head that would make people stop what they are doing and stare in awe and amazement?',
    'What would be the coolest animal to scale up to the size of a horse?',
    'If you were wrongfully put into an insane asylum, how would you convince them that you’re actually sane and not just pretending to be sane?',
    'If you were arrested with no explanation, what would your friends and family assume you had done?',
 'Apart from Die Hard, what is the greatest Christmas film of all time?'

]

function newQuote(){
    var randomNumber = Math.floor(Math.random()*quotes.length);
    document.getElementById('quotes').innerHTML = quotes[randomNumber];
}

