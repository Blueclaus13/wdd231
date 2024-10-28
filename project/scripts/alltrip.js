import {hamburguer,footer }from './utils.mjs';
hamburguer();
footer();

// WEATHER CODE
const searchButton = document.querySelector('#searchCity');
const cityName = document.querySelector('#cityName');

const currentTemp = document.querySelector('#current-temp');
const captionDesc = document.querySelector('figcaption');
const figure = document.querySelector('figure');
const forecastContainer = document.getElementById('forecast');

searchButton.addEventListener('click', (e)=>{
  e.preventDefault();
	const citySearch = document.querySelector("#citySearch");
	cityName.innerHTML = `In ${citySearch.value} city`
	const currentWeather = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch.value}&units=metric&appid=529456b2861e433f067927496ec57b2f`;
	const forecastWeather = `https://api.openweathermap.org/data/2.5/forecast?q=${citySearch.value}&units=metric&appid=529456b2861e433f067927496ec57b2f`;
	weatherData(currentWeather,forecastWeather );
});
const weatherData = async (currentWeather, forecastWeather ) => {
  try {
    // Fetch current weather data
    const responseCurrent = await fetch(currentWeather);
    const dataCurrent = await responseCurrent.json();
    currentTemp.innerHTML = `Temperature: ${dataCurrent.main.temp}°C`;
    captionDesc.innerHTML = `Description: ${dataCurrent.weather[0].description}`;
    
    const iconsrc = `https://openweathermap.org/img/w/${dataCurrent.weather[0].icon}.png`;
    let weatherIcon = document.createElement("img");
    weatherIcon.setAttribute("id", "#weather-icon");
    weatherIcon.src = iconsrc;
    weatherIcon.alt = dataCurrent.weather[0].description; 
    figure.appendChild(weatherIcon);

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

const formCounter = document.querySelector("#visitsDisplay");
let getVisits = parseInt(localStorage.getItem('visitTracker')) || 0;

document.addEventListener("DOMContentLoaded", function () {
	const path = window.location.pathname;

	if (path.includes("alltrip.html")) {
	  getVisits += 1;
	  localStorage.setItem("visitTracker", getVisits);
	}
  });
if(getVisits != 0){
  formCounter.innerHTML = `<strong> Clients  ${getVisits} visited</strong>`;
}

//Carousel

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}