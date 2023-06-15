const btnHold = document.querySelector(".btn-hold");
const btnRollDice = document.querySelector(".btn-dice");
const btnNewGame = document.querySelector(".btn-game");

const numberDisplay = document.querySelector(".dice-number");

let activePlayer = 0;

let diceNumber;
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");

// current-score-p2 current-score-p1
const player1currentscore = document.querySelector(".current-score-p1");
const player2currentscore = document.querySelector(".current-score-p2");

// dice-span-p2 after hold add
const player1finaldisplay = document.querySelector(".dice-span-p1");
const player2finaldisplay = document.querySelector(".dice-span-p2");

player1.classList.add("active");

function generateDice() {
  diceNumber = Number(Math.floor(Math.random() * (6 - 1 + 1) + 1));
}

function activate() {
  if (activePlayer) {
    player2.classList.add("active");
    player1.classList.remove("active");
  } else {
    player1.classList.add("active");
    player2.classList.remove("active");
  }
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
    activePlayer = !activePlayer;
    activate();
    if (activePlayer) {
      player1currentscore.innerHTML = 0;
    } else {
      player2currentscore.innerHTML = 0;
    }
  }
});

btnNewGame.addEventListener("click", () => {
  //add to cuurrent score
  player1.classList.add("active");
  numberDisplay.classList.add("hidden");

  player2finaldisplay.innerHTML = 0;
  player1finaldisplay.innerHTML = 0;
  player1currentscore.innerHTML = 0;
  player2currentscore.innerHTML = 0;
});

btnHold.addEventListener("click", () => {
  //add to cuurrent score
  activePlayer = !activePlayer;
  numberDisplay.classList.add("hidden");
  activate();

  if (activePlayer) {
    let player1score =
      Number(player1finaldisplay.innerHTML) +
      Number(player1currentscore.innerHTML);
    player1finaldisplay.innerHTML = player1score;
    player1currentscore.innerHTML = 0;
  } else {
    let player2score =
      Number(player2finaldisplay.innerHTML) +
      Number(player2currentscore.innerHTML);
    player2finaldisplay.innerHTML = player2score;
    player2currentscore.innerHTML = 0;
  }
});
