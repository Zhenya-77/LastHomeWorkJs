export function createMarkup(arr) {
  return arr
    .map(
      ({ poster_path, original_title, release_date, vote_average, id }) => `
    <li class="movie-card">
    <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${original_title}" data-id="${id}"/>
    <div class="movie-info">
    <h2>${original_title}</h2>
    <p>Release Date: ${release_date}</p>
    <p>Vote Average: ${vote_average}</p>
    </div>
    </li>
      `
    )
    .join('');
}
