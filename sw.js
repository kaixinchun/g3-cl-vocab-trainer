// Service Worker — 词王训练营 v3
// Passthrough only — no offline caching. App requires internet connection.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
