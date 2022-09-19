const countryInfoEl = document.querySelector('.country-info');

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
  countryInfoEl.innerHTML = htmlString;
}

export { renderCountryData };
