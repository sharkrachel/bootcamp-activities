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
var hiddenWord = [];

var words = ["mario", "luigi", "peach", "toad", "bowser", "goomba", "daisey", "yoshi", "mushroom"];

// GLOBAL FUNCTOINS

function wordGen () {
    targetWord =  words[Math.floor(Math.random() * words.length)];
    for ( var i of targetWord ) {
        hiddenWord.push("_");

    }
    $(".game-board").text(hiddenWord.join(" "));
    console.log(targetWord)
} 

function newGame () {
    wins = 0;
    $(".wins").text(wins);
    losses = 0;
    $(".losses").text(losses);
    remainingGuesses = 12;
    $(".remaining-guesses").text(remainingGuesses);
    lettersGuessed = "";
    $("letters-guessed").text(lettersGuessed);
    targetWord = "";
    wordGen();
}

function newRound() {
    $(".wins").text(wins);
    $(".losses").text(losses);
    remainingGuesses = 12;
    $(".remaining-guesses").text(remainingGuesses);
    lettersGuessed = ""
    $("letters-guessed").text(lettersGuessed);
    targetWord = "";
    wordGen();
}
// function newRound ()

newGame();

//start the game with key up event

$(document).keyup(function(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
    var userGuess = event.key;
    console.log(userGuess);
    }
   
});
