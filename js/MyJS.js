function menu(){
    var x = document.getElementById('menu');
    var y = document.getElementById('menutext');

    if (x.style.display === 'block') {
        document.getElementById("menutext").style.animation = "slideInLeft 1s 1";
        document.getElementById("menu").style.animation = "Up 1s 1";
        y.style.display = 'none';
        var z = setTimeout(close,1000);
      } else {
        x.style.display = 'block';
        y.style.display = 'block';
        document.getElementById("menu").style.animation = "Down 1s 1";
        document.getElementById("menutext").style.animation = "slideInLeft 1s 1";
    }
    return false;
}
function close(){
  document.getElementById('menu').style.display = "none";
}


function showevents(){
  var x = document.getElementById('Events-Preston');

  if (x.style.display === 'block') {
      x.style.display = 'none';
    } else {
      x.style.display = 'block';
  }
}

