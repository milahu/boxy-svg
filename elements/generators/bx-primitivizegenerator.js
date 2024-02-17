import a2 from "/libs/xel/xel.js";
import a3 from "/libs/color/color.js";
import "/libs/css-parser/css-parser.js";
import a4 from "/libs/paper/paper.js";
import "/libs/seed-random/seed-random.js";
import "/libs/dom-purify/dom-purify.js";
import a5 from "/libs/dexie/dexie.js";
import a6 from "/libs/typesense/typesense.js";
import "/libs/pako/pako.js";
const s = "https://boxy-svg.com";
const l = "http://www.w3.org/2000/svg";
const o = "http://www.w3.org/1999/xlink";
const r = "http://www.w3.org/2000/xmlns/";
const p = ["circle", "ellipse", "line", "path", "polygon", "polyline", "rect"];
const h = ["text", "textPath", "tspan"];
const u = [...p, ...h, "foreignObject", "image"];
const m = [...p, ...h];
const d = [...p, "text", "use"];
const c = [...u, "clipPath", "a", "g", "use"];
const f = [
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
    appliesTo: [...u, "svg", "g", "a", "use"],
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
    appliesTo: [...u, "use"],
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
    appliesTo: [...u, "svg", "g", "a", "use"],
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
      ...u,
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
    appliesTo: [...u, "svg", "g", "a", "use"],
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
    appliesTo: [...u, "textPath", "tspan", "svg", "g", "a", "use"],
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
    appliesTo: [...m],
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
    appliesTo: [...m],
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
    appliesTo: [...m],
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
    appliesTo: [...u, "textPath", "tspan", "g", "a", "svg", "use"],
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
      ...u,
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
    appliesTo: [...p],
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
    appliesTo: [...p],
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
    appliesTo: [...p],
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
    appliesTo: [...p],
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
    appliesTo: [...u, "g", "a", "svg", "use"],
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
      ...u,
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
      ...u,
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
    appliesTo: [...m],
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
    appliesTo: [...u, "svg", "g", "a", "use"],
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
    appliesTo: [...p],
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
    appliesTo: [...m],
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
    appliesTo: [...m],
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
    appliesTo: [...m],
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
    appliesTo: [...m],
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
    appliesTo: [...m],
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
    appliesTo: [...m],
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
    appliesTo: [...m],
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
    appliesTo: [...m],
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
    appliesTo: [...u, "use"],
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
    appliesTo: [...u, "text", "textPath", "tspan"],
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
f.map((a7) => a7.presentationAttributeName).filter((a7) => a7);
let b = (a7, a8 = 0) => {
  let a9 = Math.pow(10, a8);
  return Math.round((a7 + Number.EPSILON) * a9) / a9;
};
class g extends a3 {
  get type() {
    return "<color>";
  }
  static fromString(a7, a8 = false) {
    if (a8) {
      return new g(a7);
    }
    {
      let a9 = null;
      try {
        a9 = new g(a7);
      } catch (aa) {}
      return a9;
    }
  }
}
let x = (a7, a8 = false) => {
  if (a8) {
    a7.unshift(a7.pop());
  } else {
    a7.push(a7.shift());
  }
  return a7;
};
const y = new Set([
  "Z",
  "M",
  "L",
  "C",
  "Q",
  "A",
  "H",
  "V",
  "S",
  "T",
  "z",
  "m",
  "l",
  "c",
  "q",
  "a",
  "h",
  "v",
  "s",
  "t",
  "R",
  "U",
  "N",
]);
class v {
  #e;
  #t;
  #i;
  #a;
  parse(a7) {
    let a8 = [];
    if (
      a7?.length > 0 &&
      ((this.#e = a7),
      (this.#t = 0),
      (this.#i = this.#e.length),
      (this.#a = null),
      this.#n(),
      this.#s())
    ) {
      while (this.#l()) {
        let a9 = this.#o();
        if (a9 === null) {
          break;
        }
        a8.push(a9);
      }
    }
    return a8;
  }
  #o() {
    let a7 = this.#e[this.#t];
    let a8 = y.has(a7) ? a7 : null;
    if (a8 === null) {
      if (this.#a === null) {
        return null;
      }
      a8 =
        (a7 === "+" || a7 === "-" || a7 === "." || (a7 >= "0" && a7 <= "9")) &&
        this.#a !== "Z"
          ? this.#a === "M"
            ? "L"
            : this.#a === "m"
            ? "l"
            : this.#a
          : null;
      if (a8 === null) {
        return null;
      }
    } else {
      this.#t += 1;
    }
    this.#a = a8;
    let a9 = null;
    let aa = a8.toUpperCase();
    if (aa === "H" || aa === "V") {
      a9 = [this.#r()];
    } else if (
      aa === "M" ||
      aa === "L" ||
      aa === "T" ||
      aa === "R" ||
      aa === "U"
    ) {
      a9 = [this.#r(), this.#r()];
    } else if (aa === "S" || aa === "Q") {
      a9 = [this.#r(), this.#r(), this.#r(), this.#r()];
    } else if (aa === "C") {
      a9 = [this.#r(), this.#r(), this.#r(), this.#r(), this.#r(), this.#r()];
    } else if (aa === "A") {
      a9 = [
        this.#r(),
        this.#r(),
        this.#r(),
        this.#p(),
        this.#p(),
        this.#r(),
        this.#r(),
      ];
    } else if (aa === "Z") {
      this.#n();
      a9 = [];
    }
    if (a9 === null || a9.indexOf(null) >= 0) {
      return null;
    } else {
      return {
        type: a8,
        values: a9,
      };
    }
  }
  #l() {
    return this.#t < this.#i;
  }
  #h() {
    let a7 = this.#e[this.#t];
    if (y.has(a7)) {
      return a7;
    } else {
      return null;
    }
  }
  #s() {
    if (!this.#l()) {
      return true;
    }
    let a7 = this.#h();
    return a7 === "M" || a7 === "m";
  }
  #u() {
    let a7 = this.#e[this.#t];
    return (
      a7 <= " " &&
      (a7 === " " || a7 === "\n" || a7 === "\t" || a7 === "\r" || a7 === "\f")
    );
  }
  #n() {
    while (this.#t < this.#i && this.#u()) {
      this.#t += 1;
    }
    return this.#t < this.#i;
  }
  #m() {
    return (
      (this.#t >= this.#i || !!this.#u() || this.#e[this.#t] === ",") &&
      (this.#n() &&
        this.#t < this.#i &&
        this.#e[this.#t] === "," &&
        ((this.#t += 1), this.#n()),
      this.#t < this.#i)
    );
  }
  #r() {
    let a7 = 0;
    let a8 = 0;
    let a9 = 1;
    let aa = 0;
    let ab = 1;
    let ac = 1;
    let ad = this.#t;
    this.#n();
    if (this.#t < this.#i && this.#e[this.#t] === "+") {
      this.#t += 1;
    } else if (this.#t < this.#i && this.#e[this.#t] === "-") {
      this.#t += 1;
      ab = -1;
    }
    if (
      this.#t === this.#i ||
      ((this.#e[this.#t] < "0" || this.#e[this.#t] > "9") &&
        this.#e[this.#t] !== ".")
    ) {
      return null;
    }
    let af = this.#t;
    while (
      this.#t < this.#i &&
      this.#e[this.#t] >= "0" &&
      this.#e[this.#t] <= "9"
    ) {
      this.#t += 1;
    }
    if (this.#t !== af) {
      let ah = this.#t - 1;
      let ai = 1;
      while (ah >= af) {
        a8 += ai * (this.#e[ah] - "0");
        ah -= 1;
        ai *= 10;
      }
    }
    if (this.#t < this.#i && this.#e[this.#t] === ".") {
      this.#t += 1;
      if (
        this.#t >= this.#i ||
        this.#e[this.#t] < "0" ||
        this.#e[this.#t] > "9"
      ) {
        return null;
      }
      while (
        this.#t < this.#i &&
        this.#e[this.#t] >= "0" &&
        this.#e[this.#t] <= "9"
      ) {
        a9 *= 10;
        aa += (this.#e.charAt(this.#t) - "0") / a9;
        this.#t += 1;
      }
    }
    if (
      this.#t !== ad &&
      this.#t + 1 < this.#i &&
      (this.#e[this.#t] === "e" || this.#e[this.#t] === "E") &&
      this.#e[this.#t + 1] !== "x" &&
      this.#e[this.#t + 1] !== "m"
    ) {
      this.#t += 1;
      if (this.#e[this.#t] === "+") {
        this.#t += 1;
      } else if (this.#e[this.#t] === "-") {
        this.#t += 1;
        ac = -1;
      }
      if (
        this.#t >= this.#i ||
        this.#e[this.#t] < "0" ||
        this.#e[this.#t] > "9"
      ) {
        return null;
      }
      while (
        this.#t < this.#i &&
        this.#e[this.#t] >= "0" &&
        this.#e[this.#t] <= "9"
      ) {
        a7 *= 10;
        a7 += this.#e[this.#t] - "0";
        this.#t += 1;
      }
    }
    let ag = a8 + aa;
    ag *= ab;
    if (a7) {
      ag *= Math.pow(10, ac * a7);
    }
    if (ad === this.#t) {
      return null;
    } else {
      this.#m();
      return ag;
    }
  }
  #p() {
    if (this.#t >= this.#i) {
      return null;
    }
    let a7 = null;
    let a8 = this.#e[this.#t];
    this.#t += 1;
    if (a8 === "0") {
      a7 = 0;
    } else {
      if (a8 !== "1") {
        return null;
      }
      a7 = 1;
    }
    this.#m();
    return a7;
  }
}
const w = {
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
let N = (a7, ...a8) => {
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
let U = (a7, ...a8) => {
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
  #d;
  #c = null;
  #f = {};
  constructor() {
    this.#d = new a5("GoogleFontsManager");
    this.#d.version(1).stores({
      cache: "family",
    });
  }
  search(a7 = "", a8 = "alphabetical", a9 = "all", aa = "all", ab = "all") {
    return new Promise(async (ac) => {
      await this.#b();
      let ad = [];
      let af = this.#d.cache;
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
      if (this.#c === null) {
        this.#c = new a6.Client({
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
        a9 = await this.#c.collections("googleFonts").documents().export();
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
      await this.#d.cache.clear();
      await this.#d.cache.bulkPut(aa);
      a7();
    });
  }
  getFontFaceRulesFromUrl(a7, a8 = false) {
    return new Promise(async (a9) => {
      let aa = [];
      await this.#b();
      if (a8) {
        let ab = await this.#g(a7);
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
          let aA = this.#d.cache;
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
                    if (w[aL]) {
                      aI.push(w[aL]);
                    }
                  }
                  if (aI.length === 0) {
                    aI = "U+0-10FFFF";
                  }
                  let aJ = aI.join(",");
                  let aK = U`
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
      await this.#b();
      a8((await this.#d.cache.where("family").equals(a7).toArray())[0] || null);
    });
  }
  #g(a7) {
    return new Promise(async (a8) => {
      let a9 = null;
      if (this.#f[a7]) {
        a9 = this.#f[a7];
      } else {
        let aa = await fetch(a7);
        let ab = await aa.text();
        a9 = new CSSStyleSheet();
        a9.replaceSync(ab);
        this.#f[a7] = a9;
      }
      a8(a9);
    });
  }
  #b() {
    return new Promise(async (a7) => {
      let a8 = await this.#d.cache.count();
      let a9 = true;
      if (a8 > 0) {
        let aa = await this.#d.cache.get("Roboto");
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
if (!["iPhone", "iPad"].includes(navigator.platform)) {
  navigator.platform.startsWith("Mac");
}
const C =
  navigator.userAgent.indexOf("Safari/") > -1 &&
  navigator.userAgent.indexOf("Chrome") === -1;
if (window.frameElement === null) {
  document.body.dataset.app;
}
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
let M = (a7) => {
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
let T = (a7) => {
  let a8;
  let a9 = document.createNodeIterator(a7, NodeFilter.SHOW_TEXT, null);
  let aa = {
    text: true,
    textPath: true,
    tspan: true,
  };
  while ((a8 = a9.nextNode())) {
    if (!aa[a8.parentElement.localName]) {
      if (z(a8.textContent)) {
        a8.remove();
      }
    }
  }
};
let z = (a7) => !/[^\t\n\r ]/.test(a7);
new (class extends EventTarget {
  #x = "init";
  #y = [];
  #d;
  get status() {
    return this.#x;
  }
  constructor() {
    super();
    this.#d = new a5("LocalFontsManager");
    this.#d.version(1).stores({
      cache: "family",
    });
    this.#d
      .version(2)
      .stores({
        cache: "family",
      })
      .upgrade((a7) => a7.cache.clear());
    if (window.queryLocalFonts === undefined) {
      this.#x = "no-api";
    } else {
      navigator.permissions
        .query({
          name: "local-fonts",
        })
        .then((a7) => {
          if (a7.state === "granted") {
            this.refresh();
          } else if (a7.state !== "prompt") {
            this.#x = "no-permission";
          }
        });
    }
  }
  search(a7 = "", a8 = "all") {
    return new Promise(async (a9) => {
      let aa = [];
      let ab = this.#d.cache;
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
        let ad = F(ac.style) + (M(ac.style) === "italic" ? "i" : "");
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
      await this.#d.cache.clear();
      await this.#d.cache.bulkPut(aa);
      this.#x = "ready";
      a7();
    });
  }
  getLocalFontsMetadata(a7 = false) {
    return new Promise(async (a8, a9) => {
      if (this.status === "no-api") {
        a8([]);
      } else {
        if (this.#y.length < 10 || a7) {
          try {
            this.#y = await window.queryLocalFonts();
          } catch (aa) {
            return a9({
              message: aa.message,
              name: aa.name,
            });
          }
        }
        a8(this.#y);
      }
    });
  }
  getCacheSize() {
    return new Promise(async (a7) => {
      a7(await this.#d.cache.count());
    });
  }
  getFamilyDescriptor(a7) {
    return new Promise(async (a8) => {
      a8((await this.#d.cache.where("family").equals(a7).toArray())[0] || null);
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
let P = (a7, a8 = 6) => {
  let a9 = null;
  if (a7.localName === "rect") {
    a9 = S(a7, a8);
  } else if (a7.localName === "circle") {
    a9 = V(a7, a8);
  } else if (a7.localName === "ellipse") {
    a9 = D(a7, a8);
  } else if (a7.localName === "line") {
    a9 = L(a7, a8);
  } else if (a7.localName === "polyline") {
    a9 = B(a7, a8);
  } else if (a7.localName === "polygon") {
    a9 = R(a7, a8);
  }
  return a9;
};
let S = (a7, a8 = 6) => {
  let a9 = Fe("svg:path");
  let aa = a7.getPathData();
  for (let ab of aa) {
    ab.values = ab.values.map((ac) => b(ac, a8));
  }
  a9.setPathData(aa);
  for (let ac of a7.attributes) {
    if (["x", "y", "width", "height", "rx", "ry"].includes(ac.name) === false) {
      a9.setAttribute(ac.name, ac.value);
    }
  }
  a9.innerHTML = a7.innerHTML;
  return a9;
};
let V = (a7, a8 = 6) => {
  let a9 = Fe("svg:path");
  let aa = a7.getPathData();
  for (let ab of aa) {
    ab.values = ab.values.map((ac) => b(ac, a8));
  }
  a9.setPathData(aa);
  for (let ac of a7.attributes) {
    if (!["cx", "cy", "r"].includes(ac.name)) {
      a9.setAttribute(ac.name, ac.value);
    }
  }
  a9.innerHTML = a7.innerHTML;
  return a9;
};
let D = (a7, a8 = 6) => {
  let a9 = Fe("svg:path");
  let aa = a7.getPathData();
  for (let ab of aa) {
    ab.values = ab.values.map((ac) => b(ac, a8));
  }
  a9.setPathData(aa);
  for (let ac of a7.attributes) {
    if (!["cx", "cy", "rx", "ry"].includes(ac.name)) {
      a9.setAttribute(ac.name, ac.value);
    }
  }
  a9.innerHTML = a7.innerHTML;
  return a9;
};
let L = (a7, a8 = 6) => {
  let a9 = Fe("svg:path");
  let aa = a7.getPathData();
  for (let ab of aa) {
    ab.values = ab.values.map((ac) => b(ac, a8));
  }
  a9.setPathData(aa);
  for (let ac of a7.attributes) {
    if (!["x1", "y1", "x2", "y2"].includes(ac.name)) {
      a9.setAttribute(ac.name, ac.value);
    }
  }
  a9.innerHTML = a7.innerHTML;
  return a9;
};
let B = (a7, a8 = 6) => {
  let a9 = Fe("svg:path");
  let aa = a7.getPathData();
  for (let ab of aa) {
    ab.values = ab.values.map((ac) => b(ac, a8));
  }
  a9.setPathData(aa);
  for (let ac of a7.attributes) {
    if (ac.name !== "points") {
      a9.setAttribute(ac.name, ac.value);
    }
  }
  a9.innerHTML = a7.innerHTML;
  return a9;
};
let R = (a7, a8 = 6) => {
  let a9 = Fe("svg:path");
  let aa = a7.getPathData();
  for (let ab of aa) {
    ab.values = ab.values.map((ac) => b(ac, a8));
  }
  a9.setPathData(a7.getPathData());
  for (let ac of a7.attributes) {
    if (ac.name !== "points") {
      a9.setAttribute(ac.name, ac.value);
    }
  }
  a9.innerHTML = a7.innerHTML;
  return a9;
};
const O =
  "\n  position: fixed;\n  top: -1px;\n  left: -1px;\n  width: 1px;\n  height: 1px;\n  contain: strict;\n  overflow: hidden;\n".replaceAll(
    "\n  ",
    ""
  );
class j {
  #v;
  #w;
  get shadowRoot() {
    return this.#v.shadowRoot;
  }
  constructor(a7) {
    this.#w = a7;
    this.#v = document.createElement("div");
    this.#v.setAttribute("style", O);
    this.#v.setAttribute("class", "offscreen-container");
    this.#v.attachShadow({
      mode: "open",
    });
    this.#v.shadowRoot.append(a7);
    document.body.append(this.#v);
  }
  destroy() {
    if (this.#w.parentNode === this.#v.shadowRoot) {
      this.#w.remove();
    }
    this.#v.remove();
    this.#v = null;
  }
}
let E = (a7) => {
  if (a7.isConnected === false) {
    new j(a7);
  }
  if (C) {
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
let Z = (a7, a8, a9 = 3) => {
  let aa = Ne(a7, true);
  for (let ab of aa) {
    if (
      ab.type === "M" ||
      ab.type === "L" ||
      ab.type === "R" ||
      ab.type === "U" ||
      ab.type === "N"
    ) {
      let ac = new DOMPoint(ab.values[0], ab.values[1]).matrixTransform(a8);
      ab.values = [ac.x, ac.y];
    } else if (ab.type === "C") {
      let ad = new DOMPoint(ab.values[0], ab.values[1]).matrixTransform(a8);
      let af = new DOMPoint(ab.values[2], ab.values[3]).matrixTransform(a8);
      let ag = new DOMPoint(ab.values[4], ab.values[5]).matrixTransform(a8);
      ab.values = [ad.x, ad.y, af.x, af.y, ag.x, ag.y];
    }
    ab.values = ab.values.map((ah) => b(ah, a9));
  }
  return aa;
};
let I = (a7) => {
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
let $ = (a7, a8) => {
  let a9 = a7.closest("text");
  let aa = 0;
  let ab = -1;
  for (let ac of I(a9)) {
    if (ac === a7) {
      ab = aa + a8;
      break;
    }
    aa += ac.length;
  }
  return [a9, ab];
};
let q = (a7, a8 = true) => {
  let a9 = new DOMRect(0, 0, 0, 0);
  let aa = a8
    ? ((ab) => {
        let ac = null;
        if (c.includes(ab.localName)) {
          let ad = getComputedStyle(ab).clipPath;
          if (ad && ad !== "none") {
            let af = ad.substring(6, ad.length - 2);
            let ag = Me(ab).querySelector("#" + CSS.escape(af)) || null;
            if (ag?.localName === "clipPath" && ag !== ab) {
              ac = ag;
            }
          }
        }
        return ac;
      })(a7)
    : null;
  if (aa) {
    let ab = q(a7, false);
    let ac = te(q(aa), E(aa));
    a9 = ae(ab, ac);
  } else if (a7.localName === "tspan") {
    let ad = I(a7);
    let af = document.createRange();
    if (ad.length > 0) {
      af.setStart(ad[0], 0);
      af.setEnd(ad[ad.length - 1], ad[ad.length - 1].length);
    }
    if (af.collapsed === false) {
      let ag = af.startContainer.closest("text");
      let [, ah] = $(af.startContainer, af.startOffset);
      let [, ai] = $(af.endContainer, af.endOffset);
      let aj = [];
      for (let ak = ah; ak < ai; ak += 1) {
        let al = ag.getExtentOfChar(ak);
        aj.push(al);
      }
      a9 = ie(aj);
    }
  } else if (a7.localName === "use") {
    a9 = new DOMRect(0, 0, a7.width.baseVal.value, a7.height.baseVal.value);
  } else if (a7.localName === "clipPath") {
    let am = [];
    for (let an of a7.children) {
      if (d.includes(an.localName)) {
        let ao = te(DOMRect.fromRect(an.getBBox()), E(an));
        am.push(ao);
      }
    }
    if (am.length > 0) {
      a9 = ie(am);
    }
  } else {
    a9 = DOMRect.fromRect(a7.getBBox());
  }
  return a9;
};
let { sin, cos, acos, atan2, abs, sqrt, pow, PI, min, max } = Math;
document.createElementNS("http://www.w3.org/2000/svg", "svg");
let te = (a7, a8) => {
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
let ie = (a7) => {
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
let ae = (a7, a8) => {
  let a9 = Math.max(a7.left, a8.left);
  let aa = Math.min(a7.right, a8.right);
  let ab = Math.max(a7.top, a8.top);
  let ac = Math.min(a7.bottom, a8.bottom);
  return new DOMRect(a9, ab, aa - a9, ac - ab);
};
let { sin: ne, asin, cos: le, tan, sqrt: re, abs: pe, PI: he } = Math;
let ue = (a7, a8, a9, aa, ab, ac, ad, af, ag, ah) => {
  let ai = (PI * ad) / 180;
  let aj;
  let ak;
  let al;
  let am;
  let an = [];
  let ao = (aB, aC, aD) => ({
    x: aB * le(aD) - aC * ne(aD),
    y: aB * ne(aD) + aC * le(aD),
  });
  if (ah) {
    aj = ah[0];
    ak = ah[1];
    al = ah[2];
    am = ah[3];
  } else {
    let aB = ao(a7, a8, -ai);
    a7 = aB.x;
    a8 = aB.y;
    let aC;
    let aD = ao(a9, aa, -ai);
    let aE = (a7 - (a9 = aD.x)) / 2;
    let aF = (a8 - (aa = aD.y)) / 2;
    let aG = (aE * aE) / (ab * ab) + (aF * aF) / (ac * ac);
    if (aG > 1) {
      aG = re(aG);
      ab *= aG;
      ac *= aG;
    }
    aC = af === ag ? -1 : 1;
    let aH = ab * ab;
    let aI = ac * ac;
    let aJ =
      aC *
      re(
        pe(
          (aH * aI - aH * aF * aF - aI * aE * aE) /
            (aH * aF * aF + aI * aE * aE)
        )
      );
    al = (aJ * ab * aF) / ac + (a7 + a9) / 2;
    am = (aJ * -ac * aE) / ab + (a8 + aa) / 2;
    aj = asin(parseFloat(((a8 - am) / ac).toFixed(9)));
    ak = asin(parseFloat(((aa - am) / ac).toFixed(9)));
    if (a7 < al) {
      aj = he - aj;
    }
    if (a9 < al) {
      ak = he - ak;
    }
    if (aj < 0) {
      aj = he * 2 + aj;
    }
    if (ak < 0) {
      ak = he * 2 + ak;
    }
    if (ag && aj > ak) {
      aj -= he * 2;
    }
    if (!ag && ak > aj) {
      ak -= he * 2;
    }
  }
  let ap = ak - aj;
  if (pe(ap) > (he * 120) / 180) {
    let aK = ak;
    let aL = a9;
    let aM = aa;
    ak =
      ag && ak > aj
        ? aj + ((he * 120) / 180) * 1
        : aj + ((he * 120) / 180) * -1;
    a9 = al + ab * le(ak);
    aa = am + ac * ne(ak);
    an = ue(a9, aa, aL, aM, ab, ac, ad, 0, ag, [ak, aK, al, am]);
  }
  ap = ak - aj;
  let aq = le(aj);
  let ar = ne(aj);
  let as = le(ak);
  let at = ne(ak);
  let au = tan(ap / 4);
  let av = (4 / 3) * ab * au;
  let aw = (4 / 3) * ac * au;
  let ax = [a7, a8];
  let ay = [a7 + av * ar, a8 - aw * aq];
  let az = [a9 + av * at, aa - aw * as];
  let aA = [a9, aa];
  ay[0] = ax[0] * 2 - ay[0];
  ay[1] = ax[1] * 2 - ay[1];
  if (ah) {
    return [ay, az, aA].concat(an);
  }
  {
    an = [ay, az, aA].concat(an);
    let aN = [];
    for (let aO = 0; aO < an.length; aO += 3) {
      let aP = ao(an[aO][0], an[aO][1], ai);
      let aQ = ao(an[aO + 1][0], an[aO + 1][1], ai);
      let aR = ao(an[aO + 2][0], an[aO + 2][1], ai);
      aN.push([aP.x, aP.y, aQ.x, aQ.y, aR.x, aR.y]);
    }
    return aN;
  }
};
let me = (a7, a8 = false) => {
  let a9;
  if (a7[0] instanceof DOMPoint) {
    a7 = a7.map((aa) => [aa.x, aa.y]);
  }
  a9 = a8 ? ce(a7) : de(a7);
  return a9;
};
let de = (a7) => {
  let a8;
  let a9;
  let aa;
  let ab;
  let ac;
  let ad;
  let af = [];
  let ag = false;
  let ah = false;
  for (let ak = 0, al = a7.length; ak <= al; ak += 1) {
    if (ak < al) {
      if (ag === false) {
        ag = true;
        a8 = 0;
      }
      ai = a7[ak][0];
      aj = a7[ak][1];
      if (a8 === 0) {
        a8 = 1;
        ah = true;
        if (a9) {
          af.push({
            type: "L",
            values: [ai, aj],
          });
        } else {
          af.push({
            type: "M",
            values: [ai, aj],
          });
        }
      } else if (a8 === 1) {
        a8 = 2;
      } else if (a8 === 2) {
        a8 = 3;
        ah = true;
        af.push(
          {
            type: "L",
            values: [(aa * 5 + ac) / 6, (ab * 5 + ad) / 6],
          },
          {
            type: "C",
            values: [
              (aa * 2 + ac) / 3,
              (ab * 2 + ad) / 3,
              (aa + ac * 2) / 3,
              (ab + ad * 2) / 3,
              (aa + ac * 4 + ai) / 6,
              (ab + ad * 4 + aj) / 6,
            ],
          }
        );
      } else {
        ah = true;
        af.push({
          type: "C",
          values: [
            (aa * 2 + ac) / 3,
            (ab * 2 + ad) / 3,
            (aa + ac * 2) / 3,
            (ab + ad * 2) / 3,
            (aa + ac * 4 + ai) / 6,
            (ab + ad * 4 + aj) / 6,
          ],
        });
      }
      aa = ac;
      ab = ad;
      ac = ai;
      ad = aj;
    } else if (ag === true) {
      ag = false;
      if (a8 === 3) {
        ah = true;
        af.push(
          {
            type: "C",
            values: [
              (aa * 2 + ac) / 3,
              (ab * 2 + ad) / 3,
              (aa + ac * 2) / 3,
              (ab + ad * 2) / 3,
              (aa + ac * 4 + ac) / 6,
              (ab + ad * 4 + ad) / 6,
            ],
          },
          {
            type: "L",
            values: [ac, ad],
          }
        );
      } else if (a8 === 2) {
        ah = true;
        af.push({
          type: "L",
          values: [ac, ad],
        });
      }
      if ((a9 || (a9 !== 0 && a8 === 1)) && ah) {
        af.push({
          type: "Z",
          values: [],
        });
      }
      a9 = 1 - a9;
    }
  }
  var ai;
  var aj;
  return af;
};
let ce = (a7) => {
  let a8;
  let a9;
  let aa;
  let ab;
  let ac;
  let ad;
  let af;
  let ag;
  let ah;
  let ai;
  let aj;
  let ak = [];
  let al = false;
  let am = (an, ao) => {
    if (a8 === 0) {
      a8 = 1;
      ad = an;
      af = ao;
    } else if (a8 === 1) {
      a8 = 2;
      ag = an;
      ah = ao;
    } else if (a8 === 2) {
      a8 = 3;
      ai = an;
      aj = ao;
      ak.push({
        type: "M",
        values: [(a9 + ab * 4 + an) / 6, (aa + ac * 4 + ao) / 6],
      });
    } else {
      ak.push({
        type: "C",
        values: [
          (a9 * 2 + ab) / 3,
          (aa * 2 + ac) / 3,
          (a9 + ab * 2) / 3,
          (aa + ac * 2) / 3,
          (a9 + ab * 4 + an) / 6,
          (aa + ac * 4 + ao) / 6,
        ],
      });
    }
    a9 = ab;
    aa = ac;
    ab = an;
    ac = ao;
  };
  for (let an = 0, ao = (a7 = x(a7, true)).length; an <= ao; an += 1) {
    if (an < ao) {
      if (al === false) {
        al = true;
        a8 = 0;
      }
      am(a7[an][0], a7[an][1]);
    } else if (al === true) {
      al = false;
      if (a8 === 1) {
        ak.push({
          type: "M",
          values: [ad, af],
        });
        ak.push({
          type: "Z",
          values: [],
        });
      } else if (a8 === 2) {
        ak.push({
          type: "M",
          values: [(ad + ag * 2) / 3, (af + ah * 2) / 3],
        });
        ak.push({
          type: "L",
          values: [(ag + ad * 2) / 3, (ah + af * 2) / 3],
        });
        ak.push({
          type: "Z",
          values: [],
        });
      } else if (a8 === 3) {
        am(ad, af);
        am(ag, ah);
        am(ai, aj);
      }
    }
  }
  return ak;
};
const fe = 1e-12;
let be = (a7, a8 = false, a9 = 0.5) => {
  let aa;
  if (a7[0] instanceof DOMPoint) {
    a7 = a7.map((ab) => [ab.x, ab.y]);
  }
  aa = a8 ? xe(a7, a9) : ge(a7, a9);
  return aa;
};
let ge = (a7, a8) => {
  let a9;
  let aa;
  let ab;
  let ac;
  let ad;
  let af;
  let ag;
  let ah;
  let ai;
  let aj;
  let ak;
  let al;
  let am;
  let an;
  let ao = [];
  let ap = false;
  let aq = false;
  let ar = (as, at) => {
    if (am) {
      let au = ad - as;
      let av = af - at;
      al = Math.pow(au * au + av * av, a8);
      ai = Math.sqrt(al);
    }
    if (am === 0) {
      am = 1;
      if (an) {
        aq = true;
        ao.push({
          type: "L",
          values: [as, at],
        });
      } else {
        aq = true;
        ao.push({
          type: "M",
          values: [as, at],
        });
      }
    } else if (am === 1) {
      am = 2;
    } else {
      if (am === 2) {
        am = 3;
      }
      let aw = ab;
      let ax = ac;
      let ay = ad;
      let az = af;
      if (ag > fe) {
        let aA = aj * 2 + ag * 3 * ah + ak;
        let aB = ag * 3 * (ag + ah);
        aw = (aw * aA - a9 * ak + ad * aj) / aB;
        ax = (ax * aA - aa * ak + af * aj) / aB;
      }
      if (ai > fe) {
        let aC = al * 2 + ai * 3 * ah + ak;
        let aD = ai * 3 * (ai + ah);
        ay = (ay * aC + ab * al - as * ak) / aD;
        az = (az * aC + ac * al - at * ak) / aD;
      }
      aq = true;
      ao.push({
        type: "C",
        values: [aw, ax, ay, az, ad, af],
      });
    }
    ag = ah;
    ah = ai;
    aj = ak;
    ak = al;
    a9 = ab;
    ab = ad;
    ad = as;
    aa = ac;
    ac = af;
    af = at;
  };
  for (let as = 0, at = a7.length; as <= at; as += 1) {
    if (as < at) {
      if (ap === false) {
        ap = true;
        ag = 0;
        ah = 0;
        ai = 0;
        aj = 0;
        ak = 0;
        al = 0;
        am = 0;
      }
      ar(a7[as][0], a7[as][1]);
    } else if (ap === true) {
      ap = false;
      if (am === 2) {
        aq = true;
        ao.push({
          type: "L",
          values: [ad, af],
        });
      } else if (am === 3) {
        ar(ad, af);
      }
      if ((an || (an !== 0 && am === 1)) && aq) {
        ao.push({
          type: "Z",
          values: [],
        });
      }
      an = 1 - an;
    }
  }
  return ao;
};
let xe = (a7, a8 = 0.5) => {
  let a9;
  let aa;
  let ab;
  let ac;
  let ad;
  let af;
  let ag;
  let ah;
  let ai;
  let aj;
  let ak;
  let al;
  let am;
  let an;
  let ao;
  let ap;
  let aq;
  let ar;
  let as;
  let at = [];
  let au = false;
  let av = (aw, ax) => {
    if (as) {
      let ay = ad - aw;
      let az = af - ax;
      ar = Math.pow(ay * ay + az * az, a8);
      ao = Math.sqrt(ar);
    }
    if (as === 0) {
      as = 1;
      ag = aw;
      ah = ax;
    } else if (as === 1) {
      as = 2;
      ai = aw;
      aj = ax;
      at.push({
        type: "M",
        values: [ai, aj],
      });
    } else if (as === 2) {
      as = 3;
      ak = aw;
      al = ax;
    } else {
      let aA = ab;
      let aB = ac;
      let aC = ad;
      let aD = af;
      if (am > fe) {
        let aE = ap * 2 + am * 3 * an + aq;
        let aF = am * 3 * (am + an);
        aA = (aA * aE - a9 * aq + ad * ap) / aF;
        aB = (aB * aE - aa * aq + af * ap) / aF;
      }
      if (ao > fe) {
        let aG = ar * 2 + ao * 3 * an + aq;
        let aH = ao * 3 * (ao + an);
        aC = (aC * aG + ab * ar - aw * aq) / aH;
        aD = (aD * aG + ac * ar - ax * aq) / aH;
      }
      at.push({
        type: "C",
        values: [aA, aB, aC, aD, ad, af],
      });
    }
    am = an;
    an = ao;
    ap = aq;
    aq = ar;
    a9 = ab;
    ab = ad;
    ad = aw;
    aa = ac;
    ac = af;
    af = ax;
  };
  for (let aw = 0, ax = (a7 = x(a7, true)).length; aw <= ax; aw += 1) {
    if (aw < ax) {
      if (au === false) {
        au = true;
        am = 0;
        an = 0;
        ao = 0;
        ap = 0;
        aq = 0;
        ar = 0;
        as = 0;
      }
      av(a7[aw][0], a7[aw][1]);
    } else if (au === true) {
      au = false;
      if (as === 1) {
        at.push(
          {
            type: "M",
            values: [ag, ah],
          },
          {
            type: "Z",
            values: [],
          }
        );
      } else if (as === 2) {
        at.push(
          {
            type: "L",
            values: [ag, ah],
          },
          {
            type: "Z",
            values: [],
          }
        );
      } else if (as === 3) {
        av(ag, ah);
        av(ai, aj);
        av(ak, al);
      }
    }
  }
  return at;
};
let ye = new Set(["M", "Z", "L", "C", "R", "U", "N"]);
let ve = new Set(["R", "U", "N"]);
let we = (a7, a8 = true) => {
  let a9 = [];
  if (a7.localName === "path") {
    if (a8 === false) {
      a9 = Ae(
        a7.getPathData({
          normalize: true,
        })
      );
    } else {
      let aa = null;
      if (a7.hasAttribute("data-bx-d")) {
        let ab = a7
          .getAttribute("data-bx-d")
          .trim()
          .split(/[\s+,]+/);
        if (ab.length >= 3) {
          if (ab[ab.length - 1].includes("@") ? ab[ab.length - 1] : null) {
            let ac = null;
            aa = [];
            for (let ad = 0; ad < ab.length - 1; ad += 1) {
              let af = ab[ad];
              if (ye.has(af)) {
                ac = {
                  type: af,
                  values: [],
                };
                aa.push(ac);
              } else {
                ac.values.push(parseFloat(af));
              }
            }
          }
        }
      }
      a9 =
        aa ||
        Ae(
          a7.getPathData({
            normalize: true,
          })
        );
    }
  } else if (
    ["line", "polyline", "polygon", "rect", "circle", "ellipse"].includes(
      a7.localName
    )
  ) {
    a9 = a7.getPathData({
      normalize: true,
    });
  }
  return a9;
};
let ke = (a7, a8, a9 = null) => {
  if ((a8.find((aa) => ve.has(aa.type)) !== undefined) === false) {
    if (a9 !== null) {
      for (let aa of a8) {
        aa.values = aa.values.map((ab) => b(ab, a9));
      }
    }
    a7.setPathData(a8);
    a7.removeAttribute("data-bx-d");
  } else {
    let ab = Ne(a8, false);
    let ac = a8;
    if (a9 !== null) {
      ab.forEach((ai) => (ai.values = ai.values.map((aj) => b(aj, a9))));
      ac.forEach((ai) => (ai.values = ai.values.map((aj) => b(aj, a9))));
    }
    let ad = Ue(ab);
    let af = Ue(ac);
    let ag = 1;
    let ah = ((ai, aj = "hex") => {
      let ak = 2166136261;
      for (let al = 0, am = ai.length; al < am; al += 1) {
        ak ^= ai.charCodeAt(al);
        ak += (ak << 1) + (ak << 4) + (ak << 7) + (ak << 8) + (ak << 24);
      }
      ak >>>= 0;
      if (aj === "hex") {
        ak = ("0000000" + ak.toString(16)).substr(-8);
      }
      return ak;
    })(ad + " / " + af + " " + ag).toString(32);
    a7.setAttribute("d", ad);
    a7.setAttribute("data-bx-d", af + " " + ag + "@" + ah);
  }
};
let Ne = (a7, a8 = false) => {
  let a9 = [];
  let aa = [];
  {
    let ab = [];
    let ac = null;
    let ad = 0;
    let af = 0;
    for (let ag of a7) {
      if (ag.type === "M" || ag.type === "m") {
        if (ab[0]) {
          aa.push(ab);
          ab = [];
        }
        ab.push(ag);
        ad = ag.values[0];
        af = ag.values[1];
      } else if (ag.type === "Z" || ag.type === "z") {
        ab.push(ag);
        aa.push(ab);
        ab = [];
      } else {
        if (ac === "Z" || ac === "z") {
          ab.push({
            type: "M",
            values: [ad, af],
          });
        }
        ab.push(ag);
      }
      ac = ag.type;
    }
    if (ab[0]) {
      aa.push(ab);
    }
  }
  for (let ah of aa) {
    if (ah[1]?.type === "R") {
      if (a8) {
        a9.push(...ah);
      } else {
        let ai = [];
        let aj = false;
        for (let ak of ah) {
          if (ak.type === "M" || ak.type === "R") {
            ai.push([ak.values[0], ak.values[1]]);
          } else if (ak.type === "Z") {
            aj = true;
          }
        }
        a9.push(...be(ai, aj));
      }
    } else if (ah[1]?.type === "U") {
      if (a8) {
        a9.push(...ah);
      } else {
        let al = [];
        let am = false;
        for (let an of ah) {
          if (an.type === "M" || an.type === "U") {
            al.push([an.values[0], an.values[1]]);
          } else if (an.type === "Z") {
            am = true;
          }
        }
        a9.push(...me(al, am));
      }
    } else if (ah[1]?.type === "N");
    else {
      let ao = [];
      let ap = [];
      {
        let aq = null;
        let ar = null;
        let as = null;
        let at = null;
        for (let au of ah) {
          let av = au.type;
          if (av === "M") {
            let aw = au.values[0];
            let ax = au.values[1];
            ao.push({
              type: "M",
              values: [aw, ax],
            });
            as = aw;
            at = ax;
            aq = aw;
            ar = ax;
          } else if (av === "m") {
            let ay = aq + au.values[0];
            let az = ar + au.values[1];
            ao.push({
              type: "M",
              values: [ay, az],
            });
            as = ay;
            at = az;
            aq = ay;
            ar = az;
          } else if (av === "L") {
            let aA = au.values[0];
            let aB = au.values[1];
            ao.push({
              type: "L",
              values: [aA, aB],
            });
            aq = aA;
            ar = aB;
          } else if (av === "l") {
            let aC = aq + au.values[0];
            let aD = ar + au.values[1];
            ao.push({
              type: "L",
              values: [aC, aD],
            });
            aq = aC;
            ar = aD;
          } else if (av === "C") {
            let aE = au.values[0];
            let aF = au.values[1];
            let aG = au.values[2];
            let aH = au.values[3];
            let aI = au.values[4];
            let aJ = au.values[5];
            ao.push({
              type: "C",
              values: [aE, aF, aG, aH, aI, aJ],
            });
            aq = aI;
            ar = aJ;
          } else if (av === "c") {
            let aK = aq + au.values[0];
            let aL = ar + au.values[1];
            let aM = aq + au.values[2];
            let aN = ar + au.values[3];
            let aO = aq + au.values[4];
            let aP = ar + au.values[5];
            ao.push({
              type: "C",
              values: [aK, aL, aM, aN, aO, aP],
            });
            aq = aO;
            ar = aP;
          } else if (av === "Q") {
            let aQ = au.values[0];
            let aR = au.values[1];
            let aS = au.values[2];
            let aT = au.values[3];
            ao.push({
              type: "Q",
              values: [aQ, aR, aS, aT],
            });
            aq = aS;
            ar = aT;
          } else if (av === "q") {
            let aU = aq + au.values[0];
            let aV = ar + au.values[1];
            let aW = aq + au.values[2];
            let aX = ar + au.values[3];
            ao.push({
              type: "Q",
              values: [aU, aV, aW, aX],
            });
            aq = aW;
            ar = aX;
          } else if (av === "A") {
            let aY = au.values[5];
            let aZ = au.values[6];
            ao.push({
              type: "A",
              values: [
                au.values[0],
                au.values[1],
                au.values[2],
                au.values[3],
                au.values[4],
                aY,
                aZ,
              ],
            });
            aq = aY;
            ar = aZ;
          } else if (av === "a") {
            let b0 = aq + au.values[5];
            let b1 = ar + au.values[6];
            ao.push({
              type: "A",
              values: [
                au.values[0],
                au.values[1],
                au.values[2],
                au.values[3],
                au.values[4],
                b0,
                b1,
              ],
            });
            aq = b0;
            ar = b1;
          } else if (av === "H") {
            let b2 = au.values[0];
            ao.push({
              type: "H",
              values: [b2],
            });
            aq = b2;
          } else if (av === "h") {
            let b3 = aq + au.values[0];
            ao.push({
              type: "H",
              values: [b3],
            });
            aq = b3;
          } else if (av === "V") {
            let b4 = au.values[0];
            ao.push({
              type: "V",
              values: [b4],
            });
            ar = b4;
          } else if (av === "v") {
            let b5 = ar + au.values[0];
            ao.push({
              type: "V",
              values: [b5],
            });
            ar = b5;
          } else if (av === "S") {
            let b6 = au.values[0];
            let b7 = au.values[1];
            let b8 = au.values[2];
            let b9 = au.values[3];
            ao.push({
              type: "S",
              values: [b6, b7, b8, b9],
            });
            aq = b8;
            ar = b9;
          } else if (av === "s") {
            let ba = aq + au.values[0];
            let bb = ar + au.values[1];
            let bc = aq + au.values[2];
            let bd = ar + au.values[3];
            ao.push({
              type: "S",
              values: [ba, bb, bc, bd],
            });
            aq = bc;
            ar = bd;
          } else if (av === "T") {
            let bf = au.values[0];
            let bg = au.values[1];
            ao.push({
              type: "T",
              values: [bf, bg],
            });
            aq = bf;
            ar = bg;
          } else if (av === "t") {
            let bh = aq + au.values[0];
            let bi = ar + au.values[1];
            ao.push({
              type: "T",
              values: [bh, bi],
            });
            aq = bh;
            ar = bi;
          } else if (av === "Z" || av === "z") {
            ao.push({
              type: "Z",
              values: [],
            });
            aq = as;
            ar = at;
          }
        }
      }
      {
        let bj = 0;
        let bk = 0;
        let bl = 0;
        let bm = 0;
        let bn = null;
        let bo = null;
        let bp = null;
        for (let bq = 0; bq < ao.length; bq += 1) {
          let br = ao[bq];
          if (br.type === "M") {
            let bs = br.values[0];
            let bt = br.values[1];
            ap.push({
              type: "M",
              values: [bs, bt],
            });
            bl = bs;
            bm = bt;
            bj = bs;
            bk = bt;
          } else if (br.type === "C") {
            let bu = br.values[0];
            let bv = br.values[1];
            let bw = br.values[2];
            let bx = br.values[3];
            let by = br.values[4];
            let bz = br.values[5];
            ap.push({
              type: "C",
              values: [bu, bv, bw, bx, by, bz],
            });
            bn = bw;
            bo = bx;
            bj = by;
            bk = bz;
          } else if (br.type === "L") {
            let bA = br.values[0];
            let bB = br.values[1];
            ap.push({
              type: "L",
              values: [bA, bB],
            });
            bj = bA;
            bk = bB;
          } else if (br.type === "H") {
            let bC = br.values[0];
            ap.push({
              type: "L",
              values: [bC, bk],
            });
            bj = bC;
          } else if (br.type === "V") {
            let bD = br.values[0];
            ap.push({
              type: "L",
              values: [bj, bD],
            });
            bk = bD;
          } else if (br.type === "S") {
            let bE;
            let bF;
            let bG = br.values[0];
            let bH = br.values[1];
            let bI = br.values[2];
            let bJ = br.values[3];
            if (bp === "C" || bp === "S") {
              bE = bj + (bj - bn);
              bF = bk + (bk - bo);
            } else {
              bE = bj;
              bF = bk;
            }
            ap.push({
              type: "C",
              values: [bE, bF, bG, bH, bI, bJ],
            });
            bn = bG;
            bo = bH;
            bj = bI;
            bk = bJ;
          } else if (br.type === "T") {
            let bK;
            let bL;
            let bM = br.values[0];
            let bN = br.values[1];
            if (bp === "Q" || bp === "T") {
              bK = bj + (bj - bn);
              bL = bk + (bk - bo);
            } else {
              bK = bj;
              bL = bk;
            }
            let bO = bj + ((bK - bj) * 2) / 3;
            let bP = bk + ((bL - bk) * 2) / 3;
            let bQ = bM + ((bK - bM) * 2) / 3;
            let bR = bN + ((bL - bN) * 2) / 3;
            ap.push({
              type: "C",
              values: [bO, bP, bQ, bR, bM, bN],
            });
            bn = bK;
            bo = bL;
            bj = bM;
            bk = bN;
          } else if (br.type === "Q") {
            let bS = br.values[0];
            let bT = br.values[1];
            let bU = br.values[2];
            let bV = br.values[3];
            let bW = bj + ((bS - bj) * 2) / 3;
            let bX = bk + ((bT - bk) * 2) / 3;
            let bY = bU + ((bS - bU) * 2) / 3;
            let bZ = bV + ((bT - bV) * 2) / 3;
            ap.push({
              type: "C",
              values: [bW, bX, bY, bZ, bU, bV],
            });
            bn = bS;
            bo = bT;
            bj = bU;
            bk = bV;
          } else if (br.type === "A") {
            let c0 = Math.abs(br.values[0]);
            let c1 = Math.abs(br.values[1]);
            let c2 = br.values[2];
            let c3 = br.values[3];
            let c4 = br.values[4];
            let c5 = br.values[5];
            let c6 = br.values[6];
            if (c0 === 0 || c1 === 0) {
              ap.push({
                type: "C",
                values: [bj, bk, c5, c6, c5, c6],
              });
              bj = c5;
              bk = c6;
            } else if (bj !== c5 || bk !== c6) {
              ue(bj, bk, c5, c6, c0, c1, c2, c3, c4).forEach(function (c7) {
                ap.push({
                  type: "C",
                  values: c7,
                });
              });
              bj = c5;
              bk = c6;
            }
          } else if (br.type === "Z") {
            ap.push(br);
            bj = bl;
            bk = bm;
          }
          bp = br.type;
        }
      }
      a9.push(...ap);
    }
  }
  return a9;
};
let Ue = (a7) => {
  let a8 = "";
  for (let a9 = 0, aa = a7.length; a9 < aa; a9 += 1) {
    let ab = a7[a9];
    if (a9 > 0) {
      a8 += " ";
    }
    a8 += ab.type;
    if (ab?.values?.length > 0) {
      a8 += " " + ab.values.join(" ");
    }
  }
  return a8;
};
let Ce = (a7, a8 = false) => {
  let a9;
  if ((a7.match(/M/g) || []).length > 1) {
    a9 = new a4.CompoundPath(a7);
    if (a8) {
      for (let aa of a9.children) {
        if (!aa.closed) {
          aa.closePath();
        }
      }
    }
  } else {
    a9 = new a4.Path(a7);
    if (a8) {
      if (!a9.closed) {
        a9.closePath();
      }
    }
  }
  return a9;
};
let Ae = (a7) => {
  if (!a7.find((af) => af.type === "C" || af.type === "L")) {
    return [];
  }
  let a8 = [];
  let a9 = null;
  let aa = 0;
  let ab = 0;
  let ac = 0;
  let ad = 0;
  for (let af of a7) {
    if (af.type === "M") {
      if (a9 === "M") {
        a8.pop();
      }
      a8.push(af);
      aa = af.values[0];
      ab = af.values[1];
      ac = af.values[0];
      ad = af.values[1];
    } else if (af.type === "L") {
      if (a9 === "Z") {
        a8.push({
          type: "M",
          values: [ac, ad],
        });
      } else if (af.values[0] === aa && af.values[1] === ab) {
        continue;
      }
      a8.push(af);
      aa = af.values[0];
      ab = af.values[1];
    } else if (af.type === "C") {
      if (a9 === "Z") {
        a8.push({
          type: "M",
          values: [ac, ad],
        });
      }
      a8.push(af);
      aa = af.values[4];
      ab = af.values[5];
    } else if (af.type === "Z") {
      if (aa !== ac || ab !== ad) {
        a8.push({
          type: "L",
          values: [ac, ad],
        });
      }
      a8.push(af);
      aa = ac;
      ab = ad;
    }
    a9 = af.type;
  }
  return a8;
};
let Fe = (a7, a8 = null) => {
  let a9 = a7.split(":");
  let aa = null;
  if (a9.length === 1) {
    let [ab] = a9;
    aa = document.createElement(ab, a8);
  } else if (a9.length === 2) {
    let [ac, ad] = a9;
    if (ac === "svg") {
      aa = document.createElementNS(l, ad, a8);
    }
  }
  return aa;
};
let Me = (a7) => {
  let a8 = a7.localName === "svg" ? a7 : null;
  for (let a9 = a7.ownerSVGElement; a9; a9 = a9.ownerSVGElement) {
    a8 = a9;
  }
  return a8;
};
let Te = (a7, a8, a9 = true) => {
  let aa = a7.closest(a8);
  if (a9 && !aa && a7.getRootNode().host) {
    return Te(a7.getRootNode().host, a8);
  } else {
    return aa;
  }
};
class ze extends HTMLElement {
  static #k = N` <template> <main id="main" part="main"></main> <footer id="footer" part="footer"></footer> </template>
  `;
  static #N = U`
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
  #U;
  constructor() {
    super();
    let a7 = this.constructor.t;
    let a8 = this.constructor.l;
    this.#U = this.attachShadow({
      mode: "closed",
    });
    this.#U.adoptedStyleSheets = [
      a2.themeStyleSheet,
      ze.#N,
      this.constructor._shadowStyleSheet,
    ];
    this.#U.append(document.importNode(ze.#k.content, true));
    if (a7) {
      this.#U
        .querySelector("#main")
        .append(document.importNode(a7.content, true));
    }
    if (a8) {
      this.#U
        .querySelector("#footer")
        .append(document.importNode(a8.content, true));
    }
    for (let a9 of this.#U.querySelectorAll("[id]")) {
      this["#" + a9.id] = a9;
    }
    this.setAttribute("extends", "bx-generator");
    this.setAttribute("tabindex", "0");
  }
}
let Pe = (a7, a8 = "xml", a9 = 2) => {
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
  Ve(a7, a8);
  ((ad, af = 2, ag = 1) => {
    T(ad);
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
  return Se(a7, a8);
};
let Se = (a7, a8 = "xml") => {
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
let Ve = (a7, a8) => {
  if (a8 === "xml") {
    let a9;
    let aa = document.createNodeIterator(a7, NodeFilter.SHOW_ELEMENT);
    let ab = false;
    let ac = false;
    while ((a9 = aa.nextNode())) {
      if (a9.localName !== "bx-title") {
        if (a9.localName.startsWith("bx-")) {
          let ad = document.createElementNS(
            s,
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
              a9.setAttributeNS(s, "bx:" + aj, value);
              a9.removeAttribute(name);
              ac = true;
            }
          }
        }
      } else {
        let ak = Fe("svg:title");
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
    a7.setAttributeNS(r, "xmlns", l);
    if (ab) {
      a7.setAttributeNS(r, "xmlns:xlink", o);
    }
    if (ac) {
      a7.setAttributeNS(r, "xmlns:bx", s);
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
        let ar = Fe("svg:title");
        ar.innerHTML = an.innerHTML;
        for (let { name, value } of an.attributes) {
          ar.setAttribute(name, value);
        }
        an.replaceWith(ar);
      }
    }
  }
};
let De = (a7, a8, a9 = 3) => Le(a7, a8, "intersect", a9);
let Le = (a7, a8, a9, aa) => {
  let ab = Ce(Ue(a7), true);
  let ac = Ce(Ue(a8), true);
  let ad = ab[a9](ac);
  let af = [];
  if (ad) {
    let ah = ad.exportSVG().getAttribute("d");
    ag = ah;
    af = new v().parse(ag);
    af = Ne(af);
    for (let ai of af) {
      ai.values = ai.values.map((aj) => b(aj, aa));
    }
  }
  var ag;
  return af;
};
class Be extends ze {
  static t = N` <template> <section id="options-section"> <h3 id="options-heading"><x-message href="#options"></x-message></h3> <section id="shapes-section"> <h4 id="shapes-heading"><x-message href="#shapes"></x-message></h4> <section id="shapes-type-subsection"> <h5 id="shapes-type-heading"><x-message href="#type"></x-message></h5> <x-buttons id="shapes-type-buttons" tracking="3"> <x-button value="triangles" condensed> <x-icon href="#triangle-shape"></x-icon> <x-tooltip><x-message href="#triangle"></x-message></x-tooltip> </x-button> <x-button value="rectangles" condensed> <x-icon href="#rect-shape"></x-icon> <x-tooltip><x-message href="#rectangle"></x-message></x-tooltip> </x-button> <x-button value="ellipses" condensed> <x-icon href="#circle-shape"></x-icon> <x-tooltip><x-message href="#ellipse"></x-message></x-tooltip> </x-button> </x-buttons> </section> <section id="shapes-number-subsection"> <h5 id="shapes-number-heading"><x-message href="#number"></x-message></h5> <x-box id="shapes-number-box"> <x-slider id="shapes-number-slider" min="1" max="100" step="1"></x-slider> <x-numberinput id="shapes-number-input" min="1" step="1" condensed> <x-stepper></x-stepper> </x-numberinput> </x-box> </section> <section id="shapes-alpha-subsection"> <h5 id="shapes-alpha-heading"><x-message href="#alpha"></x-message></h5> <x-box id="shapes-alpha-box"> <x-slider id="shapes-alpha-slider" min="0" max="1" step="0.01"></x-slider> <x-numberinput id="shapes-alpha-input" min="0" max="1" step="0.01" condensed> <x-stepper></x-stepper> </x-numberinput> </x-box> <x-box id="auto-adjust-shapes-alpha-box"> <x-checkbox id="auto-adjust-shapes-alpha-checkbox"> <x-label><x-message href="#auto-adjust-alpha"></x-message></x-label> </x-checkbox> </x-box> </section> </section> <hr> <section id="algorithm-subsection"> <h4 id="algorithm-heading"><x-message href="#algorithm"></x-message></h4> <section id="working-size-subsection"> <h5 id="working-size-heading"><x-message href="#working-size"></x-message></h5> <x-box id="working-size-box"> <x-slider id="working-size-slider" min="10" max="1000" step="1"></x-slider> <x-numberinput id="working-size-input" min="10" max="1000" step="1" condensed> <x-stepper></x-stepper> </x-numberinput> </x-box> </section> <section id="shapes-per-iteration-subsection"> <h5 id="shapes-per-iteration-heading"><x-message href="#shapes-per-iteration"></x-message></h5> <x-box id="shapes-per-iteration-box"> <x-slider id="shapes-per-iteration-slider" min="1" max="200" step="1"></x-slider> <x-numberinput id="shapes-per-iteration-input" min="1" step="1" condensed> <x-stepper></x-stepper> </x-numberinput> </x-box> </section> <section id="max-mutations-subsection"> <h5 id="max-mutations-heading"><x-message href="#max-mutations"></x-message></h5> <x-box id="max-mutations-box"> <x-slider id="max-mutations-slider" min="1" max="100" step="1"></x-slider> <x-numberinput id="max-mutations-input" min="1" step="1" condensed> <x-stepper></x-stepper> </x-numberinput> </x-box> </section> <section id="seed-subsection"> <h5 id="seed-heading"><x-message href="#seed"></x-message></h5> <x-box id="seed-box"> <x-slider id="seed-slider" min="0" max="200" step="1"></x-slider> <x-numberinput id="seed-input" min="0" max="200" step="1" condensed> <x-stepper></x-stepper> </x-numberinput> </x-box> </section> </section> <hr> <section id="rendering-subsection"> <h4 id="rendering-heading"><x-message href="#rendering"></x-message></h4> <section id="draw-as-subsection"> <h5 id="draw-as-heading"><x-message href="#draw-as"></x-message></h5> <x-buttons id="draw-as-buttons" tracking="1"> <x-button value="paths" condensed> <x-label><x-message href="#paths"></x-message></x-label> </x-button> <x-button value="shapes" condensed> <x-label><x-message href="#shapes"></x-message></x-label> </x-button> </x-buttons> </section> <section id="overflow-subsection"> <h5 id="overflow-heading"><x-message href="#overflow"></x-message></h5> <x-buttons id="overflow-buttons" tracking="1"> <x-button value="cut" condensed> <x-label><x-message href="#overflow.cut"></x-message></x-label> </x-button> <x-button value="visible" condensed> <x-label><x-message href="#overflow.visible"></x-message></x-label> </x-button> </x-buttons> </section> </section> </section> <hr id="preview-section-hr"> <section id="preview-section"> <h3 id="preview-heading"><x-message href="#preview"></x-message></h3> <svg id="preview" part="preview"></svg> </section> </template>
  `;
  static l = N` <template> <x-button id="generate-button" size="large"> <x-icon href="#generators-panel"></x-icon> <x-label id="generate-label"></x-label> </x-button> <x-progressbar id="progress-bar" value="-1"></x-progressbar> </template>
  `;
  static _shadowStyleSheet = U`section section{display:flex;flex-flow:column}#shapes-type-buttons{width:100%}#shapes-type-buttons x-button{flex:1}#shapes-number-subsection{margin-top:8px}#shapes-number-subsection x-box{width:100%}#shapes-number-heading{margin-bottom:0}#shapes-number-slider{flex:1}#shapes-number-input{margin-left:10px;width:60px}#shapes-alpha-subsection x-box{width:100%}#shapes-alpha-heading{margin-bottom:0}#shapes-alpha-slider{flex:1}#shapes-alpha-input{margin-left:10px;width:60px}#auto-adjust-shapes-alpha-box{margin-top:2px}#auto-adjust-shapes-alpha-box x-label{font-size:12px}#working-size-subsection h5{margin-bottom:0}#working-size-slider{flex:1}#working-size-input{margin-left:10px;width:60px}#shapes-per-iteration-subsection h5{margin-bottom:0}#shapes-per-iteration-slider{flex:1}#shapes-per-iteration-input{margin-left:10px;width:60px}#max-mutations-subsection h5{margin-bottom:0}#max-mutations-slider{flex:1}#max-mutations-input{margin-left:10px;width:60px}#seed-subsection h5{margin-bottom:0}#seed-slider{flex:1}#seed-input{margin-left:10px;width:60px}#draw-as-buttons{width:100%}#draw-as-buttons x-button{flex:1}#overflow-subsection{margin-top:8px}#overflow-buttons{width:100%}#overflow-buttons x-button{flex:1}#preview{height:160px}`;
  get options() {
    return {
      shapesType: this["#shapes-type-buttons"].value,
      shapesNumber: this["#shapes-number-input"].value,
      shapesAlpha: this["#shapes-alpha-input"].value,
      autoAdjustShapesAlpha: this["#auto-adjust-shapes-alpha-checkbox"].toggled,
      workingSize: this["#working-size-input"].value,
      shapesPerIteration: this["#shapes-per-iteration-input"].value,
      maxMutations: this["#max-mutations-input"].value,
      seed: this["#seed-input"].value,
      drawAs: this["#draw-as-buttons"].value,
      geometryPrecision: this.#C.board.geometryPrecision,
      transformPrecision: this.#C.board.transformPrecision,
    };
  }
  #A() {
    return new Promise((a7) => {
      if (this.isConnected) {
        a7();
      } else {
        this.#F.push(a7);
      }
    });
  }
  #C;
  #M;
  #T;
  #z;
  #P;
  #S = null;
  #V = null;
  #F = [];
  constructor() {
    super();
    this["#shapes-type-buttons"].addEventListener("toggle", () => this.#D());
    this["#draw-as-buttons"].addEventListener("toggle", () => this.#L());
    this["#overflow-buttons"].addEventListener("toggle", () => this.#B());
    this["#shapes-number-box"].addEventListener("changestart", () => this.#R());
    this["#shapes-alpha-box"].addEventListener("changestart", () => this.#O());
    this["#auto-adjust-shapes-alpha-checkbox"].addEventListener("toggle", () =>
      this.#j()
    );
    this["#working-size-box"].addEventListener("changestart", () => this.#E());
    this["#shapes-per-iteration-box"].addEventListener("changestart", () =>
      this.#Z()
    );
    this["#max-mutations-box"].addEventListener("changestart", () => this.#I());
    this["#seed-box"].addEventListener("changestart", () => this.#$());
    this["#generate-button"].addEventListener("click", () => this.#q());
  }
  connectedCallback() {
    this.#C = Te(this, "bx-editor");
    let a7 = a2.getConfig("bx-primitivizegenerator:shapesType", ["triangles"]);
    let a8 = a2.getConfig("bx-primitivizegenerator:drawAs", "paths");
    let a9 = a2.getConfig("bx-primitivizegenerator:overflow", "cut");
    let aa = a2.getConfig("bx-primitivizegenerator:shapesNumber", 40);
    let ab = a2.getConfig("bx-primitivizegenerator:shapesAlpha", 0.7);
    let ac = a2.getConfig(
      "bx-primitivizegenerator:autoAdjustShapesAlpha",
      true
    );
    let ad = a2.getConfig("bx-primitivizegenerator:workingSize", 128);
    let af = a2.getConfig("bx-primitivizegenerator:shapesPerIteration", 200);
    let ag = a2.getConfig("bx-primitivizegenerator:maxMutations", 16);
    let ah = a2.getConfig("bx-primitivizegenerator:seed", 100);
    this["#shapes-type-buttons"].value = a7;
    this["#draw-as-buttons"].value = a8;
    this["#overflow-buttons"].value = a9;
    this["#shapes-number-input"].value = aa;
    this["#shapes-number-slider"].value = aa;
    this["#shapes-alpha-input"].value = ab;
    this["#shapes-alpha-slider"].value = ab;
    this["#auto-adjust-shapes-alpha-checkbox"].toggled = ac;
    this["#working-size-slider"].value = ad;
    this["#working-size-input"].value = ad;
    this["#shapes-per-iteration-slider"].value = af;
    this["#shapes-per-iteration-input"].value = af;
    this["#max-mutations-slider"].value = ag;
    this["#max-mutations-input"].value = ag;
    this["#seed-slider"].value = ah;
    this["#seed-input"].value = ah;
    this.#C.board.addEventListener(
      "selectedelementschange",
      (this.#M = () => {
        this.#G();
      })
    );
    this.#C.board.addEventListener(
      "workspacemutation",
      (this.#T = () => {
        this.#G();
      })
    );
    this.#C.board.undoManager.addEventListener(
      "undo",
      (this.#z = () => {
        this.#H();
      })
    );
    this.#C.board.undoManager.addEventListener(
      "redo",
      (this.#P = () => {
        this.#H();
      })
    );
    this.#G();
    for (let ai of this.#F) {
      ai();
    }
    this.#F = [];
  }
  disconnectedCallback() {
    this.#C.board.removeEventListener("selectedelementschange", this.#M);
    this.#C.board.removeEventListener("workspacemutation", this.#T);
    this.#C.board.undoManager.removeEventListener("undo", this.#z);
    this.#C.board.undoManager.removeEventListener("redo", this.#P);
    if (Te(this, "bx-generatorspanel") === null) {
      this.#H();
    }
  }
  async #Q() {
    if (this.#S !== null) {
      this.#H();
    }
    let a7 = this.#C.board;
    let a8 = null;
    let a9 = a7.outermostSelectedObjectElements[0];
    if (a9.localName === "image") {
      a8 = await createImageBitmap(a9);
    } else {
      let aa = a7.extractArtworkWithSelectedElements();
      let ab = Pe(aa);
      let ac = await ((ad, af = "png", ag = {}) =>
        new Promise(async (ah) => {
          if (af === "png") {
            let ai = new Blob([ad], {
              type: "image/svg+xml;charset=utf-8",
            });
            let aj = URL.createObjectURL(ai);
            let ak = new Image();
            ak.src = aj;
            ak.addEventListener(
              "load",
              async () => {
                let al = ag.dpi || 96;
                let am = ag.colors || 0;
                let an = ag.background || "rgba(0, 0, 0, 0)";
                let ao = new OffscreenCanvas(ak.naturalWidth, ak.naturalHeight);
                let ap = ao.getContext("2d");
                ap.fillStyle = an;
                ap.fillRect(0, 0, ak.naturalWidth, ak.naturalHeight);
                ap.drawImage(ak, 0, 0);
                let aq = (await import("/libs/upng/upng.js")).default;
                let { changeDpiBlob } = await import(
                  "/libs/change-dpi/change-dpi.js"
                );
                let as = ap.getImageData(0, 0, ao.width, ao.height);
                let at = aq.encode([as.data.buffer], as.width, as.height, am);
                let au = new Uint8Array(at);
                let av = new Blob([au], {
                  type: "image/png",
                });
                av = changeDpiBlob(av, al);
                URL.revokeObjectURL(aj);
                ah(av);
              },
              {
                once: true,
              }
            );
          } else if (af === "jpeg" || af === "jpg") {
            let al = new Blob([ad], {
              type: "image/svg+xml;charset=utf-8",
            });
            let am = URL.createObjectURL(al);
            let an = new Image();
            an.src = am;
            an.addEventListener(
              "load",
              async () => {
                let ao = ag.dpi || 96;
                let ap = ag.background || "rgb(255, 255, 255)";
                let aq = ag.compression || 1;
                let ar = new OffscreenCanvas(an.naturalWidth, an.naturalHeight);
                let as = ar.getContext("2d");
                as.fillStyle = "white";
                as.fillRect(0, 0, an.naturalWidth, an.naturalHeight);
                as.fillStyle = ap;
                as.fillRect(0, 0, an.naturalWidth, an.naturalHeight);
                as.drawImage(an, 0, 0);
                let { changeDpiBlob } = await import(
                  "/libs/change-dpi/change-dpi.js"
                );
                let au = await ar.convertToBlob({
                  type: "image/jpeg",
                  quality: aq,
                });
                au = changeDpiBlob(au, ao);
                URL.revokeObjectURL(am);
                ah(au);
              },
              {
                once: true,
              }
            );
          } else if (af === "gif") {
            let ao = new Blob([ad], {
              type: "image/svg+xml;charset=utf-8",
            });
            let ap = URL.createObjectURL(ao);
            let aq = new Image();
            aq.src = ap;
            aq.addEventListener(
              "load",
              async () => {
                let ar = new g(ag.background || "#ffffff");
                ar = ar.to("srgb").toString({
                  format: "hex",
                });
                let as = ag.transparent || false;
                let at = false;
                if (ag.dithering === "floyd-steinberg") {
                  at = "FloydSteinberg";
                } else if (ag.dithering === "false-floyd-steinberg") {
                  at = "FalseFloydSteinberg";
                } else if (ag.dithering === "stucki") {
                  at = "Stucki";
                } else if (ag.dithering === "atkinson") {
                  at = "Atkinson";
                }
                let au = new OffscreenCanvas(
                  aq.naturalWidth,
                  aq.naturalHeight
                ).getContext("2d");
                au.fillStyle = ar;
                au.fillRect(0, 0, aq.naturalWidth, aq.naturalHeight);
                au.drawImage(aq, 0, 0);
                let av = au.getImageData(
                  0,
                  0,
                  aq.naturalWidth,
                  aq.naturalHeight
                );
                let aw = new (0, (await import("/libs/gif/gif.js")).default)({
                  workers: 2,
                  quality: 1,
                  dither: at,
                  transparent: as ? parseInt("0x" + ar.substring(1)) : null,
                  workerScript: "libs/gif/gif.worker.js",
                });
                aw.addFrame(av);
                aw.render();
                aw.on("finished", (ax) => {
                  ah(ax);
                });
              },
              {
                once: true,
              }
            );
          } else if (af === "webp") {
            let ar = new Blob([ad], {
              type: "image/svg+xml;charset=utf-8",
            });
            let as = URL.createObjectURL(ar);
            let at = new Image();
            at.src = as;
            at.addEventListener(
              "load",
              async () => {
                let au = ag.background || "rgba(255, 255, 255, 0)";
                let av = ag.compression || 1;
                let aw = new OffscreenCanvas(at.naturalWidth, at.naturalHeight);
                let ax = aw.getContext("2d");
                ax.fillStyle = au;
                ax.fillRect(0, 0, at.naturalWidth, at.naturalHeight);
                ax.drawImage(at, 0, 0);
                let ay = await aw.convertToBlob({
                  type: "image/webp",
                  quality: av,
                });
                URL.revokeObjectURL(as);
                ah(ay);
              },
              {
                once: true,
              }
            );
          }
        }))(ab, "png", {
        colors: 0,
      });
      a8 = await createImageBitmap(ac);
    }
    this.#S = new Worker("/workers/primitivize.js");
    this.#S.postMessage([a8, this.options]);
    this.#V = a9;
    this["#progress-bar"].value = 0;
    this.#G();
    this["#preview"].innerHTML = "";
    this["#preview"].setAttribute(
      "viewBox",
      "0 0 " + a8.width + " " + a8.height
    );
    this["#preview-section"].scrollIntoViewIfNeeded();
    this.#S.addEventListener("message", async (ad) => {
      let [af, ag] = ad.data;
      if (ag.startsWith("<svg")) {
        this["#progress-bar"].value = af;
      } else if (ag === "</svg>") {
        await this.#A();
        if (a9.isConnected) {
          this.#_();
        }
        this["#preview"].innerHTML = "";
        this["#progress-bar"].value = -1;
        this.#S.terminate();
        this.#S = null;
        this.#G();
      } else {
        this["#progress-bar"].value = af;
        this["#preview"].insertAdjacentHTML("beforeend", ag);
      }
    });
  }
  #W() {
    if (this.#S === null) {
      return;
    }
    this.#C.board;
    if (this.#V.isConnected) {
      this.#_();
    }
    this["#preview"].innerHTML = "";
    this["#progress-bar"].value = -1;
    this.#S.terminate();
    this.#S = null;
    this.#V = null;
    this.#G();
  }
  #H() {
    if (this.#S !== null) {
      this["#preview"].innerHTML = "";
      this["#progress-bar"].value = -1;
      this.#S.terminate();
      this.#S = null;
      this.#V = null;
      this.#G();
    }
  }
  #_() {
    let a7 = this.#C.board;
    let a8 = this.#V;
    let a9 = this["#preview"].cloneNode(true);
    a9.removeAttribute("id");
    let { width, height } = a9.viewBox.baseVal;
    a7.undoManager.checkpoint(["#generators.primitivize"], "#generators-panel");
    let ac = a7.insertArtworkIntoBBox(a9, a8.getBoundingClientRect());
    for (let ag of a8.style) {
      let ah = a8.style.getPropertyValue(ag);
      let ai = f.find((aj) => aj.name === ag);
      if (ai && ai.appliesTo.includes("g")) {
        ac.style.setProperty(ag, ah);
      }
    }
    if (this["#overflow-buttons"].value === "cut") {
      let aj = [
        {
          type: "M",
          values: [0, 0],
        },
        {
          type: "L",
          values: [width, 0],
        },
        {
          type: "L",
          values: [width, height],
        },
        {
          type: "L",
          values: [0, height],
        },
        {
          type: "L",
          values: [0, 0],
        },
        {
          type: "Z",
          values: [],
        },
      ];
      for (let ak of ac.children) {
        let al = q(ak);
        let am = E(ak);
        al = te(al, am);
        if (
          ((ad = new DOMRect(0, 0, width, height)),
          (af = al).x >= ad.x &&
            af.y >= ad.y &&
            af.x + af.width <= ad.x + ad.width &&
            af.y + af.height <= ad.y + ad.height) == false
        ) {
          if (ak.localName !== "path") {
            let ap = P(ak);
            ak.replaceWith(ap);
            ak = ap;
          }
          let an = Z(we(ak), am);
          let ao = De(an, aj, a7.geometryPrecision);
          ke(ak, ao);
          ak.removeAttribute("transform");
        }
      }
    }
    var ad;
    var af;
    a7.selectedElements = [ac];
    a7.selectedTextRange = null;
    a8.remove();
  }
  #D(a7) {
    a2.setConfig(
      "bx-primitivizegenerator:shapesType",
      this["#shapes-type-buttons"].value
    );
  }
  #L() {
    a2.setConfig(
      "bx-primitivizegenerator:drawAs",
      this["#draw-as-buttons"].value
    );
  }
  #B() {
    a2.setConfig(
      "bx-primitivizegenerator:overflow",
      this["#overflow-buttons"].value
    );
  }
  #R() {
    let a7;
    let a8;
    this["#shapes-number-box"].addEventListener(
      "change",
      (a7 = (a9) => {
        if (a9.target === this["#shapes-number-slider"]) {
          this["#shapes-number-input"].value =
            this["#shapes-number-slider"].value;
        } else if (a9.target === this["#shapes-number-input"]) {
          this["#shapes-number-slider"].value =
            this["#shapes-number-input"].value;
        }
      })
    );
    this["#shapes-number-box"].addEventListener(
      "changeend",
      (a8 = () => {
        this["#shapes-number-box"].removeEventListener("change", a7);
        this["#shapes-number-box"].removeEventListener("changeend", a8);
        a2.setConfig(
          "bx-primitivizegenerator:shapesNumber",
          this["#shapes-number-input"].value
        );
      })
    );
  }
  #O() {
    let a7;
    let a8;
    this["#shapes-alpha-box"].addEventListener(
      "change",
      (a7 = (a9) => {
        if (a9.target === this["#shapes-alpha-slider"]) {
          this["#shapes-alpha-input"].value =
            this["#shapes-alpha-slider"].value;
        } else if (a9.target === this["#shapes-alpha-input"]) {
          this["#shapes-alpha-slider"].value =
            this["#shapes-alpha-input"].value;
        }
      })
    );
    this["#shapes-alpha-box"].addEventListener(
      "changeend",
      (a8 = () => {
        this["#shapes-alpha-box"].removeEventListener("change", a7);
        this["#shapes-alpha-box"].removeEventListener("changeend", a8);
        a2.setConfig(
          "bx-primitivizegenerator:shapesAlpha",
          this["#shapes-alpha-input"].value
        );
      })
    );
  }
  #j() {
    a2.setConfig(
      "bx-primitivizegenerator:autoAdjustShapesAlpha",
      this["#auto-adjust-shapes-alpha-checkbox"].toggled
    );
  }
  #E() {
    let a7;
    let a8;
    this["#working-size-box"].addEventListener(
      "change",
      (a7 = (a9) => {
        if (a9.target === this["#working-size-slider"]) {
          this["#working-size-input"].value =
            this["#working-size-slider"].value;
        } else if (a9.target === this["#working-size-input"]) {
          this["#working-size-slider"].value =
            this["#working-size-input"].value;
        }
        this.#G();
      })
    );
    this["#working-size-box"].addEventListener(
      "changeend",
      (a8 = () => {
        this["#working-size-box"].removeEventListener("change", a7);
        this["#working-size-box"].removeEventListener("changeend", a8);
        a2.setConfig(
          "bx-primitivizegenerator:workingSize",
          this["#working-size-slider"].value
        );
      })
    );
  }
  #Z() {
    let a7;
    let a8;
    this["#shapes-per-iteration-box"].addEventListener(
      "change",
      (a7 = (a9) => {
        if (a9.target === this["#shapes-per-iteration-slider"]) {
          this["#shapes-per-iteration-input"].value =
            this["#shapes-per-iteration-slider"].value;
        } else if (a9.target === this["#shapes-per-iteration-input"]) {
          this["#shapes-per-iteration-slider"].value =
            this["#shapes-per-iteration-input"].value;
        }
        this.#G();
      })
    );
    this["#shapes-per-iteration-box"].addEventListener(
      "changeend",
      (a8 = () => {
        this["#shapes-per-iteration-box"].removeEventListener("change", a7);
        this["#shapes-per-iteration-box"].removeEventListener("changeend", a8);
        a2.setConfig(
          "bx-primitivizegenerator:shapesPerIteration",
          this["#shapes-per-iteration-slider"].value
        );
      })
    );
  }
  #I() {
    let a7;
    let a8;
    this["#max-mutations-box"].addEventListener(
      "change",
      (a7 = (a9) => {
        if (a9.target === this["#max-mutations-slider"]) {
          this["#max-mutations-input"].value =
            this["#max-mutations-slider"].value;
        } else if (a9.target === this["#max-mutations-input"]) {
          this["#max-mutations-slider"].value =
            this["#max-mutations-input"].value;
        }
        this.#G();
      })
    );
    this["#max-mutations-box"].addEventListener(
      "changeend",
      (a8 = () => {
        this["#max-mutations-box"].removeEventListener("change", a7);
        this["#max-mutations-box"].removeEventListener("changeend", a8);
        a2.setConfig(
          "bx-primitivizegenerator:maxMutations",
          this["#max-mutations-slider"].value
        );
      })
    );
  }
  #$() {
    let a7;
    let a8;
    this["#seed-box"].addEventListener(
      "change",
      (a7 = (a9) => {
        if (a9.target === this["#seed-slider"]) {
          this["#seed-input"].value = this["#seed-slider"].value;
        } else if (a9.target === this["#seed-input"]) {
          this["#seed-slider"].value = this["#seed-input"].value;
        }
        this.#G();
      })
    );
    this["#seed-box"].addEventListener(
      "changeend",
      (a8 = () => {
        this["#seed-box"].removeEventListener("change", a7);
        this["#seed-box"].removeEventListener("changeend", a8);
        a2.setConfig(
          "bx-primitivizegenerator:seed",
          this["#seed-slider"].value
        );
      })
    );
  }
  async #q() {
    if (this.#S) {
      this.#W();
    } else {
      this.#Q();
    }
  }
  async #G() {
    let a7 = null;
    if (this.#C.board.outermostSelectedObjectElements.length === 1) {
      a7 = this.#C.board.outermostSelectedObjectElements[0];
    }
    let a8 = a7 === null || this.#S !== null;
    this["#options-heading"].disabled = a8;
    this["#shapes-heading"].disabled = a8;
    this["#algorithm-heading"].disabled = a8;
    this["#rendering-heading"].disabled = a8;
    this["#shapes-type-heading"].disabled = a8;
    for (let a9 of this["#shapes-type-buttons"].children) {
      a9.disabled = a8;
    }
    this["#shapes-number-heading"].disabled = a8;
    this["#shapes-number-slider"].disabled = a8;
    this["#shapes-number-input"].disabled = a8;
    this["#shapes-alpha-heading"].disabled = a8;
    this["#shapes-alpha-slider"].disabled = a8;
    this["#shapes-alpha-input"].disabled = a8;
    this["#auto-adjust-shapes-alpha-checkbox"].disabled = a8;
    this["#working-size-heading"].disabled = a8;
    this["#working-size-slider"].disabled = a8;
    this["#working-size-input"].disabled = a8;
    this["#shapes-per-iteration-heading"].disabled = a8;
    this["#shapes-per-iteration-slider"].disabled = a8;
    this["#shapes-per-iteration-input"].disabled = a8;
    this["#max-mutations-heading"].disabled = a8;
    this["#max-mutations-slider"].disabled = a8;
    this["#max-mutations-input"].disabled = a8;
    this["#seed-heading"].disabled = a8;
    this["#seed-slider"].disabled = a8;
    this["#seed-input"].disabled = a8;
    this["#overflow-heading"].disabled = a8;
    for (let aa of this["#overflow-buttons"].children) {
      aa.disabled = a8;
    }
    this["#draw-as-heading"].disabled = a8;
    for (let ab of this["#draw-as-buttons"].children) {
      ab.disabled = a8;
    }
    this["#preview-section"].hidden = this.#S === null;
    this["#preview-section-hr"].hidden = this.#S === null;
    if (this.#S === null) {
      this["#generate-label"].innerHTML =
        '<x-message href="#generators.primitivize"></x-message>';
      this["#generate-button"].disabled = a8;
    } else {
      this["#generate-label"].innerHTML =
        '<x-message href="#stop"></x-message>';
      this["#generate-button"].disabled = false;
    }
  }
}
customElements.define("bx-primitivizegenerator", Be);
