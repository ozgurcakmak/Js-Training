'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    score = 20;
    // Manipulating CSS styles!
    // We want to change the bg color when the player wins
    document.querySelector('body').style.backgroundColor = '#60b347';
    // Make the number wider
    document.querySelector('.number').style.width = '30rem';
  } else if (guess >= secretNumber) {
    document.querySelector('.message').textContent = 'Too high!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess <= secretNumber) {
    document.querySelector('.message').textContent = 'Too low!';
    score--;
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {});
