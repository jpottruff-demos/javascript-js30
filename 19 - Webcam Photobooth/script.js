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

    // You get a HUGE array (millions long) of pixels
    // [111, 222, 333, 255, ... ]
    // First Pixel = rgba(111,222,333,255);
    let pixels = ctx.getImageData(0, 0, width, height);

    // * Apply effects (comment in which ever you want to use)
    // pixels = redEffect(pixels);
    // pixels = rgbSplit(pixels);
    pixels = greenScreen(pixels);

    ctx.putImageData(pixels, 0, 0);
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

function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    // NOTE: math here can be played with; just messes with the colors
    pixels.data[i + 0] = pixels.data[i + 0] + 100; // red
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // green
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // blue
    // pixels.data[i + 3]; // alpha
  }
  return pixels;
}

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    // NOTE: math here can be played with; just messes with where the pixels are (eg. left, right, wrap)
    pixels.data[i - 150] = pixels.data[i + 0]; // red
    pixels.data[i + 100] = pixels.data[i + 1]; // green
    pixels.data[i - 150] = pixels.data[i + 2]; // blue
    // pixels.data[i + 3]; // alpha
  }
  return pixels;
}

/** Green screens work by taking all colors in a certain range out */
function greenScreen(pixels) {
  // Holds min/max green values
  const levels = {};

  document.querySelectorAll(".rgb input").forEach((input) => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
    // Figure out rgba for current pixel
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    // If the pixel is in the range, take it out
    if (
      red >= levels.rmin &&
      green >= levels.gmin &&
      blue >= levels.bmin &&
      red <= levels.rmax &&
      green <= levels.gmax &&
      blue <= levels.bmax
    ) {
      // take it out by making it transparent
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}

getVideo();

// once the video can play start painting
video.addEventListener("canplay", paintToCanvas);
