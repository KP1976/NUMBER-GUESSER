/* 
FUNKCJONALNOŚĆ GRY
- Gracz musi zgadnąć liczbę z przedziału pomiędzy min a max
- Gracz może zgadywać określona ilość razy
- Pokazywane jest ile prób zgadnięcia zostało graczowi
- Pokazywana jest prawidłowa odpowiedź, jeśli gracz przegra
- Gracz ma możliwość ponownej gry
*/

let GuessNumber = (_=> {
  // Wartości gry: minimum, maksimum, funkcja losująca liczby, ile razy można zgadnąć
  let min = 1, 
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

  // Funkcja graj ponownie
  function playAgain(e) {
    if(e.target.classList[1] === 'play-again') {
      window.location.reload();
    }
  }

  // Funkcja sprawdza czy gracz wygrał czy przegrał
  function startGuessing() {
    let guess = parseInt(vars.guessInput.value); 

    // Walidacja
    if(isNaN(guess) || guess < min || guess > max) {
      vars.message.textContent = (`Wpisz numer pomiędzy ${min} a ${max}!!!`);
      return;
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
        vars.guessInput.classList.remove('box-shadow-win');
        vars.guessInput.classList.add('box-shadow-lost');

        // Wyczyszczenie inputa
        vars.guessInput.value = '';

        // Komunikat o spudłowaniu i ile zostało jeszcze trafień
        vars.message.textContent = (`${guess} to zła odpowiedź! Zostało Ci ${guessesLeft} trafień.`);
      }
    }
  }

  // Funkcja - koniec gry
  function gameOver(won, msg) {
    // Wyłączenie inputa
    vars.guessInput.disabled = true;

    // Zmiana bordera
    if(won) {
      vars.message.classList.add('win');
      vars.guessInput.classList.add('box-shadow-win');
      vars.message.classList.remove('lost');
      vars.guessInput.classList.remove('box-shadow-lost');
    } else {
      vars.message.classList.add('lost');
      vars.guessInput.classList.add('box-shadow-lost');
      vars.message.classList.remove('win');
      vars.guessInput.classList.remove('box-shadow-win');
    }

    // Wiadomość o wygranej
    vars.message.textContent = msg;

    // Zmiana tekstu inputa na Graj ponownie
    vars.guessBtn.textContent = 'Graj ponownie';
    vars.guessBtn.classList.add('play-again');
  }

  // Losowanie liczby do trafienia
  function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  /* FUNKCJA INICJALIZACYJNA ZADANIA */
  function init(_vars) {
    vars = _vars;

    vars.minNum.textContent = min;
    vars.maxNum.textContent = max;

    vars.game.addEventListener('mousedown', playAgain);
    vars.guessBtn.addEventListener('click', startGuessing);
  }

  return {
    init
  };
})();