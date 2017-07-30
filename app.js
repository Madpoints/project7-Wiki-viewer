/*global $*/
$(document).ready(function() {
   getLocation();
});

function getWeather(position) {
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&units=imperial&APPID=d97c4820eeb5a1aad58317e076d46d45',
        success: function(response) {
        	console.log(response);
            $('#temp').text(response.main.temp); 
            $('#descr').text(response.weather[0].description);  
        }
    });
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getWeather);
    } 
}
