const repository = '/Fibonacci'

self.addEventListener('install', async (event) => {

    console.log('[Service Worker] Installing Service Worker ...');

});

self.addEventListener('activate', (event) => {

    console.log('[Service Worker] Activating Service Worker ...');

    const resources = ['/', '/index.html', '/style.css', '/script/dots.js', '/script/script.js', '/media/patt.png', '/media/icon.png', '/media/math2.png'];

    event.waitUntil(addResourcesToCache(resources.map(item => `${repository}${item}`)));

});

self.addEventListener('fetch', async (event) => {

    console.log('[Service Worker] Fetching From Cache ...');

    await event.respondWith(matchResourcesInFetch(event.request));

});

// Add Resources To Cache --->
async function addResourcesToCache (resources) {

    const cache = await caches.open("v1");

    await cache.addAll(resources);

};

// Match Resources in Fetch --->
async function matchResourcesInFetch (request) {

    const response = await caches.match(request);

    if (response) {

        return response;

    } else {

        return fetch(request);

    }

};