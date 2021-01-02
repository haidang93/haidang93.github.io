'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "41749cef34c8dce12e7a0c2d0e82ce0d",
"assets/assets/images/25372.jpg": "0ae768e6f52a5618a7cb7a23ffb0442b",
"assets/assets/images/72a3d9408d41335f39e9f014dc35cf44.jpg": "6136279ff672eb97dbb2503acfc3685c",
"assets/assets/images/app-background.png": "e81c64d9b23fa59d6de5d98f422547f8",
"assets/assets/images/app-dev.png": "c57634b45f08d389a24614deb5c0a6b4",
"assets/assets/images/b1859bdac7d42d4a0a5a673bc4265564.png": "7867ff84cee1745f1fd2190fe8cc6ce9",
"assets/assets/images/background.jpg": "deb15572a4ecae5ebc2e5f5449556638",
"assets/assets/images/bb.jpg": "e06b0a7b3718787dfa104398b7e189c2",
"assets/assets/images/call.png": "895ee4d70d1d857a629df18e41a84013",
"assets/assets/images/dart.png": "a5f8d09431d001159c31ee430314ace7",
"assets/assets/images/face.png": "e81eb0b5a1aae2e7ee50ff603000999a",
"assets/assets/images/facer.png": "a9703fd4ad345a96fd7863632b8e0145",
"assets/assets/images/firebase.png": "73904f818e83fd22ca9ceab85e48c908",
"assets/assets/images/flutter.png": "f7a9ccaea370f243fb3425874ce45d0d",
"assets/assets/images/home.jpg": "e65740a38520c90b8634d1142828b2e2",
"assets/assets/images/home2.jpg": "705248b76f9493355cf43bf81690e75e",
"assets/assets/images/home3.jpg": "cf90b054c97ed261738157dbef5de980",
"assets/assets/images/insta.png": "eb8b9f90576e23733f363fb33ce8350f",
"assets/assets/images/linkin.png": "b30e0e363a65eab7f550d7344b5eb911",
"assets/assets/images/mail.png": "8ac3b5d4477a35d7c4e9f75fc077358d",
"assets/assets/images/me.png": "184588fe660d26981893dc5831b4f5a5",
"assets/assets/images/me2.jpg": "04bc7fe600719e7f0d82e65687eb1b69",
"assets/assets/images/phone.png": "cff361805208c036120ba3e485281974",
"assets/assets/images/png-clipart-computer-icons-list-price-invoice-price-professional-services-miscellaneous-text.png": "8801df696aeda59a61e9add49ed1c15e",
"assets/assets/images/png-transparent-white-and-gray-globe-logo-computer-icons-internet-world-wide-web-white-house-logo-website-brand.png": "7f8e597d34a4022174a6f7a4e158e3bc",
"assets/assets/images/port-im.png": "a9fbbc29c026d40e492b67631d727d5d",
"assets/assets/images/port.png": "1ad1c12d3907b2bb8d8a36227ea9286b",
"assets/assets/images/skype.png": "287a35049f047b84f8fe65be11e5c9e6",
"assets/assets/images/sqlite.png": "7b56054624a5a696b16e445eb5ce5ac1",
"assets/assets/images/web-background.png": "8700b6e9a0f1c4aa64f1190afbde9574",
"assets/assets/images/web-dev.png": "4222e2c47b9a76d37f74e2b25633edcd",
"assets/assets/images/web.png": "cf281d7144d5712a7defdbfbae3c3f67",
"assets/assets/images/zoom.png": "fc62b621aa3ca0d98455bbdfb3b4918e",
"assets/assets/story.txt": "3e3ec09ab347205a5f6bdfb40279f9c1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/google_fonts/LICENSE.txt": "d273d63619c9aeaf15cdaf76422c4f87",
"assets/google_fonts/Lora/OFL.txt": "49a9c0df2e995c45c7060decebf925a7",
"assets/google_fonts/Lora/README.txt": "44acd8daff471aa8867645e2bf2e18a0",
"assets/google_fonts/Lora-Bold.ttf": "eec9b1b134bfc16624d240b70db7ed59",
"assets/google_fonts/Lora-BoldItalic.ttf": "1ad2aded60e9b2fa80315e8aab0e0a5d",
"assets/google_fonts/Lora-Italic.ttf": "ab2098e1bf41df6b514fdf1f3d4f30b0",
"assets/google_fonts/Lora-Medium.ttf": "c3e2f11036e070e9ea5a4cc2c1169165",
"assets/google_fonts/Lora-MediumItalic.ttf": "f281d9bb9a974ed59f13104278dd1868",
"assets/google_fonts/Lora-Regular.ttf": "c684a3de5c014a61d5139d5b97da99fc",
"assets/google_fonts/Lora-SemiBold.ttf": "6c384a752b937ec93378fe87c2494234",
"assets/google_fonts/Lora-SemiBoldItalic.ttf": "c4d0098ab3fd2e0968cb946a99c92071",
"assets/google_fonts/Lora.zip": "5231791ce935e4c9038c3cbf732c630b",
"assets/google_fonts/Montserrat-Black.ttf": "27e3649bab7c62fa21b8837c4842e40e",
"assets/google_fonts/Montserrat-BlackItalic.ttf": "d9b6ba595b059fc5d48e8f52c30f73b3",
"assets/google_fonts/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/google_fonts/Montserrat-BoldItalic.ttf": "1b38414956c666bd1df78fe5b9c84756",
"assets/google_fonts/Montserrat-ExtraBold.ttf": "19ba7aa52a78c3896558ac1c0a5fb4c7",
"assets/google_fonts/Montserrat-ExtraBoldItalic.ttf": "52a50ca037f2f96fa567404dc3c5bdfb",
"assets/google_fonts/Montserrat-ExtraLight.ttf": "570a244cacd3d78b8c75ac5dd622f537",
"assets/google_fonts/Montserrat-ExtraLightItalic.ttf": "1170df5548b7e238df5fa14b6f1a753e",
"assets/google_fonts/Montserrat-Italic.ttf": "a7063e0c0f0cb546ad45e9e24b27bd3b",
"assets/google_fonts/Montserrat-Light.ttf": "409c7f79a42e56c785f50ed37535f0be",
"assets/google_fonts/Montserrat-LightItalic.ttf": "01c4560c9c15069b6700ce7ad2e49a9c",
"assets/google_fonts/Montserrat-Medium.ttf": "c8b6e083af3f94009801989c3739425e",
"assets/google_fonts/Montserrat-MediumItalic.ttf": "40a74702035bf9ef19053c84ce9a58b9",
"assets/google_fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/google_fonts/Montserrat-SemiBold.ttf": "c641dbee1d75892e4d88bdc31560c91b",
"assets/google_fonts/Montserrat-SemiBoldItalic.ttf": "83c1ec1f1db9a6416791f7d9d29536f2",
"assets/google_fonts/Montserrat-Thin.ttf": "43dd5b7a3d277362d5e801e5353e3a01",
"assets/google_fonts/Montserrat-ThinItalic.ttf": "3c2b290f95cd5b33c3ead2911064a2ab",
"assets/google_fonts/Montserrat.zip": "9b3f34d7bf1dadf50c03ca7dbff6abb2",
"assets/google_fonts/NotoSerif-Bold.ttf": "77c225c157db0de7043cc9524bf5bd03",
"assets/google_fonts/NotoSerif-BoldItalic.ttf": "b458e9f281a4b584f8daaed5e74e7a58",
"assets/google_fonts/NotoSerif-Italic.ttf": "1d43d0f9b7b2e15a9639af5141bde606",
"assets/google_fonts/NotoSerif-Regular.ttf": "d1c72e0e788cf2bbc1de53da57599bec",
"assets/google_fonts/Noto_Serif.zip": "9e813212e62232be2b72c27f04e84030",
"assets/google_fonts/OFL.txt": "5da468cc0e208e63aa009460017f214a",
"assets/google_fonts/README.txt": "44acd8daff471aa8867645e2bf2e18a0",
"assets/NOTICES": "a3c3c12317f6f5d93578e956043bce32",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "38da70131321f2705ed5d5e27f026a6c",
"/": "38da70131321f2705ed5d5e27f026a6c",
"main.dart.js": "ff897081de2ed92f99d15948671db5c8",
"manifest.json": "c28886d22f58106e0c4ec685a3b51b56",
"version.json": "7c46118f399eee9d8fd642accd9d8322"
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
