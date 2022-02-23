const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;

const setBgToBody = () => {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
};

const setActiveSlide = () => {
  slides.forEach((slide) => slide.classList.remove('active'));

  slides[activeSlide].classList.add('active');
};

const moveSlide = (direction) => {
  if (direction === 'right') activeSlide++;
  if (direction === 'left') activeSlide--;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setBgToBody();
  setActiveSlide();
};

rightBtn.addEventListener('click', moveSlide.bind(null, 'right'));
leftBtn.addEventListener('click', moveSlide.bind(null, 'left'));

setBgToBody();
