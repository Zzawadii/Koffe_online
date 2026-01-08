// Name of the cache
const CACHE_NAME = 'koffee-cache-v1';

// Files to cache
const urlsToCache = [
    '/Koffe_online/index.html',
    '/Koffe_online/about.html',
    '/Koffe_online/menu.html',
    '/Koffe_online/contact.html',
    '/Koffe_online/secnd.css',
    '/Koffe_online/about.css',
    '/Koffe_online/menu.css',
    '/Koffe_online/koffee.jpg',
    '/Koffe_online/arabic.jpg',
    '/Koffe_online/roasted.jpg',
    '/Koffe_online/ground.jpg',
    '/Koffe_online/pack.jpg',
    '/Koffe_online/join.jpg',
    '/Koffe_online/icons/icon-192.png',
    '/Koffe_online/icons/icon-512.png'
];


// Install event: cache files
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
            .then(() => console.log('Files cached successfully'))
    );
});

// Fetch event: serve cached files if offline
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});

