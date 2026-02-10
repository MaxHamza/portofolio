'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ecda57ae5b881572671c7c16d2bd340e",
"assets/AssetManifest.bin.json": "f440cf8a81f6458a83663eb4939687eb",
"assets/assets/AssetManifest.bin": "ecda57ae5b881572671c7c16d2bd340e",
"assets/assets/AssetManifest.bin.json": "f440cf8a81f6458a83663eb4939687eb",
"assets/assets/AssetManifest.json": "54b5ad63737dba63959c99bbfc226a28",
"assets/assets/avataaars.png": "3d5fea6e233fddbd0981d3dc915bc135",
"assets/assets/data.json": "9624176186bf4af7f702d051ce142093",
"assets/assets/FontManifest.json": "d2944ad7fd55c231fefda3cf1c2a68b2",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/NOTICES": "8a40987ed1396c9e8d2035f323b09f0b",
"assets/assets/photos/black-white.png": "8f46733fb9733f065982e7da5e893bca",
"assets/assets/photos/job_app/job_1.jpg": "dd4633a755c22ed090074adcf53a4bfb",
"assets/assets/photos/nestleProject/nestle_1.jpg": "4d485c50e3048a882b5cc3edaff88944",
"assets/assets/photos/nestleProject/nestle_2.jpg": "92c3f5384a2733d242b1d7c936cd1213",
"assets/assets/photos/nestleProject/nestle_4.jpg": "d16ee800550fe8024dca182fc64d6a5e",
"assets/assets/projects/banners/boum.png": "2166dbdf15f06fc3fa55ccc8df8daf50",
"assets/assets/projects/banners/dawaa.jpeg": "2090098aee32f32cce3115755b4351a2",
"assets/assets/projects/banners/furniture.png": "c710daedfd0bbee2fea99fc1716aef76",
"assets/assets/projects/banners/kambaqi.jpg": "415da465c9fa2856b373e8028ee38c2c",
"assets/assets/projects/banners/ramadan.png": "7302eae727e73f6cc52ead53610d5324",
"assets/assets/projects/banners/sudoko.png": "9a0f55dbbe6514630bbc4e6c1bcaa33d",
"assets/assets/projects/icons/boum_icon.png": "c3eec48e21b6959a79fedd880f4a0998",
"assets/assets/projects/icons/dawaa_icon.png": "32626e5fe16014acfadf2b6bb26c31e4",
"assets/assets/projects/icons/furniture_icon.png": "214812a37af8c3e9d468566828bb095a",
"assets/assets/projects/icons/kambaqi_icon.png": "6105e6101e28a4a02a09177a0faa39bf",
"assets/assets/projects/icons/ramadan_icon.png": "5db1fbc4e22861ddc3a9adc07d19e2b9",
"assets/assets/projects/icons/sudouko_icon.png": "03fb3a5729a7f1dd6cbc775e1cf5e65a",
"assets/assets/services/ai_agent_icon.png": "9a99b6d30270ef0ad0301ca5ede076f0",
"assets/assets/services/android_icon.png": "a73c1eb1e2505a689dbee43ec08af0d6",
"assets/assets/services/cloud_icon.png": "eed94b3565e9c2fc4954c810365f4ca8",
"assets/assets/services/cubit.png": "977fbfba561065f9a68c4b47f9774531",
"assets/assets/services/firebase.png": "9ed79d8d77f3aab27b935896f7258479",
"assets/assets/services/flutter_icon.png": "e038d7f55d1c679d7b74a87b6787b6ea",
"assets/assets/services/rag_icon.png": "3bd48128ca29ec25fd23bb27a93faf6e",
"assets/assets/services/server_side_icon.png": "f61e3fcc37920addcbd4f75133b669e0",
"assets/assets/videos/decor.mp4": "36f7ddd85282253285751084ea197be4",
"assets/data.json": "9624176186bf4af7f702d051ce142093",
"assets/FontManifest.json": "d2944ad7fd55c231fefda3cf1c2a68b2",
"assets/fonts/agustina/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/fonts/MaterialIcons-Regular.otf": "e0ac65f0d6badf65c6506e4709c854aa",
"assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/NOTICES": "8a40987ed1396c9e8d2035f323b09f0b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "15d3c59ea12ee065d7b597942557ada6",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "b2703f18eee8303425a5342dba6958db",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "32903d70c5d40969458d9ad5fb0fb942",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "2878e2d4e2c5f12958a984c0c6cb5a69",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "2ac4bef4dceaf4b84b9958fe073df649",
"icons/Icon-192.png": "a15b0dc09d1ceb4cf691d2e82079aa67",
"icons/Icon-512.png": "2cad44eaa6115cf5a3effd5dcf302ff1",
"index.html": "f9be812b4c38fcb7cc45cc97b69e9b31",
"/": "f9be812b4c38fcb7cc45cc97b69e9b31",
"main.dart.js": "d053b9ddc688b3b51d00b3d5530a3e2e",
"manifest.json": "3421cd00e17d6f742428a18cbf45709d",
"version.json": "a29e8b22a08aa0274b027931eec216c4"};
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
