class UI {
  constructor() {
    this.date = document.querySelector('.date');
    this.location = document.querySelector('.location');
    this.temperature = document.querySelector('.temperature');
    this.primaryImg = document.querySelector('.primary-img');
    this.description = document.querySelector('.description');
    this.span1 = document.querySelector('.span1');
    this.span2 = document.querySelector('.span2');
    this.span3 = document.querySelector('.span3');
  }

  paint(weather) {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    // this.date.textContent = `${year}-${month}-${day} ${hours}:${minutes}`;
    this.location.textContent = weather.location.name;
    this.temperature.textContent = weather.current.temp_c + ' °C';
    this.primaryImg.setAttribute('src', `http://${weather.current.condition.icon}`);
    this.description.textContent = weather.current.condition.text;
    this.span1.textContent = 'Feels like: ' + weather.current.feelslike_c + ' °C';
    this.span2.textContent = 'Wind: ' + weather.current.wind_mph + ' m/h';
    this.span3.textContent = 'Humidity: ' + weather.current.humidity + ' %';
  }
}