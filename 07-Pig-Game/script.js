'use strict';

// Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); // Getting directly by ID
const diceEl = document.querySelector('.dice');

// Resetting scores & hiding dice
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
