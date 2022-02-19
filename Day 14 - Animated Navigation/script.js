const toggleBtn = document.getElementById('toggle');
const nav = document.getElementById('nav');

const toggleBtnHandler = () => {
  nav.classList.toggle('active');
};

toggleBtn.addEventListener('click', toggleBtnHandler);
