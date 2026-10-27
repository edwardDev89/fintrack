// Offline support: caches the app so it opens without internet once visited.
// Bump VERSION whenever fintrack.html (or another cached file) changes.
const VERSION = 'fintrack-v1';
const ASSETS = ['./fintrack.html', './manifest.webmanifest', './icons/icon-180.png', './icons/icon-192.png', './icons/icon-512.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(VERSION).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;

  // Pages: network first so updates arrive when online; fall back to the cached copy offline.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(VERSION).then((cache) => cache.put('./fintrack.html', copy));
          }
          return res;
        })
        .catch(() => caches.match('./fintrack.html'))
    );
    return;
  }

  // Everything else: cache first.
  event.respondWith(caches.match(req).then((hit) => hit || fetch(req)));
});
