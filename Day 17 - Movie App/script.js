const API_KEY = '4a61d3620ee71d7af49f9069e0219a8a';
const API_URL = `https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&api_key=${API_KEY}`;
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="`;

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

const getMovies = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
};

const showMovies = (movies) => {
  main.innerHTML = '';
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.innerHTML = `
        <img
          src="${IMG_PATH + poster_path}"
          alt="${title}"
        />
        <div class="movie-info">
          <h3 class="movie-title">${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          ${reduceOverview(overview)}
        </div>
    `;

    main.appendChild(movieEl);
  });
};

const searchMovies = (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm);

    search.value = '';
    return;
  }

  window.location.reload();
};

const getClassByRate = (rate) => {
  if (rate < 5) return 'red';
  if (rate >= 5 && rate < 8) return 'orange';
  if (rate >= 8) return 'green';
};

const reduceOverview = (overview) => {
  if (overview.length > 155) {
    return overview.slice(0, 155) + '...';
  }

  return overview.slice(0, 155);
};

// Get initial movies
getMovies(API_URL);

// Search
form.addEventListener('submit', searchMovies);

// id: movie.results.id,
// title: movie.results.original_title,
// overview: movie.results.overview,
// image: movie.results.poster_path,
// rate: movie.results.vote_average,
