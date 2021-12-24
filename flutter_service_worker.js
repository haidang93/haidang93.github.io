'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6c36ac009148836db91a1b2998e52616",
"index.html": "9ec4a507cae92da054447fbbef0873a2",
"/": "9ec4a507cae92da054447fbbef0873a2",
"main.dart.js": "2acb56010a7493a264848df42fa8724e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e13c70ce4e6d37a10acecc692cea7112",
"assets/AssetManifest.json": "4be2475ac7f5a9d0fb2b6161b7664be2",
"assets/NOTICES": "76921be6e573300aebb210b991eba5fa",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/no_avatar.png": "778f6070f96ca8f1dc4950c1b2b6f451",
"assets/assets/images/home.jpg": "458f1327bc446eedc2f6ea51b68ad5b3",
"assets/assets/images/hidepass.png": "fec605af0b0597363970e092e3a0da24",
"assets/assets/images/loading_4.zip": "7603c59da042febf77dafee5cfe7d428",
"assets/assets/images/news1.jpg": "4184b436eb295fc32ab2c1396239ff37",
"assets/assets/images/showpass.png": "4db969eb16485577976bc73b2abb61a6",
"assets/assets/images/news2.jpg": "c2aabcbeb67c11c8b9b46a5455a5bccf",
"assets/assets/images/news3.jpg": "c039caf2873d576ec93a263985f4eacc",
"assets/assets/images/logo.jpg": "9a5fddd7b0d8900e8949ca56aa6d1d3a",
"assets/assets/images/loading_2.zip": "ea7ead5cd61ff80ab6bae442585ed564",
"assets/assets/images/news7.jpg": "6f0bfb09741c5a96b75cc82870fa7a72",
"assets/assets/images/news6.jpg": "77631f4ead991c68a64351285fb34e7d",
"assets/assets/images/calendar.png": "0dc1daf23ba404a24fc341085345ee57",
"assets/assets/images/loading_3.zip": "30234306fa50001d969a5b3b0fff9849",
"assets/assets/images/loading_1.zip": "cfa314b203c0b323046dc83ad4b275bf",
"assets/assets/images/news4.jpg": "9136dd3ecf8cf699dde2d0da5cafb034",
"assets/assets/images/news5.jpg": "dac4d97665f04ed77c9abc990a218cbc",
"assets/assets/images/hili1.jpg": "1fde469309531dc9ce44809cb355f1db",
"assets/assets/images/home2.jpg": "9ea3a6ad060a9f94f35b3ae6691e89df",
"assets/assets/images/hili2.jpg": "69ebc7e920a142383522470bf689479a",
"assets/assets/images/hili3.jpg": "dc38ebfcef1a922692decfd4e9aeb2bb",
"assets/assets/images/hili4.jpg": "814fa1d5828d2d37e85bed23bb9d3c62",
"assets/assets/loading.gif": "31cdfb1e7dda6fc83c12a2ee24119d30"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
