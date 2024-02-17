const e = [
  "/app",
  "/fallback.js",
  "/progressive-web-app.js",
  "/elements/apps/bx-progressivewebapp.js",
  "/boxy-svg.webmanifest",
  "/templates/about.tpl",
  "/templates/progressive-web-app-menu.tpl",
  "/images/app/1024.png",
  "/images/app/128.png",
  "/images/app/16.png",
  "/images/app/192.png",
  "/images/app/24.png",
  "/images/app/256.png",
  "/images/app/32.png",
  "/images/app/48.png",
  "/images/app/512.png",
  "/images/app/64.png",
  "/images/boxy-svg.svg",
  "/images/cornell-box.jpg",
  "/images/cursors/blank.svg",
  "/images/cursors/text-add.svg",
  "/images/cursors/text.svg",
  "/images/iconsets/default.svg",
  "/images/iconsets/user-agents.svg",
  "/themes/adwaita-dark.css",
  "/themes/adwaita.css",
  "/themes/base.css",
  "/themes/cupertino-dark.css",
  "/themes/cupertino.css",
  "/themes/fluent-dark.css",
  "/themes/fluent.css",
  "/workers/asciify.js",
  "/workers/pixelate.js",
  "/workers/primitivize.js",
  "/workers/sketchify.js",
  "/workers/slice-bitmap.js",
  "/workers/triangulate.js",
  "/workers/vectorize.js",
  "/elements/generators/bx-adduniqueidsgenerator.js",
  "/elements/generators/bx-asciifygenerator.js",
  "/elements/generators/bx-barcodegenerator.js",
  "/elements/generators/bx-firegenerator.js",
  "/elements/generators/bx-jigsawpuzzlegenerator.js",
  "/elements/generators/bx-parliamentchartgenerator.js",
  "/elements/generators/bx-pixelategenerator.js",
  "/elements/generators/bx-primitivizegenerator.js",
  "/elements/generators/bx-printingmarksgenerator.js",
  "/elements/generators/bx-qrcodegenerator.js",
  "/elements/generators/bx-rasterizegenerator.js",
  "/elements/generators/bx-resizeviewgenerator.js",
  "/elements/generators/bx-sketchifygenerator.js",
  "/elements/generators/bx-triangulatedsurfacegenerator.js",
  "/elements/generators/bx-triangulategenerator.js",
  "/elements/generators/bx-vectorizegenerator.js",
  "/libs/bar-code/bar-code.js",
  "/libs/cantarell/cantarell.woff2",
  "/libs/change-dpi/change-dpi.js",
  "/libs/chroma/chroma.js",
  "/libs/code-mirror/code-mirror-tiny.js",
  "/libs/code-mirror/code-mirror.js",
  "/libs/color/color.js",
  "/libs/css-parser/css-parser.js",
  "/libs/dagre/dagre.js",
  "/libs/delaunator/delaunator.js",
  "/libs/dexie/dexie.js",
  "/libs/dom-purify/dom-purify.js",
  "/libs/firebase/firebase.js",
  "/libs/font-kit/font-kit.js",
  "/libs/gif/gif.js",
  "/libs/gif/gif.worker.js",
  "/libs/image-tracer/image-tracer.js",
  "/libs/pako/pako.js",
  "/libs/paper/paper.js",
  "/libs/path-data-polyfill/path-data-polyfill.js",
  "/libs/pdf/fonts/FoxitDingbats.pfb",
  "/libs/pdf/fonts/FoxitFixed.pfb",
  "/libs/pdf/fonts/FoxitFixedBold.pfb",
  "/libs/pdf/fonts/FoxitFixedBoldItalic.pfb",
  "/libs/pdf/fonts/FoxitFixedItalic.pfb",
  "/libs/pdf/fonts/FoxitSerif.pfb",
  "/libs/pdf/fonts/FoxitSerifBold.pfb",
  "/libs/pdf/fonts/FoxitSerifBoldItalic.pfb",
  "/libs/pdf/fonts/FoxitSerifItalic.pfb",
  "/libs/pdf/fonts/FoxitSymbol.pfb",
  "/libs/pdf/fonts/LICENSE_FOXIT",
  "/libs/pdf/fonts/LICENSE_LIBERATION",
  "/libs/pdf/fonts/LiberationSans-Bold.ttf",
  "/libs/pdf/fonts/LiberationSans-BoldItalic.ttf",
  "/libs/pdf/fonts/LiberationSans-Italic.ttf",
  "/libs/pdf/fonts/LiberationSans-Regular.ttf",
  "/libs/pdf/pdf.js",
  "/libs/pdf/pdf.worker.js",
  "/libs/preact/preact.js",
  "/libs/prose-mirror/prose-mirror.css",
  "/libs/prose-mirror/prose-mirror.js",
  "/libs/qr-code/qr-code.js",
  "/libs/rgb-quant/rgb-quant.js",
  "/libs/rough/rough.js",
  "/libs/seed-random/seed-random.js",
  "/libs/typesense/typesense.js",
  "/libs/upng/upng.js",
  "/libs/xel/themes/adwaita-dark.css",
  "/libs/xel/themes/adwaita.css",
  "/libs/xel/themes/cupertino-dark.css",
  "/libs/xel/themes/cupertino.css",
  "/libs/xel/themes/fluent-dark.css",
  "/libs/xel/themes/fluent.css",
  "/libs/xel/xel.js",
  "/locales/de.ftl",
  "/locales/en.ftl",
  "/locales/es.ftl",
  "/locales/pl.ftl",
];
const s = [
  "https://cdn.paddle.com/paddle/paddle.js",
  "https://storage.boxy-svg.com/artworks/-MBUGsEWFPUYxQC0U5rC.svg",
];
const a = "4.23.4";
let t = new BroadcastChannel("ServiceWorkerBridge");
globalThis.addEventListener("install", (d) => {
  d.waitUntil(
    new Promise(async (f) => {
      let g = await caches.open(a);
      let h = e.map(
        (j) =>
          new Request(j, {
            cache: "no-cache",
          })
      );
      await g.addAll(h);
      for (let j of s) {
        let k = new Request(j, {
          mode: "no-cors",
        });
        let l = await fetch(k);
        await g.put(k, l);
      }
      f();
    })
  );
});
globalThis.addEventListener("activate", (d) => {
  d.waitUntil(
    new Promise(async (f) => {
      let g = await caches.keys();
      for (let h of g) {
        if (h !== a) {
          await caches.delete(h);
        }
      }
      f();
    })
  );
});
globalThis.addEventListener("fetch", (d) => {
  if (d.request.url === location.origin + "/app/serviceWorkerVersion") {
    d.respondWith(
      new Response(a, {
        headers: {
          "content-type": "text/plain",
        },
      })
    );
  } else if (d.request.url.startsWith(location.origin + "/app/")) {
    d.respondWith(
      caches
        .match(location.origin + "/app")
        .then((f) => f || fetch(location.origin + "/app"))
    );
  } else if (d.request.url.startsWith(location.origin + "/")) {
    d.respondWith(caches.match(d.request).then((f) => f || fetch(d.request)));
  }
});
t.addEventListener("message", async (d) => {
  if (d.data && d.data.name === "getAppWindows") {
    let f = await globalThis.clients.matchAll({
      type: "window",
    });
    let g = [];
    for (let h of f) {
      g.push({
        id: h.id,
        url: h.url,
        focused: h.focused,
        hidden: h.visibilityState === "hidden",
      });
    }
    t.postMessage({
      id: d.data.id,
      arg: g,
    });
  }
});
