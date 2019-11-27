
// CALLING THE JSON
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    myobj = jsonObject;

  // SEARCHING THE PROPERTIES IN THE JSON FILE

  //NAME
  var FishName = myobj.towns[1].name;
  var PrestonName = myobj.towns[4].name;
  var SodaName = myobj.towns[5].name;

  //MOTTO
  var FishMotto = myobj.towns[1].motto;
  var PrestonMotto = myobj.towns[4].motto;
  var SodaMotto = myobj.towns[5].motto;

  //YEAR OF FUNDATION
  var FishYear = myobj.towns[1].yearFounded;
  var PrestonYear = myobj.towns[4].yearFounded;
  var SodaYear = myobj.towns[5].yearFounded;

  //POPULATION
  var FishPopulation = myobj.towns[1].currentPopulation;
  var PrestonPopulation = myobj.towns[4].currentPopulation;
  var SodaPopulation = myobj.towns[5].currentPopulation;

  //AVERAGE RAIN FALL
  var FishRain = myobj.towns[1].averageRainfall;
  var PrestonRain = myobj.towns[4].averageRainfall;
  var SodaRain = myobj.towns[5].averageRainfall;

  //IMG
  /*var FishPhoto = myobj.towns[1].photo;
  var PrestonPhoto = myobj.towns[4].photo;
  var SodaPhoto = myobj.towns[5].photo;*/


// PRINTING THE RESULTS IN THE HTML

  //NAME
  document.getElementById('box1').innerHTML = FishName;
  document.getElementById('box2').innerHTML = PrestonName;
  document.getElementById('box3').innerHTML = SodaName;

  //MOTTO
  document.getElementById('motto1').innerHTML = FishMotto;
  document.getElementById('motto2').innerHTML = PrestonMotto;
  document.getElementById('motto3').innerHTML = SodaMotto;

  //YEAR OF FUNDATION
  document.getElementById('FishYear').innerHTML = FishYear;
  document.getElementById('PrestonYear').innerHTML = PrestonYear;
  document.getElementById('SodaYear').innerHTML = SodaYear;

  //POPULATION
  document.getElementById('FishPopulation').innerHTML = FishPopulation;
  document.getElementById('PrestonPopulation').innerHTML = PrestonPopulation;
  document.getElementById('SodaPopulation').innerHTML = SodaPopulation;

  //AVERAGE RAIN FALL
  document.getElementById('FishRain').innerHTML = FishRain;
  document.getElementById('PrestonRain').innerHTML = PrestonRain;
  document.getElementById('SodaRain').innerHTML = SodaRain;

  //PHOTO
  /*document.getElementById("FishPhoto").src = FishPhoto;
  document.getElementById("PrestonPhoto").src = PrestonPhoto;
  document.getElementById("SodaPhoto").src = SodaPhoto;*/
});
