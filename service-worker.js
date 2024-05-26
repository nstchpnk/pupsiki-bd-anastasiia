/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "4b3940e6e8ed9a93daea1c91c6d6c48a"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.ffc97313.css",
    "revision": "4b5cd26d120b020c7144a5f194094296"
  },
  {
    "url": "assets/img/1.22515c15.png",
    "revision": "22515c159a955fce91e0c421f026dca6"
  },
  {
    "url": "assets/img/10.14a659b1.png",
    "revision": "14a659b1fee8134571ffef8fa64b2ce5"
  },
  {
    "url": "assets/img/11.2df0c978.png",
    "revision": "2df0c9783a17ce7349dc7cf39a493392"
  },
  {
    "url": "assets/img/2.ab9dafcd.png",
    "revision": "ab9dafcd098df17770255970d7a3c1b1"
  },
  {
    "url": "assets/img/3.128c43e4.png",
    "revision": "128c43e47213cebab801e7a0ddeab4cc"
  },
  {
    "url": "assets/img/4.f014c269.png",
    "revision": "f014c2695b5fe0007471749e567a76bf"
  },
  {
    "url": "assets/img/5.fe141e03.png",
    "revision": "fe141e03ae5c56245512a3ae029e79ad"
  },
  {
    "url": "assets/img/6.b12af433.png",
    "revision": "b12af43318bdf9ab546c977ab2aebd11"
  },
  {
    "url": "assets/img/7.e9d4e084.png",
    "revision": "e9d4e084b8a134e87c966e37490e1677"
  },
  {
    "url": "assets/img/8.8f651dc0.png",
    "revision": "8f651dc01f72cbde0ff722f2e7559a52"
  },
  {
    "url": "assets/img/9.2e74cdb1.png",
    "revision": "2e74cdb19d5ee3227b84b070785d075a"
  },
  {
    "url": "assets/img/relational_scheme.45f8bfdd.png",
    "revision": "45f8bfdd6793223804ff8bf9533d3a8b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.815c9122.js",
    "revision": "4b1026d281dda7ca75b66a6745ac9cf1"
  },
  {
    "url": "assets/js/11.9f25ed57.js",
    "revision": "24afd7bd802073a985b50983248f8611"
  },
  {
    "url": "assets/js/12.c9ec94f7.js",
    "revision": "afc6fbfec69d11c110bd7eea67cd29b6"
  },
  {
    "url": "assets/js/13.2672cfeb.js",
    "revision": "1dd508885cc4b78918e1af5c5c4d0e68"
  },
  {
    "url": "assets/js/14.d59f3681.js",
    "revision": "14efde8c4f04954929d1601768e9a02f"
  },
  {
    "url": "assets/js/15.923693f1.js",
    "revision": "2993685a6834d84d320f480e169c4465"
  },
  {
    "url": "assets/js/16.2c6fd1a1.js",
    "revision": "565f1f7ce23a0093059a7a82f70821c6"
  },
  {
    "url": "assets/js/17.76d1a1df.js",
    "revision": "8cf5fe4a0f813824d11cdc7451cf3613"
  },
  {
    "url": "assets/js/18.93225ad5.js",
    "revision": "964cf1beb45e0e4c315adf3e62d2d371"
  },
  {
    "url": "assets/js/19.6add1a4b.js",
    "revision": "b9d0b711b2051b8d9c51477e8b24fbb8"
  },
  {
    "url": "assets/js/2.79738ae7.js",
    "revision": "243b5993606aa8ca3bef3600cbc15f43"
  },
  {
    "url": "assets/js/20.a5debd22.js",
    "revision": "106482c053a41690f8ccb6f4ce735f2c"
  },
  {
    "url": "assets/js/21.87f9d064.js",
    "revision": "52b0e10a7db9bd8b79dfd6077beaf46e"
  },
  {
    "url": "assets/js/22.b962e315.js",
    "revision": "298c5532df11ebf818037e65bb1ab400"
  },
  {
    "url": "assets/js/23.c2ab8ce2.js",
    "revision": "745e293c544ff88f13a6434179a3351a"
  },
  {
    "url": "assets/js/24.08d65560.js",
    "revision": "83008551853b1f5e40eebe03008629db"
  },
  {
    "url": "assets/js/26.e9a07c31.js",
    "revision": "aaef24a6512774ee5bc945d1e47d81b5"
  },
  {
    "url": "assets/js/3.dbf10a0f.js",
    "revision": "1e76b11ea58e46e47ebbfc15140a8755"
  },
  {
    "url": "assets/js/4.f9de5dcb.js",
    "revision": "287b2ceb09757e205cc84f8bc1e2ea2f"
  },
  {
    "url": "assets/js/5.2ed64df3.js",
    "revision": "588d59799d549d86964f602c648c470e"
  },
  {
    "url": "assets/js/6.f79a7cd6.js",
    "revision": "622dd4b05385881c8e1ba9a534ce5d9e"
  },
  {
    "url": "assets/js/7.5104f64b.js",
    "revision": "65456013f23d9805e4f81dc701901ce7"
  },
  {
    "url": "assets/js/8.c6ba485b.js",
    "revision": "5a4a7ca04bda75ddea12da9bef0b9c2f"
  },
  {
    "url": "assets/js/9.11be509c.js",
    "revision": "67177be85f7e4a7161fc27126f4c053f"
  },
  {
    "url": "assets/js/app.4e750b96.js",
    "revision": "a4f9f5459800abc62731aeddb1f2f816"
  },
  {
    "url": "conclusion/index.html",
    "revision": "f668e71187febae032bc9f22229bb230"
  },
  {
    "url": "design/index.html",
    "revision": "ff6d1d40dad0c12a266f9a5f2c801093"
  },
  {
    "url": "index.html",
    "revision": "084d30f177e41ab089a6873f4a179d6f"
  },
  {
    "url": "intro/index.html",
    "revision": "b3dabaa3fa37c02954b2d9b7bb0d5837"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "ab4b6a832786db750c1c6c5930c634f1"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "2922a418225ea205fcbea1bed8878524"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "e53e7607c40030713a36b7412a513ee6"
  },
  {
    "url": "software/index.html",
    "revision": "cae255e938911b342b4d2d6f3624f032"
  },
  {
    "url": "test/index.html",
    "revision": "da07237c758337a53a86d0d289f5ec4b"
  },
  {
    "url": "use cases/index.html",
    "revision": "c0a595d79aed64a10af8a992e0def6da"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
