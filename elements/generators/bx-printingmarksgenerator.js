import Z from "../../libs/xel/xel.js";
import "../../libs/color/color.js";
import a0 from "../../libs/css-parser/css-parser.js";
import "../../libs/paper/paper.js";
import "../../libs/seed-random/seed-random.js";
import "../../libs/dom-purify/dom-purify.js";
import a1 from "../../libs/dexie/dexie.js";
import a2 from "../../libs/typesense/typesense.js";
import "../../libs/pako/pako.js";
const n = "http://www.w3.org/2000/svg";
const s = ["circle", "ellipse", "line", "path", "polygon", "polyline", "rect"];
const l = ["text", "textPath", "tspan"];
const r = [...s, ...l, "foreignObject", "image"];
const o = [...s, "text", "image", "g", "a", "svg", "use", "foreignObject"];
const p = [...s, ...l];
const m = [...s, "text", "use"];
const h = [...r, "clipPath", "a", "g", "use"];
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
    appliesTo: [...r, "svg", "g", "a", "use"],
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
    appliesTo: [...r, "use"],
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
    appliesTo: [...r, "svg", "g", "a", "use"],
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
      ...r,
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
    appliesTo: [...r, "svg", "g", "a", "use"],
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
    appliesTo: [...r, "textPath", "tspan", "svg", "g", "a", "use"],
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
    appliesTo: [...p],
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
    appliesTo: [...p],
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
    appliesTo: [...p],
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
    appliesTo: [...r, "textPath", "tspan", "g", "a", "svg", "use"],
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
      ...r,
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
    appliesTo: [...s],
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
    appliesTo: [...s],
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
    appliesTo: [...s],
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
    appliesTo: [...s],
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
    appliesTo: [...r, "g", "a", "svg", "use"],
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
      ...r,
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
      ...r,
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
    appliesTo: [...p],
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
    appliesTo: [...r, "svg", "g", "a", "use"],
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
    appliesTo: [...s],
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
    appliesTo: [...p],
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
    appliesTo: [...p],
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
    appliesTo: [...p],
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
    appliesTo: [...p],
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
    appliesTo: [...p],
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
    appliesTo: [...p],
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
    appliesTo: [...p],
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
    appliesTo: [...p],
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
    appliesTo: [...r, "use"],
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
    appliesTo: [...r, "text", "textPath", "tspan"],
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
  .map((a3) => a3.presentationAttributeName)
  .filter((a3) => a3);
let u = (a3, a4 = 0) => {
  let a5 = Math.pow(10, a4);
  return Math.round((a3 + Number.EPSILON) * a5) / a5;
};
class c {
  currentToken = null;
  position = 0;
  #e;
  constructor(a3) {
    this.#e = a3;
  }
  read() {
    let a3 = this.#e[this.position];
    this.currentToken = a3;
    if (a3.tokenType !== "EOF") {
      this.position += 1;
    }
    return a3;
  }
  reset(a3) {
    this.position = a3;
  }
}
class d {
  get type() {
    return "<view-box>";
  }
  get x() {
    return this.#t;
  }
  set x(a3) {
    this.#t = a3;
  }
  get y() {
    return this.#i;
  }
  set y(a3) {
    this.#i = a3;
  }
  get width() {
    return this.#a;
  }
  set width(a3) {
    this.#a = a3;
  }
  get height() {
    return this.#n;
  }
  set height(a3) {
    this.#n = a3;
  }
  #t;
  #i;
  #a;
  #n;
  constructor(a3 = 0, a4 = 0, a5 = 0, a6 = 0) {
    this.x = a3;
    this.y = a4;
    this.width = a5;
    this.height = a6;
  }
  static fromRect(a3) {
    return new d(a3.x, a3.y, a3.width, a3.height);
  }
  static fromString(a3, a4 = false) {
    let a5;
    let a6;
    let a7;
    let a8;
    let a9 = [...a0.tokenize(a3), new a0.EOFToken()];
    let aa = new c(a9);
    aa.read();
    if (aa.currentToken.tokenType === "WHITESPACE") {
      aa.read();
    }
    if (aa.currentToken.tokenType !== "NUMBER") {
      if (a4) {
        throw new DOMException(
          "Unexpected " + aa.currentToken.tokenType + " token.",
          "SyntaxError"
        );
      }
      return null;
    }
    a5 = aa.currentToken.value;
    aa.read();
    if (
      aa.currentToken.tokenType !== "WHITESPACE" &&
      aa.currentToken.tokenType !== ","
    ) {
      if (a4) {
        throw new DOMException(
          "Unexpected " + aa.currentToken.tokenType + " token.",
          "SyntaxError"
        );
      }
      return null;
    }
    if (aa.currentToken.tokenType === "WHITESPACE") {
      aa.read();
    }
    if (aa.currentToken.tokenType === ",") {
      aa.read();
    }
    if (aa.currentToken.tokenType === "WHITESPACE") {
      aa.read();
    }
    if (aa.currentToken.tokenType !== "NUMBER") {
      if (a4) {
        throw new DOMException(
          "Unexpected " + aa.currentToken.tokenType + " token.",
          "SyntaxError"
        );
      }
      return null;
    }
    a6 = aa.currentToken.value;
    aa.read();
    if (
      aa.currentToken.tokenType !== "WHITESPACE" &&
      aa.currentToken.tokenType !== ","
    ) {
      if (a4) {
        throw new DOMException(
          "Unexpected " + aa.currentToken.tokenType + " token.",
          "SyntaxError"
        );
      }
      return null;
    }
    if (aa.currentToken.tokenType === "WHITESPACE") {
      aa.read();
    }
    if (aa.currentToken.tokenType === ",") {
      aa.read();
    }
    if (aa.currentToken.tokenType === "WHITESPACE") {
      aa.read();
    }
    if (aa.currentToken.tokenType !== "NUMBER" || aa.currentToken.value < 0) {
      if (a4) {
        throw new DOMException(
          "Unexpected " + aa.currentToken.tokenType + " token.",
          "SyntaxError"
        );
      }
      return null;
    }
    a7 = aa.currentToken.value;
    aa.read();
    if (
      aa.currentToken.tokenType !== "WHITESPACE" &&
      aa.currentToken.tokenType !== ","
    ) {
      if (a4) {
        throw new DOMException(
          "Unexpected " + aa.currentToken.tokenType + " token.",
          "SyntaxError"
        );
      }
      return null;
    }
    if (aa.currentToken.tokenType === "WHITESPACE") {
      aa.read();
    }
    if (aa.currentToken.tokenType === ",") {
      aa.read();
    }
    if (aa.currentToken.tokenType === "WHITESPACE") {
      aa.read();
    }
    if (aa.currentToken.tokenType !== "NUMBER" || aa.currentToken.value < 0) {
      if (a4) {
        throw new DOMException(
          "Unexpected " + aa.currentToken.tokenType + " token.",
          "SyntaxError"
        );
      }
      return null;
    }
    a8 = aa.currentToken.value;
    aa.read();
    if (aa.currentToken.tokenType === "WHITESPACE") {
      aa.read();
    }
    if (aa.currentToken.tokenType === "EOF") {
      return new d(a5, a6, a7, a8);
    }
    if (a4) {
      throw new DOMException(
        "Unexpected " + aa.currentToken.tokenType + " token.",
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
const b = {
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
let g = document.createElement("template");
let f = (a3, ...a4) => {
  let a5 = [];
  for (let a8 = 0; a8 < a3.length; a8 += 1) {
    a5.push(a3[a8]);
    if (a4[a8] !== undefined) {
      a5.push(a4[a8]);
    }
  }
  let a6 = a5.join("");
  g.innerHTML = a6;
  let a7 = document.importNode(g.content, true);
  if (a7.children.length === 1) {
    return a7.firstElementChild;
  } else {
    return a7;
  }
};
let x = (a3, ...a4) => {
  let a5 = [];
  for (let a8 = 0; a8 < a3.length; a8 += 1) {
    a5.push(a3[a8]);
    if (a4[a8] !== undefined) {
      a5.push(a4[a8]);
    }
  }
  let a6 = a5.join("");
  let a7 = new CSSStyleSheet();
  a7.replaceSync(a6);
  return a7;
};
new (class {
  #s;
  #l = null;
  #r = {};
  constructor() {
    this.#s = new a1("GoogleFontsManager");
    this.#s.version(1).stores({
      cache: "family",
    });
  }
  search(a3 = "", a4 = "alphabetical", a5 = "all", a6 = "all", a7 = "all") {
    return new Promise(async (a8) => {
      await this.#o();
      let a9 = [];
      let aa = this.#s.cache;
      if (a3.trim() !== "") {
        aa = aa.filter((ab) =>
          ab.family.toLowerCase().includes(a3.trim().toLowerCase())
        );
      }
      if (a5 !== "all") {
        aa = aa.filter((ab) => ab.category === a5);
      }
      if (a6 !== "all") {
        aa = aa.filter((ab) => ab.subsets.includes(a6));
      }
      a9 = await aa.toArray();
      if (a4 === "date") {
        a9 = a9.sort((ab, ac) => (ab.dateRank > ac.dateRank ? -1 : 1));
      } else if (a4 === "popularity") {
        a9 = a9.sort((ab, ac) =>
          ab.popularityRank > ac.popularityRank ? -1 : 1
        );
      } else if (a4 === "trending") {
        a9 = a9.sort((ab, ac) => (ab.trendingRank > ac.trendingRank ? -1 : 1));
      }
      if (a7 !== "all") {
        a9 = a9.slice(a7 * 40, (a7 + 1) * 40);
      }
      a8(a9);
    });
  }
  refresh() {
    return new Promise(async (a3, a4) => {
      let a5;
      if (this.#l === null) {
        this.#l = new a2.Client({
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
        a5 = await this.#l.collections("googleFonts").documents().export();
      } catch (a7) {
        return a4(a7);
      }
      let a6 = a5
        .split("\n")
        .map((a8) => JSON.parse(a8))
        .map((a8) => ({
          family: a8.family,
          faces: a8.faces,
          category: a8.category,
          subsets: a8.subsets,
          license: a8.license,
          thumbnail: a8.thumbnail,
          urls: a8.urls,
          dateRank: a8.dateRank,
          popularityRank: a8.popularityRank,
          trendingRank: a8.trendingRank,
          pageURL: "https://fonts.google.com/specimen/" + a8.id,
          cachedTime: Date.now(),
        }));
      await this.#s.cache.clear();
      await this.#s.cache.bulkPut(a6);
      a3();
    });
  }
  getFontFaceRulesFromUrl(a3, a4 = false) {
    return new Promise(async (a5) => {
      let a6 = [];
      await this.#o();
      if (a4) {
        let a7 = await this.#p(a3);
        for (let a8 of a7.cssRules) {
          if (a8.type === CSSRule.FONT_FACE_RULE) {
            a6.push(a8);
          }
        }
      } else {
        let a9 = [];
        let aa = new URL(a3);
        let ab = aa.searchParams.get("display") || "auto";
        if (a3.startsWith("https://fonts.googleapis.com/css?")) {
          let ac = aa.searchParams.get("family");
          ac.split("|");
          aa.searchParams.get("subset");
          let ad = {
            regular: "400",
            bold: "700",
            italic: "400italic",
            bolditalic: "700italic",
            r: "400",
            b: "700",
            i: "400italic",
          };
          for (let ae of ac.split("|")) {
            let af = [];
            let [ag, ah] = ae.split(":");
            for (let ai of ah.split(",")) {
              ai = ad[ai] || ai;
              af.push(ai);
            }
            a9.push({
              family: ag,
              faceNames: af,
            });
          }
        } else if (a3.startsWith("https://fonts.googleapis.com/css2?")) {
          let aj = aa.searchParams.getAll("family");
          for (let ak of aj) {
            let [al, am] = ak.split(":");
            if (am === undefined) {
              a9.push({
                family: al,
                faceNames: ["400"],
              });
            } else {
              let an = [];
              let [ao, ap] = am.split("@");
              let aq = ao.split(",");
              let ar = ap.split(";");
              for (let as of ar) {
                let at = {
                  wght: "400",
                  ital: "0",
                };
                for (let au = 0; au < aq.length; au += 1) {
                  at[aq[au]] = as.split(",")[au];
                }
                an.push(at.wght + (at.ital === "1" ? "italic" : ""));
              }
              a9.push({
                family: al,
                faceNames: an,
              });
            }
          }
        }
        {
          let av = this.#s.cache;
          for (let { family, faceNames } of a9) {
            let ay = await av.get({
              family: family,
            });
            if (ay) {
              for (let az of faceNames) {
                let aA = ay.urls[az];
                if (aA) {
                  let aB = az.substring(0, 3);
                  let aC = az.includes("italic") ? "italic" : "normal";
                  let aD = [];
                  for (let aG of ay.subsets) {
                    if (b[aG]) {
                      aD.push(b[aG]);
                    }
                  }
                  if (aD.length === 0) {
                    aD = "U+0-10FFFF";
                  }
                  let aE = aD.join(",");
                  let aF = x`
                    @font-face {
                      font-family: "${family}";
                      font-style: ${aC};
                      font-weight: ${aB};
                      font-display: ${ab};
                      font-unicode-range: ${aE};
                      src: url(${aA});
                    }
                  `;
                  a6.push(aF.cssRules[0]);
                }
              }
            }
          }
        }
      }
      a5(a6);
    });
  }
  getFamilyDescriptor(a3) {
    return new Promise(async (a4) => {
      await this.#o();
      a4((await this.#s.cache.where("family").equals(a3).toArray())[0] || null);
    });
  }
  #p(a3) {
    return new Promise(async (a4) => {
      let a5 = null;
      if (this.#r[a3]) {
        a5 = this.#r[a3];
      } else {
        let a6 = await fetch(a3);
        let a7 = await a6.text();
        a5 = new CSSStyleSheet();
        a5.replaceSync(a7);
        this.#r[a3] = a5;
      }
      a4(a5);
    });
  }
  #o() {
    return new Promise(async (a3) => {
      let a4 = await this.#s.cache.count();
      let a5 = true;
      if (a4 > 0) {
        let a6 = await this.#s.cache.get("Roboto");
        if (a6) {
          let a7 = 1296000000;
          a5 = Date.now() - a6.cachedTime > a7;
        }
      }
      if (a4 === 0 || a5 === true) {
        await this.refresh();
      }
      a3();
    });
  }
})();
if (!["iPhone", "iPad"].includes(navigator.platform)) {
  navigator.platform.startsWith("Mac");
}
const y =
  navigator.userAgent.indexOf("Safari/") > -1 &&
  navigator.userAgent.indexOf("Chrome") === -1;
if (window.frameElement === null) {
  document.body.dataset.app;
}
let k = (a3, a4, a5) => a3.split(a4).join(a5);
let w = (a3) => {
  a3 = a3.toLowerCase();
  a3 = k(a3, " ", "");
  a3 = k(a3, "-", "");
  let a4 = "400";
  if ((a3 = k(a3, "_", "")).includes("thin") || a3.includes("hairline")) {
    a4 = "100";
  } else if (a3.includes("extralight") || a3.includes("ultralight")) {
    a4 = "200";
  } else if (a3.includes("light")) {
    a4 = "300";
  } else if (a3.includes("medium")) {
    a4 = "500";
  } else if (a3.includes("semibold") || a3.includes("demibold")) {
    a4 = "600";
  } else if (a3.includes("extrabold") || a3.includes("ultrabold")) {
    a4 = "800";
  } else if (a3.includes("bold")) {
    a4 = "700";
  } else if (a3.includes("black") || a3.includes("heavy")) {
    a4 = "900";
  }
  return a4;
};
let v = (a3) => {
  a3 = a3.toLowerCase();
  a3 = k(a3, " ", "");
  a3 = k(a3, "-", "");
  let a4 = "normal";
  if ((a3 = k(a3, "_", "")).includes("italic")) {
    a4 = "italic";
  } else if (a3.includes("oblique")) {
    a4 = "oblique";
  }
  return a4;
};
new (class extends EventTarget {
  #m = "init";
  #h = [];
  #s;
  get status() {
    return this.#m;
  }
  constructor() {
    super();
    this.#s = new a1("LocalFontsManager");
    this.#s.version(1).stores({
      cache: "family",
    });
    this.#s
      .version(2)
      .stores({
        cache: "family",
      })
      .upgrade((a3) => a3.cache.clear());
    if (window.queryLocalFonts === undefined) {
      this.#m = "no-api";
    } else {
      navigator.permissions
        .query({
          name: "local-fonts",
        })
        .then((a3) => {
          if (a3.state === "granted") {
            this.refresh();
          } else if (a3.state !== "prompt") {
            this.#m = "no-permission";
          }
        });
    }
  }
  search(a3 = "", a4 = "all") {
    return new Promise(async (a5) => {
      let a6 = [];
      let a7 = this.#s.cache;
      if (a3.trim() !== "") {
        a7 = a7.filter((a8) =>
          a8.family.toLowerCase().includes(a3.trim().toLowerCase())
        );
      }
      a6 = await a7.toArray();
      if (a4 !== "all") {
        a6 = a6.slice(a4 * 40, (a4 + 1) * 40);
      }
      a5(a6);
    });
  }
  refresh() {
    return new Promise(async (a3, a4) => {
      let a5;
      try {
        a5 = await this.getLocalFontsMetadata(true);
      } catch (a7) {
        return a4(a7);
      }
      let a6 = [];
      for (let a8 of a5) {
        let a9 = w(a8.style) + (v(a8.style) === "italic" ? "i" : "");
        let aa = a6.find((ab) => ab.family === a8.family);
        if (aa) {
          if (aa.faces.includes(a9) === false) {
            aa.faces.push(a9);
          }
        } else {
          let ab = {
            family: a8.family,
            faces: [a9],
          };
          a6.push(ab);
        }
      }
      for (let ac of a6) {
        ac.faces.sort();
      }
      await this.#s.cache.clear();
      await this.#s.cache.bulkPut(a6);
      this.#m = "ready";
      a3();
    });
  }
  getLocalFontsMetadata(a3 = false) {
    return new Promise(async (a4, a5) => {
      if (this.status === "no-api") {
        a4([]);
      } else {
        if (this.#h.length < 10 || a3) {
          try {
            this.#h = await window.queryLocalFonts();
          } catch (a6) {
            return a5({
              message: a6.message,
              name: a6.name,
            });
          }
        }
        a4(this.#h);
      }
    });
  }
  getCacheSize() {
    return new Promise(async (a3) => {
      a3(await this.#s.cache.count());
    });
  }
  getFamilyDescriptor(a3) {
    return new Promise(async (a4) => {
      a4((await this.#s.cache.where("family").equals(a3).toArray())[0] || null);
    });
  }
  getFamilyWeights(a3) {
    return new Promise(async (a4) => {
      let a5 = await this.getFamilyDescriptor(a3);
      if (a5) {
        let a6 = new Set();
        for (let a7 of a5.faces) {
          let a8 = a7.substring(0, 3);
          a6.add(a8);
        }
        a4([...a6]);
      } else {
        a4(["400"]);
      }
    });
  }
})();
const U =
  "\n  position: fixed;\n  top: -1px;\n  left: -1px;\n  width: 1px;\n  height: 1px;\n  contain: strict;\n  overflow: hidden;\n".replaceAll(
    "\n  ",
    ""
  );
class N {
  #u;
  #c;
  get shadowRoot() {
    return this.#u.shadowRoot;
  }
  constructor(a3) {
    this.#c = a3;
    this.#u = document.createElement("div");
    this.#u.setAttribute("style", U);
    this.#u.setAttribute("class", "offscreen-container");
    this.#u.attachShadow({
      mode: "open",
    });
    this.#u.shadowRoot.append(a3);
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
let C = (a3) => {
  if (a3.isConnected === false) {
    new N(a3);
  }
  if (y) {
    let a4 = null;
    if (a3.style.transform === "") {
      a4 =
        a3.localName === "linearGradient" || a3.localName === "radialGradient"
          ? a3.gradientTransform.baseVal.consolidate()
          : a3.localName === "pattern"
          ? a3.patternTransform.baseVal.consolidate()
          : a3.transform.baseVal.consolidate();
      if (a4) {
        return DOMMatrix.fromMatrix(a4.matrix);
      } else {
        return new DOMMatrix();
      }
    }
    {
      let a5 = a3.computedStyleMap().get("transform");
      if (a5.value === "none") {
        return new DOMMatrix();
      } else {
        return a5.toMatrix();
      }
    }
  }
  {
    let a6 = a3.computedStyleMap().get("transform");
    if (a6.value === "none") {
      return new DOMMatrix();
    } else {
      return a6.toMatrix();
    }
  }
};
let A = (a3, a4, a5 = null) => {
  var a6;
  var a7;
  a3.style.removeProperty("transform");
  if (a4 === null) {
    if (
      a3.localName === "linearGradient" ||
      a3.localName === "radialGradient"
    ) {
      a3.removeAttribute("gradientTransform");
    } else if (a3.localName === "pattern") {
      a3.removeAttribute("patternTransform");
    } else {
      a3.removeAttribute("transform");
    }
  } else {
    if (a5 !== null) {
      a7 = a5;
      a4 = (a6 = a4).is2D
        ? new DOMMatrix([
            u(a6.a, a7),
            u(a6.b, a7),
            u(a6.c, a7),
            u(a6.d, a7),
            u(a6.e, a7),
            u(a6.f, a7),
          ])
        : new DOMMatrix([
            u(a6.m11, a7),
            u(a6.m12, a7),
            u(a6.m13, a7),
            u(a6.m14, a7),
            u(a6.m21, a7),
            u(a6.m22, a7),
            u(a6.m23, a7),
            u(a6.m24, a7),
            u(a6.m31, a7),
            u(a6.m32, a7),
            u(a6.m33, a7),
            u(a6.m34, a7),
            u(a6.m41, a7),
            u(a6.m42, a7),
            u(a6.m43, a7),
            u(a6.m44, a7),
          ]);
    }
    if (a4.isIdentity) {
      if (
        a3.localName === "linearGradient" ||
        a3.localName === "radialGradient"
      ) {
        a3.removeAttribute("gradientTransform");
      } else if (a3.localName === "pattern") {
        a3.removeAttribute("patternTransform");
      } else {
        a3.removeAttribute("transform");
      }
    } else if (
      a3.localName === "linearGradient" ||
      a3.localName === "radialGradient"
    ) {
      a3.setAttribute("gradientTransform", a4.toString());
    } else if (a3.localName === "pattern") {
      a3.setAttribute("patternTransform", a4.toString());
    } else {
      a3.setAttribute("transform", a4.toString());
    }
  }
};
let T = (a3, a4) => {
  let a5 = new DOMMatrix();
  if (a3 === "") {
    a3 = "px";
  }
  if (a4 === "") {
    a4 = "px";
  }
  if (a3 !== a4) {
    let a6 = 1;
    if (a3 === "px") {
      a6 = 1;
    } else if (a3 === "cm") {
      a6 = 37.79527559055118;
    } else if (a3 === "mm") {
      a6 = 3.7795275590551176;
    } else if (a3 === "in") {
      a6 = 96;
    } else if (a3 === "pt") {
      a6 = 1.3333333333333333;
    } else if (a3 === "pc") {
      a6 = 16;
    } else {
      if (a3 !== "q") {
        throw new Error("Can't transform relative units.", "OperationError");
      }
      a6 = 0.9448818897637794;
    }
    if (a4 === "px") {
      a6 /= 1;
    } else if (a4 === "cm") {
      a6 /= 96 / 2.54;
    } else if (a4 === "mm") {
      a6 /= 96 / 2.54 / 10;
    } else if (a4 === "in") {
      a6 /= 96;
    } else if (a4 === "pt") {
      a6 /= 96 / 72;
    } else if (a4 === "pc") {
      a6 /= 16;
    } else {
      if (a4 !== "q") {
        throw new Error("Can't transform relative units.", "OperationError");
      }
      a6 /= 96 / 2.54 / 40;
    }
    a6 = u(a6, 12);
    a5.scaleSelf(a6, a6);
  }
  return a5;
};
let M = (a3) => {
  let a4 = [];
  if (a3.closest("text")) {
    let a5 = [];
    let a6 = document.createTreeWalker(a3, NodeFilter.SHOW_TEXT);
    while (a6.nextNode()) {
      a5.push(a6.currentNode);
    }
    for (let a7 of a5) {
      let a8 = a7.parentElement;
      if (
        a8.localName === "text" ||
        a8.localName === "tspan" ||
        a8.localName === "textPath"
      ) {
        if (a8.getNumberOfChars() > 0) {
          a4.push(a7);
        }
      } else if (a8.localName === "a") {
        let a9 = a8.getBBox();
        if (a9.x !== 0 || a9.y !== 0 || a9.width !== 0 || a9.height !== 0) {
          a4.push(a7);
        }
      }
    }
  }
  return a4;
};
let F = (a3, a4) => {
  let a5 = a3.closest("text");
  let a6 = 0;
  let a7 = -1;
  for (let a8 of M(a5)) {
    if (a8 === a3) {
      a7 = a6 + a4;
      break;
    }
    a6 += a8.length;
  }
  return [a5, a7];
};
let D = (a3, a4 = true) => {
  let a5 = new DOMRect(0, 0, 0, 0);
  let a6 = a4
    ? ((a7) => {
        let a8 = null;
        if (h.includes(a7.localName)) {
          let a9 = getComputedStyle(a7).clipPath;
          if (a9 && a9 !== "none") {
            let aa = a9.substring(6, a9.length - 2);
            let ab = _(a7).querySelector("#" + CSS.escape(aa)) || null;
            if (ab?.localName === "clipPath" && ab !== a7) {
              a8 = ab;
            }
          }
        }
        return a8;
      })(a3)
    : null;
  if (a6) {
    let a7 = D(a3, false);
    let a8 = I(D(a6), C(a6));
    a5 = H(a7, a8);
  } else if (a3.localName === "tspan") {
    let a9 = M(a3);
    let aa = document.createRange();
    if (a9.length > 0) {
      aa.setStart(a9[0], 0);
      aa.setEnd(a9[a9.length - 1], a9[a9.length - 1].length);
    }
    if (aa.collapsed === false) {
      let ab = aa.startContainer.closest("text");
      let [, ac] = F(aa.startContainer, aa.startOffset);
      let [, ad] = F(aa.endContainer, aa.endOffset);
      let ae = [];
      for (let af = ac; af < ad; af += 1) {
        let ag = ab.getExtentOfChar(af);
        ae.push(ag);
      }
      a5 = W(ae);
    }
  } else if (a3.localName === "use") {
    a5 = new DOMRect(0, 0, a3.width.baseVal.value, a3.height.baseVal.value);
  } else if (a3.localName === "clipPath") {
    let ah = [];
    for (let ai of a3.children) {
      if (m.includes(ai.localName)) {
        let aj = I(DOMRect.fromRect(ai.getBBox()), C(ai));
        ah.push(aj);
      }
    }
    if (ah.length > 0) {
      a5 = W(ah);
    }
  } else {
    a5 = DOMRect.fromRect(a3.getBBox());
  }
  return a5;
};
let { sin, cos, acos, atan2, abs, sqrt, pow, PI, min, max } = Math;
document.createElementNS("http://www.w3.org/2000/svg", "svg");
let G = (a3, a4, a5, a6) => {
  let a7 = a3.x + a4 * Math.cos(j(a6));
  let a8 = a3.y + a5 * Math.sin(j(a6));
  return new DOMPoint(a7, a8);
};
let j = (a3) => (PI * a3) / 180;
let I = (a3, a4) => {
  let a5 = [
    new DOMPoint(a3.x, a3.y),
    new DOMPoint(a3.x + a3.width, a3.y),
    new DOMPoint(a3.x + a3.width, a3.y + a3.height),
    new DOMPoint(a3.x, a3.y + a3.height),
  ].map((ac) => ac.matrixTransform(a4));
  let a6 = a5.map((ac) => ac.x);
  let a7 = a5.map((ac) => ac.y);
  let a8 = min(...a6);
  let a9 = min(...a7);
  let aa = max(...a6);
  let ab = max(...a7);
  return new DOMRect(a8, a9, aa - a8, ab - a9);
};
let W = (a3) => {
  if (a3.length === 0) {
    return new DOMRect(0, 0, 0, 0);
  }
  if (a3.length === 1) {
    let a4 = a3[0];
    return new DOMRect(a4.x, a4.y, a4.width, a4.height);
  }
  {
    let a5 = Math.min(...a3.map((a9) => a9.x));
    let a6 = Math.min(...a3.map((a9) => a9.y));
    let a7 = Math.max(...a3.map((a9) => a9.x + a9.width));
    let a8 = Math.max(...a3.map((a9) => a9.y + a9.height));
    return new DOMRect(a5, a6, a7 - a5, a8 - a6);
  }
};
let H = (a3, a4) => {
  let a5 = Math.max(a3.left, a4.left);
  let a6 = Math.min(a3.right, a4.right);
  let a7 = Math.max(a3.top, a4.top);
  let a8 = Math.min(a3.bottom, a4.bottom);
  return new DOMRect(a5, a7, a6 - a5, a8 - a7);
};
let q = (a3, a4 = null) => {
  let a5 = a3.split(":");
  let a6 = null;
  if (a5.length === 1) {
    let [a7] = a5;
    a6 = document.createElement(a7, a4);
  } else if (a5.length === 2) {
    let [a8, a9] = a5;
    if (a8 === "svg") {
      a6 = document.createElementNS(n, a9, a4);
    }
  }
  return a6;
};
let _ = (a3) => {
  let a4 = a3.localName === "svg" ? a3 : null;
  for (let a5 = a3.ownerSVGElement; a5; a5 = a5.ownerSVGElement) {
    a4 = a5;
  }
  return a4;
};
let J = (a3, a4, a5 = true) => {
  let a6 = a3.closest(a4);
  if (a5 && !a6 && a3.getRootNode().host) {
    return J(a3.getRootNode().host, a4);
  } else {
    return a6;
  }
};
class K extends HTMLElement {
  static #d = f` <template> <main id="main" part="main"></main> <footer id="footer" part="footer"></footer> </template>
  `;
  static #b = x`
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
  #g;
  constructor() {
    super();
    let a3 = this.constructor.t;
    let a4 = this.constructor.l;
    this.#g = this.attachShadow({
      mode: "closed",
    });
    this.#g.adoptedStyleSheets = [
      Z.themeStyleSheet,
      K.#b,
      this.constructor._shadowStyleSheet,
    ];
    this.#g.append(document.importNode(K.#d.content, true));
    if (a3) {
      this.#g
        .querySelector("#main")
        .append(document.importNode(a3.content, true));
    }
    if (a4) {
      this.#g
        .querySelector("#footer")
        .append(document.importNode(a4.content, true));
    }
    for (let a5 of this.#g.querySelectorAll("[id]")) {
      this["#" + a5.id] = a5;
    }
    this.setAttribute("extends", "bx-generator");
    this.setAttribute("tabindex", "0");
  }
}
class Y extends K {
  static t = f` <template> <section id="options-section"> <h3 id="options-heading"><x-message href="#options" autocapitalize></x-message></h3> <section id="bleed-subsection"> <h4 id="bleed-heading"><x-message href="#bleed" autocapitalize></x-message></h4> <x-numberinput id="bleed-input" min="0" step="1" condensed> <x-stepper></x-stepper> </x-numberinput> </section> <hr> <section id="crop-marks-subsection"> <h4 id="crop-marks-heading"><x-message href="#crop-marks" autocapitalize></x-message></h4> <main id="crop-marks-main" hidden> <x-box> <section id="crop-marks-length-subsection"> <h5 id="crop-marks-length-heading"><x-message href="#length"></x-message></h5> <x-numberinput id="crop-marks-length-input" min="0" step="1" condensed> <x-stepper></x-stepper> </x-numberinput> </section> <section id="crop-marks-offset-subsection"> <h5 id="crop-marks-offset-heading"><x-message href="#offset"></x-message></h5> <x-numberinput id="crop-marks-offset-input" min="0" step="1" condensed> <x-stepper></x-stepper> </x-numberinput> </section> </x-box> </main> </section> <hr> <section id="spoke-targets-subsection"> <x-box id="spoke-targets-heading-box"> <h4 id="spoke-targets-heading"><x-message href="#spoke-targets" autocapitalize></x-message></h4> <x-switch id="spoke-targets-switch" size="small"></x-switch> </x-box> <main id="spoke-targets-main" hidden> <h5 id="spoke-targets-spokes-heading"><x-message href="#spokes"></x-message></h5> <x-box id="spoke-targets-spokes-box"> <x-slider id="spoke-targets-spokes-slider" min="5" max="30" step="1"></x-slider> <x-numberinput id="spoke-targets-spokes-input" min="5" max="500" step="1" condensed> <x-stepper></x-stepper> </x-numberinput> </x-box> </main> </section> <hr> <section id="meta-subsection"> <h4 id="meta-heading"><x-message href="#meta" autocapitalize></x-message></h4> <main id="meta-main"> <x-checkbox value="title"> <x-label><x-message href="#title"></x-message></x-label> </x-checkbox> <x-checkbox value="date"> <x-label><x-message href="#date"></x-message></x-label> </x-checkbox> <x-checkbox value="time"> <x-label><x-message href="#time"></x-message></x-label> </x-checkbox> </main> </section> </section> <hr id="preview-section-hr"> <section id="preview-section"> <h3 id="preview-heading"><x-message href="#preview" autocapitalize></x-message></h3> <svg id="preview" part="preview" preserveAspectRatio="xMidYMid"></svg> </section> </template>
  `;
  static l = f` <template> <x-button id="generate-button" size="large"> <x-icon href="#generators-panel"></x-icon> <x-label><x-message href="#generate"></x-message></x-label> </x-button> </template>
  `;
  static _shadowStyleSheet = x`#bleed-subsection{margin-top:12px}#bleed-input{max-width:none}#crop-marks-subsection{margin-top:16px}#crop-marks-heading{flex:1;margin:0}#crop-marks-length-subsection{flex:1;margin:2px 0 0 0}#crop-marks-offset-subsection{flex:1;margin:2px 0 0 12px}#crop-marks-length-input{max-width:none}#crop-marks-offset-input{max-width:none}#spoke-targets-subsection{margin-top:16px}#spoke-targets-box{display:flex;margin-top:14px}#spoke-targets-heading{flex:1;margin:0}#spoke-targets-switch{margin:0}#spoke-targets-main{margin-top:8px}#spoke-targets-spokes-heading{margin-bottom:0}#spoke-targets-spokes-slider{flex:1}#spoke-targets-spokes-input{margin-left:10px;width:60px}#meta-subsection{margin-top:16px}#meta-box{display:flex;margin-top:14px}#meta-heading{flex:1;margin:0}#meta-main{margin-top:8px;display:grid;gap:8px;grid-template-columns:repeat(auto-fill,minmax(60px,1fr))}#meta-main x-checkbox{margin:0}#preview{height:auto}`;
  #f;
  #x;
  #y;
  #k;
  #w;
  #v;
  #U;
  #N = false;
  #C = false;
  #A = ((e, t = 500, i) => {
    let a = null;
    let n = null;
    let s = null;
    let l = 0;
    let r = () => {
      l = new Date();
      n = null;
      s = e.apply(i, a);
    };
    return (...o) => {
      let p = new Date();
      let m = t - (p - l);
      a = o;
      if (m <= 0) {
        clearTimeout(n);
        n = null;
        l = p;
        s = e.apply(i, a);
      } else {
        n ||= setTimeout(r, m);
      }
      return s;
    };
  })(this.#T, 2000, this);
  #M;
  #F;
  constructor() {
    super();
    this["#bleed-input"].addEventListener("changeend", () => this.#D());
    this["#meta-main"].addEventListener("toggle", () => this.#E());
    this["#crop-marks-length-input"].addEventListener("changeend", () =>
      this.#P()
    );
    this["#crop-marks-offset-input"].addEventListener("changeend", () =>
      this.#V()
    );
    this["#spoke-targets-switch"].addEventListener("toggle", () => this.#S());
    this["#spoke-targets-spokes-box"].addEventListener("changestart", () =>
      this.#O()
    );
    this["#generate-button"].addEventListener("click", () => this.#B());
  }
  connectedCallback() {
    this.#f = J(this, "bx-editor");
    this.#x = Z.getConfig("bx-printingmarksgenerator:bleed", 3);
    this.#y = Z.getConfig("bx-printingmarksgenerator:meta", [
      "title",
      "date",
      "time",
    ]);
    this.#k = Z.getConfig("bx-printingmarksgenerator:cropMarksLength", 9);
    this.#w = Z.getConfig("bx-printingmarksgenerator:cropMarksOffset", 0);
    this.#v = Z.getConfig("bx-printingmarksgenerator:spokeTargets", true);
    this.#U = Z.getConfig("bx-printingmarksgenerator:spokeTargetsSpokes", 16);
    let a3 = this.#f.board;
    a3.addEventListener(
      "selectedelementschange",
      (this.#M = () => {
        this.#z();
      })
    );
    a3.addEventListener(
      "workspacemutation",
      (this.#F = () => {
        this.#R();
      })
    );
    this.#T();
  }
  disconnectedCallback() {
    let a3 = this.#f.board;
    a3.removeEventListener("selectedelementschange", this.#M);
    a3.removeEventListener("workspacemutation", this.#F);
  }
  #z() {
    this.#T();
  }
  #R() {
    this.#A();
  }
  #D() {
    let a3 = this.#$();
    let a4 = T(a3, "mm");
    this.#x = u(
      this["#bleed-input"].value * a4.a,
      this.#f.board.geometryPrecision
    );
    Z.setConfig("bx-printingmarksgenerator:bleed", this.#x);
    this.#T();
  }
  #E() {
    this.#y = [
      ...this["#meta-main"].querySelectorAll("x-checkbox[toggled]"),
    ].map((a3) => a3.value);
    Z.setConfig("bx-printingmarksgenerator:meta", this.#y);
    this.#T();
  }
  #P() {
    let a3 = this.#$();
    let a4 = T(a3, "mm");
    this.#k = u(
      this["#crop-marks-length-input"].value * a4.a,
      this.#f.board.geometryPrecision
    );
    Z.setConfig("bx-printingmarksgenerator:cropMarksLength", this.#k);
    this.#T();
  }
  #V() {
    let a3 = this.#$();
    let a4 = T(a3, "mm");
    this.#w = u(
      this["#crop-marks-offset-input"].value * a4.a,
      this.#f.board.geometryPrecision
    );
    Z.setConfig("bx-printingmarksgenerator:cropMarksOffset", this.#w);
    this.#T();
  }
  #S() {
    this.#v = this["#spoke-targets-switch"].toggled;
    Z.setConfig("bx-printingmarksgenerator:spokeTargets", this.#v);
    this.#T();
  }
  #O() {
    let a3;
    let a4;
    this["#spoke-targets-spokes-box"].addEventListener(
      "change",
      (a3 = (a5) => {
        if (a5.target === this["#spoke-targets-spokes-slider"]) {
          this["#spoke-targets-spokes-input"].value =
            this["#spoke-targets-spokes-slider"].value;
        } else if (a5.target === this["#spoke-targets-spokes-input"]) {
          this["#spoke-targets-spokes-slider"].value =
            this["#spoke-targets-spokes-input"].value;
        }
      })
    );
    this["#spoke-targets-spokes-box"].addEventListener(
      "changeend",
      (a4 = () => {
        this["#spoke-targets-spokes-box"].removeEventListener("change", a3);
        this["#spoke-targets-spokes-box"].removeEventListener("changeend", a4);
        this.#U = this["#spoke-targets-spokes-input"].value;
        Z.setConfig("bx-printingmarksgenerator:spokeTargetsSpokes", this.#U);
        this.#T();
      })
    );
  }
  #B() {
    let a3 = this.#f.board;
    let a4 = this["#preview"].firstElementChild;
    a3.undoManager.checkpoint(
      ["#generators.printing-marks"],
      "#generators-panel"
    );
    a3.currentWorkspace.append(a4.cloneNode(true));
  }
  #T() {
    let a3 = this.#f.board;
    let a4 = this.#$();
    let a5 = this.#L(a4);
    let a6 = a3.geometryPrecision;
    let a7 = T("mm", a4);
    let a8 = 1 / Math.pow(10, a5 - 1);
    let a9 = a3.outermostSelectedObjectElements.length === 0;
    this["#options-heading"].disabled = a9;
    if (this.#N === false) {
      this["#bleed-heading"].disabled = a9;
      this["#bleed-input"].disabled = a9;
      this["#bleed-input"].value = u(this.#x * a7.a, a6);
      this["#bleed-input"].suffix = " " + a4;
      this["#bleed-input"].step = a8;
    }
    this["#meta-heading"].disabled = a9;
    for (let aa of this["#meta-main"].querySelectorAll("x-checkbox")) {
      aa.toggled = this.#y.includes(aa.value);
      aa.disabled = a9;
    }
    if (this.#C === false) {
      this["#crop-marks-heading"].disabled = a9;
      this["#crop-marks-main"].hidden = false;
      this["#crop-marks-length-heading"].disabled = a9;
      this["#crop-marks-length-input"].value = u(this.#k * a7.a, a6);
      this["#crop-marks-length-input"].suffix = " " + a4;
      this["#crop-marks-length-input"].step = a8;
      this["#crop-marks-length-input"].disabled = a9;
      this["#crop-marks-offset-heading"].disabled = a9;
      this["#crop-marks-offset-input"].value = u(this.#w * a7.a, a6);
      this["#crop-marks-offset-input"].suffix = " " + a4;
      this["#crop-marks-offset-input"].step = a8;
      this["#crop-marks-offset-input"].disabled = a9;
    }
    this["#spoke-targets-heading"].disabled = a9;
    this["#spoke-targets-switch"].disabled = a9;
    if (this.#v) {
      this["#spoke-targets-switch"].toggled = true;
      this["#spoke-targets-main"].hidden = false;
      this["#spoke-targets-spokes-heading"].disabled = a9;
      this["#spoke-targets-spokes-slider"].value = this.#U;
      this["#spoke-targets-spokes-slider"].disabled = a9;
      this["#spoke-targets-spokes-input"].value = this.#U;
      this["#spoke-targets-spokes-input"].disabled = a9;
    } else {
      this["#spoke-targets-switch"].toggled = false;
      this["#spoke-targets-main"].hidden = true;
    }
    if (a9) {
      this["#preview-section"].hidden = true;
      this["#preview"].innerHTML = "";
      this["#preview-section-hr"].hidden = true;
    } else {
      let ab = a3.extractArtworkWithSelectedElements();
      ab.setAttribute("part", "preview");
      ab.setAttribute("id", "preview");
      this["#preview"].replaceWith(ab);
      this["#preview"] = ab;
      this["#preview-section"].hidden = false;
      this["#preview-section-hr"].hidden = false;
      let ac = q("svg:g");
      ab.prepend(ac);
      let ad = d.fromString(ab.getAttribute("viewBox"));
      let ae = T("mm", "");
      let af = u(this.#k * ae.a, a6);
      let ag = u(this.#w * ae.a, a6);
      let ah = u(this.#x * ae.a, a6);
      ah = ((aj, ak, al = Infinity, am = null) => {
        if (am !== null) {
          aj = u(aj, am);
        }
        if (aj < ak) {
          aj = ak;
        } else if (aj > al) {
          aj = al;
        }
        return aj;
      })(ah, 0, Math.min(ad.width / 2, ad.height / 2));
      let ai = new d(
        ad.x + ah,
        ad.y + ah,
        ad.width - ah * 2,
        ad.height - ah * 2
      );
      {
        let aj = q("svg:path");
        aj.setAttribute("id", "crop-marks-path");
        aj.style.stroke = "#000";
        aj.style.vectorEffect = "non-scaling-stroke";
        aj.setPathData([
          {
            type: "M",
            values: [ai.x - af - ag - ah, ai.y],
          },
          {
            type: "L",
            values: [ai.x - ag - ah, ai.y],
          },
          {
            type: "M",
            values: [ai.x, ai.y - af - ag - ah],
          },
          {
            type: "L",
            values: [ai.x, ai.y - ag - ah],
          },
          {
            type: "M",
            values: [ai.x + ai.width + ag + ah, ai.y],
          },
          {
            type: "L",
            values: [ai.x + ai.width + ag + af + ah, ai.y],
          },
          {
            type: "M",
            values: [ai.x + ai.width, ai.y - ag - ah],
          },
          {
            type: "L",
            values: [ai.x + ai.width, ai.y - ag - af - ah],
          },
          {
            type: "M",
            values: [ai.x - ag - af - ah, ai.y + ai.height],
          },
          {
            type: "L",
            values: [ai.x - ag - ah, ai.y + ai.height],
          },
          {
            type: "M",
            values: [ai.x, ai.y + ai.height + ag + ah],
          },
          {
            type: "L",
            values: [ai.x, ai.y + ai.height + ag + af + ah],
          },
          {
            type: "M",
            values: [ai.x + ai.width + ag + ah, ai.y + ai.height],
          },
          {
            type: "L",
            values: [ai.x + ai.width + ag + af + ah, ai.y + ai.height],
          },
          {
            type: "M",
            values: [ai.x + ai.width, ai.y + ai.height + ag + ah],
          },
          {
            type: "L",
            values: [ai.x + ai.width, ai.y + ai.height + ag + af + ah],
          },
        ]);
        ac.append(aj);
      }
      if (this.#v) {
        let ak = af / 2 - 3;
        if (ak > 0) {
          let al = 360 / (this.#U * 2);
          let am = new DOMPoint(
            ai.x - af - ag - ah + af / 2,
            ai.y - af - ag - ah + af / 2
          );
          let an = new DOMPoint(
            ai.x + ai.width + ag + ah + af / 2,
            ai.y + ai.height + ag + ah + af / 2
          );
          for (let ao of [am, an]) {
            {
              let ap = "";
              for (let ar = 0, as = 0; ar < 360; ar += al, as += 1) {
                let at = G(ao, ak, ak, ar);
                ap += (as === 0 ? "M" : "L") + " " + at.x + " " + at.y;
              }
              let aq = q("svg:path");
              aq.style.fill = "white";
              aq.setAttribute("d", ap);
              ac.append(aq);
            }
            {
              let au = "";
              for (let aw = 0, ax = 0; aw < 360; aw += al, ax += 1) {
                let ay = G(ao, ak, ak, aw);
                let az = G(ao, ak, ak, aw + al);
                if (ax % 2 == 0) {
                  au +=
                    "M " +
                    ao.x +
                    " " +
                    ao.y +
                    " L " +
                    ay.x +
                    " " +
                    ay.y +
                    " L " +
                    az.x +
                    " " +
                    az.y +
                    " Z";
                }
              }
              let av = q("svg:path");
              av.style.fill = "black";
              av.setAttribute("d", au);
              ac.append(av);
            }
          }
        }
      }
      if (this.#y.length > 0) {
        let aA = ai.width / 20;
        let aB = new DOMRect(
          ai.x + aA,
          ai.y + ai.height + ag + ah,
          ai.width - aA * 2,
          af
        );
        let aC = q("svg:text");
        aC.style.fontSize = "15px";
        ac.append(aC);
        {
          let aD = [];
          if (this.#y.includes("title")) {
            let aE = this.#f.board.currentWorkspace;
            let aF = [...ab.children].filter((aH) => o.includes(aH.localName));
            let aG = null;
            if (aF.length === 2) {
              aG = aF[0].querySelector(":scope > bx-title");
            }
            aG ||= aE.querySelector(":scope > bx-title");
            if (aG) {
              aD.push(aG.textContent);
            } else {
              aD.push("Untitled");
            }
          }
          if (this.#y.includes("date")) {
            let aH = new Date().toISOString().split("T")[0];
            aD.push(aH);
          }
          if (this.#y.includes("time")) {
            let aI = new Date().toISOString();
            let aJ = aI.substring(aI.indexOf("T") + 1, aI.lastIndexOf(":"));
            aD.push(aJ);
          }
          aC.textContent = aD.join(", ");
        }
        {
          let aK = D(aC);
          aC.setAttribute("x", aB.x + aB.width / 2 - aK.width / 2);
          aC.setAttribute("y", aB.y + 15 + aB.height / 2 - aK.height / 2);
        }
        {
          let aL = D(aC);
          let aM = Math.min(aB.width / aL.width, aB.height / aL.height);
          let aN = aB.x - aL.x + aB.width / 2 - aL.width / 2;
          let aO = aB.y - aL.y + aB.height / 2 - aL.height / 2;
          let aP = aL.x + aL.width / 2;
          let aQ = aL.y + aL.height / 2;
          let aR = new DOMMatrix();
          aR.translateSelf(aN, aO);
          aR.scaleSelf(aM, aM, 1, aP, aQ);
          A(aC, aR);
        }
      }
      {
        let aS = D(ac, false);
        if (aS.width > 0 && aS.height > 0) {
          ab.setAttribute(
            "viewBox",
            aS.x + " " + aS.y + " " + aS.width + " " + aS.height
          );
        }
      }
    }
  }
  #$() {
    let a3;
    let a4;
    let a5 = this.#f.board;
    if (a5.currentWorkspace.getAttribute("data-bx-workspace") === "master") {
      let a6 = a5.getComputedViewport();
      a3 = a6.width && a6.height ? "viewport" : "canvas";
    } else {
      a3 = "canvas";
    }
    if (a3 === "canvas") {
      a4 = "";
    } else if (a3 === "viewport") {
      let a7 = a5.getComputedViewport().width.unit;
      a4 = a7 === "number" ? "" : a7;
    }
    return a4;
  }
  #L(a3) {
    if (a3 === "px" || a3 === "pt" || a3 === "q" || a3 === "") {
      return 1;
    } else if (a3 === "mm") {
      return 2;
    } else if (a3 === "cm" || a3 === "in" || a3 === "pc") {
      return 3;
    } else {
      return undefined;
    }
  }
}
customElements.define("bx-printingmarksgenerator", Y);
