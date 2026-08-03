// 최소 서비스 워커 (Chrome PWA 설치 요건 충족용)
self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
    e.respondWith(fetch(e.request).catch(() => new Response('Offline')));
});
