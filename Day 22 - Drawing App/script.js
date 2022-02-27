// Elements
const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearBtn = document.getElementById('clear');

// Global Variables
let size = 10;
let color = 'black';

let isPressed;
let x;
let y;

// Canvas Context
const ctx = canvas.getContext('2d');

// Functions
function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

// Checks if the mouse is pressed and draw following its path
function IsMousePressed(e) {
  if (e.type === 'mousedown') {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
  }

  if (e.type === 'mouseup') {
    isPressed = false;
    x = null;
    y = null;
  }

  if (e.type === 'mousemove' && isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
}

function changeColor(e) {
  color = e.target.value;
}

function updateSizeOnScreen() {
  sizeEl.innerText = size;
}

function increaseSize() {
  size += 5;
  if (size > 50) size = 50;
  updateSizeOnScreen();
}

function decreaseSize() {
  size -= 5;
  if (size < 5) size = 5;
  updateSizeOnScreen();
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Events
canvas.addEventListener('mousedown', IsMousePressed);
canvas.addEventListener('mouseup', IsMousePressed);
canvas.addEventListener('mousemove', IsMousePressed);

colorEl.addEventListener('change', changeColor);
increaseBtn.addEventListener('click', increaseSize);
decreaseBtn.addEventListener('click', decreaseSize);
clearBtn.addEventListener('click', clearCanvas);
