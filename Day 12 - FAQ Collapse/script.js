const toggleBtns = document.querySelectorAll('.faq-toggle');

const toggleActive = (e) => {
  e.target.parentElement.parentElement.classList.toggle('active');
};

toggleBtns.forEach((node) => node.addEventListener('click', toggleActive));
