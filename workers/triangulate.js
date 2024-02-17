let e;
let t;
let l = {
  seed: 100,
  cellSize: 0.1,
  variance: 0.75,
  renderAs: "paths",
  geometryPrecision: 3,
};
globalThis.addEventListener("message", async (j) => {
  if (!e && !t) {
    e = (await import("/libs/delaunator/delaunator.js")).default;
    t = (await import("/libs/seed-random/seed-random.js")).default;
  }
  let [k, q] = j.data;
  q = r(l, q);
  let v = a(k);
  let { width: w, height: x } = k;
  let { variance: z, seed: A, renderAs: B } = q;
  let C = q.cellSize * Math.min(w, x);
  if (C < w * 0.02) {
    C = n(w * 0.02);
  }
  let D = [];
  let E = "";
  {
    let F = (Math.floor((w + C * 4) / C) * C - w) / 2;
    let G = (Math.floor((x + C * 4) / C) * C - x) / 2;
    let H = (C * z) / 2;
    let I = new t(A);
    for (let J = -F; J < w + F; J += C) {
      for (let K = -G; K < x + G; K += C) {
        let L = J + C * 0.5 + (I() * H * 2 - H);
        let N = K + C * 0.5 + (I() * H * 2 - H);
        D.push([Math.floor(L), Math.floor(N)]);
      }
    }
  }
  {
    let O = e.from(D).triangles;
    E =
      '<svg viewBox="0 0 ' +
      w +
      " " +
      x +
      '" style="shape-rendering: crispedges;">';
    for (let P = 0; P < O.length; P += 3) {
      let Q = [O[P], O[P + 1], O[P + 2]].map((T) => D[T]);
      let R = s(Q);
      let S = o(R.x, R.y, k, v);
      if (S !== "rgba(0,0,0,0)") {
        let T = f([0, 0, k.width, k.height], Q);
        if (T.length > 0) {
          for (let U of T) {
            U[0] = n(U[0], q.geometryPrecision);
            U[1] = n(U[1], q.geometryPrecision);
          }
          if (B === "paths") {
            let [V, ...W] = T;
            let X = "M " + V[0] + " " + V[1];
            for (let Y of W) {
              X += " L " + Y[0] + " " + Y[1];
            }
            X += " Z";
            E += '<path d="' + X + '" style="fill: ' + S + ';"></path>';
          } else if (B === "polygons") {
            E +=
              '<polygon points="' +
              T.map((Z) => Z[0] + " " + Z[1]).join(" ") +
              '" style="fill: ' +
              S +
              ';"></polygon>';
          }
        }
      }
    }
    E += "</svg>";
  }
  globalThis.postMessage(E);
});
let r = (d, g) => {
  let h = {};
  for (let [j, k] of Object.entries(d)) {
    h[j] = g[j] !== undefined ? g[j] : d[j];
  }
  return h;
};
let a = (d) => {
  let g = new OffscreenCanvas(d.width, d.height).getContext("2d");
  g.drawImage(d, 0, 0);
  let h = g.getImageData(0, 0, d.width, d.height);
  let j = [];
  for (let k = 0; k < h.data.length; k += 4) {
    j.push([h.data[k], h.data[k + 1], h.data[k + 2], h.data[k + 3]]);
  }
  return j;
};
let o = (d, g, h, j) => {
  d = Math.round(d);
  g = Math.round(g);
  {
    let p = 1;
    if (d < 0) {
      d = p;
    } else if (d >= h.width) {
      d = h.width - p;
    }
    if (g < 0) {
      g = p;
    } else if (g >= h.height) {
      g = h.height - p;
    }
  }
  let k = j[d + g * h.width];
  let m = "rgba(0,0,0,0)";
  if (k) {
    m = i(...k);
  }
  return m;
};
let s = (d) => ({
  x: (d[0][0] + d[1][0] + d[2][0]) / 3,
  y: (d[0][1] + d[1][1] + d[2][1]) / 3,
});
let n = (d, g = 0) => {
  let h = Math.pow(10, g);
  return Math.round((d + Number.EPSILON) * h) / h;
};
let i = (d, g, h, j) => {
  let k = (m) => {
    let p = m.toString(16);
    if (p.length == 1) {
      return "0" + p;
    } else {
      return p;
    }
  };
  if (j === 255) {
    return "#" + k(d) + k(g) + k(h);
  } else if (j === 0) {
    return "rgba(0,0,0,0)";
  } else {
    return "rgba(" + d + "," + g + "," + h + "," + (j = n(j / 255, 2)) + ")";
  }
};
let f = (d, g) => {
  let j;
  let k = (p, q, u, v) =>
    u & 8
      ? [p[0] + ((q[0] - p[0]) * (v[3] - p[1])) / (q[1] - p[1]), v[3]]
      : u & 4
      ? [p[0] + ((q[0] - p[0]) * (v[1] - p[1])) / (q[1] - p[1]), v[1]]
      : u & 2
      ? [v[2], p[1] + ((q[1] - p[1]) * (v[2] - p[0])) / (q[0] - p[0])]
      : u & 1
      ? [v[0], p[1] + ((q[1] - p[1]) * (v[0] - p[0])) / (q[0] - p[0])]
      : null;
  let m = (p, q) => {
    let u = 0;
    if (p[0] < q[0]) {
      u |= 1;
    } else if (p[0] > q[2]) {
      u |= 2;
    }
    if (p[1] < q[1]) {
      u |= 4;
    } else if (p[1] > q[3]) {
      u |= 8;
    }
    return u;
  };
  for (let p = 1; p <= 8; p *= 2) {
    let q = g[g.length - 1];
    let u = !(m(q, d) & p);
    j = [];
    for (let v = 0; v < g.length; v++) {
      let w = g[v];
      let x = !(m(w, d) & p);
      if (x !== u) {
        j.push(k(q, w, p, d));
      }
      if (x) {
        j.push(w);
      }
      q = w;
      u = x;
    }
    if (!(g = j).length) {
      break;
    }
  }
  return j;
};
