const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'We Love Programming!';

let index = 1;
let speed = 300 / speedEl.value;

function writeText() {
  textEl.innerText = text.slice(0, index);
  index++;

  if (index > text.length) index = 1;

  setTimeout(writeText, speed);
}

function setSpeed(e) {
  speed = 300 / e.target.value;
}

writeText();
speedEl.addEventListener('input', setSpeed);
