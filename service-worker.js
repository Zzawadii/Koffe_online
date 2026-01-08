// Name of the cache
const CACHE_NAME = 'koffee-cache-v1';

// Files to cache
const urlsToCache = [
    '/index.html',
    '/about.html',
    '/menu.html',
    '/contact.html',
    '/secnd.css',
    '/about.css',
    '/menu.css',
    '/koffee.jpg',
    '/arabic.jpg',
    '/roasted.jpg',
    '/ground.jpg',
    '/pack.jpg',
    '/join.jpg',
    '/icons/icon-192.png',
    '/icons/icon-512.png'
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
