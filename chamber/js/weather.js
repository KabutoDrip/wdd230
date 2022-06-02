var city = document.querySelector(".city");
var wspeed = document.querySelector(".wspeed");
var temperature = document.querySelector(".temperature");
var windchill = document.querySelector(".chill");
fetch("https://api.openweathermap.org/data/2.5/weather?q=Rexburg&appid=2a862fd172efcdfbe3b4a778bbdbf229")
  .then(response => response.json())
  .then(data => {
    var nameValue = "Hobbiton";
    var tempValue = parseFloat(data['main']['temp']);
    var wspeedValue = parseFloat(data['wind']['speed']);
    var wchillValue = (35.74 + (tempValue * 0.6215) - (35.75 * (wspeedValue**16)));
    city.innerHTML = nameValue;
    temperature.innerHTML = "Temperaure: " + tempValue;
    wspeed.innerHTML = "Wind Speed: " +  wspeedValue;
    chill.innerHTML = "Wind Chill: " + wchillValue;

  })