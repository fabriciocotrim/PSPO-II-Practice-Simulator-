const CACHE_NAME = "pspo-i-practice-v2.3.0";
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./app/app-profile.js",
  "./data/exam-repository.js",
  "./data/question-repository.js",
  "./app.js",
  "./manifest.json",
  "./exams/pspo-i/exam-config.json",
  "./exams/pspo-i/topics.json",
  "./exams/pspo-i/questions.pt-BR.json",
  "./icons/icon.svg",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match(event.request).then((cached) => cached || caches.match("./index.html")))
  );
});
