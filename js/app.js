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
    // Wyłączenie inputa
    guessInput.disabled = true;

    // Zmiana bordera
    guessInput.classList.add('box-shadow-win');

    // Wiadomość o wygranej
    setMessage(`WYGRAŁEŚ!!! ${winningNum} to trafiona liczba!`, 'win');
  } else {
    
  }
});

// Ustawienie wiadomości
function setMessage(msg, error) {
  message.textContent = msg;
  message.classList.add(error);
}