let e;
let t = {
  roughness: 1,
  bowing: 1,
  seed: 100,
  geometryPrecision: 3,
  hatchingType: "straight-lines",
  hatchingStroke: "red",
  hatchingThickness: 1,
  hatchingSpacing: 10,
  hatchingAngle: -41,
  hatchingRepeatStrokes: true,
  contourStroke: "black",
  contourThickness: 1,
  contourDasharray: "none",
  contourDashoffset: 0,
  contourRepeatStrokes: true,
};
let o = {
  zigzag: "zigzag",
  grid: "cross-hatch",
  "straight-lines": "hachure",
  "zigzag-lines": "zigzag-line",
  dots: "dots",
  dashes: "dashed",
  solid: "solid",
};
globalThis.addEventListener("message", async (d) => {
  e ||= (await import("/libs/rough/rough.js")).default;
  let f = e.generator();
  let [j, k, m] = d.data;
  k = i(t, k);
  let p = {
    roughness: k.roughness,
    bowing: k.bowing,
    disableMultiStrokeFill: k.hatchingRepeatStrokes === false,
    disableMultiStroke: k.contourRepeatStrokes === false,
    fillStyle: o[k.hatchingType],
    fillWeight: k.hatchingThickness,
    hachureGap: k.hatchingSpacing,
    hachureAngle: k.hatchingAngle,
    simplification: 0.5,
    seed: k.seed === 0 ? 32893 : k.seed,
    fill: k.hatchingStroke,
    stroke: k.contourStroke,
    strokeWidth: k.contourThickness,
  };
  let q = "<g>";
  let v = f.path(j, p);
  for (let w of v.sets) {
    let x = "";
    for (let z of w.ops) {
      let A = z.data.map((B) => l(B, k.geometryPrecision));
      if (z.op === "move") {
        x += "M " + A[0] + " " + A[1] + " ";
      } else if (z.op === "lineTo") {
        x += "L " + A[0] + " " + A[1] + " ";
      } else if (z.op === "bcurveTo") {
        x +=
          "C " +
          A[0] +
          " " +
          A[1] +
          " " +
          A[2] +
          " " +
          A[3] +
          " " +
          A[4] +
          " " +
          A[5] +
          " ";
      }
    }
    let y = {};
    if (w.type === "fillSketch") {
      y.fill = "none";
      y.stroke = k.hatchingStroke;
      y["stroke-width"] = k.hatchingThickness + "px";
    } else if (w.type === "fillPath") {
      y.fill = k.hatchingStroke;
    } else if (w.type === "path") {
      y.fill = "none";
      y.stroke = k.contourStroke;
      y["stroke-width"] = k.contourThickness + "px";
      if (k.contourDasharray !== "none") {
        y["stroke-dasharray"] = k.contourDasharray;
      }
      if (k.contourDashoffset !== 0) {
        y["stroke-dashoffset"] = k.contourDashoffset + "px";
      }
    }
    q +=
      '<path d="' +
      x +
      "\" style='" +
      Object.entries(y)
        .map(([B, C]) => B + ": " + C)
        .join("; ") +
      ";'></path>";
  }
  q += "</g>";
  globalThis.postMessage([q, m]);
});
let i = (c, d) => {
  let f = {};
  for (let [g, h] of Object.entries(c)) {
    f[g] = d[g] !== undefined ? d[g] : c[g];
  }
  return f;
};
let l = (c, d = 0) => {
  let f = Math.pow(10, d);
  return Math.round((c + Number.EPSILON) * f) / f;
};
