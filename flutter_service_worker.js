'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6863a35d37d36df5846b98c050d7cae1",
"version.json": "3433146fbbf3d9419fd54310e6f6218c",
"index.html": "28b7424f2ad5afd191028e78ad2b9cdb",
"/": "28b7424f2ad5afd191028e78ad2b9cdb",
"main.dart.js": "4a5a9f95687a298308981d2fdaca5b67",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "178bf982f321ab791f11accc6c40b2c7",
"assets/AssetManifest.json": "33fb7bb90c7d297af79246a560396f73",
"assets/NOTICES": "6ab70a4ca9abc8daf44d34d0935773d5",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "b30e6b53038cf037d767624b4fc2a925",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "eeefad5512dfbffba365ff0cde4d6e6f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "59fc49e0c09c48557ae08094eb5b85a5",
"assets/fonts/MaterialIcons-Regular.otf": "62f4dbb4b1142d6bd75606a803cb92eb",
"assets/assets/social_icons/github.svg": "1bb027109345a90a9eab1e929d8669c2",
"assets/assets/social_icons/facebook.svg": "51f42ec568eb2bdbc734ad787f2ae037",
"assets/assets/social_icons/youtube.svg": "04d8390f3ec3910751bee52a405a5fe9",
"assets/assets/social_icons/linkedIn.svg": "5b238434e2862c877f08572b96c0ef7b",
"assets/assets/social_icons/twitter.svg": "9a35c67b9ac12cd7a8817a11aafdfaec",
"assets/assets/images/email.png": "5eb3c4b86aafbee72b8c471b29413a50",
"assets/assets/images/mappin.png": "9cc090022ae31337336d2024160714b8",
"assets/assets/images/design.png": "6aaec412d8837ac9a83f03f453877606",
"assets/assets/images/person_small.png": "6f780d058150543096d7bd3060db4ac4",
"assets/assets/images/rbeato_tech.PNG": "99b08372d19b61d1904eebd743d1dfee",
"assets/assets/images/chord_generator.png": "2606c7c960caa02a59c64d1066db89f0",
"assets/assets/images/romeu_beato.png": "0812e9e70f5494fe3b92f18998c164cc",
"assets/assets/images/promote.png": "2bd8adcad79a4ebb80888d1a0583b3c4",
"assets/assets/images/quote.png": "1a0aa9a06293ac5689bc32012e0e13e6",
"assets/assets/images/develop.png": "471c2c94d5d04112086eba9fd78c6809",
"assets/assets/images/ear_enhancer.png": "53d870b81b6c3247d5836ab6ff83e920",
"assets/assets/images/phone.png": "45903a1ffa9ede882171aca9f71c4c29",
"assets/assets/images/youtube.png": "81cea6fc47a319de6ad49c00eda309e4",
"assets/assets/images/block_revolution.png": "c39e70f97e4477f2e510a02a86291a5c",
"assets/assets/images/write.png": "dc4f0d3df06d5fc9b13b9168b88e2560",
"assets/assets/images/whatsapp.png": "426617ad28567da23a2346566d84b5a6",
"assets/assets/images/ccv_manager.png": "4302c1b8cc29f97f3dd69eba4138e586",
"assets/assets/images/scale_master_guitar.png": "5b53525cd083e4a48571a6a5eb091880",
"assets/assets/images/romeu_comp.png": "bf8f18788f54caf4cce812b1e6c9034c",
"assets/assets/skills_icons/html_logo.svg": "1f4630ca7f4e95a6cb2c95d3ac3e7947",
"assets/assets/skills_icons/c++_logo.svg": "faffd0b56b21d9bb5c72c1f0bd42d67e",
"assets/assets/skills_icons/javascript_logo.svg": "8ee02715beb101d7d505a9473bfb2754",
"assets/assets/skills_icons/flutter_logo.svg": "f2e3fb32c6ba7935f07f050f1782afd6",
"assets/assets/skills_icons/ethereum_logo.svg": "30e6cf227c006d9337a277ca5719ba4d",
"assets/assets/skills_icons/keras_logo.svg": "8b099027e099c97d341319074e015324",
"assets/assets/skills_icons/solidity_logo.svg": "da793b471bc2bf44b0340d93ec74ecb3",
"assets/assets/skills_icons/python_logo.svg": "8e7effa705ac8952cf93fd0286338df0",
"assets/assets/skills_icons/dart_logo.svg": "9da33b058bf8980a407c2cd6840d0b91",
"assets/assets/skills_icons/bootstrap_logo.svg": "bc6a9c633421251046dd938a2325fff9",
"assets/assets/skills_icons/css_logo.svg": "d10f4bf68a27526ef83fd9dfdc75317d",
"favicon.svg": "3e5e417c4b2f406eb4ff87c64d9cf81a",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
