let t;
let e = {
  shapesType: ["triangles"],
  shapesNumber: 40,
  shapesAlpha: 0.7,
  autoAdjustShapesAlpha: true,
  workingSize: 128,
  backgroundColor: "#ffffff",
  shapesPerIteration: 100,
  maxMutations: 16,
  seed: 100,
  drawAs: "paths",
  geometryPrecision: 3,
  transformPrecision: 6,
};
let s = null;
globalThis.addEventListener("message", async (k) => {
  t ||= (await import("/libs/seed-random/seed-random.js")).default;
  let [q, v] = k.data;
  v = i(e, v);
  s = new f(q, v, t);
  let { geometryPrecision, transformPrecision } = v;
  globalThis.postMessage([
    0,
    '<svg viewBox="0 0 ' + q.width + " " + q.height + '">',
  ]);
  s.onStep = (z) => {
    let A = s.getProgress();
    let B =
      'style="fill: ' + h(z.color[0], z.color[1], z.color[2], z.alpha) + ';"';
    let C = "";
    if (z.shape instanceof w) {
      let D = z.shape.points.map(
        ([G, H]) => new DOMPoint(G * s.scale, H * s.scale)
      );
      let [E, ...F] = D;
      C +=
        "<path " +
        ('d="M ' +
          E.x +
          " " +
          E.y +
          " " +
          F.map(({ x: G, y: H }) => "L " + G + " " + H).join(" ") +
          ' Z"') +
        " " +
        B +
        "></path>";
    } else if (z.shape instanceof m) {
      let G = z.shape.bbox.left * s.scale;
      let H = z.shape.bbox.top * s.scale;
      let I = z.shape.bbox.width * s.scale;
      let J = z.shape.bbox.height * s.scale;
      let K = null;
      if (z.shape.angle !== 0) {
        let L = new DOMPoint(G + I / 2, H + J / 2);
        K = new DOMMatrix();
        K.translateSelf(L.x, L.y);
        K.rotateSelf(a(z.shape.angle));
        K.translateSelf(-L.x, -L.y);
      }
      if (v.drawAs === "shapes") {
        G = n(G, geometryPrecision);
        H = n(H, geometryPrecision);
        I = n(I, geometryPrecision);
        J = n(J, geometryPrecision);
        let N = "";
        if (K) {
          N = 'transform="' + r(l(K, transformPrecision)) + '"';
        }
        C =
          '<rect x="' +
          G +
          '" y="' +
          H +
          '" width="' +
          I +
          '" height="' +
          J +
          '" ' +
          N +
          " " +
          B +
          "></rect>";
      } else if (v.drawAs === "paths") {
        let O =
          'd="' +
          [["M", G, H], ["H", G + I], ["V", H + J], ["H", G], ["V", H], ["Z"]]
            .map((Q) => Q.join(" "))
            .join(" ") +
          '"';
        let P = "";
        if (K) {
          P = 'transform="' + r(l(K, transformPrecision)) + '"';
        }
        C += "<path " + O + " " + P + " " + B + "></path>";
      }
    } else if (z.shape instanceof d) {
      let Q = z.shape.bbox.left * s.scale;
      let R = z.shape.bbox.top * s.scale;
      let S = z.shape.bbox.width * s.scale;
      let T = z.shape.bbox.height * s.scale;
      let U = null;
      if (z.shape.angle !== 0) {
        let a0 = new DOMPoint(Q + S / 2, R + T / 2);
        U = new DOMMatrix();
        U.translateSelf(a0.x, a0.y);
        U.rotateSelf(a(z.shape.angle));
        U.translateSelf(-a0.x, -a0.y);
      }
      let V = n(Q + S / 2, geometryPrecision);
      let W = n(R + T / 2, geometryPrecision);
      let X = n(S / 2, geometryPrecision);
      let Y = n(T / 2, geometryPrecision);
      let Z = "";
      if (U) {
        Z = 'transform="' + r(l(U, transformPrecision)) + '"';
      }
      if (v.drawAs === "shapes") {
        C =
          '<ellipse cx="' +
          V +
          '" cy="' +
          W +
          '" rx="' +
          X +
          '" ry="' +
          Y +
          '" ' +
          Z +
          " " +
          B +
          "></ellipse>";
      } else if (v.drawAs === "paths") {
        C =
          '<path d="' +
          [
            {
              type: "M",
              values: [V + X, W],
            },
            {
              type: "A",
              values: [X, Y, 0, 0, 1, V, W + Y],
            },
            {
              type: "A",
              values: [X, Y, 0, 0, 1, V - X, W],
            },
            {
              type: "A",
              values: [X, Y, 0, 0, 1, V, W - Y],
            },
            {
              type: "A",
              values: [X, Y, 0, 0, 1, V + X, W],
            },
            {
              type: "Z",
              values: [],
            },
          ]
            .map((a1) => a1.type + " " + a1.values.join(" "))
            .join(" ") +
          '" ' +
          Z +
          " " +
          B +
          "></path>";
      }
    }
    globalThis.postMessage([A, C]);
  };
  s.onEnd = (z) => {
    globalThis.postMessage([1, "</svg>"]);
  };
  s.start();
});
let i = (k, q) => {
  let v = {};
  for (let [x, y] of Object.entries(k)) {
    v[x] = q[x] !== undefined ? q[x] : k[x];
  }
  return v;
};
let h = (k, q, v, x) => {
  let y = (z) => {
    let A = z.toString(16);
    if (A.length == 1) {
      return "0" + A;
    } else {
      return A;
    }
  };
  if (x === 1) {
    return "#" + y(k) + y(q) + y(v);
  } else {
    return "rgba(" + k + "," + q + "," + v + "," + (x = n(x, 2)) + ")";
  }
};
let r = (k) =>
  "matrix(" +
  k.a +
  ", " +
  k.b +
  ", " +
  k.c +
  ", " +
  k.d +
  ", " +
  k.e +
  ", " +
  k.f +
  ")";
let a = (k) => k * (180 / Math.PI);
let n = (k, q = 0) => {
  let v = Math.pow(10, q);
  return Math.round((k + Number.EPSILON) * v) / v;
};
let l = (k, q) =>
  k.is2D
    ? new DOMMatrix([
        n(k.a, q),
        n(k.b, q),
        n(k.c, q),
        n(k.d, q),
        n(k.e, q),
        n(k.f, q),
      ])
    : new DOMMatrix([
        n(k.m11, q),
        n(k.m12, q),
        n(k.m13, q),
        n(k.m14, q),
        n(k.m21, q),
        n(k.m22, q),
        n(k.m23, q),
        n(k.m24, q),
        n(k.m31, q),
        n(k.m32, q),
        n(k.m33, q),
        n(k.m34, q),
        n(k.m41, q),
        n(k.m42, q),
        n(k.m43, q),
        n(k.m44, q),
      ]);
let o = (k, q, v) => Math.max(q, Math.min(v, k));
let u = (k, q) => Math.sqrt(k / (q * 3)) / 255;
let c = (...k) => {
  let q = k.reduce((v, x) => [v[0] + x[0], v[1] + x[1]]);
  return [q[0] / k.length, q[1] / k.length];
};
class f {
  #t = 0;
  #e = 0;
  #s = 0;
  #i;
  get width() {
    return this.#t;
  }
  get height() {
    return this.#e;
  }
  constructor(k, q, v) {
    let x = Math.max(k.width / q.workingSize, k.height / q.workingSize, 1);
    let y = k.width / x;
    let z = k.height / x;
    let A = new p(y, z, q.backgroundColor);
    A.context.drawImage(k, 0, 0, y, z);
    this.options = q;
    this.scale = x;
    this.getRandomNumber = new v(q.seed);
    this.onStep = () => {};
    this.onEnd = () => {};
    this.#t = A.width;
    this.#e = A.height;
    this.#i = new M(A, new p(this.#t, this.#e, q.backgroundColor));
  }
  getProgress() {
    return n(this.#s / this.options.shapesNumber, 2);
  }
  getRandomNumber() {}
  getRandomPoint(k, q) {
    return [~~(this.getRandomNumber() * k), ~~(this.getRandomNumber() * q)];
  }
  start() {
    this.#h();
  }
  async #h() {
    let k = await this.#r();
    k = await this.#a(k);
    this.#s += 1;
    if (k.distance < this.#i.distance) {
      this.#i = k.apply(this.#i);
      this.onStep(k);
    }
    this.#n();
  }
  #n() {
    if (this.#s < this.options.shapesNumber) {
      setTimeout(() => this.#h(), 10);
    } else {
      this.onEnd(this.#i);
    }
  }
  #r() {
    let k = this.options.shapesPerIteration;
    let q = null;
    let v = [];
    for (let x = 0; x < k; x += 1) {
      let y;
      let z = Math.floor(
        this.getRandomNumber() * this.options.shapesType.length
      );
      let A = this.options.shapesType[z];
      if (A === "triangles") {
        y = w;
      } else if (A === "rectangles") {
        y = m;
      } else if (A === "ellipses") {
        y = d;
      }
      let B = new y(this);
      B.init();
      let C = new $(B, this).compute(this.#i).then((D) => {
        if (!q || D.distance < q.distance) {
          q = D;
        }
      });
      v.push(C);
    }
    return Promise.all(v).then(() => q);
  }
  #a(k) {
    let q = this.options.maxMutations;
    let v = 0;
    let x = null;
    let y = k;
    let z = new Promise((B) => (x = B));
    let A = () => {
      if (v >= q) {
        return x(y);
      }
      y.mutate()
        .compute(this.#i)
        .then((B) => {
          if (B.distance < y.distance) {
            v = 0;
            y = B;
          } else {
            v += 1;
          }
          A();
        });
    };
    A();
    return z;
  }
}
class p extends OffscreenCanvas {
  #l = null;
  constructor(k, q, v) {
    super(k, q);
    this.context = this.getContext("2d");
    if (v) {
      this.context.fillStyle = v;
      this.context.fillRect(0, 0, k, q);
    }
  }
  drawStep(k) {
    this.context.globalAlpha = k.alpha;
    this.context.fillStyle =
      "rgb(" + k.color[0] + ", " + k.color[1] + ", " + k.color[2] + ")";
    this.context.strokeStyle =
      "rgb(" + k.color[0] + ", " + k.color[1] + ", " + k.color[2] + ")";
    k.shape.render(this.context);
  }
  getImageData() {
    this.#l ||= this.context.getImageData(0, 0, this.width, this.height);
    return this.#l;
  }
  getDifference(k) {
    let q = this.getImageData();
    let v = k.getImageData();
    let x = 0;
    for (let y = 0; y < q.data.length; y += 1) {
      if (y % 4 != 3) {
        let z = v.data[y] - q.data[y];
        x += z * z;
      }
    }
    return x;
  }
  getDistance(k) {
    let q = this.getDifference(k);
    return u(q, this.width * this.height);
  }
  clone() {
    let k = new p(this.width, this.height);
    k.context.drawImage(this, 0, 0);
    return k;
  }
}
class M {
  constructor(k, q, v = Infinity) {
    this.sourceCanvas = k;
    this.destCanvas = q;
    this.distance = v === Infinity ? k.getDistance(q) : v;
  }
}
class $ {
  #o = null;
  shape = null;
  alpha = null;
  color = [0, 0, 0];
  distance = Infinity;
  constructor(k, q) {
    this.#o = q;
    this.shape = k;
    this.alpha = this.#o.options.shapesAlpha;
  }
  apply(k) {
    let q = k.destCanvas.clone();
    q.drawStep(this);
    return new M(k.sourceCanvas, q, this.distance);
  }
  mutate() {
    let k = this.shape.mutate();
    let q = new $(k, this.#o);
    if (this.#o.options.autoAdjustShapesAlpha) {
      let v = this.alpha + (this.#o.getRandomNumber() - 0.5) * 0.08;
      q.alpha = o(v, 0.1, 1);
    }
    return q;
  }
  compute(k) {
    let q = {
      shape: this.shape.rasterize(this.alpha).getImageData(),
      current: k.destCanvas.getImageData(),
      target: k.sourceCanvas.getImageData(),
    };
    let v = k.destCanvas.width * k.destCanvas.height;
    let x = this.shape.bbox;
    let y = this.#u(x, q, this.alpha);
    let z = this.#c(x, q, y);
    let A = ((B, C) => Math.pow(B * 255, 2) * (C * 3))(k.distance, v);
    this.color = [...y];
    this.distance = u(A + z, v);
    return Promise.resolve(this);
  }
  #c(k, q, z) {
    let A;
    let B;
    let C;
    let E;
    let F;
    let G;
    let H;
    let J;
    let K;
    let L;
    let N;
    let Q;
    let R;
    let S;
    let { shape, current, target } = q;
    let W = shape.data;
    let X = current.data;
    let Y = target.data;
    let Z = shape.width;
    let a0 = shape.height;
    let a1 = current.width;
    let a2 = current.height;
    var a3 = 0;
    for (N = 0; N < a0; N += 1) {
      S = N + k.top;
      if (S >= 0 && S < a2) {
        for (L = 0; L < Z; L += 1) {
          R = k.left + L;
          if (R >= 0 && R < a1) {
            K = (L + N * Z) * 4;
            A = W[K + 3];
            if (A !== 0) {
              Q = (R + S * a1) * 4;
              A /= 255;
              B = 1 - A;
              C = Y[Q] - X[Q];
              E = Y[Q + 1] - X[Q + 1];
              F = Y[Q + 2] - X[Q + 2];
              G = Y[Q] - (z[0] * A + X[Q] * B);
              J = Y[Q + 1] - (z[1] * A + X[Q + 1] * B);
              H = Y[Q + 2] - (z[2] * A + X[Q + 2] * B);
              a3 -= C * C + E * E + F * F;
              a3 += G * G + J * J + H * H;
            }
          }
        }
      }
    }
    return a3;
  }
  #u(k, q, v) {
    let x;
    let z;
    let A;
    let B;
    let C;
    let D;
    let { shape, current, target } = q;
    let H = shape.data;
    let I = current.data;
    let J = target.data;
    let K = shape.width;
    let L = shape.height;
    let N = current.width;
    let O = current.height;
    let P = [0, 0, 0];
    let Q = 0;
    for (A = 0; A < L; A += 1) {
      D = A + k.top;
      if (D >= 0 && D < O) {
        for (z = 0; z < K; z += 1) {
          C = k.left + z;
          if (C >= 0 && C < N) {
            x = (z + A * K) * 4;
            if (H[x + 3] !== 0) {
              B = (C + D * N) * 4;
              P[0] += (J[B] - I[B]) / v + I[B];
              P[1] += (J[B + 1] - I[B + 1]) / v + I[B + 1];
              P[2] += (J[B + 2] - I[B + 2]) / v + I[B + 2];
              Q += 1;
            }
          }
        }
      }
    }
    return P.map((R) => ~~(R / Q)).map((R) => o(R, 0, 255));
  }
}
class g {
  points = [];
  bbox = {};
  angle = 0;
  t = null;
  constructor(k) {
    this.t = k;
  }
  init() {
    {
      let k = this.t.getRandomPoint(this.t.width, this.t.height);
      let q = this.t.getRandomPoint(this.t.width, this.t.height);
      let v = Math.min(k[0], q[0]);
      let x = Math.max(k[0], q[0]);
      let y = Math.min(k[1], q[1]);
      let z = Math.max(k[1], q[1]);
      this.points = [
        [v, y],
        [x, y],
        [x, z],
        [v, z],
      ];
    }
    this.computeBBox();
    return this;
  }
  computeBBox() {
    let k = [
      this.points.reduce((v, x) => Math.min(v, x[0]), Infinity),
      this.points.reduce((v, x) => Math.min(v, x[1]), Infinity),
    ];
    let q = [
      this.points.reduce((v, x) => Math.max(v, x[0]), -Infinity),
      this.points.reduce((v, x) => Math.max(v, x[1]), -Infinity),
    ];
    this.bbox = {
      left: k[0],
      top: k[1],
      width: q[0] - k[0] || 1,
      height: q[1] - k[1] || 1,
    };
    return this;
  }
  mutate() {
    let k = new this.constructor(this.t);
    k.points = this.points.map((v) => v.slice());
    let q = ~~((this.t.getRandomNumber() - 0.5) * 20);
    switch (Math.floor(this.t.getRandomNumber() * 8)) {
      case 0:
        k.points[0][0] += q;
        k.points[3][0] += q;
        break;
      case 1:
        k.points[0][1] += q;
        k.points[1][1] += q;
        break;
      case 2:
        k.points[1][0] += q;
        k.points[2][0] += q;
        break;
      case 3:
        k.points[2][1] += q;
        k.points[3][1] += q;
        break;
      case 4:
      case 5:
      case 6:
      case 7:
        k.angle = (q / 20 + 0.5) * Math.PI;
    }
    return k.computeBBox();
  }
  rasterize(k) {
    let q = new p(this.bbox.width, this.bbox.height);
    let v = q.context;
    v.fillStyle = "#000";
    v.globalAlpha = k;
    v.translate(-this.bbox.left, -this.bbox.top);
    this.render(v);
    return q;
  }
}
class w extends g {
  init() {
    {
      let k = this.t.getRandomPoint(this.t.width, this.t.height);
      let q = [k];
      for (let v = 1; v < 3; v += 1) {
        let x = this.t.getRandomNumber() * 2 * Math.PI;
        let y = this.t.getRandomNumber() * 20;
        q.push([k[0] + ~~(y * Math.cos(x)), k[1] + ~~(y * Math.sin(x))]);
      }
      this.points = q;
    }
    this.computeBBox();
    return this;
  }
  mutate() {
    let k = new w(this.t);
    k.points = this.points.map((z) => z.slice());
    let q = Math.floor(this.t.getRandomNumber() * this.points.length);
    let v = k.points[q];
    let x = this.t.getRandomNumber() * 2 * Math.PI;
    let y = this.t.getRandomNumber() * 20;
    v[0] += ~~(y * Math.cos(x));
    v[1] += ~~(y * Math.sin(x));
    return k.computeBBox();
  }
  render(k) {
    k.beginPath();
    this.points.forEach(([q, v], x) => {
      if (x) {
        k.lineTo(q, v);
      } else {
        k.moveTo(q, v);
      }
    });
    k.closePath();
    k.fill();
  }
}
class m extends g {
  render(k) {
    k.save();
    let [q, v] = c(this.points[0], this.points[2]);
    k.translate(q, v);
    k.rotate(this.angle);
    k.translate(-q, -v);
    k.beginPath();
    this.points.forEach(([x, y], z) => {
      if (z) {
        k.lineTo(x, y);
      } else {
        k.moveTo(x, y);
      }
    });
    k.closePath();
    k.fill();
    k.restore();
  }
}
class d extends g {
  render(k) {
    k.save();
    let [q, v] = c(this.points[0], this.points[2]);
    let x = [
      this.points.reduce((B, C) => Math.min(B, C[0]), Infinity),
      this.points.reduce((B, C) => Math.min(B, C[1]), Infinity),
    ];
    let y = [
      this.points.reduce((B, C) => Math.max(B, C[0]), -Infinity),
      this.points.reduce((B, C) => Math.max(B, C[1]), -Infinity),
    ];
    let z = (y[0] - x[0] || 1) / 2;
    let A = (y[1] - x[1] || 1) / 2;
    k.translate(q, v);
    k.rotate(this.angle);
    k.translate(-q, -v);
    k.beginPath();
    k.ellipse(q, v, z, A, 0, 0, Math.PI * 2, false);
    k.closePath();
    k.fill();
    k.restore();
  }
}
