// AlaViva — service worker mínimo.
// Deliberadamente NO cachea nada: como la web se actualiza a menudo
// (especies, CRAS, correcciones), preferimos que la app siempre pida
// la versión más reciente en vez de mostrar contenido antiguo.
// Su única función aquí es cumplir el requisito técnico para que el
// sitio cuente como PWA instalable.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', () => {
  // Sin caché: cada petición va siempre a la red.
});
