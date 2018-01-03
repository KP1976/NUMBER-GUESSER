/* 
FUNKCJONALNOŚĆ GRY
- Gracz musi zgadnąć liczbę z przedziału pomiędzy min a max
- Gracz może zgadywać określona ilość razy
- Pokazywane jest ile prób zgadnięcia zostało graczowi
- Pokazywana jest prawidłowa odpowiedź, jeśli gracz przegra
- Gracz ma możliwość ponownej gry
*/

let GuessNumber = (function() {
  let s = {};

  // Wartości gry
  let min = 1, 
      max = 10,
      winningNum = getRandomNum(min, max),
      guessesLeft = 3;

  // // Zmienne
  // const game = document.querySelector('.box'),
  //       minNum = document.querySelector('.min-num'),
  //       maxNum = document.querySelector('.max-num'),
  //       guessBtn = document.querySelector('.guess-btn'),
  //       guessInput = document.querySelector('.guess-input'),
  //       message = document.querySelector('.message');

  // Podłączenie min i max do spanów
  // s.minNum.textContent = min;
  // s.maxNum.textContent = max;

  // Graj ponownie - nasłuchiwanie zdarzenia
  function playAgain(e) {
    if(e.target.classList[1] === 'play-again') {
      window.location.reload();
    }
  }

  // Nasłuchiwanie na zdarzenie kliknięcia
  function startGuessing() {
    let guess = parseInt(s.guessInput.value); // zamiana stringa na liczbę

    // Walidacja
    if(isNaN(guess) || guess < min || guess > max) {
      setMessage(`Wpisz numer pomiędzy ${min} a ${max}!!!`, 'error');
    }

    // Sprawdzenie czy gracz wygrał
    if(guess === winningNum) {
      // Koniec gry - wygrana
      gameOver(true, `WYGRAŁEŚ!!! ${winningNum} to trafiona liczba!`);
    } else {
      // Niewłaściwy numer
      guessesLeft -= 1;

      if(guessesLeft === 0) {
        // Koniec gry - przegrana
        gameOver(false, `Gra skończona!!! Przegrałeś! Prawidłowa liczba to ${winningNum}!`);
      } else {
        // Gra jest kontynuowana - zła odpowiedź

        // Zmiana bordera
        s.guessInput.classList.remove('box-shadow-win');
        s.guessInput.classList.add('box-shadow-lost');

        // Wyczyszczenie inputa
        s.guessInput.value = '';

        // Komunikat o spudłowaniu i ile zostało jeszcze trafień
        setMessage(`${guess} to zła odpowiedź! Zostało Ci ${guessesLeft} trafień.`, 'lost');
      }
    }
  }

  // Funkcja - koniec gry
  function gameOver(won, msg) {
    // Wyłączenie inputa
    s.guessInput.disabled = true;

    // Zmiana bordera
    if(won === true) {
      s.message.classList.add('win');
      s.guessInput.classList.add('box-shadow-win');
      s.message.classList.remove('lost');
      s.guessInput.classList.remove('box-shadow-lost');
    } else {
      s.message.classList.add('lost');
      s.guessInput.classList.add('box-shadow-lost');
      s.message.classList.remove('win');
      s.guessInput.classList.remove('box-shadow-win');
    }

    // Wiadomość o wygranej
    setMessage(msg);

    // Czy grać znowu?
    s.guessBtn.textContent = 'Graj ponownie';
    s.guessBtn.classList.add('play-again');
  }

  // Losowanie liczby do trafienia
  function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // Ustawienie wiadomości
  function setMessage(msg) {
    s.message.textContent = msg;
  }

  /* FUNKCJA INICJALIZACYJNA ZADANIA */
  function init(config) {
    s = config;

    // Wartości gry
    let min = 1, 
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

    // Podłączenie min i max do spanów
    s.minNum.textContent = min;
    s.maxNum.textContent = max;

    s.game.addEventListener('mousedown', playAgain);
    s.guessBtn.addEventListener('click', startGuessing);
  }

  return {
    init
  };
})();