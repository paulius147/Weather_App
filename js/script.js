const storage = new Storage();

const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city);

const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

document.querySelector('.search').addEventListener('click', () => {
  let inputValue = document.querySelector('.input');

  weather.changeLocation(inputValue.value);
  storage.setLocationData(inputValue.value);
  inputValue.value = '';
  getWeather();
});

function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
      // window.setInterval(function(){ui.paint(results)}, 10000);
    })
    .catch(err => console.log(err));
  }