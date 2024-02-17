let e = {
  columns: 20,
  rows: 20,
  pixelShape: "rectangle",
  pixelSize: 0.9,
  renderAs: "paths",
  geometryPrecision: 3,
};
globalThis.addEventListener("message", (j) => {
  let [k, m] = j.data;
  m = t(e, m);
  let q = r(k);
  let { width, height } = k;
  let { columns, rows, pixelShape, pixelSize, renderAs, geometryPrecision } = m;
  let F = width / columns;
  let G = height / rows;
  let H = '<svg viewBox="0 0 ' + width + " " + height + '">';
  if (pixelShape === "rectangle") {
    for (let I = 0; I < columns; I += 1) {
      for (let J = 0; J < rows; J += 1) {
        let K = I * F;
        let L = J * G;
        let M = i((K + F / 2) / width, (L + G / 2) / height, k, q);
        if (M !== "rgba(0,0,0,0)") {
          let N = F * pixelSize;
          let O = G * pixelSize;
          let P = K + F / 2 - N / 2;
          let Q = L + G / 2 - O / 2;
          if (renderAs === "shapes") {
            let R = {
              x: l(P, geometryPrecision),
              y: l(Q, geometryPrecision),
              width: l(N, geometryPrecision),
              height: l(O, geometryPrecision),
              style: "fill: " + M + ";",
            };
            H +=
              "<rect " +
              Object.entries(R)
                .map(([S, T]) => S + '="' + T + '"')
                .join(" ") +
              "></rect>";
          } else if (renderAs === "paths") {
            let S = {
              d: [
                ["M", l(P, geometryPrecision), l(Q, geometryPrecision)],
                ["H", l(P + N, geometryPrecision)],
                ["V", l(Q + O, geometryPrecision)],
                ["H", l(P, geometryPrecision)],
                ["V", l(Q, geometryPrecision)],
                ["Z"],
              ]
                .map((T) => T.join(" "))
                .join(" "),
              style: "fill: " + M + ";",
            };
            H +=
              "<path " +
              Object.entries(S)
                .map(([T, U]) => T + '="' + U + '"')
                .join(" ") +
              "></path>";
          }
        }
      }
    }
  } else if (pixelShape === "ellipse") {
    for (let T = 0; T < columns; T += 1) {
      for (let U = 0; U < rows; U += 1) {
        let V = T * F + F / 2;
        let W = U * G + G / 2;
        let X = (F / 2) * pixelSize;
        let Y = (G / 2) * pixelSize;
        let Z = i(V / width, W / height, k, q);
        if (Z !== "rgba(0,0,0,0)") {
          V = l(V, geometryPrecision);
          W = l(W, geometryPrecision);
          X = l(X, geometryPrecision);
          Y = l(Y, geometryPrecision);
          if (renderAs === "shapes") {
            let a0 = {
              cx: l(V, geometryPrecision),
              cy: l(W, geometryPrecision),
              rx: l(X, geometryPrecision),
              ry: l(Y, geometryPrecision),
              style: "fill: " + Z + ";",
            };
            H +=
              "<ellipse " +
              Object.entries(a0)
                .map(([a1, a2]) => a1 + '="' + a2 + '"')
                .join(" ") +
              "></ellipse>";
          } else if (renderAs === "paths") {
            let a1 = geometryPrecision;
            let a2 = {
              d: [
                ["M", l(V - X, a1), l(W, a1)],
                ["a", l(X, a1), l(Y, a1), 0, 1, 0, l(X * 2, a1), 0],
                ["a", l(X, a1), l(Y, a1), 0, 1, 0, l(X * -2, a1), 0],
                ["Z"],
              ]
                .map((a3) => a3.join(" "))
                .join(" "),
              style: "fill: " + Z + ";",
            };
            H +=
              "<path " +
              Object.entries(a2)
                .map(([a3, a4]) => a3 + '="' + a4 + '"')
                .join(" ") +
              "></path>";
          }
        }
      }
    }
  }
  H += "</svg>";
  globalThis.postMessage(H);
});
let t = (c, d) => {
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
let r = (c) => {
  let d = new OffscreenCanvas(c.width, c.height).getContext("2d");
  d.drawImage(c, 0, 0);
  let f = d.getImageData(0, 0, c.width, c.height);
  let g = [];
  for (let h = 0; h < f.data.length; h += 4) {
    g.push([f.data[h], f.data[h + 1], f.data[h + 2], f.data[h + 3]]);
  }
  return g;
};
let i = (c, d, f, g) => {
  let h = g[Math.round(c * f.width) + Math.round(d * f.height) * f.width];
  let j = "rgba(0,0,0,0)";
  if (h) {
    j = s(...h);
  }
  return j;
};
let s = (c, d, f, g) => {
  let h = (j) => {
    let k = j.toString(16);
    if (k.length == 1) {
      return "0" + k;
    } else {
      return k;
    }
  };
  if (g === 255) {
    return "#" + h(c) + h(d) + h(f);
  } else if (g === 0) {
    return "rgba(0,0,0,0)";
  } else {
    return "rgba(" + c + "," + d + "," + f + "," + (g = l(g / 255, 2)) + ")";
  }
};
