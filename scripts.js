//fetch("https://api.ipify.org/?format=json").then(response => response.json()).then(data => fetch("http://api.ipstack.com/"+data.ip+"?access_key=6ffff1cf915485f004104181b76bbd63").then(response => response.json()).then(data => fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+ data.latitude +"&lon="+ data.longitude +"&exclude=hourly,daily&appid=7bc09ec12633b3e9fa090be42c5e0109").then(response => response.json()).then(data => console.log(data.current.weather[0].main))))

//var ip = fetch("https://api.ipify.org/?format=json").then(response => response.json().then(data => resolve(data)))

//console.log(ip)

var ipkey = "6ffff1cf915485f004104181b76bbd63"
var weatherkey = "7bc09ec12633b3e9fa090be42c5e0109"
var icons = [["Rain", "&#127783"], ["Sun", "&#9728"]]


var weather = fetch("https://api.ipify.org/?format=json").then(response => response.json()).then(data => fetch("http://api.ipstack.com/"+data.ip+"?access_key="+ ipkey).then(response => response.json()).then(data => fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+ data.latitude +"&lon="+ data.longitude +"&appid="+weatherkey).then(response => response.json()).then(data => data.current.weather[0].main)))

