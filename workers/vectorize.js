let e;
let t;
let r = {
  workingSize: 512,
  blurRadius: 0,
  blurDelta: 20,
  numberOfColors: 16,
  minColorRatio: 0,
  colorQuantCycles: 3,
  colorSampling: 2,
  ltres: 1,
  qtres: 1,
  pathOmit: 8,
  rightAngleEnhance: true,
  strokeWidth: 1,
  lineFilter: true,
  ignoreWhite: false,
  geometryPrecision: 3,
};
globalThis.addEventListener("message", async (d) => {
  if (!e && !t) {
    e = (await import("../libs/image-tracer/image-tracer.js")).default;
    t = (await import("../libs/color/color.js")).default;
  }
  let [j, k] = d.data;
  k = l(r, k);
  let p = Math.max(j.width / k.workingSize, j.height / k.workingSize, 1);
  let q = j.width / p;
  let u = j.height / p;
  let v = new OffscreenCanvas(q, u).getContext("2d");
  v.beginPath();
  v.rect(0, 0, q, u);
  v.fillStyle = "white";
  v.fill();
  v.drawImage(j, 0, 0, q, u);
  let w = v.getImageData(0, 0, q, u);
  let x = e.imagedataToTracedata(w, {
    blurradius: k.blurRadius,
    blurdelta: k.blurDelta,
    numberofcolors: k.numberOfColors,
    mincolorratio: k.minColorRatio,
    colorquantcycles: k.colorQuantCycles,
    colorsampling: k.colorSampling,
    ltres: k.ltres,
    qtres: k.qtres,
    pathomit: k.pathOmit,
    rightangleenhance: k.rightAngleEnhance,
  });
  let y = i(x, p, k);
  globalThis.postMessage(y);
});
let l = (d, f) => {
  let g = {};
  for (let [h, j] of Object.entries(d)) {
    g[h] = f[h] !== undefined ? f[h] : d[h];
  }
  return g;
};
let o = (d, f = 0) => {
  let g = Math.pow(10, f);
  return Math.round((d + Number.EPSILON) * g) / g;
};
let i = (d, f, g) => {
  let h =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' +
    o(d.width * f, g.geometryPrecision) +
    " " +
    o(d.height * f, g.geometryPrecision) +
    '">';
  if (g.ignoreWhite === true) {
    for (let j = 0; j < d.palette.length; j += 1) {
      if (d.palette[j].r + d.palette[j].g + d.palette[j].b >= 600) {
        d.palette[j].r = 0;
        d.palette[j].g = 0;
        d.palette[j].b = 0;
        d.palette[j].a = 0;
      }
    }
  }
  for (let k = 0; k < d.layers.length; k += 1) {
    for (let m = 0; m < d.layers[k].length; m += 1) {
      if (!d.layers[k][m].isholepath) {
        h += a(d, k, m, f, g);
      }
    }
  }
  h += "</svg>";
  return h;
};
let a = (d, g, h, j, k) => {
  let m = d.layers[g];
  let p = o(d.palette[g].a / 255, 2);
  let q = m[h];
  let u = "";
  let v = "";
  if (p === 0) {
    return "";
  }
  if (k.lineFilter && q.segments.length < 3) {
    return "";
  }
  {
    let w = d.palette[g];
    let x = new t("srgb", [w.r / 255, w.g / 255, w.b / 255], p).toString({
      format: "hex",
    });
    let y = [];
    y.push("fill: " + x + ";");
    if (k.strokeWidth > 0) {
      y.push("stroke: " + x + ";");
      if (k.strokeWidth !== 1) {
        y.push("stroke-width: " + k.strokeWidth + "px;");
      }
    }
    u = 'style="' + y.join(" ") + '"';
  }
  v += 'd="';
  v +=
    "M " +
    o(q.segments[0].x1 * j, k.geometryPrecision) +
    " " +
    o(q.segments[0].y1 * j, k.geometryPrecision) +
    " ";
  for (let z = 0; z < q.segments.length; z += 1) {
    v +=
      q.segments[z].type +
      " " +
      o(q.segments[z].x2 * j, k.geometryPrecision) +
      " " +
      o(q.segments[z].y2 * j, k.geometryPrecision) +
      " ";
    if (q.segments[z].hasOwnProperty("x3")) {
      v +=
        o(q.segments[z].x3 * j, k.geometryPrecision) +
        " " +
        o(q.segments[z].y3 * j, k.geometryPrecision) +
        " ";
    }
  }
  v += "Z ";
  for (let A = 0; A < q.holechildren.length; A += 1) {
    let B = m[q.holechildren[A]];
    if (B.segments[B.segments.length - 1].hasOwnProperty("x3")) {
      v +=
        "M " +
        o(B.segments[B.segments.length - 1].x3 * j) +
        " " +
        o(B.segments[B.segments.length - 1].y3 * j) +
        " ";
    } else {
      v +=
        "M " +
        o(B.segments[B.segments.length - 1].x2 * j) +
        " " +
        o(B.segments[B.segments.length - 1].y2 * j) +
        " ";
    }
    for (let C = B.segments.length - 1; C >= 0; C -= 1) {
      v += B.segments[C].type + " ";
      if (B.segments[C].hasOwnProperty("x3")) {
        v += o(B.segments[C].x2 * j) + " " + o(B.segments[C].y2 * j) + " ";
      }
      v += o(B.segments[C].x1 * j) + " " + o(B.segments[C].y1 * j) + " ";
    }
    v += "Z ";
  }
  v += '"';
  return "<path " + v + " " + u + "></path>";
};
