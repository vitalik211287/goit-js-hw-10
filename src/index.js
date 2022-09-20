import debounce from 'lodash.debounce';
import getCountryByName from './js/getCountryByName';
import { DEBOUNCE_DELAY } from './constants';
import { clearEl } from './js/renderCountries';

import './css/styles.css';

const searchBoxEl = document.querySelector('#search-box');
searchBoxEl.addEventListener('input', debounce(inputHandler, DEBOUNCE_DELAY));

function inputHandler(e) {
  const inputValue = e.target.value.trim();
  if (!inputValue) {
    clearEl();
    return;
  }
  getCountryByName(inputValue);
}
