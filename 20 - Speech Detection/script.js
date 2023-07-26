// * Speech Recognition Setup
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;

// * Variables
const words = document.querySelector(".words");
let p = document.createElement("p");

words.appendChild(p);

// *NOTE: if your mic/audio is being used elsewhere it might cause problems...
recognition.addEventListener("result", (e) => {
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((nestedResult) => nestedResult.transcript)
    .join("");

  p.textContent = transcript;
  if (e.results[0].isFinal) {
    p = document.createElement("p");
    words.appendChild(p);
  }

  // * MORE THINGS COULD GO HERE; Call an API or whatever
  if (transcript.includes("dog")) {
    console.warn("🐕🐶🐕‍🦺");
  }
});

recognition.addEventListener("end", recognition.start);

recognition.start();
