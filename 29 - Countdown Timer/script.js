const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
let countdown;

function timer(seconds) {
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
