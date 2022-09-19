import { API_URL, MANY_MATCHES_MESSAGE } from "../constants";

function getCountryByName(name) {
  fetch(API_URL + name)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      if (data.length > 10){
        Notify.info(MANY_MATCHES_MESSAGE)
        return
      }
      console.log(data);
    })
    .catch(error => {
      Notify.failure(error.message);
     
    });
}
export default getCountryByName