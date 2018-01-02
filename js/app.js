/* 
FUNKCJONALNOŚĆ GRY
- Gracz musi zgadnąć liczbę z przedziału pomiędzy min a max
- Gracz może zgadywać określona ilość razy
- Pokazywane jest ile prób zgadnięcia zostało graczowi
- Pokazywana jest prawidłowa odpowiedź, jeśli gracz przegra
- Gracz ma możliwość ponownej gry
*/

// Wartości gry
let min = 1, 
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// Zmienne
const game = document.querySelector('.box'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('.guess-btn'),
      guessInput = document.querySelector('.guess-input'),
      message = document.querySelector('.message');

// Podłączenie min i max do spanów
minNum.textContent = min;
maxNum.textContent = max;

// Nasłuchiwanie na zdarzenie kliknięcia
guessBtn.addEventListener('click', () => {
  let guess = parseInt(guessInput.value); // zamiana stringa na liczbę

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
      guessInput.classList.remove('box-shadow-win');
      guessInput.classList.add('box-shadow-lost');

      // Wyczyszczenie inputa
      guessInput.value = '';

      // Komunikat o spudłowaniu i ile zostało jeszcze trafień
      setMessage(`${guess} to zła odpowiedź! Zostało Ci ${guessesLeft} trafień.`, 'lost');
    }
  }
});

// Funkcja - koniec gry
function gameOver(won, msg) {
  // Wyłączenie inputa
  guessInput.disabled = true;

  // Zmiana bordera
  if(won === true) {
    message.classList.add('win');
    guessInput.classList.add('box-shadow-win');
    message.classList.remove('lost');
    guessInput.classList.remove('box-shadow-lost');
  } else {
    message.classList.add('lost');
    guessInput.classList.add('box-shadow-lost');
    message.classList.remove('win');
    guessInput.classList.remove('box-shadow-win');

  }

  // Wiadomość o wygranej
  setMessage(msg);
}

// Ustawienie wiadomości
function setMessage(msg, error) {
  message.textContent = msg;
 }