document.addEventListener('DOMContentLoaded', function() {
  GuessNumber.init({
    game: this.querySelector('.box'),
    minNum: this.querySelector('.min-num'),
    maxNum: this.querySelector('.max-num'),
    guessBtn: this.querySelector('.guess-btn'),
    guessInput: this.querySelector('.guess-input'),
    message: this.querySelector('.message')
  });
});