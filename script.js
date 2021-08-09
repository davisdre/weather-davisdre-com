var token = config.MY_API_TOKEN;
var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var icon = document.querySelector('.icon');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=imperial&appid='+token)
.then(response => response.json())
.then(data => {
  var tempValue = Math.floor(data.main.temp);
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  
  var iconValue =  data.weather[0].icon

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  icon.innerHTML = "<img src= 'https://openweathermap.org/img/w/" + iconValue + ".png'>";
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})