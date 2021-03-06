'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c73f57a771f98f41ea0cbfd364899fee",
".git/config": "0219ded8ca1743664216d546922fde74",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "622928b1d62b831be22f42070c32b8f1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ab1697f9645b4efb0e531b27a643596f",
".git/logs/refs/heads/main": "0abd6ac24eface4874894c1f6dc4a614",
".git/logs/refs/remotes/origin/main": "b76db317c204a6004c377c97ba9619ef",
".git/objects/03/1ee33e4b604b53cbd1d3777d0446b434b82be0": "7cfd39ef4c7a93b248989669ca568b5f",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/72534a70f97e3fcaad43427d61542b3fa0568f": "b815b7ae7d43896120d42882bd9f0f79",
".git/objects/0e/4e17280ac5c58687f5a59345c87c8972bb08f4": "69899a1d12cb9711df3b72126be9bdd5",
".git/objects/13/f9b8bfdcef60753e005267c87e0f849e4f989f": "b698e9ce24f8595d8ec84eb59cebc61f",
".git/objects/15/b747f4398f2201869492d60cc8c7881f91fb32": "6ee2ab7378616ed4e64e28d7432ed46c",
".git/objects/16/60b455bc1a0566c0968dab13da7b8d7311ef07": "fb2b8489dc84ff0c34e411527464c2ad",
".git/objects/21/4e6803a357a080a9e158d94e8c7ea21cb498e3": "0e0d6e315c22037f81eeeebd6fe07753",
".git/objects/2d/4ff2d5760473b691b3bf09fabe56d8f606c222": "4461e392452dd06dae8b846b690ccb71",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3b/5c3058bddb6bf10c1196505ceafa3e2e272c54": "0d1bb280c095fb17953a1762cc462c4d",
".git/objects/3d/15de8c3a6a7e85f295470f34c39f609151809f": "cb7b6db37b5303f759d3910e4aa0e5f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/5a/e927bdf865989c7e8a599879379aec25d32e3b": "c86a5af51725dc9bf4fc2df93722876b",
".git/objects/5a/fb7a3b3df551bfb64bdc35f7b9890a0a0c32de": "347abe351d7de4de75397bb7b4b05ab7",
".git/objects/62/2f06ca9b6703eab47a404e2edd1012480b4637": "38c17e8fa1330c7e9fd797c5660f6fa3",
".git/objects/65/137a356ff30eac619383dbe320de4eb7f74690": "b5b783096db017ab8b7909cd49006477",
".git/objects/67/48521f506fe4e560f20ea1d82c7ea0cccf0272": "88936e17bdad17f438eecdf6ec9566d5",
".git/objects/6c/1d304a1e486a93268be2c3271c9a8a3f9914a5": "c234ab4487f5a96f01091e594b90f0f3",
".git/objects/6c/6b06c79c348df4fd9af44fd9ee705a2364008b": "6d0df69d9d266bc0001ad4dfc2eb15f1",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/e1172e5b399f02249f2eb8c4f77034ffff56fa": "fbe6ecfbb0d0746430d5c14e603ac9e2",
".git/objects/81/c940f4c701a49ad5296cdced1abcfe20791aba": "b659d863b31cdb3554a5f76f1984d8a4",
".git/objects/82/899bae3cdf7277a67e1a47250e6709083382f4": "72761d1b581f9900c4eb686747a3f208",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/9c/84ac3d9e93a6fbcb51df44f3d6baf3e354376d": "5c5bd36c0ff918e28da5f36a57d4ee0f",
".git/objects/9c/9f9c934a423881737fe2c572e3ae0f3130c8ce": "066bc958a4a8fb00ac9f3c444afb63ce",
".git/objects/9f/c501bba123638575e2c5b40cd4830e637d724c": "61892bfbbeb30fd58263353fd1442076",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/e2c7c90993c696d0839f4659436465ec2b0d1f": "a949e33f523cc708b274120f6bd18e60",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c1/193163d2620d99e81d94db26474090a9b0c387": "25488fec6d19bffbf0f0c20242bbb246",
".git/objects/c4/01c13eb9fdd7e3bb63ecd477d569ddc0099f2d": "e3fb39889ffca9c110341a08e1676514",
".git/objects/c8/7d92a852f7c48ae181003bf11590f8e73f4941": "dbcccecd43b4f79c954c921869180826",
".git/objects/d5/91fcc02aee9e2c7430b3d42243f2ba9f04da62": "d962b2b7988d90d6ff62b1ff5aa0f38e",
".git/objects/d5/a7ac78258658cb62c7c56b486dd70e07d90821": "b4141a18a89b808f6d832fefeb4d71fb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/779e7a8d9b99b1104e02d9890d81e25eb3b851": "a6cf2e56a2e1bab95b977b29b95dbeff",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/8d0242fd7210554db865079e0aeb36f42a6bb3": "616d44ad77a98804dbadcd6028d407a3",
".git/objects/e8/9adc4235d0e840f29cdaa5072494813c1a98db": "e7eb7fbd656e271058611c376af90b98",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/4d43fe3db366583740ee4c8d06b22c02ed0f51": "739f3fe662d3b2697629ba4514b000b6",
".git/objects/fb/8ced78c06fe76f7a1eab332d729de5d93f9d99": "e93d19ddf3894b9de8e6ebf1f079d924",
".git/objects/fc/c8789308fb61ed50c8b7a614e7aa6a0af211fe": "aa32a8f7a1c4f4f313b30bbf838662f5",
".git/objects/fd/5a85aa891b82e0c1e933855de2f5a25d448f9c": "7fadba334571444b0ba5fd82d0ebf420",
".git/refs/heads/main": "e12a83151faceec3c3418357671a10f2",
".git/refs/remotes/origin/main": "e12a83151faceec3c3418357671a10f2",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "3493ad46ae83bb3ac5483ef25fe987a6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a291d6d209ec187ae201a94d08cca1ea",
"/": "a291d6d209ec187ae201a94d08cca1ea",
"main.dart.js": "21562963f0b31d9aa6ab7d3121e7b027",
"manifest.json": "9a17f2f328edd01cbad4d84d4943294d",
"version.json": "7e18647d581903099c7dffeb33b98f01"
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
