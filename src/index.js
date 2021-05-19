const results = document.getElementById('results');

const searchMovies = (searchTerm) => {
	results.innerHTML = '';
	fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=adf1f2d7`)
	  .then(response => response.json())
	  .then((data) => {
			// Loop through our array 
			data.Search.forEach((movie) => {
				// Make some HTML
				const listItem = `<li class="list-inline-item">
        	<img src="${movie.Poster}" alt="">
        	<p>${movie.Title}</p>
      	</li>`
				// Select the results ul & insertAdjacentHTML
				results.insertAdjacentHTML('beforeend', listItem)
			})
	  });
}

const form = document.getElementById('search-movies');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const searchTerm = document.getElementById('keyword').value
	searchMovies(searchTerm)
})




const searchAlgoliaPlaces = (event) => {
  fetch("https://places-dsn.algolia.net/1/places/query", {
    method: "POST",
    body: JSON.stringify({ query: document.getElementById('search').value })
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data); // Look at local_names.default
    });
};

const input = document.querySelector("#search");
input.addEventListener("keyup", searchAlgoliaPlaces);



// fetch(url) => GET
// fetch(url, {options}) => Other Request


// JSON.stringify => Takes an object and truns it into a JSON string
// .json() => Takes a JSON string and turns it into a JS object







































