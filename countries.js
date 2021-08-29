const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = countries => {

    // for (const country of countries) {
    //     console.log(countries);
    // }
    const countriesDive = document.getElementById('countries');
    countries.forEach(country => {
        //console.log(countries);
        const div = document.createElement('div');
        div.classList.add('country');
        const h3 = document.createElement('h3');
        // h3.innerText = country.name;
        // div.appendChild(h3);
        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // div.appendChild(p);
        div.innerHTML = `
            <h3>${country.name}</h3>
            <p>${country.capital}</p>
            <button onclick ="loadCountryDetailByName('${country.name}')">Details</button>
        
        `;
        countriesDive.appendChild(div);

    });
}
const loadCountryDetailByName = name => {
    console.log(name);
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]));
};

const displayCountryDetail = country => {
    const countrysDiv = document.getElementById('country-detail');
    countrysDiv.innerHTML = `
    <h5>${country.name}</h5>
    <p>Population: ${country.population}</p>
    <img width="60px" src="${country.flag}">
    `;
}