const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
const holes = document.querySelectorAll(".hole");
let lastHole;
let timeUp = false;
let score = 0;

/** All times in `ms` */
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    return randomHole(holes);
  }

  lastHole = hole;
  return hole;
}

function peep() {
  //   const time = randomTime(200, 1000);
  const time = randomTime(2000, 3000);
  const hole = randomHole(holes);
  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) peep();
  }, time);
}

function bonk(e) {
  // Ignore 'fake' clicks
  if (!e.isTrusted) {
    console.error("CHEATER!");
    return;
  }
  score++;
  scoreBoard.textContent = score;
  // this = mole; this.parentElement = hole;
  this.parentElement.classList.remove("up");
}

function startGame() {
  const gameLength = 10000;
  score = 0;
  scoreBoard.textContent = score;
  timeUp = false;
  peep();
  setTimeout(() => (timeUp = true), gameLength);
}

moles.forEach((mole) => mole.addEventListener("click", bonk));
