"use srtict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const dispalyMessage = (message) => {
  document.querySelector(".message").textContent = message;
};
// document.querySelector(".check").addEventListener("click", () => {});
document.querySelector(".check").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess").value);
  if (!guessNumber) {
    // imojies-- windows + .
    document.querySelector(".message").textContent = "⛔ No number!";

    //player wins
  } else if (guessNumber === secretNumber) {
    dispalyMessage("✅ correct number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.padding = "10px 100px";
    document.querySelector("body").style.background = "green";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
    //when guess is too high
  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
      dispalyMessage(
        guessNumber > secretNumber ? "📈 Too High!" : "📉 Too Low!"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      dispalyMessage("⌚ You lost the game");
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
  dispalyMessage("Start guessing..");

  document.querySelector("body").style.background = "black";
  document.querySelector(".number").style.padding = "10px 60px";
});
