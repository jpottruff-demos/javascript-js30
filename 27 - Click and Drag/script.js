const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;

function captureInitialState(e) {
  // Capture initial vairables
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
}

function setDefaultState() {
  // Set default state
  isDown = false;
  slider.classList.remove("active");
}

function performSlideEffect(e) {
  // Do slide effect
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  //   const walk = x - startX;
  const walk = (x - startX) * 3; // * gives more of an effect
  slider.scrollLeft = scrollLeft - walk; // * including initial scrollLeft avoids some jumpiness
}

slider.addEventListener("mousedown", captureInitialState);
slider.addEventListener("mouseleave", setDefaultState);
slider.addEventListener("mouseup", setDefaultState);
slider.addEventListener("mousemove", performSlideEffect);
