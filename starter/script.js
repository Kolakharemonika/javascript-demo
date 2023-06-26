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
});



//Styles
message.style.backgroundColor = '#37783d';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);
console.log(message.style.height); //empty log bcs we cannot get height from here

console.log(getComputedStyle(message));
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height); //display height

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';// change height from here

//change style from here apply to all over, just using this.
document.documentElement.style.setProperty('--color-primary', 'orangered');

//attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.src);
console.log(logo.designer); //undefind bcs custome attribute

// getAttribute setAttribute
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

//classes 
logo.classList.add('c', 'f');
logo.classList.remove('c', 'f');
logo.classList.toggle('c');
logo.classList.contains('c');

//its overriide all existing classes and use assign classname
logo.className = 'classname';

