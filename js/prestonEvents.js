const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)

  .then(function (response)
  {
    return response.json();
  })
  
  .then(function (jsonObject)
  {
    console.table(jsonObject);
    const towndata = jsonObject['towns'];

    var x = towndata[4].events[0];
    document.getElementById('Upcoming-1').innerHTML = x;

    var Y = towndata[4].events[1];
    document.getElementById('Upcoming-2').innerHTML = Y;

    var Z = towndata[4].events[2];
    document.getElementById('Upcoming-3').innerHTML = Z;

  });