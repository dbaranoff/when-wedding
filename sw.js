self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('static')
            .then(function(cache) {
                cache.addAll([
                    './',
                    './index.html',
                    './manifest.json',
                    './src/css/app.css',
                    './src/images/bride.jpg',
                    './src/images/bridegroom.jpg',
                    './src/images/icons/icon-96x96.png',
                    './src/images/icons/icon-144x144.png',
                    './src/images/icons/icon-256x256.png',
                    './src/images/icons/icon-512x512.png',
                    './src/js/app.js',
                    'https://fonts.googleapis.com/css?family=Raleway:400,700'
                ]);
            })
    );
});

self.addEventListener('activate', function() {

});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(res) {
                if (res) {
                    return res;
                } else {
                    return fetch(event.request);
                }
            })
    );
});

