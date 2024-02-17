import a2 from "/libs/xel/xel.js";
import a3 from "/libs/color/color.js";
import a4 from "/libs/css-parser/css-parser.js";
import "/libs/paper/paper.js";
import "/libs/seed-random/seed-random.js";
import a5 from "/libs/dom-purify/dom-purify.js";
import a6 from "/libs/dexie/dexie.js";
import a7 from "/libs/typesense/typesense.js";
import "/libs/pako/pako.js";
const r = "https://boxy-svg.com";
const s = "http://www.w3.org/2000/svg";
const o = "http://www.w3.org/1999/xlink";
const p = "http://www.w3.org/2000/xmlns/";
const m = ["circle", "ellipse", "line", "path", "polygon", "polyline", "rect"];
const u = ["text", "textPath", "tspan"];
const h = [...m, ...u, "foreignObject", "image"];
const f = [...m, ...u];
const c = ["solidcolor", "linearGradient", "radialGradient", "pattern"];
const d = ["bx-title", "desc", "metadata"];
const g = ["svg", "g", "defs", "symbol", "use"];
const b = [
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDropShadow",
  "feFlood",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMorphology",
  "feOffset",
  "feSpecularLighting",
  "feTile",
  "feTurbulence",
];
const y = ["feFuncA", "feFuncB", "feFuncG", "feFuncR"];
const x = ["feDistantLight", "fePointLight", "feSpotLight"];
const w = ["animate", "animateMotion", "animateTransform", "set"];
const k = [
  ...h,
  ...c,
  ...d,
  ...g,
  ...b,
  ...y,
  ...x,
  ...w,
  "a",
  "marker",
  "mask",
  "feMergeNode",
  "filter",
  "clipPath",
  "stop",
  "script",
  "style",
  "view",
];
const v = [
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
];
const N = {
  a: [
    ...w,
    ...d,
    ...c,
    ...m,
    ...g,
    "a",
    "clipPath",
    "filter",
    "image",
    "marker",
    "mask",
    "script",
    "style",
    "text",
    "view",
    "#text",
  ],
  animate: [...d, "script"],
  animateMotion: [...d, "script", "mpath"],
  animateTransform: [...d, "script"],
  "bx-title": ["#text"],
  circle: [...w, ...d, ...c, "clipPath", "marker", "mask", "script", "style"],
  clipPath: [...w, ...d, ...m, "text", "use", "script", "style"],
  defs: [
    ...w,
    ...d,
    ...c,
    ...m,
    ...g,
    "a",
    "clipPath",
    "filter",
    "image",
    "marker",
    "mask",
    "script",
    "style",
    "text",
    "view",
    "bx-grid",
    "bx-guide",
  ],
  desc: ["#text"],
  ellipse: [...w, ...d, ...c, "clipPath", "marker", "mask", "script", "style"],
  feBlend: [...d, "animate", "set", "script", "style"],
  feColorMatrix: [...d, "animate", "set", "script", "style"],
  feComponentTransfer: [...d, ...y, "script", "style"],
  feComposite: [...d, "animate", "set", "script", "style"],
  feConvolveMatrix: [...d, "animate", "set", "script", "style"],
  feDiffuseLighting: [...d, ...x, "script", "style"],
  feDisplacementMap: [...d, "animate", "set", "script", "style"],
  feDistantLight: [...d, "animate", "set", "script", "style"],
  feDropShadow: [...d, "animate", "set", "script", "style"],
  feFlood: [...d, "animate", "set", "script", "style"],
  feFuncR: [...d, "animate", "set", "script", "style"],
  feFuncG: [...d, "animate", "set", "script", "style"],
  feFuncB: [...d, "animate", "set", "script", "style"],
  feFuncA: [...d, "animate", "set", "script", "style"],
  feGaussianBlur: [...d, "animate", "set", "script", "style"],
  feImage: [...d, "animate", "set", "script", "style"],
  feMerge: [...d, "feMergeNode", "script", "style"],
  feMergeNode: [...d, "animate", "set", "script", "style"],
  feMorphology: [...d, "animate", "set", "script", "style"],
  feOffset: [...d, "animate", "set", "script", "style"],
  fePointLight: [...d, "animate", "set", "script", "style"],
  feSpecularLighting: [...d, ...x, "script", "style"],
  feSpotLight: [...d, "animate", "set", "script", "style"],
  feTile: [...d, "animate", "set", "script", "style"],
  feTurbulence: [...d, "animate", "set", "script", "style"],
  filter: [...d, ...b, "animate", "set", "script", "style"],
  g: [
    ...w,
    ...d,
    ...c,
    ...m,
    ...g,
    "a",
    "clipPath",
    "filter",
    "image",
    "marker",
    "mask",
    "script",
    "style",
    "text",
    "view",
  ],
  image: [...w, ...d, "clipPath", "mask", "script", "style"],
  line: [...w, ...d, ...c, "clipPath", "marker", "mask", "script", "style"],
  linearGradient: [
    ...d,
    "animate",
    "animateTransform",
    "set",
    "script",
    "stop",
    "style",
  ],
  marker: [
    ...d,
    ...c,
    ...m,
    ...g,
    "animate",
    "animateMotion",
    "animateTransform",
    "set",
    "a",
    "clipPath",
    "filter",
    "image",
    "marker",
    "mask",
    "script",
    "style",
    "text",
    "view",
  ],
  mask: [
    ...w,
    ...d,
    ...m,
    ...g,
    ...c,
    "a",
    "clipPath",
    "filter",
    "image",
    "marker",
    "mask",
    "script",
    "style",
    "text",
    "view",
    "text",
  ],
  mpath: [...d, "script"],
  path: [...w, ...d, ...c, "clipPath", "marker", "mask", "script", "style"],
  pattern: [
    ...d,
    ...c,
    ...m,
    ...g,
    "animate",
    "animateMotion",
    "animateTransform",
    "set",
    "a",
    "clipPath",
    "filter",
    "image",
    "marker",
    "mask",
    "script",
    "style",
    "text",
    "view",
  ],
  polygon: [...w, ...d, ...c, "clipPath", "marker", "mask", "script", "style"],
  polyline: [...w, ...d, ...c, "clipPath", "marker", "mask", "script", "style"],
  radialGradient: [
    ...d,
    "animate",
    "animateTransform",
    "set",
    "script",
    "stop",
    "style",
  ],
  rect: [...w, ...d, ...c, "clipPath", "marker", "mask", "script", "style"],
  script: ["#text"],
  set: [...d, "script"],
  solidcolor: [...d, "script", "style"],
  stop: [...d, "animate", "set", "script", "style"],
  style: ["#text"],
  svg: [
    ...w,
    ...d,
    ...c,
    ...m,
    ...g,
    "a",
    "clipPath",
    "filter",
    "image",
    "marker",
    "mask",
    "script",
    "style",
    "text",
    "view",
  ],
  symbol: [
    ...d,
    ...c,
    ...m,
    ...g,
    "animate",
    "animateMotion",
    "animateTransform",
    "set",
    "a",
    "clipPath",
    "filter",
    "image",
    "marker",
    "mask",
    "script",
    "style",
    "text",
    "view",
  ],
  text: [
    ...w,
    ...d,
    ...c,
    "a",
    "clipPath",
    "marker",
    "mask",
    "script",
    "style",
    "tspan",
    "textPath",
    "#text",
  ],
  textPath: [
    ...d,
    ...c,
    "animate",
    "set",
    "a",
    "clipPath",
    "marker",
    "mask",
    "script",
    "style",
    "tspan",
    "#text",
  ],
  tspan: [
    ...d,
    ...c,
    "animate",
    "set",
    "a",
    "script",
    "style",
    "tspan",
    "#text",
  ],
  use: [...w, ...d, ...c, "clipPath", "mask", "script", "style"],
  view: [
    ...d,
    "animate",
    "animateMotion",
    "animateTransform",
    "set",
    "script",
    "style",
  ],
};
const U = [
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
    appliesTo: [...h, "svg", "g", "a", "use"],
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
    appliesTo: [...h, "use"],
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
    appliesTo: [...h, "svg", "g", "a", "use"],
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
      ...h,
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
    appliesTo: [...h, "svg", "g", "a", "use"],
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
    appliesTo: [...h, "textPath", "tspan", "svg", "g", "a", "use"],
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
    appliesTo: [...f],
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
    appliesTo: [...f],
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
    appliesTo: [...f],
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
    appliesTo: [...h, "textPath", "tspan", "g", "a", "svg", "use"],
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
      ...h,
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
    appliesTo: [...h, "g", "a", "svg", "use"],
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
        tokens: [...v, "inherit", "initial", "unset"],
      },
    ],
    appliesTo: [
      ...h,
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
      ...h,
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
    appliesTo: [...f],
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
    appliesTo: [...h, "svg", "g", "a", "use"],
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
    appliesTo: [...f],
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
    appliesTo: [...f],
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
    appliesTo: [...f],
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
    appliesTo: [...f],
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
    appliesTo: [...f],
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
    appliesTo: [...f],
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
    appliesTo: [...f],
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
    appliesTo: [...f],
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
    appliesTo: [...h, "use"],
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
    appliesTo: [...h, "text", "textPath", "tspan"],
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
];
const F = U.map((a8) => a8.presentationAttributeName).filter((a8) => a8);
let T = (a8, a9 = 0) => {
  let aa = Math.pow(10, a9);
  return Math.round((a8 + Number.EPSILON) * aa) / aa;
};
let C = (a8, a9, aa = Infinity, ab = null) => {
  if (ab !== null) {
    a8 = T(a8, ab);
  }
  if (a8 < a9) {
    a8 = a9;
  } else if (a8 > aa) {
    a8 = aa;
  }
  return a8;
};
class E extends a3 {
  get type() {
    return "<color>";
  }
  static fromString(a8, a9 = false) {
    if (a9) {
      return new E(a8);
    }
    {
      let aa = null;
      try {
        aa = new E(a8);
      } catch (ab) {}
      return aa;
    }
  }
}
class A {
  currentToken = null;
  position = 0;
  #e;
  constructor(a8) {
    this.#e = a8;
  }
  read() {
    let a8 = this.#e[this.position];
    this.currentToken = a8;
    if (a8.tokenType !== "EOF") {
      this.position += 1;
    }
    return a8;
  }
  reset(a8) {
    this.position = a8;
  }
}
class S {
  #t;
  get seconds() {
    return this.#t;
  }
  set seconds(a8) {
    this.#t = a8;
  }
  get type() {
    return "<clock-value>";
  }
  constructor(a8 = 0) {
    this.#t = a8;
  }
  static fromString(a8, a9 = false) {
    let aa = [...a4.tokenize(a8.trim()), new a4.EOFToken()];
    let ab = new A(aa);
    let ac = 0;
    ab.read();
    if (ab.currentToken.tokenType === "DIMENSION") {
      if (ab.currentToken.unit === "ms") {
        ac = ab.currentToken.value * 0.001;
      } else if (ab.currentToken.unit === "s") {
        ac = ab.currentToken.value;
      } else if (ab.currentToken.unit === "min") {
        ac = ab.currentToken.value * 60;
      } else {
        if (ab.currentToken.unit !== "h") {
          if (a9) {
            throw new DOMException(
              "Unexpected " + ab.currentToken.unit + " unit.",
              "SyntaxError"
            );
          }
          return null;
        }
        ac = ab.currentToken.value * 60 * 60;
      }
    } else {
      if (ab.currentToken.tokenType !== "NUMBER") {
        if (a9) {
          throw new DOMException(
            "Unexpected " + ab.currentToken.tokenType + " token.",
            "SyntaxError"
          );
        }
        return null;
      }
      {
        let ad = ab.currentToken;
        ab.read();
        if (ab.currentToken.tokenType === "EOF") {
          return new S(ad.value);
        }
        {
          let af = [ab.currentToken];
          for (
            ab.currentToken.tokenType === ":" &&
            (ab.read(),
            ab.currentToken.tokenType === "NUMBER" &&
              (af.push(ab.currentToken),
              ab.read(),
              ab.currentToken.tokenType === ":" &&
                (ab.read(),
                ab.currentToken.tokenType === "NUMBER" &&
                  af.push(ab.currentToken))));
            af.length < 3;

          ) {
            let aj = new a4.NumberToken();
            aj.value = 0;
            aj.repr = "00";
            aj.type = "integer";
            af.unshift(aj);
          }
          let [ag, ah, ai] = af;
          if (ag.type !== "integer" || ag.value < 0) {
            throw new DOMException("Invalid hours format.", "SyntaxError");
          }
          ac = ag.value * 60 * 60;
          if (
            ah.type !== "integer" ||
            ah.repr.length !== 2 ||
            ah.value < 0 ||
            ah.value > 59
          ) {
            throw new DOMException("Invalid minutes format.", "SyntaxError");
          }
          ac += ah.value * 60;
          if (
            ai.repr.split(".")[0].length !== 2 ||
            ai.value < 0 ||
            ai.value >= 60
          ) {
            throw new DOMException("Invalid seconds format.", "SyntaxError");
          }
          ac += ai.value;
        }
      }
    }
    ab.read();
    if (ab.currentToken.tokenType === "EOF") {
      return new S(ac);
    }
    if (a9) {
      throw new DOMException("Expected EOF token.", "SyntaxError");
    }
    return null;
  }
  toString() {
    return this.#t + "s";
  }
  clone() {
    return new S(this.#t);
  }
  compare(a8) {
    return a8.type === this.type && a8.seconds === this.seconds;
  }
}
class D {
  #i;
  #a;
  #t;
  get id() {
    return this.#i;
  }
  set id(a8) {
    this.#i = a8;
  }
  get event() {
    return this.#a;
  }
  set event(a8) {
    this.#a = a8;
  }
  get seconds() {
    return this.#t;
  }
  set seconds(a8) {
    this.#t = a8;
  }
  get type() {
    return "<event-value>";
  }
  constructor(a8 = null, a9 = "click", aa = 0) {
    this.#i = a8;
    this.#a = a9;
    this.#t = aa;
  }
  static fromString(a8, a9 = false, aa = false) {
    a8 = a8.trim();
    if (aa && a8.startsWith("#")) {
      a8 = a8.substring(1);
    }
    let ab = [...a4.tokenize(a8), new a4.EOFToken()];
    let ac = new A(ab);
    let ad = null;
    let af = null;
    ac.read();
    if (ac.currentToken.tokenType !== "IDENT") {
      if (a9) {
        throw new DOMException(
          "Unexpected " + ac.currentToken.tokenType + " token.",
          "SyntaxError"
        );
      }
      return null;
    }
    af = ac.currentToken.value;
    ac.read();
    if (ac.currentToken.tokenType === "DELIM" && ac.currentToken.value == ".") {
      ad = af;
      af = null;
      ac.read();
      if (ac.currentToken.tokenType !== "IDENT") {
        if (a9) {
          throw new DOMException(
            "Unexpected " + ac.currentToken.tokenType + " token.",
            "SyntaxError"
          );
        }
        return null;
      }
      af = ac.currentToken.value;
      ac.read();
    }
    if (ac.currentToken.tokenType === "WHITESPACE") {
      ac.read();
    }
    if (ac.currentToken.tokenType === "EOF") {
      return new D(ad, af, 0);
    }
    if (
      ac.currentToken.tokenType !== "DELIM" ||
      !["+", "-"].includes(ac.currentToken.value)
    ) {
      if (a9) {
        throw new DOMException(
          "Unexpected " + ac.currentToken.tokenType + " token.",
          "SyntaxError"
        );
      }
      return null;
    }
    {
      let ag = ac.currentToken.value === "-";
      let ah = S.fromString(a8.split(ac.currentToken.value)[1], a9);
      if (ah !== null) {
        return new D(ad, af, ag ? -ah.seconds : ah.seconds);
      }
    }
  }
  toString(a8 = false) {
    let a9 = "";
    if (this.id) {
      if (a8) {
        a9 += "#";
      }
      a9 += this.id + ".";
    }
    a9 += this.event;
    if (this.#t !== 0) {
      let aa = Math.abs(this.#t);
      if (this.#t < 0) {
        a9 += " - " + aa + "s";
      } else {
        a9 += " + " + aa + "s";
      }
    }
    return a9;
  }
  clone() {
    return new D(this.#i, this.#a, this.#t);
  }
  compare(a8) {
    return (
      a8.type === this.type &&
      a8.id === this.id &&
      a8.event === this.event &&
      a8.seconds === this.seconds
    );
  }
}
class M {
  #t;
  get seconds() {
    return this.#t;
  }
  set seconds(a8) {
    this.#t = a8;
  }
  get type() {
    return "<offset-value>";
  }
  constructor(a8 = 0) {
    this.#t = a8;
  }
  static fromString(a8, a9 = false) {
    let aa = false;
    if ((a8 = a8.trim())[0] === "-") {
      aa = true;
      a8 = a8.substring(1);
    } else if (a8[0] === "+") {
      a8 = a8.substring(1);
    }
    let ab = S.fromString(a8, a9);
    if (ab === null) {
      return null;
    } else {
      return new M(aa ? -ab.seconds : ab.seconds);
    }
  }
  toString() {
    return this.#t + "s";
  }
  clone() {
    return new M(this.#t);
  }
  compare(a8) {
    return a8.type === this.type && a8.seconds === this.seconds;
  }
}
class P {
  #i;
  #n;
  #t;
  get id() {
    return this.#i;
  }
  set id(a8) {
    this.#i = a8;
  }
  get repeat() {
    return this.#n;
  }
  set repeat(a8) {
    this.#n = a8;
  }
  get seconds() {
    return this.#t;
  }
  set seconds(a8) {
    this.#t = a8;
  }
  get type() {
    return "<repeat-value>";
  }
  constructor(a8 = null, a9 = 1, aa = 0) {
    this.#i = a8;
    this.#n = a9;
    this.#t = aa;
  }
  static fromString(a8, a9 = false, aa = false) {
    a8 = a8.trim();
    if (aa && a8.startsWith("#")) {
      a8 = a8.substring(1);
    }
    let ab = [...a4.tokenize(a8), new a4.EOFToken()];
    let ac = new A(ab);
    let ad = null;
    let af = null;
    ac.read();
    if (ac.currentToken.tokenType === "IDENT") {
      ad = ac.currentToken.value;
      ac.read();
      if (
        ac.currentToken.tokenType !== "DELIM" ||
        ac.currentToken.value != "."
      ) {
        if (a9) {
          throw new DOMException(
            "Unexpected " + ac.currentToken.tokenType + " token.",
            "SyntaxError"
          );
        }
        return null;
      }
      ac.read();
    }
    if (
      ac.currentToken.tokenType !== "FUNCTION" ||
      ac.currentToken.value !== "repeat"
    ) {
      if (a9) {
        throw new DOMException(
          "Unexpected " + ac.currentToken.tokenType + " token.",
          "SyntaxError"
        );
      }
      return null;
    }
    ac.read();
    if (
      ac.currentToken.tokenType !== "NUMBER" ||
      ac.currentToken.type !== "integer"
    ) {
      if (a9) {
        throw new DOMException(
          "Unexpected " + ac.currentToken.tokenType + " token.",
          "SyntaxError"
        );
      }
      return null;
    }
    af = ac.currentToken.value;
    ac.read();
    if (ac.currentToken.tokenType === ")") {
      ac.read();
    }
    if (ac.currentToken.tokenType === "WHITESPACE") {
      ac.read();
    }
    if (ac.currentToken.tokenType === "EOF") {
      return new P(ad, af, 0);
    }
    if (
      ac.currentToken.tokenType !== "DELIM" ||
      !["+", "-"].includes(ac.currentToken.value)
    ) {
      if (a9) {
        throw new DOMException(
          "Unexpected " + ac.currentToken.tokenType + " token.",
          "SyntaxError"
        );
      }
      return null;
    }
    {
      let ag = ac.currentToken.value === "-";
      let ah = S.fromString(a8.split(ac.currentToken.value)[1], a9);
      if (ah !== null) {
        return new P(ad, af, ag ? -ah.seconds : ah.seconds);
      }
    }
  }
  toString(a8 = false) {
    let a9 = "";
    if (this.id) {
      if (a8) {
        a9 += "#";
      }
      a9 += this.id + ".";
    }
    a9 += "repeat(" + this.repeat + ")";
    if (this.#t !== 0) {
      let aa = Math.abs(this.#t);
      if (this.#t < 0) {
        a9 += " - " + aa + "s";
      } else {
        a9 += " + " + aa + "s";
      }
    }
    return a9;
  }
  clone() {
    return new P(this.#i, this.#n, this.#t);
  }
  compare(a8) {
    return (
      a8.type === this.type &&
      a8.id === this.id &&
      a8.repeat === this.repeat &&
      a8.seconds === this.seconds
    );
  }
}
class V {
  #i;
  #l;
  #t;
  get id() {
    return this.#i;
  }
  set id(a8) {
    this.#i = a8;
  }
  get position() {
    return this.#l;
  }
  set position(a8) {
    this.#l = a8;
  }
  get seconds() {
    return this.#t;
  }
  set seconds(a8) {
    this.#t = a8;
  }
  get type() {
    return "<syncbase-value>";
  }
  constructor(a8, a9 = "end", aa = 0) {
    this.#i = a8;
    this.#l = a9;
    this.#t = aa;
  }
  static fromString(a8, a9 = false, aa = false) {
    a8 = a8.trim().replaceAll("-", " - ").replaceAll("+", " + ");
    if (aa && a8.startsWith("#")) {
      a8 = a8.substring(1);
    }
    let ab = [...a4.tokenize(a8), new a4.EOFToken()];
    let ac = new A(ab);
    let ad = null;
    let af = null;
    ac.read();
    if (ac.currentToken.tokenType !== "IDENT") {
      if (a9) {
        throw new DOMException(
          "Unexpected " + ac.currentToken.tokenType + " token.",
          "SyntaxError"
        );
      }
      return null;
    }
    ad = ac.currentToken.value;
    ac.read();
    if (
      ac.currentToken.tokenType !== "DELIM" ||
      ac.currentToken.value !== "."
    ) {
      if (a9) {
        throw new DOMException(
          "Unexpected " + ac.currentToken.tokenType + " token.",
          "SyntaxError"
        );
      }
      return null;
    }
    ac.read();
    if (
      ac.currentToken.tokenType !== "IDENT" ||
      !["begin", "end"].includes(ac.currentToken.value)
    ) {
      if (a9) {
        throw new DOMException(
          "Unexpected " + ac.currentToken.tokenType + " token.",
          "SyntaxError"
        );
      }
      return null;
    }
    af = ac.currentToken.value;
    ac.read();
    if (ac.currentToken.tokenType === "WHITESPACE") {
      ac.read();
    }
    if (ac.currentToken.tokenType === "EOF") {
      return new V(ad, af, 0);
    }
    if (ac.currentToken.tokenType === "DIMENSION") {
      ac.currentToken.value;
    } else {
      if (
        ac.currentToken.tokenType !== "DELIM" ||
        !["+", "-"].includes(ac.currentToken.value)
      ) {
        if (a9) {
          throw new DOMException(
            "Unexpected " + ac.currentToken.tokenType + " token.",
            "SyntaxError"
          );
        }
        return null;
      }
      {
        let ag = ac.currentToken.value === "-";
        let ah = S.fromString(a8.split(ac.currentToken.value)[1], a9);
        if (ah !== null) {
          return new V(ad, af, ag ? -ah.seconds : ah.seconds);
        }
      }
    }
  }
  toString(a8 = false) {
    let a9 = "";
    if (a8) {
      a9 += "#";
    }
    a9 += this.id + "." + this.position;
    if (this.#t !== 0) {
      let aa = Math.abs(this.#t);
      if (this.#t < 0) {
        a9 += " - " + aa + "s";
      } else {
        a9 += " + " + aa + "s";
      }
    }
    return a9;
  }
  clone() {
    return new V(this.#i, this.#l, this.#t);
  }
  compare(a8) {
    return (
      a8.type === this.type &&
      a8.id === this.id &&
      a8.position === this.position &&
      a8.seconds === this.seconds
    );
  }
}
const z = [
  "serif",
  "sans-serif",
  "cursive",
  "fantasy",
  "monospace",
  "system-ui",
  "emoji",
  "math",
  "fangsong",
];
const B = {
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
let O = document.createElement("template");
let R = (a8, ...a9) => {
  let aa = [];
  for (let ad = 0; ad < a8.length; ad += 1) {
    aa.push(a8[ad]);
    if (a9[ad] !== undefined) {
      aa.push(a9[ad]);
    }
  }
  let ab = aa.join("");
  O.innerHTML = ab;
  let ac = document.importNode(O.content, true);
  if (ac.children.length === 1) {
    return ac.firstElementChild;
  } else {
    return ac;
  }
};
let I = (a8, ...a9) => {
  let aa = [];
  for (let ad = 0; ad < a8.length; ad += 1) {
    aa.push(a8[ad]);
    if (a9[ad] !== undefined) {
      aa.push(a9[ad]);
    }
  }
  let ab = aa.join("");
  let ac = new CSSStyleSheet();
  ac.replaceSync(ab);
  return ac;
};
new (class {
  #r;
  #s = null;
  #o = {};
  constructor() {
    this.#r = new a6("GoogleFontsManager");
    this.#r.version(1).stores({
      cache: "family",
    });
  }
  search(a8 = "", a9 = "alphabetical", aa = "all", ab = "all", ac = "all") {
    return new Promise(async (ad) => {
      await this.#p();
      let af = [];
      let ag = this.#r.cache;
      if (a8.trim() !== "") {
        ag = ag.filter((ah) =>
          ah.family.toLowerCase().includes(a8.trim().toLowerCase())
        );
      }
      if (aa !== "all") {
        ag = ag.filter((ah) => ah.category === aa);
      }
      if (ab !== "all") {
        ag = ag.filter((ah) => ah.subsets.includes(ab));
      }
      af = await ag.toArray();
      if (a9 === "date") {
        af = af.sort((ah, ai) => (ah.dateRank > ai.dateRank ? -1 : 1));
      } else if (a9 === "popularity") {
        af = af.sort((ah, ai) =>
          ah.popularityRank > ai.popularityRank ? -1 : 1
        );
      } else if (a9 === "trending") {
        af = af.sort((ah, ai) => (ah.trendingRank > ai.trendingRank ? -1 : 1));
      }
      if (ac !== "all") {
        af = af.slice(ac * 40, (ac + 1) * 40);
      }
      ad(af);
    });
  }
  refresh() {
    return new Promise(async (a8, a9) => {
      let aa;
      if (this.#s === null) {
        this.#s = new a7.Client({
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
        aa = await this.#s.collections("googleFonts").documents().export();
      } catch (ac) {
        return a9(ac);
      }
      let ab = aa
        .split("\n")
        .map((ad) => JSON.parse(ad))
        .map((ad) => ({
          family: ad.family,
          faces: ad.faces,
          category: ad.category,
          subsets: ad.subsets,
          license: ad.license,
          thumbnail: ad.thumbnail,
          urls: ad.urls,
          dateRank: ad.dateRank,
          popularityRank: ad.popularityRank,
          trendingRank: ad.trendingRank,
          pageURL: "https://fonts.google.com/specimen/" + ad.id,
          cachedTime: Date.now(),
        }));
      await this.#r.cache.clear();
      await this.#r.cache.bulkPut(ab);
      a8();
    });
  }
  getFontFaceRulesFromUrl(a8, a9 = false) {
    return new Promise(async (aa) => {
      let ab = [];
      await this.#p();
      if (a9) {
        let ac = await this.#m(a8);
        for (let ad of ac.cssRules) {
          if (ad.type === CSSRule.FONT_FACE_RULE) {
            ab.push(ad);
          }
        }
      } else {
        let af = [];
        let ag = new URL(a8);
        let ah = ag.searchParams.get("display") || "auto";
        if (a8.startsWith("https://fonts.googleapis.com/css?")) {
          let ai = ag.searchParams.get("family");
          ai.split("|");
          ag.searchParams.get("subset");
          let aj = {
            regular: "400",
            bold: "700",
            italic: "400italic",
            bolditalic: "700italic",
            r: "400",
            b: "700",
            i: "400italic",
          };
          for (let ak of ai.split("|")) {
            let al = [];
            let [am, an] = ak.split(":");
            for (let ao of an.split(",")) {
              ao = aj[ao] || ao;
              al.push(ao);
            }
            af.push({
              family: am,
              faceNames: al,
            });
          }
        } else if (a8.startsWith("https://fonts.googleapis.com/css2?")) {
          let ap = ag.searchParams.getAll("family");
          for (let aq of ap) {
            let [ar, as] = aq.split(":");
            if (as === undefined) {
              af.push({
                family: ar,
                faceNames: ["400"],
              });
            } else {
              let at = [];
              let [au, av] = as.split("@");
              let aw = au.split(",");
              let ax = av.split(";");
              for (let ay of ax) {
                let az = {
                  wght: "400",
                  ital: "0",
                };
                for (let aA = 0; aA < aw.length; aA += 1) {
                  az[aw[aA]] = ay.split(",")[aA];
                }
                at.push(az.wght + (az.ital === "1" ? "italic" : ""));
              }
              af.push({
                family: ar,
                faceNames: at,
              });
            }
          }
        }
        {
          let aB = this.#r.cache;
          for (let { family, faceNames } of af) {
            let aE = await aB.get({
              family: family,
            });
            if (aE) {
              for (let aF of faceNames) {
                let aG = aE.urls[aF];
                if (aG) {
                  let aH = aF.substring(0, 3);
                  let aI = aF.includes("italic") ? "italic" : "normal";
                  let aJ = [];
                  for (let aM of aE.subsets) {
                    if (B[aM]) {
                      aJ.push(B[aM]);
                    }
                  }
                  if (aJ.length === 0) {
                    aJ = "U+0-10FFFF";
                  }
                  let aK = aJ.join(",");
                  let aL = I`
                    @font-face {
                      font-family: "${family}";
                      font-style: ${aI};
                      font-weight: ${aH};
                      font-display: ${ah};
                      font-unicode-range: ${aK};
                      src: url(${aG});
                    }
                  `;
                  ab.push(aL.cssRules[0]);
                }
              }
            }
          }
        }
      }
      aa(ab);
    });
  }
  getFamilyDescriptor(a8) {
    return new Promise(async (a9) => {
      await this.#p();
      a9((await this.#r.cache.where("family").equals(a8).toArray())[0] || null);
    });
  }
  #m(a8) {
    return new Promise(async (a9) => {
      let aa = null;
      if (this.#o[a8]) {
        aa = this.#o[a8];
      } else {
        let ab = await fetch(a8);
        let ac = await ab.text();
        aa = new CSSStyleSheet();
        aa.replaceSync(ac);
        this.#o[a8] = aa;
      }
      a9(aa);
    });
  }
  #p() {
    return new Promise(async (a8) => {
      let a9 = await this.#r.cache.count();
      let aa = true;
      if (a9 > 0) {
        let ab = await this.#r.cache.get("Roboto");
        if (ab) {
          let ac = 1296000000;
          aa = Date.now() - ab.cachedTime > ac;
        }
      }
      if (a9 === 0 || aa === true) {
        await this.refresh();
      }
      a8();
    });
  }
})();
class L {
  get items() {
    return this.#u;
  }
  set items(a8) {
    this.#u = [...a8];
  }
  get type() {
    return "<font-family>";
  }
  #u;
  constructor(a8 = []) {
    this.#u = [...a8];
  }
  static fromString(a8, a9 = false) {
    let aa = [...a4.tokenize(a8), new a4.EOFToken()];
    let ab = new A(aa);
    let ac = [];
    ab.read();
    if (ab.currentToken.tokenType === "WHITESPACE") {
      ab.read();
    }
    if (
      ab.currentToken.tokenType !== "STRING" &&
      ab.currentToken.tokenType !== "IDENT"
    ) {
      if (a9) {
        throw new DOMException(
          "Expected STRING or IDENT token.",
          "SyntaxError"
        );
      }
      return null;
    }
    for (ac.push(ab.currentToken.value); ; ) {
      let ad = false;
      ab.read();
      if (ab.currentToken.tokenType === "WHITESPACE") {
        ab.read();
      }
      if (ab.currentToken.tokenType === ",") {
        ad = true;
        ab.read();
      }
      if (ab.currentToken.tokenType === "WHITESPACE") {
        ab.read();
      }
      if (
        ab.currentToken.tokenType !== "STRING" &&
        ab.currentToken.tokenType !== "IDENT"
      ) {
        if (ab.currentToken.tokenType === "EOF") {
          if (ad) {
            if (a9) {
              throw new DOMException(
                "Unexpected trailing comma.",
                "SyntaxError"
              );
            }
            return null;
          }
          return new L(ac);
        }
        if (a9) {
          throw new DOMException(
            'Unexpected token "' + ab.currentToken.tokenType + '".',
            "SyntaxError"
          );
        }
        return null;
      }
      if (!ad) {
        if (a9) {
          throw new DOMException(
            "Unexpected STRING or IDENT token.",
            "SyntaxError"
          );
        }
        return null;
      }
      ac.push(ab.currentToken.value);
    }
  }
  toString() {
    return this.items
      .map((a8) => (z.includes(a8) ? a8 : '"' + a8 + '"'))
      .join(", ");
  }
}
if (!["iPhone", "iPad"].includes(navigator.platform)) {
  navigator.platform.startsWith("Mac");
}
const $ =
  navigator.userAgent.indexOf("Safari/") > -1 &&
  navigator.userAgent.indexOf("Chrome") === -1;
if (window.frameElement === null) {
  document.body.dataset.app;
}
let j = (a8, a9, aa) => a8.split(a9).join(aa);
let G = (a8) => {
  a8 = a8.toLowerCase();
  a8 = j(a8, " ", "");
  a8 = j(a8, "-", "");
  let a9 = "400";
  if ((a8 = j(a8, "_", "")).includes("thin") || a8.includes("hairline")) {
    a9 = "100";
  } else if (a8.includes("extralight") || a8.includes("ultralight")) {
    a9 = "200";
  } else if (a8.includes("light")) {
    a9 = "300";
  } else if (a8.includes("medium")) {
    a9 = "500";
  } else if (a8.includes("semibold") || a8.includes("demibold")) {
    a9 = "600";
  } else if (a8.includes("extrabold") || a8.includes("ultrabold")) {
    a9 = "800";
  } else if (a8.includes("bold")) {
    a9 = "700";
  } else if (a8.includes("black") || a8.includes("heavy")) {
    a9 = "900";
  }
  return a9;
};
let q = (a8) => {
  a8 = a8.toLowerCase();
  a8 = j(a8, " ", "");
  a8 = j(a8, "-", "");
  let a9 = "normal";
  if ((a8 = j(a8, "_", "")).includes("italic")) {
    a9 = "italic";
  } else if (a8.includes("oblique")) {
    a9 = "oblique";
  }
  return a9;
};
let W = (a8) => {
  let a9;
  let aa = document.createNodeIterator(a8, NodeFilter.SHOW_TEXT, null);
  let ab = {
    text: true,
    textPath: true,
    tspan: true,
  };
  while ((a9 = aa.nextNode())) {
    if (!ab[a9.parentElement.localName]) {
      if (_(a9.textContent)) {
        a9.remove();
      }
    }
  }
};
let _ = (a8) => !/[^\t\n\r ]/.test(a8);
new (class extends EventTarget {
  #h = "init";
  #f = [];
  #r;
  get status() {
    return this.#h;
  }
  constructor() {
    super();
    this.#r = new a6("LocalFontsManager");
    this.#r.version(1).stores({
      cache: "family",
    });
    this.#r
      .version(2)
      .stores({
        cache: "family",
      })
      .upgrade((a8) => a8.cache.clear());
    if (window.queryLocalFonts === undefined) {
      this.#h = "no-api";
    } else {
      navigator.permissions
        .query({
          name: "local-fonts",
        })
        .then((a8) => {
          if (a8.state === "granted") {
            this.refresh();
          } else if (a8.state !== "prompt") {
            this.#h = "no-permission";
          }
        });
    }
  }
  search(a8 = "", a9 = "all") {
    return new Promise(async (aa) => {
      let ab = [];
      let ac = this.#r.cache;
      if (a8.trim() !== "") {
        ac = ac.filter((ad) =>
          ad.family.toLowerCase().includes(a8.trim().toLowerCase())
        );
      }
      ab = await ac.toArray();
      if (a9 !== "all") {
        ab = ab.slice(a9 * 40, (a9 + 1) * 40);
      }
      aa(ab);
    });
  }
  refresh() {
    return new Promise(async (a8, a9) => {
      let aa;
      try {
        aa = await this.getLocalFontsMetadata(true);
      } catch (ac) {
        return a9(ac);
      }
      let ab = [];
      for (let ad of aa) {
        let af = G(ad.style) + (q(ad.style) === "italic" ? "i" : "");
        let ag = ab.find((ah) => ah.family === ad.family);
        if (ag) {
          if (ag.faces.includes(af) === false) {
            ag.faces.push(af);
          }
        } else {
          let ah = {
            family: ad.family,
            faces: [af],
          };
          ab.push(ah);
        }
      }
      for (let ai of ab) {
        ai.faces.sort();
      }
      await this.#r.cache.clear();
      await this.#r.cache.bulkPut(ab);
      this.#h = "ready";
      a8();
    });
  }
  getLocalFontsMetadata(a8 = false) {
    return new Promise(async (a9, aa) => {
      if (this.status === "no-api") {
        a9([]);
      } else {
        if (this.#f.length < 10 || a8) {
          try {
            this.#f = await window.queryLocalFonts();
          } catch (ab) {
            return aa({
              message: ab.message,
              name: ab.name,
            });
          }
        }
        a9(this.#f);
      }
    });
  }
  getCacheSize() {
    return new Promise(async (a8) => {
      a8(await this.#r.cache.count());
    });
  }
  getFamilyDescriptor(a8) {
    return new Promise(async (a9) => {
      a9((await this.#r.cache.where("family").equals(a8).toArray())[0] || null);
    });
  }
  getFamilyWeights(a8) {
    return new Promise(async (a9) => {
      let aa = await this.getFamilyDescriptor(a8);
      if (aa) {
        let ab = new Set();
        for (let ac of aa.faces) {
          let ad = ac.substring(0, 3);
          ab.add(ad);
        }
        a9([...ab]);
      } else {
        a9(["400"]);
      }
    });
  }
})();
let H = (a8, a9 = 6) => {
  let aa = fe("svg:path");
  let ab = a8.getPathData();
  for (let ac of ab) {
    ac.values = ac.values.map((ad) => T(ad, a9));
  }
  aa.setPathData(ab);
  for (let ad of a8.attributes) {
    if (["x", "y", "width", "height", "rx", "ry"].includes(ad.name) === false) {
      aa.setAttribute(ad.name, ad.value);
    }
  }
  aa.innerHTML = a8.innerHTML;
  return aa;
};
let X = (a8, a9 = 6) => {
  let aa = fe("svg:path");
  let ab = a8.getPathData();
  for (let ac of ab) {
    ac.values = ac.values.map((ad) => T(ad, a9));
  }
  aa.setPathData(ab);
  for (let ad of a8.attributes) {
    if (!["cx", "cy", "r"].includes(ad.name)) {
      aa.setAttribute(ad.name, ad.value);
    }
  }
  aa.innerHTML = a8.innerHTML;
  return aa;
};
let J = (a8, a9 = 6) => {
  let aa = fe("svg:path");
  let ab = a8.getPathData();
  for (let ac of ab) {
    ac.values = ac.values.map((ad) => T(ad, a9));
  }
  aa.setPathData(ab);
  for (let ad of a8.attributes) {
    if (!["cx", "cy", "rx", "ry"].includes(ad.name)) {
      aa.setAttribute(ad.name, ad.value);
    }
  }
  aa.innerHTML = a8.innerHTML;
  return aa;
};
let K = (a8, a9 = 6) => {
  let aa = fe("svg:path");
  let ab = a8.getPathData();
  for (let ac of ab) {
    ac.values = ac.values.map((ad) => T(ad, a9));
  }
  aa.setPathData(ab);
  for (let ad of a8.attributes) {
    if (!["x1", "y1", "x2", "y2"].includes(ad.name)) {
      aa.setAttribute(ad.name, ad.value);
    }
  }
  aa.innerHTML = a8.innerHTML;
  return aa;
};
let Y = (a8, a9 = 6) => {
  let aa = fe("svg:path");
  let ab = a8.getPathData();
  for (let ac of ab) {
    ac.values = ac.values.map((ad) => T(ad, a9));
  }
  aa.setPathData(ab);
  for (let ad of a8.attributes) {
    if (ad.name !== "points") {
      aa.setAttribute(ad.name, ad.value);
    }
  }
  aa.innerHTML = a8.innerHTML;
  return aa;
};
let Q = (a8, a9 = 6) => {
  let aa = fe("svg:path");
  let ab = a8.getPathData();
  for (let ac of ab) {
    ac.values = ac.values.map((ad) => T(ad, a9));
  }
  aa.setPathData(a8.getPathData());
  for (let ad of a8.attributes) {
    if (ad.name !== "points") {
      aa.setAttribute(ad.name, ad.value);
    }
  }
  aa.innerHTML = a8.innerHTML;
  return aa;
};
const Z =
  "\n  position: fixed;\n  top: -1px;\n  left: -1px;\n  width: 1px;\n  height: 1px;\n  contain: strict;\n  overflow: hidden;\n".replaceAll(
    "\n  ",
    ""
  );
class ee {
  #c;
  #d;
  get shadowRoot() {
    return this.#c.shadowRoot;
  }
  constructor(a8) {
    this.#d = a8;
    this.#c = document.createElement("div");
    this.#c.setAttribute("style", Z);
    this.#c.setAttribute("class", "offscreen-container");
    this.#c.attachShadow({
      mode: "open",
    });
    this.#c.shadowRoot.append(a8);
    document.body.append(this.#c);
  }
  destroy() {
    if (this.#d.parentNode === this.#c.shadowRoot) {
      this.#d.remove();
    }
    this.#c.remove();
    this.#c = null;
  }
}
let te = (a8) => {
  if (a8.isConnected === false) {
    new ee(a8);
  }
  if ($) {
    let a9 = null;
    if (a8.style.transform === "") {
      a9 =
        a8.localName === "linearGradient" || a8.localName === "radialGradient"
          ? a8.gradientTransform.baseVal.consolidate()
          : a8.localName === "pattern"
          ? a8.patternTransform.baseVal.consolidate()
          : a8.transform.baseVal.consolidate();
      if (a9) {
        return DOMMatrix.fromMatrix(a9.matrix);
      } else {
        return new DOMMatrix();
      }
    }
    {
      let aa = a8.computedStyleMap().get("transform");
      if (aa.value === "none") {
        return new DOMMatrix();
      } else {
        return aa.toMatrix();
      }
    }
  }
  {
    let ab = a8.computedStyleMap().get("transform");
    if (ab.value === "none") {
      return new DOMMatrix();
    } else {
      return ab.toMatrix();
    }
  }
};
let ie = (a8, a9, aa = null) => {
  var ab;
  var ac;
  a8.style.removeProperty("transform");
  if (a9 === null) {
    if (
      a8.localName === "linearGradient" ||
      a8.localName === "radialGradient"
    ) {
      a8.removeAttribute("gradientTransform");
    } else if (a8.localName === "pattern") {
      a8.removeAttribute("patternTransform");
    } else {
      a8.removeAttribute("transform");
    }
  } else {
    if (aa !== null) {
      ac = aa;
      a9 = (ab = a9).is2D
        ? new DOMMatrix([
            T(ab.a, ac),
            T(ab.b, ac),
            T(ab.c, ac),
            T(ab.d, ac),
            T(ab.e, ac),
            T(ab.f, ac),
          ])
        : new DOMMatrix([
            T(ab.m11, ac),
            T(ab.m12, ac),
            T(ab.m13, ac),
            T(ab.m14, ac),
            T(ab.m21, ac),
            T(ab.m22, ac),
            T(ab.m23, ac),
            T(ab.m24, ac),
            T(ab.m31, ac),
            T(ab.m32, ac),
            T(ab.m33, ac),
            T(ab.m34, ac),
            T(ab.m41, ac),
            T(ab.m42, ac),
            T(ab.m43, ac),
            T(ab.m44, ac),
          ]);
    }
    if (a9.isIdentity) {
      if (
        a8.localName === "linearGradient" ||
        a8.localName === "radialGradient"
      ) {
        a8.removeAttribute("gradientTransform");
      } else if (a8.localName === "pattern") {
        a8.removeAttribute("patternTransform");
      } else {
        a8.removeAttribute("transform");
      }
    } else if (
      a8.localName === "linearGradient" ||
      a8.localName === "radialGradient"
    ) {
      a8.setAttribute("gradientTransform", a9.toString());
    } else if (a8.localName === "pattern") {
      a8.setAttribute("patternTransform", a9.toString());
    } else {
      a8.setAttribute("transform", a9.toString());
    }
  }
};
let ae = (a8) => {
  let a9 = a8.querySelectorAll("textPath");
  a8.querySelectorAll("tspan");
  let aa = a9.length > 0 ? a9[0] : null;
  {
    let ab =
      a8.hasAttribute("width") || a8.hasAttribute("height")
        ? "pre-wrap"
        : "pre";
    a8.style.setProperty("white-space", ab);
  }
  if (a9.length > 1) {
    for (let ac of a9) {
      if (ac !== aa) {
        ac.remove();
      }
    }
  }
  if (aa) {
    if (aa.parentElement !== a8) {
      a8.append(aa);
    }
    for (let ad of [...a8.childNodes]) {
      if (["a", "tspan", "#text"].includes(ad.localName)) {
        ad.remove();
      }
    }
    if (aa.hasAttribute("style")) {
      for (let af of aa.style) {
        let ag = a8.style.getPropertyValue(af);
        let ah = aa.style.getPropertyValue(af);
        if (ag !== ah) {
          a8.style.setProperty(af, ah);
        }
      }
      aa.removeAttribute("style");
    }
  }
};
let ne = (a8) => {
  {
    let a9 = ce(a8);
    let aa = a8.href.baseVal ? a9.querySelector(a8.href.baseVal) : null;
    if (
      aa &&
      ["rect", "circle", "ellipse", "line", "polyline", "polygon"].includes(
        aa.localName
      )
    ) {
      let ab = ((ac, ad = 6) => {
        let af = null;
        if (ac.localName === "rect") {
          af = H(ac, ad);
        } else if (ac.localName === "circle") {
          af = X(ac, ad);
        } else if (ac.localName === "ellipse") {
          af = J(ac, ad);
        } else if (ac.localName === "line") {
          af = K(ac, ad);
        } else if (ac.localName === "polyline") {
          af = Y(ac, ad);
        } else if (ac.localName === "polygon") {
          af = Q(ac, ad);
        }
        return af;
      })(aa);
      aa.replaceWith(ab);
    }
  }
};
document.createElementNS("http://www.w3.org/2000/svg", "svg");
let le = (a8) => {
  {
    let a9 = 0;
    let aa = [...a8.children].filter((ab) => ab.localName === "stop");
    for (let ab of aa) {
      if (ab.hasAttribute("offset")) {
        let ac = ab.offset.baseVal;
        if (ac < a9) {
          ac = a9;
        }
        ac = C(ac, 0, 1, 4);
        a9 = ac;
        ab.setAttribute("offset", ac);
      }
    }
  }
};
let re = (a8) => {
  {
    let a9 = 0;
    let aa = [...a8.children].filter((ab) => ab.localName === "stop");
    for (let ab of aa) {
      if (ab.hasAttribute("offset")) {
        let ac = ab.offset.baseVal;
        if (ac < a9) {
          ac = a9;
        }
        ac = C(ac, 0, 1, 4);
        a9 = ac;
        ab.setAttribute("offset", ac);
      }
    }
  }
  a8.removeAttribute("fx");
  a8.removeAttribute("fy");
  a8.removeAttribute("fr");
};
let se = (a8) => {
  let a9 = ce(a8);
  if (a8.hasAttribute("id") === false) {
    let aa = 0;
    while (a9.querySelector("#pattern-" + aa) !== null) {
      aa += 1;
    }
    a8.setAttribute("id", "pattern-" + aa);
  }
};
let oe = (a8, a9 = "hex") => {
  let aa = 2166136261;
  for (let ab = 0, ac = a8.length; ab < ac; ab += 1) {
    aa ^= a8.charCodeAt(ab);
    aa += (aa << 1) + (aa << 4) + (aa << 7) + (aa << 8) + (aa << 24);
  }
  aa >>>= 0;
  if (a9 === "hex") {
    aa = ("0000000" + aa.toString(16)).substr(-8);
  }
  return aa;
};
let pe = (a8) => {
  let a9 = false;
  if (a8.hasAttribute("data-bx-d")) {
    let aa = a8.getAttribute("d");
    let ab = a8
      .getAttribute("data-bx-d")
      .trim()
      .split(/[\s+,]+/);
    if (ab.length >= 3) {
      let ac = ab.slice(0, ab.length - 1);
      let ad = ab[ab.length - 1];
      if (ad.includes("@")) {
        let [af, ag] = ad.split("@");
        if (ag === oe(aa + " / " + ac.join(" ") + " " + af).toString(32)) {
          a9 = true;
        }
      }
    }
  }
  return a9;
};
let me = (a8) => {
  if (a8.hasAttribute("href")) {
    let a9 = a8.getAttribute("href");
    let aa = ce(a8).querySelector(a9);
    if (aa) {
      aa.append(a8);
    }
    a8.removeAttribute("href");
  }
  if (a8.hasAttribute("repeatDur")) {
    if (a8.hasAttribute("max") === false) {
      let ab = ue(a8);
      if (
        ab.length === 1 &&
        ab[0].type === "<offset-value>" &&
        ab[0].seconds === 0
      ) {
        a8.setAttribute("max", a8.getAttribute("repeatDur"));
      }
    }
    a8.removeAttribute("repeatDur");
  }
  if (a8.hasAttribute("by")) {
    if (a8.hasAttribute("to") === false) {
      a8.setAttribute("to", a8.getAttribute("by"));
    }
    a8.removeAttribute("by");
  }
  if (a8.hasAttribute("attributeType")) {
    a8.removeAttribute("attributeType");
  }
  if (a8.hasAttribute("min")) {
    a8.removeAttribute("min");
  }
  if (a8.getAttribute("dur") === "media") {
    a8.removeAttribute("dur");
  }
  if (a8.getAttribute("max") === "media") {
    a8.removeAttribute("max");
  }
};
let ue = (a8) => he(a8.getAttribute("begin"));
let he = (a8, a9 = false) => {
  let aa = [];
  if (a8 !== null) {
    let ab = a8
      .trim()
      .split(";")
      .map((ac) => ac.trim())
      .filter((ac) => ac !== "");
    for (let ac of ab) {
      if (ac === "indefinite") {
        if (aa.includes("indefinite") === false) {
          aa.push("indefinite");
        }
      } else {
        let ad = null;
        for (let af of [M, V, D, P]) {
          ad = af.fromString(ac, false, a9);
          if (ad !== null) {
            break;
          }
        }
        if (ad !== null) {
          if (
            (aa.find((ag) => ag.compare && ag.compare(ad)) !== undefined) ===
            false
          ) {
            aa.push(ad);
          }
        }
      }
    }
    if (aa.length === 0) {
      aa.push("indefinite");
    }
  } else {
    aa.push(M.fromString("0s"));
  }
  if (aa.includes("indefinite")) {
    aa = aa.length === 1 ? [] : aa.filter((ag) => ag !== "indefinite");
  }
  return aa;
};
let fe = (a8, a9 = null) => {
  let aa = a8.split(":");
  let ab = null;
  if (aa.length === 1) {
    let [ac] = aa;
    ab = document.createElement(ac, a9);
  } else if (aa.length === 2) {
    let [ad, af] = aa;
    if (ad === "svg") {
      ab = document.createElementNS(s, af, a9);
    }
  }
  return ab;
};
let ce = (a8) => {
  let a9 = a8.localName === "svg" ? a8 : null;
  for (let aa = a8.ownerSVGElement; aa; aa = aa.ownerSVGElement) {
    a9 = aa;
  }
  return a9;
};
let de = (a8, a9, aa = true) => {
  let ab = a8.closest(a9);
  if (aa && !ab && a8.getRootNode().host) {
    return de(a8.getRootNode().host, a9);
  } else {
    return ab;
  }
};
class ge extends HTMLElement {
  static #g = R` <template> <main id="main" part="main"></main> <footer id="footer" part="footer"></footer> </template>
  `;
  static #b = I`
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
      background: var(--checkboard-background);
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
  #y;
  constructor() {
    super();
    let a8 = this.constructor.t;
    let a9 = this.constructor.l;
    this.#y = this.attachShadow({
      mode: "closed",
    });
    this.#y.adoptedStyleSheets = [
      a2.themeStyleSheet,
      ge.#b,
      this.constructor._shadowStyleSheet,
    ];
    this.#y.append(document.importNode(ge.#g.content, true));
    if (a8) {
      this.#y
        .querySelector("#main")
        .append(document.importNode(a8.content, true));
    }
    if (a9) {
      this.#y
        .querySelector("#footer")
        .append(document.importNode(a9.content, true));
    }
    for (let aa of this.#y.querySelectorAll("[id]")) {
      this["#" + aa.id] = aa;
    }
    this.setAttribute("extends", "bx-generator");
    this.setAttribute("tabindex", "0");
  }
}
let be = (a8) => {
  if (
    a8.hasAttribute("data-bx-preset") &&
    a8.getAttribute("x") === "-500%" &&
    a8.getAttribute("y") === "-500%" &&
    a8.getAttribute("width") === "1000%" &&
    a8.getAttribute("height") === "1000%"
  ) {
    a8.setAttribute("x", "-50%");
    a8.setAttribute("y", "-50%");
    a8.setAttribute("width", "200%");
    a8.setAttribute("height", "200%");
  }
};
fe("svg:marker");
let ye = (a8) => {
  let a9 = ce(a8);
  if (a8.hasAttribute("id") === false) {
    let aa = 0;
    while (a9.querySelector("#marker-" + aa) !== null) {
      aa += 1;
    }
    a8.setAttribute("id", "marker-" + aa);
  }
};
let xe = (a8) => {
  let a9 = false;
  if (a8.hasAttribute("data-bx-shape")) {
    let aa = a8.getAttribute("d");
    let ab = a8
      .getAttribute("data-bx-shape")
      .trim()
      .split(/[\s+,]+/);
    if (ab.length >= 3) {
      let ac = ab[0];
      let ad = ab.slice(1, ab.length - 1);
      let af = ab[ab.length - 1];
      if (af.includes("@")) {
        let [ag, ah] = af.split("@");
        if (
          ah ===
          oe(aa + " / " + ac + " " + ad.join(" ") + " " + ag).toString(32)
        ) {
          a9 = true;
        }
      }
    }
  }
  return a9;
};
let we = (a8) => {
  let a9 = ce(a8);
  if (a8.hasAttribute("id") === false) {
    let aa = 0;
    while (a9.querySelector("#symbol-" + aa) !== null) {
      aa += 1;
    }
    a8.setAttribute("id", "symbol-" + aa);
  }
};
let ke = (a8) => {
  let a9 = ce(a8);
  let aa = null;
  try {
    aa = a9.querySelector(a8.href.baseVal);
  } catch (ab) {
    aa = null;
  }
  if (aa && aa.localName !== "symbol") {
    let ac = te(a8);
    ac.multiplySelf(te(aa));
    ac.translateSelf(a8.x.baseVal.value, a8.y.baseVal.value);
    let ad = aa.cloneNode(true);
    ie(ad, ac);
    for (let af of a8.style) {
      let ag = ad.style.getPropertyValue(af);
      let ah = a8.style.getPropertyValue(af);
      if (ag === "") {
        ad.style.setProperty(af, ah);
      }
    }
    for (let { name, value } of a8.attributes) {
      if (
        F.includes(name) &&
        name !== "transform" &&
        ad.hasAttribute(name) === false
      ) {
        ad.setAttribute(name, value);
      }
    }
    for (let ak of a8.classList) {
      if (ad.classList.contains(ak) === false) {
        ad.classList.add(ak);
      }
    }
    for (let al of ad.querySelectorAll("*[id]")) {
      al.removeAttribute("id");
    }
    if (a8.hasAttribute("id")) {
      ad.setAttribute("id", a8.id);
    } else {
      ad.removeAttribute("id");
    }
    a8.replaceWith(ad);
  } else {
    let am = te(a8);
    am.translateSelf(a8.x.baseVal.value, a8.y.baseVal.value);
    ie(a8, am);
    a8.removeAttribute("x");
    a8.removeAttribute("y");
  }
};
const ve = {
  foreignObjects: "sanitize",
  foreignMetadata: "remove",
};
let Ne = (a8, a9 = ve) => {
  let aa;
  let ab =
    Ue(a8) ||
    Ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"></svg>');
  let ac =
    NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_COMMENT;
  let ad = document.createNodeIterator(ab, ac);
  let af = [];
  let ag = [];
  while ((aa = ad.nextNode())) {
    if (aa.nodeType !== Node.ELEMENT_NODE) {
      if ((N[aa.parentNode.nodeName] || []).includes(aa.nodeName) === false) {
        aa.remove();
      }
    } else if (aa.localName.includes(":")) {
      if (aa.localName.startsWith("bx:")) {
        let ai = aa.localName.split(":")[1];
        let aj = document.createElement("bx-" + ai);
        for (let ak of [...aa.attributes]) {
          aj.setAttribute(ak.name, ak.value);
        }
        for (let al of [...aa.childNodes]) {
          aj.append(al);
        }
        aa.replaceWith(aj);
      } else {
        aa.remove();
      }
    } else {
      if (aa.localName === "title") {
        let am = fe("svg:bx-title");
        am.innerHTML = aa.innerHTML;
        for (let { name, value } of aa.attributes) {
          am.setAttribute(name, value);
        }
        aa.replaceWith(am);
        continue;
      }
      if (aa.localName === "switch") {
        let ap = ":scope > *:not([systemLanguage]):not([requiredExtensions])";
        let aq = aa.querySelector(ap) || aa.firstElementChild;
        if (aq) {
          aa.replaceWith(aq);
        }
        continue;
      }
      if (aa.localName === "set") {
        let ar = fe("svg:animate");
        for (let { name, value } of aa.attributes) {
          if (name === "to") {
            ar.setAttribute("from", value);
            ar.setAttribute("to", value);
          } else {
            ar.setAttribute(name, value);
          }
        }
        aa.replaceWith(ar);
        continue;
      }
      if (aa.localName === "foreignObject") {
        if (a9.foreignObjects === "remove") {
          aa.remove();
          continue;
        }
        af.push([aa, aa.innerHTML]);
        aa.innerHTML = "";
      } else if (aa.localName === "metadata") {
        if (a9.foreignMetadata === "remove") {
          aa.remove();
          continue;
        }
        ag.push([aa, aa.innerHTML]);
        aa.innerHTML = "";
      } else if (aa !== ab) {
        if (
          (N[aa.parentNode.localName] || []).includes(aa.localName) === false
        ) {
          aa.remove();
          continue;
        }
      }
      for (let { name, value } of [...aa.attributes]) {
        if (name.includes(":")) {
          aa.removeAttribute(name);
          if (name.startsWith("bx:")) {
            name = "data-bx-" + name.split(":")[1];
            aa.setAttribute(name, value);
          } else if (
            name === "xlink:href" &&
            aa.hasAttribute("href") === false
          ) {
            name = "href";
            aa.setAttribute(name, value);
          } else if (
            name === "xlink:title" &&
            aa.hasAttribute("title") === false
          ) {
            name = "title";
            aa.setAttribute(name, value);
          } else {
            if (name !== "xml:lang") {
              continue;
            }
            name = "lang";
            aa.setAttribute(name, value);
          }
        }
        if (name.startsWith("data-")) {
          if (name === "data-bx-shape") {
            if (xe(aa) === false) {
              aa.removeAttribute(name);
            }
          } else if (name === "data-bx-d") {
            if (pe(aa) === false) {
              aa.removeAttribute(name);
            }
          } else if (name === "data-bx-origin") {
            aa.removeAttribute(name);
          }
        } else if (name === "href" && aa.localName === "a") {
          aa.removeAttribute(name);
          aa.setAttribute("_href", value);
        }
      }
    }
  }
  for (let [aw, ax] of af) {
    if (a9.foreignObjects === "preserve") {
      aw.innerHTML = ax;
    } else if (a9.foreignObjects === "sanitize") {
      aw.innerHTML = a5.sanitize(ax);
    }
  }
  for (let [ay, az] of ag) {
    if (a9.foreignMetadata === "preserve") {
      ay.innerHTML = az;
    }
  }
  let ah = new ee(ab);
  for (let aA of ab.querySelectorAll("text")) {
    ae(aA);
  }
  for (let aB of ab.querySelectorAll("textPath")) {
    ne(aB);
  }
  for (let aC of ab.querySelectorAll("linearGradient")) {
    le(aC);
  }
  for (let aD of ab.querySelectorAll("radialGradient")) {
    re(aD);
  }
  for (let aE of ab.querySelectorAll("pattern")) {
    se(aE);
  }
  for (let aF of ab.querySelectorAll("marker")) {
    ye(aF);
  }
  for (let aG of ab.querySelectorAll("symbol")) {
    we(aG);
  }
  for (let aH of ab.querySelectorAll("filter")) {
    if (aH.hasAttribute("data-bx-preset")) {
      be(aH);
    }
  }
  for (let aI of ab.querySelectorAll("use")) {
    ke(aI);
  }
  for (let aJ of ab.querySelectorAll(
    "animate,animateMotion,animateTransform,set"
  )) {
    me(aJ);
  }
  {
    let aK = [];
    for (let { name, value } of [...ab.attributes]) {
      ab.removeAttribute(name);
      if (name !== "xmlns" && name !== "xmlns:bx") {
        aK.push({
          name: name,
          value: value,
        });
      }
    }
    ab.setAttribute("xmlns", s);
    ab.setAttribute("xmlns:bx", r);
    for (let { name, value } of aK) {
      ab.setAttribute(name, value);
    }
  }
  {
    let aP = ab.querySelector(":scope > defs");
    if (!aP) {
      aP = fe("svg:defs");
      ab.prepend(aP);
    }
  }
  ((aQ) => {
    let aR = [];
    let aS = false;
    for (let aT of aQ.querySelectorAll("style")) {
      if (aT.closest("foreignObject") === null) {
        let aU = {};
        let aV = [];
        for (let aW of aT.sheet.cssRules) {
          if (aW.type === CSSRule.FONT_FACE_RULE) {
            let aX = L.fromString(aW.style.fontFamily).items[0];
            if (aU[aX] === undefined) {
              aU[aX] = [];
            }
            aU[aX].push(aW);
          } else if (aW.type === CSSRule.IMPORT_RULE) {
            if (aW.href.startsWith("https://fonts.googleapis.com/css2")) {
              let aY = new URL(aW.href);
              let aZ = new URLSearchParams(aY.search);
              for (let b0 of aZ.getAll("family")) {
                let [b1] = b0.split(":");
                let b2 = new URLSearchParams(aY.search);
                b2.set("family", b0);
                let b3 =
                  "https://fonts.googleapis.com/css2?" +
                  decodeURIComponent(b2.toString());
                if (aU[b1] === undefined) {
                  aU[b1] = [];
                }
                aU[b1].push({
                  cssText: '@import url("' + encodeURI(b3) + '");',
                  href: b3,
                  type: aW.type,
                });
              }
            } else if (aW.href.startsWith("https://fonts.googleapis.com/css")) {
              let b4 = new URL(aW.href);
              let b5 = new URLSearchParams(b4.search);
              for (let b6 of b5.get("family").split("|")) {
                let [b7] = b6.split(":");
                let b8 = new URLSearchParams(b4.search);
                b8.set("family", b6);
                let b9 =
                  "https://fonts.googleapis.com/css?" +
                  decodeURIComponent(b8.toString());
                if (aU[b7] === undefined) {
                  aU[b7] = [];
                }
                aU[b7].push({
                  cssText: '@import url("' + encodeURI(b9) + '");',
                  href: b9,
                  type: aW.type,
                });
              }
            } else {
              aV.push(aW);
            }
          } else {
            aV.push(aW);
          }
        }
        if (Object.keys(aU).length > 0 || aT.hasAttribute("data-bx-fonts")) {
          aR.push({
            styleElement: aT,
            fontRulesByFamily: aU,
            otherRules: aV,
          });
        }
      }
    }
    {
      let ba = [];
      for (let bb of aR) {
        let { styleElement, fontRulesByFamily, otherRules } = bb;
        let bg = Object.keys(fontRulesByFamily);
        if (bg.length === 0) {
          if (styleElement.hasAttribute("data-bx-fonts")) {
            aS = true;
            break;
          }
        } else if (bg.length === 1) {
          let bh = bg[0];
          if (ba.includes(bh)) {
            aS = true;
            break;
          }
          if (styleElement.getAttribute("data-bx-fonts") !== bh) {
            aS = true;
            break;
          }
          if (otherRules.length > 0) {
            aS = true;
            break;
          }
        } else if (bg.length > 1) {
          aS = true;
          break;
        }
        ba.push(...bg);
      }
    }
    if (aS === true) {
      for (let bi of aR) {
        for (let [bj, bk] of Object.entries(bi.fontRulesByFamily)) {
          let bl = aR.find((bm) => bm.fontRulesByFamily[bj] !== undefined);
          if (bl !== bi) {
            bl.fontRulesByFamily[bj].push(...bk);
            delete bi.fontRulesByFamily[bj];
          }
        }
      }
      for (let { styleElement, fontRulesByFamily, otherRules } of aR) {
        for (let [bp, bq] of Object.entries(fontRulesByFamily)) {
          let br = fe("svg:style");
          let bs = "";
          bq.sort((bt) => (bt.type === CSSRule.IMPORT_RULE ? -1 : 1));
          for (let bt of bq) {
            bs += bt.cssText;
          }
          br.textContent = bs;
          br.setAttribute("data-bx-fonts", bp);
          if (styleElement.hasAttribute("data-bx-pinned")) {
            br.setAttribute("data-bx-pinned", "");
          }
          styleElement.before(br);
        }
        if (otherRules.length === 0) {
          styleElement.remove();
        } else {
          let bu = "";
          for (let bv of otherRules) {
            bu += bv.cssText;
          }
          styleElement.removeAttribute("data-bx-fonts");
          styleElement.removeAttribute("data-bx-pinned");
          styleElement.textContent = bu;
        }
      }
    }
  })(ab);
  ah.destroy();
  document.importNode(ab, true);
  return ab;
};
let Ue = (a8) => {
  let a9 = new DOMParser();
  let aa = a9.parseFromString(a8, "text/html").querySelector("body");
  let ab = null;
  let ac = true;
  if (aa.children.length === 1 && aa.children[0].localName === "svg") {
    for (let ad of aa.children[0].attributes) {
      if (
        ad.name.startsWith("xmlns") &&
        ad.value.startsWith("http://schemas.microsoft.com/visio")
      ) {
        ac = false;
        break;
      }
    }
  } else {
    ac = false;
  }
  if (ac) {
    ab = aa.children[0];
  } else {
    let af =
      a9.parseFromString(a8, "image/svg+xml").querySelector("svg") || null;
    let ag = {
      title: true,
      switch: true,
    };
    for (let ah of k) {
      ag[ah] = true;
    }
    if (af) {
      let ai;
      let aj = document.createNodeIterator(af, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (al) =>
          al.localName === "foreignObject"
            ? NodeFilter.FILTER_SKIP
            : NodeFilter.FILTER_ACCEPT,
      });
      while ((ai = aj.nextNode())) {
        if (ai.namespaceURI === s) {
          if (ag[ai.localName] !== true) {
            ai.remove();
          }
        } else if (ai.namespaceURI !== r) {
          ai.remove();
        }
      }
      if (af.hasAttribute("xmlns") === false) {
        let al = document.createElementNS(s, "svg");
        al.setAttribute("xmlns", s);
        for (let am of af.attributes) {
          al.setAttribute(am.name, af.getAttribute(am.name));
        }
        for (let an of [...af.childNodes]) {
          al.append(an);
        }
        af = al;
      }
      let ak =
        '<?xml version="1.0" encoding="utf-8"?>\n' +
        new XMLSerializer().serializeToString(af);
      ab =
        new DOMParser().parseFromString(ak, "text/html").querySelector("svg") ||
        null;
    }
  }
  return ab;
};
let Fe = (a8, a9 = "xml", aa = 2) => {
  a8 = a8.cloneNode(true);
  let ab;
  let ac = document.createNodeIterator(a8, NodeFilter.SHOW_ELEMENT);
  while ((ab = ac.nextNode())) {
    if (ab.nodeType == Node.ELEMENT_NODE) {
      if (ab.localName === "defs") {
        if (ab.children.length === 0) {
          ab.remove();
        }
      } else if (ab.localName === "style") {
        if (ab.textContent.replace(/\s+/g, " ").trim() === "") {
          ab.remove();
        } else if (ab.matches('[data-bx-fonts="google"]')) {
          ab.removeAttribute("data-bx-fonts");
        }
      } else if (a9 === "xml" && ab.localName === "path") {
        let ad = ab.getAttribute("d");
        if (ad && /[\t\n\r]/.test(ad)) {
          ab.setAttribute("d", ad.replace(/[\t\n\r ]+/g, " "));
        }
      }
    }
  }
  Ce(a8, a9);
  ((af, ag = 2, ah = 1) => {
    W(af);
    let ai = "";
    let aj = {
      text: true,
      textPath: true,
      tspan: true,
      title: true,
      desc: true,
    };
    for (let al = 0; al < ag; al += 1) {
      ai += " ";
    }
    let ak = (am, an = 2) => {
      if (!aj[am.localName]) {
        for (let ao of am.children) {
          let ap = am.firstChild === ao;
          let aq = am.lastChild === ao;
          if (ap === true) {
            let at = document.createTextNode("\n");
            ao.parentNode.insertBefore(at, ao);
          }
          let ar = "";
          for (let au = 0; au < an; au += 1) {
            ar += ai;
          }
          let as = document.createTextNode(ar);
          am.insertBefore(as, ao);
          if (aq === true) {
            let av = document.createTextNode("\n");
            am.appendChild(av);
            let aw = "";
            for (let ay = 0; ay < an - 1; ay += 1) {
              aw += ai;
            }
            let ax = document.createTextNode(aw);
            am.appendChild(ax);
          } else {
            let az = document.createTextNode("\n");
            am.insertBefore(az, ao.nextSibling);
          }
          if (ao.childElementCount > 0) {
            ak(ao, an + 1);
          }
        }
      }
    };
    ak(af, ah);
  })(a8, aa);
  return Te(a8, a9);
};
let Te = (a8, a9 = "xml") => {
  let aa;
  if (a9 === "xml") {
    aa = new XMLSerializer().serializeToString(a8);
    if (aa.trim().length === 0) {
      throw new Error("Failed to serialize artwork");
    }
    aa = '<?xml version="1.0" encoding="utf-8"?>\n' + aa;
  } else if (a9 === "html") {
    aa = a8.outerHTML;
    if (aa.trim().length === 0) {
      throw new Error("Failed to serialize artwork");
    }
    aa = "<!doctype html>\n" + aa;
    aa = j(aa, ' xmlns:xlink="http://www.w3.org/1999/xlink"', "");
  }
  {
    let ab = 0;
    while (true) {
      let ac = aa.indexOf('style="', ab);
      let ad = -1;
      if (ac > -1) {
        ad = aa.indexOf('"', ac + 7);
      }
      if (ac === -1 || ad === -1) {
        break;
      }
      {
        let af = aa.substring(0, ac);
        let ag = aa.substring(ad + 1);
        let ah = aa.substring(ac, ad + 1).replaceAll("&quot;", "'");
        aa = af + ah + ag;
        ab = ac + ah.length;
        ab = ad + 1;
      }
    }
  }
  return aa;
};
let Ce = (a8, a9) => {
  if (a9 === "xml") {
    let aa;
    let ab = document.createNodeIterator(a8, NodeFilter.SHOW_ELEMENT);
    let ac = false;
    let ad = false;
    while ((aa = ab.nextNode())) {
      if (aa.localName !== "bx-title") {
        if (aa.localName.startsWith("bx-")) {
          let af = document.createElementNS(
            r,
            "bx:" + aa.localName.substring(3)
          );
          for (let ag of [...aa.attributes]) {
            af.setAttribute(ag.name, ag.value);
          }
          for (let ah of [...aa.childNodes]) {
            af.append(ah);
          }
          aa.replaceWith(af);
          ad = true;
        } else {
          for (let { name, value } of [...aa.attributes]) {
            if (name === "href" || name === "_href") {
              aa.setAttribute("xlink:href", value);
              aa.removeAttribute(name);
              ac = true;
            } else if (name.startsWith("data-bx-")) {
              let ak = name.substring(8);
              aa.setAttributeNS(r, "bx:" + ak, value);
              aa.removeAttribute(name);
              ad = true;
            }
          }
        }
      } else {
        let al = fe("svg:title");
        al.innerHTML = aa.innerHTML;
        for (let { name, value } of aa.attributes) {
          al.setAttribute(name, value);
        }
        aa.replaceWith(al);
      }
    }
    a8.removeAttribute("xmlns");
    a8.removeAttribute("xmlns:bx");
    a8.removeAttribute("xmlns:xlink");
    a8.setAttributeNS(p, "xmlns", s);
    if (ac) {
      a8.setAttributeNS(p, "xmlns:xlink", o);
    }
    if (ad) {
      a8.setAttributeNS(p, "xmlns:bx", r);
    }
  } else if (a9 === "html") {
    let ao;
    let ap = document.createNodeIterator(a8, NodeFilter.SHOW_ELEMENT);
    while ((ao = ap.nextNode())) {
      if (ao.localName !== "bx-title") {
        for (let { name, value } of [...ao.attributes]) {
          if (name === "href" || name === "_href") {
            ao.setAttribute("xlink:href", value);
            ao.removeAttribute(name);
          }
        }
      } else {
        let as = fe("svg:title");
        as.innerHTML = ao.innerHTML;
        for (let { name, value } of ao.attributes) {
          as.setAttribute(name, value);
        }
        ao.replaceWith(as);
      }
    }
  }
};
let Ee = (a8, a9 = "png", aa = {}) =>
  new Promise(async (ab) => {
    if (a9 === "png") {
      let ac = new Blob([a8], {
        type: "image/svg+xml;charset=utf-8",
      });
      let ad = URL.createObjectURL(ac);
      let af = new Image();
      af.src = ad;
      af.addEventListener(
        "load",
        async () => {
          let ag = aa.dpi || 96;
          let ah = aa.colors || 0;
          let ai = aa.background || "rgba(0, 0, 0, 0)";
          let aj = new OffscreenCanvas(af.naturalWidth, af.naturalHeight);
          let ak = aj.getContext("2d");
          ak.fillStyle = ai;
          ak.fillRect(0, 0, af.naturalWidth, af.naturalHeight);
          ak.drawImage(af, 0, 0);
          let al = (await import("/libs/upng/upng.js")).default;
          let { changeDpiBlob } = await import(
            "/libs/change-dpi/change-dpi.js"
          );
          let an = ak.getImageData(0, 0, aj.width, aj.height);
          let ao = al.encode([an.data.buffer], an.width, an.height, ah);
          let ap = new Uint8Array(ao);
          let aq = new Blob([ap], {
            type: "image/png",
          });
          aq = changeDpiBlob(aq, ag);
          URL.revokeObjectURL(ad);
          ab(aq);
        },
        {
          once: true,
        }
      );
    } else if (a9 === "jpeg" || a9 === "jpg") {
      let ag = new Blob([a8], {
        type: "image/svg+xml;charset=utf-8",
      });
      let ah = URL.createObjectURL(ag);
      let ai = new Image();
      ai.src = ah;
      ai.addEventListener(
        "load",
        async () => {
          let aj = aa.dpi || 96;
          let ak = aa.background || "rgb(255, 255, 255)";
          let al = aa.compression || 1;
          let am = new OffscreenCanvas(ai.naturalWidth, ai.naturalHeight);
          let an = am.getContext("2d");
          an.fillStyle = "white";
          an.fillRect(0, 0, ai.naturalWidth, ai.naturalHeight);
          an.fillStyle = ak;
          an.fillRect(0, 0, ai.naturalWidth, ai.naturalHeight);
          an.drawImage(ai, 0, 0);
          let { changeDpiBlob } = await import(
            "/libs/change-dpi/change-dpi.js"
          );
          let ap = await am.convertToBlob({
            type: "image/jpeg",
            quality: al,
          });
          ap = changeDpiBlob(ap, aj);
          URL.revokeObjectURL(ah);
          ab(ap);
        },
        {
          once: true,
        }
      );
    } else if (a9 === "gif") {
      let aj = new Blob([a8], {
        type: "image/svg+xml;charset=utf-8",
      });
      let ak = URL.createObjectURL(aj);
      let al = new Image();
      al.src = ak;
      al.addEventListener(
        "load",
        async () => {
          let am = new E(aa.background || "#ffffff");
          am = am.to("srgb").toString({
            format: "hex",
          });
          let an = aa.transparent || false;
          let ao = false;
          if (aa.dithering === "floyd-steinberg") {
            ao = "FloydSteinberg";
          } else if (aa.dithering === "false-floyd-steinberg") {
            ao = "FalseFloydSteinberg";
          } else if (aa.dithering === "stucki") {
            ao = "Stucki";
          } else if (aa.dithering === "atkinson") {
            ao = "Atkinson";
          }
          let ap = new OffscreenCanvas(
            al.naturalWidth,
            al.naturalHeight
          ).getContext("2d");
          ap.fillStyle = am;
          ap.fillRect(0, 0, al.naturalWidth, al.naturalHeight);
          ap.drawImage(al, 0, 0);
          let aq = ap.getImageData(0, 0, al.naturalWidth, al.naturalHeight);
          let ar = new (0, (await import("/libs/gif/gif.js")).default)({
            workers: 2,
            quality: 1,
            dither: ao,
            transparent: an ? parseInt("0x" + am.substring(1)) : null,
            workerScript: "libs/gif/gif.worker.js",
          });
          ar.addFrame(aq);
          ar.render();
          ar.on("finished", (as) => {
            ab(as);
          });
        },
        {
          once: true,
        }
      );
    } else if (a9 === "webp") {
      let am = new Blob([a8], {
        type: "image/svg+xml;charset=utf-8",
      });
      let an = URL.createObjectURL(am);
      let ao = new Image();
      ao.src = an;
      ao.addEventListener(
        "load",
        async () => {
          let ap = aa.background || "rgba(255, 255, 255, 0)";
          let aq = aa.compression || 1;
          let ar = new OffscreenCanvas(ao.naturalWidth, ao.naturalHeight);
          let as = ar.getContext("2d");
          as.fillStyle = ap;
          as.fillRect(0, 0, ao.naturalWidth, ao.naturalHeight);
          as.drawImage(ao, 0, 0);
          let at = await ar.convertToBlob({
            type: "image/webp",
            quality: aq,
          });
          URL.revokeObjectURL(an);
          ab(at);
        },
        {
          once: true,
        }
      );
    }
  });
class Ae extends ge {
  static t = R` <template> <section id="options-section"> <h3 id="options-heading"><x-message href="#options" autocapitalize></x-message></h3> <section id="cell-size-subsection"> <h4 id="cell-size-heading"><x-message href="#cell-size" autocapitalize></x-message></h4> <x-box id="cell-size-box"> <x-slider id="cell-size-slider" min="2" max="20" step="1"></x-slider> <x-numberinput id="cell-size-input" min="2" max="100" step="1" suffix="%" condensed> <x-stepper></x-stepper> </x-numberinput> </x-box> </section> <section id="variance-subsection"> <h4 id="variance-heading"><x-message href="#variance" autocapitalize></x-message></h4> <x-box id="variance-box"> <x-slider id="variance-slider" min="0" max="100" step="1"></x-slider> <x-numberinput id="variance-input" min="0" max="100" step="1" suffix="%" condensed> <x-stepper></x-stepper> </x-numberinput> </x-box> </section> <section id="seed-subsection"> <h4 id="seed-heading"><x-message href="#seed" autocapitalize></x-message></h4> <x-box id="seed-box"> <x-slider id="seed-slider" min="0" max="200" step="1"></x-slider> <x-numberinput id="seed-input" min="0" max="200" step="1" condensed> <x-stepper></x-stepper> </x-numberinput> </x-box> </section> <section id="draw-as-subsection"> <h4 id="draw-as-heading"><x-message href="#draw-as" autocapitalize></x-message></h4> <x-buttons id="draw-as-buttons" tracking="1"> <x-button value="paths" condensed> <x-label><x-message href="#paths" autocapitalize></x-message></x-label> </x-button> <x-button value="polygons" condensed> <x-label><x-message href="#polygons" autocapitalize></x-message></x-label> </x-button> </x-buttons> </section> </section> <hr id="preview-section-hr"> <section id="preview-section"> <h3 id="preview-heading"><x-message href="#preview" autocapitalize></x-message></h3> <svg id="preview" part="preview" preserveAspectRatio="xMidYMid"></svg> </section> </template>
  `;
  static l = R` <template> <x-button id="generate-button" size="large"> <x-icon href="#generators-panel"></x-icon> <x-label><x-message href="#generators.triangulate" autocapitalize></x-message></x-label> </x-button> </template>
  `;
  static _shadowStyleSheet = I`#cell-size-subsection{display:flex;flex-flow:column}#cell-size-subsection h4{margin-bottom:0}#cell-size-slider{flex:1}#cell-size-input{margin-left:10px;width:60px}#variance-subsection{margin-top:10px}#variance-subsection h4{margin:0}#variance-slider{flex:1}#variance-input{margin-left:10px;width:60px}#seed-subsection{margin-top:10px}#seed-subsection h4{margin:0}#seed-slider{flex:1}#seed-input{margin-left:10px;width:60px}#draw-as-subsection{margin-top:10px}#draw-as-buttons{width:100%}#draw-as-buttons x-button{flex:1}#preview{height:160px}`;
  get options() {
    return {
      cellSize: this["#cell-size-input"].value / 100,
      variance: this["#variance-input"].value / 100,
      seed: this["#seed-input"].value,
      drawAs: this["#draw-as-buttons"].value,
      geometryPrecision: this.#x.board.geometryPrecision,
    };
  }
  #x;
  #w;
  #k;
  constructor() {
    super();
    this["#cell-size-box"].addEventListener("changestart", () => this.#v());
    this["#variance-box"].addEventListener("changestart", () => this.#N());
    this["#seed-box"].addEventListener("changestart", () => this.#U());
    this["#draw-as-buttons"].addEventListener("toggle", () => this.#F());
    this["#generate-button"].addEventListener("click", () => this.#T());
  }
  connectedCallback() {
    this.#x = de(this, "bx-editor");
    let a8 = a2.getConfig("bx-triangulategenerator:cellSize", 0.1);
    let a9 = a2.getConfig("bx-triangulategenerator:variance", 0.75);
    let aa = a2.getConfig("bx-triangulategenerator:seed", 100);
    let ab = a2.getConfig("bx-triangulategenerator:drawAs", "paths");
    this["#cell-size-slider"].value = T(a8 * 100, 2);
    this["#cell-size-input"].value = T(a8 * 100, 2);
    this["#variance-slider"].value = T(a9 * 100, 2);
    this["#variance-input"].value = T(a9 * 100, 2);
    this["#seed-slider"].value = aa;
    this["#seed-input"].value = aa;
    this["#draw-as-buttons"].value = ab;
    this.#C();
    this.#x.board.addEventListener(
      "selectedelementschange",
      (this.#w = () => {
        this.#C();
      })
    );
    this.#x.board.addEventListener(
      "workspacemutation",
      (this.#k = () => {
        this.#E();
      })
    );
  }
  disconnectedCallback() {
    this.#x.board.removeEventListener("selectedelementschange", this.#w);
    this.#x.board.removeEventListener("workspacemutation", this.#k);
  }
  #v() {
    let a8;
    let a9;
    this["#cell-size-box"].addEventListener(
      "change",
      (a8 = (aa) => {
        if (aa.target === this["#cell-size-slider"]) {
          this["#cell-size-input"].value = this["#cell-size-slider"].value;
        } else if (aa.target === this["#cell-size-input"]) {
          this["#cell-size-slider"].value = this["#cell-size-input"].value;
        }
      })
    );
    this["#cell-size-box"].addEventListener(
      "changeend",
      (a9 = () => {
        this["#cell-size-box"].removeEventListener("change", a8);
        this["#cell-size-box"].removeEventListener("changeend", a9);
        a2.setConfig(
          "bx-triangulategenerator:cellSize",
          this["#cell-size-slider"].value / 100
        );
        this.#C();
      })
    );
  }
  #N() {
    let a8;
    let a9;
    this["#variance-box"].addEventListener(
      "change",
      (a8 = (aa) => {
        if (aa.target === this["#variance-slider"]) {
          this["#variance-input"].value = this["#variance-slider"].value;
        } else if (aa.target === this["#variance-input"]) {
          this["#variance-slider"].value = this["#variance-input"].value;
        }
      })
    );
    this["#variance-box"].addEventListener(
      "changeend",
      (a9 = () => {
        this["#variance-box"].removeEventListener("change", a8);
        this["#variance-box"].removeEventListener("changeend", a9);
        a2.setConfig(
          "bx-triangulategenerator:variance",
          this["#variance-slider"].value / 100
        );
        this.#C();
      })
    );
  }
  #U() {
    let a8;
    let a9;
    this["#seed-box"].addEventListener(
      "change",
      (a8 = (aa) => {
        if (aa.target === this["#seed-slider"]) {
          this["#seed-input"].value = this["#seed-slider"].value;
        } else if (aa.target === this["#seed-input"]) {
          this["#seed-slider"].value = this["#seed-input"].value;
        }
      })
    );
    this["#seed-box"].addEventListener(
      "changeend",
      (a9 = () => {
        this["#seed-box"].removeEventListener("change", a8);
        this["#seed-box"].removeEventListener("changeend", a9);
        a2.setConfig(
          "bx-triangulategenerator:seed",
          this["#seed-slider"].value
        );
        this.#C();
      })
    );
  }
  #F() {
    a2.setConfig(
      "bx-triangulategenerator:drawAs",
      this["#draw-as-buttons"].value
    );
  }
  async #T() {
    let a8 = this.#x.board;
    let a9 = null;
    let aa = this.#x.board.outermostSelectedObjectElements[0];
    if (aa.localName === "image") {
      a9 = await createImageBitmap(aa);
    } else {
      let ag = this.#x.board.extractArtworkWithSelectedElements();
      let ah = Fe(ag);
      let ai = await Ee(ah, "png", {
        colors: 0,
      });
      a9 = await createImageBitmap(ai);
    }
    let ab = aa.getBoundingClientRect();
    let ac = await this.#A(a9, this.options);
    let ad = Ne(ac);
    ad.setAttribute("preserveAspectRatio", "none");
    a8.undoManager.checkpoint(["#generators.triangulate"], "#generators-panel");
    let af = a8.insertArtworkIntoBBox(ad, ab);
    for (let aj of aa.style) {
      let ak = aa.style.getPropertyValue(aj);
      let al = U.find((am) => am.name === aj);
      if (al && al.appliesTo.includes("g")) {
        af.style.setProperty(aj, ak);
      }
    }
    a8.selectedElements = [af];
    a8.selectedTextRange = null;
    aa.remove();
  }
  #A(a8, a9) {
    return new Promise((aa) => {
      let ab = new Worker("/workers/triangulate.js");
      ab.addEventListener("message", (ac) => aa(ac.data), false);
      ab.postMessage([a8, a9]);
    });
  }
  async #C() {
    let a8 = null;
    if (this.#x.board.outermostSelectedObjectElements.length === 1) {
      let a9 = this.#x.board.outermostSelectedObjectElements[0];
      let aa = a9.getBoundingClientRect();
      if (aa.width >= 1 && aa.height >= 1) {
        if (a9.localName === "image") {
          a8 = await createImageBitmap(a9);
        } else {
          let ab = this.#x.board.extractArtworkWithSelectedElements();
          let ac = Fe(ab);
          let ad = await Ee(ac, "png", {
            colors: 0,
          });
          a8 = await createImageBitmap(ad);
        }
      }
    }
    this["#options-heading"].disabled = a8 === null;
    this["#cell-size-heading"].disabled = a8 === null;
    this["#cell-size-slider"].disabled = a8 === null;
    this["#cell-size-input"].disabled = a8 === null;
    this["#variance-heading"].disabled = a8 === null;
    this["#variance-slider"].disabled = a8 === null;
    this["#variance-input"].disabled = a8 === null;
    this["#seed-heading"].disabled = a8 === null;
    this["#seed-slider"].disabled = a8 === null;
    this["#seed-input"].disabled = a8 === null;
    this["#draw-as-heading"].disabled = a8 === null;
    for (let af of this["#draw-as-buttons"].children) {
      af.disabled = a8 === null;
    }
    if (a8 === null) {
      this["#preview-section"].hidden = true;
      this["#preview"].innerHTML = "";
      this["#preview-section-hr"].hidden = true;
    } else {
      let ag = ((ah) => {
        let ai = document.createDocumentFragment();
        let aj = document.createElementNS(s, "svg");
        for (aj.innerHTML = ah; aj.firstChild; ) {
          ai.append(aj.firstChild);
        }
        if (ai.childElementCount > 1) {
          return ai;
        } else if (ai.childElementCount === 1) {
          return ai.children[0];
        } else {
          return null;
        }
      })(await this.#A(a8, this.options));
      ag.setAttribute("id", "preview");
      ag.setAttribute("part", "preview");
      this["#preview"].replaceWith(ag);
      this["#preview"] = ag;
      this["#preview-section"].hidden = false;
      this["#preview-section-hr"].hidden = false;
    }
    this["#generate-button"].disabled = a8 === null;
  }
  #E = ((e, t, i, a = false) => {
    let n = null;
    let l = null;
    return (...r) => {
      let s = a && !n;
      clearTimeout(n);
      n = setTimeout(() => {
        n = null;
        if (!a) {
          l = e.apply(i, r);
        }
      }, t);
      if (s) {
        l = e.apply(i, r);
      }
      return l;
    };
  })(this.#C, 1000, this);
}
customElements.define("bx-triangulategenerator", Ae);
