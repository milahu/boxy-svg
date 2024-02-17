import a2 from "/libs/xel/xel.js";
import "/libs/color/color.js";
import a3 from "/libs/css-parser/css-parser.js";
import "/libs/paper/paper.js";
import "/libs/seed-random/seed-random.js";
import "/libs/dom-purify/dom-purify.js";
import a4 from "/libs/dexie/dexie.js";
import a5 from "/libs/typesense/typesense.js";
import "/libs/pako/pako.js";
const a = "https://boxy-svg.com";
const o = "http://www.w3.org/2000/svg";
const l = "http://www.w3.org/1999/xlink";
const s = "http://www.w3.org/2000/xmlns/";
const r = ["circle", "ellipse", "line", "path", "polygon", "polyline", "rect"];
const h = ["text", "textPath", "tspan"];
const p = [...r, ...h, "foreignObject", "image"];
const u = [...r, ...h];
const c = [...r, "text", "use"];
const m = [...p, "clipPath", "a", "g", "use"];
const f = [
  "direction",
  "dominant-baseline",
  "font-family",
  "font-size",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-weight",
  "letter-spacing",
  "text-anchor",
  "text-decoration",
  "text-rendering",
  "text-wrap",
  "unicode-bidi",
  "white-space",
  "white-space-collapse",
  "word-spacing",
  "writing-mode",
];
const d = [
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
    appliesTo: [...p, "svg", "g", "a", "use"],
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
    appliesTo: [...p, "use"],
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
    appliesTo: [...p, "svg", "g", "a", "use"],
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
      ...p,
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
    appliesTo: [...p, "svg", "g", "a", "use"],
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
    appliesTo: [...p, "textPath", "tspan", "svg", "g", "a", "use"],
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
    appliesTo: [...u],
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
    appliesTo: [...u],
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
    appliesTo: [...u],
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
    appliesTo: [...p, "textPath", "tspan", "g", "a", "svg", "use"],
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
      ...p,
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
    appliesTo: [...r],
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
    appliesTo: [...r],
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
    appliesTo: [...r],
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
    appliesTo: [...r],
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
    appliesTo: [...p, "g", "a", "svg", "use"],
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
      ...p,
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
      ...p,
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
    appliesTo: [...u],
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
    appliesTo: [...p, "svg", "g", "a", "use"],
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
    appliesTo: [...r],
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
    appliesTo: [...u],
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
    appliesTo: [...u],
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
    appliesTo: [...u],
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
    appliesTo: [...u],
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
    appliesTo: [...u],
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
    appliesTo: [...u],
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
    appliesTo: [...u],
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
    appliesTo: [...u],
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
    appliesTo: [...p, "use"],
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
    appliesTo: [...p, "text", "textPath", "tspan"],
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
const g = d.map((a6) => a6.presentationAttributeName).filter((a6) => a6);
let b = (a6, a7 = 0) => {
  let a8 = Math.pow(10, a7);
  return Math.round((a6 + Number.EPSILON) * a8) / a8;
};
class x {
  currentToken = null;
  position = 0;
  #e;
  constructor(a6) {
    this.#e = a6;
  }
  read() {
    let a6 = this.#e[this.position];
    this.currentToken = a6;
    if (a6.tokenType !== "EOF") {
      this.position += 1;
    }
    return a6;
  }
  reset(a6) {
    this.position = a6;
  }
}
class y {
  get value() {
    return this.#t;
  }
  set value(a6) {
    this.#t = a6;
  }
  get origin() {
    return new URL(this.#t).origin;
  }
  get type() {
    return "<url>";
  }
  #t;
  constructor(a6 = "") {
    this.#t = a6;
  }
  static fromString(a6, a7 = false) {
    let a8 = [...a3.tokenize(a6), new a3.EOFToken()];
    let a9 = new x(a8);
    a9.read();
    if (a9.currentToken.tokenType === "WHITESPACE") {
      a9.read();
    }
    if (a9.currentToken.tokenType === "URL") {
      let aa = a9.currentToken.value;
      a9.read();
      if (a9.currentToken.tokenType === "WHITESPACE") {
        a9.read();
      }
      if (a9.currentToken.tokenType === "EOF") {
        return new y(aa);
      }
      if (a7) {
        throw new DOMException("Expected EOF token.", "SyntaxError");
      }
      return null;
    }
    if (
      a9.currentToken.tokenType === "FUNCTION" &&
      a9.currentToken.value === "url"
    ) {
      a9.read();
      if (a9.currentToken.tokenType === "WHITESPACE") {
        a9.read();
      }
      if (a9.currentToken.tokenType === "STRING") {
        let ab = a9.currentToken.value;
        a9.read();
        if (a9.currentToken.tokenType === "WHITESPACE") {
          a9.read();
        }
        if (a9.currentToken.tokenType === ")") {
          a9.read();
          if (a9.currentToken.tokenType === "WHITESPACE") {
            a9.read();
          }
          if (a9.currentToken.tokenType === "EOF") {
            return new y(ab.trim());
          }
          if (a7) {
            throw new DOMException("Expected EOF token.", "SyntaxError");
          }
          return null;
        }
        if (a7) {
          throw new DOMException('Expected ")" token.', "SyntaxError");
        }
        return null;
      }
      if (a7) {
        throw new DOMException("Expected STRING token.", "SyntaxError");
      }
      return null;
    }
    if (a7) {
      throw new DOMException("Expected URL or FUNCTION token.", "SyntaxError");
    }
    return null;
  }
  toString() {
    return "url(" + this.value + ")";
  }
}
let k = (a6, a7) => {
  if (a6.length === 0) {
    return false;
  }
  for (let a8 = 0; a8 < a6.length; a8 += 1) {
    if (a6[a8] !== a7) {
      return false;
    }
  }
  return true;
};
const w = [
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
const v = {
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
const N = {
  macos: [
    "Arial",
    "Helvetica",
    "PingFang SC",
    "Menlo",
    "Monaco",
    "Apple Symbols",
    "Lucida Grande",
    "Courier New",
    "Geeza Pro",
    "Noto Nastaliq Urdu",
    "Ayuthaya",
    "Kailasa",
    "PingFang TC",
    "Hiragino Sans",
    "Hiragino Sans GB",
    "PingFang HK",
    "Apple SD Gothic Neo",
    "Kohinoor Bangla",
    "Kohinoor Devanagari",
    "Kohinoor Gujarati",
    "Mukta Mahee",
    "Noto Sans Kannada",
    "Khmer Sangam MN",
    "Lao Sangam MN",
    "Malayalam Sangam MN",
    "Noto Sans Myanmar",
    "Noto Sans Zawgyi",
    "Noto Sans Oriya",
    "Sinhala Sangam MN",
    "Tamil Sangam MN",
    "Kohinoor Telugu",
    "Noto Sans Armenian",
    "Euphemia UCAS",
    "STIX General",
    "Galvji",
    "Kefa",
    "Apple Color Emoji",
  ],
  windows: [
    "Arial",
    "Tahoma",
    "Segoe UI",
    "Segoe UI Historic",
    "Segoe UI Symbol",
    "Segoe UI Emoji",
    "Cambria Math",
    "Abyssinica SIL",
    "DaunPehn",
    "David",
    "DokChampa",
    "Ebrima",
    "Estrangelo Edessa",
    "Ethiopia Jiret",
    "Gadugi",
    "GF Zemen Unicode",
    "Gulim",
    "Han Nom A",
    "Javanese Text",
    "Lao UI",
    "Leelawadee UI",
    "Kartika",
    "Khmer UI",
    "Malgun Gothic",
    "Mangal",
    "Meiryo",
    "Microsoft New Tai Lue",
    "Microsoft YaHei",
    "Mongolian Baiti",
    "MoolBoran",
    "MS PGothic",
    "Myanmar Text",
    "Nirmala UI",
    "Nuosu SIL",
    "Nyala",
    "Phetsarath OT",
    "Plantagenet",
    "PMingLiU",
    "Raavi",
    "Saysettha OT",
    "Shruti",
    "Simsun",
    "Sylfaen",
    "Tunga",
    "Visual Geez Unicode",
    "Vrinda",
    "WenQuanYi Zen Hei",
    "Yu Gothic",
    "Arial Unicode MS",
    "Code2000",
  ],
  linux: [
    "Noto Sans",
    "Noto Sans Arabic",
    "Noto Sans Armenian",
    "Noto Sans Ethiopic",
    "Noto Sans Georgian",
    "Noto Sans Gurmukhi",
    "Noto Sans Hebrew",
    "Noto Sans Lao",
    "Noto Sans Math",
    "Droid Sans",
    "Droid Arabic Kufi",
    "Droid Sans Armenian",
    "Droid Sans Devanagari",
    "Droid Sans Ethiopic",
    "Droid Sans Georgian",
    "Droid Sans Hebrew",
    "Droid Sans Japanese",
    "Droid Sans Tamil",
    "Droid Sans Thai",
    "Droid Sans Fallback",
    "Lohit Assamese",
    "Lohit Bengali",
    "Lohit Devanagari",
    "Lohit Gujarati",
    "Lohit Kannada",
    "Lohit Marathi",
    "Lohit Odia",
    "Lohit Tamil",
    "Lohit Telugu",
    "STIX",
    "STIX Two Math",
    "Symbola",
  ],
};
let U = document.createElement("template");
let S = (a6, ...a7) => {
  let a8 = [];
  for (let ab = 0; ab < a6.length; ab += 1) {
    a8.push(a6[ab]);
    if (a7[ab] !== undefined) {
      a8.push(a7[ab]);
    }
  }
  let a9 = a8.join("");
  U.innerHTML = a9;
  let aa = document.importNode(U.content, true);
  if (aa.children.length === 1) {
    return aa.firstElementChild;
  } else {
    return aa;
  }
};
let F = (a6, ...a7) => {
  let a8 = [];
  for (let ab = 0; ab < a6.length; ab += 1) {
    a8.push(a6[ab]);
    if (a7[ab] !== undefined) {
      a8.push(a7[ab]);
    }
  }
  let a9 = a8.join("");
  let aa = new CSSStyleSheet();
  aa.replaceSync(a9);
  return aa;
};
var C = new (class {
  #i;
  #n = null;
  #a = {};
  constructor() {
    this.#i = new a4("GoogleFontsManager");
    this.#i.version(1).stores({
      cache: "family",
    });
  }
  search(a6 = "", a7 = "alphabetical", a8 = "all", a9 = "all", aa = "all") {
    return new Promise(async (ab) => {
      await this.#o();
      let ac = [];
      let ad = this.#i.cache;
      if (a6.trim() !== "") {
        ad = ad.filter((af) =>
          af.family.toLowerCase().includes(a6.trim().toLowerCase())
        );
      }
      if (a8 !== "all") {
        ad = ad.filter((af) => af.category === a8);
      }
      if (a9 !== "all") {
        ad = ad.filter((af) => af.subsets.includes(a9));
      }
      ac = await ad.toArray();
      if (a7 === "date") {
        ac = ac.sort((af, ag) => (af.dateRank > ag.dateRank ? -1 : 1));
      } else if (a7 === "popularity") {
        ac = ac.sort((af, ag) =>
          af.popularityRank > ag.popularityRank ? -1 : 1
        );
      } else if (a7 === "trending") {
        ac = ac.sort((af, ag) => (af.trendingRank > ag.trendingRank ? -1 : 1));
      }
      if (aa !== "all") {
        ac = ac.slice(aa * 40, (aa + 1) * 40);
      }
      ab(ac);
    });
  }
  refresh() {
    return new Promise(async (a6, a7) => {
      let a8;
      if (this.#n === null) {
        this.#n = new a5.Client({
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
        a8 = await this.#n.collections("googleFonts").documents().export();
      } catch (aa) {
        return a7(aa);
      }
      let a9 = a8
        .split("\n")
        .map((ab) => JSON.parse(ab))
        .map((ab) => ({
          family: ab.family,
          faces: ab.faces,
          category: ab.category,
          subsets: ab.subsets,
          license: ab.license,
          thumbnail: ab.thumbnail,
          urls: ab.urls,
          dateRank: ab.dateRank,
          popularityRank: ab.popularityRank,
          trendingRank: ab.trendingRank,
          pageURL: "https://fonts.google.com/specimen/" + ab.id,
          cachedTime: Date.now(),
        }));
      await this.#i.cache.clear();
      await this.#i.cache.bulkPut(a9);
      a6();
    });
  }
  getFontFaceRulesFromUrl(a6, a7 = false) {
    return new Promise(async (a8) => {
      let a9 = [];
      await this.#o();
      if (a7) {
        let aa = await this.#l(a6);
        for (let ab of aa.cssRules) {
          if (ab.type === CSSRule.FONT_FACE_RULE) {
            a9.push(ab);
          }
        }
      } else {
        let ac = [];
        let ad = new URL(a6);
        let af = ad.searchParams.get("display") || "auto";
        if (a6.startsWith("https://fonts.googleapis.com/css?")) {
          let ag = ad.searchParams.get("family");
          ag.split("|");
          ad.searchParams.get("subset");
          let ah = {
            regular: "400",
            bold: "700",
            italic: "400italic",
            bolditalic: "700italic",
            r: "400",
            b: "700",
            i: "400italic",
          };
          for (let ai of ag.split("|")) {
            let aj = [];
            let [ak, al] = ai.split(":");
            for (let am of al.split(",")) {
              am = ah[am] || am;
              aj.push(am);
            }
            ac.push({
              family: ak,
              faceNames: aj,
            });
          }
        } else if (a6.startsWith("https://fonts.googleapis.com/css2?")) {
          let an = ad.searchParams.getAll("family");
          for (let ao of an) {
            let [ap, aq] = ao.split(":");
            if (aq === undefined) {
              ac.push({
                family: ap,
                faceNames: ["400"],
              });
            } else {
              let ar = [];
              let [as, at] = aq.split("@");
              let au = as.split(",");
              let av = at.split(";");
              for (let aw of av) {
                let ax = {
                  wght: "400",
                  ital: "0",
                };
                for (let ay = 0; ay < au.length; ay += 1) {
                  ax[au[ay]] = aw.split(",")[ay];
                }
                ar.push(ax.wght + (ax.ital === "1" ? "italic" : ""));
              }
              ac.push({
                family: ap,
                faceNames: ar,
              });
            }
          }
        }
        {
          let az = this.#i.cache;
          for (let { family: aA, faceNames: aB } of ac) {
            let aC = await az.get({
              family: aA,
            });
            if (aC) {
              for (let aD of aB) {
                let aE = aC.urls[aD];
                if (aE) {
                  let aF = aD.substring(0, 3);
                  let aG = aD.includes("italic") ? "italic" : "normal";
                  let aH = [];
                  for (let aK of aC.subsets) {
                    if (v[aK]) {
                      aH.push(v[aK]);
                    }
                  }
                  if (aH.length === 0) {
                    aH = "U+0-10FFFF";
                  }
                  let aI = aH.join(",");
                  let aJ = F`
                    @font-face {
                      font-family: "${aA}";
                      font-style: ${aG};
                      font-weight: ${aF};
                      font-display: ${af};
                      font-unicode-range: ${aI};
                      src: url(${aE});
                    }
                  `;
                  a9.push(aJ.cssRules[0]);
                }
              }
            }
          }
        }
      }
      a8(a9);
    });
  }
  getFamilyDescriptor(a6) {
    return new Promise(async (a7) => {
      await this.#o();
      a7((await this.#i.cache.where("family").equals(a6).toArray())[0] || null);
    });
  }
  #l(a6) {
    return new Promise(async (a7) => {
      let a8 = null;
      if (this.#a[a6]) {
        a8 = this.#a[a6];
      } else {
        let a9 = await fetch(a6);
        let aa = await a9.text();
        a8 = new CSSStyleSheet();
        a8.replaceSync(aa);
        this.#a[a6] = a8;
      }
      a7(a8);
    });
  }
  #o() {
    return new Promise(async (a6) => {
      let a7 = await this.#i.cache.count();
      let a8 = true;
      if (a7 > 0) {
        let a9 = await this.#i.cache.get("Roboto");
        if (a9) {
          let aa = 1296000000;
          a8 = Date.now() - a9.cachedTime > aa;
        }
      }
      if (a7 === 0 || a8 === true) {
        await this.refresh();
      }
      a6();
    });
  }
})();
class T {
  get items() {
    return this.#s;
  }
  set items(a6) {
    this.#s = [...a6];
  }
  get type() {
    return "<font-face-src>";
  }
  #s;
  constructor(a6 = []) {
    this.#s = [...a6];
  }
  static fromString(a6, a7 = false) {
    let a8 = a3.parseACommaSeparatedListOfComponentValues(a6);
    let a9 = [];
    for (let aa of a8) {
      let ab = [...aa, new a3.EOFToken()].filter(
        (af) => af.tokenType !== "WHITESPACE"
      );
      let ac = new x(ab);
      let ad = {};
      ac.read();
      if (ac.currentToken.type === "FUNCTION") {
        if (ac.currentToken.name === "local") {
          let af = "";
          for (let ag of ac.currentToken.value) {
            if (ag.tokenType === "STRING") {
              af += ag.value;
            } else {
              af += ag.toSource();
            }
          }
          ad.type = "local";
          ad.name = af;
        } else if (ac.currentToken.name === "url") {
          let ah = "";
          for (let ai of ac.currentToken.value) {
            if (ai.tokenType === "STRING") {
              ah += ai.value;
            } else {
              ah += ai.toSource();
            }
          }
          ah.trim();
          if (ah.startsWith("data:")) {
            ad.type = "embedded";
          } else {
            ad.type = "external";
          }
          ad.url = new y(ah);
          ac.read();
          if (
            ac.currentToken.type == "FUNCTION" &&
            ac.currentToken.name === "format"
          ) {
            ad.format = ac.currentToken.value[0].value;
          }
        }
      } else if (ac.currentToken.tokenType === "URL") {
        let aj = ac.currentToken.value;
        if (aj.startsWith("data:")) {
          ad.type = "embedded";
        } else {
          ad.type = "external";
        }
        ad.url = new y(aj);
        ac.read();
        if (
          ac.currentToken.type == "FUNCTION" &&
          ac.currentToken.name === "format"
        ) {
          ad.format = ac.currentToken.value[0].value;
        }
      }
      a9.push(ad);
    }
    return new T(a9);
  }
  toString() {
    let a6 = [];
    for (let a7 of this.items) {
      if (a7.type === "local") {
        let a8 = "local(" + a7.name + ")";
        a6.push(a8);
      } else if (a7.type === "external" || a7.type === "embedded") {
        let a9 = "url(" + a7.url + ")";
        if (a7.format) {
          a9 += ' format("' + a7.format + '")';
        }
        a6.push(a9);
      }
    }
    return a6.join(", ");
  }
}
class M {
  get items() {
    return this.#s;
  }
  set items(a6) {
    this.#s = [...a6];
  }
  get type() {
    return "<font-family>";
  }
  #s;
  constructor(a6 = []) {
    this.#s = [...a6];
  }
  static fromString(a6, a7 = false) {
    let a8 = [...a3.tokenize(a6), new a3.EOFToken()];
    let a9 = new x(a8);
    let aa = [];
    a9.read();
    if (a9.currentToken.tokenType === "WHITESPACE") {
      a9.read();
    }
    if (
      a9.currentToken.tokenType !== "STRING" &&
      a9.currentToken.tokenType !== "IDENT"
    ) {
      if (a7) {
        throw new DOMException(
          "Expected STRING or IDENT token.",
          "SyntaxError"
        );
      }
      return null;
    }
    for (aa.push(a9.currentToken.value); ; ) {
      let ab = false;
      a9.read();
      if (a9.currentToken.tokenType === "WHITESPACE") {
        a9.read();
      }
      if (a9.currentToken.tokenType === ",") {
        ab = true;
        a9.read();
      }
      if (a9.currentToken.tokenType === "WHITESPACE") {
        a9.read();
      }
      if (
        a9.currentToken.tokenType !== "STRING" &&
        a9.currentToken.tokenType !== "IDENT"
      ) {
        if (a9.currentToken.tokenType === "EOF") {
          if (ab) {
            if (a7) {
              throw new DOMException(
                "Unexpected trailing comma.",
                "SyntaxError"
              );
            }
            return null;
          }
          return new M(aa);
        }
        if (a7) {
          throw new DOMException(
            'Unexpected token "' + a9.currentToken.tokenType + '".',
            "SyntaxError"
          );
        }
        return null;
      }
      if (!ab) {
        if (a7) {
          throw new DOMException(
            "Unexpected STRING or IDENT token.",
            "SyntaxError"
          );
        }
        return null;
      }
      aa.push(a9.currentToken.value);
    }
  }
  toString() {
    return this.items
      .map((a6) => (w.includes(a6) ? a6 : '"' + a6 + '"'))
      .join(", ");
  }
}
if (!["iPhone", "iPad"].includes(navigator.platform)) {
  navigator.platform.startsWith("Mac");
}
const A =
  navigator.userAgent.indexOf("Safari/") > -1 &&
  navigator.userAgent.indexOf("Chrome") === -1;
if (window.frameElement === null) {
  document.body.dataset.app;
}
let P = (a6, a7, a8) => a6.split(a7).join(a8);
let D = (a6) => (a6 === "normal" ? "400" : a6 === "bold" ? "700" : a6);
let O = (a6) => {
  a6 = a6.toLowerCase();
  a6 = P(a6, " ", "");
  a6 = P(a6, "-", "");
  let a7 = "400";
  if ((a6 = P(a6, "_", "")).includes("thin") || a6.includes("hairline")) {
    a7 = "100";
  } else if (a6.includes("extralight") || a6.includes("ultralight")) {
    a7 = "200";
  } else if (a6.includes("light")) {
    a7 = "300";
  } else if (a6.includes("medium")) {
    a7 = "500";
  } else if (a6.includes("semibold") || a6.includes("demibold")) {
    a7 = "600";
  } else if (a6.includes("extrabold") || a6.includes("ultrabold")) {
    a7 = "800";
  } else if (a6.includes("bold")) {
    a7 = "700";
  } else if (a6.includes("black") || a6.includes("heavy")) {
    a7 = "900";
  }
  return a7;
};
let E = (a6) => {
  a6 = a6.toLowerCase();
  a6 = P(a6, " ", "");
  a6 = P(a6, "-", "");
  let a7 = "normal";
  if ((a6 = P(a6, "_", "")).includes("italic")) {
    a7 = "italic";
  } else if (a6.includes("oblique")) {
    a7 = "oblique";
  }
  return a7;
};
let z = (a6, a7, a8 = "400", a9 = "normal") => {
  let aa = ((ad, af) => {
    let ag = ad.filter((ah) => ah.family === af);
    return ag;
  })(a6, a7);
  let ab = ((ad, af) => {
    let ag = ad.filter((ah) => {
      if (ah instanceof FontFace) {
        if (af === "normal") {
          return ah.style === "normal";
        }
        if (af === "italic" || af === "oblique") {
          return ah.style === "italic" || ah.style === "oblique";
        }
      } else {
        let ai = E(ah.style);
        if (af === "normal") {
          return ai === "normal";
        }
        if (af === "italic" || af === "oblique") {
          return ai.style === "italic" || ai.style === "oblique";
        }
      }
    });
    if (ag.length === 0) {
      ag = [...ad];
    }
    return ag;
  })(aa, a9);
  let ac = ((ad, af) => {
    let ag = [];
    for (let ai of ad) {
      if (ai instanceof FontFace) {
        ag.push(ai.weight);
      } else {
        ag.push(O(ai.style));
      }
    }
    let ah = ((aj, ak) => {
      aj = parseInt(aj);
      let al;
      let am = ak.map((ao) => parseInt(ao)).sort();
      let an = [...am].reverse();
      if (aj < 400) {
        al = an.find((ao) => ao <= aj) || am.find((ao) => ao > aj);
      } else if (aj >= 400 && aj <= 500) {
        al =
          am.find((ao) => ao >= aj && ao <= 500) ||
          an.find((ao) => ao < aj) ||
          am.find((ao) => ao > aj);
      } else if (aj > 500) {
        al = am.find((ao) => ao >= aj) || an.find((ao) => ao < aj);
      }
      return "" + al;
    })(af, ag);
    if (ah) {
      return ad[ag.indexOf(ah)] || null;
    }
    return null;
  })(ab, a8);
  return ac;
};
let R = (a6) =>
  new Promise(async (a7) => {
    if (R.t === undefined) {
      R.t = {};
    }
    let a8 = R.t;
    let a9 = null;
    let aa = (await import("/libs/font-kit/font-kit.js")).default;
    if (a6 instanceof FontFace) {
      let ab = a6.family + " " + a6.weight + " " + a6.style;
      if (a8[ab]) {
        a9 = a8[ab];
      } else {
        let ac = await fetch(T.fromString(a6.src).items[0].url.value);
        let ad = await ac.blob();
        let af = await ad.arrayBuffer();
        a9 = aa.create(new Uint8Array(af));
        a8[ab] = a9;
      }
    } else if (a6 instanceof FontData) {
      if (a8[a6.postscriptName]) {
        a9 = a8[a6.postscriptName];
      } else {
        let ag = await a6.blob();
        let ah = await ag.arrayBuffer();
        a9 = aa.create(new Uint8Array(ah));
        a8[a6.postscriptName] = a9;
      }
    }
    a7(a9);
  });
let V = (a6) => {
  let a7 = [];
  for (let { command: a8, args: a9 } of a6.path.commands) {
    let aa;
    if (a8 === "moveTo") {
      aa = "M";
    } else if (a8 === "lineTo") {
      aa = "L";
    } else if (a8 === "quadraticCurveTo") {
      aa = "Q";
    } else if (a8 === "bezierCurveTo") {
      aa = "C";
    } else if (a8 === "closePath") {
      aa = "Z";
    }
    a7.push({
      type: aa,
      values: [...a9],
    });
  }
  return a7;
};
let B = (a6) => {
  let a7;
  let a8 = document.createNodeIterator(a6, NodeFilter.SHOW_TEXT, null);
  let a9 = {
    text: true,
    textPath: true,
    tspan: true,
  };
  while ((a7 = a8.nextNode())) {
    if (!a9[a7.parentElement.localName]) {
      if (L(a7.textContent)) {
        a7.remove();
      }
    }
  }
};
let L = (a6) => !/[^\t\n\r ]/.test(a6);
let I = (a6) => {
  let a7 = "";
  let a8 = a6.sheet.cssRules[0];
  for (let a9 of a6.sheet.cssRules) {
    if (a9 !== a8) {
      a7 += "\n";
    }
    a7 += a9.cssText;
  }
  if (a6.textContent !== a7) {
    a6.textContent = a7;
  }
};
class G {
  #r;
  constructor(a6) {
    this.#r = a6;
  }
  normalize() {
    ((a6) => {
      let a7 = [];
      let a8 = false;
      for (let a9 of a6.querySelectorAll("style")) {
        if (a9.closest("foreignObject") === null) {
          let aa = {};
          let ab = [];
          for (let ac of a9.sheet.cssRules) {
            if (ac.type === CSSRule.FONT_FACE_RULE) {
              let ad = M.fromString(ac.style.fontFamily).items[0];
              if (aa[ad] === undefined) {
                aa[ad] = [];
              }
              aa[ad].push(ac);
            } else if (ac.type === CSSRule.IMPORT_RULE) {
              if (ac.href.startsWith("https://fonts.googleapis.com/css2")) {
                let af = new URL(ac.href);
                let ag = new URLSearchParams(af.search);
                for (let ah of ag.getAll("family")) {
                  let [ai] = ah.split(":");
                  let aj = new URLSearchParams(af.search);
                  aj.set("family", ah);
                  let ak =
                    "https://fonts.googleapis.com/css2?" +
                    decodeURIComponent(aj.toString());
                  if (aa[ai] === undefined) {
                    aa[ai] = [];
                  }
                  aa[ai].push({
                    cssText: '@import url("' + encodeURI(ak) + '");',
                    href: ak,
                    type: ac.type,
                  });
                }
              } else if (
                ac.href.startsWith("https://fonts.googleapis.com/css")
              ) {
                let al = new URL(ac.href);
                let am = new URLSearchParams(al.search);
                for (let an of am.get("family").split("|")) {
                  let [ao] = an.split(":");
                  let ap = new URLSearchParams(al.search);
                  ap.set("family", an);
                  let aq =
                    "https://fonts.googleapis.com/css?" +
                    decodeURIComponent(ap.toString());
                  if (aa[ao] === undefined) {
                    aa[ao] = [];
                  }
                  aa[ao].push({
                    cssText: '@import url("' + encodeURI(aq) + '");',
                    href: aq,
                    type: ac.type,
                  });
                }
              } else {
                ab.push(ac);
              }
            } else {
              ab.push(ac);
            }
          }
          if (Object.keys(aa).length > 0 || a9.hasAttribute("data-bx-fonts")) {
            a7.push({
              styleElement: a9,
              fontRulesByFamily: aa,
              otherRules: ab,
            });
          }
        }
      }
      {
        let ar = [];
        for (let as of a7) {
          let { styleElement: at, fontRulesByFamily: au, otherRules: av } = as;
          let aw = Object.keys(au);
          if (aw.length === 0) {
            if (at.hasAttribute("data-bx-fonts")) {
              a8 = true;
              break;
            }
          } else if (aw.length === 1) {
            let ax = aw[0];
            if (ar.includes(ax)) {
              a8 = true;
              break;
            }
            if (at.getAttribute("data-bx-fonts") !== ax) {
              a8 = true;
              break;
            }
            if (av.length > 0) {
              a8 = true;
              break;
            }
          } else if (aw.length > 1) {
            a8 = true;
            break;
          }
          ar.push(...aw);
        }
      }
      if (a8 === true) {
        for (let ay of a7) {
          for (let [az, aA] of Object.entries(ay.fontRulesByFamily)) {
            let aB = a7.find((aC) => aC.fontRulesByFamily[az] !== undefined);
            if (aB !== ay) {
              aB.fontRulesByFamily[az].push(...aA);
              delete ay.fontRulesByFamily[az];
            }
          }
        }
        for (let {
          styleElement: aC,
          fontRulesByFamily: aD,
          otherRules: aE,
        } of a7) {
          for (let [aF, aG] of Object.entries(aD)) {
            let aH = Ce("svg:style");
            let aI = "";
            aG.sort((aJ) => (aJ.type === CSSRule.IMPORT_RULE ? -1 : 1));
            for (let aJ of aG) {
              aI += aJ.cssText;
            }
            aH.textContent = aI;
            aH.setAttribute("data-bx-fonts", aF);
            if (aC.hasAttribute("data-bx-pinned")) {
              aH.setAttribute("data-bx-pinned", "");
            }
            aC.before(aH);
          }
          if (aE.length === 0) {
            aC.remove();
          } else {
            let aK = "";
            for (let aL of aE) {
              aK += aL.cssText;
            }
            aC.removeAttribute("data-bx-fonts");
            aC.removeAttribute("data-bx-pinned");
            aC.textContent = aK;
          }
        }
      }
    })(this.#r);
  }
  search(a6 = "", a7 = true) {
    return new Promise(async (a8) => {
      let a9 = await this.getFontFaces(null, a7);
      let aa = {};
      for (let ab of a9) {
        if (
          a6 === "" ||
          ab.family.toLowerCase().includes(a6.trim().toLowerCase())
        ) {
          if (aa[ab.family] === undefined) {
            aa[ab.family] = {
              family: ab.family,
              embeddedFaces: [],
              linkedFaces: [],
            };
          }
          if (ab.src.includes("data:")) {
            aa[ab.family].embeddedFaces.push(ab);
          } else {
            aa[ab.family].linkedFaces.push(ab);
          }
        }
      }
      a8(Object.values(aa));
    });
  }
  #h(a6 = null) {
    return new Promise(async (a7) => {
      let a8 = [];
      for (let a9 of this.#r.querySelectorAll("style")) {
        if (a9.closest("foreignObject") === null && a9.sheet !== null) {
          for (let aa of a9.sheet.cssRules) {
            if (aa.type === CSSRule.FONT_FACE_RULE) {
              a8.push(aa);
            } else if (
              aa.type === CSSRule.IMPORT_RULE &&
              aa.href.startsWith("https://fonts.googleapis.com/css")
            ) {
              let ab = await C.getFontFaceRulesFromUrl(aa.href);
              a8.push(...ab);
            }
          }
        }
      }
      if (a6 !== null) {
        a8 = a8.filter(
          (ac) => a6 === M.fromString(ac.style.fontFamily).items[0]
        );
      }
      a7(a8);
    });
  }
  getFontFaces(a6 = null, a7 = false) {
    return new Promise(async (a8) => {
      a8((await this.#h(a6)).map((a9) => this.#p(a9, a7)));
    });
  }
  getMatchedFontFace(a6, a7, a8) {
    return new Promise(async (a9) => {
      let aa = await this.getFontFaces(a6);
      a9(z(aa, a6, a7, a8));
    });
  }
  getFontFaceBaseline(a6) {
    return new Promise(async (a7) => {
      let a8 = 1;
      if (a6.src) {
        let a9 = T.fromString(a6.src).items[0].url.value;
        let aa = await this.#u(a9, "arrayBuffer");
        let ab = (await import("/libs/font-kit/font-kit.js")).default.create(
          new Uint8Array(aa)
        );
        if (ab) {
          let ac = ab.hhea.ascent;
          let ad = ab.hhea.descent;
          a8 = 1 - Math.abs(ad) / (Math.abs(ac) + Math.abs(ad));
        }
      }
      a7(a8);
    });
  }
  getFontFamilyWeights(a6) {
    return new Promise(async (a7) => {
      let a8 = await this.#h(a6);
      let a9 = new Set();
      for (let aa of a8) {
        let ab = aa.style.fontWeight ? D(aa.style.fontWeight) : "400";
        a9.add(ab);
      }
      a7([...a9]);
    });
  }
  pinFontFamily(a6) {
    return new Promise(async (a7) => {
      this.normalize();
      for (let a8 of this.#r.querySelectorAll("style[data-bx-fonts]")) {
        if (a8.getAttribute("data-bx-fonts") === a6) {
          a8.setAttribute("data-bx-pinned", "true");
        }
      }
      a7();
    });
  }
  unpinFontFamily(a6) {
    return new Promise(async (a7) => {
      this.normalize();
      for (let a8 of this.#r.querySelectorAll("style[data-bx-fonts]")) {
        if (a8.getAttribute("data-bx-fonts") === a6) {
          a8.removeAttribute("data-bx-pinned");
        }
      }
      a7();
    });
  }
  removeFontFamily(a6) {
    return new Promise(async (a7) => {
      this.normalize();
      let a8 = this.#r.querySelector('style[data-bx-fonts="' + a6 + '"]');
      if (a8) {
        a8.remove();
      }
      a7();
    });
  }
  linkFontFamily(a6, a7) {
    return new Promise(async (a8) => {
      this.normalize();
      let a9 = this.#r.querySelector('style[data-bx-fonts="' + a6 + '"]');
      if (!a9) {
        a9 = Ce("svg:style");
        a9.setAttribute("data-bx-fonts", a6);
        this.#r.querySelector("defs").append(a9);
      }
      let aa = "@import url(" + a7 + ");";
      a9.textContent = aa;
      a8();
    });
  }
  async unlinkFontFamily(a6) {
    return new Promise(async (a7) => {
      this.normalize();
      let a8 = [...this.#r.querySelectorAll("style[data-bx-fonts]")];
      for (let a9 of a8) {
        if (a9.getAttribute("data-bx-fonts") === a6) {
          let aa = false;
          let ab = [...a9.sheet.cssRules];
          for (let ac = 0; ac < ab.length; ac += 1) {
            let ad = ab[ac];
            if (ad.type === CSSRule.IMPORT_RULE) {
              if (ad.href.startsWith("https://fonts.googleapis.com/css")) {
                let af = await C.getFontFaceRulesFromUrl(ad.href);
                for (let ag of af) {
                  if (ag.type === CSSRule.FONT_FACE_RULE) {
                    let ah = T.fromString(ag.style.src).items[0] || null;
                    if (ah?.type === "external") {
                      let ai = await this.#u(ah.url.value, "dataURL");
                      ag.style.src = 'url("' + encodeURI(ai) + '")';
                      a9.sheet.insertRule(ag.cssText, a9.sheet.cssRules.length);
                      aa = true;
                    }
                  }
                }
              }
              a9.sheet.deleteRule(ac);
            } else if (ad.type === CSSRule.FONT_FACE_RULE) {
              let aj = T.fromString(ad.style.src).items[0] || null;
              if (aj?.type === "external") {
                let ak = await this.#u(aj.url.value, "dataURL");
                ad.style.src = 'url("' + encodeURI(ak) + '")';
                aa = true;
              }
            }
          }
          if (aa) {
            I(a9);
          }
        }
      }
      a7();
    });
  }
  reorderFontFamilies(a6) {
    return new Promise(async (a7) => {
      this.normalize();
      let a8 = [];
      for (let aa of a6) {
        let ab = this.#r.querySelector('style[data-bx-fonts="' + aa + '"]');
        a8.push(ab);
      }
      let a9 = this.#r.querySelector("defs");
      for (let ac of a8) {
        a9.append(ac);
      }
      a7();
    });
  }
  addFontFaces(a6) {
    return new Promise(async (a7) => {
      let a8 = {};
      for (let a9 of a6) {
        if (a8[a9.family] === undefined) {
          a8[a9.family] = [];
        }
        a8[a9.family].push(a9);
      }
      for (let [aa, ab] of Object.entries(a8)) {
        let ac = await this.getFontFaces(aa);
        for (let ad of ab) {
          for (let af of ac) {
            if (
              af.weight === ad.weight &&
              af.style === ad.weight &&
              af.stretch === ad.stretch &&
              af.unicodeRange === ad.unicodeRange &&
              af.variant === ad.variant &&
              af.featureSettings === ad.featureSettings
            ) {
              ac.remove(af);
            }
          }
          ac.push(ad);
        }
        this.#c(ac);
      }
      a7();
    });
  }
  removeFontFace(a6) {
    return new Promise(async (a7) => {
      let a8 = await this.getFontFaces(a6.family);
      let a9 = a8.filter(
        (aa) =>
          aa.style !== a6.style ||
          aa.weight !== a6.weight ||
          aa.stretch !== a6.stretch ||
          aa.unicodeRange !== a6.unicodeRange
      );
      if (a9.length !== a8.length) {
        this.#c(a9);
      }
      a7();
    });
  }
  #c(a6) {
    let a7 = a6.length > 0 ? a6[0].family : null;
    if (a7 !== null) {
      if (!a6.find((a8) => a8.family !== a7)) {
        this.normalize();
        let a8 = this.#r.querySelector('style[data-bx-fonts="' + a7 + '"]');
        if (!a8) {
          a8 = Ce("svg:style");
          a8.setAttribute("data-bx-fonts", a7);
          this.#r.querySelector("defs").append(a8);
        }
        let a9 = "";
        for (let aa of a6) {
          a9 += this.#m(aa);
        }
        a8.textContent = a9;
        return;
      }
      console.error(
        "Passed font faces from different families to fontsManger.#setFamilyFontFaces()."
      );
    }
  }
  #u(a6, a7 = "dataURL") {
    return new Promise(async (a8) => {
      let a9 = await fetch(a6);
      let aa = await a9.blob();
      if (a7 === "dataURL") {
        let ab = await ((ac) =>
          new Promise((ad) => {
            let af = new FileReader();
            af.readAsDataURL(ac);
            af.onloadend = () => {
              let ag = af.result;
              ad(ag);
            };
          }))(aa);
        a8(ab);
      } else if (a7 === "arrayBuffer") {
        a8(await aa.arrayBuffer());
      }
    });
  }
  #p(a6, a7 = false) {
    let a8 = a6.style.src;
    let a9 = M.fromString(a6.style.fontFamily).items[0];
    let aa = a6.style.fontStyle || "normal";
    let ab = a6.style.fontWeight ? D(a6.style.fontWeight) : "400";
    let ac = a6.style.fontStretch || "normal";
    let ad = a6.style.unicodeRange || "U+0-10FFFF";
    let af = a6.style.fontVariant || "normal";
    let ag = a6.style.fontFeatureSettings || "normal";
    if (a7) {
      return {
        src: a8,
        family: a9,
        style: aa,
        weight: ab,
        stretch: ac,
        unicodeRange: ad,
        variant: af,
        featureSettings: ag,
      };
    }
    {
      let ah = new FontFace(a9, a8, {
        style: aa,
        weight: ab,
        stretch: ac,
        unicodeRange: ad,
        variant: af,
        featureSettings: ag,
      });
      ah.src = a8;
      return ah;
    }
  }
  #m(a6) {
    let a7 = "@font-face { ";
    a7 += 'font-family: "' + a6.family + '"; ';
    a7 += "font-style: " + a6.style + "; ";
    a7 += "font-weight: " + a6.weight + "; ";
    a7 += "font-stretch: " + a6.stretch + "; ";
    a7 += "font-unicode-range: " + a6.unicodeRange + "; ";
    a7 += "font-variant: " + a6.variant + "; ";
    a7 += "font-feature-settings: " + a6.featureSettings + "; ";
    a7 += "src: " + a6.src + "; ";
    a7 += "}";
    return a7;
  }
}
var j = new (class extends EventTarget {
  #f = "init";
  #d = [];
  #i;
  get status() {
    return this.#f;
  }
  constructor() {
    super();
    this.#i = new a4("LocalFontsManager");
    this.#i.version(1).stores({
      cache: "family",
    });
    this.#i
      .version(2)
      .stores({
        cache: "family",
      })
      .upgrade((a6) => a6.cache.clear());
    if (window.queryLocalFonts === undefined) {
      this.#f = "no-api";
    } else {
      navigator.permissions
        .query({
          name: "local-fonts",
        })
        .then((a6) => {
          if (a6.state === "granted") {
            this.refresh();
          } else if (a6.state !== "prompt") {
            this.#f = "no-permission";
          }
        });
    }
  }
  search(a6 = "", a7 = "all") {
    return new Promise(async (a8) => {
      let a9 = [];
      let aa = this.#i.cache;
      if (a6.trim() !== "") {
        aa = aa.filter((ab) =>
          ab.family.toLowerCase().includes(a6.trim().toLowerCase())
        );
      }
      a9 = await aa.toArray();
      if (a7 !== "all") {
        a9 = a9.slice(a7 * 40, (a7 + 1) * 40);
      }
      a8(a9);
    });
  }
  refresh() {
    return new Promise(async (a6, a7) => {
      let a8;
      try {
        a8 = await this.getLocalFontsMetadata(true);
      } catch (aa) {
        return a7(aa);
      }
      let a9 = [];
      for (let ab of a8) {
        let ac = O(ab.style) + (E(ab.style) === "italic" ? "i" : "");
        let ad = a9.find((af) => af.family === ab.family);
        if (ad) {
          if (ad.faces.includes(ac) === false) {
            ad.faces.push(ac);
          }
        } else {
          let af = {
            family: ab.family,
            faces: [ac],
          };
          a9.push(af);
        }
      }
      for (let ag of a9) {
        ag.faces.sort();
      }
      await this.#i.cache.clear();
      await this.#i.cache.bulkPut(a9);
      this.#f = "ready";
      a6();
    });
  }
  getLocalFontsMetadata(a6 = false) {
    return new Promise(async (a7, a8) => {
      if (this.status === "no-api") {
        a7([]);
      } else {
        if (this.#d.length < 10 || a6) {
          try {
            this.#d = await window.queryLocalFonts();
          } catch (a9) {
            return a8({
              message: a9.message,
              name: a9.name,
            });
          }
        }
        a7(this.#d);
      }
    });
  }
  getCacheSize() {
    return new Promise(async (a6) => {
      a6(await this.#i.cache.count());
    });
  }
  getFamilyDescriptor(a6) {
    return new Promise(async (a7) => {
      a7((await this.#i.cache.where("family").equals(a6).toArray())[0] || null);
    });
  }
  getFamilyWeights(a6) {
    return new Promise(async (a7) => {
      let a8 = await this.getFamilyDescriptor(a6);
      if (a8) {
        let a9 = new Set();
        for (let aa of a8.faces) {
          let ab = aa.substring(0, 3);
          a9.add(ab);
        }
        a7([...a9]);
      } else {
        a7(["400"]);
      }
    });
  }
})();
let $;
let H = (a6, a7) =>
  a6.is2D
    ? new DOMMatrix([
        b(a6.a, a7),
        b(a6.b, a7),
        b(a6.c, a7),
        b(a6.d, a7),
        b(a6.e, a7),
        b(a6.f, a7),
      ])
    : new DOMMatrix([
        b(a6.m11, a7),
        b(a6.m12, a7),
        b(a6.m13, a7),
        b(a6.m14, a7),
        b(a6.m21, a7),
        b(a6.m22, a7),
        b(a6.m23, a7),
        b(a6.m24, a7),
        b(a6.m31, a7),
        b(a6.m32, a7),
        b(a6.m33, a7),
        b(a6.m34, a7),
        b(a6.m41, a7),
        b(a6.m42, a7),
        b(a6.m43, a7),
        b(a6.m44, a7),
      ]);
let W = (a6, a7) => JSON.stringify(a6) === JSON.stringify(a7);
let q = () => {
  if ($ === undefined) {
    $ =
      navigator.platform.startsWith("Mac") === true
        ? "macos"
        : ["iPhone", "iPad", "iPod"].indexOf(navigator.platform) !== -1
        ? "ios"
        : ["Win32", "Win64", "Windows", "WinCE"].indexOf(navigator.platform) !==
          -1
        ? "windows"
        : /CrOS/.test(navigator.userAgent)
        ? "chromeos"
        : /Android/.test(navigator.userAgent)
        ? "android"
        : /Linux/.test(navigator.platform)
        ? "linux"
        : null;
  }
  return $;
};
const K =
  "\n  position: fixed;\n  top: -1px;\n  left: -1px;\n  width: 1px;\n  height: 1px;\n  contain: strict;\n  overflow: hidden;\n".replaceAll(
    "\n  ",
    ""
  );
class _ {
  #g;
  #b;
  get shadowRoot() {
    return this.#g.shadowRoot;
  }
  constructor(a6) {
    this.#b = a6;
    this.#g = document.createElement("div");
    this.#g.setAttribute("style", K);
    this.#g.setAttribute("class", "offscreen-container");
    this.#g.attachShadow({
      mode: "open",
    });
    this.#g.shadowRoot.append(a6);
    document.body.append(this.#g);
  }
  destroy() {
    if (this.#b.parentNode === this.#g.shadowRoot) {
      this.#b.remove();
    }
    this.#g.remove();
    this.#g = null;
  }
}
let Z = (a6, a7) => {
  let a8;
  let a9 = false;
  return function () {
    if (!a9) {
      a9 = true;
      a8 = a6.apply(a7 || this, arguments);
      a6 = null;
    }
    return a8;
  };
};
let { abs: J, tan: X } = Math;
let Q = (a6) => {
  if (a6.isConnected === false) {
    new _(a6);
  }
  if (A) {
    let a7 = null;
    if (a6.style.transform === "") {
      a7 =
        a6.localName === "linearGradient" || a6.localName === "radialGradient"
          ? a6.gradientTransform.baseVal.consolidate()
          : a6.localName === "pattern"
          ? a6.patternTransform.baseVal.consolidate()
          : a6.transform.baseVal.consolidate();
      if (a7) {
        return DOMMatrix.fromMatrix(a7.matrix);
      } else {
        return new DOMMatrix();
      }
    }
    {
      let a8 = a6.computedStyleMap().get("transform");
      if (a8.value === "none") {
        return new DOMMatrix();
      } else {
        return a8.toMatrix();
      }
    }
  }
  {
    let a9 = a6.computedStyleMap().get("transform");
    if (a9.value === "none") {
      return new DOMMatrix();
    } else {
      return a9.toMatrix();
    }
  }
};
let Y = (a6, a7, a8 = null) => {
  a6.style.removeProperty("transform");
  if (a7 === null) {
    if (
      a6.localName === "linearGradient" ||
      a6.localName === "radialGradient"
    ) {
      a6.removeAttribute("gradientTransform");
    } else if (a6.localName === "pattern") {
      a6.removeAttribute("patternTransform");
    } else {
      a6.removeAttribute("transform");
    }
  } else {
    if (a8 !== null) {
      a7 = H(a7, a8);
    }
    if (a7.isIdentity) {
      if (
        a6.localName === "linearGradient" ||
        a6.localName === "radialGradient"
      ) {
        a6.removeAttribute("gradientTransform");
      } else if (a6.localName === "pattern") {
        a6.removeAttribute("patternTransform");
      } else {
        a6.removeAttribute("transform");
      }
    } else if (
      a6.localName === "linearGradient" ||
      a6.localName === "radialGradient"
    ) {
      a6.setAttribute("gradientTransform", a7.toString());
    } else if (a6.localName === "pattern") {
      a6.setAttribute("patternTransform", a7.toString());
    } else {
      a6.setAttribute("transform", a7.toString());
    }
  }
};
let ee = (a6, a7, a8 = "userSpaceOnUse", a9 = null, aa = null) => {
  let ab = null;
  {
    let ac = Q(a6);
    let [ad, af] = ((ao, ap = "auto") => {
      let aq;
      let ar;
      let as;
      let at;
      let au = Z(() => ce(ao));
      {
        let av = getComputedStyle(ao);
        let { transformBox: aw } = av;
        if (aw === "fill-box" && ao.style.transformOrigin !== "") {
          let ax = ao.style.transformOrigin
            .split(" ")
            .map((ay) => ay.trim())
            .map((ay) =>
              ay === "center"
                ? CSSUnitValue.parse("50%")
                : ay === "top" || ay === "left"
                ? CSSUnitValue.parse("0%")
                : ay === "bottom" || ay === "right"
                ? CSSUnitValue.parse("100%")
                : CSSUnitValue.parse(ay)
            );
          if (ax.length === 1) {
            aq = ax[0];
            ar = ax[0];
          } else if (ax.length === 2) {
            aq = ax[0];
            ar = ax[1];
          }
          if (aq.unit === "percent") {
            aq = aq.value / 100;
          } else {
            let ay = au();
            aq = aq.to("px").value / ay.width;
          }
          if (ar.unit === "percent") {
            ar = ar.value / 100;
          } else {
            let az = au();
            ar = ar.to("px").value / az.height;
          }
          as = "objectBoundingBox";
        } else {
          let { transformOrigin: aA } = av;
          let aB = aA.split(" ").map((aC) => CSSUnitValue.parse(aC));
          if (aw === "fill-box") {
            let aC = au();
            aq = aB[0].value / aC.width;
            ar = aB[1].value / aC.height;
            as = "objectBoundingBox";
          } else {
            aq = aB[0].value;
            ar = aB[1].value;
            as = "userSpaceOnUse";
          }
        }
      }
      if (ap === "auto" || ap === as) {
        at = new DOMPoint(aq, ar);
      } else if (ap === "userSpaceOnUse" && as === "objectBoundingBox") {
        let aD = au();
        at = new DOMPoint(aD.x + aq * aD.width, aD.y + ar * aD.height);
        as = "userSpaceOnUse";
      } else if (ap === "objectBoundingBox" && as === "userSpaceOnUse") {
        let aE = au();
        at = new DOMPoint((aq - aE.x) / aE.width, (ar - aE.y) / aE.height);
        as = "objectBoundingBox";
      }
      return [at, as];
    })(a6, "userSpaceOnUse");
    let ag = ce(a6);
    if (ag.width === 0) {
      ag.width = 1e-7;
    }
    if (ag.height === 0) {
      ag.height = 1e-7;
    }
    let ah = new DOMPoint(ag.x, ag.y);
    let ai = new DOMPoint(ag.x + ag.width, ag.y);
    let aj = new DOMPoint(ag.x, ag.y + ag.height);
    let ak = null;
    if (a8 === "userSpaceOnUse") {
      ak = new DOMMatrix()
        .translate(ad.x, ad.y)
        .translate(-a7.x, -a7.y)
        .multiply(ac)
        .translate(a7.x, a7.y)
        .translate(-ad.x, -ad.y);
    } else if (a8 === "objectBoundingBox") {
      let ao = new DOMPoint(a7.x * ag.width, a7.y * ag.height);
      ak = new DOMMatrix()
        .translate(ad.x - ag.x, ad.y - ag.y)
        .translate(-ao.x, -ao.y)
        .multiply(ac)
        .translate(ao.x, ao.y)
        .translate(-ad.x + ag.x, -ad.y + ag.y);
    }
    let [al, am, an] = [ah, ai, aj].map((ap) => ap.matrixTransform(ak));
    ab = te(ah, ai, aj, al, am, an);
    if (a9 !== null && ab.a === 1 && ab.b === 0 && ab.c === 0 && ab.d === 1) {
      ab.e = b(ab.e, a9);
      ab.f = b(ab.f, a9);
    }
  }
  Y(a6, ab, aa);
  if (a8 === "objectBoundingBox") {
    a6.style.setProperty("transform-box", "fill-box");
  } else {
    a6.style.removeProperty("transform-box");
  }
  if (a8 === "userSpaceOnUse") {
    let { x: ap, y: aq } = a7;
    if (a9) {
      ap = b(ap, a9);
      aq = b(aq, a9);
    }
    if (a7.x === 0 && a7.y === 0) {
      a6.style.removeProperty("transform-origin");
    } else {
      a6.style.setProperty("transform-origin", ap + "px " + aq + "px");
    }
  } else if (a8 === "objectBoundingBox") {
    let ar = a7.x * 100;
    let as = a7.y * 100;
    if (a9) {
      ar = b(ar, a9 + 2);
      as = b(as, a9 + 2);
    }
    if (a7.x === 0 && a7.y === 0) {
      a6.style.removeProperty("transform-origin");
    } else {
      a6.style.setProperty("transform-origin", ar + "% " + as + "%");
    }
  }
};
let te = (a6, a7, a8, a9, aa, ab) => {
  let ac = (al) =>
    al[0][0] * (al[1][1] * al[2][2] - al[1][2] * al[2][1]) -
    al[0][1] * (al[1][0] * al[2][2] - al[1][2] * al[2][0]) +
    al[0][2] * (al[1][0] * al[2][1] - al[1][1] * al[2][0]);
  let ad = ac([
    [a6.x, a6.y, 1],
    [a7.x, a7.y, 1],
    [a8.x, a8.y, 1],
  ]);
  let af = ac([
    [a9.x, a6.y, 1],
    [aa.x, a7.y, 1],
    [ab.x, a8.y, 1],
  ]);
  let ag = ac([
    [a9.y, a6.y, 1],
    [aa.y, a7.y, 1],
    [ab.y, a8.y, 1],
  ]);
  let ah = ac([
    [a6.x, a9.x, 1],
    [a7.x, aa.x, 1],
    [a8.x, ab.x, 1],
  ]);
  let ai = ac([
    [a6.x, a9.y, 1],
    [a7.x, aa.y, 1],
    [a8.x, ab.y, 1],
  ]);
  let aj = ac([
    [a6.x, a6.y, a9.x],
    [a7.x, a7.y, aa.x],
    [a8.x, a8.y, ab.x],
  ]);
  let ak = ac([
    [a6.x, a6.y, a9.y],
    [a7.x, a7.y, aa.y],
    [a8.x, a8.y, ab.y],
  ]);
  if (ad === 0) {
    return new DOMMatrix([1, 0, 0, 1, 0, 0]);
  }
  {
    let al = [af / ad, ag / ad, ah / ad, ai / ad, aj / ad, ak / ad].map((am) =>
      b(am, 12)
    );
    return new DOMMatrix(al);
  }
};
let ie = (a6, a7, a8, a9 = 0, aa = 0) => {
  let ab = DOMMatrix.fromMatrix(a6);
  let ac = Ne(a7);
  let ad = Ne(a8);
  let af = new DOMMatrix();
  af = ne(af, X(ac), X(ad));
  ab = ae(ab, a9, aa);
  ab.multiplySelf(af);
  ab = ae(ab, -a9, -aa);
  return ab;
};
let ne = (a6, a7, a8) => {
  let a9 = DOMMatrix.fromMatrix(a6);
  let aa = a9.a;
  let ab = a9.b;
  a9.a += a8 * a9.c;
  a9.b += a8 * a9.d;
  a9.c += a7 * aa;
  a9.d += a7 * ab;
  return a9;
};
let ae = (a6, a7, a8) => {
  let a9 = DOMMatrix.fromMatrix(a6);
  a9.e = a9.e + a7 * a9.a + a8 * a9.c;
  a9.f = a9.f + a7 * a9.b + a8 * a9.d;
  return a9;
};
let { keys: oe } = Object;
let le = (a6) => {
  let a7 = {
    rootItem: null,
    childItems: [],
  };
  {
    let [a8, a9] = he(a6);
    let aa = {
      inheritableProperties: a8,
      nonInheritableProperties: a9,
    };
    a7.rootItem = aa;
  }
  {
    let ab = 0;
    for (let ac of se(a6)) {
      let ad = {
        textContent: ac.textContent,
        href: null,
        inheritableProperties: {},
        nonInheritableProperties: {},
        isLineBreak: false,
        x: [],
        y: [],
        dx: [],
        dy: [],
        rotate: [],
        startOffset: ab,
        endOffset: ab + ac.length,
        animations: [],
      };
      ab += ac.length;
      if (ac.textContent === "​") {
        ad.isLineBreak = true;
      }
      if (ad.isLineBreak === false) {
        for (let af = ac.parentNode; af !== a6; af = af.parentNode) {
          if (af.localName === "a" && af.hasAttribute("_href")) {
            ad.href = af.getAttribute("_href");
            break;
          }
        }
      }
      if (ad.isLineBreak === false) {
        let ag = ac.closest("tspan, text");
        let [ah, ai] = he(ag);
        ad.inheritableProperties = ah;
        if (ag !== a6) {
          ad.nonInheritableProperties = ai;
        }
      }
      {
        let aj = [];
        let ak = [];
        let al = [];
        let am = [];
        let an = [];
        for (let ap = ac.parentNode; a6.contains(ap); ap = ap.parentNode) {
          if (ap.localName === "tspan" || ap.localName === "text") {
            let aq = 0;
            for (let ar of se(ap)) {
              if (ar === ac) {
                break;
              }
              aq += ar.length;
            }
            for (
              let as = aq, at = 0;
              ap.x.baseVal.length, at < ac.length;
              as += 1, at += 1
            ) {
              if (aj[at] === undefined && ap.x.baseVal[as] !== undefined) {
                aj[at] = ap.x.baseVal[as].valueAsString;
              }
            }
            for (
              let au = aq, av = 0;
              ap.y.baseVal.length, av < ac.length;
              au += 1, av += 1
            ) {
              if (ak[av] === undefined && ap.y.baseVal[au] !== undefined) {
                ak[av] = ap.y.baseVal[au].valueAsString;
              }
            }
            for (
              let aw = aq, ax = 0;
              ap.dx.baseVal.length, ax < ac.length;
              aw += 1, ax += 1
            ) {
              if (al[ax] === undefined && ap.dx.baseVal[aw] !== undefined) {
                al[ax] = ap.dx.baseVal[aw].valueAsString;
              }
            }
            for (
              let ay = aq, az = 0;
              ap.dy.baseVal.length, az < ac.length;
              ay += 1, az += 1
            ) {
              if (am[az] === undefined && ap.dy.baseVal[ay] !== undefined) {
                am[az] = ap.dy.baseVal[ay].valueAsString;
              }
            }
            for (
              let aA = aq, aB = 0;
              ap.rotate.baseVal.length, aB < ac.length;
              aA += 1, aB += 1
            ) {
              if (an[aB] === undefined && ap.rotate.baseVal[aA] !== undefined) {
                an[aB] = "" + ap.rotate.baseVal[aA].value;
              }
            }
          }
        }
        let ao = "0";
        for (let aC = 0; aC < ac.length; aC += 1) {
          if (aj[aC] === undefined) {
            aj[aC] = "auto";
          }
          if (ak[aC] === undefined) {
            ak[aC] = "auto";
          }
          if (al[aC] === undefined) {
            al[aC] = "0";
          }
          if (am[aC] === undefined) {
            am[aC] = "0";
          }
          if (an[aC] === undefined) {
            an[aC] = ao;
          }
          ao = an[aC];
        }
        ad.x = aj;
        ad.y = ak;
        ad.dx = al;
        ad.dy = am;
        ad.rotate = an;
      }
      {
        let aD = [
          ...ac
            .closest("tspan,text")
            .querySelectorAll(":scope > [attributeName]"),
        ];
        ad.animations = aD;
      }
      a7.childItems.push(ad);
    }
  }
  for (let aE of a7.childItems) {
    for (let aF of oe(aE.inheritableProperties)) {
      if (
        a7.rootItem.inheritableProperties[aF] === aE.inheritableProperties[aF]
      ) {
        delete aE.inheritableProperties[aF];
      }
    }
  }
  {
    let aG = a7.childItems.filter((aH) => !aH.isLineBreak);
    if (aG.length > 0) {
      let [aH, ...aI] = aG;
      for (let aJ of oe(aH.inheritableProperties)) {
        let aK = true;
        for (let aL of aI) {
          if (aL.inheritableProperties[aJ] !== aH.inheritableProperties[aJ]) {
            aK = false;
          }
        }
        if (aK) {
          a7.rootItem.inheritableProperties[aJ] = aH.inheritableProperties[aJ];
          for (let aM of a7.childItems) {
            delete aM.inheritableProperties[aJ];
          }
        }
      }
    }
  }
  if (a7.childItems.length > 1) {
    let aN = [];
    let aO = null;
    for (let aP of a7.childItems) {
      if (
        aO &&
        aO.href === aP.href &&
        W(aO.nonInheritableProperties, aP.nonInheritableProperties) &&
        W(aO.inheritableProperties, aP.inheritableProperties) &&
        (aO.x.includes("auto") === false ||
          aP.x.length === 0 ||
          k(aP.x, "auto")) &&
        (aO.y.includes("auto") === false ||
          aP.y.length === 0 ||
          k(aP.y, "auto")) &&
        aO.isLineBreak === false &&
        aP.isLineBreak === false
      ) {
        aO.textContent += aP.textContent;
        aO.x.push(...aP.x);
        aO.y.push(...aP.y);
        aO.dx.push(...aP.dx);
        aO.dy.push(...aP.dy);
        aO.rotate.push(...aP.rotate);
        aO.endOffset = aP.endOffset;
      } else {
        aN.push(aP);
        aO = aP;
      }
    }
    a7.childItems = aN;
  }
  return a7;
};
let se = (a6) => {
  let a7 = [];
  if (a6.closest("text")) {
    let a8 = [];
    let a9 = document.createTreeWalker(a6, NodeFilter.SHOW_TEXT);
    while (a9.nextNode()) {
      a8.push(a9.currentNode);
    }
    for (let aa of a8) {
      let ab = aa.parentElement;
      if (
        ab.localName === "text" ||
        ab.localName === "tspan" ||
        ab.localName === "textPath"
      ) {
        if (ab.getNumberOfChars() > 0) {
          a7.push(aa);
        }
      } else if (ab.localName === "a") {
        let ac = ab.getBBox();
        if (ac.x !== 0 || ac.y !== 0 || ac.width !== 0 || ac.height !== 0) {
          a7.push(aa);
        }
      }
    }
  }
  return a7;
};
let re = (a6) => {
  let a7 = se(a6);
  let a8 = [];
  for (let a9 of a7) {
    let aa = a9.closest("*");
    let ab = getComputedStyle(aa).textTransform;
    let ac = a9.textContent;
    if (ab === "uppercase") {
      ac = ac.toUpperCase();
    } else if (ab === "lowercase") {
      ac = ac.toLowerCase();
    } else if (ab === "capitalize") {
      ac = ac.replace(/(^|[\s-])(\w)/g, (ad, af, ag) => af + ag.toUpperCase());
    }
    a8.push(...ac.split(""));
  }
  return a8;
};
let he = (a6) => {
  let a7 = getComputedStyle(a6);
  let a8 = {};
  let a9 = {};
  for (let aa of d) {
    if (
      aa.appliesTo.includes("text") ||
      aa.appliesTo.includes("tspan") ||
      aa.appliesTo.includes("textPath")
    ) {
      if (aa.name === "font" || aa.name === "display") {
        continue;
      }
      if (aa.inheritable === true) {
        a8[aa.name] = a7.getPropertyValue(aa.name);
      } else if (aa.inheritable === false) {
        a9[aa.name] = a7.getPropertyValue(aa.name);
      }
    }
  }
  return [a8, a9];
};
let pe = (a6, a7) => {
  let a8 = a6.closest("text");
  let a9 = 0;
  let aa = -1;
  for (let ab of se(a8)) {
    if (ab === a6) {
      aa = a9 + a7;
      break;
    }
    a9 += ab.length;
  }
  return [a8, aa];
};
let ue = (a6, a7 = 3, a8 = 6, a9 = false) =>
  new Promise(async (aa) => {
    let ab = await new G(a6.closest("svg")).getFontFaces();
    let ac = await j.getLocalFontsMetadata();
    let ad = q();
    if (["windows", "linux", "macos"].includes(ad) === false) {
      ad = ad === "ios" ? "macos" : "linux";
    }
    ((ai, aj = null) => {
      let ak = le(ai);
      let al = aj && ai.contains(aj.commonAncestorContainer);
      let am = al ? pe(aj.startContainer, aj.startOffset)[1] : -1;
      let an = al ? pe(aj.endContainer, aj.endOffset)[1] : -1;
      if (al && am !== an) {
        let ao = [];
        for (let ap of ak.childItems) {
          let aq = null;
          if (am >= ap.startOffset && an <= ap.endOffset) {
            aq = [
              ap.textContent.slice(0, am - ap.startOffset),
              ap.textContent.slice(am - ap.startOffset, an - ap.startOffset),
              ap.textContent.slice(an - ap.startOffset),
            ];
          } else if (am >= ap.startOffset && am < ap.endOffset) {
            aq = [
              ap.textContent.slice(0, am - ap.startOffset),
              ap.textContent.slice(am - ap.startOffset),
            ];
          } else if (an > ap.startOffset && an <= ap.endOffset) {
            aq = [
              ap.textContent.slice(0, an - ap.startOffset),
              ap.textContent.slice(an - ap.startOffset),
            ];
          }
          if (aq === null) {
            ao.push(ap);
          } else {
            let ar = ap.startOffset;
            let as = 0;
            for (let at of aq) {
              if (at.length > 0) {
                let au = {
                  textContent: at,
                  href: ap.href,
                  inheritableProperties: ap.inheritableProperties,
                  nonInheritableProperties: ap.nonInheritableProperties,
                  startOffset: ar,
                  endOffset: ar + at.length,
                  x: [],
                  y: [],
                  dx: [],
                  dy: [],
                  rotate: [],
                  animations: ap.animations.map((av) => av.cloneNode(true)),
                };
                for (let av = 0; av < at.length; av += 1) {
                  au.x.push(ap.x[as]);
                  au.y.push(ap.y[as]);
                  au.dx.push(ap.dx[as]);
                  au.dy.push(ap.dy[as]);
                  au.rotate.push(ap.rotate[as]);
                  as += 1;
                }
                ao.push(au);
                ar += at.length;
              }
            }
          }
        }
        ak.childItems = ao;
      }
      ai.removeAttribute("x");
      ai.removeAttribute("y");
      ai.removeAttribute("dx");
      ai.removeAttribute("dy");
      ai.removeAttribute("rotate");
      ai.setAttribute("style", "");
      for (let aw of g) {
        if (ai.hasAttribute(aw) && aw !== "transform") {
          ai.removeAttribute(aw);
        }
      }
      {
        let ax = getComputedStyle(ai);
        for (let ay of oe(ak.rootItem.inheritableProperties)) {
          if (
            ax.getPropertyValue(ay) !== ak.rootItem.inheritableProperties[ay]
          ) {
            ai.style.setProperty(ay, ak.rootItem.inheritableProperties[ay]);
          }
        }
        for (let az of oe(ak.rootItem.nonInheritableProperties)) {
          if (
            ax.getPropertyValue(az) !== ak.rootItem.nonInheritableProperties[az]
          ) {
            ai.style.setProperty(az, ak.rootItem.nonInheritableProperties[az]);
          }
        }
      }
      {
        let aA = ai.querySelector("textPath") || ai;
        for (let aB of [...aA.childNodes]) {
          if (
            aB.nodeName === "tspan" ||
            aB.nodeName === "a" ||
            aB.nodeName === "#text"
          ) {
            aB.remove();
          }
        }
        if (ak.childItems.length > 0) {
          for (let aC of ak.childItems) {
            let aD = Ce("svg:tspan");
            aA.append(aD);
            if (aC.href) {
              let aE = Ce("svg:a");
              aE.setAttribute("_href", aC.href);
              aE.textContent = aC.textContent;
              aD.append(aE);
            } else {
              aD.textContent = aC.textContent;
            }
            if (aC.animations) {
              for (let aF of aC.animations) {
                aD.append(aF.cloneNode(true));
              }
            }
            {
              let aG = getComputedStyle(aD);
              for (let aH of oe(aC.inheritableProperties)) {
                if (aG.getPropertyValue(aH) !== aC.inheritableProperties[aH]) {
                  aD.style.setProperty(aH, aC.inheritableProperties[aH]);
                }
              }
              for (let aI of oe(aC.nonInheritableProperties)) {
                if (
                  aG.getPropertyValue(aI) !== aC.nonInheritableProperties[aI]
                ) {
                  aD.style.setProperty(aI, aC.nonInheritableProperties[aI]);
                }
              }
            }
            {
              let aJ = aC.x.filter((aK) => aK !== "auto");
              if (aJ.length > 0) {
                aD.setAttribute("x", aJ.join(" "));
              }
            }
            {
              let aK = aC.y.filter((aL) => aL !== "auto");
              if (aK.length > 0) {
                aD.setAttribute("y", aK.join(" "));
              }
            }
            {
              let aL = [...aC.dx];
              for (let aM = aL.length - 1; aM >= 0 && aL[aM] === "0"; aM -= 1) {
                aL.pop();
              }
              if (aL.length > 0) {
                aD.setAttribute("dx", aL.join(" "));
              }
            }
            {
              let aN = [...aC.dy];
              for (let aO = aN.length - 1; aO >= 0 && aN[aO] === "0"; aO -= 1) {
                aN.pop();
              }
              if (aN.length > 0) {
                aD.setAttribute("dy", aN.join(" "));
              }
            }
            {
              let aP = [...aC.rotate];
              for (
                let aQ = aP.length - 1;
                aQ >= 0 && aP[aQ] === aP[aQ - 1];
                aQ -= 1
              ) {
                aP.pop();
              }
              if (aP.length === 1 && aP[0] === "0") {
                aP = [];
              }
              if (aP.length > 0) {
                aD.setAttribute("rotate", aP.join(" "));
              }
            }
          }
        }
      }
      if (al) {
        let aR = 0;
        let aS = null;
        for (let aT of se(ai)) {
          for (let aU = 0; aU <= aT.textContent.length; aU += 1, aR += 1) {
            if (aR === am) {
              aj.setStart(aT, aU);
            }
            if (aR === an) {
              if (aU === 0 && aS) {
                aj.setEnd(aS, aS.textContent.length);
              } else {
                aj.setEnd(aT, aU);
              }
            }
          }
          aR -= 1;
          aS = aT;
        }
      }
    })(a6);
    ee(a6, new DOMPoint(0, 0), "userSpaceOnUse");
    let af = H(Q(a6), a8);
    let ag = document.createDocumentFragment();
    let ah = a6.querySelectorAll("tspan");
    for (let ai of ah) {
      let aj;
      let ak = re(ai).filter((at) => at !== "​");
      let al = getComputedStyle(ai);
      let am = /[\u0590-\u05FF]/.test(ak.join(""));
      let an = /[\u0600-\u06FF]/.test(ak.join(""));
      let ao = parseFloat(al.getPropertyValue("font-size"));
      let ap = al.getPropertyValue("font-weight");
      let aq = al.getPropertyValue("font-style");
      let ar = al.getPropertyValue("text-decoration");
      let as = [...M.fromString(al.fontFamily).items, ...N[ad]];
      for (let at of as) {
        if (z(ac, at, ap, aq) !== null) {
          aj = at;
          break;
        }
        if (z(ab, at, ap, aq) !== null) {
          aj = at;
          break;
        }
      }
      if (aj) {
        let au = [];
        {
          let aw;
          let ax;
          let ay = ap;
          let az = aq;
          for (let aA of as) {
            let aB = z(ab, aA, ay, az);
            let aC = z(ac, aA, ay, az);
            if (aB) {
              aw = await R(aB);
              break;
            }
            if (aC) {
              aw = await R(aC);
              break;
            }
          }
          if (aw.fonts) {
            aw = aw.fonts[0];
          }
          {
            let aD = ak.join("");
            ax = am
              ? aw.layout(aD, "hebr", "hr", "ltr")
              : an
              ? aw.layout(aD, "arab", "ar", "ltr")
              : aw.layout(aD);
          }
          for (let aE = 0, aF = 0; aE < ax.glyphs.length; aE += 1) {
            ak[aF];
            let aG = ax.glyphs[aE];
            let aH = ak.join("").substr(aF, aG.codePoints.length);
            let aI = aw;
            if (aG.id === 0) {
              for (let aJ of as) {
                let aK;
                let aL = z(ab, aJ, ay, az);
                let aM = z(ac, aJ, ay, az);
                if (aL) {
                  aK = await R(aL);
                } else if (aM) {
                  aK = await R(aM);
                }
                if (aK) {
                  if (aK.fonts) {
                    aK = aK.fonts[0];
                  }
                  let aN = aK.glyphsForString(aH)[0];
                  if (aN && aN.id !== 0) {
                    aG = aN;
                    aI = aK;
                    break;
                  }
                }
              }
            }
            if (aF < ai.getNumberOfChars()) {
              let aO = ai.getStartPositionOfChar(aF);
              let aP = ai.getEndPositionOfChar(aF);
              let aQ = ai.getRotationOfChar(aF);
              if (ap === "700") {
                aI["OS/2"].usWeightClass;
              }
              let aR =
                ["italic", "oblique"].includes(aq) &&
                aI["OS/2"].fsSelection.italic === false &&
                aI.italicAngle === 0;
              let aS = aG.advanceWidth;
              let aT = aI.hhea.ascent;
              let aU = aI.hhea.descent;
              let aV = aT / 20;
              let aW = (1 / aI.head.unitsPerEm) * ao;
              let aX = V(aG);
              if (ar.includes("underline")) {
                let aZ = aS;
                let b0 = aV;
                let b1 = aU / 3;
                aX.push(
                  {
                    type: "M",
                    values: [0, b1],
                  },
                  {
                    type: "L",
                    values: [aZ, b1],
                  },
                  {
                    type: "L",
                    values: [aZ, b1 - b0],
                  },
                  {
                    type: "L",
                    values: [0, b1 - b0],
                  },
                  {
                    type: "Z",
                    values: [],
                  }
                );
              }
              if (ar.includes("overline")) {
                let b2 = aS;
                let b3 = aV;
                let b4 = aT - aV;
                aX.push(
                  {
                    type: "M",
                    values: [0, b4],
                  },
                  {
                    type: "L",
                    values: [b2, b4],
                  },
                  {
                    type: "L",
                    values: [b2, b4 - b3],
                  },
                  {
                    type: "L",
                    values: [0, b4 - b3],
                  },
                  {
                    type: "Z",
                    values: [],
                  }
                );
              }
              if (ar.includes("line-through")) {
                let b5 = aS;
                let b6 = aV;
                let b7 = (aT + aU) / 2;
                aX.push(
                  {
                    type: "M",
                    values: [0, b7],
                  },
                  {
                    type: "L",
                    values: [b5, b7],
                  },
                  {
                    type: "L",
                    values: [b5, b7 - b6],
                  },
                  {
                    type: "L",
                    values: [0, b7 - b6],
                  },
                  {
                    type: "Z",
                    values: [],
                  }
                );
              }
              let aY = [];
              for (let b8 of aX) {
                let b9 = new DOMMatrix();
                if (an || am) {
                  b9.translateSelf(aP.x, aP.y);
                } else {
                  b9.translateSelf(aO.x, aO.y);
                }
                let ba = aR ? -14 : 0;
                b9.rotateSelf(aQ);
                b9 = ie(b9, ba, 0, 0, 0);
                b9.scaleSelf(aW, -aW, 1, 0, 0);
                if (b8.type === "M") {
                  let [bb, bc] = b8.values;
                  let bd = new DOMPoint(bb, bc).matrixTransform(b9);
                  b8.values = [bd.x, bd.y];
                } else if (b8.type === "L") {
                  let [bf, bg] = b8.values;
                  let bh = new DOMPoint(bf, bg).matrixTransform(b9);
                  b8.values = [bh.x, bh.y];
                } else if (b8.type === "Q") {
                  let [bi, bj, bk, bl] = b8.values;
                  let bm = new DOMPoint(bi, bj).matrixTransform(b9);
                  let bn = new DOMPoint(bk, bl).matrixTransform(b9);
                  b8.values = [bm.x, bm.y, bn.x, bn.y];
                } else if (b8.type === "C") {
                  let [bo, bp, bq, br, bs, bt] = b8.values;
                  let bu = new DOMPoint(bo, bp).matrixTransform(b9);
                  let bv = new DOMPoint(bq, br).matrixTransform(b9);
                  let bw = new DOMPoint(bs, bt).matrixTransform(b9);
                  b8.values = [bu.x, bu.y, bv.x, bv.y, bw.x, bw.y];
                }
                b8.values = b8.values.map((bx) => b(bx, a7));
                aY.push(b8);
              }
              if (aY.length > 0) {
                au.push(aY);
              }
            }
            aF += aG.codePoints.length;
          }
        }
        let av = [];
        if (a9 === true) {
          for (let bx of au) {
            av.push(bx);
          }
        } else {
          let by = [];
          for (let bz of au) {
            for (let bA of bz) {
              by.push(bA);
            }
          }
          av.push(by);
        }
        for (let bB of av) {
          let bC = Ce("svg:path");
          bC.setPathData(bB);
          if (af.isIdentity === false) {
            Y(bC, af);
          }
          for (let bD of a6.style) {
            if (f.includes(bD) === false) {
              bC.style.setProperty(bD, a6.style.getPropertyValue(bD));
            }
          }
          for (let bE of ai.style) {
            if (f.includes(bE) === false) {
              bC.style.setProperty(bE, ai.style.getPropertyValue(bE));
            }
          }
          ag.append(bC);
        }
      }
    }
    if (ag.children.length > 0) {
      let bF = [...ag.children];
      a6.replaceWith(ag);
      aa(bF);
    } else {
      aa(null);
    }
  });
let ce = (a6, a7 = true) => {
  let a8 = new DOMRect(0, 0, 0, 0);
  let a9 = a7
    ? ((aa) => {
        let ab = null;
        if (m.includes(aa.localName)) {
          let ac = getComputedStyle(aa).clipPath;
          if (ac && ac !== "none") {
            let ad = ac.substring(6, ac.length - 2);
            let af = Te(aa).querySelector("#" + CSS.escape(ad)) || null;
            if (af?.localName === "clipPath" && af !== aa) {
              ab = af;
            }
          }
        }
        return ab;
      })(a6)
    : null;
  if (a9) {
    let aa = ce(a6, false);
    let ab = Ue(ce(a9), Q(a9));
    a8 = Fe(aa, ab);
  } else if (a6.localName === "tspan") {
    let ac = se(a6);
    let ad = document.createRange();
    if (ac.length > 0) {
      ad.setStart(ac[0], 0);
      ad.setEnd(ac[ac.length - 1], ac[ac.length - 1].length);
    }
    if (ad.collapsed === false) {
      let af = ad.startContainer.closest("text");
      let [, ag] = pe(ad.startContainer, ad.startOffset);
      let [, ah] = pe(ad.endContainer, ad.endOffset);
      let ai = [];
      for (let aj = ag; aj < ah; aj += 1) {
        let ak = af.getExtentOfChar(aj);
        ai.push(ak);
      }
      a8 = Se(ai);
    }
  } else if (a6.localName === "use") {
    a8 = new DOMRect(0, 0, a6.width.baseVal.value, a6.height.baseVal.value);
  } else if (a6.localName === "clipPath") {
    let al = [];
    for (let am of a6.children) {
      if (c.includes(am.localName)) {
        let an = Ue(DOMRect.fromRect(am.getBBox()), Q(am));
        al.push(an);
      }
    }
    if (al.length > 0) {
      a8 = Se(al);
    }
  } else {
    a8 = DOMRect.fromRect(a6.getBBox());
  }
  return a8;
};
let {
  sin: me,
  cos: fe,
  acos: de,
  atan2: ge,
  abs: be,
  sqrt: xe,
  pow: ye,
  PI: ke,
  min: we,
  max: ve,
} = Math;
document.createElementNS("http://www.w3.org/2000/svg", "svg");
let Ne = (a6) => (ke * a6) / 180;
let Ue = (a6, a7) => {
  let a8 = [
    new DOMPoint(a6.x, a6.y),
    new DOMPoint(a6.x + a6.width, a6.y),
    new DOMPoint(a6.x + a6.width, a6.y + a6.height),
    new DOMPoint(a6.x, a6.y + a6.height),
  ].map((ag) => ag.matrixTransform(a7));
  let a9 = a8.map((ag) => ag.x);
  let aa = a8.map((ag) => ag.y);
  let ab = we(...a9);
  let ac = we(...aa);
  let ad = ve(...a9);
  let af = ve(...aa);
  return new DOMRect(ab, ac, ad - ab, af - ac);
};
let Se = (a6) => {
  if (a6.length === 0) {
    return new DOMRect(0, 0, 0, 0);
  }
  if (a6.length === 1) {
    let a7 = a6[0];
    return new DOMRect(a7.x, a7.y, a7.width, a7.height);
  }
  {
    let a8 = Math.min(...a6.map((ac) => ac.x));
    let a9 = Math.min(...a6.map((ac) => ac.y));
    let aa = Math.max(...a6.map((ac) => ac.x + ac.width));
    let ab = Math.max(...a6.map((ac) => ac.y + ac.height));
    return new DOMRect(a8, a9, aa - a8, ab - a9);
  }
};
let Fe = (a6, a7) => {
  let a8 = Math.max(a6.left, a7.left);
  let a9 = Math.min(a6.right, a7.right);
  let aa = Math.max(a6.top, a7.top);
  let ab = Math.min(a6.bottom, a7.bottom);
  return new DOMRect(a8, aa, a9 - a8, ab - aa);
};
let Ce = (a6, a7 = null) => {
  let a8 = a6.split(":");
  let a9 = null;
  if (a8.length === 1) {
    let [aa] = a8;
    a9 = document.createElement(aa, a7);
  } else if (a8.length === 2) {
    let [ab, ac] = a8;
    if (ab === "svg") {
      a9 = document.createElementNS(o, ac, a7);
    }
  }
  return a9;
};
let Te = (a6) => {
  let a7 = a6.localName === "svg" ? a6 : null;
  for (let a8 = a6.ownerSVGElement; a8; a8 = a8.ownerSVGElement) {
    a7 = a8;
  }
  return a7;
};
let Me = (a6, a7, a8 = true) => {
  let a9 = a6.closest(a7);
  if (a8 && !a9 && a6.getRootNode().host) {
    return Me(a6.getRootNode().host, a7);
  } else {
    return a9;
  }
};
class Ae extends HTMLElement {
  static #x = S` <template> <main id="main" part="main"></main> <footer id="footer" part="footer"></footer> </template>
  `;
  static #y = F`
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
  #k;
  constructor() {
    super();
    let a6 = this.constructor.o;
    let a7 = this.constructor.l;
    this.#k = this.attachShadow({
      mode: "closed",
    });
    this.#k.adoptedStyleSheets = [
      a2.themeStyleSheet,
      Ae.#y,
      this.constructor._shadowStyleSheet,
    ];
    this.#k.append(document.importNode(Ae.#x.content, true));
    if (a6) {
      this.#k
        .querySelector("#main")
        .append(document.importNode(a6.content, true));
    }
    if (a7) {
      this.#k
        .querySelector("#footer")
        .append(document.importNode(a7.content, true));
    }
    for (let a8 of this.#k.querySelectorAll("[id]")) {
      this["#" + a8.id] = a8;
    }
    this.setAttribute("extends", "bx-generator");
    this.setAttribute("tabindex", "0");
  }
}
let Pe = (a6, a7 = "xml", a8 = 2) => {
  a6 = a6.cloneNode(true);
  let a9;
  let aa = document.createNodeIterator(a6, NodeFilter.SHOW_ELEMENT);
  while ((a9 = aa.nextNode())) {
    if (a9.nodeType == Node.ELEMENT_NODE) {
      if (a9.localName === "defs") {
        if (a9.children.length === 0) {
          a9.remove();
        }
      } else if (a9.localName === "style") {
        if (a9.textContent.replace(/\s+/g, " ").trim() === "") {
          a9.remove();
        } else if (a9.matches('[data-bx-fonts="google"]')) {
          a9.removeAttribute("data-bx-fonts");
        }
      } else if (a7 === "xml" && a9.localName === "path") {
        let ab = a9.getAttribute("d");
        if (ab && /[\t\n\r]/.test(ab)) {
          a9.setAttribute("d", ab.replace(/[\t\n\r ]+/g, " "));
        }
      }
    }
  }
  Oe(a6, a7);
  ((ac, ad = 2, af = 1) => {
    B(ac);
    let ag = "";
    let ah = {
      text: true,
      textPath: true,
      tspan: true,
      title: true,
      desc: true,
    };
    for (let aj = 0; aj < ad; aj += 1) {
      ag += " ";
    }
    let ai = (ak, al = 2) => {
      if (!ah[ak.localName]) {
        for (let am of ak.children) {
          let an = ak.firstChild === am;
          let ao = ak.lastChild === am;
          if (an === true) {
            let ar = document.createTextNode("\n");
            am.parentNode.insertBefore(ar, am);
          }
          let ap = "";
          for (let as = 0; as < al; as += 1) {
            ap += ag;
          }
          let aq = document.createTextNode(ap);
          ak.insertBefore(aq, am);
          if (ao === true) {
            let at = document.createTextNode("\n");
            ak.appendChild(at);
            let au = "";
            for (let aw = 0; aw < al - 1; aw += 1) {
              au += ag;
            }
            let av = document.createTextNode(au);
            ak.appendChild(av);
          } else {
            let ax = document.createTextNode("\n");
            ak.insertBefore(ax, am.nextSibling);
          }
          if (am.childElementCount > 0) {
            ai(am, al + 1);
          }
        }
      }
    };
    ai(ac, af);
  })(a6, a8);
  return De(a6, a7);
};
let De = (a6, a7 = "xml") => {
  let a8;
  if (a7 === "xml") {
    a8 = new XMLSerializer().serializeToString(a6);
    if (a8.trim().length === 0) {
      throw new Error("Failed to serialize artwork");
    }
    a8 = '<?xml version="1.0" encoding="utf-8"?>\n' + a8;
  } else if (a7 === "html") {
    a8 = a6.outerHTML;
    if (a8.trim().length === 0) {
      throw new Error("Failed to serialize artwork");
    }
    a8 = "<!doctype html>\n" + a8;
    a8 = P(a8, ' xmlns:xlink="http://www.w3.org/1999/xlink"', "");
  }
  {
    let a9 = 0;
    while (true) {
      let aa = a8.indexOf('style="', a9);
      let ab = -1;
      if (aa > -1) {
        ab = a8.indexOf('"', aa + 7);
      }
      if (aa === -1 || ab === -1) {
        break;
      }
      {
        let ac = a8.substring(0, aa);
        let ad = a8.substring(ab + 1);
        let af = a8.substring(aa, ab + 1).replaceAll("&quot;", "'");
        a8 = ac + af + ad;
        a9 = aa + af.length;
        a9 = ab + 1;
      }
    }
  }
  return a8;
};
let Oe = (a6, a7) => {
  if (a7 === "xml") {
    let a8;
    let a9 = document.createNodeIterator(a6, NodeFilter.SHOW_ELEMENT);
    let aa = false;
    let ab = false;
    while ((a8 = a9.nextNode())) {
      if (a8.localName !== "bx-title") {
        if (a8.localName.startsWith("bx-")) {
          let ac = document.createElementNS(
            a,
            "bx:" + a8.localName.substring(3)
          );
          for (let ad of [...a8.attributes]) {
            ac.setAttribute(ad.name, ad.value);
          }
          for (let af of [...a8.childNodes]) {
            ac.append(af);
          }
          a8.replaceWith(ac);
          ab = true;
        } else {
          for (let { name: ag, value: ah } of [...a8.attributes]) {
            if (ag === "href" || ag === "_href") {
              a8.setAttribute("xlink:href", ah);
              a8.removeAttribute(ag);
              aa = true;
            } else if (ag.startsWith("data-bx-")) {
              let ai = ag.substring(8);
              a8.setAttributeNS(a, "bx:" + ai, ah);
              a8.removeAttribute(ag);
              ab = true;
            }
          }
        }
      } else {
        let aj = Ce("svg:title");
        aj.innerHTML = a8.innerHTML;
        for (let { name: ak, value: al } of a8.attributes) {
          aj.setAttribute(ak, al);
        }
        a8.replaceWith(aj);
      }
    }
    a6.removeAttribute("xmlns");
    a6.removeAttribute("xmlns:bx");
    a6.removeAttribute("xmlns:xlink");
    a6.setAttributeNS(s, "xmlns", o);
    if (aa) {
      a6.setAttributeNS(s, "xmlns:xlink", l);
    }
    if (ab) {
      a6.setAttributeNS(s, "xmlns:bx", a);
    }
  } else if (a7 === "html") {
    let am;
    let an = document.createNodeIterator(a6, NodeFilter.SHOW_ELEMENT);
    while ((am = an.nextNode())) {
      if (am.localName !== "bx-title") {
        for (let { name: ao, value: ap } of [...am.attributes]) {
          if (ao === "href" || ao === "_href") {
            am.setAttribute("xlink:href", ap);
            am.removeAttribute(ao);
          }
        }
      } else {
        let aq = Ce("svg:title");
        aq.innerHTML = am.innerHTML;
        for (let { name: ar, value: as } of am.attributes) {
          aq.setAttribute(ar, as);
        }
        am.replaceWith(aq);
      }
    }
  }
};
let Ee = null;
let ze = -1;
class Re extends Ae {
  static o = S` <template> <section id="options-section"> <h3 id="options-heading"><x-message href="#options" autocapitalize></x-message></h3> <section id="roughness-subsection"> <h4 id="roughness-heading"><x-message href="#roughness" autocapitalize></x-message></h4> <x-box id="roughness-box"> <x-slider id="roughness-slider" min="0" max="10" step="0.1"></x-slider> <x-numberinput id="roughness-input" min="0" step="0.1" condensed> <x-stepper></x-stepper> </x-numberinput> </x-box> </section> <section id="bowing-subsection"> <h4 id="bowing-heading"><x-message href="#bowing" autocapitalize></x-message></h4> <x-box id="bowing-box"> <x-slider id="bowing-slider" min="-10" max="10" step="0.1"></x-slider> <x-numberinput id="bowing-input" step="0.1" condensed> <x-stepper></x-stepper> </x-numberinput> </x-box> </section> <section id="seed-subsection"> <h4 id="seed-heading"><x-message href="#seed" autocapitalize></x-message></h4> <x-box id="seed-box"> <x-slider id="seed-slider" min="0" max="200" step="1"></x-slider> <x-numberinput id="seed-input" min="0" max="200" step="1" condensed> <x-stepper></x-stepper> </x-numberinput> </x-box> </section> <section id="hatching-subsection"> <h4 id="hatching-heading"><x-message href="#hatching" autocapitalize></x-message></h4> <section id="hatching-type-subsection"> <h5 id="hatching-type-heading"><x-message href="#type" autocapitalize></x-message></h5> <x-buttons id="hatching-type-buttons" tracking="1"> <x-button value="zigzag" skin="flat" size="small" toggled> <x-icon href="#hatching-zigzag"></x-icon> <x-tooltip><x-message href="#hatching-type.zigzag" autocapitalize></x-message></x-tooltip> </x-button> <x-button value="grid" skin="flat" size="small"> <x-icon href="#hatching-grid"></x-icon> <x-tooltip><x-message href="#hatching-type.grid" autocapitalize></x-message></x-tooltip> </x-button> <x-button value="straight-lines" skin="flat" size="small"> <x-icon href="#hatching-straight-lines"></x-icon> <x-tooltip><x-message href="#hatching-type.straight-lines" autocapitalize></x-message></x-tooltip> </x-button> <x-button value="zigzag-lines" skin="flat" size="small"> <x-icon href="#hatching-zigzag-lines"></x-icon> <x-tooltip><x-message href="#hatching-type.zigzag-lines" autocapitalize></x-message></x-tooltip> </x-button> <x-button value="dots" skin="flat" size="small"> <x-icon href="#hatching-dots"></x-icon> <x-tooltip><x-message href="#hatching-type.dots" autocapitalize></x-message></x-tooltip> </x-button> <x-button value="dashes" skin="flat" size="small"> <x-icon href="#hatching-dashes"></x-icon> <x-tooltip><x-message href="#hatching-type.dashes" autocapitalize></x-message></x-tooltip> </x-button> <x-button value="solid" skin="flat" size="small"> <x-icon href="#hatching-solid"></x-icon> <x-tooltip><x-message href="#hatching-type.solid" autocapitalize></x-message></x-tooltip> </x-button> </x-buttons> </section> <section id="hatching-params-subsection"> <x-box id="hatching-thickness-box" vertical> <h5 id="hatching-thickness-heading"><x-message href="#thickness" autocapitalize></x-message></h5> <x-numberinput id="hatching-thickness-input" min="0" step="1" condensed> <x-stepper></x-stepper> </x-numberinput> </x-box> <x-box id="hatching-spacing-box" vertical> <h5 id="hatching-spacing-heading"><x-message href="#spacing" autocapitalize></x-message></h5> <x-numberinput id="hatching-spacing-input" min="0" step="1" condensed> <x-stepper></x-stepper> </x-numberinput> </x-box> <x-box id="hatching-angle-box" vertical> <h5 id="hatching-angle-heading"><x-message href="#angle" autocapitalize></x-message></h5> <x-numberinput id="hatching-angle-input" min="-180" max="180" step="1" suffix="°" condensed> <x-stepper></x-stepper> </x-numberinput> </x-box> </section> <x-checkbox id="hatching-repeat-strokes-checkbox"> <x-label><x-message href="#repeat-strokes"></x-message></x-label> </x-checkbox> </section> <section id="contour-subsection"> <h4 id="contour-heading"><x-message href="#contour" autocapitalize></x-message></h4> <x-box id="contour-custom-thickness-box"> <x-checkbox id="contour-custom-thickness-checkbox"> <x-label><x-message href="#custom-thickness"></x-message></x-label> </x-checkbox> <x-numberinput id="contour-custom-thickness-input" min="0" step="1" condensed> <x-stepper></x-stepper> </x-numberinput> </x-box> <x-checkbox id="contour-repeat-strokes-checkbox"> <x-label><x-message href="#repeat-strokes"></x-message></x-label> </x-checkbox> </section> </section> <hr id="preview-section-hr"> <section id="preview-section"> <h3 id="preview-heading"><x-message href="#preview" autocapitalize></x-message></h3> <image id="preview" part="preview"></image> </section> </template>
  `;
  static l = S` <template> <x-button id="generate-button" size="large"> <x-icon href="#generators-panel"></x-icon> <x-label><x-message href="#generators.sketchify" autocapitalize></x-message></x-label> </x-button> </template>
  `;
  static _shadowStyleSheet = F`#roughness-subsection{display:flex;flex-flow:column}#roughness-subsection h4{margin-bottom:0}#roughness-slider{flex:1}#roughness-input{margin-left:10px;width:60px}#bowing-subsection{margin-top:6px}#bowing-subsection h4{margin:0}#bowing-slider{flex:1}#bowing-input{margin-left:10px;width:60px}#seed-subsection{margin-top:6px}#seed-subsection h4{margin:0}#seed-slider{flex:1}#seed-input{margin-left:10px;width:60px}#hatching-subsection{margin-top:6px}#hatching-heading{margin:0}#hatching-type-heading{margin-top:8px}#hatching-type-buttons x-button+x-button{margin-left:13px}#hatching-params-subsection{display:flex;align-items:flex-end;margin-top:12px}#hatching-angle-box,#hatching-spacing-box,#hatching-thickness-box{flex:1}#hatching-spacing-box{margin:0 8px}#hatching-angle-heading,#hatching-spacing-heading,#hatching-thickness-heading{margin-top:0}#hatching-angle-input,#hatching-spacing-input,#hatching-thickness-input{width:100%}#hatching-repeat-strokes-checkbox{margin-top:10px}#contour-subsection{margin-top:14px}#contour-heading{margin:0}#contour-custom-thickness-box{min-height:32px;margin-bottom:-8px}#contour-custom-thickness-input{flex:1;max-width:60px;margin-left:auto;place-self:end}#contour-repeat-strokes-checkbox{margin-top:10px}#preview{display:block;margin:0 auto;width:100%;height:160px;background-image:none}`;
  get options() {
    return {
      roughness: this["#roughness-input"].value,
      bowing: this["#bowing-input"].value,
      seed: this["#seed-input"].value,
      geometryPrecision: this.#w.board.geometryPrecision,
      hatchingType: this["#hatching-type-buttons"].value,
      hatchingThickness: this["#hatching-thickness-input"].value,
      hatchingSpacing: this["#hatching-spacing-input"].value,
      hatchingAngle: this["#hatching-angle-input"].value,
      hatchingRepeatStrokes: this["#hatching-repeat-strokes-checkbox"].toggled,
      contourRepeatStrokes: this["#contour-repeat-strokes-checkbox"].toggled,
      contourThickness: this["#contour-custom-thickness-checkbox"].toggled
        ? this["#contour-custom-thickness-input"].value
        : null,
    };
  }
  #w;
  #v;
  #N;
  #U;
  constructor() {
    super();
    this["#roughness-box"].addEventListener("changestart", () => this.#S());
    this["#hatching-repeat-strokes-checkbox"].addEventListener("toggle", () =>
      this.#F()
    );
    this["#bowing-box"].addEventListener("changestart", () => this.#C());
    this["#seed-box"].addEventListener("changestart", () => this.#T());
    this["#hatching-type-buttons"].addEventListener("toggle", () => this.#M());
    this["#hatching-thickness-box"].addEventListener("changestart", () =>
      this.#A()
    );
    this["#hatching-spacing-box"].addEventListener("changestart", () =>
      this.#P()
    );
    this["#hatching-angle-box"].addEventListener("changestart", () =>
      this.#D()
    );
    this["#contour-repeat-strokes-checkbox"].addEventListener("toggle", () =>
      this.#O()
    );
    this["#contour-custom-thickness-checkbox"].addEventListener("toggle", () =>
      this.#E()
    );
    this["#contour-custom-thickness-input"].addEventListener(
      "changestart",
      () => this.#z()
    );
    this["#generate-button"].addEventListener("click", () => this.#R());
  }
  connectedCallback() {
    this.#w = Me(this, "bx-editor");
    {
      let ai = ["path", ...r];
      if (j.status !== "no-api") {
        ai.push("text");
      }
      this.#U = ai.join(",");
    }
    let a6 = a2.getConfig("bx-sketchifygenerator:roughness", 1);
    let a7 = a2.getConfig("bx-sketchifygenerator:bowing", 1);
    let a8 = a2.getConfig("bx-sketchifygenerator:seed", 100);
    let a9 = a2.getConfig(
      "bx-sketchifygenerator:hatchingType",
      "straight-lines"
    );
    let aa = a2.getConfig("bx-sketchifygenerator:hatchingThickness", 4);
    let ab = a2.getConfig("bx-sketchifygenerator:hatchingSpacing", 10);
    let ac = a2.getConfig("bx-sketchifygenerator:hatchingAngle", -41);
    let ad = a2.getConfig("bx-sketchifygenerator:hatchingRepeatStrokes", true);
    let af = a2.getConfig(
      "bx-sketchifygenerator:contourCustomThickness",
      false
    );
    let ag = a2.getConfig(
      "bx-sketchifygenerator:contourCustomThicknessValue",
      5
    );
    let ah = a2.getConfig("bx-sketchifygenerator:contourRepeatStrokes", true);
    this["#roughness-slider"].value = a6;
    this["#roughness-input"].value = a6;
    this["#bowing-slider"].value = a7;
    this["#bowing-input"].value = a7;
    this["#seed-slider"].value = a8;
    this["#seed-input"].value = a8;
    this["#hatching-type-buttons"].value = a9;
    this["#hatching-thickness-input"].value = aa;
    this["#hatching-spacing-input"].value = ab;
    this["#hatching-angle-input"].value = ac;
    this["#hatching-repeat-strokes-checkbox"].toggled = ad;
    this["#contour-custom-thickness-checkbox"].toggled = af;
    this["#contour-custom-thickness-input"].value = ag;
    this["#contour-custom-thickness-input"].hidden = af === false;
    this["#contour-repeat-strokes-checkbox"].toggled = ah;
    this.#V();
    this.#w.board.addEventListener(
      "selectedelementschange",
      (this.#v = () => {
        this.#V();
      })
    );
    this.#w.board.addEventListener(
      "workspacemutation",
      (this.#N = () => {
        this.#B();
      })
    );
  }
  disconnectedCallback() {
    this.#w.board.removeEventListener("selectedelementschange", this.#v);
    this.#w.board.removeEventListener("workspacemutation", this.#N);
  }
  #S() {
    let a6;
    let a7;
    this["#roughness-box"].addEventListener(
      "change",
      (a6 = (a8) => {
        if (a8.target === this["#roughness-slider"]) {
          this["#roughness-input"].value = this["#roughness-slider"].value;
        } else if (a8.target === this["#roughness-input"]) {
          this["#roughness-slider"].value = this["#roughness-input"].value;
        }
        this.#L();
      })
    );
    this["#roughness-box"].addEventListener(
      "changeend",
      (a7 = () => {
        this["#roughness-box"].removeEventListener("change", a6);
        this["#roughness-box"].removeEventListener("changeend", a7);
        a2.setConfig(
          "bx-sketchifygenerator:roughness",
          this["#roughness-slider"].value
        );
        this.#V();
      })
    );
  }
  #C() {
    let a6;
    let a7;
    this["#bowing-box"].addEventListener(
      "change",
      (a6 = (a8) => {
        if (a8.target === this["#bowing-slider"]) {
          this["#bowing-input"].value = this["#bowing-slider"].value;
        } else if (a8.target === this["#bowing-input"]) {
          this["#bowing-slider"].value = this["#bowing-input"].value;
        }
        this.#L();
      })
    );
    this["#bowing-box"].addEventListener(
      "changeend",
      (a7 = () => {
        this["#bowing-box"].removeEventListener("change", a6);
        this["#bowing-box"].removeEventListener("changeend", a7);
        a2.setConfig(
          "bx-sketchifygenerator:bowing",
          this["#bowing-slider"].value
        );
        this.#V();
      })
    );
  }
  #T() {
    let a6;
    let a7;
    this["#seed-box"].addEventListener(
      "change",
      (a6 = (a8) => {
        if (a8.target === this["#seed-slider"]) {
          this["#seed-input"].value = this["#seed-slider"].value;
        } else if (a8.target === this["#seed-input"]) {
          this["#seed-slider"].value = this["#seed-input"].value;
        }
        this.#L();
      })
    );
    this["#seed-box"].addEventListener(
      "changeend",
      (a7 = () => {
        this["#seed-box"].removeEventListener("change", a6);
        this["#seed-box"].removeEventListener("changeend", a7);
        a2.setConfig("bx-sketchifygenerator:seed", this["#seed-slider"].value);
        this.#V();
      })
    );
  }
  #M() {
    a2.setConfig(
      "bx-sketchifygenerator:hatchingType",
      this["#hatching-type-buttons"].value
    );
    this.#V();
  }
  #A() {
    let a6;
    let a7;
    this["#hatching-thickness-box"].addEventListener(
      "change",
      (a6 = (a8) => {
        this.#L();
      })
    );
    this["#hatching-thickness-box"].addEventListener(
      "changeend",
      (a7 = () => {
        this["#hatching-thickness-box"].removeEventListener("change", a6);
        this["#hatching-thickness-box"].removeEventListener("changeend", a7);
        a2.setConfig(
          "bx-sketchifygenerator:hatchingThickness",
          this["#hatching-thickness-input"].value
        );
        this.#V();
      })
    );
  }
  #P() {
    let a6;
    let a7;
    this["#hatching-spacing-box"].addEventListener(
      "change",
      (a6 = (a8) => {
        this.#L();
      })
    );
    this["#hatching-spacing-box"].addEventListener(
      "changeend",
      (a7 = () => {
        this["#hatching-spacing-box"].removeEventListener("change", a6);
        this["#hatching-spacing-box"].removeEventListener("changeend", a7);
        a2.setConfig(
          "bx-sketchifygenerator:hatchingSpacing",
          this["#hatching-spacing-input"].value
        );
        this.#V();
      })
    );
  }
  #D() {
    let a6;
    let a7;
    this["#hatching-angle-box"].addEventListener(
      "change",
      (a6 = (a8) => {
        this.#L();
      })
    );
    this["#hatching-angle-box"].addEventListener(
      "changeend",
      (a7 = () => {
        this["#hatching-angle-box"].removeEventListener("change", a6);
        this["#hatching-angle-box"].removeEventListener("changeend", a7);
        a2.setConfig(
          "bx-sketchifygenerator:hatchingAngle",
          this["#hatching-angle-input"].value
        );
        this.#V();
      })
    );
  }
  #F() {
    a2.setConfig(
      "bx-sketchifygenerator:hatchingRepeatStrokes",
      this["#hatching-repeat-strokes-checkbox"].toggled
    );
    this.#V();
  }
  #O() {
    a2.setConfig(
      "bx-sketchifygenerator:contourRepeatStrokes",
      this["#contour-repeat-strokes-checkbox"].toggled
    );
    this.#V();
  }
  #E() {
    if (this["#contour-custom-thickness-checkbox"].toggled) {
      a2.setConfig("bx-sketchifygenerator:contourCustomThickness", true);
    } else {
      a2.setConfig("bx-sketchifygenerator:contourCustomThickness", false);
    }
    this.#V();
  }
  #z() {
    let a6;
    let a7;
    this["#contour-custom-thickness-input"].addEventListener(
      "change",
      (a6 = (a8) => {
        this.#L();
      })
    );
    this["#contour-custom-thickness-input"].addEventListener(
      "changeend",
      (a7 = () => {
        this["#contour-custom-thickness-input"].removeEventListener(
          "change",
          a6
        );
        this["#contour-custom-thickness-input"].removeEventListener(
          "changeend",
          a7
        );
        a2.setConfig(
          "bx-sketchifygenerator:contourCustomThicknessValue",
          this["#contour-custom-thickness-input"].value
        );
        this.#V();
      })
    );
  }
  async #R() {
    let a6 = this.#w.board;
    a6.outermostSelectedObjectElements;
    let a7 = [];
    a6.undoManager.checkpoint(["#generators.sketchify"], "#generators-panel");
    for (let a8 of a6.outermostSelectedObjectElements) {
      if (a8.matches(this.#U)) {
        let a9 = await this.#I(a8);
        if (a9) {
          a7.push(...a9);
        } else {
          a7.push(a8);
        }
      } else if (a8.localName === "g" || a8.localName === "a") {
        let aa = a8.querySelectorAll(this.#U);
        for (let ab of aa) {
          await this.#I(ab);
        }
        a7.push(a8);
      } else {
        a7.push(a8);
      }
    }
    a6.selectedElements = a7;
    a6.selectedTextRange = null;
  }
  #I(a6) {
    return new Promise(async (a7) => {
      let a8 = this.options;
      if (a6.localName === "text") {
        let a9 = [];
        let aa = await ue(a6, a8.geometryPrecision, 6);
        if (aa) {
          for (let ab of aa) {
            a9 = await this.#I(ab);
          }
        }
        a7(a9);
      } else if ([...r, "path"].includes(a6.localName)) {
        let ac = [];
        let ad = null;
        if (r.includes(a6.localName)) {
          ad = ((af) => {
            let ag = "";
            for (let ah = 0, ai = af.length; ah < ai; ah += 1) {
              let aj = af[ah];
              if (ah > 0) {
                ag += " ";
              }
              ag += aj.type;
              if (aj?.values?.length > 0) {
                ag += " " + aj.values.join(" ");
              }
            }
            return ag;
          })(
            a6.getPathData({
              normalize: true,
            })
          );
        } else if (a6.localName === "path") {
          ad = a6.getAttribute("d");
        }
        if (ad) {
          let af = getComputedStyle(a6);
          a8 = {
            ...a8,
            hatchingStroke: af.fill,
            contourStroke: af.stroke,
            contourThickness:
              a8.contourThickness === null
                ? parseFloat(af.strokeWidth)
                : a8.contourThickness,
            contourDasharray: af.strokeDasharray,
            contourDashoffset: parseFloat(af.strokeDashoffset),
          };
          ze += 1;
          let ag;
          let ah = ze;
          if (Ee === null) {
            Ee = new Worker("/workers/sketchify.js");
          }
          Ee.postMessage([ad, a8, ah]);
          Ee.addEventListener(
            "message",
            (ag = (ai) => {
              let [aj, ak] = ai.data;
              if (ak === ah) {
                Ee.removeEventListener("message", ag);
                let al = ((am) => {
                  let an = document.createDocumentFragment();
                  let ao = document.createElementNS(o, "svg");
                  for (ao.innerHTML = am; ao.firstChild; ) {
                    an.append(ao.firstChild);
                  }
                  if (an.childElementCount > 1) {
                    return an;
                  } else if (an.childElementCount === 1) {
                    return an.children[0];
                  } else {
                    return null;
                  }
                })(aj);
                for (let am of a6.attributes) {
                  if (
                    am.name.startsWith("data-") ||
                    ["id", "class", "tabindex", "transform"].includes(am.name)
                  ) {
                    al.setAttribute(am.name, am.value);
                  }
                }
                a6.replaceWith(al);
                ac.push(al);
                a7(ac);
              }
            })
          );
        }
      } else {
        a7(null);
      }
    });
  }
  async #V() {
    let a6 = true;
    for (let a8 of this.#w.board.outermostSelectedObjectElements) {
      if (a8.matches(this.#U)) {
        a6 = false;
        break;
      }
      if (a8.localName === "g" && a8.querySelector(this.#U) !== null) {
        a6 = false;
        break;
      }
    }
    this["#options-heading"].disabled = a6;
    this["#roughness-heading"].disabled = a6;
    this["#roughness-slider"].disabled = a6;
    this["#roughness-input"].disabled = a6;
    this["#bowing-heading"].disabled = a6;
    this["#bowing-slider"].disabled = a6;
    this["#bowing-input"].disabled = a6;
    this["#seed-heading"].disabled = a6;
    this["#seed-slider"].disabled = a6;
    this["#seed-input"].disabled = a6;
    this["#hatching-heading"].disabled = a6;
    this["#hatching-type-heading"].disabled = a6;
    for (let a9 of this["#hatching-type-buttons"].children) {
      a9.disabled = a6;
    }
    this["#hatching-thickness-heading"].disabled = a6;
    this["#hatching-thickness-input"].disabled = a6;
    this["#hatching-spacing-heading"].disabled = a6;
    this["#hatching-spacing-input"].disabled = a6;
    this["#hatching-angle-heading"].disabled = a6;
    this["#hatching-angle-input"].disabled = a6;
    this["#hatching-repeat-strokes-checkbox"].disabled = a6;
    this["#contour-heading"].disabled = a6;
    this["#contour-repeat-strokes-checkbox"].disabled = a6;
    this["#contour-custom-thickness-checkbox"].disabled = a6;
    this["#contour-custom-thickness-input"].disabled = a6;
    this["#contour-custom-thickness-input"].hidden =
      this["#contour-custom-thickness-checkbox"].toggled === false;
    if (a6) {
      this["#preview-section"].hidden = true;
      this["#preview"].innerHTML = "";
      this["#preview-section-hr"].hidden = true;
    } else {
      let aa = this.#w.board.extractArtworkWithSelectedElements();
      let ab = new _(aa);
      for (let af of aa.querySelectorAll(this.#U)) {
        await this.#I(af);
      }
      ab.destroy();
      let ac = Pe(aa);
      let ad = await ((a7 = ac),
      new Promise(async (ag) => {
        let ah;
        let ai;
        let aj = new Blob([a7], {
          type: "image/svg+xml",
        });
        let ak = new FileReader();
        ak.readAsDataURL(aj);
        ak.addEventListener(
          "load",
          (ah = (al) => {
            ak.removeEventListener("load", ah);
            ak.removeEventListener("error", ai);
            let am = al.target.result;
            ag(am);
          })
        );
        ak.addEventListener(
          "error",
          (ai = (al) => {
            ak.removeEventListener("load", ah);
            ak.removeEventListener("error", ai);
            ag(null);
          })
        );
      }));
      this["#preview"].setAttribute("src", ad);
      this["#preview-section"].hidden = false;
      this["#preview-section-hr"].hidden = false;
    }
    var a7;
    this["#generate-button"].disabled = a6;
  }
  #L = ((e, t = 500, i) => {
    let n = null;
    let a = null;
    let o = null;
    let l = 0;
    let s = () => {
      l = new Date();
      a = null;
      o = e.apply(i, n);
    };
    return (...r) => {
      let h = new Date();
      let p = t - (h - l);
      n = r;
      if (p <= 0) {
        clearTimeout(a);
        a = null;
        l = h;
        o = e.apply(i, n);
      } else {
        a ||= setTimeout(s, p);
      }
      return o;
    };
  })(this.#V, 100, this);
  #B = ((e, t, i, n = false) => {
    let a = null;
    let o = null;
    return (...l) => {
      let s = n && !a;
      clearTimeout(a);
      a = setTimeout(() => {
        a = null;
        if (!n) {
          o = e.apply(i, l);
        }
      }, t);
      if (s) {
        o = e.apply(i, l);
      }
      return o;
    };
  })(this.#V, 1000, this);
}
customElements.define("bx-sketchifygenerator", Re);
