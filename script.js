var token = config.MY_API_TOKEN;
var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name')
var temp = document.querySelector('.temp')
var weather = document.querySelector('.weather')
var icon = document.querySelector('.icon')

button.addEventListener("click", function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&units=imperial&appid=' + token)
    .then(response => response.json())
    .then(data => {
        var iconValue="https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        var tempValue= Math.floor(data.main.temp);
        var weatherValue=data.weather[0].main;
        var nameValue=data.name;

        name.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        weather.innerHTML = weatherValue;
        icon.innerHTML = iconValue;
    })

.catch(err => alert("Wrong city name!"))
})
