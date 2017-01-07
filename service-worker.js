/*importScripts('./serviceworker-cache-polyfill.js');


/* Sevic-worker code inspired from Wittr project explained in Building offline-First web apps provided by Udacity 
var staticCacheName = 'Udacity-BART-static-v1';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/xml2json.js',
        '/manifest.json',
        '/bower_components/webcomponentsjs/webcomponents-lite.min.js',
        'src/*',
        '/images/*'
      ]);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('Udacity-BART') &&
                 cacheName != staticCacheName;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});


self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
           return response || fetch(event.request);
        })    
    );
});
*/

console.log("sw-precache is used. service-worker.js file will be generated at the time of build")