// import './css/styles.css';
// import debounce from 'lodash.debounce';
// import Notiflix from 'notiflix';
// import fetchCountries from './fetchCountries'

// const DEBOUNCE_DELAY = 300;
// const inputEl = document.querySelector("#search-box");

// const countrylist = document.querySelector(".country-list")
// const countryInfo = document.querySelector(".country-info");

// inputEl.addEventListener("input", debounce(onSearch, DEBOUNCE_DELAY));

// function onSearch(e) {
//     const searchValue = e.target.value.trim()
//     if (!searchValue) {
//         return
//     }
//       fetchCountries(searchValue).then(data => {
//          if (data.length > 10) {
//             manyCountriesFound(data)
//          } else if (data.length <= 10 & data.length > 1) {
//              createMarkupListCountry(data)
//          } else if (data.length = 1) {
//              countrylist.innerHTML = ""
//              createMarkupCountryInfo(data)
//          }
       
//     } )
//      if (!e.textContent) {       
//         countrylist.innerHTML = "";
//         countryInfo.innerHTML = "";
//       return
//    }
    
// }

// function createMarkupCountryInfo(arr) {
//     const markup = arr.map(({name, flags, capital, population, languages})=> 
//         `<div class="wrap">
//     <img src="${flags.svg}" alt="${name}" width = "40px" />
//       <h2>${name}</h2></div> 
//       <p class="info"><b>Capital:&nbsp;</b> ${capital}</p>
//       <p class="info"><b>Population:&nbsp;</b> ${population}</p>
//       <p class="info"><b>Languages:&nbsp;</b> ${languages.map(({name}) => `${name}`).join(', ')}</p>
//       `).join("")
//     countryInfo.innerHTML = markup
   
// }

// function createMarkupListCountry(arr) {
//     const markup = arr.map(({name, flags}) => 
//         `<li class="country-info_item">
//     <img src="${flags.svg}" alt="${name}" width = "40px" />
//       <h2>${name}</h2></li>`).join("")
//     countrylist.innerHTML = markup
    
// }

// function manyCountriesFound(data) {
//     Notiflix.Notify.failure('Too many matches found. Please enter a more specific name.');
   
// }