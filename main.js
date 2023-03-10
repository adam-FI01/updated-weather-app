let weather = {
    "apiKey": "6d56cd7af5b16ad3552965c6c198f4d1",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&appid=" 
        + this.apiKey
        )
        .then((response) => response.json()).then((data) => console.log(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

    }
}