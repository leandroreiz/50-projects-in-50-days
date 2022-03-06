const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let clickCounter = 0;
let likesCounter = 0;

const isDoubleClick = (e) => {
  if (e.type === 'click') clickCounter++;

  if (clickCounter === 2) {
    clickCounter = 0;
    createHeart(e);
    times.innerHTML = ++likesCounter;
  }

  setTimeout(() => {
    clickCounter = 0;
  }, 300);
};

const createHeart = (e) => {
  const heart = document.createElement('i');
  heart.classList.add('fas');
  heart.classList.add('fa-heart');

  const x = e.clientX;
  const y = e.clientY;

  const offsetLeft = e.target.offsetLeft;
  const offsetTop = e.target.offsetTop;

  const xInside = x - offsetLeft;
  const yInside = y - offsetTop;

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);

  setTimeout(() => heart.remove(), 1000);
};

loveMe.addEventListener('click', isDoubleClick);
