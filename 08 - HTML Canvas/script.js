const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

// Canvas Setup
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Context Setup (defaults)
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Color https://mothereffinghsl.com/
let hue = 0;
const saturation = '100%'; // % - percent sign was breaking it for some reason
const lightness = '50%'; // % - percent sign was breaking it for some reason

// Width
ctx.lineWidth = 0;
let increment = true;
const MAX_WIDTH = 100;

function draw(e) {
    if (!isDrawing) return;
    ctx.strokeStyle = `hsl(${hue},${saturation},${lightness})`;

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    // lastX = e.offsetX;
    // lastY = e.offsetY;
    [lastX, lastY] = [e.offsetX, e.offsetY];

    // Color
    // HSL NOTE: once you hit 360 (upper limit), it will treat the numbers as if they had looped back to 0 so you could just keep incrementing
    // hue++;
    (hue >= 360) ? hue = 0 : hue++;

    // Width
    if (ctx.lineWidth >= MAX_WIDTH || ctx.lineWidth <= 1) {
        increment = !increment;
    }
    increment ? ctx.lineWidth++ : ctx.lineWidth--;
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];

});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);