var currentTemp = document.querySelector('#current-temp');
var weatherIcon = document.querySelector('#weather-icon');
var captionDesc = document.querySelector('figcaption');
var url = "https://api.openweathermap.org/data/2.5/weather?q=Rexburg&appid=2a862fd172efcdfbe3b4a778bbdbf229";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // this is temporary for development only
    var temp = parseInt(((parseFloat(data['main']['temp'])-273.15)*1.8)+32)
    currentTemp.innerHTML = "temp" + temp;
  });
  