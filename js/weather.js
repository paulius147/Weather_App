class Weather {
  constructor(city) {
    this.apiKey = '3b925b82806e404fb15233850212102';
    this.city = city;
  }

  async getWeather() {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}`);

    const responseData = await response.json();

    return responseData;
  }

  changeLocation(city) {
    this.city = city;
  }
}