import z from "/libs/xel/xel.js";
import "/libs/color/color.js";
import "/libs/css-parser/css-parser.js";
import "/libs/paper/paper.js";
import "/libs/seed-random/seed-random.js";
import "/libs/dom-purify/dom-purify.js";
import A from "/libs/dexie/dexie.js";
import B from "/libs/typesense/typesense.js";
import "/libs/pako/pako.js";
const a = "http://www.w3.org/2000/svg";
const n = ["circle", "ellipse", "line", "path", "polygon", "polyline", "rect"];
const o = ["text", "textPath", "tspan"];
const l = [...n, ...o, "foreignObject", "image"];
const s = [...n, ...o];
const r = [
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
    appliesTo: [...l, "svg", "g", "a", "use"],
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
    appliesTo: [...l, "use"],
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
    appliesTo: [...l, "svg", "g", "a", "use"],
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
      ...l,
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
    appliesTo: [...l, "svg", "g", "a", "use"],
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
    appliesTo: [...l, "textPath", "tspan", "svg", "g", "a", "use"],
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
    appliesTo: [...s],
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
    appliesTo: [...s],
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
    appliesTo: [...s],
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
    appliesTo: [...l, "textPath", "tspan", "g", "a", "svg", "use"],
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
      ...l,
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
    appliesTo: [...n],
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
    appliesTo: [...n],
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
    appliesTo: [...n],
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
    appliesTo: [...n],
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
    appliesTo: [...l, "g", "a", "svg", "use"],
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
      ...l,
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
      ...l,
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
    appliesTo: [...s],
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
    appliesTo: [...l, "svg", "g", "a", "use"],
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
    appliesTo: [...n],
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
    appliesTo: [...s],
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
    appliesTo: [...s],
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
    appliesTo: [...s],
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
    appliesTo: [...s],
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
    appliesTo: [...s],
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
    appliesTo: [...s],
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
    appliesTo: [...s],
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
    appliesTo: [...s],
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
    appliesTo: [...l, "use"],
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
    appliesTo: [...l, "text", "textPath", "tspan"],
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
r.map((D) => D.presentationAttributeName).filter((D) => D);
let p = (D, E = 0) => {
  let F = Math.pow(10, E);
  return Math.round((D + Number.EPSILON) * F) / F;
};
const h = {
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
let m = document.createElement("template");
let u = (D, ...E) => {
  let F = [];
  for (let I = 0; I < D.length; I += 1) {
    F.push(D[I]);
    if (E[I] !== undefined) {
      F.push(E[I]);
    }
  }
  let G = F.join("");
  m.innerHTML = G;
  let H = document.importNode(m.content, true);
  if (H.children.length === 1) {
    return H.firstElementChild;
  } else {
    return H;
  }
};
let c = (D, ...E) => {
  let F = [];
  for (let I = 0; I < D.length; I += 1) {
    F.push(D[I]);
    if (E[I] !== undefined) {
      F.push(E[I]);
    }
  }
  let G = F.join("");
  let H = new CSSStyleSheet();
  H.replaceSync(G);
  return H;
};
new (class {
  #e;
  #t = null;
  #i = {};
  constructor() {
    this.#e = new A("GoogleFontsManager");
    this.#e.version(1).stores({
      cache: "family",
    });
  }
  search(D = "", E = "alphabetical", F = "all", G = "all", H = "all") {
    return new Promise(async (I) => {
      await this.#a();
      let J = [];
      let K = this.#e.cache;
      if (D.trim() !== "") {
        K = K.filter((L) =>
          L.family.toLowerCase().includes(D.trim().toLowerCase())
        );
      }
      if (F !== "all") {
        K = K.filter((L) => L.category === F);
      }
      if (G !== "all") {
        K = K.filter((L) => L.subsets.includes(G));
      }
      J = await K.toArray();
      if (E === "date") {
        J = J.sort((L, M) => (L.dateRank > M.dateRank ? -1 : 1));
      } else if (E === "popularity") {
        J = J.sort((L, M) => (L.popularityRank > M.popularityRank ? -1 : 1));
      } else if (E === "trending") {
        J = J.sort((L, M) => (L.trendingRank > M.trendingRank ? -1 : 1));
      }
      if (H !== "all") {
        J = J.slice(H * 40, (H + 1) * 40);
      }
      I(J);
    });
  }
  refresh() {
    return new Promise(async (D, E) => {
      let F;
      if (this.#t === null) {
        this.#t = new B.Client({
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
        F = await this.#t.collections("googleFonts").documents().export();
      } catch (H) {
        return E(H);
      }
      let G = F.split("\n")
        .map((I) => JSON.parse(I))
        .map((I) => ({
          family: I.family,
          faces: I.faces,
          category: I.category,
          subsets: I.subsets,
          license: I.license,
          thumbnail: I.thumbnail,
          urls: I.urls,
          dateRank: I.dateRank,
          popularityRank: I.popularityRank,
          trendingRank: I.trendingRank,
          pageURL: "https://fonts.google.com/specimen/" + I.id,
          cachedTime: Date.now(),
        }));
      await this.#e.cache.clear();
      await this.#e.cache.bulkPut(G);
      D();
    });
  }
  getFontFaceRulesFromUrl(D, E = false) {
    return new Promise(async (F) => {
      let G = [];
      await this.#a();
      if (E) {
        let H = await this.#n(D);
        for (let I of H.cssRules) {
          if (I.type === CSSRule.FONT_FACE_RULE) {
            G.push(I);
          }
        }
      } else {
        let J = [];
        let K = new URL(D);
        let L = K.searchParams.get("display") || "auto";
        if (D.startsWith("https://fonts.googleapis.com/css?")) {
          let M = K.searchParams.get("family");
          M.split("|");
          K.searchParams.get("subset");
          let O = {
            regular: "400",
            bold: "700",
            italic: "400italic",
            bolditalic: "700italic",
            r: "400",
            b: "700",
            i: "400italic",
          };
          for (let P of M.split("|")) {
            let Q = [];
            let [R, S] = P.split(":");
            for (let T of S.split(",")) {
              T = O[T] || T;
              Q.push(T);
            }
            J.push({
              family: R,
              faceNames: Q,
            });
          }
        } else if (D.startsWith("https://fonts.googleapis.com/css2?")) {
          let V = K.searchParams.getAll("family");
          for (let W of V) {
            let [X, Y] = W.split(":");
            if (Y === undefined) {
              J.push({
                family: X,
                faceNames: ["400"],
              });
            } else {
              let Z = [];
              let [a0, a1] = Y.split("@");
              let a2 = a0.split(",");
              let a3 = a1.split(";");
              for (let a4 of a3) {
                let a5 = {
                  wght: "400",
                  ital: "0",
                };
                for (let a6 = 0; a6 < a2.length; a6 += 1) {
                  a5[a2[a6]] = a4.split(",")[a6];
                }
                Z.push(a5.wght + (a5.ital === "1" ? "italic" : ""));
              }
              J.push({
                family: X,
                faceNames: Z,
              });
            }
          }
        }
        {
          let a7 = this.#e.cache;
          for (let { family, faceNames } of J) {
            let aa = await a7.get({
              family: family,
            });
            if (aa) {
              for (let ab of faceNames) {
                let ac = aa.urls[ab];
                if (ac) {
                  let ad = ab.substring(0, 3);
                  let ae = ab.includes("italic") ? "italic" : "normal";
                  let af = [];
                  for (let ai of aa.subsets) {
                    if (h[ai]) {
                      af.push(h[ai]);
                    }
                  }
                  if (af.length === 0) {
                    af = "U+0-10FFFF";
                  }
                  let ag = af.join(",");
                  let ah = c`
                    @font-face {
                      font-family: "${family}";
                      font-style: ${ae};
                      font-weight: ${ad};
                      font-display: ${L};
                      font-unicode-range: ${ag};
                      src: url(${ac});
                    }
                  `;
                  G.push(ah.cssRules[0]);
                }
              }
            }
          }
        }
      }
      F(G);
    });
  }
  getFamilyDescriptor(D) {
    return new Promise(async (E) => {
      await this.#a();
      E((await this.#e.cache.where("family").equals(D).toArray())[0] || null);
    });
  }
  #n(D) {
    return new Promise(async (E) => {
      let F = null;
      if (this.#i[D]) {
        F = this.#i[D];
      } else {
        let G = await fetch(D);
        let H = await G.text();
        F = new CSSStyleSheet();
        F.replaceSync(H);
        this.#i[D] = F;
      }
      E(F);
    });
  }
  #a() {
    return new Promise(async (D) => {
      let E = await this.#e.cache.count();
      let F = true;
      if (E > 0) {
        let G = await this.#e.cache.get("Roboto");
        if (G) {
          let H = 1296000000;
          F = Date.now() - G.cachedTime > H;
        }
      }
      if (E === 0 || F === true) {
        await this.refresh();
      }
      D();
    });
  }
})();
if (!["iPhone", "iPad"].includes(navigator.platform)) {
  navigator.platform.startsWith("Mac");
}
const d =
  navigator.userAgent.indexOf("Safari/") > -1 &&
  navigator.userAgent.indexOf("Chrome") === -1;
if (window.frameElement === null) {
  document.body.dataset.app;
}
let b = (D, E, F) => D.split(E).join(F);
let g = (D) => {
  D = D.toLowerCase();
  D = b(D, " ", "");
  D = b(D, "-", "");
  let E = "400";
  if ((D = b(D, "_", "")).includes("thin") || D.includes("hairline")) {
    E = "100";
  } else if (D.includes("extralight") || D.includes("ultralight")) {
    E = "200";
  } else if (D.includes("light")) {
    E = "300";
  } else if (D.includes("medium")) {
    E = "500";
  } else if (D.includes("semibold") || D.includes("demibold")) {
    E = "600";
  } else if (D.includes("extrabold") || D.includes("ultrabold")) {
    E = "800";
  } else if (D.includes("bold")) {
    E = "700";
  } else if (D.includes("black") || D.includes("heavy")) {
    E = "900";
  }
  return E;
};
let x = (D) => {
  D = D.toLowerCase();
  D = b(D, " ", "");
  D = b(D, "-", "");
  let E = "normal";
  if ((D = b(D, "_", "")).includes("italic")) {
    E = "italic";
  } else if (D.includes("oblique")) {
    E = "oblique";
  }
  return E;
};
new (class extends EventTarget {
  #o = "init";
  #l = [];
  #e;
  get status() {
    return this.#o;
  }
  constructor() {
    super();
    this.#e = new A("LocalFontsManager");
    this.#e.version(1).stores({
      cache: "family",
    });
    this.#e
      .version(2)
      .stores({
        cache: "family",
      })
      .upgrade((D) => D.cache.clear());
    if (window.queryLocalFonts === undefined) {
      this.#o = "no-api";
    } else {
      navigator.permissions
        .query({
          name: "local-fonts",
        })
        .then((D) => {
          if (D.state === "granted") {
            this.refresh();
          } else if (D.state !== "prompt") {
            this.#o = "no-permission";
          }
        });
    }
  }
  search(D = "", E = "all") {
    return new Promise(async (F) => {
      let G = [];
      let H = this.#e.cache;
      if (D.trim() !== "") {
        H = H.filter((I) =>
          I.family.toLowerCase().includes(D.trim().toLowerCase())
        );
      }
      G = await H.toArray();
      if (E !== "all") {
        G = G.slice(E * 40, (E + 1) * 40);
      }
      F(G);
    });
  }
  refresh() {
    return new Promise(async (D, E) => {
      let F;
      try {
        F = await this.getLocalFontsMetadata(true);
      } catch (H) {
        return E(H);
      }
      let G = [];
      for (let I of F) {
        let J = g(I.style) + (x(I.style) === "italic" ? "i" : "");
        let K = G.find((L) => L.family === I.family);
        if (K) {
          if (K.faces.includes(J) === false) {
            K.faces.push(J);
          }
        } else {
          let L = {
            family: I.family,
            faces: [J],
          };
          G.push(L);
        }
      }
      for (let M of G) {
        M.faces.sort();
      }
      await this.#e.cache.clear();
      await this.#e.cache.bulkPut(G);
      this.#o = "ready";
      D();
    });
  }
  getLocalFontsMetadata(D = false) {
    return new Promise(async (E, F) => {
      if (this.status === "no-api") {
        E([]);
      } else {
        if (this.#l.length < 10 || D) {
          try {
            this.#l = await window.queryLocalFonts();
          } catch (G) {
            return F({
              message: G.message,
              name: G.name,
            });
          }
        }
        E(this.#l);
      }
    });
  }
  getCacheSize() {
    return new Promise(async (D) => {
      D(await this.#e.cache.count());
    });
  }
  getFamilyDescriptor(D) {
    return new Promise(async (E) => {
      E((await this.#e.cache.where("family").equals(D).toArray())[0] || null);
    });
  }
  getFamilyWeights(D) {
    return new Promise(async (E) => {
      let F = await this.getFamilyDescriptor(D);
      if (F) {
        let G = new Set();
        for (let H of F.faces) {
          let I = H.substring(0, 3);
          G.add(I);
        }
        E([...G]);
      } else {
        E(["400"]);
      }
    });
  }
})();
let f = (D, E) =>
  D.is2D
    ? new DOMMatrix([
        p(D.a, E),
        p(D.b, E),
        p(D.c, E),
        p(D.d, E),
        p(D.e, E),
        p(D.f, E),
      ])
    : new DOMMatrix([
        p(D.m11, E),
        p(D.m12, E),
        p(D.m13, E),
        p(D.m14, E),
        p(D.m21, E),
        p(D.m22, E),
        p(D.m23, E),
        p(D.m24, E),
        p(D.m31, E),
        p(D.m32, E),
        p(D.m33, E),
        p(D.m34, E),
        p(D.m41, E),
        p(D.m42, E),
        p(D.m43, E),
        p(D.m44, E),
      ]);
const y =
  "\n  position: fixed;\n  top: -1px;\n  left: -1px;\n  width: 1px;\n  height: 1px;\n  contain: strict;\n  overflow: hidden;\n".replaceAll(
    "\n  ",
    ""
  );
class k {
  #s;
  #r;
  get shadowRoot() {
    return this.#s.shadowRoot;
  }
  constructor(D) {
    this.#r = D;
    this.#s = document.createElement("div");
    this.#s.setAttribute("style", y);
    this.#s.setAttribute("class", "offscreen-container");
    this.#s.attachShadow({
      mode: "open",
    });
    this.#s.shadowRoot.append(D);
    document.body.append(this.#s);
  }
  destroy() {
    if (this.#r.parentNode === this.#s.shadowRoot) {
      this.#r.remove();
    }
    this.#s.remove();
    this.#s = null;
  }
}
document.createElementNS("http://www.w3.org/2000/svg", "svg");
let v = (D) => {
  let E = document.createDocumentFragment();
  let F = document.createElementNS(a, "svg");
  for (F.innerHTML = D; F.firstChild; ) {
    E.append(F.firstChild);
  }
  if (E.childElementCount > 1) {
    return E;
  } else if (E.childElementCount === 1) {
    return E.children[0];
  } else {
    return null;
  }
};
let w = (D, E, F = true) => {
  let G = D.closest(E);
  if (F && !G && D.getRootNode().host) {
    return w(D.getRootNode().host, E);
  } else {
    return G;
  }
};
class C extends HTMLElement {
  static #p = u` <template> <main id="main" part="main"></main> <footer id="footer" part="footer"></footer> </template>
  `;
  static #h = c`
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
  #m;
  constructor() {
    super();
    let D = this.constructor.t;
    let E = this.constructor.o;
    this.#m = this.attachShadow({
      mode: "closed",
    });
    this.#m.adoptedStyleSheets = [
      z.themeStyleSheet,
      C.#h,
      this.constructor._shadowStyleSheet,
    ];
    this.#m.append(document.importNode(C.#p.content, true));
    if (D) {
      this.#m
        .querySelector("#main")
        .append(document.importNode(D.content, true));
    }
    if (E) {
      this.#m
        .querySelector("#footer")
        .append(document.importNode(E.content, true));
    }
    for (let F of this.#m.querySelectorAll("[id]")) {
      this["#" + F.id] = F;
    }
    this.setAttribute("extends", "bx-generator");
    this.setAttribute("tabindex", "0");
  }
}
let N = {
  default: {
    workingSize: 512,
    blurRadius: 0,
    blurDelta: 20,
    numberOfColors: 16,
    minColorRatio: 0,
    colorQuantCycles: 3,
    colorSampling: 2,
    ltres: 1,
    qtres: 1,
    pathOmit: 8,
    rightAngleEnhance: true,
    strokeWidth: 1,
    lineFilter: false,
    ignoreWhite: false,
  },
  blackAndWhite: {
    workingSize: 512,
    blurRadius: 0,
    blurDelta: 20,
    numberOfColors: 2,
    minColorRatio: 0,
    colorQuantCycles: 1,
    colorSampling: 0,
    ltres: 1,
    qtres: 1,
    pathOmit: 8,
    rightAngleEnhance: true,
    strokeWidth: 0,
    lineFilter: false,
    ignoreWhite: true,
  },
  grayscale: {
    workingSize: 512,
    blurRadius: 0,
    blurDelta: 20,
    numberOfColors: 7,
    minColorRatio: 0,
    colorQuantCycles: 1,
    colorSampling: 0,
    ltres: 1,
    qtres: 1,
    pathOmit: 8,
    rightAngleEnhance: true,
    strokeWidth: 1,
    lineFilter: false,
    ignoreWhite: false,
  },
  posterized: {
    workingSize: 512,
    blurRadius: 5,
    blurDelta: 20,
    numberOfColors: 5,
    minColorRatio: 0,
    colorQuantCycles: 3,
    colorSampling: 2,
    ltres: 1,
    qtres: 1,
    pathOmit: 8,
    rightAngleEnhance: true,
    strokeWidth: 1,
    lineFilter: false,
    ignoreWhite: false,
  },
  curvy: {
    workingSize: 512,
    blurRadius: 0,
    blurDelta: 20,
    numberOfColors: 16,
    minColorRatio: 0,
    colorQuantCycles: 3,
    colorSampling: 2,
    ltres: 0.01,
    qtres: 1,
    pathOmit: 8,
    rightAngleEnhance: false,
    strokeWidth: 1,
    lineFilter: true,
    ignoreWhite: false,
  },
  sharp: {
    workingSize: 512,
    blurRadius: 0,
    blurDelta: 20,
    numberOfColors: 16,
    minColorRatio: 0,
    colorQuantCycles: 3,
    colorSampling: 2,
    ltres: 1,
    qtres: 0.01,
    pathOmit: 8,
    rightAngleEnhance: true,
    strokeWidth: 1,
    lineFilter: false,
    ignoreWhite: false,
  },
  detailed: {
    workingSize: 512,
    blurRadius: 0,
    blurDelta: 20,
    numberOfColors: 64,
    minColorRatio: 0,
    colorQuantCycles: 3,
    colorSampling: 2,
    ltres: 0.5,
    qtres: 0.5,
    pathOmit: 0,
    rightAngleEnhance: true,
    strokeWidth: 1,
    lineFilter: false,
    ignoreWhite: false,
  },
  smoothed: {
    workingSize: 512,
    blurRadius: 5,
    blurDelta: 64,
    numberOfColors: 16,
    minColorRatio: 0,
    colorQuantCycles: 3,
    colorSampling: 2,
    ltres: 1,
    qtres: 1,
    pathOmit: 8,
    rightAngleEnhance: true,
    strokeWidth: 1,
    lineFilter: false,
    ignoreWhite: false,
  },
};
class U extends C {
  static t = u` <template> <section id="options-section"> <h3 id="options-heading"><x-message href="#options"></x-message></h3> <section id="preset-subsection"> <h4 id="preset-heading"><x-message href="#vectorize-preset"></x-message></h4> <x-select id="preset-select"> <x-menu> <x-menuitem value="default" toggled> <x-label><x-message href="#vectorize-preset.default"></x-message></x-label> </x-menuitem> <hr> <x-menuitem value="blackAndWhite"> <x-label><x-message href="#vectorize-preset.black-and-white"></x-message></x-label> </x-menuitem> <x-menuitem value="grayscale"> <x-label><x-message href="#vectorize-preset.grayscale"></x-message></x-label> </x-menuitem> <x-menuitem value="posterized"> <x-label><x-message href="#vectorize-preset.posterized"></x-message></x-label> </x-menuitem> <x-menuitem value="curvy"> <x-label><x-message href="#vectorize-preset.curvy"></x-message></x-label> </x-menuitem> <x-menuitem value="sharp"> <x-label><x-message href="#vectorize-preset.sharp"></x-message></x-label> </x-menuitem> <x-menuitem value="detailed"> <x-label><x-message href="#vectorize-preset.detailed"></x-message></x-label> </x-menuitem> <x-menuitem value="smoothed"> <x-label><x-message href="#vectorize-preset.smoothed"></x-message></x-label> </x-menuitem> </x-menu> </x-select> </section> <hr> <section id="preprocessing-subsection"> <h4 id="preprocessing-heading"><x-message href="#preprocessing"></x-message></h4> <section id="working-size-subsection"> <h5 id="working-size-heading"><x-message href="#working-size"></x-message></h5> <x-box id="working-size-box"> <x-slider id="working-size-slider" min="10" max="1000" step="1"></x-slider> <x-numberinput id="working-size-input" min="10" max="2000" step="1" condensed> <x-stepper></x-stepper> </x-numberinput> </x-box> </section> <section id="blur-subsection"> <x-box id="blur-radius-box" vertical> <h5 id="blur-radius-heading"><x-message href="#blur-radius"></x-message></h5> <x-numberinput id="blur-radius-input" min="0" step="1" condensed> <x-stepper></x-stepper> </x-numberinput> </x-box> <x-box id="blur-delta-box" vertical> <h5 id="blur-delta-heading"><x-message href="#blur-delta"></x-message></h5> <x-numberinput id="blur-delta-input" min="0" step="1" condensed> <x-stepper></x-stepper> </x-numberinput> </x-box> </section> </section> <hr> <section id="color-subsection"> <h4 id="color-heading"><x-message href="#color-quantization" autocapitalize></x-message></h4> <x-box id="color-inputs-box"> <x-box id="number-of-colors-box" vertical> <h5 id="number-of-colors-heading"><x-message href="#colors"></x-message></h5> <x-numberinput id="number-of-colors-input" min="1" step="1" condensed> <x-stepper></x-stepper> <x-tooltip>Number of colors to use</x-tooltip> </x-numberinput> </x-box> <x-box id="min-color-ratio-box" vertical> <h5 id="min-color-ratio-heading"><x-message href="#min-ratio"></x-message></h5> <x-numberinput id="min-color-ratio-input" min="0" step="1" condensed> <x-stepper></x-stepper> <x-tooltip>Color quantization will randomize a color if fewer pixels than TOTAL PIXELS * MIN RATIO has it</x-tooltip> </x-numberinput> </x-box> <x-box id="color-quant-cycles-box" vertical> <h5 id="color-quant-cycles-heading"><x-message href="#cycles"></x-message></h5> <x-numberinput id="color-quant-cycles-input" min="0" step="1" condensed> <x-stepper></x-stepper> <x-tooltip>Color quantization will be repeated this many times</x-tooltip> </x-numberinput> </x-box> </x-box> <x-box id="color-sampling-box" vertical> <h5 id="color-sampling-heading"><x-message href="#sampling"></x-message></h5> <x-buttons id="color-sampling-buttons" tracking="1"> <x-button value="2" condensed> <x-label><x-message href="#sampling.deterministic"></x-message></x-label> </x-button> <x-button value="1" condensed> <x-label><x-message href="#sampling.random"></x-message></x-label> </x-button> <x-button value="0" condensed> <x-label><x-message href="#sampling.none"></x-message></x-label> </x-button> </x-buttons> </x-box> </section> <hr> <section id="tracing-subsection"> <h4 id="tracing-heading"><x-message href="#vectorize-tracing"></x-message></h4> <x-box id="tracing-box"> <x-box id="ltres-box" vertical> <h5 id="ltres-heading"><x-message href="#vectorize-tracing.l-treshold"></x-message></h5> <x-numberinput id="ltres-input" min="0" max="10" step="1" condensed> <x-stepper></x-stepper> <x-tooltip>Error treshold for straight lines</x-tooltip> </x-numberinput> </x-box> <x-box id="qtres-box" vertical> <h5 id="qtres-heading"><x-message href="#vectorize-tracing.q-treshold"></x-message></h5> <x-numberinput id="qtres-input" min="0" max="10" step="1" condensed> <x-stepper></x-stepper> <x-tooltip>Error treshold for quadratic splines</x-tooltip> </x-numberinput> </x-box> <x-box id="path-omit-box" vertical> <h5 id="path-omit-heading"><x-message href="#vectorize-tracing.path-omit"></x-message></h5> <x-numberinput id="path-omit-input" min="0" step="1" condensed> <x-stepper></x-stepper> <x-tooltip>Edge node paths shorter than this will be discarded for noise reduction</x-tooltip> </x-numberinput> </x-box> </x-box> <x-checkbox id="right-angle-enhance-checkbox"> <x-label id="right-angle-enhance-label"><x-message href="#vectorize-tracing.enhance"></x-message></x-label> </x-checkbox> </section> <hr> <section id="rendering-subsection"> <h4 id="rendering-heading"><x-message href="#rendering"></x-message></h4> <x-box id="stroke-width-box" vertical> <h5 id="stroke-width-heading"><x-message href="#stroke-width"></x-message></h5> <x-box> <x-slider id="stroke-width-slider" min="0" max="20" step="1"></x-slider> <x-numberinput id="stroke-width-input" min="0" step="1" condensed> <x-stepper></x-stepper> </x-numberinput> </x-box> </x-box> <x-checkbox id="line-filter-checkbox"> <x-label><x-message href="#vectorize-rendering.line-filter"></x-message></x-label> </x-checkbox> <x-checkbox id="ignore-white-checkbox"> <x-label><x-message href="#vectorize-rendering.ignore-white"></x-message></x-label> </x-checkbox> </section> </section> <hr> <section id="preview-section"> <h3 id="preview-heading"><x-message href="#preview"></x-message></h3> <x-button id="preview-button"> <x-label><x-message href="#generate"></x-message></x-label> </x-button> <svg id="preview" part="preview" preserveAspectRatio="xMidYMid" hidden></svg> <x-label id="preview-label" hidden></x-label> </section> </template>
  `;
  static o = u` <template> <x-button id="generate-button" size="large"> <x-icon href="#generators-panel"></x-icon> <x-label><x-message href="#generators.vectorize"></x-message></x-label> </x-button> </template>
  `;
  static _shadowStyleSheet = c`#preset-select{width:100%}#working-size-subsection{display:flex;flex-flow:column}#working-size-subsection h5{margin-bottom:0}#working-size-box{width:100%}#working-size-slider{flex:1}#working-size-input{margin-left:10px;width:60px}#blur-subsection{display:flex;margin-top:4px}#blur-radius-box{flex:1;margin-right:4px}#blur-radius-input{width:100%}#blur-delta-box{flex:1;margin-left:4px}#blur-delta-input{width:100%}#color-inputs-box{align-items:flex-end}#number-of-colors-box{flex:1}#number-of-colors-input{width:100%}#min-color-ratio-box{flex:1;margin:0 8px}#min-color-ratio-input{width:100%}#color-quant-cycles-box{flex:1}#color-quant-cycles-input{width:100%}#color-sampling-box{margin-top:8px}#color-sampling-buttons{width:100%}#color-sampling-buttons x-button{flex:1}#tracing-box{align-items:flex-end}#ltres-box{flex:1}#ltres-input{width:100%}#qtres-box{flex:1;margin:0 8px}#qtres-input{width:100%}#path-omit-box{flex:1}#path-omit-input{width:100%}#right-angle-enhance-checkbox{margin-top:6px}#right-angle-enhance-checkbox x-label{font-size:12px}#stroke-width-box x-box{width:100%}#stroke-width-heading{margin-bottom:0}#stroke-width-slider{flex:1}#stroke-width-input{margin-left:10px;width:60px}#line-filter-checkbox{margin-top:6px}#line-filter-checkbox x-label{font-size:12px}#ignore-white-checkbox{margin-top:6px}#ignore-white-checkbox x-label{font-size:12px}#preview{height:160px}#preview-label{text-align:center;font-weight:600;font-size:12px;opacity:.7}`;
  get options() {
    return {
      workingSize: this["#working-size-input"].value,
      blurRadius: this["#blur-radius-input"].value,
      blurDelta: this["#blur-delta-input"].value,
      numberOfColors: this["#number-of-colors-input"].value,
      minColorRatio: this["#min-color-ratio-input"].value,
      colorQuantCycles: this["#color-quant-cycles-input"].value,
      colorSampling: parseInt(this["#color-sampling-buttons"].value),
      ltres: this["#ltres-input"].value,
      qtres: this["#qtres-input"].value,
      pathOmit: this["#path-omit-input"].value,
      rightAngleEnhance: this["#right-angle-enhance-checkbox"].toggled,
      strokeWidth: this["#stroke-width-input"].value,
      lineFilter: this["#line-filter-checkbox"].toggled,
      ignoreWhite: this["#ignore-white-checkbox"].toggled,
      geometryPrecision: this.#u.board.geometryPrecision,
    };
  }
  #u;
  #c;
  #d;
  constructor() {
    super();
    this["#preset-select"].addEventListener("change", () => this.#b());
    this["#working-size-box"].addEventListener("changestart", () => this.#g());
    this["#blur-radius-input"].addEventListener("changestart", () => this.#x());
    this["#blur-delta-input"].addEventListener("changestart", () => this.#f());
    this["#number-of-colors-input"].addEventListener("changestart", () =>
      this.#y()
    );
    this["#min-color-ratio-input"].addEventListener("changestart", () =>
      this.#k()
    );
    this["#color-quant-cycles-input"].addEventListener("changestart", () =>
      this.#v()
    );
    this["#color-sampling-buttons"].addEventListener("toggle", () => this.#w());
    this["#ltres-input"].addEventListener("changestart", () => this.#C());
    this["#qtres-input"].addEventListener("changestart", () => this.#N());
    this["#path-omit-input"].addEventListener("changestart", () => this.#U());
    this["#right-angle-enhance-checkbox"].addEventListener("toggle", () =>
      this.#z()
    );
    this["#stroke-width-box"].addEventListener("changestart", () => this.#A());
    this["#line-filter-checkbox"].addEventListener("toggle", () => this.#F());
    this["#ignore-white-checkbox"].addEventListener("toggle", () => this.#T());
    this["#preview-button"].addEventListener("click", () => this.#S());
    this["#generate-button"].addEventListener("click", () => this.#V());
  }
  connectedCallback() {
    this.#u = w(this, "bx-editor");
    let D = this.#u.board;
    let E = z.getConfig("bx-vectorizegenerator:workingSize", 512);
    let F = z.getConfig("bx-vectorizegenerator:blurRadius", 0);
    let G = z.getConfig("bx-vectorizegenerator:blurDelta", 20);
    let H = z.getConfig("bx-vectorizegenerator:numberOfColors", 16);
    let I = z.getConfig("bx-vectorizegenerator:minColorRatio", 0);
    let J = z.getConfig("bx-vectorizegenerator:colorQuantCycles", 3);
    let K = z.getConfig("bx-vectorizegenerator:colorSampling", 2);
    let L = z.getConfig("bx-vectorizegenerator:ltres", 1);
    let M = z.getConfig("bx-vectorizegenerator:qtres", 1);
    let O = z.getConfig("bx-vectorizegenerator:pathOmit", 8);
    let P = z.getConfig("bx-vectorizegenerator:rightAngleEnhance", true);
    let Q = z.getConfig("bx-vectorizegenerator:strokeWidth", 1);
    let R = z.getConfig("bx-vectorizegenerator:lineFilter", false);
    let S = z.getConfig("bx-vectorizegenerator:ignoreWhite", false);
    this["#working-size-slider"].value = E;
    this["#working-size-input"].value = E;
    this["#blur-radius-input"].value = F;
    this["#blur-delta-input"].value = G;
    this["#number-of-colors-input"].value = H;
    this["#min-color-ratio-input"].value = I;
    this["#color-quant-cycles-input"].value = J;
    this["#color-sampling-buttons"].value = K + "";
    this["#ltres-input"].value = L;
    this["#qtres-input"].value = M;
    this["#path-omit-input"].value = O;
    this["#right-angle-enhance-checkbox"].toggled = P;
    this["#stroke-width-input"].value = Q;
    this["#stroke-width-slider"].value = Q;
    this["#line-filter-checkbox"].toggled = R;
    this["#ignore-white-checkbox"].toggled = S;
    D.addEventListener(
      "selectedelementschange",
      (this.#c = () => {
        this.#D();
        this.#P();
      })
    );
    D.addEventListener(
      "workspacemutation",
      (this.#d = () => {
        this.#D();
        this.#P();
      })
    );
    this.#P();
    this.#R();
  }
  disconnectedCallback() {
    let D = this.#u.board;
    D.removeEventListener("selectedelementschange", this.#c);
    D.removeEventListener("workspacemutation", this.#d);
  }
  #b() {
    let D = this["#preset-select"].value;
    let E = N[D];
    this.#D();
    if (E) {
      for (let [F, G] of Object.entries(E)) {
        z.setConfig("bx-vectorizegenerator:" + F, G);
      }
      this["#working-size-slider"].value = E.workingSize;
      this["#working-size-input"].value = E.workingSize;
      this["#blur-radius-input"].value = E.blurRadius;
      this["#blur-delta-input"].value = E.blurDelta;
      this["#number-of-colors-input"].value = E.numberOfColors;
      this["#min-color-ratio-input"].value = E.minColorRatio;
      this["#color-quant-cycles-input"].value = E.colorQuantCycles;
      this["#color-sampling-buttons"].value = E.colorSampling + "";
      this["#ltres-input"].value = E.ltres;
      this["#qtres-input"].value = E.qtres;
      this["#path-omit-input"].value = E.pathOmit;
      this["#right-angle-enhance-checkbox"].toggled = E.rightAngleEnhance;
      this["#stroke-width-input"].value = E.strokeWidth;
      this["#stroke-width-slider"].value = E.strokeWidth;
      this["#line-filter-checkbox"].toggled = E.lineFilter;
      this["#ignore-white-checkbox"].toggled = E.ignoreWhite;
    }
  }
  #g() {
    let D;
    let E;
    this.#D();
    this["#working-size-box"].addEventListener(
      "change",
      (D = (F) => {
        if (F.target === this["#working-size-slider"]) {
          this["#working-size-input"].value =
            this["#working-size-slider"].value;
        } else if (F.target === this["#working-size-input"]) {
          this["#working-size-slider"].value =
            this["#working-size-input"].value;
        }
      })
    );
    this["#working-size-box"].addEventListener(
      "changeend",
      (E = () => {
        this["#working-size-box"].removeEventListener("change", D);
        this["#working-size-box"].removeEventListener("changeend", E);
        z.setConfig(
          "bx-vectorizegenerator:workingSize",
          this["#working-size-slider"].value
        );
        this.#R();
      })
    );
  }
  #x() {
    this.#D();
    this["#blur-radius-input"].addEventListener(
      "changeend",
      () => {
        z.setConfig(
          "bx-vectorizegenerator:blurRadius",
          this["#blur-radius-input"].value
        );
        this.#R();
      },
      {
        once: true,
      }
    );
  }
  #f() {
    this.#D();
    this["#blur-delta-input"].addEventListener(
      "changeend",
      () => {
        z.setConfig(
          "bx-vectorizegenerator:blurDelta",
          this["#blur-delta-input"].value
        );
        this.#R();
      },
      {
        once: true,
      }
    );
  }
  #y() {
    this.#D();
    this["#number-of-colors-input"].addEventListener(
      "changeend",
      () => {
        z.setConfig(
          "bx-vectorizegenerator:numberOfColors",
          this["#number-of-colors-input"].value
        );
        this.#R();
      },
      {
        once: true,
      }
    );
  }
  #k() {
    this.#D();
    this["#min-color-ratio-input"].addEventListener(
      "changeend",
      () => {
        z.setConfig(
          "bx-vectorizegenerator:minColorRatio",
          this["#min-color-ratio-input"].value
        );
        this.#R();
      },
      {
        once: true,
      }
    );
  }
  #v() {
    this.#D();
    this["#color-quant-cycles-input"].addEventListener("changeend", () => {
      z.setConfig(
        "bx-vectorizegenerator:colorQuantCycles",
        this["#color-quant-cycles-input"].value
      );
      this.#R();
    });
  }
  #w() {
    this.#D();
    z.setConfig(
      "bx-vectorizegenerator:colorSampling",
      this["#color-sampling-buttons"].value
    );
    this.#R();
  }
  #C() {
    this.#D();
    this["#ltres-input"].addEventListener(
      "changeend",
      () => {
        z.setConfig("bx-vectorizegenerator:ltres", this["#ltres-input"].value);
        this.#R();
      },
      {
        once: true,
      }
    );
  }
  #N() {
    this.#D();
    this["#qtres-input"].addEventListener(
      "changeend",
      () => {
        z.setConfig("bx-vectorizegenerator:qtres", this["#qtres-input"].value);
        this.#R();
      },
      {
        once: true,
      }
    );
  }
  #U() {
    this.#D();
    this["#path-omit-input"].addEventListener(
      "changeend",
      () => {
        z.setConfig(
          "bx-vectorizegenerator:pathOmit",
          this["#path-omit-input"].value
        );
        this.#R();
      },
      {
        once: true,
      }
    );
  }
  #z() {
    this.#D();
    z.setConfig(
      "bx-vectorizegenerator:rightAngleEnhance",
      this["#right-angle-enhance-checkbox"].toggled
    );
    this.#R();
  }
  #A() {
    let D;
    let E;
    this.#D();
    this["#stroke-width-box"].addEventListener(
      "change",
      (D = (F) => {
        if (F.target === this["#stroke-width-slider"]) {
          this["#stroke-width-input"].value =
            this["#stroke-width-slider"].value;
        } else if (F.target === this["#stroke-width-input"]) {
          this["#stroke-width-slider"].value =
            this["#stroke-width-input"].value;
        }
      })
    );
    this["#stroke-width-box"].addEventListener(
      "changeend",
      (E = () => {
        this["#stroke-width-box"].removeEventListener("change", D);
        this["#stroke-width-box"].removeEventListener("changeend", E);
        z.setConfig(
          "bx-vectorizegenerator:strokeWidth",
          this["#stroke-width-input"].value
        );
        this.#R();
      })
    );
  }
  #F() {
    this.#D();
    z.setConfig(
      "bx-vectorizegenerator:lineFilter",
      this["#line-filter-checkbox"].toggled
    );
    this.#R();
  }
  #T() {
    this.#D();
    z.setConfig(
      "bx-vectorizegenerator:ignoreWhite",
      this["#ignore-white-checkbox"].toggled
    );
    this.#R();
  }
  #S() {
    this.#B();
  }
  async #V() {
    let D;
    let E = this.#u.board;
    let F = E.selectedElements[0];
    let G = await window.createImageBitmap(F);
    let H = ((R) => {
      if (R.isConnected === false) {
        new k(R);
      }
      if (d) {
        let S = null;
        if (R.style.transform === "") {
          S =
            R.localName === "linearGradient" || R.localName === "radialGradient"
              ? R.gradientTransform.baseVal.consolidate()
              : R.localName === "pattern"
              ? R.patternTransform.baseVal.consolidate()
              : R.transform.baseVal.consolidate();
          if (S) {
            return DOMMatrix.fromMatrix(S.matrix);
          } else {
            return new DOMMatrix();
          }
        }
        {
          let T = R.computedStyleMap().get("transform");
          if (T.value === "none") {
            return new DOMMatrix();
          } else {
            return T.toMatrix();
          }
        }
      }
      {
        let V = R.computedStyleMap().get("transform");
        if (V.value === "none") {
          return new DOMMatrix();
        } else {
          return V.toMatrix();
        }
      }
    })(F);
    let I = F.getBBox();
    let J = await this.#O(G, this.options);
    let K = v(J);
    let L = I.width / K.viewBox.baseVal.width;
    let M = I.height / K.viewBox.baseVal.height;
    let O = I.x - K.viewBox.baseVal.x * L;
    let P = I.y - K.viewBox.baseVal.y * M;
    let Q = new DOMMatrix();
    Q.multiplySelf(H);
    Q.translateSelf(O, P);
    Q.scaleSelf(L, M);
    Q = f(Q, E.transformPrecision);
    E.undoManager.checkpoint(["#generators.vectorize"], "#generators-panel");
    if (K.children.length === 1) {
      D = K.children[0];
    } else {
      D = ((R, S = null) => {
        let T = R.split(":");
        let V = null;
        if (T.length === 1) {
          let [W] = T;
          V = document.createElement(W, S);
        } else if (T.length === 2) {
          let [X, Y] = T;
          if (X === "svg") {
            V = document.createElementNS(a, Y, S);
          }
        }
        return V;
      })("svg:g");
      for (let R of [...K.children]) {
        D.append(R);
      }
    }
    ((S, T, V = null) => {
      S.style.removeProperty("transform");
      if (T === null) {
        if (
          S.localName === "linearGradient" ||
          S.localName === "radialGradient"
        ) {
          S.removeAttribute("gradientTransform");
        } else if (S.localName === "pattern") {
          S.removeAttribute("patternTransform");
        } else {
          S.removeAttribute("transform");
        }
      } else {
        if (V !== null) {
          T = f(T, V);
        }
        if (T.isIdentity) {
          if (
            S.localName === "linearGradient" ||
            S.localName === "radialGradient"
          ) {
            S.removeAttribute("gradientTransform");
          } else if (S.localName === "pattern") {
            S.removeAttribute("patternTransform");
          } else {
            S.removeAttribute("transform");
          }
        } else if (
          S.localName === "linearGradient" ||
          S.localName === "radialGradient"
        ) {
          S.setAttribute("gradientTransform", T.toString());
        } else if (S.localName === "pattern") {
          S.setAttribute("patternTransform", T.toString());
        } else {
          S.setAttribute("transform", T.toString());
        }
      }
    })(D, Q);
    for (let S of F.style) {
      let T = F.style.getPropertyValue(S);
      let V = r.find((W) => W.name === S);
      if (V && V.appliesTo.includes(D.localName)) {
        D.style.setProperty(S, T);
      }
    }
    F.replaceWith(D);
    E.selectedElements = [D];
    E.selectedTextRange = null;
  }
  #O(D, E) {
    return new Promise((F) => {
      let G = new Worker("/workers/vectorize.js");
      G.addEventListener("message", (H) => F(H.data), false);
      G.postMessage([D, E]);
    });
  }
  async #B() {
    this["#preview-button"].hidden = true;
    this["#preview-label"].hidden = false;
    this["#preview-label"].innerHTML =
      '<x-message href="#generating-preview" ellipsis></x-message>';
    let D = this.#u.board.selectedElements[0];
    let E = await window.createImageBitmap(D);
    D.getBoundingClientRect();
    let F = await this.#O(E, this.options);
    let G = v(F);
    G.setAttribute("id", "preview");
    G.setAttribute("part", "preview");
    this["#preview"].replaceWith(G);
    this["#preview"] = G;
    this["#preview-label"].textContent = "";
    this["#preview-label"].hidden = true;
    this["#preview-section"].scrollIntoViewIfNeeded();
  }
  #D() {
    this["#preview-button"].hidden = false;
    this["#preview"].setAttribute("hidden", "");
    this["#preview-label"].hidden = true;
  }
  #P() {
    let D = null;
    if (
      this.#u.board.outermostSelectedObjectElements.length === 1 &&
      this.#u.board.outermostSelectedObjectElements[0].localName === "image"
    ) {
      D = this.#u.board.outermostSelectedObjectElements[0];
    }
    let E = D === null;
    this["#options-heading"].disabled = E;
    this["#preset-heading"].disabled = E;
    this["#preset-select"].disabled = E;
    this["#preprocessing-heading"].disabled = E;
    this["#working-size-heading"].disabled = E;
    this["#working-size-slider"].disabled = E;
    this["#working-size-input"].disabled = E;
    this["#blur-radius-heading"].disabled = E;
    this["#blur-radius-input"].disabled = E;
    this["#blur-delta-heading"].disabled = E;
    this["#blur-delta-input"].disabled = E;
    this["#color-heading"].disabled = E;
    this["#number-of-colors-heading"].disabled = E;
    this["#number-of-colors-input"].disabled = E;
    this["#min-color-ratio-heading"].disabled = E;
    this["#min-color-ratio-input"].disabled = E;
    this["#color-quant-cycles-heading"].disabled = E;
    this["#color-quant-cycles-input"].disabled = E;
    this["#color-sampling-heading"].disabled = E;
    for (let F of this["#color-sampling-buttons"].children) {
      F.disabled = E;
    }
    this["#tracing-heading"].disabled = E;
    this["#ltres-heading"].disabled = E;
    this["#ltres-input"].disabled = E;
    this["#qtres-heading"].disabled = E;
    this["#qtres-input"].disabled = E;
    this["#path-omit-heading"].disabled = E;
    this["#path-omit-input"].disabled = E;
    this["#right-angle-enhance-checkbox"].disabled = E;
    this["#right-angle-enhance-label"].disabled = E;
    this["#rendering-heading"].disabled = E;
    this["#stroke-width-heading"].disabled = E;
    this["#stroke-width-slider"].disabled = E;
    this["#stroke-width-input"].disabled = E;
    this["#line-filter-checkbox"].disabled = E;
    this["#ignore-white-checkbox"].disabled = E;
    this["#preview-heading"].disabled = E;
    this["#preview-button"].disabled = E;
    this["#generate-button"].disabled = D === null;
  }
  #R() {
    let D = null;
    for (let [E, F] of Object.entries(N)) {
      if (
        this["#working-size-input"].value === F.workingSize &&
        this["#working-size-slider"].value === F.workingSize &&
        this["#blur-radius-input"].value === F.blurRadius &&
        this["#blur-delta-input"].value === F.blurDelta &&
        this["#number-of-colors-input"].value === F.numberOfColors &&
        this["#min-color-ratio-input"].value === F.minColorRatio &&
        this["#color-quant-cycles-input"].value === F.colorQuantCycles &&
        this["#color-sampling-buttons"].value === F.colorSampling + "" &&
        this["#ltres-input"].value === F.ltres &&
        this["#qtres-input"].value === F.qtres &&
        this["#path-omit-input"].value === F.pathOmit &&
        this["#right-angle-enhance-checkbox"].toggled === F.rightAngleEnhance &&
        this["#stroke-width-input"].value === F.strokeWidth &&
        this["#line-filter-checkbox"].toggled === F.lineFilter &&
        this["#ignore-white-checkbox"].toggled === F.ignoreWhite
      ) {
        D = E;
        break;
      }
    }
    this["#preset-select"].value = D;
  }
}
customElements.define("bx-vectorizegenerator", U);
