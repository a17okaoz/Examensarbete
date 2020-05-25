var t0;
var t1;

const jsonData = {
    "1": "Alingsås",
    "2": "Arboga",
    "3": "Arvika",
    "4": "Askersund",
    "5": "Boden",
    "6": "Bollnäs	",
    "7": "Borgholm",
    "8": "Borlänge",
    "9": "Borås",
    "10": "Djursholm",
    "11": "Eksjö",
    "12": "Enköping",
    "13": "Eskilstuna",
    "14": "Eslöv",
    "15": "Fagersta",
    "16": "Falkenberg",
    "17": "Falköping",
    "18": "Falun",
    "19": "Filipstad",
    "20": "Flen",
    "21": "Gränna",
    "22": "Gävle",
    "23": "Göteborg",
    "24": "Hagfors",
    "25": "Halmstad",
    "26": "Haparanda",
    "27": "Hedemora",
    "28": "Helsingborg",
    "29": "Hjo",
    "30": "Hudiksvall",
    "31": "Huskvarna",
    "32": "Härnösand",
    "33": "Hässleholm",
    "34": "Jönköping",
    "35": "Kalmar",
    "36": "Karlshamn",
    "37": "Karlskoga",
    "38": "Karlskrona",
    "39": "Karlstad",
    "40": "Katrineholm",
    "41": "Kiruna",
    "42": "Kramfors",
    "43": "Kristianstad",
    "44": "Kristinehamn",
    "45": "Kumla",
    "46": "Kungsbacka",
    "47": "Kungälv",
    "48": "Köping",
    "49": "Laholm",
    "50": "Landskrona",
    "51": "Lidingö",
    "52": "Lidköping",
    "53": "Lindesberg",
    "54": "Linköping",
    "55": "Ljungby",
    "56": "Ludvika",
    "57": "Luleå",
    "58": "Lund",
    "59": "Lycksele",
    "60": "Lysekil",
    "61": "Malmö",
    "62": "Mariefred",
    "63": "Mariestad",
    "64": "Marstrand",
    "65": "Mjölby",
    "66": "Motala",
    "67": "Mölndal",
    "68": "Nacka",
    "69": "Nora",
    "70": "Norrköping",
    "71": "Nybro",
    "72": "Nyköping",
    "73": "Nynäshamn",
    "74": "Nässjö",
    "75": "Oskarshamn",
    "76": "Oxelösund",
    "77": "Piteå",
    "78": "Ronneby",
    "79": "Sala	",
    "80": "Sandviken",
    "81": "Sigtuna",
    "82": "Simrishamn",
    "83": "Skara",
    "84": "Skellefteå",
    "85": "Skänninge",
    "86": "Skövde",
    "87": "Sollefteå",
    "88": "Solna",
    "89": "Stockholm",
    "90": "Strängnäs",
    "91": "Strömstad",
    "92": "Sundbyberg",
    "93": "Sundsvall",
    "94": "Säffle",
    "95": "Säter",
    "96": "Sävsjö",
    "97": "Söderhamn",
    "98": "Söderköping",
    "99": "Södertälje",
    "100": "Sölvesborg",
    "101": "Tidaholm",
    "102": "Torshälla",
    "103": "Tranås",
    "104": "Trelleborg",
    "105": "Trollhättan",
    "106": "Trosa",
    "107": "Uddevalla",
    "108": "Ulricehamn",
    "109": "Umeå",
    "110": "Uppsala",
    "111": "Vadstena",
    "112": "Varberg",
    "113": "Vaxholm",
    "114": "Vetlanda",
    "115": "Vimmerby",
    "116": "Visby",
    "117": "Vänersborg",
    "118": "Värnamo",
    "119": "Västervik",
    "120": "Västerås",
    "121": "Växjö",
    "122": "Ystad",
    "123": "Åmål",
    "124": "Ängelholm",
    "125": "Örebro",
    "126": "Öregrund",
    "127": "Örnsköldsvik",
    "128": "Östersund",
    "129": "Östhammar",
}



const values = Object.values(jsonData)
var randomValue = values[parseInt(Math.random() * values.length)]

document.getElementById("test").value = randomValue;

var button = document.querySelector(".button");
button.addEventListener("click", function(){
  t0 = performance.now()
   getWeatherResult(randomValue);
})

function getWeatherResult(query){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+randomValue+'&appid=00d7209b7ffda34cbe6e05e6f6746448')
  .then(weather =>{
    return weather.json();
  }).then(displayResults);
}

function dateBuilder(todayDate) {
  var month = ["January", "February", "March", "April", "May", "June", "July", "August",
  "September", "October", "November", "December"];

  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  var day = days[todayDate.getDay()];
  var date = todayDate.getDate();
  var month = month[todayDate.getMonth()];
  var year = todayDate.getFullYear();

  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes();

 return `${day} ${date} ${month} ${year} ${time}`;
}

  function refresh() {
      setTimeout(function () {
          location.reload()
      }, 100);
 }

function displayResults(weather) {
  var city = document.querySelector('.location .city');
  city.innerHTML = `${weather.name}, ${weather.sys.country}`;

 var today = new Date();
 var date = document.querySelector(".location .date");
 date.innerText = dateBuilder(today);

 var temp = document.querySelector(".currentTemp .temp");
 temp.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather.weather[0].icon}.png" height="100" width="100"/> ${Math.round(weather.main.temp-273.15)}<span>℃</span>`;

 var type = document.querySelector(".currentTemp .weatherType");
 type.innerHTML = `${weather.weather[0].description}`;


 t1 = performance.now()

 var logData = (t1 - t0) + "," + "\n";

window.localStorage.setItem('loggedData', logData);

 var http = new XMLHttpRequest();
 var url = 'https://wwwlab.iit.his.se/a17okaoz/cms/data_receiver.php';
 var params = 'str=' + logData;
 http.open('POST', url, true);

 //Send the proper header information along with the request
 http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
 http.send(params);

//location.reload()
refresh()
}
