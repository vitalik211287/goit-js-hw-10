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
  clearEl();
  countryInfoEl.innerHTML = htmlString;
}

function renderCountryList(data) {
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
  clearEl();
  countryUl.innerHTML = htmlUlString;
}

function clearEl() {
  countryInfoEl.innerHTML = '';
  countryUl.innerHTML = '';
}

export { renderCountryData, renderCountryList, clearEl };
