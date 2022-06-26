var city = document.querySelector(".city");
var wspeed = document.querySelector(".wspeed");
var temperature = document.querySelector(".temperature");
var windchill = document.querySelector(".chill");
fetch("https://api.openweathermap.org/data/2.5/weather?q=Rexburg&appid=2a862fd172efcdfbe3b4a778bbdbf229")
  .then(response => response.json())
  .then(data => {
    var nameValue = "Hobbiton";
    var tempValue = parseInt(((parseFloat(data['main']['temp'])-273.15)*1.8)+32);
    var wspeedValue = parseInt(data['wind']['speed']);
    var wchillValue = parseInt(35.74 + (tempValue * 0.6215) - (35.75 * (wspeedValue**.16)) + (.4275 * tempValue* (wspeedValue**.16)));
    city.innerHTML = nameValue;
    temperature.innerHTML = "Temperaure: " + tempValue;
    wspeed.innerHTML = "Wind Speed: " +  wspeedValue;
    if (tempValue <= 50 && wspeedValue >= 3){
      windchill.innerHTML = "Wind Chill: " + wchillValue;
    }
    else{
      windchill.innerHTML = "Wind Chill: None" 
    }
  })
  var iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  var desc = data.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
