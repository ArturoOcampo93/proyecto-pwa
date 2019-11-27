const forecastWeatherRequestURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&APPID=c1ed581fad3ad1154a8a70dafc61d847&units=imperial';
fetch(forecastWeatherRequestURL)
  .then(function (response)
  {
    return response.json();
  })
  .then(function (jsonObject)
  {
    console.table(jsonObject); 
    const forecast = jsonObject['list']
    var Count = 1;

    for (i = 0; i < forecast.length; i++)
    {        

        if (forecast[i]['dt_txt'].includes('18:00:00'))
        {
            var time = parseFloat(forecast[i]['dt']);
            var forecastDate = new Date(time * 1000);
            var forecastDayNumber = forecastDate.getDay();
            var dayOfWeek = "";

            switch(forecastDayNumber)
            {
                case 0:
                    dayOfWeek = "Sun";
                    break;
                case 1:
                    dayOfWeek = "Mon";
                    break;
                case 2:
                    dayOfWeek = "Tue";
                    break;
                case 3:
                    dayOfWeek = "Wed";
                    break;
                case 4:
                    dayOfWeek = "Thu";
                    break;
                case 5:
                    dayOfWeek = "Fri";
                    break;
                case 6:
                    dayOfWeek = "Sat";
                    break;
                default:
                    break;
            }
            
            document.getElementById("day" + Count + "-day-name").innerHTML = dayOfWeek;
            document.getElementById("day" + Count + "-weather-icon").src = 'https://openweathermap.org/img/w/' + forecast[i]['weather'][0].icon + '.png';
            document.getElementById("day" + Count + "-temperature").innerHTML = forecast[i]['main']['temp'];
            Count++;
        }
    }

});