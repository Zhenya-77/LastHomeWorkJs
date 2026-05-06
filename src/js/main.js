import axios from 'axios';
import { createMarkup } from './create.js';
import { showBigPoster } from './showBigPoster.js';

export const API_KEY = '523f83d921c0f7bebd45415c65ab8c3c';
export const BASE_URL = 'https://api.themoviedb.org/3';
const END_POINT = '/trending/movie/week';

const options = {
  root: null,
  rootMargin: '300px',
  scrollMargin: '0px',
  threshold: 0,
};

const observer = new IntersectionObserver(handlePagination, options);

let page = 1;

render();

const container = document.querySelector('.js-movie-list');
const target = document.querySelector('.observer');

container.addEventListener('click', showBigPoster);

async function serviceMovie(page = 1) {
  try {
    const { data } = await axios(`${BASE_URL}${END_POINT}`, {
      params: {
        api_key: API_KEY,
        page,
      },
    });

    return data;
  } catch (error) {
    console.log(error.message);
  }
}

async function render() {
  try {
    const data = await serviceMovie(page);

    container.insertAdjacentHTML('beforeend', createMarkup(data.results));

    if (data.page < data.total_pages) {
      observer.observe(target);
    }
  } catch (error) {
    console.log(error.message);
  }
}

function handlePagination(entries, observer) {
  entries.forEach(async entry => {
    if (entry.isIntersecting) {
      page++;

      try {
        const data = await serviceMovie(page);

        container.insertAdjacentHTML('beforeend', createMarkup(data.results));

        if (data.page >= data.total_pages) {
          observer.unobserve(entry.target);
        }
      } catch (error) {
        console.log(error);
      }
    }
  });
}
