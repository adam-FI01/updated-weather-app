const axios = require('axios');
const API_KEY = 'YOUR_API_KEY';
const city = 'New York';
const units = 'imperial'; // or 'metric' for Celsius

const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${77705065a7de4afb8d5203705230502}`;

axios.get(url)
  .then(response => {
    const weatherData = response.data;
    console.log(`The temperature in ${city} is ${weatherData.main.temp}°F`);
  })
  .catch(error => {
    console.error(error);
  });