const divs = document.querySelectorAll("div");
const button = document.querySelector("button");

function logText(e) {
  console.log(this.classList.value);
  // * prevent bubbling
  //   e.stopPropagation();
}

divs.forEach((div) =>
  div.addEventListener("click", logText, {
    // * NOTE: see how this works with stopPropagation above
    // capture: true, // * run the functions on the way down instead of waiting for them to bubble up; default = false
  })
);

button.addEventListener("click", logText, {
  once: true, // * unbinds listener after first click
});
// * just to illustrate that clicks are being triggered here too
// document.body.addEventListener("click", logText);
