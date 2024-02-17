let e = {
  columns: 20,
  rows: 20,
  chars: "·*+=$@#",
  charColorSource: "custom",
  charCustomColor: "#ffffff",
  charBackgroundColorSource: "sample",
  charCustomBackgroundColor: "#000000",
  fontSize: 1,
  geometryPrecision: 3,
};
globalThis.addEventListener("message", (j) => {
  let [k, q] = j.data;
  q = t(e, q);
  let v = r(k);
  let { width, height } = k;
  let A = width / q.columns;
  let B = height / q.rows;
  let D = B * q.fontSize;
  let E = '<svg viewBox="0 0 ' + width + " " + height + '">';
  for (let F = 0; F < q.rows; F += 1) {
    let G = F * B;
    let H = G + B / 2;
    for (let I = 0; I < q.columns; I += 1) {
      let J = I * A;
      let K = J + A / 2;
      let [L, M, N, O] = o(K / width, H / height, k, v);
      if (O > 0) {
        let P = a(L, M, N, O);
        let Q =
          q.charBackgroundColorSource === "sample"
            ? P
            : q.charCustomBackgroundColor;
        E +=
          "<rect " +
          s({
            x: l(J, q.geometryPrecision),
            y: l(G, q.geometryPrecision),
            width: l(A, q.geometryPrecision),
            height: l(B, q.geometryPrecision),
            style: "fill: " + Q + ";",
          }) +
          "></rect>";
      }
    }
  }
  for (let R = 0; R < q.rows; R += 1) {
    let S = R * B;
    let T = S + B / 2;
    E +=
      "<text " +
      s({
        y: l(S + B / 2, q.geometryPrecision),
        style:
          "white-space: pre; text-anchor: middle; dominant-baseline: central; font-family: monospace; font-size: " +
          D +
          "px;",
      }) +
      ">";
    for (let U = 0; U < q.columns; U += 1) {
      let V = U * A;
      let W = V + A / 2;
      let [X, Y, Z, a0] = o(W / width, T / height, k, v);
      let a1 = (X + Y + Z) * (a0 / 255);
      let a2 = 765 / (q.chars.length - 1);
      let a3 = q.chars[Math.round(a1 / a2)];
      if (a0 > 0) {
        let a4 = a(X, Y, Z, a0);
        let a5 = q.charColorSource === "sample" ? a4 : q.charCustomColor;
        E +=
          "<tspan " +
          s({
            x: l(V + A / 2, q.geometryPrecision),
            style: "fill: " + a5 + ";",
          }) +
          ">" +
          a3 +
          "</tspan>";
      }
    }
    E += "</text>";
  }
  E += "</svg>";
  globalThis.postMessage(E);
});
let t = (d, f) => {
  let g = {};
  for (let [h, i] of Object.entries(d)) {
    g[h] = f[h] !== undefined ? f[h] : d[h];
  }
  return g;
};
let l = (d, f = 0) => {
  let g = Math.pow(10, f);
  return Math.round((d + Number.EPSILON) * g) / g;
};
let r = (d) => {
  let f = new OffscreenCanvas(d.width, d.height).getContext("2d");
  f.drawImage(d, 0, 0);
  let g = f.getImageData(0, 0, d.width, d.height);
  let h = [];
  for (let i = 0; i < g.data.length; i += 4) {
    h.push([g.data[i], g.data[i + 1], g.data[i + 2], g.data[i + 3]]);
  }
  return h;
};
let o = (d, f, g, h) =>
  h[Math.round(d * g.width) + Math.round(f * g.height) * g.width] || [
    0, 0, 0, 0,
  ];
let a = (d, f, g, h) => {
  let i = (j) => {
    let k = j.toString(16);
    if (k.length == 1) {
      return "0" + k;
    } else {
      return k;
    }
  };
  if (h === 255) {
    return "#" + i(d) + i(f) + i(g);
  } else if (h === 0) {
    return "rgba(0,0,0,0)";
  } else {
    return "rgba(" + d + "," + f + "," + g + "," + (h = l(h / 255, 2)) + ")";
  }
};
let s = (d) =>
  Object.entries(d)
    .map(([f, g]) => f + '="' + g + '"')
    .join(" ");
