import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';
import {
  DEBOUNCE_DELAY,
  MANY_MATCHES_MESSAGE,
  NOT_FOUND_MESSAGE,
} from './constants';
import {
  clearEl,
  renderCountryData,
  renderCountryList,
} from './js/renderCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import './css/styles.css';


const searchBoxEl = document.querySelector('#search-box');
searchBoxEl.addEventListener('input', debounce(inputHandler, DEBOUNCE_DELAY));

function inputHandler(e) {
  const inputValue = e.target.value.trim();
  if (!inputValue) {
    clearEl();
    return;
  }

  fetchCountries(inputValue)
    .then(response => {
      if (!response.ok) {
        throw new Error(
          response.status === 404 ? NOT_FOUND_MESSAGE : response.statusText
        );
      }

      return response.json();
    })
    .then(data => {
      if (data.length > 10) {
        Notify.info(MANY_MATCHES_MESSAGE);
        return;
      }

      if (data.length === 1) {
        renderCountryData(data);
        return;
      }
      renderCountryList(data);
    })
    .catch(error => {
      Notify.failure(error.message);
    });
}
