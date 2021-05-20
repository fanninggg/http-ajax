import { fetchMovies, submitMovieForm } from './movies.js';
import { initSortable } from './plugins/init_sortable.js';
import { initMarkdown } from './plugins/init_markdown.js';
import { initSelect2 } from './plugins/init_select2.js';

// Initialize SortableJS
initSortable()

// Initialize Markdown
initMarkdown()

// Initialize Select2
initSelect2()

// Fetch & Display Movies
fetchMovies('gun'); // on 1st page load
const form = document.getElementById('search-movies');
form.addEventListener('submit', submitMovieForm)


