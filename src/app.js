function displayTemperature(response) {
  let temperatureElement = document.querySelector("#tempNow");
  let cityElement = document.querySelector("#cityName");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
}

let apiKey = "499ae2429cb698163d7523b3dadcc6ef";
let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

axios.get(apiURL).then(displayTemperature);
