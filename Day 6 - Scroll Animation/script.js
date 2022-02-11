const boxes = document.querySelectorAll('.box');

const checkBoxes = () => {
  // Stores the percentage of the window that will be used on the trigger, 0.8 corresponds to 80% of the window height
  const windowPortion = 0.8;
  const triggerBottom = window.innerHeight * windowPortion;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
};

checkBoxes();

window.addEventListener('scroll', checkBoxes);
