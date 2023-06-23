const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");
let countdown;

function startTimer() {
  timer(parseInt(this.dataset.time));
}

function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now(); // * NOTE: in ms
  const then = now + seconds * 1000;
  displayEndTime(then);
  displayTimeLeft(seconds);
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const displayTime = `${minutes}:${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`;
  document.title = displayTime;
  timerDisplay.textContent = displayTime;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const min = end.getMinutes();
  //   endTime.textContent = `Be back @ ${hour}:${min}`; // 24hr clock
  endTime.textContent = `Be back @ ${hour > 12 ? hour - 12 : hour}:${
    min < 10 ? "0" : ""
  }${min}`; // 12hr clock
}

buttons.forEach((button) => button.addEventListener("click", startTimer));
document.customForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const mins = this.minutes.value;
  const isNumber = !isNaN(mins); // running this in the if statement causes problems
  if (isNumber) {
    timer(mins * 60);
  }
  this.reset();
});
