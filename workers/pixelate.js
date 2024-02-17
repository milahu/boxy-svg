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
  let { width: v, height: w } = k;
  let {
    columns: z,
    rows: A,
    pixelShape: B,
    pixelSize: C,
    renderAs: D,
    geometryPrecision: E,
  } = m;
  let F = v / z;
  let G = w / A;
  let H = '<svg viewBox="0 0 ' + v + " " + w + '">';
  if (B === "rectangle") {
    for (let I = 0; I < z; I += 1) {
      for (let J = 0; J < A; J += 1) {
        let K = I * F;
        let L = J * G;
        let M = i((K + F / 2) / v, (L + G / 2) / w, k, q);
        if (M !== "rgba(0,0,0,0)") {
          let N = F * C;
          let O = G * C;
          let P = K + F / 2 - N / 2;
          let Q = L + G / 2 - O / 2;
          if (D === "shapes") {
            let R = {
              x: l(P, E),
              y: l(Q, E),
              width: l(N, E),
              height: l(O, E),
              style: "fill: " + M + ";",
            };
            H +=
              "<rect " +
              Object.entries(R)
                .map(([S, T]) => S + '="' + T + '"')
                .join(" ") +
              "></rect>";
          } else if (D === "paths") {
            let S = {
              d: [
                ["M", l(P, E), l(Q, E)],
                ["H", l(P + N, E)],
                ["V", l(Q + O, E)],
                ["H", l(P, E)],
                ["V", l(Q, E)],
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
  } else if (B === "ellipse") {
    for (let T = 0; T < z; T += 1) {
      for (let U = 0; U < A; U += 1) {
        let V = T * F + F / 2;
        let W = U * G + G / 2;
        let X = (F / 2) * C;
        let Y = (G / 2) * C;
        let Z = i(V / v, W / w, k, q);
        if (Z !== "rgba(0,0,0,0)") {
          V = l(V, E);
          W = l(W, E);
          X = l(X, E);
          Y = l(Y, E);
          if (D === "shapes") {
            let a0 = {
              cx: l(V, E),
              cy: l(W, E),
              rx: l(X, E),
              ry: l(Y, E),
              style: "fill: " + Z + ";",
            };
            H +=
              "<ellipse " +
              Object.entries(a0)
                .map(([a1, a2]) => a1 + '="' + a2 + '"')
                .join(" ") +
              "></ellipse>";
          } else if (D === "paths") {
            let a1 = E;
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
