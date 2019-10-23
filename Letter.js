var letterResult = function (letter){
    this.letter = letter,
    this.correct = false,
    this.answer = function(){
        if (this.correct === true){
            return this.letter;
        }
        else {
            return "_ ";
        }
    };
    this.checkGuess = function (guess){
        if (this.letter === guess){
            this.correct = true;
        }
    };
}; 

module.exports = letterResult;