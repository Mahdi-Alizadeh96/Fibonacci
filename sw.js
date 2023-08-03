let repository = '/Fibonacci/';

const serviceWorkerVersion = "v3";

if (!self?.serviceWorker?.scope?.includes('github')) {

    repository = '/'

}

self.addEventListener('install', async (event) => {

    console.log('[Service Worker] Installing Service Worker ...');

    const resources = ['/', '/index.html', '/style.css', '/script/dots.js', '/script/script.js', '/media/patt.png', '/media/icon.png', '/media/math2.png'];

    event.waitUntil(addResourcesToCache(resources.map(item => `${repository}${item.substring(1)}`)));

});

self.addEventListener('activate', async (event) => {

    console.log('[Service Worker] Activating Service Worker ...');

    const keys = await caches.keys();

    Promise.all(keys.map(key => {

        if (key !== serviceWorkerVersion) {

            console.log('[Service Worker] Removing Old Caches ...');

            return caches.delete(key);

        };

    }))

});

self.addEventListener('fetch', async (event) => {

    console.log('[Service Worker] Fetching From Cache ...');

    await event.respondWith(matchResourcesInFetch(event.request));

});

// Add Resources To Cache --->
async function addResourcesToCache (resources) {

    const cache = await caches.open(serviceWorkerVersion);

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