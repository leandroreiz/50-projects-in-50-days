const screens = document.querySelectorAll('.screen');
const chooseInsectBtns = document.querySelectorAll('.choose-insect-btn');
const startBtn = document.querySelector('.start-btn');
const gameContainer = document.querySelector('.game-container');
const timeEl = document.querySelector('.time');
const scoreEl = document.querySelector('.score');
const messageEl = document.querySelector('.message');

let seconds = 0;
let score = 0;
let selectedInsect = {};

const getRandomLocation = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 100;

  return { x, y };
};

const increaseScore = () => {
  score++;

  if (score > 19) {
    messageEl.classList.add('visible');
  }

  scoreEl.innerHTML = `Score: ${score}`;
};

const addInsect = () => {
  setTimeout(createInsect, 1000);
  setTimeout(createInsect, 1500);
};

function catchInsect() {
  increaseScore();
  this.classList.add('caught');
  setTimeout(() => this.remove(), 2000);
  addInsect();
}

const createInsect = () => {
  const insect = document.createElement('div');
  insect.classList.add('insect');
  const { x, y } = getRandomLocation();
  insect.style.top = `${y}px`;
  insect.style.left = `${x}px`;
  insect.innerHTML = `
    <img src="${selectedInsect.src}" alt="${
    selectedInsect.alt
  }" style="transform: rotate(${Math.random() * 360}deg)" />
  `;

  insect.addEventListener('click', catchInsect);

  gameContainer.appendChild(insect);
};

const increaseTime = () => {
  let m = Math.floor(seconds / 60);
  m = m < 10 ? `0${m}` : m;

  let s = seconds % 60;
  s = s < 10 ? `0${s}` : s;

  timeEl.innerHTML = `Time: ${m}:${s}`;
  seconds++;
};

const startGame = () => {
  setInterval(increaseTime, 1000);
};

startBtn.addEventListener('click', () => screens[0].classList.add('up'));

chooseInsectBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const img = btn.querySelector('img');
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    selectedInsect = { src, alt };
    screens[1].classList.add('up');
    setTimeout(createInsect, 1000);
    startGame();
  });
});
