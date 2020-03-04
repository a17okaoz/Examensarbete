var searchbox = document.querySelector(".search-box");
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if(evt.keyCode == 13) {
    getWeatherResult(searchbox.value);
  }
}

var button = document.querySelector(".button");
button.addEventListener("click", function(){
  getWeatherResult(searchbox.value);
})

function getWeatherResult(query){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+searchbox.value+'&appid=00d7209b7ffda34cbe6e05e6f6746448')
  .then(weather =>{
    return weather.json();
  }).then(displayResults);
}

function displayResults(weather) {
  console.log(weather);
  var city = document.querySelector('.location .city');
  city.innerHTML = `${weather.name}, ${weather.sys.country}`;

  var today = new Date();
  var date = document.querySelector(".location .date");
  date.innerText = dateBuilder(today);

  var temp = document.querySelector(".currentTemp .temp");
  temp.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather.weather[0].icon}.png" height="100" width="100"/> ${Math.round(weather.main.temp-273.15)}<span>℃</span>`;

  var type = document.querySelector(".currentTemp .weatherType");
  type.innerHTML = `${weather.weather[0].main}`;
}

function dateBuilder(todayDate) {
  var month = ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti",
  "september", "oktober", "november", "december"];

  var days = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];

  var day = days[todayDate.getDay()];
  var date = todayDate.getDate();
  var month = month[todayDate.getMonth()];
  var year = todayDate.getFullYear();

  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes();


return `${day} ${date} ${month} ${year} ${time}`;
}
