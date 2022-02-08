const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

const openNav = () => {
  container.classList.add('show-nav');
};

const closeNav = () => {
  container.classList.remove('show-nav');
};

open.addEventListener('click', openNav);
close.addEventListener('click', closeNav);
