var inputValue = document.querySelector('.inputValue');
var button = document.querySelector('.button');
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var country = document.querySelector('.country');

button.addEventListener('click',function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=00d7209b7ffda34cbe6e05e6f6746448')
  .then(response => response.json())
  .then(data =>{
    var nameValue = data['name'];
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];
    var countryValue = data['sys']['country'];

    tempValue = parseFloat(tempValue);

    document.querySelector('.name').innerHTML = nameValue;
    document.querySelector('.country').innerHTML = countryValue;
    document.querySelector('.temp').innerHTML = tempValue-273.15+"℃";
    document.querySelector('.desc').innerHTML = descValue;
    console.log(data);
  })
})
