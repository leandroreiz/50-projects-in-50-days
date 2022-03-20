const container = document.querySelector('.container');
const options = document.querySelectorAll('.option');
const btn = document.querySelector('.btn');

let optionSelected = '';
let icon = '';

container.addEventListener('click', (e) => {
  if (e.target.closest('.option')) {
    // Remove active class
    options.forEach((option) => option.classList.remove('active'));
    e.target.closest('.option').classList.add('active');

    optionSelected = e.target.closest('.option').dataset.option;
    if (optionSelected === 'Unhappy') icon = '💔';
    if (optionSelected === 'Neutral') icon = '❤️‍🩹';
    if (optionSelected === 'Satisfied') icon = '💖';
  }
});

btn.addEventListener(
  'click',
  () =>
    (container.innerHTML = `
    <span class="heart">${icon}</span>
    <p>Thank You!</p>
    <p>Feedback: <strong>${optionSelected}</strong></p>
    <p>
      We'll use your feedback to improve our <br />
      customer support.
    </p>
  `)
);
