const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((localMediaStream) => {
      // https://stackoverflow.com/a/57840673
      // video.src = window.URL.createObjectURL(localMediaStream);   // OLD
      video.srcObject = localMediaStream; // NEW
      video.play();
    })
    .catch((err) => {
      console.error("UH-OH!", err);
    });
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;

  // Ensure canvas is the same dimensions
  canvas.width = width;
  canvas.height = height;

  // returning allows you to call stopInterval if needed
  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
  }, 16);
}

function takePhoto() {
  // play sound
  snap.currentTime = 0;
  snap.play();

  const data = canvas.toDataURL("image/jpeg");
  const imageTitle = "handsome";
  const link = document.createElement("a");
  link.href = data;
  link.setAttribute("download", imageTitle);
  link.innerHTML = `<img src=${data} alt="${imageTitle}" />`;
  strip.insertBefore(link, strip.firstChild);
}

getVideo();

// once the video can play start painting
video.addEventListener("canplay", paintToCanvas);
