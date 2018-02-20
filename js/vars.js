document.addEventListener('DOMContentLoaded', _=> {
  GuessNumber.init({
    game: document.querySelector('.box'),
    minNum: document.querySelector('.min-num'),
    maxNum: document.querySelector('.max-num'),
    guessBtn: document.querySelector('.guess-btn'),
    guessInput: document.querySelector('.guess-input'),
    message: document.querySelector('.message')
  });
});