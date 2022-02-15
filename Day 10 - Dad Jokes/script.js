const jokeElement = document.querySelector('.joke');
const btn = document.querySelector('.btn');

const API_URL = 'https://icanhazdadjoke.com/';

const config = {
  headers: {
    Accept: 'application/json',
  },
};

// Using .then
/* const getJoke = () => {
  fetch(API_URL, config)
    .then((res) => res.json())
    .then((data) => (jokeElement.textContent = data.joke));
}; */

// Using Async/await
const getJoke = async () => {
  const res = await fetch(API_URL, config);
  const data = await res.json();
  jokeElement.innerHTML = data.joke;
};

getJoke();
btn.addEventListener('click', getJoke);
