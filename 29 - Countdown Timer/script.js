let countdown;

function timer(seconds) {
  // * NOTE: this causes issues in some browsers with scrolling, tab-offs, etc
  //   setInterval(() => {
  //     seconds--;
  //   }, 1000);

  const now = Date.now(); // * NOTE: in ms
  const then = now + seconds * 1000;
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
  console.log({ minutes, remainderSeconds });
}
