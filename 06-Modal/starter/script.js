'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
  // Adding an event listener to each button
  btnsOpenModal[i].addEventListener('click', function () {
    // console.log(btnsOpenModal[i].textContent);
    // now let's show the modal - by reading and editing the class it has
    // no DOTS. Dot is for selection!
    modal.classList.remove('hidden'); // same thing as modal.style.display = "block";
    overlay.classList.remove('hidden');
  });
}

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// We are passing the function reference, not call it!
btnCloseModal.addEventListener('click', closeModal);

// We also want to close the modal if outside is clicked
overlay.addEventListener('click', closeModal);
