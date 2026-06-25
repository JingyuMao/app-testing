const APP_CACHE = 'travel-magnet-app-v1';
const CDN_CACHE = 'travel-magnet-cdn-v1';

// Core app shell — precached on install
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './favicon.svg'
];

// Map tile hosts — never cache (too many, too large)
const TILE_HOSTS = ['demotiles.maplibre.org'];

// ── Install: precache the app shell ────────────────────────────
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(APP_CACHE)
      .then(c => c.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

// ── Activate: delete stale cache versions ──────────────────────
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(k => k !== APP_CACHE && k !== CDN_CACHE)
          .map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// ── Fetch ──────────────────────────────────────────────────────
self.addEventListener('fetch', e => {
  const { request } = e;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Map tiles → always network, never cache
  if (TILE_HOSTS.some(h => url.host.includes(h))) {
    e.respondWith(fetch(request));
    return;
  }

  // CDN resources (fonts, MapLibre, topojson, geo data)
  // → cache-first: serve from cache immediately, refresh in background
  if (url.origin !== self.location.origin) {
    e.respondWith(
      caches.open(CDN_CACHE).then(cache =>
        cache.match(request).then(cached => {
          const network = fetch(request).then(resp => {
            if (resp.ok) cache.put(request, resp.clone());
            return resp;
          }).catch(() => cached);
          return cached || network;
        })
      )
    );
    return;
  }

  // App shell (same-origin) → network-first, fall back to cache
  e.respondWith(
    fetch(request)
      .then(resp => {
        if (resp.ok) {
          const clone = resp.clone();
          caches.open(APP_CACHE).then(c => c.put(request, clone));
        }
        return resp;
      })
      .catch(() => caches.match(request))
  );
});
