// * NOTE: `rate`, `pitch`, and `text` are important as names (see setOption())

const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");

msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
  voices = this.getVoices();

  voicesDropdown.innerHTML = voices
    // .filter((voice) => voice.lang.includes("en-"))
    .map((voice) => {
      return `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`;
    })
    .join("");
}

function setVoice() {
  msg.voice = voices.find((voice) => voice.name === this.value);
  toggle();
}

function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

function setOption() {
  msg[this.name] = this.value;
  toggle();
}

// This can't be called on page load because it sometimes takes a second for them to load
speechSynthesis.addEventListener("voiceschanged", populateVoices);
voicesDropdown.addEventListener("change", setVoice);

// Sliders and text area = options
options.forEach((option) => option.addEventListener("change", setOption));
speakButton.addEventListener("click", toggle);
// 2 options to pass arguments
// stopButton.addEventListener("click", toggle.bind(null, false));
stopButton.addEventListener("click", () => toggle(false));
