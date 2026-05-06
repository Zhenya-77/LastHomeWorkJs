import axios from 'axios';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

export const API_KEY = '523f83d921c0f7bebd45415c65ab8c3c';
export const BASE_URL = 'https://api.themoviedb.org/3';

export async function showBigPoster(event) {
  const idPoster = event.target.dataset.id;

  if (!idPoster) return;

  try {
    const { data } = await axios(`${BASE_URL}/movie/${idPoster}`, {
      params: {
        api_key: API_KEY,
      },
    });

    const instance = basicLightbox.create(`
  <img src="https://image.tmdb.org/t/p/w780${data.backdrop_path}" alt="${data.original_title}"/>
 <div class="movie-info-modal">
    <p>Overview: ${data.overview}</p>
 </div>
`);

    instance.show();
  } catch (error) {
    console.log(error);
  }
}
