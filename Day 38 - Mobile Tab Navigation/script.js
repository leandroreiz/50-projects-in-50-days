const contents = document.querySelectorAll('.content');
const navItems = document.querySelectorAll('nav ul li');

const hideAllContents = () => {
  contents.forEach((content) => {
    content.classList.remove('show');
  });
};

const hideAllItems = () => {
  navItems.forEach((item) => {
    item.classList.remove('active');
  });
};

navItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    hideAllContents();
    hideAllItems();

    item.classList.add('active');
    contents[index].classList.add('show');
  });
});
