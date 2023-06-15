document.querySelector(".displaymodal").style.opacity = 0;

document.querySelector("button").addEventListener("click", function () {
  document.querySelector(".displaymodal").style.opacity = 1;
  document.querySelector(".displaymodal").style.zIndex = 100;
  document.querySelector(".container").style.opacity = 0.2;
  document.querySelector(".container").style.zIndex = 50;
});
document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".displaymodal").style.opacity = 0;
  document.querySelector(".container").style.opacity = 1;
});
document.querySelector("section").addEventListener("click", () => {
  document.querySelector(".displaymodal").style.opacity = 0;
  document.querySelector(".container").style.opacity = 1;
});
