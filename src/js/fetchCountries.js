import {
  API_URL,
  API_URL_PARAMS,
} from '../constants';


function fetchCountries(name) {
  return fetch(API_URL + name + API_URL_PARAMS);
}
export { fetchCountries };
