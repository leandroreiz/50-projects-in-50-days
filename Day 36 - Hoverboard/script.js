const container = document.querySelector('.container');

const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
const SQUARES = 500;

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function setColor(square) {
  const color = getRandomColor();
  square.style.backgroundColor = color;
  square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(square) {
  square.style.backgroundColor = '#1d1d1d';
  square.style.boxShadow = `0 0 2px #000`;
}

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseenter', setColor.bind(this, square));
  square.addEventListener('mouseleave', removeColor.bind(this, square));

  container.appendChild(square);
}
