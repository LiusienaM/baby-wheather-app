function displayTemperature(response) {
  let temperatureElement = document.querySelector("#tempNow");
  let cityElement = document.querySelector("#cityName");
  let descriptionElement = document.querySelector("#weatherNow");
  let humidityElement = document.querySelector("#humidityPercent");
  let windElement = document.querySelector("#windSpeed");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "499ae2429cb698163d7523b3dadcc6ef";
let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

axios.get(apiURL).then(displayTemperature);
