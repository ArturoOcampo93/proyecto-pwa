if('serviceWorker' in navigator){
    console.log('Service Worker esta activo');
    navigator.serviceWorker.register('./js/sw.js')
        .then(res => console.log('Service Worker cargado correctamente',res))
        .catch(err => console.log('Service Worker no se ha podido registrar',err))
}
else{
    console.log('Service Worker esta inactivo');
}