import { API_URL, API_URL_PARAMS, NOT_FOUND_MESSAGE } from '../constants';

function fetchCountries(name) {
  return fetch(API_URL + name + API_URL_PARAMS).then(response => {
    if (!response.ok) {
      throw new Error(
        response.status === 404 ? NOT_FOUND_MESSAGE : response.statusText
      );
    }

    return response.json();
  });
}
export { fetchCountries };
