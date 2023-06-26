'use strict';

///////////////////////////////////////// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


//entire element select then 
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header')
//NodeLists
const allSections = document.querySelectorAll('.section')
console.log(allSections);

document.getElementById('section--1')
//html collections (if we deleted  from browser screen it will not shown entry )
const allButtons = document.getElementsByTagName('button')
console.log(allButtons);

document.getElementsByClassName('btn');

//creating and inserting elements
//.insertAdjacementHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = 'We use cookied for improved functionallity and analytics. <button class="btn btn--close-cookie">Got it</button>'
header.prepend(message); //top of header
//can present only one either append or prepend -solution below
// header.append(message); //bottom of header

// header.append(message.cloneNode(true)); //can use same time two place

header.before(message); //display top of header
header.after(message); //disply bottom of header 

//Delete element 
document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  // message.remove(); //to remove div 
  message.parentElement.removeChild(message); //anather method for removing child
})