const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

const imgNode = document.querySelectorAll('#imgs img');

let index = 0;

const timeInterval = 3000;
let interval = setInterval(run, timeInterval);

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, timeInterval);
}

function run() {
  index++;
  changeImage();
}

function changeImage(action) {
  if (action === 'prev') {
    index--;
    resetInterval();
  }

  if (action === 'next') {
    index++;
    resetInterval();
  }

  if (index > imgNode.length - 1) index = 0;
  if (index < 0) index = imgNode.length - 1;

  imgs.style.transform = `translateX(${-index * 500}px)`;
}

leftBtn.addEventListener('click', changeImage.bind(null, 'prev'));
rightBtn.addEventListener('click', changeImage.bind(null, 'next'));
