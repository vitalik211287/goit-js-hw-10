import { API_URL, API_URL_PARAMS, MANY_MATCHES_MESSAGE, NOT_FOUND_MESSAGE } from '../constants';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { renderCountryData } from './renderCountries';

function getCountryByName(name) {
  fetch(API_URL + name + API_URL_PARAMS)
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
      if(data.length === 1){
        renderCountryData(data)
      }
      console.log(data);
    })
    .catch(error => {
      Notify.failure(error.message);
    });
}
export default getCountryByName;
