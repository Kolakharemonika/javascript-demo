"use srtict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;

// document.querySelector(".check").addEventListener("click", () => {});
document.querySelector(".check").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess").value);
  if (!guessNumber) {
    // imojies-- windows + .
    document.querySelector(".message").textContent = "⛔ No number!";

    //player wins
  } else if (guessNumber === secretNumber) {
    document.querySelector(".message").textContent = "✅ correct number!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.padding = "10px 100px";
    document.querySelector("body").style.background = "green";

    //when guess is too high
  } else if (guessNumber > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too High!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "⌚ You lost the game";
      document.querySelector(".score").textContent = 0;
    }
    //when guess is too low
  } else if (guessNumber < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "⌚ You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing..";

  document.querySelector("body").style.background = "black";
  document.querySelector(".number").style.padding = "10px 60px";
});
