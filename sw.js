const CACHE_NAME = 'lm-online-v5';
const CORE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/assets/lm-logo-whitebg.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // NEVER intercept external APIs (e.g. api.github.com) — let browser talk directly!
  if (url.origin !== self.location.origin) return;

  // Always network-first with cache:'no-store' for catalog.json
  if (url.pathname.endsWith('catalog.json')) {
    event.respondWith(
      fetch(req, { cache: 'no-store' }).then(res => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(req, clone));
        }
        return res;
      }).catch(() => caches.match(req))
    );
    return;
  }

  // Network-first for HTML pages
  if (req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html')) {
    event.respondWith(
      fetch(req, { cache: 'no-cache' }).then(res => {
        const clone = res.clone();
        caches.open(CACHE_NAME).then(c => c.put(req, clone));
        return res;
      }).catch(() => caches.match(req) || caches.match('/index.html'))
    );
    return;
  }

  // Stale-while-revalidate for local static assets
  event.respondWith(
    caches.match(req).then(cached => {
      const networkFetch = fetch(req).then(res => {
        if (res && res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(req, clone));
        }
        return res;
      }).catch(() => cached);
      return cached || networkFetch;
    })
  );
});
