var letterResult = require("./Letter.js");

var wordResult = function(word){
    this.letters = word.split("");
    for (var i=0; i < this.letters.length; i++){
        this.letters[i] = new letterResult(this.letters[i]);
    };
    this.wordStatus = function(){
        var combinedWord = [];
        for (var i=0; i<this.letters.length; i++){
            combinedWord[i] = this.letters[i].answer();
        };
        var result = combinedWord.join("");
        return result;
    };
    this.letterGuess = function(guess){
        for (var i=0; i<this.letters.length; i++){
            this.letters[i].checkGuess(guess);
        };
    };
};

module.exports = wordResult;