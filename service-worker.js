// Name of the cache
const CACHE_NAME = 'koffee-cache-v1';

// Files to cache for offline use
const urlsToCache = [
  './',
  'index.html',
  'about.html',
  'menu.html',
  'contact.html',
  'secnd.css',
  'about.css',
  'menu.css',
  'contact.css',
  'koffee.jpg',
  'arabic.jpg',
  'roasted.jpg',
  'ground.jpg',
  'pack.jpg',
  'join.jpg'
];

// Install event: cache files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch event: serve cached files when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
