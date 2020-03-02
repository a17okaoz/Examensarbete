var inputValue = document.querySelector('.inputValue');
var button = document.querySelector('.button');
var name = document.querySelector('.name');

button.addEventListener('click',function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=00d7209b7ffda34cbe6e05e6f6746448')
  .then(response => response.json())
  .then(data => console.log(data))
})
