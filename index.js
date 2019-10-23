var wordResult = require("./Word.js");
var inquirer = require("inquirer");

var animal = ["lion", "tiger", "bear", "eagle", "elephant"];
var selection = 0;
var wordGuess;
var allGuesses = [];
var count = 0;
var remaining = 10;
var result = "";
var repeat = 0;

console.log("Welcome!\n");

initialize();

function initialize (){
    allGuesses = [];
    selection = Math.floor(Math.random() * animal.length);
    wordGuess = new wordResult(animal[selection]);
    result = wordGuess.wordStatus();
    console.log(result + "\n");
    if (repeat === 0){
        console.log("Guesses remaining: 10\n");
    }
};

var playGame = function (){
    if (count < 10){
        inquirer.prompt([
            {
                type: "input",
                name: "guess",
                message: "Enter a letter:"
            }
        ]).then(function(input){
            if (allGuesses.includes(input.guess)){
                console.log("\nAlready guessed, try again!");
                count--;
                repeat = 1;
            };
            allGuesses.push(input.guess);
            wordGuess.letterGuess(input.guess);
            result = wordGuess.wordStatus();
            console.log("\n" + result + "\n");
            if (result.includes(input.guess) && repeat === 0){
                 console.log("Correct!\n");
            }
            else if (repeat === 0) {
                    console.log("Incorrect!\n");
            }
            if (!result.includes("_")){
                console.log("You got it! Next word!\n");
                repeat = 1;
                initialize();
                count = -1;
            }
            count++;
            remaining = 10 - count;
            console.log("Guesses remaining: " + remaining  + "\n");
            repeat = 0;
            playGame();
        });
    }
    else {
        console.log("No more guesses! Goodbye!\n");
    }
};

playGame();