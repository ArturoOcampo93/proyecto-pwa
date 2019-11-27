
    var x = document.getElementById('wind-speed').innerHTML;
    var wind = parseFloat(x,10);
    var y = document.getElementById('hight').innerHTML;
    var temp = parseFloat(y,10);

    var chill = (0.0817*(3.71*(Math.pow(wind, 0.5))+
    5.81-0.25*wind)*(temp-91.4)+91.4);
    var result = chill.toFixed(0);
    
    document.getElementById('wind-chill').innerHTML = result;
