//Base URL's
//IP: https://api.ipify.org/?format=json
//LatLong: http://api.ipstack.com/70.88.43.29?access_key=6ffff1cf915485f004104181b76bbd63
//Weather: https://api.openweathermap.org/data/2.5/onecall?lat=36.16225051879883&lon=-86.7177963256836&appid=7bc09ec12633b3e9fa090be42c5e0109

var ipkey = "6ffff1cf915485f004104181b76bbd63"
var weatherkey = "7bc09ec12633b3e9fa090be42c5e0109"
var icons = [["Rain", "&#127783"],
["Thunderstorm", "&#127785"],
["Drizzle", "&#127783"],
["Snow", "&#127784"],
["Tornado", "&#127786"],
["Clear", "&#9728"],
["Clouds", "&#9729"],
["Mist", "&#9729"],
["Smoke", "&#9729"],
["Haze", "&#9729"],
["Dust", "&#9729"],
["Fog", "&#9729"],
["Sand", "&#9729"],
["Ash", "&#9729"],
["Squall", "&#127785"]
]

function changeTitle(city) {
    document.getElementById("title").innerHTML = "Weather in: "+ city;
}

function changeUnicode(name) {
 var list = document.getElementsByClassName("container")[0];
 list.getElementsByClassName("unicode")[0].innerHTML = icons.filter(function(v,i) {
   return v[0] === name;
})[0][1];
}


//log IP
fetch("https://api.ipify.org/?format=json").then(response => response.json()).then(data => console.log(data.ip))

//log City

fetch("https://api.ipify.org/?format=json").then(response => response.json()).then(data => fetch("http://api.ipstack.com/"+data.ip+"?access_key="+ ipkey).then(response => response.json()).then(data => console.log(data.city)))

//log weather
fetch("https://api.ipify.org/?format=json").then(response => response.json()).then(data => fetch("http://api.ipstack.com/"+data.ip+"?access_key="+ ipkey).then(response => response.json()).then(data => fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+ data.latitude +"&lon="+ data.longitude +"&appid="+weatherkey).then(response => response.json()).then(data => console.log(data.current.weather[0].main))))

//set unicode to weather
fetch("https://api.ipify.org/?format=json").then(response => response.json()).then(data => fetch("http://api.ipstack.com/"+data.ip+"?access_key="+ ipkey).then(response => response.json()).then(data => fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+ data.latitude +"&lon="+ data.longitude +"&appid="+weatherkey).then(response => response.json()).then(data => changeUnicode(data.current.weather[0].main))))

//set city
fetch("https://api.ipify.org/?format=json").then(response => response.json()).then(data => fetch("http://api.ipstack.com/"+data.ip+"?access_key="+ ipkey).then(response => response.json()).then(data => changeTitle(data.city)))

