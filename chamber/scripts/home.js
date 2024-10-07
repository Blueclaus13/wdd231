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
const currentWeather = `https://api.openweathermap.org/data/2.5/weather?q=Chihuahua&units=metric&appid=529456b2861e433f067927496ec57b2f`;
const forecastWeather = `https://api.openweathermap.org/data/2.5/forecast?q=Chihuahua&units=metric&appid=529456b2861e433f067927496ec57b2f`;

const currentTemp = document.querySelector('#current-temp');
const captionDesc = document.querySelector('figcaption');
const forecastContainer = document.getElementById('forecast');

const weatherData = async () => {
  try {
    // Fetch current weather data
    const responseCurrent = await fetch(currentWeather);
    const dataCurrent = await responseCurrent.json();
    currentTemp.innerHTML = `Temperature: ${dataCurrent.main.temp}°C`;
    captionDesc.innerHTML = `Description: ${dataCurrent.weather[0].description}`;
    
    const iconsrc = `https://openweathermap.org/img/w/${dataCurrent.weather[0].icon}.png`;
    const weatherIcon = document.querySelector('#weather-icon');
    weatherIcon.src = iconsrc;
    weatherIcon.alt = dataCurrent.weather[0].description; 

    // Weather forecast
    const responseForecast = await fetch(forecastWeather);
    const dataForecast = await responseForecast.json();
    forecastContainer.innerHTML = ''; 

    const forecastList = dataForecast.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 3);

    forecastList.forEach(forecast => {
      const date = new Date(forecast.dt_txt);
      const temp = forecast.main.temp;
      const description = forecast.weather[0].description;
      const iconCode = forecast.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

      // Create forecast list item with weather icon
      const listItem = document.createElement('li');
      listItem.innerHTML = `<strong>${date.toDateString()}</strong>: ${temp}°C, ${description} <img src="${iconUrl}" alt="Weather icon">`;
      forecastContainer.appendChild(listItem);
    });
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
};

weatherData();
//   SPOTLIGHT CODE
  aCompanies.init();
  aCompanies.displayByMembershipType(1);