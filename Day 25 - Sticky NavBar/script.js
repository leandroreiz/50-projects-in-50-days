const nav = document.querySelector('.nav');

const fixNav = () => {
  if (window.scrollY >= 200) nav.classList.add('active');
  if (window.scrollY < 200) nav.classList.remove('active');
};

window.addEventListener('scroll', fixNav);
