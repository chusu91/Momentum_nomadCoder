const API_KEY = "a09934c4ec6583d5c95a1640feac11dd";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }); // call the URL. wait for the server to answer
}
function onGeoError() {
  alert("Can't find you.");
}
//param1 when success, param2 when not success
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
