const assets = [
    "/",
    "/css/editGradesPopup.css",
    "/css/editSubjects.css",
    "/css/general.css",
    "/css/style.css",
    "/css/table.css",
    "/js/appInfo.js",
    "/js/background.process.js",
    "/js/editSubject.js",
    "/js/editSubjectPopup.js",
    "/js/info.js",
    "/js/main.js",
    "/js/theme.js", 
    "/img/favicon.ico",
    "/img/notenappLogo.png",

];

self.addEventListener("install", (event) => {
    console.log("cool");
    self.skipWaiting();
    event.waitUntil(
        caches.open("main_v1").then( (cache) => {
            cache.addAll(assets)
        })
    )
});

function putInCache(request, response) {
    caches.open("main_v1").then((cache) => {
        cache.put(request, response);
    });
}

async function cacheFirst(request) {
    let responseFromCache = await caches.match(request);
    let responseFromNetwork = await fetch(request);
    if (responseFromNetwork) {
        putInCache(request, responseFromNetwork.clone());
        return responseFromNetwork;
    } else if (responseFromCache) {
        return responseFromCache;
    } 


    /*let responseFromCache = await caches.match(request);
    if (responseFromCache) {
        return responseFromCache;
    }
    let responseFromNetwork = await fetch(request);
    putInCache(request, responseFromNetwork.clone());
    return responseFromNetwork;*/
}

self.addEventListener("fetch", (event) => {
    event.respondWith(cacheFirst(event.request));
});

self.addEventListener("activate", (event) => {});