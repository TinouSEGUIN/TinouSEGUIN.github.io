'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "22bccb4fc2a4c81d370475f8024842eb",
"splash/img/light-background.png": "d5d1b6695a72e2284424cd8aa3913045",
"splash/splash.js": "91e52740e285b88e8da8265fbb89c782",
"splash/style.css": "78accff22beb7ef068999d99adff10b6",
"index.html": "90e93057ec63308b9b45618040a793b3",
"/": "90e93057ec63308b9b45618040a793b3",
"main.dart.js": "b305ee97b7cec73eda0c9cd4e7fee182",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6e81d1008047bfe3a67447d5138fafe8",
"assets/AssetManifest.json": "e0d15fef2694b0f4812f11ce022bf1d0",
"assets/NOTICES": "654007fabf36303c2178868ae74a16f0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/Bite.png": "35fd14cc75b2021b8e82d04829333cd1",
"assets/assets/images/Boules.png": "ebaa0801cd77e1e27a3bcbb84ceb4979",
"assets/assets/images/istockphoto-1197239452-612x612.jpg": "0bac785549363f691c69b8ae10f55073",
"assets/assets/images/Ventre.png": "2ff658ac56430120a808098961ac653a",
"assets/assets/images/AlcoolCestPasCool.png": "9e4c880e387239315f3cf5cfbc35562e",
"assets/assets/images/splash_screen.png": "d5d1b6695a72e2284424cd8aa3913045",
"assets/assets/images/jonathan-cohen-6284f2fd26c08-removebg-preview.png": "c2d1201c96dd6ce7b349ec78582a456a",
"assets/assets/images/%255BLamdba4.png": "f9bd57add0daf7e5298a8d4d3c9ab5e3",
"assets/assets/images/ChachateBG.png": "620b2601b6241cfaeb68493713af6dd4",
"assets/assets/images/Carole.png": "97d4c8c783cf1b07ae57e4a8a00c20b4",
"assets/assets/images/Caoutchou.png": "4688d42c2184db96575c993ee9358193",
"assets/assets/images/Pastis.png": "738207451d444bdbd8a1a545a2e6ef4f",
"assets/assets/images/Lambda2.png": "550d3a9e3f3ad81a5fe87e31b2732ca2",
"assets/assets/images/Lambda3.png": "b1eedc2ca2ebb34c9adda629cf73e63f",
"assets/assets/images/Lambda1.png": "ec047a86d7d2fc2ef8f7be8830d475fc",
"assets/assets/images/Chachate.png": "975e0bb647d08a0b7d5d59c00c6f28af",
"assets/assets/sound/AlorsPQ.mp3": "54fe36f2cd04fe7ed3693c8d046357fe",
"assets/assets/sound/Pastis.mp3": "dfea09dfc4dcedcabb937eade5b739c4",
"assets/assets/sound/RentreLeVentre.mp3": "e38c2403ec229e323c241681c1046451",
"assets/assets/sound/AlorsPQ2.mp3": "cd3a20c9599234e83fa43739ad8e7ed6",
"assets/assets/sound/Cohabitation.mp3": "8f9ade4d2684f29b738d4521ecdfc207",
"assets/assets/sound/LAlcoolCestPascool.mp3": "0ea1b662aab4025b06ff6d2f640b379b",
"assets/assets/sound/Chabeute.mp3": "83889e9a4025f991f49a6e097ac22018",
"assets/assets/sound/Cabas.mp3": "c9554f52d5ba2d536f5516c049ee57cf",
"assets/assets/sound/Nichons.mp3": "479004217fcc4f8f100c988991e821d4",
"assets/assets/sound/SacACrotte.wav": "0a32737bd8cd1acb4abfe312da9cdd47",
"assets/assets/sound/Caouchou.mp3": "cb172902a17a0bd2b47335cb94564427",
"assets/assets/sound/QUOI_CPasCool.mp3": "57a2759db8c35e9a0dcc60c9d24006c7",
"assets/assets/sound/Boules.mp3": "5bc4f8513a247497f6c9fca7c6bba481",
"assets/assets/sound/Quoi_Questque.mp3": "ec37a3a98d71123bcf0554c1b1ff0b16",
"assets/assets/sound/CAroleNichons.mp3": "ebe9e8e05c191e934b8f1904913dd5a5",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
