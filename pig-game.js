const btnHold = document.querySelector(".btn-hold");
const btnRollDice = document.querySelector(".btn-dice");
const btnNewGame = document.querySelector(".btn-game");

const numberDisplay = document.querySelector(".dice-number");
const dice = document.querySelector("#dice");
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");

const player1currentscore = document.querySelector(".current-score-p1");
const player2currentscore = document.querySelector(".current-score-p2");
const player1finaldisplay = document.querySelector(".dice-span-p1");
const player2finaldisplay = document.querySelector(".dice-span-p2");

let activePlayer = 0;
let currentscore = 0;
let scores = [0, 0];
let playing = true;
player1.classList.add("active");

let diceNumber;
function generateDice() {
  // diceNumber = Number(Math.floor(Math.random() * (6 - 1 + 1) + 1));
  diceNumber = Number(Math.trunc(Math.random() * 6) + 1);
}

function activate() {
  document.querySelector(`.current-score-p${activePlayer + 1}`).textContent = 0;
  currentscore = 0;
  activePlayer = activePlayer ? 0 : 1;
  player1.classList.toggle("active");
  player2.classList.toggle("active");
}

btnRollDice.addEventListener("click", () => {
  if (playing) {
    generateDice();
    dice.src = `img/inverted-dice-${diceNumber}.svg`;
    numberDisplay.classList.remove("hidden");

    if (diceNumber != 1) {
      currentscore = currentscore + diceNumber;
      document.querySelector(
        `.current-score-p${activePlayer + 1}`
      ).textContent = currentscore;
    } else {
      activate();
    }
  }
});

//Event listerners
btnNewGame.addEventListener("click", () => {
  activePlayer = 0;
  currentscore = 0;
  scores = [0, 0];
  playing = true;
  player1.classList.add("active");
  numberDisplay.classList.add("hidden");

  player2finaldisplay.innerHTML = 0;
  player1finaldisplay.innerHTML = 0;
  player1currentscore.innerHTML = 0;
  player2currentscore.innerHTML = 0;
});

btnHold.addEventListener("click", () => {
  if (playing) {
    numberDisplay.classList.add("hidden");

    scores[activePlayer] = scores[activePlayer] + currentscore;
    document.querySelector(`.dice-span-p${activePlayer + 1}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 10) {
      playing = false;
      document
        .querySelector(`.player${activePlayer + 1}`)
        .classList.remove("active");
      document
        .querySelector(`.player${activePlayer + 1}`)
        .classList.add("winner");
    }
    activate();
  }
});
