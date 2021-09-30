'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "8b2aa4e6b9e355ab244dcd6f2546e83d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "22f58cbca0995e1a033e93c74713a4e3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "55efcc0eda67e11b50dbd83aae8edc5a",
".git/logs/refs/heads/main": "5574e43a51511d822660f19fb4bc4e76",
".git/logs/refs/remotes/origin/main": "ffd68ef94c1012912b26b30b9f37ee11",
".git/objects/02/31e17d94cd223014fc312a8bfe40e454cc13ed": "97a4b9ed1069b4dcee711bf22db57334",
".git/objects/03/dffc0c1da4e916d3f014ddd7c95b21e89734db": "7a545ee93744b2acf345a40387035fd8",
".git/objects/04/aa91d08a3b08acc46cf6ca7f0fce1566c53ea1": "0a59f248cdb9d5e1b5f5a59185991cbc",
".git/objects/05/38da2185dea5a3868cb6eb99c93fbadc0a293d": "09c3297e81a9746312fea3781588282d",
".git/objects/06/fb86bbf611d7e0b4c4f7f44418ddcbe686fb90": "8690b2183694aea4be839b9d17dcc871",
".git/objects/0c/30602d9a890dc7d7f94b06c825b24361aae330": "f72e71cc97cb7d8e7fb28b7a432cccfa",
".git/objects/17/09055fee5f54ada042a23f6771167c2aefc579": "c4a58f22be35533db8391a65274d85ea",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/fcf704dab4d3bf686d6ad52ab752362388126f": "dcb79ed26639468c4794c3f38f4ba33b",
".git/objects/28/2a285285a631cae696e9c3a25aa974fe07cc84": "22cbccc8d1d9a073be2f5e4ce0cc56ff",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/7402b2b7ff3127db1eade52791a196333e8761": "907ccb8b4c6c0268810b0d50c3069577",
".git/objects/36/cd79fd352feea387b944388414db585bc11ee4": "e448fe678ac1ec0afaa9993e503f2797",
".git/objects/3c/17239e0bc2d7aad22cbc06eb59944689d83fe2": "cf39a499beb87b4572b5cb0023886b9e",
".git/objects/3c/4389991452939e887758fab662155909ba4cc2": "1de7f8ae91c1eb3fb37e9c737528441b",
".git/objects/3f/c32b79e4eeb33a7b8f655ef20995c30b95e2f9": "bb55307eb2205d6176971a537e69107d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4e/e4ccc44ad8810dff4afc49484821927a67848f": "6242f28e14f271c45824d3444a1002e3",
".git/objects/66/3b6b15f90fb987b62790e5036fca55970cdff7": "0e818425a87bbac0fd6260aa26882dda",
".git/objects/69/d6e703edc00efe439329cdd43b974d6839e0a4": "19f4db0f2938cb3bf1e99e71316666f7",
".git/objects/71/4c090ee78340f60f1832b852aae75b1b092d85": "776c27a34ed159cb39592a8526de1d91",
".git/objects/79/7ad0433d775dccf92adf3ba5703e02b72c8e4a": "33841fea539d8012ef8cf371ce37a8c4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/06d1c718c581fc2845b3c37b4602744a6cb28e": "37dc7830482a97023fd31100f51f7fbb",
".git/objects/7d/5e51a3fc46ae0c8412e410a50e71d11a80d0c1": "c9f0137d17028372dcec6759eaeb86bf",
".git/objects/7e/0dfc98dbfc5c6572f53cf42b09ab61ba15a72d": "388cd1dbe355b1aa0fc6c0fbf9cb2181",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d4d23124e77fa3650cd2a652e3c2ae5f2def5d": "368b88588e78726f5df9177280513ffa",
".git/objects/92/51fc5191b376c685f351e0e373420ec9147598": "1818a93d0b4865cd97cd44b714bb245a",
".git/objects/94/5642ccb44096176896b74028ab959a3bab061a": "bba52694ebab5d126dae98fe02641d2f",
".git/objects/98/ce4496894c5a2a281cd81a513d1eba325cbe06": "1a2a272592cd725ce1c3f49b8040b0b1",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a6/de26f775ee3acf198a841477da15f8f6207b42": "1c2ab7b77ae4c195034c1b4126db53b5",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/ee97e528b525a8f358ed1b439054935e179f73": "6febf2024ab771eacbf233b8a28503f8",
".git/objects/b2/b31258e1de4cd45bca4f501b1779178d94e717": "d4706966a170b78abb810b1261a7a9ad",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bc/13a42323a923a14fca7c2cebe316e7bfd22577": "12a7d21003c738de87939cc5d5318808",
".git/objects/c5/0938c47e92f55df90b299cd61df7f3b75d41a8": "9a7ccb81a1bad12d9e0ba2f6c4d0c0bb",
".git/objects/cb/de4dd32badbdf3ea69bef9fd693693ae429254": "4169a6044d18628a7560c6f9cd6750c8",
".git/objects/d0/5588a6309ec853cd6b523c632f47e51aeef2c7": "fb7b15d6a92f1cf8a65e8f4350447446",
".git/objects/db/9eebd35637f37a56fb3a6d3659afec69c21195": "6881316c9478c29f4098e4d7408f5f3a",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/2e62180c378eda517979fad4c5f2f0e041b318": "5b7fc11cbcdd9225a7319f3fe5ba9856",
".git/objects/e7/42c2e07220ed67b5f2890a12848d4f7f9e9849": "b07002351cd51b43bf688722ad0f8531",
".git/objects/eb/90f06b652c7ebdae409c41f49830bf7adb737f": "d8e74a79a90f1c1af9acec2ca8ffa5f3",
".git/objects/ec/45a1d32f1440c23d88aea98a9edfbe62d3ee36": "c801a893dcb425dd1ecff6a3afa3439f",
".git/objects/ef/6d4f8ab1bc80da5f8f75ca58273f4a81ccb06f": "bedcca554f8b25cf7caf3595bfdaae77",
".git/objects/f0/910d1593267206b648bdce1586773a0b63d023": "b2d4ec43f5d4d6f5c57cb449fd2bae0f",
".git/objects/f1/467607b0ee8cbac4a59a6770af5b94c722a5c1": "d85719495d950d2be38c422d654bbd00",
".git/objects/f1/58339c49f252144b0e665ab8aed9b52b99dca3": "fba69544fe09d78646ccfa6606e51ef6",
".git/objects/f7/4f30f6984f50201dfff16c9c107bca41f53f35": "8764436083cc9f06a8b19fc6a94d2e18",
".git/objects/fe/ce45ece7f5ebb4671d19996058cf02ecd2d476": "12b98f6a529758d774cf8e6943297c0d",
".git/refs/heads/main": "9bf07389c0fad250969940cefd7733b3",
".git/refs/remotes/origin/main": "9bf07389c0fad250969940cefd7733b3",
"assets/AssetManifest.json": "4cc50964fcc3924a4ba69b0f97148d05",
"assets/assets/icons/call_history.png": "ee596472ddbe8427cc4b2164f7272d05",
"assets/assets/icons/chat.svg": "6603c9da23d55c3ab75cf052cf2e5b53",
"assets/assets/icons/diamond.png": "41708c39e628a107953b4ea21d6b3d55",
"assets/assets/icons/facebook.svg": "e44d4dd6594e6ae6718a89059f29cdc7",
"assets/assets/icons/google_plus.svg": "3f71987b1e86c1f980e19a685acd040c",
"assets/assets/icons/gpay.png": "92fab3b6f94c105ed3d8207e5ecd79ee",
"assets/assets/icons/home.svg": "4342323fce56ca4c96abe1627642810d",
"assets/assets/icons/india.png": "44ddb6f8ed2e10f5c72406db43b87363",
"assets/assets/icons/level.png": "f96efe6b30a9948b71230562bfcb9382",
"assets/assets/icons/login.svg": "a7711b1f104c98c8ae18420653074837",
"assets/assets/icons/logo.png": "64bcd7f7a46f68f97808cdbc60535dd9",
"assets/assets/icons/razorpay.png": "0c9795060394a5596f74863df27d4307",
"assets/assets/icons/settings.png": "007dca3ebffb44e1dd84041262b23b46",
"assets/assets/icons/signup.svg": "2fa408c0387578db0675dc11edc3e0fa",
"assets/assets/icons/star.png": "2c621faf7830f8906f2806d371405f80",
"assets/assets/icons/store.png": "4cc4b9a6d0962f3761b4ef47821a98a1",
"assets/assets/icons/twitter.svg": "7e145c9eb60da95379f070be9920eca5",
"assets/assets/icons/vip.png": "e7fc54b8e174f1a639ac9232f5666ae3",
"assets/assets/images/girl.jpg": "348bb498e2b6ac2a0e75051f2ce7adf8",
"assets/assets/images/login_bottom.png": "b473d9b1b30607e274348f114273a094",
"assets/assets/images/main_bottom.png": "322c8b4cda43fe21e0d78a1f30f387ce",
"assets/assets/images/main_top.png": "cd3220e276bb9dee0a1c7d18126aad72",
"assets/assets/images/signup_top.png": "6eaad7a7b0febd05500366722015bd6d",
"assets/assets/images/web_login_bg.jpg": "bd0873805bdd0d5618fc3d9da43ebc46",
"assets/assets/json_files/car.json": "4b49007130d552f57653f66c5ecfc835",
"assets/assets/json_files/live.json": "112a0fe823872f8f829ec15084e3e27e",
"assets/assets/json_files/login.json": "416006b6682b7b9eb090e279c38cf61a",
"assets/assets/json_files/logo.json": "f22043c475a70239f3dcd42ab7bd33f8",
"assets/assets/json_files/rose.json": "72f62775f59fc9410911d06785a8d659",
"assets/assets/json_files/signup.json": "6698c8f5b1fa237b8c9095b94c277d79",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/icons/call_history.png": "ee596472ddbe8427cc4b2164f7272d05",
"assets/icons/chat.svg": "6603c9da23d55c3ab75cf052cf2e5b53",
"assets/icons/diamond.png": "41708c39e628a107953b4ea21d6b3d55",
"assets/icons/facebook.svg": "e44d4dd6594e6ae6718a89059f29cdc7",
"assets/icons/google_plus.svg": "3f71987b1e86c1f980e19a685acd040c",
"assets/icons/gpay.png": "92fab3b6f94c105ed3d8207e5ecd79ee",
"assets/icons/home.svg": "4342323fce56ca4c96abe1627642810d",
"assets/icons/india.png": "44ddb6f8ed2e10f5c72406db43b87363",
"assets/icons/level.png": "f96efe6b30a9948b71230562bfcb9382",
"assets/icons/login.svg": "a7711b1f104c98c8ae18420653074837",
"assets/icons/logo.png": "64bcd7f7a46f68f97808cdbc60535dd9",
"assets/icons/razorpay.png": "0c9795060394a5596f74863df27d4307",
"assets/icons/settings.png": "007dca3ebffb44e1dd84041262b23b46",
"assets/icons/signup.svg": "2fa408c0387578db0675dc11edc3e0fa",
"assets/icons/star.png": "2c621faf7830f8906f2806d371405f80",
"assets/icons/store.png": "4cc4b9a6d0962f3761b4ef47821a98a1",
"assets/icons/twitter.svg": "7e145c9eb60da95379f070be9920eca5",
"assets/icons/vip.png": "e7fc54b8e174f1a639ac9232f5666ae3",
"assets/images/girl.jpg": "348bb498e2b6ac2a0e75051f2ce7adf8",
"assets/images/login_bottom.png": "b473d9b1b30607e274348f114273a094",
"assets/images/main_bottom.png": "322c8b4cda43fe21e0d78a1f30f387ce",
"assets/images/main_top.png": "cd3220e276bb9dee0a1c7d18126aad72",
"assets/images/signup_top.png": "6eaad7a7b0febd05500366722015bd6d",
"assets/images/web_login_bg.jpg": "bd0873805bdd0d5618fc3d9da43ebc46",
"assets/json_files/car.json": "4b49007130d552f57653f66c5ecfc835",
"assets/json_files/live.json": "112a0fe823872f8f829ec15084e3e27e",
"assets/json_files/login.json": "416006b6682b7b9eb090e279c38cf61a",
"assets/json_files/logo.json": "f22043c475a70239f3dcd42ab7bd33f8",
"assets/json_files/rose.json": "72f62775f59fc9410911d06785a8d659",
"assets/json_files/signup.json": "6698c8f5b1fa237b8c9095b94c277d79",
"assets/NOTICES": "f9b7d1b336285c07721e2122aa805cb8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "70a392ec460cd1e739222958928d2374",
"/": "70a392ec460cd1e739222958928d2374",
"main.dart.js": "c3f911097fbe2986adf3ca90c5f190d0",
"manifest.json": "a9d4aff8e74e2c42d90ac847d8626ebf",
"version.json": "d7a330c7c641fbd102ce7ca70619b868"
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
