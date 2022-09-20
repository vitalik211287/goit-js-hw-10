const countryInfoEl = document.querySelector('.country-info');
const countryUl = document.querySelector('.country-list');

function renderCountryData([data]) {
  const {
    name: { official: officialName },
    population,
    flags: { svg: flagSvg },
    capital,
    languages,
  } = data;

  const stringLanguages = Object.values(languages).join(', ');
  const htmlString = `
       <h2>
          <img src=${flagSvg} alt=${officialName}-flag width="50" height="50"> 
          <span>${officialName}</span>
       </h2>
       <p>
          <span>Capital:</span>
          <span>${capital}</span>
       </p>
       <p>
          <span>Population:</span>
          <span>${population}</span>
       </p>
       <p>
          <span>Languages:</span>
          <span>${stringLanguages}</span>
       </p>
`;
  console.log(data);
  // console.log(countryUl.insertAdjacentHTML('afterbegin', htmlUlString));
  countryInfoEl.innerHTML = htmlString;
 countryUl.innerHTML = "";
}

function renderCountryList(data) {
  console.log(data, 'lfnf');
  const htmlUlString = data
    .map(({ name: { official: officialName }, flags: { svg: flagSvg } }) => {
      return `
       <li class="list">
            <img src=${flagSvg} alt=${officialName}-flag width="20" height="20">
            <span>${officialName}</span>
        </li>
        `;
    })
    .join(' ');

  // countryUl.insertAdjacentHTML('afterbegin', htmlUlString);
  countryUl.innerHTML = htmlUlString;
    countryInfoEl.innerHTML = "";
}

export { renderCountryData };
export { renderCountryList };
