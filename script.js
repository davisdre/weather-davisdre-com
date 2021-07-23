var token = config.MY_API_TOKEN;

var city ="Indianapolis";

$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + token, 
function(data) {

    var icon="https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp= Math.floor(data.main.temp);
    var weather=data.weather[0].main;
    var name=data.name
    
    $('.icon').attr('src', icon);
    $('.weather').append(weather);
    $('.temp').append(temp);
    $('.name').append(name);
});