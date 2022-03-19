const search = document.querySelector('.search');
const userContainer = document.querySelector('.user-container');

const userData = [];
const elementsList = [];

const getUsers = async () => {
  const response = await fetch('https://randomuser.me/api?results=50');
  const { results } = await response.json();

  results.forEach((user) => {
    userData.push({
      fullName: `${user.name.first} ${user.name.last}`,
      location: `${user.location.city}, ${user.location.country}`,
      picture: user.picture.thumbnail,
    });
  });

  return userData;
};

const displayUsers = (users) => {
  users.forEach((user) => {
    const userEl = document.createElement('div');
    userEl.classList.add('user');

    userEl.innerHTML = `
      <div class="user-image">
        <img
          src="${user.picture}"
          alt="${user.fullName}"
        />
      </div>
      <div class="user-info">
        <h4 class="user-info--name">${user.fullName}</h4>
        <p class="user-info--location">${user.location}</p>
      </div>
    `;

    elementsList.push(userEl);
    userContainer.appendChild(userEl);
  });
};

const filterData = (searchTerm) => {
  elementsList.forEach((user) => {
    if (user.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      user.classList.remove('hide');
    } else {
      user.classList.add('hide');
    }
  });
};

const init = async () => {
  // create loading message
  const loading = document.createElement('div');
  loading.innerText = `Loading user's list...`;
  loading.classList.add('loading');
  userContainer.appendChild(loading);

  // Get users
  const users = await getUsers();

  // Display users list
  displayUsers(users);

  // remove loading message
  loading.remove();
};

init();

search.addEventListener('input', (e) => filterData(e.target.value));
