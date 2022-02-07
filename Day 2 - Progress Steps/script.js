const progress = document.querySelector('.progress');
const btnNext = document.getElementById('next');
const btnPrev = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

const fillProgress = () => {
  const actives = document.querySelectorAll('.active');

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
};

const isDisabled = () => {
  if (currentActive === 1) {
    btnPrev.disabled = true;
  } else if (currentActive === circles.length) {
    btnNext.disabled = true;
  } else {
    btnPrev.disabled = false;
    btnNext.disabled = false;
  }
};

const updateDOM = () => {
  circles.forEach((circle, i) => {
    if (i < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  fillProgress();
  isDisabled();
};

const nextStepHandler = () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  updateDOM();
};

const prevStepHandler = () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  updateDOM();
};

btnNext.addEventListener('click', nextStepHandler);
btnPrev.addEventListener('click', prevStepHandler);
