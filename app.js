function displayCurrentTemp(response) {
  let currentTempValueElement = document.querySelector("#current-temp-value");
  let currentTemp = Math.round(response.data.temperature.current);
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = response.data.city;
  currentTempValueElement.innerHTML = currentTemp;
}

function search(event) {
  event.preventDefault();
  let searchCity = document.querySelector("#city");
  let city = searchCity.value;
  let apiKey = "3a4b6a3a5adbbcbt203a47f2d10o8fab";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(displayCurrentTemp);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateTimeElement = document.querySelector("#current-date-time");
let currentDate = new Date();

currentDateTimeElement.innerHTML = formatDate(currentDate);
