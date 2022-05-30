var city = document.querySelector(".city");
var wspeed = document.querySelector(".wspeed");
var temperature = document.querySelector(".temperature");

fetch("https://api.openweathermap.org/data/2.5/weather?q=Rexburg&appid=2a862fd172efcdfbe3b4a778bbdbf229")
  .then(response => response.json())
  .then(data => {
    var nameValue = data['name'];
    var tempValue = "Temperaure: " + data['main']['temp'];
    var wspeedValue = "Wind Speed: " + data['wind']['speed'];

    city.innerHTML = nameValue;
    temperature.innerHTML = tempValue;
    wspeed.innerHTML = wspeedValue;

  })
