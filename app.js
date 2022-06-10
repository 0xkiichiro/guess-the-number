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
    generateRandomNumber();
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
};

const guess = function () {
  if (lives > 0) {
    lives--;
    if (input.value < 0 || input.value > 100 || !input.value) {
      directions.innerText = `Enter a value between 0-100! Amount of tries left:${lives}`;
    } else if (input.value === winningNumber) {
      directions.innerText = "You've won!";
    } else if (input.value >= winningNumber) {
      directions.innerText = `You should go lower! Amount of tries left:${lives}`;
    } else if (input.value <= winningNumber) {
      directions.innerText = `You should go higher! Amount of tries left:${lives}`;
    }
  } else if (lives <= 0) {
    directions.innerText = "You've lost!";
  }
};

const reset = function () {
  lives = 5;
  generateRandomNumber();
  directions.innerText = `Start by entering a value between 1 to 100.`;
  input.value = "";
};

//!onload

window.onload = function () {
  game.style.display = "none";
};
