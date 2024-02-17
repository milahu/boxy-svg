import a2 from "../../libs/xel/xel.js";
import a3 from "../../libs/css-parser/css-parser.js";
import a4 from "../../libs/color/color.js";
import "../../libs/paper/paper.js";
import "../../libs/seed-random/seed-random.js";
import "../../libs/dom-purify/dom-purify.js";
import a5 from "../../libs/dexie/dexie.js";
import a6 from "../../libs/typesense/typesense.js";
import "../../libs/pako/pako.js";
class l {
  currentToken = null;
  position = 0;
  #e;
  constructor(a7) {
    this.#e = a7;
  }
  read() {
    let a7 = this.#e[this.position];
    this.currentToken = a7;
    if (a7.tokenType !== "EOF") {
      this.position += 1;
    }
    return a7;
  }
  reset(a7) {
    this.position = a7;
  }
}
class s {
  get type() {
    return "<view-box>";
  }
  get x() {
    return this.#t;
  }
  set x(a7) {
    this.#t = a7;
  }
  get y() {
    return this.#i;
  }
  set y(a7) {
    this.#i = a7;
  }
  get width() {
    return this.#n;
  }
  set width(a7) {
    this.#n = a7;
  }
  get height() {
    return this.#a;
  }
  set height(a7) {
    this.#a = a7;
  }
  #t;
  #i;
  #n;
  #a;
  constructor(a7 = 0, a8 = 0, a9 = 0, aa = 0) {
    this.x = a7;
    this.y = a8;
    this.width = a9;
    this.height = aa;
  }
  static fromRect(a7) {
    return new s(a7.x, a7.y, a7.width, a7.height);
  }
  static fromString(a7, a8 = false) {
    let a9;
    let aa;
    let ab;
    let ac;
    let ad = [...a3.tokenize(a7), new a3.EOFToken()];
    let af = new l(ad);
    af.read();
    if (af.currentToken.tokenType === "WHITESPACE") {
      af.read();
    }
    if (af.currentToken.tokenType !== "NUMBER") {
      if (a8) {
        throw new DOMException(
          "Unexpected " + af.currentToken.tokenType + " token.",
          "SyntaxError"
        );
      }
      return null;
    }
    a9 = af.currentToken.value;
    af.read();
    if (
      af.currentToken.tokenType !== "WHITESPACE" &&
      af.currentToken.tokenType !== ","
    ) {
      if (a8) {
        throw new DOMException(
          "Unexpected " + af.currentToken.tokenType + " token.",
          "SyntaxError"
        );
      }
      return null;
    }
    if (af.currentToken.tokenType === "WHITESPACE") {
      af.read();
    }
    if (af.currentToken.tokenType === ",") {
      af.read();
    }
    if (af.currentToken.tokenType === "WHITESPACE") {
      af.read();
    }
    if (af.currentToken.tokenType !== "NUMBER") {
      if (a8) {
        throw new DOMException(
          "Unexpected " + af.currentToken.tokenType + " token.",
          "SyntaxError"
        );
      }
      return null;
    }
    aa = af.currentToken.value;
    af.read();
    if (
      af.currentToken.tokenType !== "WHITESPACE" &&
      af.currentToken.tokenType !== ","
    ) {
      if (a8) {
        throw new DOMException(
          "Unexpected " + af.currentToken.tokenType + " token.",
          "SyntaxError"
        );
      }
      return null;
    }
    if (af.currentToken.tokenType === "WHITESPACE") {
      af.read();
    }
    if (af.currentToken.tokenType === ",") {
      af.read();
    }
    if (af.currentToken.tokenType === "WHITESPACE") {
      af.read();
    }
    if (af.currentToken.tokenType !== "NUMBER" || af.currentToken.value < 0) {
      if (a8) {
        throw new DOMException(
          "Unexpected " + af.currentToken.tokenType + " token.",
          "SyntaxError"
        );
      }
      return null;
    }
    ab = af.currentToken.value;
    af.read();
    if (
      af.currentToken.tokenType !== "WHITESPACE" &&
      af.currentToken.tokenType !== ","
    ) {
      if (a8) {
        throw new DOMException(
          "Unexpected " + af.currentToken.tokenType + " token.",
          "SyntaxError"
        );
      }
      return null;
    }
    if (af.currentToken.tokenType === "WHITESPACE") {
      af.read();
    }
    if (af.currentToken.tokenType === ",") {
      af.read();
    }
    if (af.currentToken.tokenType === "WHITESPACE") {
      af.read();
    }
    if (af.currentToken.tokenType !== "NUMBER" || af.currentToken.value < 0) {
      if (a8) {
        throw new DOMException(
          "Unexpected " + af.currentToken.tokenType + " token.",
          "SyntaxError"
        );
      }
      return null;
    }
    ac = af.currentToken.value;
    af.read();
    if (af.currentToken.tokenType === "WHITESPACE") {
      af.read();
    }
    if (af.currentToken.tokenType === "EOF") {
      return new s(a9, aa, ab, ac);
    }
    if (a8) {
      throw new DOMException(
        "Unexpected " + af.currentToken.tokenType + " token.",
        "SyntaxError"
      );
    }
    return null;
  }
  toString() {
    return this.x + " " + this.y + " " + this.width + " " + this.height;
  }
  toRect() {
    return new DOMRect(this.x, this.y, this.width, this.height);
  }
}
const o = "./";
const r = "http://www.w3.org/2000/svg";
const p = "http://www.w3.org/1999/xlink";
const h = "http://www.w3.org/2000/xmlns/";
const m = ["circle", "ellipse", "line", "path", "polygon", "polyline", "rect"];
const u = ["text", "textPath", "tspan"];
const c = [...m, ...u, "foreignObject", "image"];
const d = [...m, ...u];
const b = [...m, "text", "use"];
const g = [...c, "clipPath", "a", "g", "use"];
[
  {
    name: "alignment-baseline",
    displayName: "#alignment-baseline",
    presentationAttributeName: "alignment-baseline",
    initialValue: "baseline",
    values: [
      {
        type: "token",
        tokens: [
          "baseline",
          "text-bottom",
          "alphabetic",
          "ideographic",
          "middle",
          "central",
          "mathematical",
          "text-top",
          "bottom",
          "center",
          "top",
          "inherit",
          "initial",
          "unset",
        ],
      },
    ],
    appliesTo: ["text", "tspan", "textPath", "text a"],
    inheritable: false,
    animatable: true,
    interpolation: [],
  },
  {
    name: "baseline-shift",
    displayName: "#baseline-shift",
    presentationAttributeName: "baseline-shift",
    initialValue: "0",
    values: [
      {
        type: "number",
      },
      {
        type: "percentage",
      },
      {
        type: "length",
      },
      {
        type: "token",
        tokens: ["sub", "super", "inherit", "initial", "unset"],
      },
    ],
    appliesTo: ["text", "tspan", "textPath", "text a"],
    inheritable: false,
    animatable: true,
    interpolation: [],
  },
  {
    name: "clip-path",
    displayName: "#clip-path",
    presentationAttributeName: "clip-path",
    initialValue: "none",
    values: [
      {
        type: "url",
      },
      {
        type: "token",
        tokens: [
          "fill-box",
          "stroke-box",
          "view-box",
          "none",
          "inherit",
          "initial",
          "unset",
        ],
      },
    ],
    appliesTo: [...c, "svg", "g", "a", "use"],
    inheritable: false,
    animatable: true,
    interpolation: [],
  },
  {
    name: "clip-rule",
    displayName: "#clip-rule",
    presentationAttributeName: "clip-rule",
    initialValue: "nonzero",
    values: [
      {
        type: "token",
        tokens: ["nonzero", "evenodd", "inherit", "initial", "unset"],
      },
    ],
    appliesTo: [...c, "use"],
    inheritable: true,
    animatable: true,
    interpolation: [],
  },
  {
    name: "color",
    displayName: "#color",
    presentationAttributeName: "color",
    initialValue: "#000",
    values: [
      {
        type: "color",
      },
      {
        type: "token",
        tokens: ["inherit", "initial", "unset"],
      },
    ],
    appliesTo: [...c, "svg", "g", "a", "use"],
    inheritable: true,
    animatable: true,
    interpolation: ["linear", "spline", "paced"],
  },
  {
    name: "color-interpolation",
    displayName: "#color-interpolation",
    presentationAttributeName: "color-interpolation",
    initialValue: "sRGB",
    values: [
      {
        type: "token",
        tokens: ["auto", "sRGB", "linearRGB", "inherit", "initial", "unset"],
      },
    ],
    appliesTo: [
      ...c,
      "svg",
      "g",
      "a",
      "use",
      "linearGradient",
      "radialGradient",
    ],
    inheritable: true,
    animatable: true,
    interpolation: [],
  },
  {
    name: "color-interpolation-filters",
    displayName: "#color-interpolation",
    presentationAttributeName: "color-interpolation-filters",
    initialValue: "linearRGB",
    values: [
      {
        type: "token",
        tokens: ["auto", "sRGB", "linearRGB", "inherit", "initial", "unset"],
      },
    ],
    appliesTo: [
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDropShadow",
      "feGaussianBlur",
      "feMerge",
      "feMorphology",
      "feSpecularLighting",
      "feTurbulence",
    ],
    inheritable: true,
    animatable: true,
    interpolation: [],
  },
  {
    name: "cursor",
    displayName: "#cursor",
    presentationAttributeName: "cursor",
    initialValue: "auto",
    values: [
      {
        type: "url",
      },
      {
        type: "token",
        tokens: [
          "context-menu",
          "help",
          "pointer",
          "progress",
          "wait ",
          "cell",
          "crosshair",
          "text",
          "vertical-text",
          "alias",
          "copy",
          "move",
          "no-drop",
          "not-allowed",
          "grab",
          "grabbing",
          "e-resize",
          "n-resize",
          "ne-resize",
          "nw-resize",
          "s-resize",
          "se-resize",
          "sw-resize",
          "w-resize",
          "ew-resize",
          "ns-resize",
          "nesw-resize",
          "nwse-resize",
          "col-resize",
          "row-resize",
          "all-scroll",
          "zoom-in",
          "zoom-out",
          "inherit",
          "initial",
          "unset",
        ],
      },
    ],
    appliesTo: [...c, "svg", "g", "a", "use"],
    inheritable: true,
    animatable: true,
    interpolation: [],
  },
  {
    name: "direction",
    displayName: "#direction",
    presentationAttributeName: "direction",
    initialValue: "ltr",
    values: [
      {
        type: "token",
        tokens: ["ltr", "rtl", "inherit", "initial", "unset"],
      },
    ],
    appliesTo: ["text", "textPath", "tspan"],
    inheritable: true,
    animatable: true,
    interpolation: [],
  },
  {
    name: "display",
    displayName: "#display",
    presentationAttributeName: "display",
    initialValue: "inline",
    values: [
      {
        type: "token",
        tokens: ["none", "inline", "block", "inherit", "initial", "unset"],
      },
    ],
    appliesTo: [...c, "textPath", "tspan", "svg", "g", "a", "use"],
    inheritable: false,
    animatable: true,
    interpolation: [],
  },
  {
    name: "dominant-baseline",
    displayName: "#dominant-baseline",
    presentationAttributeName: "dominant-baseline",
    initialValue: "auto",
    values: [
      {
        type: "token",
        tokens: [
          "auto",
          "use-script",
          "no-change",
          "reset-size",
          "ideographic",
          "alphabetic",
          "hanging",
          "mathematical",
          "central",
          "middle",
          "text-after-edge",
          "text-before-edge",
          "inherit",
          "initial",
          "unset",
        ],
      },
    ],
    appliesTo: ["text", "textPath", "tspan"],
    inheritable: true,
    animatable: true,
    interpolation: [],
  },
  {
    name: "fill",
    displayName: "#fill",
    presentationAttributeName: "fill",
    initialValue: "#000",
    values: [
      {
        type: "color",
      },
      {
        type: "url",
      },
      {
        type: "token",
        tokens: ["none", "currentColor", "inherit", "initial", "unset"],
      },
    ],
    appliesTo: [...d],
    inheritable: true,
    animatable: true,
    interpolation: ["linear", "spline", "paced"],
  },
  {
    name: "fill-opacity",
    displayName: "#fill-opacity",
    presentationAttributeName: "fill-opacity",
    initialValue: "1",
    values: [
      {
        type: "number",
      },
      {
        type: "percentage",
      },
      {
        type: "token",
        tokens: ["inherit", "initial", "unset"],
      },
    ],
    appliesTo: [...d],
    inheritable: true,
    animatable: true,
    interpolation: ["linear", "spline", "paced"],
  },
  {
    name: "fill-rule",
    displayName: "#fill-rule",
    presentationAttributeName: "fill-rule",
    initialValue: "nonzero",
    values: [
      {
        type: "token",
        tokens: ["nonzero", "evenodd", "inherit", "initial", "unset"],
      },
    ],
    appliesTo: [...d],
    inheritable: true,
    animatable: true,
    interpolation: [],
  },
  {
    name: "filter",
    displayName: "#filter",
    presentationAttributeName: "filter",
    initialValue: "none",
    values: [
      {
        type: "filter-function-list",
      },
      {
        type: "token",
        tokens: ["none", "inherit", "initial", "unset"],
      },
    ],
    appliesTo: [...c, "textPath", "tspan", "g", "a", "svg", "use"],
    inheritable: false,
    animatable: true,
    interpolation: [],
  },
  {
    name: "flood-color",
    displayName: "#flood-color",
    presentationAttributeName: "flood-color",
    initialValue: "#000",
    values: [
      {
        type: "color",
      },
      {
        type: "token",
        tokens: ["currentColor", "inherit", "initial", "unset"],
      },
    ],
    appliesTo: ["feFlood"],
    inheritable: false,
    animatable: true,
    interpolation: ["linear", "spline", "paced"],
  },
  {
    name: "flood-opacity",
    displayName: "#flood-opacity",
    presentationAttributeName: "flood-opacity",
    initialValue: "1",
    values: [
      {
        type: "number",
        min: 0,
      },
      {
        type: "percentage",
        min: 0,
      },
      {
        type: "token",
        tokens: ["inherit", "initial", "unset"],
      },
    ],
    appliesTo: ["feFlood"],
    inheritable: false,
    animatable: true,
    interpolation: ["linear", "spline", "paced"],
  },
  {
    name: "font",
    displayName: "#font",
    presentationAttributeName: "font",
    initialValue: null,
    values: [
      {
        type: "font",
      },
      {
        type: "token",
        tokens: ["inherit", "initial", "unset"],
      },
    ],
    appliesTo: ["text", "textPath", "tspan"],
    inheritable: true,
    animatable: true,
    interpolation: [],
  },
  {
    name: "font-family",
    displayName: "#font-family",
    presentationAttributeName: "font-family",
    initialValue: null,
    values: [
      {
        type: "font-family",
      },
      {
        type: "token",
        tokens: [
          "cursive",
          "fantasy",
          "monospace",
          "sans-serif",
          "serif",
          "system-ui",
          "inherit",
          "initial",
          "unset",
        ],
      },
    ],
    appliesTo: ["text", "textPath", "tspan"],
    inheritable: true,
    animatable: true,
    interpolation: [],
  },
  {
    name: "font-size",
    displayName: "#font-size",
    presentationAttributeName: "font-size",
    initialValue: "medium",
    values: [
      {
        type: "token",
        tokens: [
          "xx-small",
          "x-small",
          "small",
          "medium",
          "large",
          "x-large",
          "xx-large",
          "larger",
          "smaller",
          "inherit",
          "initial",
          "unset",
        ],
      },
      {
        type: "number",
        min: 0,
      },
      {
        type: "percentage",
        min: 0,
      },
      {
        type: "length",
        min: 0,
      },
    ],
    appliesTo: ["text", "textPath", "tspan"],
    inheritable: true,
    animatable: true,
    interpolation: ["linear", "spline", "paced"],
  },
  {
    name: "font-stretch",
    displayName: "#font-stretch",
    presentationAttributeName: "font-stretch",
    initialValue: "normal",
    values: [
      {
        type: "token",
        tokens: [
          "normal",
          "wider",
          "narrower",
          "ultra-condensed",
          "extra-condensed",
          "condensed",
          "semi-condensed",
          "semi-expanded",
          "expanded",
          "extra-expanded",
          "ultra-expanded",
          "inherit",
          "initial",
          "unset",
        ],
      },
    ],
    appliesTo: ["text", "textPath", "tspan"],
    inheritable: true,
    animatable: true,
    interpolation: [],
  },
  {
    name: "font-style",
    displayName: "#font-style",
    presentationAttributeName: "font-style",
    initialValue: "normal",
    values: [
      {
        type: "token",
        tokens: ["normal", "italic", "oblique", "inherit", "initial", "unset"],
      },
    ],
    appliesTo: ["text", "textPath", "tspan"],
    inheritable: true,
    animatable: true,
    interpolation: [],
  },
  {
    name: "font-variant",
    displayName: "#font-variant",
    presentationAttributeName: "font-variant",
    initialValue: "normal",
    values: [
      {
        type: "token",
        tokens: ["normal", "small-caps", "inherit", "initial", "unset"],
      },
    ],
    appliesTo: ["text", "textPath", "tspan"],
    inheritable: true,
    animatable: true,
    interpolation: [],
  },
  {
    name: "font-weight",
    displayName: "#font-weight",
    presentationAttributeName: "font-weight",
    initialValue: "normal",
    values: [
      {
        type: "number",
      },
      {
        type: "token",
        tokens: [
          "normal",
          "bold",
          "bolder",
          "lighter",
          "inherit",
          "initial",
          "unset",
        ],
      },
    ],
    appliesTo: ["text", "textPath", "tspan"],
    inheritable: true,
    animatable: true,
    interpolation: [],
  },
  {
    name: "image-rendering",
    displayName: "#image-rendering",
    presentationAttributeName: "image-rendering",
    initialValue: "auto",
    values: [
      {
        type: "token",
        tokens: [
          "auto",
          "pixelated",
          "crisp-edges",
          "inherit",
          "initial",
          "unset",
        ],
      },
    ],
    appliesTo: ["image"],
    inheritable: true,
    animatable: true,
    interpolation: [],
  },
  {
    name: "isolation",
    displayName: "#isolation",
    presentationAttributeName: null,
    initialValue: "auto",
    values: [
      {
        type: "token",
        tokens: ["isolate", "auto", "inherit", "initial", "unset"],
      },
    ],
    appliesTo: [
      ...c,
      "svg",
      "g",
      "a",
      "use",
      "symbol",
      "marker",
      "textPath",
      "tspan",
    ],
    inheritable: false,
    animatable: false,
  },
  {
    name: "letter-spacing",
    displayName: "#letter-spacing",
    presentationAttributeName: "letter-spacing",
    initialValue: "normal",
    values: [
      {
        type: "number",
      },
      {
        type: "length",
      },
      {
        type: "token",
        tokens: ["normal", "inherit", "initial", "unset"],
      },
    ],
    appliesTo: ["text", "textPath", "tspan"],
    inheritable: true,
    animatable: true,
    interpolation: ["linear", "spline", "paced"],
  },
  {
    name: "lighting-color",
    displayName: "#lighting-color",
    presentationAttributeName: "lighting-color",
    initialValue: "#fff",
    values: [
      {
        type: "color",
      },
      {
        type: "token",
        tokens: ["currentColor", "inherit", "initial", "unset"],
      },
    ],
    appliesTo: ["feDiffuseLighting", "feSpecularLighting"],
    inheritable: false,
    animatable: true,
    interpolation: ["linear", "spline", "paced"],
  },
  {
    name: "line-height",
    displayName: "#line-height",
    presentationAttributeName: "line-height",
    initialValue: "normal",
    values: [
      {
        type: "number",
        min: 0,
      },
      {
        type: "percentage",
        min: 0,
      },
      {
        type: "length",
        min: 0,
      },
      {
        type: "token",
        tokens: ["normal", "inherit", "initial", "unset"],
      },
    ],
    appliesTo: ["text", "tspan", "textPath", "text a"],
    inheritable: true,
    animatable: true,
    interpolation: ["linear", "spline", "paced"],
  },
  {
    name: "marker",
    displayName: "#marker",
    presentationAttributeName: "marker",
    initialValue: "none",
    values: [
      {
        type: "url",
      },
      {
        type: "token",
        tokens: ["none", "inherit", "initial", "unset"],
      },
    ],
    appliesTo: [...m],
    inheritable: true,
    animatable: true,
    interpolation: [],
  },
  {
    name: "marker-start",
    displayName: "#start-marker",
    presentationAttributeName: "marker-start",
    initialValue: "none",
    values: [
      {
        type: "url",
      },
      {
        type: "token",
        tokens: ["none", "inherit", "initial", "unset"],
      },
    ],
    appliesTo: [...m],
    inheritable: true,
    animatable: true,
    interpolation: [],
  },
  {
    name: "marker-mid",
    displayName: "#mid-marker",
    presentationAttributeName: "marker-mid",
    initialValue: "none",
    values: [
      {
        type: "url",
      },
      {
        type: "token",
        tokens: ["none", "inherit", "initial", "unset"],
      },
    ],
    appliesTo: [...m],
    inheritable: true,
    animatable: true,
    interpolation: [],
  },
  {
    name: "marker-end",
    displayName: "#end-marker",
    presentationAttributeName: "marker-end",
    initialValue: "none",
    values: [
      {
        type: "url",
      },
      {
        type: "token",
        tokens: ["none", "inherit", "initial", "unset"],
      },
    ],
    appliesTo: [...m],
    inheritable: true,
    animatable: true,
    interpolation: [],
  },
  {
    name: "mask",
    displayName: "#mask",
    presentationAttributeName: "mask",
    initialValue: "none",
    values: [
      {
        type: "url",
      },
      {
        type: "token",
        tokens: ["none", "inherit", "initial", "unset"],
      },
    ],
    appliesTo: [...c, "g", "a", "svg", "use"],
    inheritable: false,
    animatable: true,
    interpolation: [],
  },
  {
    name: "mix-blend-mode",
    displayName: "#blend-mode",
    presentationAttributeName: null,
    initialValue: "normal",
    values: [
      {
        type: "token",
        tokens: [
          "normal",
          "multiply",
          "screen",
          "overlay",
          "darken",
          "lighten",
          "color-dodge",
          "color-burn",
          "hard-light",
          "soft-light",
          "difference",
          "exclusion",
          "hue",
          "saturation",
          "color",
          "luminosity",
          "inherit",
          "initial",
          "unset",
        ],
      },
    ],
    appliesTo: [
      ...c,
      "svg",
      "g",
      "a",
      "use",
      "symbol",
      "marker",
      "textPath",
      "tspan",
    ],
    inheritable: false,
    animatable: false,
  },
  {
    name: "opacity",
    displayName: "#opacity",
    presentationAttributeName: "opacity",
    initialValue: "1",
    values: [
      {
        type: "number",
      },
      {
        type: "token",
        tokens: ["inherit", "initial", "unset"],
      },
    ],
    appliesTo: [
      ...c,
      "svg",
      "g",
      "a",
      "use",
      "symbol",
      "marker",
      "textPath",
      "tspan",
    ],
    inheritable: false,
    animatable: true,
    interpolation: ["linear", "spline", "paced"],
  },
  {
    name: "overflow",
    displayName: "#overflow",
    presentationAttributeName: "overflow",
    initialValue: "visible",
    values: [
      {
        type: "token",
        tokens: [
          "visible",
          "hidden",
          "scroll",
          "auto",
          "inherit",
          "initial",
          "unset",
        ],
      },
    ],
    appliesTo: ["svg", "symbol", "pattern", "marker", "image"],
    inheritable: false,
    animatable: true,
    interpolation: [],
  },
  {
    name: "paint-order",
    displayName: "#paint-order",
    presentationAttributeName: null,
    initialValue: "normal",
    values: [
      {
        type: "token",
        tokens: ["normal"],
      },
      {
        type: "token-list",
        tokens: ["fill", "stroke", "markers"],
      },
    ],
    inheritable: true,
    appliesTo: [...d],
    animatable: false,
  },
  {
    name: "pointer-events",
    displayName: "#pointer-events",
    presentationAttributeName: "pointer-events",
    initialValue: "auto",
    values: [
      {
        type: "token",
        tokens: [
          "bounding-box",
          "visiblePainted",
          "visibleFill",
          "visibleStroke",
          "visible",
          "painted",
          "fill",
          "stroke",
          "all",
          "none",
          "inherit",
          "initial",
          "unset",
        ],
      },
    ],
    inheritable: true,
    appliesTo: [...c, "svg", "g", "a", "use"],
    animatable: true,
    interpolation: [],
  },
  {
    name: "shape-rendering",
    displayName: "#shape-rendering",
    presentationAttributeName: "shape-rendering",
    initialValue: "auto",
    values: [
      {
        type: "token",
        tokens: [
          "auto",
          "optimizeSpeed",
          "crispEdges",
          "geometricPrecision",
          "inherit",
          "initial",
          "unset",
        ],
      },
    ],
    appliesTo: [...m],
    inheritable: true,
    animatable: true,
    interpolation: [],
  },
  {
    name: "stop-color",
    displayName: "#stop-color",
    presentationAttributeName: "stop-color",
    initialValue: "#000",
    values: [
      {
        type: "color",
      },
      {
        type: "token",
        tokens: ["currentColor", "inherit", "initial", "unset"],
      },
    ],
    appliesTo: ["stop"],
    inheritable: false,
    animatable: true,
    interpolation: ["linear", "spline", "paced"],
  },
  {
    name: "stop-opacity",
    displayName: "#stop-opacity",
    presentationAttributeName: "stop-opacity",
    initialValue: "1",
    values: [
      {
        type: "number",
      },
      {
        type: "percentage",
      },
      {
        type: "token",
        tokens: ["inherit", "initial", "unset"],
      },
    ],
    appliesTo: ["stop"],
    inheritable: false,
    animatable: true,
    interpolation: ["linear", "spline", "paced"],
  },
  {
    name: "stroke",
    displayName: "#stroke",
    presentationAttributeName: "stroke",
    initialValue: "none",
    values: [
      {
        type: "color",
      },
      {
        type: "url",
      },
      {
        type: "token",
        tokens: ["none", "currentColor", "inherit", "initial", "unset"],
      },
    ],
    appliesTo: [...d],
    inheritable: true,
    animatable: true,
    interpolation: ["linear", "spline", "paced"],
  },
  {
    name: "stroke-dasharray",
    displayName: "#stroke-dash-array",
    presentationAttributeName: "stroke-dasharray",
    initialValue: "none",
    values: [
      {
        type: "dasharray",
      },
      {
        type: "token",
        tokens: ["none", "inherit", "initial", "unset"],
      },
    ],
    appliesTo: [...d],
    inheritable: true,
    animatable: true,
    interpolation: ["linear", "spline"],
  },
  {
    name: "stroke-dashoffset",
    displayName: "#stroke-dash-offset",
    presentationAttributeName: "stroke-dashoffset",
    initialValue: "0",
    values: [
      {
        type: "number",
      },
      {
        type: "percentage",
      },
      {
        type: "length",
      },
      {
        type: "token",
        tokens: ["inherit", "initial", "unset"],
      },
    ],
    appliesTo: [...d],
    inheritable: true,
    animatable: true,
    interpolation: ["linear", "spline", "paced"],
  },
  {
    name: "stroke-linecap",
    displayName: "#stroke-line-cap",
    presentationAttributeName: "stroke-linecap",
    initialValue: "butt",
    values: [
      {
        type: "token",
        tokens: ["butt", "round", "square", "inherit", "initial", "unset"],
      },
    ],
    appliesTo: [...d],
    inheritable: true,
    animatable: true,
    interpolation: [],
  },
  {
    name: "stroke-linejoin",
    displayName: "#stroke-line-join",
    presentationAttributeName: "stroke-linejoin",
    initialValue: "miter",
    values: [
      {
        type: "token",
        tokens: ["miter", "round", "bevel", "inherit", "initial", "unset"],
      },
    ],
    appliesTo: [...d],
    inheritable: true,
    animatable: true,
    interpolation: [],
  },
  {
    name: "stroke-miterlimit",
    displayName: "#stroke-miter-limit",
    presentationAttributeName: "stroke-miterlimit",
    initialValue: "4",
    values: [
      {
        type: "number",
        min: 1,
      },
      {
        type: "token",
        tokens: ["inherit", "initial", "unset"],
      },
    ],
    appliesTo: [...d],
    inheritable: true,
    animatable: true,
    interpolation: ["linear", "spline", "paced"],
  },
  {
    name: "stroke-opacity",
    displayName: "#stroke-opacity",
    presentationAttributeName: "stroke-opacity",
    initialValue: "1",
    values: [
      {
        type: "number",
      },
      {
        type: "percentage",
      },
      {
        type: "token",
        tokens: ["inherit", "initial", "unset"],
      },
    ],
    appliesTo: [...d],
    inheritable: true,
    animatable: true,
    interpolation: ["linear", "spline", "paced"],
  },
  {
    name: "stroke-width",
    displayName: "#stroke-width",
    presentationAttributeName: "stroke-width",
    initialValue: "1",
    values: [
      {
        type: "number",
      },
      {
        type: "percentage",
      },
      {
        type: "length",
      },
      {
        type: "token",
        tokens: ["inherit", "initial", "unset"],
      },
    ],
    appliesTo: [...d],
    inheritable: true,
    animatable: true,
    interpolation: ["linear", "spline", "paced"],
  },
  {
    name: "text-anchor",
    displayName: "#text-anchor",
    presentationAttributeName: "text-anchor",
    initialValue: "start",
    values: [
      {
        type: "token",
        tokens: ["start", "middle", "end", "inherit", "initial", "unset"],
      },
    ],
    appliesTo: ["text", "textPath", "tspan"],
    inheritable: true,
    animatable: true,
    interpolation: [],
  },
  {
    name: "text-decoration",
    displayName: "#text-decoration",
    presentationAttributeName: "text-decoration",
    initialValue: "none",
    values: [
      {
        type: "token-list",
        tokens: ["underline", "overline", "line-through"],
      },
      {
        type: "token",
        tokens: ["none", "inherit", "initial", "unset"],
      },
    ],
    appliesTo: ["text", "textPath", "tspan"],
    inheritable: false,
    animatable: true,
    interpolation: [],
  },
  {
    name: "text-rendering",
    displayName: "#text-rendering",
    presentationAttributeName: "text-rendering",
    initialValue: "auto",
    values: [
      {
        type: "token",
        tokens: [
          "auto",
          "optimizeSpeed",
          "optimizeLegibility",
          "geometricPrecision",
          "inherit",
          "initial",
          "unset",
        ],
      },
    ],
    appliesTo: ["text"],
    inheritable: true,
    animatable: true,
    interpolation: [],
  },
  {
    name: "text-transform",
    displayName: "#text-transform",
    presentationAttributeName: null,
    initialValue: "none",
    values: [
      {
        type: "token",
        tokens: [
          "capitalize",
          "uppercase",
          "lowercase",
          "none",
          "inherit",
          "initial",
          "unset",
        ],
      },
    ],
    appliesTo: ["text", "textPath", "tspan"],
    inheritable: true,
    animatable: false,
  },
  {
    name: "transform",
    displayName: "#transform",
    presentationAttributeName: "transform",
    initialValue: "none",
    values: [
      {
        type: "transform-list",
      },
      {
        type: "token",
        tokens: ["none"],
      },
    ],
    appliesTo: [
      "circle",
      "ellipse",
      "line",
      "path",
      "polygon",
      "polyline",
      "rect",
      "image",
      "text",
      "tspan",
      "use",
      "a",
      "g",
      "svg",
    ],
    inheritable: false,
    animatable: true,
    interpolation: ["linear", "spline"],
  },
  {
    name: "transform-box",
    displayName: "#transform-box",
    presentationAttributeName: null,
    initialValue: "view-box",
    values: [
      {
        type: "token",
        tokens: [
          "content-box",
          "border-box",
          "fill-box",
          "stroke-box",
          "view-box",
        ],
      },
    ],
    appliesTo: [
      "circle",
      "ellipse",
      "line",
      "path",
      "polygon",
      "polyline",
      "rect",
      "image",
      "text",
      "tspan",
      "use",
      "a",
      "g",
      "svg",
    ],
    inheritable: false,
    animatable: true,
    interpolation: [],
  },
  {
    name: "transform-origin",
    displayName: "#transform-origin",
    presentationAttributeName: "transform-origin",
    initialValue: "0 0",
    values: [
      {
        type: "token",
        tokens: ["left", "center", "right", "top", "bottom"],
      },
      {
        type: "length",
      },
    ],
    appliesTo: [
      "circle",
      "ellipse",
      "line",
      "path",
      "polygon",
      "polyline",
      "rect",
      "image",
      "text",
      "tspan",
      "use",
      "a",
      "g",
      "svg",
    ],
    inheritable: false,
    animatable: true,
    interpolation: [],
  },
  {
    name: "unicode-bidi",
    displayName: "#unicode-bidi",
    presentationAttributeName: "unicode-bidi",
    initialValue: "normal",
    values: [
      {
        type: "token",
        tokens: [
          "normal",
          "embed",
          "bidi-override",
          "inherit",
          "initial",
          "unset",
        ],
      },
    ],
    appliesTo: ["text", "textPath", "tspan"],
    inheritable: false,
    animatable: true,
    interpolation: [],
  },
  {
    name: "vector-effect",
    displayName: "#vector-effect",
    presentationAttributeName: "vector-effect",
    initialValue: "none",
    values: [
      {
        type: "token",
        tokens: ["non-scaling-stroke", "none", "inherit", "initial", "unset"],
      },
    ],
    appliesTo: [...c, "use"],
    inheritable: false,
    animatable: true,
    interpolation: [],
  },
  {
    name: "visibility",
    displayName: "#visibility",
    presentationAttributeName: "visibility",
    initialValue: "visible",
    values: [
      {
        type: "token",
        tokens: ["visible", "hidden", "inherit", "initial", "unset"],
      },
    ],
    appliesTo: [...c, "text", "textPath", "tspan"],
    inheritable: true,
    animatable: true,
    interpolation: [],
  },
  {
    name: "word-spacing",
    displayName: "#word-spacing",
    presentationAttributeName: "word-spacing",
    initialValue: "normal",
    values: [
      {
        type: "number",
      },
      {
        type: "length",
      },
      {
        type: "token",
        tokens: ["normal", "inherit", "initial", "unset"],
      },
    ],
    appliesTo: ["text", "textPath", "tspan"],
    inheritable: true,
    animatable: true,
    interpolation: ["linear", "spline", "paced"],
  },
  {
    name: "white-space",
    displayName: "#white-space",
    presentationAttributeName: "white-space",
    initialValue: "normal",
    values: [
      {
        type: "token",
        tokens: [
          "normal",
          "pre",
          "nowrap",
          "pre-wrap",
          "pre-line",
          "inherit",
          "initial",
          "unset",
        ],
      },
    ],
    appliesTo: ["text", "textPath", "tspan"],
    inheritable: true,
    animatable: true,
    interpolation: [],
  },
  {
    name: "will-change",
    displayName: "#will-change",
    initialValue: "auto",
    values: [
      {
        type: "token",
        tokens: [
          "auto",
          "content",
          "mix-blend-mode",
          "filter",
          "opacity",
          "transform",
        ],
      },
    ],
    appliesTo: [
      "rect",
      "circle",
      "ellipse",
      "line",
      "path",
      "polygon",
      "polyline",
      "image",
      "text",
      "tspan",
      "use",
      "svg",
      "a",
      "g",
      "foreignObject",
    ],
    inheritable: true,
    animatable: false,
  },
  {
    name: "writing-mode",
    displayName: "#writing-mode",
    presentationAttributeName: "writing-mode",
    initialValue: "horizontal-tb",
    values: [
      {
        type: "token",
        tokens: [
          "horizontal-tb",
          "vertical-lr",
          "vertical-rl",
          "inherit",
          "initial",
          "unset",
        ],
      },
    ],
    appliesTo: ["text", "tspan", "textPath"],
    inheritable: true,
    animatable: true,
    interpolation: [],
  },
]
  .map((a7) => a7.presentationAttributeName)
  .filter((a7) => a7);
let f = (a7, a8 = 0) => {
  let a9 = Math.pow(10, a8);
  return Math.round((a7 + Number.EPSILON) * a9) / a9;
};
class x extends a4 {
  get type() {
    return "<color>";
  }
  static fromString(a7, a8 = false) {
    if (a8) {
      return new x(a7);
    }
    {
      let a9 = null;
      try {
        a9 = new x(a7);
      } catch (aa) {}
      return a9;
    }
  }
}
const y = {
  arabic:
    "U+600-6FF, U+200C-200E, U+2010-2011, U+204F, U+2E41, U+FB50-FDFF, U+FE80-FEFC",
  bengali: "U+964-965, U+981-9FB, U+200C-200D, U+20B9, U+25CC",
  cyrillic: "U+400-45F, U+490-491, U+4B0-4B1, U+2116",
  "cyrillic-ext":
    "U+460-52F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
  devanagari:
    "U+900-97F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB",
  greek: "U+370-3FF",
  "greek-ext": "U+1F00-1FFF",
  gujarati: "U+964-965, U+A80-AFF, U+200C-200D, U+20B9, U+25CC, U+A830-A839",
  gurmukhi:
    "U+964-965, U+A01-A75, U+200C-200D, U+20B9, U+25CC, U+262C, U+A830-A839",
  hebrew: "U+590-5FF, U+20AA, U+25CC, U+FB1D-FB4F",
  kannada: "U+964-965, U+C82-CF2, U+200C-200D, U+20B9, U+25CC",
  khmer: "U+1780-17FF, U+200C, U+25CC",
  latin:
    "U+0-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
  "latin-ext":
    "U+100-24F, U+259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
  malayalam: "U+307, U+323, U+964-965, U+D02-D7F, U+200C-200D, U+20B9, U+25CC",
  myanmar: "U+1000-109F, U+200C-200D, U+25CC",
  oriya: "U+964-965, U+B01-B77, U+200C-200D, U+20B9, U+25CC",
  sinhala: "U+964-965, U+D82-DF4, U+200C-200D, U+25CC",
  tamil: "U+964-965, U+B82-BFA, U+200C-200D, U+20B9, U+25CC",
  thai: "U+E01-E5B, U+200C-200D, U+25CC",
  telugu: "U+951-952, U+964-965, U+C00-C7F, U+1CDA, U+200C-200D, U+25CC",
  tibetan: "U+F00-FFF, U+200C-200D, U+25CC",
  vietnamese:
    "U+102-103, U+110-111, U+128-129, U+168-169, U+1A0-1A1, U+1AF-1B0, U+1EA0-1EF9, U+20AB",
};
let k = document.createElement("template");
let w = (a7, ...a8) => {
  let a9 = [];
  for (let ac = 0; ac < a7.length; ac += 1) {
    a9.push(a7[ac]);
    if (a8[ac] !== undefined) {
      a9.push(a8[ac]);
    }
  }
  let aa = a9.join("");
  k.innerHTML = aa;
  let ab = document.importNode(k.content, true);
  if (ab.children.length === 1) {
    return ab.firstElementChild;
  } else {
    return ab;
  }
};
let v = (a7, ...a8) => {
  let a9 = [];
  for (let ac = 0; ac < a7.length; ac += 1) {
    a9.push(a7[ac]);
    if (a8[ac] !== undefined) {
      a9.push(a8[ac]);
    }
  }
  let aa = a9.join("");
  let ab = new CSSStyleSheet();
  ab.replaceSync(aa);
  return ab;
};
new (class {
  #l;
  #s = null;
  #o = {};
  constructor() {
    this.#l = new a5("GoogleFontsManager");
    this.#l.version(1).stores({
      cache: "family",
    });
  }
  search(a7 = "", a8 = "alphabetical", a9 = "all", aa = "all", ab = "all") {
    return new Promise(async (ac) => {
      await this.#r();
      let ad = [];
      let af = this.#l.cache;
      if (a7.trim() !== "") {
        af = af.filter((ag) =>
          ag.family.toLowerCase().includes(a7.trim().toLowerCase())
        );
      }
      if (a9 !== "all") {
        af = af.filter((ag) => ag.category === a9);
      }
      if (aa !== "all") {
        af = af.filter((ag) => ag.subsets.includes(aa));
      }
      ad = await af.toArray();
      if (a8 === "date") {
        ad = ad.sort((ag, ah) => (ag.dateRank > ah.dateRank ? -1 : 1));
      } else if (a8 === "popularity") {
        ad = ad.sort((ag, ah) =>
          ag.popularityRank > ah.popularityRank ? -1 : 1
        );
      } else if (a8 === "trending") {
        ad = ad.sort((ag, ah) => (ag.trendingRank > ah.trendingRank ? -1 : 1));
      }
      if (ab !== "all") {
        ad = ad.slice(ab * 40, (ab + 1) * 40);
      }
      ac(ad);
    });
  }
  refresh() {
    return new Promise(async (a7, a8) => {
      let a9;
      if (this.#s === null) {
        this.#s = new a6.Client({
          apiKey: "ML0qIC62dFtk9Oro0x9Ps3IbO6Tgv5jL",
          connectionTimeoutSeconds: 5,
          nodes: [
            {
              host: "92f3tewguhsn8o0qp.a1.typesense.net",
              port: "443",
              protocol: "https",
            },
          ],
        });
      }
      try {
        a9 = await this.#s.collections("googleFonts").documents().export();
      } catch (ab) {
        return a8(ab);
      }
      let aa = a9
        .split("\n")
        .map((ac) => JSON.parse(ac))
        .map((ac) => ({
          family: ac.family,
          faces: ac.faces,
          category: ac.category,
          subsets: ac.subsets,
          license: ac.license,
          thumbnail: ac.thumbnail,
          urls: ac.urls,
          dateRank: ac.dateRank,
          popularityRank: ac.popularityRank,
          trendingRank: ac.trendingRank,
          pageURL: "https://fonts.google.com/specimen/" + ac.id,
          cachedTime: Date.now(),
        }));
      await this.#l.cache.clear();
      await this.#l.cache.bulkPut(aa);
      a7();
    });
  }
  getFontFaceRulesFromUrl(a7, a8 = false) {
    return new Promise(async (a9) => {
      let aa = [];
      await this.#r();
      if (a8) {
        let ab = await this.#p(a7);
        for (let ac of ab.cssRules) {
          if (ac.type === CSSRule.FONT_FACE_RULE) {
            aa.push(ac);
          }
        }
      } else {
        let ad = [];
        let af = new URL(a7);
        let ag = af.searchParams.get("display") || "auto";
        if (a7.startsWith("https://fonts.googleapis.com/css?")) {
          let ah = af.searchParams.get("family");
          ah.split("|");
          af.searchParams.get("subset");
          let ai = {
            regular: "400",
            bold: "700",
            italic: "400italic",
            bolditalic: "700italic",
            r: "400",
            b: "700",
            i: "400italic",
          };
          for (let aj of ah.split("|")) {
            let ak = [];
            let [al, am] = aj.split(":");
            for (let an of am.split(",")) {
              an = ai[an] || an;
              ak.push(an);
            }
            ad.push({
              family: al,
              faceNames: ak,
            });
          }
        } else if (a7.startsWith("https://fonts.googleapis.com/css2?")) {
          let ao = af.searchParams.getAll("family");
          for (let ap of ao) {
            let [aq, ar] = ap.split(":");
            if (ar === undefined) {
              ad.push({
                family: aq,
                faceNames: ["400"],
              });
            } else {
              let as = [];
              let [at, au] = ar.split("@");
              let av = at.split(",");
              let aw = au.split(";");
              for (let ax of aw) {
                let ay = {
                  wght: "400",
                  ital: "0",
                };
                for (let az = 0; az < av.length; az += 1) {
                  ay[av[az]] = ax.split(",")[az];
                }
                as.push(ay.wght + (ay.ital === "1" ? "italic" : ""));
              }
              ad.push({
                family: aq,
                faceNames: as,
              });
            }
          }
        }
        {
          let aA = this.#l.cache;
          for (let { family, faceNames } of ad) {
            let aD = await aA.get({
              family: family,
            });
            if (aD) {
              for (let aE of faceNames) {
                let aF = aD.urls[aE];
                if (aF) {
                  let aG = aE.substring(0, 3);
                  let aH = aE.includes("italic") ? "italic" : "normal";
                  let aI = [];
                  for (let aL of aD.subsets) {
                    if (y[aL]) {
                      aI.push(y[aL]);
                    }
                  }
                  if (aI.length === 0) {
                    aI = "U+0-10FFFF";
                  }
                  let aJ = aI.join(",");
                  let aK = v`
                    @font-face {
                      font-family: "${family}";
                      font-style: ${aH};
                      font-weight: ${aG};
                      font-display: ${ag};
                      font-unicode-range: ${aJ};
                      src: url(${aF});
                    }
                  `;
                  aa.push(aK.cssRules[0]);
                }
              }
            }
          }
        }
      }
      a9(aa);
    });
  }
  getFamilyDescriptor(a7) {
    return new Promise(async (a8) => {
      await this.#r();
      a8((await this.#l.cache.where("family").equals(a7).toArray())[0] || null);
    });
  }
  #p(a7) {
    return new Promise(async (a8) => {
      let a9 = null;
      if (this.#o[a7]) {
        a9 = this.#o[a7];
      } else {
        let aa = await fetch(a7);
        let ab = await aa.text();
        a9 = new CSSStyleSheet();
        a9.replaceSync(ab);
        this.#o[a7] = a9;
      }
      a8(a9);
    });
  }
  #r() {
    return new Promise(async (a7) => {
      let a8 = await this.#l.cache.count();
      let a9 = true;
      if (a8 > 0) {
        let aa = await this.#l.cache.get("Roboto");
        if (aa) {
          let ab = 1296000000;
          a9 = Date.now() - aa.cachedTime > ab;
        }
      }
      if (a8 === 0 || a9 === true) {
        await this.refresh();
      }
      a7();
    });
  }
})();
const U =
  ["iPhone", "iPad"].includes(navigator.platform) ||
  navigator.platform.startsWith("Mac");
const N =
  navigator.userAgent.indexOf("Safari/") > -1 &&
  navigator.userAgent.indexOf("Chrome") === -1;
if (window.frameElement === null) {
  document.body.dataset.app;
}
let C = (a7) =>
  new Promise((a8) => {
    let a9 = new FileReader();
    a9.readAsDataURL(a7);
    a9.onloadend = () => {
      let aa = a9.result;
      a8(aa);
    };
  });
let A = (a7, a8, a9) => a7.split(a8).join(a9);
let F = (a7) => {
  a7 = a7.toLowerCase();
  a7 = A(a7, " ", "");
  a7 = A(a7, "-", "");
  let a8 = "400";
  if ((a7 = A(a7, "_", "")).includes("thin") || a7.includes("hairline")) {
    a8 = "100";
  } else if (a7.includes("extralight") || a7.includes("ultralight")) {
    a8 = "200";
  } else if (a7.includes("light")) {
    a8 = "300";
  } else if (a7.includes("medium")) {
    a8 = "500";
  } else if (a7.includes("semibold") || a7.includes("demibold")) {
    a8 = "600";
  } else if (a7.includes("extrabold") || a7.includes("ultrabold")) {
    a8 = "800";
  } else if (a7.includes("bold")) {
    a8 = "700";
  } else if (a7.includes("black") || a7.includes("heavy")) {
    a8 = "900";
  }
  return a8;
};
let T = (a7) => {
  a7 = a7.toLowerCase();
  a7 = A(a7, " ", "");
  a7 = A(a7, "-", "");
  let a8 = "normal";
  if ((a7 = A(a7, "_", "")).includes("italic")) {
    a8 = "italic";
  } else if (a7.includes("oblique")) {
    a8 = "oblique";
  }
  return a8;
};
let P = (a7) => {
  let a8;
  let a9 = document.createNodeIterator(a7, NodeFilter.SHOW_TEXT, null);
  let aa = {
    text: true,
    textPath: true,
    tspan: true,
  };
  while ((a8 = a9.nextNode())) {
    if (!aa[a8.parentElement.localName]) {
      if (S(a8.textContent)) {
        a8.remove();
      }
    }
  }
};
let S = (a7) => !/[^\t\n\r ]/.test(a7);
new (class extends EventTarget {
  #h = "init";
  #m = [];
  #l;
  get status() {
    return this.#h;
  }
  constructor() {
    super();
    this.#l = new a5("LocalFontsManager");
    this.#l.version(1).stores({
      cache: "family",
    });
    this.#l
      .version(2)
      .stores({
        cache: "family",
      })
      .upgrade((a7) => a7.cache.clear());
    if (window.queryLocalFonts === undefined) {
      this.#h = "no-api";
    } else {
      navigator.permissions
        .query({
          name: "local-fonts",
        })
        .then((a7) => {
          if (a7.state === "granted") {
            this.refresh();
          } else if (a7.state !== "prompt") {
            this.#h = "no-permission";
          }
        });
    }
  }
  search(a7 = "", a8 = "all") {
    return new Promise(async (a9) => {
      let aa = [];
      let ab = this.#l.cache;
      if (a7.trim() !== "") {
        ab = ab.filter((ac) =>
          ac.family.toLowerCase().includes(a7.trim().toLowerCase())
        );
      }
      aa = await ab.toArray();
      if (a8 !== "all") {
        aa = aa.slice(a8 * 40, (a8 + 1) * 40);
      }
      a9(aa);
    });
  }
  refresh() {
    return new Promise(async (a7, a8) => {
      let a9;
      try {
        a9 = await this.getLocalFontsMetadata(true);
      } catch (ab) {
        return a8(ab);
      }
      let aa = [];
      for (let ac of a9) {
        let ad = F(ac.style) + (T(ac.style) === "italic" ? "i" : "");
        let af = aa.find((ag) => ag.family === ac.family);
        if (af) {
          if (af.faces.includes(ad) === false) {
            af.faces.push(ad);
          }
        } else {
          let ag = {
            family: ac.family,
            faces: [ad],
          };
          aa.push(ag);
        }
      }
      for (let ah of aa) {
        ah.faces.sort();
      }
      await this.#l.cache.clear();
      await this.#l.cache.bulkPut(aa);
      this.#h = "ready";
      a7();
    });
  }
  getLocalFontsMetadata(a7 = false) {
    return new Promise(async (a8, a9) => {
      if (this.status === "no-api") {
        a8([]);
      } else {
        if (this.#m.length < 10 || a7) {
          try {
            this.#m = await window.queryLocalFonts();
          } catch (aa) {
            return a9({
              message: aa.message,
              name: aa.name,
            });
          }
        }
        a8(this.#m);
      }
    });
  }
  getCacheSize() {
    return new Promise(async (a7) => {
      a7(await this.#l.cache.count());
    });
  }
  getFamilyDescriptor(a7) {
    return new Promise(async (a8) => {
      a8((await this.#l.cache.where("family").equals(a7).toArray())[0] || null);
    });
  }
  getFamilyWeights(a7) {
    return new Promise(async (a8) => {
      let a9 = await this.getFamilyDescriptor(a7);
      if (a9) {
        let aa = new Set();
        for (let ab of a9.faces) {
          let ac = ab.substring(0, 3);
          aa.add(ac);
        }
        a8([...aa]);
      } else {
        a8(["400"]);
      }
    });
  }
})();
const M =
  "\n  position: fixed;\n  top: -1px;\n  left: -1px;\n  width: 1px;\n  height: 1px;\n  contain: strict;\n  overflow: hidden;\n".replaceAll(
    "\n  ",
    ""
  );
class E {
  #u;
  #c;
  get shadowRoot() {
    return this.#u.shadowRoot;
  }
  constructor(a7) {
    this.#c = a7;
    this.#u = document.createElement("div");
    this.#u.setAttribute("style", M);
    this.#u.setAttribute("class", "offscreen-container");
    this.#u.attachShadow({
      mode: "open",
    });
    this.#u.shadowRoot.append(a7);
    document.body.append(this.#u);
  }
  destroy() {
    if (this.#c.parentNode === this.#u.shadowRoot) {
      this.#c.remove();
    }
    this.#u.remove();
    this.#u = null;
  }
}
let z = (a7) => {
  if (a7.isConnected === false) {
    new E(a7);
  }
  if (N) {
    let a8 = null;
    if (a7.style.transform === "") {
      a8 =
        a7.localName === "linearGradient" || a7.localName === "radialGradient"
          ? a7.gradientTransform.baseVal.consolidate()
          : a7.localName === "pattern"
          ? a7.patternTransform.baseVal.consolidate()
          : a7.transform.baseVal.consolidate();
      if (a8) {
        return DOMMatrix.fromMatrix(a8.matrix);
      } else {
        return new DOMMatrix();
      }
    }
    {
      let a9 = a7.computedStyleMap().get("transform");
      if (a9.value === "none") {
        return new DOMMatrix();
      } else {
        return a9.toMatrix();
      }
    }
  }
  {
    let aa = a7.computedStyleMap().get("transform");
    if (aa.value === "none") {
      return new DOMMatrix();
    } else {
      return aa.toMatrix();
    }
  }
};
let D = (a7, a8 = false) => {
  let a9;
  if (a8 === false) {
    a9 = DOMMatrix.fromMatrix(a7.getScreenCTM());
  } else {
    let aa = null;
    let ab = false;
    if (a7.localName === "path") {
      let ac = a7.ownerSVGElement.querySelector(
        'textPath[href="#' + CSS.escape(a7.id) + '"]'
      );
      aa = ac ? ac.closest("text") : null;
      ab = !!ac && a7.closest("defs") !== null;
    }
    a9 = ab ? D(aa).multiply(z(a7)) : DOMMatrix.fromMatrix(a7.getScreenCTM());
  }
  return a9;
};
let V = (a7) => {
  let a8 = [];
  if (a7.closest("text")) {
    let a9 = [];
    let aa = document.createTreeWalker(a7, NodeFilter.SHOW_TEXT);
    while (aa.nextNode()) {
      a9.push(aa.currentNode);
    }
    for (let ab of a9) {
      let ac = ab.parentElement;
      if (
        ac.localName === "text" ||
        ac.localName === "tspan" ||
        ac.localName === "textPath"
      ) {
        if (ac.getNumberOfChars() > 0) {
          a8.push(ab);
        }
      } else if (ac.localName === "a") {
        let ad = ac.getBBox();
        if (ad.x !== 0 || ad.y !== 0 || ad.width !== 0 || ad.height !== 0) {
          a8.push(ab);
        }
      }
    }
  }
  return a8;
};
let B = (a7, a8) => {
  let a9 = a7.closest("text");
  let aa = 0;
  let ab = -1;
  for (let ac of V(a9)) {
    if (ac === a7) {
      ab = aa + a8;
      break;
    }
    aa += ac.length;
  }
  return [a9, ab];
};
let R = (a7, a8 = true) => {
  let a9 = new DOMRect(0, 0, 0, 0);
  let aa = a8
    ? ((ab) => {
        let ac = null;
        if (g.includes(ab.localName)) {
          let ad = getComputedStyle(ab).clipPath;
          if (ad && ad !== "none") {
            let af = ad.substring(6, ad.length - 2);
            let ag = Y(ab).querySelector("#" + CSS.escape(af)) || null;
            if (ag?.localName === "clipPath" && ag !== ab) {
              ac = ag;
            }
          }
        }
        return ac;
      })(a7)
    : null;
  if (aa) {
    let ab = R(a7, false);
    let ac = K(R(aa), z(aa));
    a9 = X(ab, ac);
  } else if (a7.localName === "tspan") {
    let ad = V(a7);
    let af = document.createRange();
    if (ad.length > 0) {
      af.setStart(ad[0], 0);
      af.setEnd(ad[ad.length - 1], ad[ad.length - 1].length);
    }
    if (af.collapsed === false) {
      let ag = af.startContainer.closest("text");
      let [, ah] = B(af.startContainer, af.startOffset);
      let [, ai] = B(af.endContainer, af.endOffset);
      let aj = [];
      for (let ak = ah; ak < ai; ak += 1) {
        let al = ag.getExtentOfChar(ak);
        aj.push(al);
      }
      a9 = J(aj);
    }
  } else if (a7.localName === "use") {
    a9 = new DOMRect(0, 0, a7.width.baseVal.value, a7.height.baseVal.value);
  } else if (a7.localName === "clipPath") {
    let am = [];
    for (let an of a7.children) {
      if (b.includes(an.localName)) {
        let ao = K(DOMRect.fromRect(an.getBBox()), z(an));
        am.push(ao);
      }
    }
    if (am.length > 0) {
      a9 = J(am);
    }
  } else {
    a9 = DOMRect.fromRect(a7.getBBox());
  }
  return a9;
};
let { sin, cos, acos, atan2, abs, sqrt, pow, PI, min, max } = Math;
document.createElementNS("http://www.w3.org/2000/svg", "svg");
let K = (a7, a8) => {
  let a9 = [
    new DOMPoint(a7.x, a7.y),
    new DOMPoint(a7.x + a7.width, a7.y),
    new DOMPoint(a7.x + a7.width, a7.y + a7.height),
    new DOMPoint(a7.x, a7.y + a7.height),
  ].map((ah) => ah.matrixTransform(a8));
  let aa = a9.map((ah) => ah.x);
  let ab = a9.map((ah) => ah.y);
  let ac = min(...aa);
  let ad = min(...ab);
  let af = max(...aa);
  let ag = max(...ab);
  return new DOMRect(ac, ad, af - ac, ag - ad);
};
let J = (a7) => {
  if (a7.length === 0) {
    return new DOMRect(0, 0, 0, 0);
  }
  if (a7.length === 1) {
    let a8 = a7[0];
    return new DOMRect(a8.x, a8.y, a8.width, a8.height);
  }
  {
    let a9 = Math.min(...a7.map((ad) => ad.x));
    let aa = Math.min(...a7.map((ad) => ad.y));
    let ab = Math.max(...a7.map((ad) => ad.x + ad.width));
    let ac = Math.max(...a7.map((ad) => ad.y + ad.height));
    return new DOMRect(a9, aa, ab - a9, ac - aa);
  }
};
let X = (a7, a8) => {
  let a9 = Math.max(a7.left, a8.left);
  let aa = Math.min(a7.right, a8.right);
  let ab = Math.max(a7.top, a8.top);
  let ac = Math.min(a7.bottom, a8.bottom);
  return new DOMRect(a9, ab, aa - a9, ac - ab);
};
let Q = (a7, a8 = null) => {
  let a9 = a7.split(":");
  let aa = null;
  if (a9.length === 1) {
    let [ab] = a9;
    aa = document.createElement(ab, a8);
  } else if (a9.length === 2) {
    let [ac, ad] = a9;
    if (ac === "svg") {
      aa = document.createElementNS(r, ad, a8);
    }
  }
  return aa;
};
let Y = (a7) => {
  let a8 = a7.localName === "svg" ? a7 : null;
  for (let a9 = a7.ownerSVGElement; a9; a9 = a9.ownerSVGElement) {
    a8 = a9;
  }
  return a8;
};
let Z = (a7, a8, a9 = true) => {
  let aa = a7.closest(a8);
  if (a9 && !aa && a7.getRootNode().host) {
    return Z(a7.getRootNode().host, a8);
  } else {
    return aa;
  }
};
class ee extends HTMLElement {
  static #d = w` <template> <main id="main" part="main"></main> <footer id="footer" part="footer"></footer> </template>
  `;
  static #b = v`
    :host {
      display: flex;
      flex-flow: column;
      width: 100%;
      height: 100%;
    }
    :host(:focus) {
      outline: none;
    }
    :host([hidden]) {
      display: none;
    }

    h3:first-child {
      margin-top: 0;
    }

    section > hr {
      margin: 14px 0;
    }

    /**
     * Main
     */

    #main {
      flex: 1;
      box-sizing: border-box;
      width: 100%;
      overflow: auto;
    }

    #options-section {
      padding: 16px 20px;
    }

    #preview-section {
      padding: 16px 20px;
    }

    #preview {
      width: 100%;
      height: 100px;
      user-select: none;
      -webkit-user-select: none;
      background: var(--checkboard-background); image-rendering: pixelated;
      border-width: 1px;
      border-style: solid;
    }
    #preview[hidden] {
      display: none;
    }

    /**
     * Footer
     */

    #footer {
      display: flex;
      z-index: 0;
      min-height: fit-content;
      justify-content: flex-end;
      padding: 15px 20px 15px 20px;
      border-top-width: 1px;
      border-top-style: solid;
    }
    #footer:empty {
      display: none;
    }

    #footer x-button {
      width: 100%;
    }

    #footer x-progressbar {
      position: absolute;
      bottom: 0px;
      left: 0px;
      width: 100%;
      border-radius: 0;
      box-shadow: none;
      background: none;
      height: 4px;
    }
  `;
  #g;
  constructor() {
    super();
    let a7 = this.constructor.t;
    let a8 = this.constructor.l;
    this.#g = this.attachShadow({
      mode: "closed",
    });
    this.#g.adoptedStyleSheets = [
      a2.themeStyleSheet,
      ee.#b,
      this.constructor._shadowStyleSheet,
    ];
    this.#g.append(document.importNode(ee.#d.content, true));
    if (a7) {
      this.#g
        .querySelector("#main")
        .append(document.importNode(a7.content, true));
    }
    if (a8) {
      this.#g
        .querySelector("#footer")
        .append(document.importNode(a8.content, true));
    }
    for (let a9 of this.#g.querySelectorAll("[id]")) {
      this["#" + a9.id] = a9;
    }
    this.setAttribute("extends", "bx-generator");
    this.setAttribute("tabindex", "0");
  }
}
let te = (a7, a8 = "xml", a9 = 2) => {
  a7 = a7.cloneNode(true);
  let aa;
  let ab = document.createNodeIterator(a7, NodeFilter.SHOW_ELEMENT);
  while ((aa = ab.nextNode())) {
    if (aa.nodeType == Node.ELEMENT_NODE) {
      if (aa.localName === "defs") {
        if (aa.children.length === 0) {
          aa.remove();
        }
      } else if (aa.localName === "style") {
        if (aa.textContent.replace(/\s+/g, " ").trim() === "") {
          aa.remove();
        } else if (aa.matches('[data-bx-fonts="google"]')) {
          aa.removeAttribute("data-bx-fonts");
        }
      } else if (a8 === "xml" && aa.localName === "path") {
        let ac = aa.getAttribute("d");
        if (ac && /[\t\n\r]/.test(ac)) {
          aa.setAttribute("d", ac.replace(/[\t\n\r ]+/g, " "));
        }
      }
    }
  }
  ne(a7, a8);
  ((ad, af = 2, ag = 1) => {
    P(ad);
    let ah = "";
    let ai = {
      text: true,
      textPath: true,
      tspan: true,
      title: true,
      desc: true,
    };
    for (let ak = 0; ak < af; ak += 1) {
      ah += " ";
    }
    let aj = (al, am = 2) => {
      if (!ai[al.localName]) {
        for (let an of al.children) {
          let ao = al.firstChild === an;
          let ap = al.lastChild === an;
          if (ao === true) {
            let as = document.createTextNode("\n");
            an.parentNode.insertBefore(as, an);
          }
          let aq = "";
          for (let at = 0; at < am; at += 1) {
            aq += ah;
          }
          let ar = document.createTextNode(aq);
          al.insertBefore(ar, an);
          if (ap === true) {
            let au = document.createTextNode("\n");
            al.appendChild(au);
            let av = "";
            for (let ax = 0; ax < am - 1; ax += 1) {
              av += ah;
            }
            let aw = document.createTextNode(av);
            al.appendChild(aw);
          } else {
            let ay = document.createTextNode("\n");
            al.insertBefore(ay, an.nextSibling);
          }
          if (an.childElementCount > 0) {
            aj(an, am + 1);
          }
        }
      }
    };
    aj(ad, ag);
  })(a7, a9);
  return ie(a7, a8);
};
let ie = (a7, a8 = "xml") => {
  let a9;
  if (a8 === "xml") {
    a9 = new XMLSerializer().serializeToString(a7);
    if (a9.trim().length === 0) {
      throw new Error("Failed to serialize artwork");
    }
    a9 = '<?xml version="1.0" encoding="utf-8"?>\n' + a9;
  } else if (a8 === "html") {
    a9 = a7.outerHTML;
    if (a9.trim().length === 0) {
      throw new Error("Failed to serialize artwork");
    }
    a9 = "<!doctype html>\n" + a9;
    a9 = A(a9, ' xmlns:xlink="http://www.w3.org/1999/xlink"', "");
  }
  {
    let aa = 0;
    while (true) {
      let ab = a9.indexOf('style="', aa);
      let ac = -1;
      if (ab > -1) {
        ac = a9.indexOf('"', ab + 7);
      }
      if (ab === -1 || ac === -1) {
        break;
      }
      {
        let ad = a9.substring(0, ab);
        let af = a9.substring(ac + 1);
        let ag = a9.substring(ab, ac + 1).replaceAll("&quot;", "'");
        a9 = ad + ag + af;
        aa = ab + ag.length;
        aa = ac + 1;
      }
    }
  }
  return a9;
};
let ne = (a7, a8) => {
  if (a8 === "xml") {
    let a9;
    let aa = document.createNodeIterator(a7, NodeFilter.SHOW_ELEMENT);
    let ab = false;
    let ac = false;
    while ((a9 = aa.nextNode())) {
      if (a9.localName !== "bx-title") {
        if (a9.localName.startsWith("bx-")) {
          let ad = document.createElementNS(
            o,
            "bx:" + a9.localName.substring(3)
          );
          for (let af of [...a9.attributes]) {
            ad.setAttribute(af.name, af.value);
          }
          for (let ag of [...a9.childNodes]) {
            ad.append(ag);
          }
          a9.replaceWith(ad);
          ac = true;
        } else {
          for (let { name, value } of [...a9.attributes]) {
            if (name === "href" || name === "_href") {
              a9.setAttribute("xlink:href", value);
              a9.removeAttribute(name);
              ab = true;
            } else if (name.startsWith("data-bx-")) {
              let aj = name.substring(8);
              a9.setAttributeNS(o, "bx:" + aj, value);
              a9.removeAttribute(name);
              ac = true;
            }
          }
        }
      } else {
        let ak = Q("svg:title");
        ak.innerHTML = a9.innerHTML;
        for (let { name, value } of a9.attributes) {
          ak.setAttribute(name, value);
        }
        a9.replaceWith(ak);
      }
    }
    a7.removeAttribute("xmlns");
    a7.removeAttribute("xmlns:bx");
    a7.removeAttribute("xmlns:xlink");
    a7.setAttributeNS(h, "xmlns", r);
    if (ab) {
      a7.setAttributeNS(h, "xmlns:xlink", p);
    }
    if (ac) {
      a7.setAttributeNS(h, "xmlns:bx", o);
    }
  } else if (a8 === "html") {
    let an;
    let ao = document.createNodeIterator(a7, NodeFilter.SHOW_ELEMENT);
    while ((an = ao.nextNode())) {
      if (an.localName !== "bx-title") {
        for (let { name, value } of [...an.attributes]) {
          if (name === "href" || name === "_href") {
            an.setAttribute("xlink:href", value);
            an.removeAttribute(name);
          }
        }
      } else {
        let ar = Q("svg:title");
        ar.innerHTML = an.innerHTML;
        for (let { name, value } of an.attributes) {
          ar.setAttribute(name, value);
        }
        an.replaceWith(ar);
      }
    }
  }
};
let ae = (a7, a8 = "png", a9 = {}) =>
  new Promise(async (aa) => {
    if (a8 === "png") {
      let ab = new Blob([a7], {
        type: "image/svg+xml;charset=utf-8",
      });
      let ac = URL.createObjectURL(ab);
      let ad = new Image();
      ad.src = ac;
      ad.addEventListener(
        "load",
        async () => {
          let af = a9.dpi || 96;
          let ag = a9.colors || 0;
          let ah = a9.background || "rgba(0, 0, 0, 0)";
          let ai = new OffscreenCanvas(ad.naturalWidth, ad.naturalHeight);
          let aj = ai.getContext("2d");
          aj.fillStyle = ah;
          aj.fillRect(0, 0, ad.naturalWidth, ad.naturalHeight);
          aj.drawImage(ad, 0, 0);
          let ak = (await import("../../libs/upng/upng.js")).default;
          let { changeDpiBlob } = await import(
            "../../libs/change-dpi/change-dpi.js"
          );
          let am = aj.getImageData(0, 0, ai.width, ai.height);
          let an = ak.encode([am.data.buffer], am.width, am.height, ag);
          let ao = new Uint8Array(an);
          let ap = new Blob([ao], {
            type: "image/png",
          });
          ap = changeDpiBlob(ap, af);
          URL.revokeObjectURL(ac);
          aa(ap);
        },
        {
          once: true,
        }
      );
    } else if (a8 === "jpeg" || a8 === "jpg") {
      let af = new Blob([a7], {
        type: "image/svg+xml;charset=utf-8",
      });
      let ag = URL.createObjectURL(af);
      let ah = new Image();
      ah.src = ag;
      ah.addEventListener(
        "load",
        async () => {
          let ai = a9.dpi || 96;
          let aj = a9.background || "rgb(255, 255, 255)";
          let ak = a9.compression || 1;
          let al = new OffscreenCanvas(ah.naturalWidth, ah.naturalHeight);
          let am = al.getContext("2d");
          am.fillStyle = "white";
          am.fillRect(0, 0, ah.naturalWidth, ah.naturalHeight);
          am.fillStyle = aj;
          am.fillRect(0, 0, ah.naturalWidth, ah.naturalHeight);
          am.drawImage(ah, 0, 0);
          let { changeDpiBlob } = await import(
            "../../libs/change-dpi/change-dpi.js"
          );
          let ao = await al.convertToBlob({
            type: "image/jpeg",
            quality: ak,
          });
          ao = changeDpiBlob(ao, ai);
          URL.revokeObjectURL(ag);
          aa(ao);
        },
        {
          once: true,
        }
      );
    } else if (a8 === "gif") {
      let ai = new Blob([a7], {
        type: "image/svg+xml;charset=utf-8",
      });
      let aj = URL.createObjectURL(ai);
      let ak = new Image();
      ak.src = aj;
      ak.addEventListener(
        "load",
        async () => {
          let al = new x(a9.background || "#ffffff");
          al = al.to("srgb").toString({
            format: "hex",
          });
          let am = a9.transparent || false;
          let an = false;
          if (a9.dithering === "floyd-steinberg") {
            an = "FloydSteinberg";
          } else if (a9.dithering === "false-floyd-steinberg") {
            an = "FalseFloydSteinberg";
          } else if (a9.dithering === "stucki") {
            an = "Stucki";
          } else if (a9.dithering === "atkinson") {
            an = "Atkinson";
          }
          let ao = new OffscreenCanvas(
            ak.naturalWidth,
            ak.naturalHeight
          ).getContext("2d");
          ao.fillStyle = al;
          ao.fillRect(0, 0, ak.naturalWidth, ak.naturalHeight);
          ao.drawImage(ak, 0, 0);
          let ap = ao.getImageData(0, 0, ak.naturalWidth, ak.naturalHeight);
          let aq = new (0, (await import("../../libs/gif/gif.js")).default)({
            workers: 2,
            quality: 1,
            dither: an,
            transparent: am ? parseInt("0x" + al.substring(1)) : null,
            workerScript: "libs/gif/gif.worker.js",
          });
          aq.addFrame(ap);
          aq.render();
          aq.on("finished", (ar) => {
            aa(ar);
          });
        },
        {
          once: true,
        }
      );
    } else if (a8 === "webp") {
      let al = new Blob([a7], {
        type: "image/svg+xml;charset=utf-8",
      });
      let am = URL.createObjectURL(al);
      let an = new Image();
      an.src = am;
      an.addEventListener(
        "load",
        async () => {
          let ao = a9.background || "rgba(255, 255, 255, 0)";
          let ap = a9.compression || 1;
          let aq = new OffscreenCanvas(an.naturalWidth, an.naturalHeight);
          let ar = aq.getContext("2d");
          ar.fillStyle = ao;
          ar.fillRect(0, 0, an.naturalWidth, an.naturalHeight);
          ar.drawImage(an, 0, 0);
          let as = await aq.convertToBlob({
            type: "image/webp",
            quality: ap,
          });
          URL.revokeObjectURL(am);
          aa(as);
        },
        {
          once: true,
        }
      );
    }
  });
class le extends ee {
  static t = w` <template> <section id="options-section"> <h3 id="options-heading"><x-message href="#options" autocapitalize></x-message></h3> <section id="format-subsection"> <h4 id="format-heading"><x-message href="#format" autocapitalize></x-message></h4> <x-buttons id="format-buttons" tracking="1"> <x-button id="png-format-button" value="png" toggled><x-label>PNG</x-label></x-button> <x-button id="jpeg-format-button" value="jpeg"><x-label>JPEG</x-label></x-button> </x-buttons> </section> <section id="ppu-subsection"> <h4 id="ppu-heading"><x-message href="#pixels-per-unit" autocapitalize></x-message></h4> <x-box id="ppu-box"> <x-slider id="ppu-slider" value="1" min="0.1" max="5" step="0.1"></x-slider> <x-numberinput id="ppu-input" value="1" min="0.1" max="5" step="0.1" condensed> <x-stepper></x-stepper> </x-numberinput> </x-box> </section> <section id="dpi-subsection"> <h4 id="dpi-heading"><x-message href="#dpi" autocapitalize></x-message></h4> <x-box id="dpi-box"> <x-slider id="dpi-slider" value="96" min="1" max="400" step="1"></x-slider> <x-numberinput id="dpi-input" value="96" min="1" step="1" condensed> <x-stepper></x-stepper> </x-numberinput> </x-box> </section> <section id="colors-subsection"> <h4 id="colors-heading"><x-message href="#colors" autocapitalize></x-message></h4> <x-buttons id="colors-mode-buttons" tracking="1"> <x-button id="colors-rgb-button" value="rgb" toggled> <x-label>RGB</x-label> </x-button> <x-button id="colors-palette-button" value="palette"> <x-label>Palette</x-label> </x-button> </x-buttons> <x-box id="colors-box" hidden> <x-slider id="colors-slider" value="256" min="3" max="256" step="1"></x-slider> <x-numberinput id="colors-input" value="256" min="3" max="256" step="1" condensed> <x-stepper></x-stepper> </x-numberinput> </x-box> </section> <section id="compression-subsection"> <h4 id="compression-heading"><x-message href="#compression" autocapitalize></x-message></h4> <x-box> <x-slider id="compression-slider" value="1" min="0.01" max="1" step="0.01"></x-slider> <x-numberinput id="compression-input" value="1" min="0.01" max="1" step="0.01" condensed> <x-stepper></x-stepper> </x-numberinput> </x-box> </section> <section id="background-subsection"> <h4 id="background-heading"><x-message href="#background" autocapitalize></x-message></h4> <x-colorselect id="background-select" value="rgb(255, 255, 255)" spaces="srgb"></x-colorselect> </section> </section> <hr> <section id="preview-section"> <h3 id="preview-heading"><x-message href="#preview" autocapitalize></x-message></h3> <x-button id="preview-button"> <x-label><x-message href="#generate" autocapitalize></x-message></x-label> </x-button> <image id="preview" part="preview" hidden></image> <x-label id="preview-label" hidden></x-label> </section> </template>
  `;
  static l = w` <template> <x-button id="generate-button" size="large"> <x-icon href="#generators-panel"></x-icon> <x-label>Rasterize</x-label> </x-button> </template>
  `;
  static _shadowStyleSheet = v`#format-buttons{width:100%}#format-buttons x-button{flex:1}#ppu-subsection{margin-top:14px}#ppu-subsection x-box{width:100%}#ppu-heading{margin-bottom:0}#ppu-slider{flex:1}#ppu-input{margin-left:10px;width:60px}#dpi-subsection{margin-top:8px}#dpi-subsection x-box{width:100%}#dpi-heading{margin-bottom:0}#dpi-slider{flex:1}#dpi-input{width:60px;margin-left:10px}#colors-subsection{margin-top:10px}#colors-mode-buttons{width:100%}#colors-mode-buttons x-button{flex:1}#colors-box{margin-top:6px}#colors-box[hidden]{display:none}#colors-slider{flex:1}#colors-input{margin-left:10px;width:60px}#compression-subsection{margin-top:10px}#compression-subsection x-box{width:100%}#compression-heading{margin-bottom:0}#compression-slider{flex:1}#compression-input{margin-left:10px;width:60px}#background-subsection{margin-top:10px}#preview{display:block;margin:0 auto;width:auto;height:auto;max-height:140px;max-width:100%}#preview-label{margin-top:7px;text-align:center;font-weight:500;font-size:12px;opacity:.7}`;
  #f;
  #x;
  #y;
  #k = false;
  constructor() {
    super();
    this["#format-buttons"].addEventListener("toggle", () => this.#w());
    this["#ppu-box"].addEventListener("changestart", (a7) => this.#v(a7));
    this["#dpi-box"].addEventListener("changestart", (a7) => this.#U(a7));
    this["#colors-mode-buttons"].addEventListener("toggle", () => this.#N());
    this["#colors-slider"].addEventListener("changestart", () => this.#C());
    this["#colors-input"].addEventListener("changestart", () => this.#A());
    this["#compression-slider"].addEventListener("changestart", () =>
      this.#F()
    );
    this["#compression-input"].addEventListener("changestart", () => this.#T());
    this["#background-select"].addEventListener("changeend", () => this.#P());
    this["#background-select"].addEventListener("collapse", () => this.#S());
    this["#preview-button"].addEventListener("click", () => this.#M());
    this["#generate-button"].addEventListener("click", () => this.#E());
  }
  connectedCallback() {
    this.#f = Z(this, "bx-editor");
    let a7 = this.#f.board;
    let a8 = a2.getConfig("bx-rasterizegenerator:format", "png");
    let a9 = a2.getConfig("bx-rasterizegenerator:ppu", 1);
    let aa = a2.getConfig("bx-rasterizegenerator:dpi", 96);
    let ab = a2.getConfig("bx-rasterizegenerator:colorsMode", "rgb");
    let ac = a2.getConfig("bx-rasterizegenerator:colors", 256);
    let ad = a2.getConfig("bx-rasterizegenerator:compression", 1);
    let af = a2.getConfig(
      "bx-rasterizegenerator:background",
      "rgb(255, 255, 255)"
    );
    this["#format-buttons"].value = a8;
    this["#ppu-slider"].value = a9;
    this["#ppu-input"].value = a9;
    this["#dpi-slider"].value = aa;
    this["#dpi-input"].value = aa;
    this["#colors-mode-buttons"].value = ab;
    this["#colors-slider"].value = ac;
    this["#colors-input"].value = ac;
    this["#compression-slider"].value = ad;
    this["#compression-input"].value = ad;
    this["#background-select"].value = af;
    this.#z();
    a7.addEventListener(
      "selectedelementschange",
      (this.#x = () => {
        this.#D();
      })
    );
    a7.addEventListener(
      "workspacemutation",
      (this.#y = () => {
        this.#V();
      })
    );
  }
  disconnectedCallback() {
    let a7 = this.#f.board;
    a7.removeEventListener("selectedelementschange", this.#x);
    a7.removeEventListener("workspacemutation", this.#y);
  }
  #D() {
    this.#B();
    this.#z();
  }
  #V() {
    this.#B();
    this.#z();
  }
  #w() {
    a2.setConfig("bx-rasterizegenerator:format", this["#format-buttons"].value);
    this.#B();
    this.#z();
  }
  #v(a7) {
    let a8;
    let a9;
    this.#B();
    this["#ppu-box"].addEventListener(
      "change",
      (a8 = (aa) => {
        if (aa.target === this["#ppu-slider"]) {
          this["#ppu-input"].value = this["#ppu-slider"].value;
        } else if (aa.target === this["#ppu-input"]) {
          this["#ppu-slider"].value = this["#ppu-input"].value;
        }
        this.#z();
      })
    );
    this["#ppu-box"].addEventListener(
      "changeend",
      (a9 = () => {
        this["#ppu-box"].removeEventListener("change", a8);
        this["#ppu-box"].removeEventListener("changeend", a9);
        a2.setConfig("bx-rasterizegenerator:ppu", this["#ppu-slider"].value);
      })
    );
  }
  #U(a7) {
    let a8;
    let a9;
    this["#dpi-box"].addEventListener(
      "change",
      (a8 = (aa) => {
        if (aa.target === this["#dpi-slider"]) {
          this["#dpi-input"].value = this["#dpi-slider"].value;
        } else if (aa.target === this["#dpi-input"]) {
          this["#dpi-slider"].value = this["#dpi-input"].value;
        }
      })
    );
    this["#dpi-box"].addEventListener(
      "changeend",
      (a9 = () => {
        this["#dpi-box"].removeEventListener("change", a8);
        this["#dpi-box"].removeEventListener("changeend", a9);
        a2.setConfig("bx-rasterizegenerator:dpi", this["#dpi-slider"].value);
      })
    );
  }
  #N() {
    this["#colors-box"].hidden =
      this["#colors-mode-buttons"].value !== "palette";
    a2.setConfig(
      "bx-rasterizegenerator:colorsMode",
      this["#colors-mode-buttons"].value
    );
    this.#B();
  }
  #C() {
    let a7;
    let a8;
    this["#colors-slider"].addEventListener(
      "change",
      (a7 = () => {
        this["#colors-input"].value = this["#colors-slider"].value;
      })
    );
    this["#colors-slider"].addEventListener(
      "changeend",
      (a8 = () => {
        this["#colors-slider"].removeEventListener("change", a7);
        this["#colors-slider"].removeEventListener("changeend", a8);
        a2.setConfig(
          "bx-rasterizegenerator:colors",
          this["#colors-slider"].value
        );
        this.#B();
      })
    );
  }
  #A() {
    let a7;
    let a8;
    this["#colors-input"].addEventListener(
      "change",
      (a7 = () => {
        this["#colors-slider"].value = this["#colors-input"].value;
      })
    );
    this["#colors-input"].addEventListener(
      "changeend",
      (a8 = () => {
        this["#colors-input"].removeEventListener("change", a7);
        this["#colors-input"].removeEventListener("changeend", a8);
        a2.setConfig(
          "bx-rasterizegenerator:colors",
          this["#colors-input"].value
        );
        this.#B();
      })
    );
  }
  #F() {
    let a7;
    let a8;
    this["#compression-slider"].addEventListener(
      "change",
      (a7 = () => {
        this["#compression-input"].value = this["#compression-slider"].value;
        a2.setConfig(
          "bx-rasterizegenerator:compression",
          this["#compression-slider"].value
        );
      })
    );
    this["#compression-slider"].addEventListener(
      "changeend",
      (a8 = () => {
        this["#compression-slider"].removeEventListener("change", a7);
        this["#compression-slider"].removeEventListener("changeend", a8);
        this.#B();
      })
    );
  }
  #T() {
    let a7;
    let a8;
    this["#compression-input"].addEventListener(
      "change",
      (a7 = () => {
        this["#compression-slider"].value = this["#compression-input"].value;
        a2.setConfig(
          "bx-rasterizegenerator:compression",
          this["#compression-input"].value
        );
      })
    );
    this["#compression-input"].addEventListener(
      "changeend",
      (a8 = () => {
        this["#compression-input"].removeEventListener("change", a7);
        this["#compression-input"].removeEventListener("changeend", a8);
        this.#B();
      })
    );
  }
  #P() {
    this.#k = true;
  }
  #S() {
    if (this.#k) {
      this.#k = false;
      a2.setConfig(
        "bx-rasterizegenerator:background",
        this["#background-select"].value
      );
      this.#B();
    }
  }
  #M() {
    this.#R();
  }
  async #E() {
    let a7 = this.#f.board;
    let a8 = this["#format-buttons"].value;
    let a9 = this["#ppu-input"].value;
    let aa = this["#dpi-input"].value;
    let ab = a7.extractArtworkWithSelectedElements();
    let ac = a7.vectorCanvas.getScreenCTM();
    let ad = s.fromString(ab.getAttribute("viewBox")).toRect();
    let af = K(ad, ac);
    let ag = [...a7.outermostSelectedElements];
    ab.setAttribute("width", f(ad.width * a9, 0) + "px");
    ab.setAttribute("height", f(ad.height * a9, 0) + "px");
    ab.setAttribute("preserveAspectRatio", "none");
    let ah = {};
    if (a8 === "png") {
      ah = {
        dpi: aa,
        colors:
          this["#colors-mode-buttons"].value === "rgb"
            ? 0
            : this["#colors-slider"].value,
      };
    } else if (a8 === "jpeg") {
      ah = {
        dpi: aa,
        background: this["#background-select"].value,
        compression: this["#compression-input"].value,
      };
    }
    let ai = te(ab);
    let aj = await ae(ai, a8, ah);
    let ak = await C(aj);
    this.#f.board.undoManager.checkpoint(
      ["#generators.rasterize"],
      "#generators-panel"
    );
    a7.insertBitmapIntoBBox(ak, af);
    for (let al of ag) {
      al.remove();
    }
  }
  async #R() {
    this["#preview-button"].hidden = true;
    this["#preview-label"].hidden = false;
    this["#preview-label"].innerHTML =
      '<x-message href="#generating-preview" ellipsis></x-message>';
    let a7 = this["#format-buttons"].value;
    let a8 = this["#ppu-input"].value;
    let a9 = this.#f.board.extractArtworkWithSelectedElements();
    let aa = f(a9.viewBox.baseVal.width * a8, 0);
    let ab = f(a9.viewBox.baseVal.height * a8, 0);
    a9.setAttribute("width", aa + "px");
    a9.setAttribute("height", ab + "px");
    a9.setAttribute("preserveAspectRatio", "none");
    let ac = {};
    if (a7 === "png") {
      ac = {
        colors:
          this["#colors-mode-buttons"].value === "rgb"
            ? 0
            : this["#colors-slider"].value,
      };
    } else if (a7 === "jpeg") {
      ac = {
        background: this["#background-select"].value,
        compression: this["#compression-input"].value,
      };
    }
    let ad = te(a9);
    let af = await ae(ad, a7, ac);
    let ag = await C(af);
    let ah = f(ag.length);
    this["#preview-heading"].disabled = false;
    this["#preview-button"].hidden = true;
    this["#preview"].hidden = false;
    this["#preview"].setAttribute("src", ag);
    this["#preview"].setAttribute("width", aa);
    this["#preview"].setAttribute("height", ab);
    this["#preview-label"].hidden = false;
    this["#preview-label"].innerHTML =
      '<x-message href="#size"></x-message>: ' +
      ((ai) => {
        let aj = "";
        let ak = U ? 1000 : 1024;
        if (ai < ak) {
          aj =
            ai +
            (' <x-message href="#file-size-bytes-suffix" args="count: ' +
              ai +
              '"></x-message>');
        } else if (ai < ak * ak) {
          let al = U ? " KB" : " KiB";
          aj = f(ai / ak, 0) + al;
        } else if (ai < ak * ak * ak) {
          let am = U ? " MB" : " MiB";
          aj = f(ai / (ak * ak), 2) + am;
        } else {
          let an = U ? " GB" : " GiB";
          aj = f(ai / (ak * ak * ak), 2) + an;
        }
        return aj;
      })(ah);
    this["#preview-section"].scrollIntoViewIfNeeded();
  }
  #B() {
    this["#preview-button"].hidden = false;
    this["#preview"].hidden = true;
    this["#preview-label"].hidden = true;
  }
  #z() {
    let a7 = this.#f.board;
    let a8 = null;
    if (a7.outermostSelectedObjectElements.length > 0) {
      a8 = J(
        a7.outermostSelectedObjectElements.map((a9) => {
          let aa = ((ac, ad, af = false) => {
            let ag;
            if (af === false) {
              ag = DOMMatrix.fromMatrix(
                ad.getScreenCTM().inverse().multiply(ac.getScreenCTM())
              );
            } else {
              let ah = null;
              let ai = false;
              let aj = null;
              let ak = false;
              if (ac.localName === "path") {
                let al = ac.ownerSVGElement.querySelector(
                  'textPath[href="#' + CSS.escape(ac.id) + '"]'
                );
                ah = al ? al.closest("text") : null;
                ai = !!al && ac.closest("defs") !== null;
              }
              if (ad.localName === "path") {
                let am = ac.ownerSVGElement.querySelector(
                  'textPath[href="#' + CSS.escape(ad.id) + '"]'
                );
                aj = am ? am.closest("text") : null;
                ak = !!am && ad.closest("defs") !== null;
              }
              ag =
                ai && ak
                  ? D(aj)
                      .multiply(z(ad))
                      .inverse()
                      .multiply(D(ah))
                      .multiply(z(ac))
                  : ai
                  ? D(ad).inverse().multiply(D(ah)).multiply(z(ac))
                  : ak
                  ? D(aj).multiply(z(ad)).inverse().multiply(D(ac))
                  : D(ad).inverse().multiply(D(ac));
            }
            return ag;
          })(a9, a7.currentWorkspace);
          let ab = R(a9);
          return K(ab, aa);
        })
      );
    }
    if (a8?.width > 0 && a8?.height > 0) {
      this["#options-heading"].disabled = false;
      this["#format-heading"].disabled = false;
      this["#png-format-button"].disabled = false;
      this["#jpeg-format-button"].disabled = false;
      this["#ppu-heading"].disabled = false;
      this["#ppu-slider"].disabled = false;
      this["#ppu-input"].disabled = false;
      this["#dpi-heading"].disabled = false;
      this["#dpi-slider"].disabled = false;
      this["#dpi-input"].disabled = false;
      this["#colors-heading"].disabled = false;
      this["#colors-rgb-button"].disabled = false;
      this["#colors-palette-button"].disabled = false;
      this["#colors-slider"].disabled = false;
      this["#colors-input"].disabled = false;
      this["#compression-heading"].disabled = false;
      this["#compression-slider"].disabled = false;
      this["#compression-input"].disabled = false;
      this["#background-heading"].disabled = false;
      this["#background-select"].disabled = false;
      this["#preview-heading"].disabled = false;
      this["#preview-button"].disabled = false;
      this["#generate-button"].disabled = false;
    } else {
      this["#options-heading"].disabled = true;
      this["#format-heading"].disabled = true;
      this["#png-format-button"].disabled = true;
      this["#jpeg-format-button"].disabled = true;
      this["#ppu-heading"].disabled = true;
      this["#ppu-slider"].disabled = true;
      this["#ppu-input"].disabled = true;
      this["#dpi-heading"].disabled = true;
      this["#dpi-slider"].disabled = true;
      this["#dpi-input"].disabled = true;
      this["#colors-heading"].disabled = true;
      this["#colors-rgb-button"].disabled = true;
      this["#colors-palette-button"].disabled = true;
      this["#colors-slider"].disabled = true;
      this["#colors-input"].disabled = true;
      this["#compression-heading"].disabled = true;
      this["#compression-slider"].disabled = true;
      this["#compression-input"].disabled = true;
      this["#background-heading"].disabled = true;
      this["#background-select"].disabled = true;
      this["#preview-heading"].disabled = true;
      this["#preview-button"].disabled = true;
      this["#generate-button"].disabled = true;
    }
    if (this["#format-buttons"].value === "png") {
      this["#colors-subsection"].hidden = false;
      this["#compression-subsection"].hidden = true;
      this["#background-subsection"].hidden = true;
      if (this["#colors-mode-buttons"].value === "palette") {
        this["#colors-box"].hidden = false;
      } else {
        this["#colors-box"].hidden = true;
      }
    } else if (this["#format-buttons"].value === "jpeg") {
      this["#colors-subsection"].hidden = true;
      this["#compression-subsection"].hidden = false;
      this["#background-subsection"].hidden = false;
    }
  }
}
customElements.define("bx-rasterizegenerator", le);
