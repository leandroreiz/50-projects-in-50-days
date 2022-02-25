const buttons = document.querySelectorAll('.ripple');

const rippleEffect = function (e) {
  const y = e.clientY;
  const x = e.clientX;

  const buttonTop = e.target.offsetTop;
  const buttonLeft = e.target.offsetLeft;

  const yInside = y - buttonTop;
  const xInside = x - buttonLeft;

  const circle = document.createElement('span');
  circle.classList.add('circle');
  circle.style.top = yInside + 'px';
  circle.style.left = xInside + 'px';

  this.appendChild(circle);
};

buttons.forEach((button) => {
  button.addEventListener('click', rippleEffect);
});
