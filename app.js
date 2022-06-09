//! variable declaration

let winningNumber = 0;
let lives = 5;

const input = document.querySelector(".input");
const directions = document.querySelector(".directions");
const welcome = document.querySelector(".welcome");
const game = document.querySelector(".game");

//! capture click

document.querySelector("body").addEventListener("click", (event) => {
  if (event.target.classList.contains("start-btn")) {
    welcome.style.display = "none";
    game.style.display = "block";
  }
  if (event.target.classList.contains("guess-btn")) {
    guess();
  }
  if (event.target.classList.contains("reset-btn")) {
    reset();
  }
});

//! generate random number

const generateRandomNumber = function () {
  winningNumber = (Math.random() * 100).toFixed(0);
  console.log(winningNumber);
};

generateRandomNumber();

const guess = function () {
  if (lives > 0) {
    lives--;
    if (input.value === winningNumber) {
      alert("you have won!");
      directions.innerText = "You've won!";
    } else if (input.value >= winningNumber) {
      directions.innerText = `You should go lower! Amount of tries left:${lives}`;
    } else if (input.value <= winningNumber) {
      directions.innerText = `You should go higher! Amount of tries left:${lives}`;
    }
  } else if (lives <= 0) {
    alert("you have lost!");
    directions.innerText = "You've lost!";
  }
};

const reset = function () {
  lives = 5;
  generateRandomNumber();
};

//!onload

window.onload = function () {
  game.style.display = "none";
};
