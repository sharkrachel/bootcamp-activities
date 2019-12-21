//declare variables
//define basic game states i.e. what happens everytime the game starts or things that happen each round
//set global functions (word generator, win function, loss function, reset function, comparison function)
//start game => maybe a function

// GLOBAL VARIABLES
var wins = 0;
var losses = 0;
var remainingGuesses = 12;
var lettersGuessed = "";
var targetWord = "";

var words = ["mario", "luigi", "peach", "toad", "bowser", "goomba", "daisey", "yoshi", "mushroom"];

// GLOBAL FUNCTOINS

function wordGen () {
    targetWord =  words[Math.floor(Math.random() * words.length)];
    console.log(targetWord)
} 

wordGen()
// wordGen = randomWord