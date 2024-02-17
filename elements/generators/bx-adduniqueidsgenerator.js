import k from "/libs/xel/xel.js";
import "/libs/color/color.js";
import "/libs/css-parser/css-parser.js";
import "/libs/paper/paper.js";
import "/libs/seed-random/seed-random.js";
import "/libs/dom-purify/dom-purify.js";
import q from "/libs/dexie/dexie.js";
import v from "/libs/typesense/typesense.js";
import "/libs/pako/pako.js";
const a = ["circle", "ellipse", "line", "path", "polygon", "polyline", "rect"];
const n = ["text", "textPath", "tspan"];
const l = [...a, ...n, "foreignObject", "image"];
const o = [...a, "text", "image", "g", "a", "svg", "use", "foreignObject"];
const s = [...a, ...n];
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
    appliesTo: [...a],
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
    appliesTo: [...a],
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
    appliesTo: [...a],
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
    appliesTo: [...a],
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
    appliesTo: [...a],
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
]
  .map((w) => w.presentationAttributeName)
  .filter((w) => w);
const r = {
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
let p = document.createElement("template");
let m = (w, ...x) => {
  let z = [];
  for (let C = 0; C < w.length; C += 1) {
    z.push(w[C]);
    if (x[C] !== undefined) {
      z.push(x[C]);
    }
  }
  let A = z.join("");
  p.innerHTML = A;
  let B = document.importNode(p.content, true);
  if (B.children.length === 1) {
    return B.firstElementChild;
  } else {
    return B;
  }
};
let u = (w, ...x) => {
  let z = [];
  for (let C = 0; C < w.length; C += 1) {
    z.push(w[C]);
    if (x[C] !== undefined) {
      z.push(x[C]);
    }
  }
  let A = z.join("");
  let B = new CSSStyleSheet();
  B.replaceSync(A);
  return B;
};
new (class {
  #e;
  #t = null;
  #i = {};
  constructor() {
    this.#e = new q("GoogleFontsManager");
    this.#e.version(1).stores({
      cache: "family",
    });
  }
  search(w = "", x = "alphabetical", z = "all", A = "all", B = "all") {
    return new Promise(async (C) => {
      await this.#a();
      let D = [];
      let E = this.#e.cache;
      if (w.trim() !== "") {
        E = E.filter((F) =>
          F.family.toLowerCase().includes(w.trim().toLowerCase())
        );
      }
      if (z !== "all") {
        E = E.filter((F) => F.category === z);
      }
      if (A !== "all") {
        E = E.filter((F) => F.subsets.includes(A));
      }
      D = await E.toArray();
      if (x === "date") {
        D = D.sort((F, G) => (F.dateRank > G.dateRank ? -1 : 1));
      } else if (x === "popularity") {
        D = D.sort((F, G) => (F.popularityRank > G.popularityRank ? -1 : 1));
      } else if (x === "trending") {
        D = D.sort((F, G) => (F.trendingRank > G.trendingRank ? -1 : 1));
      }
      if (B !== "all") {
        D = D.slice(B * 40, (B + 1) * 40);
      }
      C(D);
    });
  }
  refresh() {
    return new Promise(async (w, x) => {
      let z;
      if (this.#t === null) {
        this.#t = new v.Client({
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
        z = await this.#t.collections("googleFonts").documents().export();
      } catch (B) {
        return x(B);
      }
      let A = z
        .split("\n")
        .map((C) => JSON.parse(C))
        .map((C) => ({
          family: C.family,
          faces: C.faces,
          category: C.category,
          subsets: C.subsets,
          license: C.license,
          thumbnail: C.thumbnail,
          urls: C.urls,
          dateRank: C.dateRank,
          popularityRank: C.popularityRank,
          trendingRank: C.trendingRank,
          pageURL: "https://fonts.google.com/specimen/" + C.id,
          cachedTime: Date.now(),
        }));
      await this.#e.cache.clear();
      await this.#e.cache.bulkPut(A);
      w();
    });
  }
  getFontFaceRulesFromUrl(w, x = false) {
    return new Promise(async (z) => {
      let A = [];
      await this.#a();
      if (x) {
        let B = await this.#n(w);
        for (let C of B.cssRules) {
          if (C.type === CSSRule.FONT_FACE_RULE) {
            A.push(C);
          }
        }
      } else {
        let D = [];
        let E = new URL(w);
        let F = E.searchParams.get("display") || "auto";
        if (w.startsWith("https://fonts.googleapis.com/css?")) {
          let G = E.searchParams.get("family");
          G.split("|");
          E.searchParams.get("subset");
          let H = {
            regular: "400",
            bold: "700",
            italic: "400italic",
            bolditalic: "700italic",
            r: "400",
            b: "700",
            i: "400italic",
          };
          for (let I of G.split("|")) {
            let J = [];
            let [K, L] = I.split(":");
            for (let M of L.split(",")) {
              M = H[M] || M;
              J.push(M);
            }
            D.push({
              family: K,
              faceNames: J,
            });
          }
        } else if (w.startsWith("https://fonts.googleapis.com/css2?")) {
          let N = E.searchParams.getAll("family");
          for (let O of N) {
            let [P, Q] = O.split(":");
            if (Q === undefined) {
              D.push({
                family: P,
                faceNames: ["400"],
              });
            } else {
              let R = [];
              let [S, T] = Q.split("@");
              let U = S.split(",");
              let V = T.split(";");
              for (let W of V) {
                let X = {
                  wght: "400",
                  ital: "0",
                };
                for (let Y = 0; Y < U.length; Y += 1) {
                  X[U[Y]] = W.split(",")[Y];
                }
                R.push(X.wght + (X.ital === "1" ? "italic" : ""));
              }
              D.push({
                family: P,
                faceNames: R,
              });
            }
          }
        }
        {
          let Z = this.#e.cache;
          for (let { family, faceNames } of D) {
            let a2 = await Z.get({
              family: family,
            });
            if (a2) {
              for (let a3 of faceNames) {
                let a4 = a2.urls[a3];
                if (a4) {
                  let a5 = a3.substring(0, 3);
                  let a6 = a3.includes("italic") ? "italic" : "normal";
                  let a7 = [];
                  for (let aa of a2.subsets) {
                    if (r[aa]) {
                      a7.push(r[aa]);
                    }
                  }
                  if (a7.length === 0) {
                    a7 = "U+0-10FFFF";
                  }
                  let a8 = a7.join(",");
                  let a9 = u`
                    @font-face {
                      font-family: "${family}";
                      font-style: ${a6};
                      font-weight: ${a5};
                      font-display: ${F};
                      font-unicode-range: ${a8};
                      src: url(${a4});
                    }
                  `;
                  A.push(a9.cssRules[0]);
                }
              }
            }
          }
        }
      }
      z(A);
    });
  }
  getFamilyDescriptor(w) {
    return new Promise(async (x) => {
      await this.#a();
      x((await this.#e.cache.where("family").equals(w).toArray())[0] || null);
    });
  }
  #n(w) {
    return new Promise(async (x) => {
      let z = null;
      if (this.#i[w]) {
        z = this.#i[w];
      } else {
        let A = await fetch(w);
        let B = await A.text();
        z = new CSSStyleSheet();
        z.replaceSync(B);
        this.#i[w] = z;
      }
      x(z);
    });
  }
  #a() {
    return new Promise(async (w) => {
      let x = await this.#e.cache.count();
      let z = true;
      if (x > 0) {
        let A = await this.#e.cache.get("Roboto");
        if (A) {
          let B = 1296000000;
          z = Date.now() - A.cachedTime > B;
        }
      }
      if (x === 0 || z === true) {
        await this.refresh();
      }
      w();
    });
  }
})();
if (!["iPhone", "iPad"].includes(navigator.platform)) {
  navigator.platform.startsWith("Mac");
}
if (navigator.userAgent.indexOf("Safari/") > -1) {
  navigator.userAgent.indexOf("Chrome");
}
if (window.frameElement === null) {
  document.body.dataset.app;
}
let h = (w, x, z) => w.split(x).join(z);
let b = (w) => {
  w = w.toLowerCase();
  w = h(w, " ", "");
  w = h(w, "-", "");
  let x = "400";
  if ((w = h(w, "_", "")).includes("thin") || w.includes("hairline")) {
    x = "100";
  } else if (w.includes("extralight") || w.includes("ultralight")) {
    x = "200";
  } else if (w.includes("light")) {
    x = "300";
  } else if (w.includes("medium")) {
    x = "500";
  } else if (w.includes("semibold") || w.includes("demibold")) {
    x = "600";
  } else if (w.includes("extrabold") || w.includes("ultrabold")) {
    x = "800";
  } else if (w.includes("bold")) {
    x = "700";
  } else if (w.includes("black") || w.includes("heavy")) {
    x = "900";
  }
  return x;
};
let d = (w) => {
  w = w.toLowerCase();
  w = h(w, " ", "");
  w = h(w, "-", "");
  let x = "normal";
  if ((w = h(w, "_", "")).includes("italic")) {
    x = "italic";
  } else if (w.includes("oblique")) {
    x = "oblique";
  }
  return x;
};
new (class extends EventTarget {
  #l = "init";
  #o = [];
  #e;
  get status() {
    return this.#l;
  }
  constructor() {
    super();
    this.#e = new q("LocalFontsManager");
    this.#e.version(1).stores({
      cache: "family",
    });
    this.#e
      .version(2)
      .stores({
        cache: "family",
      })
      .upgrade((w) => w.cache.clear());
    if (window.queryLocalFonts === undefined) {
      this.#l = "no-api";
    } else {
      navigator.permissions
        .query({
          name: "local-fonts",
        })
        .then((w) => {
          if (w.state === "granted") {
            this.refresh();
          } else if (w.state !== "prompt") {
            this.#l = "no-permission";
          }
        });
    }
  }
  search(w = "", x = "all") {
    return new Promise(async (z) => {
      let A = [];
      let B = this.#e.cache;
      if (w.trim() !== "") {
        B = B.filter((C) =>
          C.family.toLowerCase().includes(w.trim().toLowerCase())
        );
      }
      A = await B.toArray();
      if (x !== "all") {
        A = A.slice(x * 40, (x + 1) * 40);
      }
      z(A);
    });
  }
  refresh() {
    return new Promise(async (w, x) => {
      let z;
      try {
        z = await this.getLocalFontsMetadata(true);
      } catch (B) {
        return x(B);
      }
      let A = [];
      for (let C of z) {
        let D = b(C.style) + (d(C.style) === "italic" ? "i" : "");
        let E = A.find((F) => F.family === C.family);
        if (E) {
          if (E.faces.includes(D) === false) {
            E.faces.push(D);
          }
        } else {
          let F = {
            family: C.family,
            faces: [D],
          };
          A.push(F);
        }
      }
      for (let G of A) {
        G.faces.sort();
      }
      await this.#e.cache.clear();
      await this.#e.cache.bulkPut(A);
      this.#l = "ready";
      w();
    });
  }
  getLocalFontsMetadata(w = false) {
    return new Promise(async (x, z) => {
      if (this.status === "no-api") {
        x([]);
      } else {
        if (this.#o.length < 10 || w) {
          try {
            this.#o = await window.queryLocalFonts();
          } catch (A) {
            return z({
              message: A.message,
              name: A.name,
            });
          }
        }
        x(this.#o);
      }
    });
  }
  getCacheSize() {
    return new Promise(async (w) => {
      w(await this.#e.cache.count());
    });
  }
  getFamilyDescriptor(w) {
    return new Promise(async (x) => {
      x((await this.#e.cache.where("family").equals(w).toArray())[0] || null);
    });
  }
  getFamilyWeights(w) {
    return new Promise(async (x) => {
      let z = await this.getFamilyDescriptor(w);
      if (z) {
        let A = new Set();
        for (let B of z.faces) {
          let C = B.substring(0, 3);
          A.add(C);
        }
        x([...A]);
      } else {
        x(["400"]);
      }
    });
  }
})();
document.createElementNS("http://www.w3.org/2000/svg", "svg");
let c = (w, x, z = true) => {
  let A = w.closest(x);
  if (z && !A && w.getRootNode().host) {
    return c(w.getRootNode().host, x);
  } else {
    return A;
  }
};
class y extends HTMLElement {
  static #s = m` <template> <main id="main" part="main"></main> <footer id="footer" part="footer"></footer> </template>
  `;
  static #r = u`
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
  #p;
  constructor() {
    super();
    let w = this.constructor.t;
    let x = this.constructor.l;
    this.#p = this.attachShadow({
      mode: "closed",
    });
    this.#p.adoptedStyleSheets = [
      k.themeStyleSheet,
      y.#r,
      this.constructor._shadowStyleSheet,
    ];
    this.#p.append(document.importNode(y.#s.content, true));
    if (w) {
      this.#p
        .querySelector("#main")
        .append(document.importNode(w.content, true));
    }
    if (x) {
      this.#p
        .querySelector("#footer")
        .append(document.importNode(x.content, true));
    }
    for (let z of this.#p.querySelectorAll("[id]")) {
      this["#" + z.id] = z;
    }
    this.setAttribute("extends", "bx-generator");
    this.setAttribute("tabindex", "0");
  }
}
class f extends y {
  static t = m` <template> <section id="options-section"> <h3 id="options-heading"><x-message href="#options"></x-message></h3> <section id="objects-subsection"> <h4><x-message href="#objects"></x-message></h4> <x-buttons id="objects-buttons" tracking="1"> <x-button value="all" toggled><x-label><x-message href="#objects.all"></x-message></x-label></x-button> <x-button value="selected"><x-label><x-message href="#objects.selected"></x-message></x-label></x-button> </x-buttons> </section> <section id="prefix-subsection"> <h4><x-message href="#prefix"></x-message></h4> <x-buttons id="prefix-buttons" tracking="1"> <x-button value="auto" toggled><x-label><x-message href="#prefix.auto"></x-message></x-label></x-button> <x-button value="custom"><x-label><x-message href="#prefix.custom"></x-message></x-label></x-button> </x-buttons> <x-input id="custom-prefix-input" validation="manual"> <x-label>object-</x-label> </x-input> </section> </section> </template>
  `;
  static l = m` <template> <x-button id="add-button" size="large"> <x-icon href="#generators-panel"></x-icon> <x-label><x-message href="#add"></x-message></x-label> </x-button> </template>
  `;
  static _shadowStyleSheet = u`#objects-buttons{width:100%}#objects-buttons x-button{flex:1}#prefix-subsection{margin-top:14px}#prefix-buttons{width:100%}#prefix-buttons x-button{flex:1}#custom-prefix-input{margin-top:8px;max-width:none}`;
  #m;
  #u;
  #h;
  constructor() {
    super();
    this["#objects-buttons"].addEventListener("toggle", () => this.#b());
    this["#prefix-buttons"].addEventListener("toggle", () => this.#d());
    this["#custom-prefix-input"].addEventListener("beforevalidate", (w) =>
      this.#c(w)
    );
    this["#custom-prefix-input"].addEventListener("change", () => this.#y());
    this["#add-button"].addEventListener("click", () => this.#f());
  }
  connectedCallback() {
    this.#m = c(this, "bx-editor");
    let w = k.getConfig("bx-adduniqueidsgenerator:objects", "all");
    let x = k.getConfig("bx-adduniqueidsgenerator:prefix", "auto");
    let z = k.getConfig("bx-adduniqueidsgenerator:customPrefix", null);
    this["#objects-buttons"].value = w;
    this["#prefix-buttons"].value = x;
    this["#custom-prefix-input"].value = z;
    this.#g();
    this.#m.board.addEventListener(
      "selectedelementschange",
      (this.#u = () => {
        this.#g();
      })
    );
    this.#m.board.addEventListener(
      "workspacemutation",
      (this.#h = () => {
        this.#x();
      })
    );
  }
  disconnectedCallback() {
    this.#m.board.removeEventListener("selectedelementschange", this.#u);
    this.#m.board.removeEventListener("workspacemutation", this.#h);
  }
  #b() {
    k.setConfig(
      "bx-adduniqueidsgenerator:objects",
      this["#objects-buttons"].value
    );
    this.#g();
  }
  #d() {
    k.setConfig(
      "bx-adduniqueidsgenerator:prefix",
      this["#prefix-buttons"].value
    );
    this.#g();
  }
  #c(w) {
    w.preventDefault();
    if (
      this["#custom-prefix-input"].value.length > 0 &&
      ((x) => {
        if (x.length === 0) {
          return false;
        }
        for (let z = 0; z < x.length; z += 1) {
          let A = x.charCodeAt(z);
          if (((A >= 65 && A <= 90) || (A >= 97 && A <= 122)) == false) {
            if (z === 0) {
              return false;
            }
            if (
              ((A >= 48 && A <= 57) || A === 45 || A === 46 || A === 95) ==
              false
            ) {
              return false;
            }
          }
        }
        return true;
      })(this["#custom-prefix-input"].value) === false
    ) {
      this["#custom-prefix-input"].setCustomValidity({
        href: "invalid-prefix",
      });
    } else {
      this["#custom-prefix-input"].setCustomValidity("");
    }
  }
  #y() {
    k.setConfig(
      "bx-adduniqueidsgenerator:customPrefix",
      this["#custom-prefix-input"].value
    );
  }
  #f() {
    if (this["#custom-prefix-input"].reportValidity() === false) {
      this["#custom-prefix-input"].focus();
    } else {
      this.#m.board.undoManager.checkpoint(
        ["#generators.add-unique-ids"],
        "#generators-panel"
      );
      this["#add-button"].disabled = true;
      let w = null;
      let x = [];
      if (this["#prefix-buttons"].value === "custom") {
        w =
          this["#custom-prefix-input"].value.length === 0
            ? "object-"
            : this["#custom-prefix-input"].value;
      }
      if (this["#objects-buttons"].value === "all") {
        for (let z of this.#m.board.currentWorkspace.querySelectorAll("*")) {
          if (o.includes(z.localName)) {
            x.push(z);
          }
        }
      } else if (this["#objects-buttons"].value === "selected") {
        x = [...this.#m.board.selectedObjectElements];
      }
      x = x.filter(
        (A) => A.hasAttribute("id") === false || A.getAttribute("id") === ""
      );
      for (let A of x) {
        let B;
        B =
          w === null
            ? A.localName === "g"
              ? this.#m.board.generateUniqueID("group-")
              : this.#m.board.generateUniqueID(A.localName + "-")
            : this.#m.board.generateUniqueID(w);
        A.setAttribute("id", B);
      }
    }
  }
  #g() {
    let w = [];
    if (this["#objects-buttons"].value === "all") {
      for (let x of this.#m.board.currentWorkspace.querySelectorAll("*")) {
        if (o.includes(x.localName)) {
          w.push(x);
        }
      }
    } else if (this["#objects-buttons"].value === "selected") {
      w = [...this.#m.board.selectedObjectElements];
    }
    w = w.filter(
      (z) => z.hasAttribute("id") === false || z.getAttribute("id") === ""
    );
    this["#custom-prefix-input"].hidden =
      this["#prefix-buttons"].value === "auto";
    this["#add-button"].disabled = w.length === 0;
  }
  #x = ((e, t, i, a = false) => {
    let n = null;
    let l = null;
    return (...o) => {
      let s = a && !n;
      clearTimeout(n);
      n = setTimeout(() => {
        n = null;
        if (!a) {
          l = e.apply(i, o);
        }
      }, t);
      if (s) {
        l = e.apply(i, o);
      }
      return l;
    };
  })(this.#g, 1000, this);
}
customElements.define("bx-adduniqueidsgenerator", f);
