const container = document.querySelector('.container');

const NUMBER_OF_ROWS = 5;

for (let i = 0; i < NUMBER_OF_ROWS * 3; i++) {
  const image = document.createElement('img');
  image.src = `https://source.unsplash.com/random/300x${300 + i}`;

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');
  imageContainer.appendChild(image);

  container.appendChild(imageContainer);
}
