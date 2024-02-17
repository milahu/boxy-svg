import z from "/libs/xel/xel.js";
import "/libs/color/color.js";
import "/libs/css-parser/css-parser.js";
import "/libs/paper/paper.js";
import B from "/libs/seed-random/seed-random.js";
import "/libs/dom-purify/dom-purify.js";
import D from "/libs/dexie/dexie.js";
import E from "/libs/typesense/typesense.js";
import "/libs/pako/pako.js";
const n = ["circle", "ellipse", "line", "path", "polygon", "polyline", "rect"];
const l = ["text", "textPath", "tspan"];
const o = [...n, ...l, "foreignObject", "image"];
const s = [...n, ...l];
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
    appliesTo: [...o, "svg", "g", "a", "use"],
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
    appliesTo: [...o, "use"],
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
    appliesTo: [...o, "svg", "g", "a", "use"],
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
      ...o,
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
    appliesTo: [...o, "svg", "g", "a", "use"],
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
    appliesTo: [...o, "textPath", "tspan", "svg", "g", "a", "use"],
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
    appliesTo: [...o, "textPath", "tspan", "g", "a", "svg", "use"],
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
      ...o,
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
    appliesTo: [...o, "g", "a", "svg", "use"],
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
      ...o,
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
      ...o,
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
    appliesTo: [...o, "svg", "g", "a", "use"],
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
    appliesTo: [...o, "use"],
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
    appliesTo: [...o, "text", "textPath", "tspan"],
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
  .map((G) => G.presentationAttributeName)
  .filter((G) => G);
let r = (G, H = 0) => {
  let I = Math.pow(10, H);
  return Math.round((G + Number.EPSILON) * I) / I;
};
const p = {
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
let u = (G, ...H) => {
  let I = [];
  for (let L = 0; L < G.length; L += 1) {
    I.push(G[L]);
    if (H[L] !== undefined) {
      I.push(H[L]);
    }
  }
  let J = I.join("");
  m.innerHTML = J;
  let K = document.importNode(m.content, true);
  if (K.children.length === 1) {
    return K.firstElementChild;
  } else {
    return K;
  }
};
let h = (G, ...H) => {
  let I = [];
  for (let L = 0; L < G.length; L += 1) {
    I.push(G[L]);
    if (H[L] !== undefined) {
      I.push(H[L]);
    }
  }
  let J = I.join("");
  let K = new CSSStyleSheet();
  K.replaceSync(J);
  return K;
};
let c = (G, ...H) => {
  let I = [];
  for (let M = 0; M < G.length; M += 1) {
    I.push(G[M]);
    if (H[M] !== undefined) {
      I.push(H[M]);
    }
  }
  let J =
    '<svg id="x-stub" xmlns="http://www.w3.org/2000/svg">' +
    I.join("") +
    "</svg>";
  m.innerHTML = J;
  let K = document.importNode(m.content, true);
  let L = K.querySelector("svg#x-stub");
  if (L.children.length === 1) {
    return L.firstElementChild;
  }
  for (let O of [...L.childNodes]) {
    K.appendChild(O);
  }
  L.remove();
  return K;
};
new (class {
  #e;
  #t = null;
  #i = {};
  constructor() {
    this.#e = new D("GoogleFontsManager");
    this.#e.version(1).stores({
      cache: "family",
    });
  }
  search(G = "", H = "alphabetical", I = "all", J = "all", K = "all") {
    return new Promise(async (L) => {
      await this.#a();
      let M = [];
      let O = this.#e.cache;
      if (G.trim() !== "") {
        O = O.filter((P) =>
          P.family.toLowerCase().includes(G.trim().toLowerCase())
        );
      }
      if (I !== "all") {
        O = O.filter((P) => P.category === I);
      }
      if (J !== "all") {
        O = O.filter((P) => P.subsets.includes(J));
      }
      M = await O.toArray();
      if (H === "date") {
        M = M.sort((P, Q) => (P.dateRank > Q.dateRank ? -1 : 1));
      } else if (H === "popularity") {
        M = M.sort((P, Q) => (P.popularityRank > Q.popularityRank ? -1 : 1));
      } else if (H === "trending") {
        M = M.sort((P, Q) => (P.trendingRank > Q.trendingRank ? -1 : 1));
      }
      if (K !== "all") {
        M = M.slice(K * 40, (K + 1) * 40);
      }
      L(M);
    });
  }
  refresh() {
    return new Promise(async (G, H) => {
      let I;
      if (this.#t === null) {
        this.#t = new E.Client({
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
        I = await this.#t.collections("googleFonts").documents().export();
      } catch (K) {
        return H(K);
      }
      let J = I.split("\n")
        .map((L) => JSON.parse(L))
        .map((L) => ({
          family: L.family,
          faces: L.faces,
          category: L.category,
          subsets: L.subsets,
          license: L.license,
          thumbnail: L.thumbnail,
          urls: L.urls,
          dateRank: L.dateRank,
          popularityRank: L.popularityRank,
          trendingRank: L.trendingRank,
          pageURL: "https://fonts.google.com/specimen/" + L.id,
          cachedTime: Date.now(),
        }));
      await this.#e.cache.clear();
      await this.#e.cache.bulkPut(J);
      G();
    });
  }
  getFontFaceRulesFromUrl(G, H = false) {
    return new Promise(async (I) => {
      let J = [];
      await this.#a();
      if (H) {
        let K = await this.#n(G);
        for (let L of K.cssRules) {
          if (L.type === CSSRule.FONT_FACE_RULE) {
            J.push(L);
          }
        }
      } else {
        let M = [];
        let O = new URL(G);
        let P = O.searchParams.get("display") || "auto";
        if (G.startsWith("https://fonts.googleapis.com/css?")) {
          let Q = O.searchParams.get("family");
          Q.split("|");
          O.searchParams.get("subset");
          let R = {
            regular: "400",
            bold: "700",
            italic: "400italic",
            bolditalic: "700italic",
            r: "400",
            b: "700",
            i: "400italic",
          };
          for (let S of Q.split("|")) {
            let V = [];
            let [W, X] = S.split(":");
            for (let Y of X.split(",")) {
              Y = R[Y] || Y;
              V.push(Y);
            }
            M.push({
              family: W,
              faceNames: V,
            });
          }
        } else if (G.startsWith("https://fonts.googleapis.com/css2?")) {
          let Z = O.searchParams.getAll("family");
          for (let a0 of Z) {
            let [a1, a2] = a0.split(":");
            if (a2 === undefined) {
              M.push({
                family: a1,
                faceNames: ["400"],
              });
            } else {
              let a3 = [];
              let [a4, a5] = a2.split("@");
              let a6 = a4.split(",");
              let a7 = a5.split(";");
              for (let a8 of a7) {
                let a9 = {
                  wght: "400",
                  ital: "0",
                };
                for (let aa = 0; aa < a6.length; aa += 1) {
                  a9[a6[aa]] = a8.split(",")[aa];
                }
                a3.push(a9.wght + (a9.ital === "1" ? "italic" : ""));
              }
              M.push({
                family: a1,
                faceNames: a3,
              });
            }
          }
        }
        {
          let ab = this.#e.cache;
          for (let { family, faceNames } of M) {
            let ae = await ab.get({
              family: family,
            });
            if (ae) {
              for (let af of faceNames) {
                let ag = ae.urls[af];
                if (ag) {
                  let ah = af.substring(0, 3);
                  let ai = af.includes("italic") ? "italic" : "normal";
                  let aj = [];
                  for (let am of ae.subsets) {
                    if (p[am]) {
                      aj.push(p[am]);
                    }
                  }
                  if (aj.length === 0) {
                    aj = "U+0-10FFFF";
                  }
                  let ak = aj.join(",");
                  let al = h`
                    @font-face {
                      font-family: "${family}";
                      font-style: ${ai};
                      font-weight: ${ah};
                      font-display: ${P};
                      font-unicode-range: ${ak};
                      src: url(${ag});
                    }
                  `;
                  J.push(al.cssRules[0]);
                }
              }
            }
          }
        }
      }
      I(J);
    });
  }
  getFamilyDescriptor(G) {
    return new Promise(async (H) => {
      await this.#a();
      H((await this.#e.cache.where("family").equals(G).toArray())[0] || null);
    });
  }
  #n(G) {
    return new Promise(async (H) => {
      let I = null;
      if (this.#i[G]) {
        I = this.#i[G];
      } else {
        let J = await fetch(G);
        let K = await J.text();
        I = new CSSStyleSheet();
        I.replaceSync(K);
        this.#i[G] = I;
      }
      H(I);
    });
  }
  #a() {
    return new Promise(async (G) => {
      let H = await this.#e.cache.count();
      let I = true;
      if (H > 0) {
        let J = await this.#e.cache.get("Roboto");
        if (J) {
          let K = 1296000000;
          I = Date.now() - J.cachedTime > K;
        }
      }
      if (H === 0 || I === true) {
        await this.refresh();
      }
      G();
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
let d = (G, H, I) => G.split(H).join(I);
let b = (G) => {
  G = G.toLowerCase();
  G = d(G, " ", "");
  G = d(G, "-", "");
  let H = "400";
  if ((G = d(G, "_", "")).includes("thin") || G.includes("hairline")) {
    H = "100";
  } else if (G.includes("extralight") || G.includes("ultralight")) {
    H = "200";
  } else if (G.includes("light")) {
    H = "300";
  } else if (G.includes("medium")) {
    H = "500";
  } else if (G.includes("semibold") || G.includes("demibold")) {
    H = "600";
  } else if (G.includes("extrabold") || G.includes("ultrabold")) {
    H = "800";
  } else if (G.includes("bold")) {
    H = "700";
  } else if (G.includes("black") || G.includes("heavy")) {
    H = "900";
  }
  return H;
};
let y = (G) => {
  G = G.toLowerCase();
  G = d(G, " ", "");
  G = d(G, "-", "");
  let H = "normal";
  if ((G = d(G, "_", "")).includes("italic")) {
    H = "italic";
  } else if (G.includes("oblique")) {
    H = "oblique";
  }
  return H;
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
    this.#e = new D("LocalFontsManager");
    this.#e.version(1).stores({
      cache: "family",
    });
    this.#e
      .version(2)
      .stores({
        cache: "family",
      })
      .upgrade((G) => G.cache.clear());
    if (window.queryLocalFonts === undefined) {
      this.#l = "no-api";
    } else {
      navigator.permissions
        .query({
          name: "local-fonts",
        })
        .then((G) => {
          if (G.state === "granted") {
            this.refresh();
          } else if (G.state !== "prompt") {
            this.#l = "no-permission";
          }
        });
    }
  }
  search(G = "", H = "all") {
    return new Promise(async (I) => {
      let J = [];
      let K = this.#e.cache;
      if (G.trim() !== "") {
        K = K.filter((L) =>
          L.family.toLowerCase().includes(G.trim().toLowerCase())
        );
      }
      J = await K.toArray();
      if (H !== "all") {
        J = J.slice(H * 40, (H + 1) * 40);
      }
      I(J);
    });
  }
  refresh() {
    return new Promise(async (G, H) => {
      let I;
      try {
        I = await this.getLocalFontsMetadata(true);
      } catch (K) {
        return H(K);
      }
      let J = [];
      for (let L of I) {
        let M = b(L.style) + (y(L.style) === "italic" ? "i" : "");
        let O = J.find((P) => P.family === L.family);
        if (O) {
          if (O.faces.includes(M) === false) {
            O.faces.push(M);
          }
        } else {
          let P = {
            family: L.family,
            faces: [M],
          };
          J.push(P);
        }
      }
      for (let Q of J) {
        Q.faces.sort();
      }
      await this.#e.cache.clear();
      await this.#e.cache.bulkPut(J);
      this.#l = "ready";
      G();
    });
  }
  getLocalFontsMetadata(G = false) {
    return new Promise(async (H, I) => {
      if (this.status === "no-api") {
        H([]);
      } else {
        if (this.#o.length < 10 || G) {
          try {
            this.#o = await window.queryLocalFonts();
          } catch (J) {
            return I({
              message: J.message,
              name: J.name,
            });
          }
        }
        H(this.#o);
      }
    });
  }
  getCacheSize() {
    return new Promise(async (G) => {
      G(await this.#e.cache.count());
    });
  }
  getFamilyDescriptor(G) {
    return new Promise(async (H) => {
      H((await this.#e.cache.where("family").equals(G).toArray())[0] || null);
    });
  }
  getFamilyWeights(G) {
    return new Promise(async (H) => {
      let I = await this.getFamilyDescriptor(G);
      if (I) {
        let J = new Set();
        for (let K of I.faces) {
          let L = K.substring(0, 3);
          J.add(L);
        }
        H([...J]);
      } else {
        H(["400"]);
      }
    });
  }
})();
document.createElementNS("http://www.w3.org/2000/svg", "svg");
let f = (G = 0, H = 100, I = 0, J = null) => {
  let K = G + (J ? new B(J) : Math.random)() * (H - G);
  return r(K, I);
};
let g = (G, H, I = true) => {
  let J = G.closest(H);
  if (I && !J && G.getRootNode().host) {
    return g(G.getRootNode().host, H);
  } else {
    return J;
  }
};
class x extends HTMLElement {
  static #s = u` <template> <main id="main" part="main"></main> <footer id="footer" part="footer"></footer> </template>
  `;
  static #r = h`
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
    let G = this.constructor.t;
    let H = this.constructor.l;
    this.#p = this.attachShadow({
      mode: "closed",
    });
    this.#p.adoptedStyleSheets = [
      z.themeStyleSheet,
      x.#r,
      this.constructor._shadowStyleSheet,
    ];
    this.#p.append(document.importNode(x.#s.content, true));
    if (G) {
      this.#p
        .querySelector("#main")
        .append(document.importNode(G.content, true));
    }
    if (H) {
      this.#p
        .querySelector("#footer")
        .append(document.importNode(H.content, true));
    }
    for (let I of this.#p.querySelectorAll("[id]")) {
      this["#" + I.id] = I;
    }
    this.setAttribute("extends", "bx-generator");
    this.setAttribute("tabindex", "0");
  }
}
let { sin, cos, abs, log, floor, PI } = Math;
let C = [
  {
    color: "#d7392e",
    seats: 54,
  },
  {
    color: "#7aaa42",
    seats: 32,
  },
  {
    color: "#2470b0",
    seats: 50,
  },
  {
    color: "#2f2f2f",
    seats: 36,
  },
];
let F = [
  "#a62a26",
  "#d7392e",
  "#ec6c42",
  "#f4ad60",
  "#7aaa42",
  "#217eda",
  "#2470b0",
  "#542988",
  "#2f2f2f",
];
class T extends x {
  static t = u` <template> <section id="options-section"> <h3 id="options-heading"><x-message href="#options" autocapitalize></x-message></h3> <section id="hall-radius-subsection"> <h4 id="hall-radius-heading"><x-message href="#parliament-hall-radius" autocapitalize></x-message></h4> <x-box id="hall-radius-box"> <x-slider id="hall-radius-slider" min="0" max="100" step="1"></x-slider> <x-numberinput id="hall-radius-input" min="0" max="100" step="1" suffix="%" condensed> <x-stepper></x-stepper> </x-numberinput> </x-box> </section> <section id="seat-radius-subsection"> <h4 id="seat-radius-heading"><x-message href="#parliament-seat-radius" autocapitalize></x-message></h4> <x-box id="seat-radius-box"> <x-slider id="seat-radius-slider" min="1" max="100" step="1"></x-slider> <x-numberinput id="seat-radius-input" min="1" max="100" step="1" suffix="%" condensed> <x-stepper></x-stepper> </x-numberinput> </x-box> </section> <section id="parties-subsection"> <h4><x-message href="#parliament-parties" autocapitalize></x-message></h4> <x-box id="parties-box" vertical></x-box> <x-button id="add-party-button"> <x-icon href="#plus"></x-icon> <x-label><x-message href="#add" autocapitalize></x-message></x-label> </x-button> </section> </section> <hr> <section id="preview-section"> <h3 id="preview-heading"><x-message href="#preview" autocapitalize></x-message></h3> <svg id="preview" part="preview" preserveAspectRatio="xMidYMid"></svg> </section> </template>
  `;
  static l = u` <template> <x-button id="generate-button" size="large"> <x-icon href="#generators-panel"></x-icon> <x-label><x-message href="#generate" autocapitalize></x-message></x-label> </x-button> </template>
  `;
  static #m = u` <template> <x-box class="party-box"> <x-colorselect value="#4b4ba7"></x-colorselect> <x-numberinput value="10" min="1" suffix=" seat(s)" condensed> <x-stepper></x-stepper> </x-numberinput> <x-button class="delete-button" condensed> <x-icon href="#trash"></x-icon> </x-button> </x-box> </template>
  `;
  static _shadowStyleSheet = h`#hall-radius-subsection h4{margin:0}#hall-radius-slider{flex:1}#hall-radius-input{width:60px;margin-left:10px}#seat-radius-subsection{margin-top:10px}#seat-radius-subsection h4{margin:0}#seat-radius-slider{flex:1}#seat-radius-input{width:60px;margin-left:10px}#parties-subsection{margin-top:10px}#parties-box .party-box{width:100%}#parties-box .party-box+.party-box{margin-top:8px}#parties-box x-numberinput{flex:1;margin:0 8px;max-width:none}#parties-box x-icon{width:12px;height:12px}#add-party-button{width:100%;margin-top:8px}#add-party-button x-icon{width:11px;height:11px}#preview{height:160px}`;
  #u;
  #h;
  constructor() {
    super();
    this["#hall-radius-box"].addEventListener("changestart", () => this.#c());
    this["#seat-radius-box"].addEventListener("changestart", () => this.#d());
    this["#parties-box"].addEventListener("changestart", (G) => this.#b(G));
    this["#parties-box"].addEventListener("click", (G) => this.#y(G));
    this["#add-party-button"].addEventListener("click", () => this.#f());
    this["#generate-button"].addEventListener("click", () => this.#g());
  }
  connectedCallback() {
    this.#u = g(this, "bx-editor");
    let G = z.getConfig("bx-parliamentchartgenerator:hallRadius", 0.3);
    let H = z.getConfig("bx-parliamentchartgenerator:seatRadius", 0.8);
    let I = z.getConfig("bx-parliamentchartgenerator:parties", C);
    this["#hall-radius-slider"].value = r(G * 100, 2);
    this["#hall-radius-input"].value = r(G * 100, 2);
    this["#seat-radius-slider"].value = r(H * 100, 2);
    this["#seat-radius-input"].value = r(H * 100, 2);
    this["#parties-box"].innerHTML = "";
    for (let J = 0; J < I.length; J += 1) {
      let { seats, color } = I[J];
      let M = document.importNode(T.#m.content, true).firstElementChild;
      this["#parties-box"].append(M);
      M.querySelector("x-colorselect").value = color;
      M.querySelector("x-numberinput").value = seats;
    }
    z.addEventListener("localeschange", (this.#h = () => this.#x()));
    this.#x();
  }
  disconnectedCallback() {
    z.removeEventListener("localeschange", this.#h);
  }
  #c() {
    let G;
    let H;
    this["#hall-radius-box"].addEventListener(
      "change",
      (G = (I) => {
        if (I.target === this["#hall-radius-slider"]) {
          this["#hall-radius-input"].value = this["#hall-radius-slider"].value;
        } else if (I.target === this["#hall-radius-input"]) {
          this["#hall-radius-slider"].value = this["#hall-radius-input"].value;
        }
        this.#x();
      })
    );
    this["#hall-radius-box"].addEventListener(
      "changeend",
      (H = () => {
        this["#hall-radius-box"].removeEventListener("change", G);
        this["#hall-radius-box"].removeEventListener("changeend", H);
        z.setConfig(
          "bx-parliamentchartgenerator:hallRadius",
          this["#hall-radius-slider"].value / 100
        );
      })
    );
  }
  #d() {
    let G;
    let H;
    this["#seat-radius-box"].addEventListener(
      "change",
      (G = (I) => {
        if (I.target === this["#seat-radius-slider"]) {
          this["#seat-radius-input"].value = this["#seat-radius-slider"].value;
        } else if (I.target === this["#seat-radius-input"]) {
          this["#seat-radius-slider"].value = this["#seat-radius-input"].value;
        }
        this.#x();
      })
    );
    this["#seat-radius-box"].addEventListener(
      "changeend",
      (H = () => {
        this["#seat-radius-box"].removeEventListener("change", G);
        this["#seat-radius-box"].removeEventListener("changeend", H);
        z.setConfig(
          "bx-parliamentchartgenerator:seatRadius",
          this["#seat-radius-slider"].value / 100
        );
      })
    );
  }
  #b(G) {
    let H;
    let I;
    let J = G.target;
    J.addEventListener(
      "change",
      (H = () => {
        this.#x();
      })
    );
    J.addEventListener(
      "changeend",
      (I = () => {
        J.removeEventListener("change", H);
        J.removeEventListener("changeend", I);
        this.#x();
        let K = [...this["#parties-box"].children].map((L) => ({
          seats: L.querySelector("x-numberinput").value,
          color: L.querySelector("x-colorselect").value,
        }));
        z.setConfig("bx-parliamentchartgenerator:parties", K);
      })
    );
  }
  #y(G) {
    let H = G.target.closest(".delete-button");
    if (H) {
      H.closest(".party-box").remove();
      let I = [...this["#parties-box"].children].map((J) => ({
        seats: J.querySelector("x-numberinput").value,
        color: J.querySelector("x-colorselect").value,
      }));
      z.setConfig("bx-parliamentchartgenerator:parties", I);
      this.#x();
    }
  }
  #f() {
    let G;
    let H = ((K) => {
      let L = K.length;
      while (--L) {
        let M = f(0, 1, 5);
        let O = Math.floor(M * (L + 1));
        let P = K[O];
        K[O] = K[L];
        K[L] = P;
      }
      return K;
    })([...F]);
    let I = [...this["#parties-box"].querySelectorAll("x-colorselect")].map(
      (K) => K.value
    );
    let J = document.importNode(T.#m.content, true).firstElementChild;
    do {
      G = H.pop();
    } while (H.length > 0 && I.includes(G));
    this["#parties-box"].append(J);
    J.querySelector("x-colorselect").value = G;
    this.#x();
  }
  #g() {
    let G = this["#preview"].cloneNode(true);
    this.#u.board.undoManager.checkpoint(
      ["#generators.parliament-chart"],
      "#generators-panel"
    );
    this.#u.board.insertArtwork(G);
  }
  #k(G, H = 0.3, I = 0.8) {
    let J = 100;
    let K = 0;
    let L = 0;
    let M = [];
    let O = [];
    let P = [];
    let Q = [];
    let R = null;
    let { geometryPrecision } = this.#u.board;
    for (let Y of G) {
      K += Y.seats;
    }
    let V = (Z, a0, a1) =>
      (PI * a0 * a1) / (Z - a0) / (1 + (PI * (a0 - 1) * a0) / 2 / (Z - a0));
    let W = (Z, a0, a1) => {
      let a2 = (V(Z, a0, a1) * a0) / a1 - (1 - H);
      return abs(a2);
    };
    {
      let Z = floor(log(K) / log(2)) || 1;
      let a0 = W(K, Z, J);
      let a1 = 0;
      if (W(K, Z + 1, J) < a0) {
        a1 = 1;
      }
      if (W(K, Z - 1, J) < a0 && Z > 1) {
        a1 = -1;
      }
      while (W(K, Z + a1, J) < a0 && Z > 0) {
        a0 = W(K, Z + a1, J);
        Z += a1;
      }
      L = Z || 1;
    }
    let X = V(K, L, J);
    for (let a2 = 1; a2 <= L; a2 += 1) {
      M[a2] = J - (a2 - 1) * X;
    }
    {
      let a3 = 0;
      for (let a9 in M) {
        a3 += M[a9];
      }
      let a4 = a3 / (K - 2);
      let a5 = a3 / (K + 2);
      let a6 = a3 / K;
      let a7 = {};
      let a8 = 0;
      for (let aa in M) {
        a7[aa] = r(M[aa] / a6, 0);
        a8 += a7[aa];
      }
      while (a8 !== K) {
        if (a8 < K) {
          a4 = a6;
        } else if (a8 > K) {
          a5 = a6;
        }
        a6 = (a4 + a5) / 2;
        a7 = {};
        a8 = 0;
        for (let ab in M) {
          a7[ab] = r(M[ab] / a6, 0);
          a8 += a7[ab];
        }
      }
      O = a7;
    }
    {
      for (let ad = 1; ad <= L; ad += 1) {
        let ae = [];
        let af = J - (ad - 1) * X;
        let ag = (PI * af) / (O[ad] - 1 || 1);
        for (let ah = 0; ah <= O[ad] - 1; ah += 1) {
          let ai = {
            x: r(af * cos((ah * ag) / af - PI), geometryPrecision),
            y: r(af * sin((ah * ag) / af - PI), geometryPrecision),
            r: r((I / 2) * X, geometryPrecision),
          };
          ae.push(ai);
        }
        P.push(ae);
      }
      let ac = Array(P.length).fill(0);
      for (let aj = 0; aj < G.length; aj += 1) {
        let ak = G[aj];
        for (let al = 0; al < ak.seats; al += 1) {
          let am;
          let an;
          let ao;
          for (let ap in P) {
            ao = r((ac[ap] || 0) / P[ap].length, 10);
            if (!an || ao < an) {
              an = ao;
            }
          }
          for (let aq in P) {
            ao = r((ac[aq] || 0) / P[aq].length, 10);
            if (ao === an) {
              am = aq;
              break;
            }
          }
          P[am][ac[am]].partyIndex = aj;
          ac[am] += 1;
        }
      }
    }
    for (let ar in P) {
      for (let as of P[ar]) {
        if (Q[as.partyIndex] === undefined) {
          Q[as.partyIndex] = [];
        }
        Q[as.partyIndex].push(as);
      }
    }
    {
      let at = Q[0][0].r / (I / 2);
      let au =
        '<svg viewBox="' +
        (-100 - at / 2) +
        " " +
        (-100 - at / 2) +
        " " +
        (200 + at) +
        " " +
        (J + at) +
        '">';
      for (let av = 0; av < G.length; av += 1) {
        au += '<g style="fill: ' + G[av].color + '">';
        for (let aw of Q[av]) {
          au +=
            '<circle cx="' +
            aw.x +
            '" cy="' +
            aw.y +
            '" r="' +
            aw.r +
            '"></circle>';
        }
        au += "</g>";
      }
      au += "</svg>";
      R = c`${au}`;
    }
    return R;
  }
  #x() {
    for (let G of this["#parties-box"].children) {
      G.querySelector(".delete-button").disabled =
        this["#parties-box"].childElementCount === 1;
      let H = G.querySelector("x-numberinput");
      H.suffix =
        " " +
        z.queryMessage("#parliament-seats-suffix", {
          count: H.value,
        }).content;
    }
    {
      let I = this["#hall-radius-slider"].value / 100;
      let J = this["#seat-radius-slider"].value / 100;
      let K = [];
      for (let M of this["#parties-box"].children) {
        K.push({
          seats: M.querySelector("x-numberinput").value,
          color: M.querySelector("x-colorselect").value,
        });
      }
      let L = this.#k(K, I, J);
      this["#preview"].innerHTML = L.innerHTML;
      this["#preview"].setAttribute("viewBox", L.getAttribute("viewBox"));
    }
  }
}
customElements.define("bx-parliamentchartgenerator", T);
