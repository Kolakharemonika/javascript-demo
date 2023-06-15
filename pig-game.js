const btnHold = document.querySelector(".btn-hold");
const btnRollDice = document.querySelector(".btn-dice");
const btnNewGame = document.querySelector(".btn-game");

const numberDisplay = document.querySelector(".dice-number");

const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const player1currentscore = document.querySelector(".current-score-p1");
const player2currentscore = document.querySelector(".current-score-p2");
const player1finaldisplay = document.querySelector(".dice-span-p1");
const player2finaldisplay = document.querySelector(".dice-span-p2");

let activePlayer = 0;
player1.classList.add("active");

let diceNumber;
function generateDice() {
  diceNumber = Number(Math.floor(Math.random() * (6 - 1 + 1) + 1));
}

function activate() {
  activePlayer = !activePlayer;
  if (activePlayer) {
    player2.classList.add("active");
    player1.classList.remove("active");
  } else {
    player1.classList.add("active");
    player2.classList.remove("active");
  }
}

function calculateScore(finaldisplay, currentscore) {
  let score = Number(finaldisplay.innerHTML) + Number(currentscore.innerHTML);
  finaldisplay.innerHTML = score;

  if (Number(score) > 100) {
    prompt(`winner is player ${activePlayer + 1}`);
  }
  currentscore.innerHTML = 0;
}

btnRollDice.addEventListener("click", () => {
  generateDice();
  numberDisplay.innerHTML = diceNumber;
  numberDisplay.classList.remove("hidden");

  if (diceNumber != 1) {
    if (activePlayer) {
      player2currentscore.innerHTML =
        Number(player2currentscore.innerHTML) + diceNumber;
    } else {
      player1currentscore.innerHTML =
        Number(player1currentscore.innerHTML) + diceNumber;
    }
  } else {
    activate();
    if (activePlayer) {
      player1currentscore.innerHTML = 0;
    } else {
      player2currentscore.innerHTML = 0;
    }
  }
});

//Event listerners
btnNewGame.addEventListener("click", () => {
  activePlayer = 0;
  player1.classList.add("active");
  numberDisplay.classList.add("hidden");

  player2finaldisplay.innerHTML = 0;
  player1finaldisplay.innerHTML = 0;
  player1currentscore.innerHTML = 0;
  player2currentscore.innerHTML = 0;
});

btnHold.addEventListener("click", () => {
  numberDisplay.classList.add("hidden");

  activate();

  if (activePlayer) {
    calculateScore(player1finaldisplay, player1currentscore);
  } else {
    calculateScore(player2finaldisplay, player2currentscore);
  }
});
