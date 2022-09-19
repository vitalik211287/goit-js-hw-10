import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import getCountryByName from './js/getCountryByName';
import { DEBOUNCE_DELAY } from './constants';

import './css/styles.css';

const searchBoxEl = document.querySelector('#search-box');
searchBoxEl.addEventListener('input', debounce(inputHandler, DEBOUNCE_DELAY));

function inputHandler(e) {
  const inputValue = e.target.value.trim();
  if (!inputValue) {
    return;
  }
  getCountryByName(inputValue);
}
