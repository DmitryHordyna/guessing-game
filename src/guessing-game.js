class GuessingGame {
 
    setRange(min, max) {

       this.minNumber = min;
       this.maxNumber = max;
    }

    guess() {
        this.answer = Math.round((this.maxNumber + this.minNumber) / 2);
        return this.answer
    }

    lower() {
        this.maxNumber = this.answer;
    }

    greater() {
        this.minNumber = this.answer;
    }
}

module.exports = GuessingGame;
