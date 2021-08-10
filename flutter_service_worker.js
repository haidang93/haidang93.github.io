'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "caa5c9212f882fbb1aeee16f4471b486",
"index.html": "7e3841f172359c96df1578eac89a73f5",
"/": "7e3841f172359c96df1578eac89a73f5",
"main.dart.js": "c15ef8d5963d75d266ede5179c269a51",
"Icon-192.png": "522f7b256b3b187e43ff56cabfe269e2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "522f7b256b3b187e43ff56cabfe269e2",
"icons/Icon-512.png": "159b5988f3f037c0dd1b221bb7d6fb95",
"manifest.json": "24d2619bc2a413a103dac790eadc6ae9",
"assets/AssetManifest.json": "473df8958875445c9245b9cd68aa8382",
"assets/NOTICES": "d134ecce8085104e3f296e5fbf0720be",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/port.png": "1ad1c12d3907b2bb8d8a36227ea9286b",
"assets/assets/images/me.png": "184588fe660d26981893dc5831b4f5a5",
"assets/assets/images/b1859bdac7d42d4a0a5a673bc4265564.png": "7867ff84cee1745f1fd2190fe8cc6ce9",
"assets/assets/images/25372.jpg": "0ae768e6f52a5618a7cb7a23ffb0442b",
"assets/assets/images/port-im.png": "a9fbbc29c026d40e492b67631d727d5d",
"assets/assets/images/mail.png": "8ac3b5d4477a35d7c4e9f75fc077358d",
"assets/assets/images/zoom.png": "fc62b621aa3ca0d98455bbdfb3b4918e",
"assets/assets/images/web-dev.png": "4222e2c47b9a76d37f74e2b25633edcd",
"assets/assets/images/flutter.png": "f7a9ccaea370f243fb3425874ce45d0d",
"assets/assets/images/app-background.png": "e81c64d9b23fa59d6de5d98f422547f8",
"assets/assets/images/app-dev.png": "c57634b45f08d389a24614deb5c0a6b4",
"assets/assets/images/firebase.png": "73904f818e83fd22ca9ceab85e48c908",
"assets/assets/images/png-transparent-white-and-gray-globe-logo-computer-icons-internet-world-wide-web-white-house-logo-website-brand.png": "7f8e597d34a4022174a6f7a4e158e3bc",
"assets/assets/images/home.jpg": "e65740a38520c90b8634d1142828b2e2",
"assets/assets/images/face.png": "e81eb0b5a1aae2e7ee50ff603000999a",
"assets/assets/images/web-background.png": "8700b6e9a0f1c4aa64f1190afbde9574",
"assets/assets/images/72a3d9408d41335f39e9f014dc35cf44.jpg": "6136279ff672eb97dbb2503acfc3685c",
"assets/assets/images/background.jpg": "deb15572a4ecae5ebc2e5f5449556638",
"assets/assets/images/linkin.png": "b30e0e363a65eab7f550d7344b5eb911",
"assets/assets/images/skype.png": "287a35049f047b84f8fe65be11e5c9e6",
"assets/assets/images/facer.png": "a9703fd4ad345a96fd7863632b8e0145",
"assets/assets/images/insta.png": "eb8b9f90576e23733f363fb33ce8350f",
"assets/assets/images/web.png": "cf281d7144d5712a7defdbfbae3c3f67",
"assets/assets/images/png-clipart-computer-icons-list-price-invoice-price-professional-services-miscellaneous-text.png": "8801df696aeda59a61e9add49ed1c15e",
"assets/assets/images/phone.png": "cff361805208c036120ba3e485281974",
"assets/assets/images/call.png": "895ee4d70d1d857a629df18e41a84013",
"assets/assets/images/me2.jpg": "04bc7fe600719e7f0d82e65687eb1b69",
"assets/assets/images/home3.jpg": "cf90b054c97ed261738157dbef5de980",
"assets/assets/images/home2.jpg": "705248b76f9493355cf43bf81690e75e",
"assets/assets/images/bb.jpg": "e06b0a7b3718787dfa104398b7e189c2",
"assets/assets/images/bamboo_loading.zip": "542b9ee80a7cf7f67cd63a1b4ea512d5",
"assets/assets/images/dart.png": "a5f8d09431d001159c31ee430314ace7",
"assets/assets/images/sqlite.png": "7b56054624a5a696b16e445eb5ce5ac1",
"Icon-512.png": "159b5988f3f037c0dd1b221bb7d6fb95"
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
