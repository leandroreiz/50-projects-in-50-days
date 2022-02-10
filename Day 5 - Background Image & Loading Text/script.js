const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;
let interval;

const scale = (num, inMin, inMax, outMin, outMax) =>
  ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
// source: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(interval);
  }
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

interval = setInterval(blurring, 30);
