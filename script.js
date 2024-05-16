"use strict";

let number = Math.trunc(Math.random() * 20 + 1);

let highScore = Number(document.querySelector(".highscore").textContent);
let score = Number(document.querySelector(".score").textContent);

const display = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".again").addEventListener("click", function () {
  number = Math.trunc(Math.random() * 20 + 1);
  score = "20";
  display("👽Guessing the number");
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});

document.querySelector(".check").addEventListener("click", function () {
  let guess = document.querySelector(".guess").value;
  if (guess === "0") {
    display("🥱 B/N 1 and 20");
  } else if (!guess) {
    display("🙄 number required!");
  } else if (guess !== "0") {
    guess = Number(guess);
    if (score !== 0) {
      score--;
      document.querySelector(".score").textContent = score;

      if (guess < 1 || guess > 20) {
        document.querySelector(".message").textContent = "🥱 B/N 1 and 20";
      } else if (guess === number) {
        document.querySelector(".number").textContent = number;
        display("👑 you got it!!");
        if (score > highScore) {
          highScore = score;
        }
        document.querySelector(".highscore").textContent = highScore;
        document.querySelector("body").style.backgroundColor = "green";
      } else if (guess !== number) {
        display(guess > number ? "😎 too high!!" : "😯 too low!!");
      }
    } else if (score === 0) {
      display("😪 Game over!!");
    }
  }
});
