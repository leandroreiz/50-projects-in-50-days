const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profileImg = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedBgTexts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
  header.innerHTML = `
  <img
    src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
    alt=""
  />
  `;
  title.innerHTML = `HTML, CSS and Javascript`;
  excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, atque. Long live Ukraine and all the free world!`;
  profileImg.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />`;
  name.innerHTML = `Lean Dro`;
  date.innerHTML = `Mar 01, 2022`;

  animatedBgs.forEach((bg) => bg.classList.remove('animated-bg'));
  animatedBgTexts.forEach((bgText) =>
    bgText.classList.remove('animated-bg-text')
  );
}
