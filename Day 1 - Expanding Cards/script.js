const panels = document.querySelectorAll('.panel');

const removeActiveClasses = () => {
  panels.forEach((panel) => panel.classList.remove('active'));
};

const setActiveClass = (e) => {
  removeActiveClasses();
  e.target.classList.toggle('active');
};

panels.forEach((panel) => panel.addEventListener('click', setActiveClass));
