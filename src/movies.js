const results = document.getElementById('results');

const insertMovies = (data) => {
	results.innerHTML = '';
  data.Search.forEach((result) => {
    const listItem = `<li class="list-inline-item">
      <img src="${result.Poster}" alt="" />
    </li>`;
    results.insertAdjacentHTML('beforeend', listItem);
  });
};

const fetchMovies = (query) => {
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=8691812a`)
    .then(response => response.json())
    .then(data => insertMovies(data));
};

const submitMovieForm = (event) => {
  event.preventDefault();
  const searchTerm = document.getElementById('keyword').value
  fetchMovies(searchTerm)
}

export { fetchMovies, submitMovieForm };