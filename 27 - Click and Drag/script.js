const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  // Capture initial vairables
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  // Set default state
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
  // Set default state
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
  // Do slide effect
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  //   const walk = x - startX;
  const walk = (x - startX) * 3; // * gives more of an effect
  slider.scrollLeft = scrollLeft - walk; // * including initial scrollLeft avoids some jumpiness
});
