//Asignamos nombre y versión de el cache
const CACHE_NAME ='v1_cache_sunnyclimate_pwa';

//Ficheros a cachear en la App
var urlToChache = [
    './',
    './css/desktop.css',
    './css/tablet.css',
    './css/mobile.css',
    './js/alertfridays.js',
    './js/current-FishHaven.js',
    './js/current-SodaSprings.js',
    './js/current.js',
    './js/FishHavenEvents.js',
    './js/forecast-FishHaven.js',
    './js/forecast-SodaSprings.js',
    './js/JSONindex.js',
    './js/MyJS.js',
    './js/prestonEvents.js',
    './js/SodaSpringsEvents.js',
    './js/weatherapi.js',
    './js/windchill.js',
    './images/Cloud.png',
    './images/Rain.png',
    './images/Snow.png',
    './images/Sunny.png',
    './images/facebook.png',
    './images/favicon.png',
    './images/favicon32x32.png',
    './images/favicon48x48.png',
    './images/favicon64x64.png',
    './images/favicon128x128.png',
    './images/FishHaven-Article.png',
    './images/Preston-Article.png',
    './images/SodaSprings-Article.png',
    './images/FishHaven(Desktop).png',
    './images/FishHaven(Mobile).png',
    './images/FishHaven(Tablet).png',
    './images/gallery-1.png',
    './images/gallery-2.png',
    './images/gallery-3.png',
    './images/gallery-4.png',
    './images/gallery-5.png',
    './images/gallery-6.png',
    './images/gallery-7.png',
    './images/gallery-8.png',
    './images/gallery-9.png',
    './images/img-form.png',
    './images/Index(Desktop).png',
    './images/Index(Tablet).png',
    './images/Index(Mobile).png',
    './images/SodaSprings(Desktop).png',
    './images/SodaSprings(Tablet).png',
    './images/SodaSprings(Mobile).png',
    './images/SunnyClimate-White.png',
    './images/SunnyClimate.png',
    './images/twitter.png',
    './images/youtube.png',
];

//Evento Install
    self.addEventListener('install',e => {
        e.waitUntil(
            caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlToChache)
                .then(() => {
                    self.skipwaiting();
                });
            })
            .catch(err => console.log('No se ha registrado el cache',err))
        );
    });
//Evento Activate
    self.addEventListener('active', e => {
        const cacheWhitelist = [CACHE_NAME];
        e.waitUntil(
            caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cachesName.map(cacheName => {
                        if(cacheWhitelist.indexOf(cacheName) === -1){
                            //Borrar elementos que no se necesiten.
                            return caches.delete(cacheName);
                        }
                    })
                );
    })
    .then(() => {
        //Activar cache
        self.ClientRectList.claim();
            })
        );
    });
//Evento Fetch
    self.addEventListener('fetch', e => {
        e.respondWith(
            caches.match(e.request)
            .then(res => {
                if(res){
                    //Devuelvo datos del cache
                    return res;
                }
                return fetch(e.request);
            })
        );
    });