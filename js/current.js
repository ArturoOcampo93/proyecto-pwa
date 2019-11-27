
// Calling JSON
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=ce1b41bea110dc29a315acc06cc91b63";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    // Search the info in JSON
    var currently = jsObject.weather[0].description;
    var hight = jsObject.main.temp_max;
    var humidity = jsObject.main.humidity;
    var speed = jsObject.wind.speed;

    // Printing the info in our website
    document.getElementById('currently').innerHTML = currently;
    document.getElementById('hight').innerHTML = hight;
    document.getElementById('humidity').innerHTML = humidity;
    document.getElementById('wind-speed').innerHTML = speed;


    // Calculatin Wind Chill
    var wind = jsObject.wind.speed;
    var temp = jsObject.main.temp_max;

    var chill = (0.0817*(3.71*(Math.pow(wind, 0.5))+
    5.81-0.25*wind)*(temp-91.4)+91.4);
    var result = chill.toFixed(0);
    
    document.getElementById('wind-chill').innerHTML = result;

  });







  /*     

    document.getElementById('current-temp').textContent = jsObject.main.temp;
  
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
    
    */