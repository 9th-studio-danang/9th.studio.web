// Define a cache name for versioning and easy updates
const CACHE_NAME = 'video-cache-v1';

// Specify the list of resources to cache
const urlsToCache = [
    'https://luantruong.sgp1.cdn.digitaloceanspaces.com/9th.studio/intro-vid.mp4',
    'https://luantruong.sgp1.cdn.digitaloceanspaces.com/9th.studio/shopvid.mp4'
];

// Install event - Caches specified resources during the service worker's
// installation
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache);
        }).catch(error => {
            console.error('Failed to cache during install:', error);
        })
    );
});

// Fetch event - Intercepts network requests to serve cached resources if
// available
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            if (cachedResponse) {
                // If a cached response is found, use it
                console.log('Using cached resource')
                // Keep this one here for debugging purpose when needed
                // console.log('Using cached resource:', event.request.url);
                return cachedResponse;
            }
            // If no cached response is found, fetch from the network
            return fetch(event.request).then(networkResponse => {
                return caches.open(CACHE_NAME).then(cache => {
                    // Ensure the response is valid before caching it
                    if (networkResponse.ok) {
                        cache.put(event.request, networkResponse.clone());
                    }
                    return networkResponse;
                });
            }).catch(error => {
                console.error('Fetch failed', error);
            });
        })
    );
});
