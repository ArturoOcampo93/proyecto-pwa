var x = document.getElementById('alertFridays');
var d = new Date();
var n = d.getDay()

if(n == 5){
    x.style.display = 'block';
}
else{
    x.style.display = 'none';
}
