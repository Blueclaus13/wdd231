import aCompanies from './Companies.mjs';

// HAMBURGUER CODE
const mainNav = document.querySelector("#animateme");
const hamButton = document.querySelector("#menu");

hamButton.addEventListener('click', ()=>{
    mainNav.classList.toggle('show');
    hamButton.classList.toggle('show');
}); 
// FOOTER CODE
const year = document.querySelector("#currentYear");
const date = document.querySelector("#lastModified");
const today = new Date();

year.innerHTML = `${today.getFullYear()}`;
date.innerHTML= `Last modification ${today.toLocaleString('en-US', { timeZoneName: 'short' })}`;

// WEATHER CODE

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = `https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=529456b2861e433f067927496ec57b2f&units=metric`;

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // testing only
         displayResults(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
  }
  
  apiFetch();

//   SPOTLIGHT CODE
  aCompanies.init();
  aCompanies.displayByMembershipType(1);