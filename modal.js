// document.querySelector("button").addEventListener("click", function () {
//   document.querySelector(".modal").style.opacity = 1;
//   document.querySelector(".modal").style.zIndex = 100;
//   document.querySelector(".overlay").style.opacity = 0.2;
//   document.querySelector(".ovrlay").style.zIndex = 50;
// });
// document.querySelector(".close-modal").addEventListener("click", () => {
//   document.querySelector(".modal").style.opacity = 0;
//   document.querySelector(".ovrlay").style.opacity = 1;
// });
// document.querySelector("overlay").addEventListener("click", () => {
//   document.querySelector(".modal").style.opacity = 0;
//   document.querySelector(".ovrlay").style.opacity = 1;
// });
import './demo.js';

console.log('thhhhhhhhssssssssssssss');
"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

btnOpenModal.forEach((btn) => {
  btn.addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
});

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});
