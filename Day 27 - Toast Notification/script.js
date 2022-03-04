const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
  'Message One',
  'Message two',
  'Message Three',
  'Message Four',
];

const types = ['info', 'success', 'error'];

button.addEventListener('click', () => createNotification());

function createNotification(message = null, type = null) {
  const notification = document.createElement('div');
  notification.classList.add('toast');
  notification.classList.add(type ? type : getRandomType());

  notification.innerText = message ? message : getRandomMessage();

  toasts.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

function getRandomMessage() {
  const randomNumber = Math.floor(Math.random() * messages.length);
  return messages[randomNumber];
}

function getRandomType() {
  const randomNumber = Math.floor(Math.random() * types.length);
  return types[randomNumber];
}
