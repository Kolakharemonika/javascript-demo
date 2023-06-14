"use srtict";

// document.querySelector(".message").innerHTML = "Start guessing...";
// document.querySelector(".message").textContent = "Start guessing...";
// document.querySelector(".message").textContent = "Correct Number";
// document.querySelector(".correct-guess").innerHTML = "?";
// document.querySelector(".number").innerHTML = "13";
// document.querySelector(".score").innerHTML = "19";
document.querySelector(".guess").value = 0;

function reset() {
  document.querySelector(".message").textContent = "💡Start guessing...";
  document.querySelector(".number").innerHTML = "?";
  document.querySelector(".score").innerHTML = "20";
  document.body.style.background = "black";
  document.querySelector(".guess").value = 0;
  // document.querySelector(".highscore").innerHTML = highscore;
  randomNumGenerator();
}

function randomNumGenerator() {
  const number = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
  console.log(number);
  document.querySelector(".correct-number").innerHTML = number;
}
randomNumGenerator();

function checkGuess() {
  const guessNumber = document.querySelector(".guess").value;
  const correctNumber = document.querySelector(".correct-number").textContent;
  console.log(correctNumber, "correctNumber");

  const score = document.querySelector(".score").innerHTML;
  document.querySelector(".score").innerHTML = score - 1;

  const highscore = document.querySelector(".highscore").innerHTML;
  const latesthighscore = score - 1;
  console.log(guessNumber, "guessNumber");

  if (guessNumber > correctNumber) {
    document.querySelector(".message").textContent = "Number is Low!";
  } else if (guessNumber < correctNumber) {
    document.querySelector(".message").textContent = "Number is High!";
  } else {
    document.querySelector(".message").textContent = "✅ Correct Number!";
    document.body.style.background = "green";
    document.querySelector(".number").innerHTML = correctNumber;

    document.querySelector(".highscore").innerHTML =
      highscore > latesthighscore ? highscore : latesthighscore;
  }
}
