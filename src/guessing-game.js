class GuessingGame {
    constructor() {
      this.min = 0;
      this.max = 0;
      this.k = 0;
    }

    setRange(min, max) {
      this.min = min;
      this.max = max;
    }

    guess() {
       this.k = Math.ceil((this.min + this.max)/2);
       return this.k;
    }

    lower() {
      this.max = this.k;
    }

    greater() {
      this.min = this.k;
    }
}

module.exports = GuessingGame;
