'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6c36ac009148836db91a1b2998e52616",
"index.html": "345af38dfb503492dbe61643568cc442",
"/": "345af38dfb503492dbe61643568cc442",
"main.dart.js": "a4fbb9aaefdac3e60436802de3ff2ab0",
"favicon2.png": "5dcef449791fa27946b3d35ad8803796",
"favicon.png": "0830ed66a3a1517393ca5a21fb464fd4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3d059fc7d7f1357eed6db095b56d8f6c",
"assets/AssetManifest.json": "99f4ba6b36b95c79b950fe07d05650b1",
"assets/NOTICES": "cc7b8cabc9c45149ac2eb1f10d184e28",
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
"assets/assets/images/icons/add.png": "34bf6b26a340db05d2c55ed32bc951f1",
"assets/assets/images/icons/email.png": "667c3c546c06a98886a28b170f6f1152",
"assets/assets/images/icons/check.png": "8d5a19880487ba475f919f4abad12a7d",
"assets/assets/images/icons/stop.png": "2f34f73534c5873e3b7d18c140879036",
"assets/assets/images/icons/stared.png": "22cd7fb90185a96dc0438454aa390a92",
"assets/assets/images/icons/Profile-off.png": "4090d35871dc8cf021fc6d80320d73d5",
"assets/assets/images/icons/arrow_right.png": "3b4bc97a2957e73e76cb78eb1a588e78",
"assets/assets/images/icons/vali.png": "ac3a3264fca01acaa5465c08232e441b",
"assets/assets/images/icons/pin.png": "6e19ec39151690da2b114e82abcc2027",
"assets/assets/images/icons/fire.png": "81eb69ab8bc4f12cefc2333618352167",
"assets/assets/images/icons/My%2520jobs-off.png": "d9ba3a0fab000f349a312aca14dbf241",
"assets/assets/images/icons/house_pin.png": "8b03ef3b1a19e4ad41b5f1d0be0cea33",
"assets/assets/images/icons/positions.png": "c9efdbc38ab51485e34caf29fa4fbc39",
"assets/assets/images/icons/Find%2520job-off.png": "ffb71e052dc6cdc94a480a2326826fc2",
"assets/assets/images/icons/unstared.png": "394409c682b7e1efea63a7c110b1d53b",
"assets/assets/images/icons/radio-on.png": "c53d3b318410b95c17343e9c00a33670",
"assets/assets/images/icons/My%2520jobs-on.png": "caa81214d485e3967e42bb7909e700d2",
"assets/assets/images/icons/Home-off.png": "9f50c59766840575c1a59a202d43041a",
"assets/assets/images/icons/phone.png": "9b89d1673227765c38e1c13d030514bc",
"assets/assets/images/icons/clock.png": "874620dbcbd192b164435230cac32ef2",
"assets/assets/images/icons/delete.png": "14fec73f58c7bf5712307472719e2836",
"assets/assets/images/icons/back_button.png": "533126b8c207610419da1ddcfc846651",
"assets/assets/images/icons/Home-on.png": "33c8057d79b9d3eb0632b031180865ca",
"assets/assets/images/icons/edit.png": "3bff1270031f44944d988190365e73f3",
"assets/assets/images/icons/more.png": "c4f11396916b9f348147401f952f6492",
"assets/assets/images/icons/Find%2520job-on.png": "47648961126569df39e022e02cd75566",
"assets/assets/images/icons/Profile-on.png": "fc40d4e969b473119169e6167f1142d1",
"assets/assets/images/icons/radio-off.png": "1e0880cbdf40189bef927289dee5ae6c",
"assets/assets/images/icons/setting.png": "5ff6405e0dc28ab9f3f0aa4f5e85bcc4",
"assets/assets/images/loading_3.zip": "30234306fa50001d969a5b3b0fff9849",
"assets/assets/images/loading_1.zip": "cfa314b203c0b323046dc83ad4b275bf",
"assets/assets/images/news4.jpg": "9136dd3ecf8cf699dde2d0da5cafb034",
"assets/assets/images/news5.jpg": "dac4d97665f04ed77c9abc990a218cbc",
"assets/assets/images/hili1.jpg": "1fde469309531dc9ce44809cb355f1db",
"assets/assets/images/home2.jpg": "9ea3a6ad060a9f94f35b3ae6691e89df",
"assets/assets/images/hili2.jpg": "69ebc7e920a142383522470bf689479a",
"assets/assets/images/hili3.jpg": "dc38ebfcef1a922692decfd4e9aeb2bb",
"assets/assets/images/hili4.jpg": "814fa1d5828d2d37e85bed23bb9d3c62"
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
