import q from "../../libs/xel/xel.js";
import "../../libs/color/color.js";
import "../../libs/css-parser/css-parser.js";
import "../../libs/paper/paper.js";
import "../../libs/seed-random/seed-random.js";
import "../../libs/dom-purify/dom-purify.js";
import v from "../../libs/dexie/dexie.js";
import w from "../../libs/typesense/typesense.js";
import "../../libs/pako/pako.js";
import z from "../../libs/qr-code/qr-code.js";
const n = "http://www.w3.org/2000/svg";
const l = ["circle", "ellipse", "line", "path", "polygon", "polyline", "rect"];
const o = ["text", "textPath", "tspan"];
const r = [...l, ...o, "foreignObject", "image"];
const s = [...l, ...o];
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
    appliesTo: [...l],
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
    appliesTo: [...l],
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
    appliesTo: [...l],
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
    appliesTo: [...l],
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
    appliesTo: [...l],
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
  .map((A) => A.presentationAttributeName)
  .filter((A) => A);
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
let u = (A, ...B) => {
  let C = [];
  for (let F = 0; F < A.length; F += 1) {
    C.push(A[F]);
    if (B[F] !== undefined) {
      C.push(B[F]);
    }
  }
  let D = C.join("");
  m.innerHTML = D;
  let E = document.importNode(m.content, true);
  if (E.children.length === 1) {
    return E.firstElementChild;
  } else {
    return E;
  }
};
let h = (A, ...B) => {
  let C = [];
  for (let F = 0; F < A.length; F += 1) {
    C.push(A[F]);
    if (B[F] !== undefined) {
      C.push(B[F]);
    }
  }
  let D = C.join("");
  let E = new CSSStyleSheet();
  E.replaceSync(D);
  return E;
};
new (class {
  #e;
  #t = null;
  #i = {};
  constructor() {
    this.#e = new v("GoogleFontsManager");
    this.#e.version(1).stores({
      cache: "family",
    });
  }
  search(A = "", B = "alphabetical", C = "all", D = "all", E = "all") {
    return new Promise(async (F) => {
      await this.#a();
      let G = [];
      let H = this.#e.cache;
      if (A.trim() !== "") {
        H = H.filter((I) =>
          I.family.toLowerCase().includes(A.trim().toLowerCase())
        );
      }
      if (C !== "all") {
        H = H.filter((I) => I.category === C);
      }
      if (D !== "all") {
        H = H.filter((I) => I.subsets.includes(D));
      }
      G = await H.toArray();
      if (B === "date") {
        G = G.sort((I, J) => (I.dateRank > J.dateRank ? -1 : 1));
      } else if (B === "popularity") {
        G = G.sort((I, J) => (I.popularityRank > J.popularityRank ? -1 : 1));
      } else if (B === "trending") {
        G = G.sort((I, J) => (I.trendingRank > J.trendingRank ? -1 : 1));
      }
      if (E !== "all") {
        G = G.slice(E * 40, (E + 1) * 40);
      }
      F(G);
    });
  }
  refresh() {
    return new Promise(async (A, B) => {
      let C;
      if (this.#t === null) {
        this.#t = new w.Client({
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
        C = await this.#t.collections("googleFonts").documents().export();
      } catch (E) {
        return B(E);
      }
      let D = C.split("\n")
        .map((F) => JSON.parse(F))
        .map((F) => ({
          family: F.family,
          faces: F.faces,
          category: F.category,
          subsets: F.subsets,
          license: F.license,
          thumbnail: F.thumbnail,
          urls: F.urls,
          dateRank: F.dateRank,
          popularityRank: F.popularityRank,
          trendingRank: F.trendingRank,
          pageURL: "https://fonts.google.com/specimen/" + F.id,
          cachedTime: Date.now(),
        }));
      await this.#e.cache.clear();
      await this.#e.cache.bulkPut(D);
      A();
    });
  }
  getFontFaceRulesFromUrl(A, B = false) {
    return new Promise(async (C) => {
      let D = [];
      await this.#a();
      if (B) {
        let E = await this.#n(A);
        for (let F of E.cssRules) {
          if (F.type === CSSRule.FONT_FACE_RULE) {
            D.push(F);
          }
        }
      } else {
        let G = [];
        let H = new URL(A);
        let I = H.searchParams.get("display") || "auto";
        if (A.startsWith("https://fonts.googleapis.com/css?")) {
          let J = H.searchParams.get("family");
          J.split("|");
          H.searchParams.get("subset");
          let K = {
            regular: "400",
            bold: "700",
            italic: "400italic",
            bolditalic: "700italic",
            r: "400",
            b: "700",
            i: "400italic",
          };
          for (let L of J.split("|")) {
            let M = [];
            let [N, O] = L.split(":");
            for (let P of O.split(",")) {
              P = K[P] || P;
              M.push(P);
            }
            G.push({
              family: N,
              faceNames: M,
            });
          }
        } else if (A.startsWith("https://fonts.googleapis.com/css2?")) {
          let Q = H.searchParams.getAll("family");
          for (let R of Q) {
            let [S, T] = R.split(":");
            if (T === undefined) {
              G.push({
                family: S,
                faceNames: ["400"],
              });
            } else {
              let U = [];
              let [V, W] = T.split("@");
              let X = V.split(",");
              let Y = W.split(";");
              for (let Z of Y) {
                let a0 = {
                  wght: "400",
                  ital: "0",
                };
                for (let a1 = 0; a1 < X.length; a1 += 1) {
                  a0[X[a1]] = Z.split(",")[a1];
                }
                U.push(a0.wght + (a0.ital === "1" ? "italic" : ""));
              }
              G.push({
                family: S,
                faceNames: U,
              });
            }
          }
        }
        {
          let a2 = this.#e.cache;
          for (let { family, faceNames } of G) {
            let a5 = await a2.get({
              family: family,
            });
            if (a5) {
              for (let a6 of faceNames) {
                let a7 = a5.urls[a6];
                if (a7) {
                  let a8 = a6.substring(0, 3);
                  let a9 = a6.includes("italic") ? "italic" : "normal";
                  let aa = [];
                  for (let ad of a5.subsets) {
                    if (p[ad]) {
                      aa.push(p[ad]);
                    }
                  }
                  if (aa.length === 0) {
                    aa = "U+0-10FFFF";
                  }
                  let ab = aa.join(",");
                  let ac = h`
                    @font-face {
                      font-family: "${family}";
                      font-style: ${a9};
                      font-weight: ${a8};
                      font-display: ${I};
                      font-unicode-range: ${ab};
                      src: url(${a7});
                    }
                  `;
                  D.push(ac.cssRules[0]);
                }
              }
            }
          }
        }
      }
      C(D);
    });
  }
  getFamilyDescriptor(A) {
    return new Promise(async (B) => {
      await this.#a();
      B((await this.#e.cache.where("family").equals(A).toArray())[0] || null);
    });
  }
  #n(A) {
    return new Promise(async (B) => {
      let C = null;
      if (this.#i[A]) {
        C = this.#i[A];
      } else {
        let D = await fetch(A);
        let E = await D.text();
        C = new CSSStyleSheet();
        C.replaceSync(E);
        this.#i[A] = C;
      }
      B(C);
    });
  }
  #a() {
    return new Promise(async (A) => {
      let B = await this.#e.cache.count();
      let C = true;
      if (B > 0) {
        let D = await this.#e.cache.get("Roboto");
        if (D) {
          let E = 1296000000;
          C = Date.now() - D.cachedTime > E;
        }
      }
      if (B === 0 || C === true) {
        await this.refresh();
      }
      A();
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
let c = (A, B, C) => A.split(B).join(C);
let b = (A) => {
  A = A.toLowerCase();
  A = c(A, " ", "");
  A = c(A, "-", "");
  let B = "400";
  if ((A = c(A, "_", "")).includes("thin") || A.includes("hairline")) {
    B = "100";
  } else if (A.includes("extralight") || A.includes("ultralight")) {
    B = "200";
  } else if (A.includes("light")) {
    B = "300";
  } else if (A.includes("medium")) {
    B = "500";
  } else if (A.includes("semibold") || A.includes("demibold")) {
    B = "600";
  } else if (A.includes("extrabold") || A.includes("ultrabold")) {
    B = "800";
  } else if (A.includes("bold")) {
    B = "700";
  } else if (A.includes("black") || A.includes("heavy")) {
    B = "900";
  }
  return B;
};
let d = (A) => {
  A = A.toLowerCase();
  A = c(A, " ", "");
  A = c(A, "-", "");
  let B = "normal";
  if ((A = c(A, "_", "")).includes("italic")) {
    B = "italic";
  } else if (A.includes("oblique")) {
    B = "oblique";
  }
  return B;
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
    this.#e = new v("LocalFontsManager");
    this.#e.version(1).stores({
      cache: "family",
    });
    this.#e
      .version(2)
      .stores({
        cache: "family",
      })
      .upgrade((A) => A.cache.clear());
    if (window.queryLocalFonts === undefined) {
      this.#l = "no-api";
    } else {
      navigator.permissions
        .query({
          name: "local-fonts",
        })
        .then((A) => {
          if (A.state === "granted") {
            this.refresh();
          } else if (A.state !== "prompt") {
            this.#l = "no-permission";
          }
        });
    }
  }
  search(A = "", B = "all") {
    return new Promise(async (C) => {
      let D = [];
      let E = this.#e.cache;
      if (A.trim() !== "") {
        E = E.filter((F) =>
          F.family.toLowerCase().includes(A.trim().toLowerCase())
        );
      }
      D = await E.toArray();
      if (B !== "all") {
        D = D.slice(B * 40, (B + 1) * 40);
      }
      C(D);
    });
  }
  refresh() {
    return new Promise(async (A, B) => {
      let C;
      try {
        C = await this.getLocalFontsMetadata(true);
      } catch (E) {
        return B(E);
      }
      let D = [];
      for (let F of C) {
        let G = b(F.style) + (d(F.style) === "italic" ? "i" : "");
        let H = D.find((I) => I.family === F.family);
        if (H) {
          if (H.faces.includes(G) === false) {
            H.faces.push(G);
          }
        } else {
          let I = {
            family: F.family,
            faces: [G],
          };
          D.push(I);
        }
      }
      for (let J of D) {
        J.faces.sort();
      }
      await this.#e.cache.clear();
      await this.#e.cache.bulkPut(D);
      this.#l = "ready";
      A();
    });
  }
  getLocalFontsMetadata(A = false) {
    return new Promise(async (B, C) => {
      if (this.status === "no-api") {
        B([]);
      } else {
        if (this.#o.length < 10 || A) {
          try {
            this.#o = await window.queryLocalFonts();
          } catch (D) {
            return C({
              message: D.message,
              name: D.name,
            });
          }
        }
        B(this.#o);
      }
    });
  }
  getCacheSize() {
    return new Promise(async (A) => {
      A(await this.#e.cache.count());
    });
  }
  getFamilyDescriptor(A) {
    return new Promise(async (B) => {
      B((await this.#e.cache.where("family").equals(A).toArray())[0] || null);
    });
  }
  getFamilyWeights(A) {
    return new Promise(async (B) => {
      let C = await this.getFamilyDescriptor(A);
      if (C) {
        let D = new Set();
        for (let E of C.faces) {
          let F = E.substring(0, 3);
          D.add(F);
        }
        B([...D]);
      } else {
        B(["400"]);
      }
    });
  }
})();
document.createElementNS("http://www.w3.org/2000/svg", "svg");
let y = (A, B, C = true) => {
  let D = A.closest(B);
  if (C && !D && A.getRootNode().host) {
    return y(A.getRootNode().host, B);
  } else {
    return D;
  }
};
class g extends HTMLElement {
  static #r = u` <template> <main id="main" part="main"></main> <footer id="footer" part="footer"></footer> </template>
  `;
  static #s = h`
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
    let A = this.constructor.t;
    let B = this.constructor.l;
    this.#p = this.attachShadow({
      mode: "closed",
    });
    this.#p.adoptedStyleSheets = [
      q.themeStyleSheet,
      g.#s,
      this.constructor._shadowStyleSheet,
    ];
    this.#p.append(document.importNode(g.#r.content, true));
    if (A) {
      this.#p
        .querySelector("#main")
        .append(document.importNode(A.content, true));
    }
    if (B) {
      this.#p
        .querySelector("#footer")
        .append(document.importNode(B.content, true));
    }
    for (let C of this.#p.querySelectorAll("[id]")) {
      this["#" + C.id] = C;
    }
    this.setAttribute("extends", "bx-generator");
    this.setAttribute("tabindex", "0");
  }
}
let x = {
  Numeric: "0000",
  Alphanumeric: "TEST",
  Byte: "Test",
  Kanji: "テスト",
};
class f extends g {
  static t = u` <template> <section id="options-section"> <h3 id="options-heading"><x-message href="#options" autocapitalize></x-message></h3> <section id="mode-subsection"> <h4><x-message href="#mode" autocapitalize></x-message></h4> <x-select id="mode-select"> <x-menu> <x-menuitem value="Byte"> <x-label><x-message href="#byte--adjective" autocapitalize></x-message></x-label> </x-menuitem> <x-menuitem value="Alphanumeric"> <x-label><x-message href="#alphanumeric" autocapitalize></x-message></x-label> </x-menuitem> <x-menuitem value="Numeric"> <x-label><x-message href="#numeric" autocapitalize></x-message></x-label> </x-menuitem> <x-menuitem value="Kanji"> <x-label><x-message href="#kanji" autocapitalize></x-message></x-label> </x-menuitem> </x-menu> </x-select> </section> <section id="charset-subsection"> <h4><x-message href="#charset" autocapitalize></x-message></h4> <x-select id="charset-select"> <x-menu> <x-menuitem value="default"><x-label>ISO 8859-1</x-label></x-menuitem> <x-menuitem value="UTF-8"><x-label>UTF-8</x-label></x-menuitem> <x-menuitem value="SJIS"><x-label>SJIS</x-label></x-menuitem> </x-menu> </x-select> </section> <section id="error-correction-subsection"> <h4><x-message href="#error-correction" autocapitalize></x-message></h4> <x-buttons id="error-correction-buttons" tracking="1"> <x-button value="L"><x-label>7%</x-label></x-button> <x-button value="M"><x-label>15%</x-label></x-button> <x-button value="Q"><x-label>25%</x-label></x-button> <x-button value="H"><x-label>30%</x-label></x-button> </x-buttons> </section> <section id="value-subsection"> <h4><x-message href="#value" autocapitalize></x-message></h4> <x-input id="value-input" validation="instant"></x-input> </section> </section> <hr> <section id="preview-section"> <h3 id="preview-heading"><x-message href="#preview" autocapitalize></x-message></h3> <svg id="preview" part="preview" preserveAspectRatio="xMidYMid"></svg> </section> </template>
  `;
  static l = u` <template> <x-button id="generate-button" size="large"> <x-icon href="#generators-panel"></x-icon> <x-label><x-message href="#generate" autocapitalize></x-message></x-label> </x-button> </template>
  `;
  static _shadowStyleSheet = h`#mode-select{width:100%}#charset-subsection{margin-top:14px}#charset-select{width:100%}#error-correction-subsection{margin-top:14px}#error-correction-buttons{width:100%}#error-correction-buttons x-button{flex:1}#value-subsection{margin-top:14px}#value-input{max-width:none}`;
  #m;
  constructor() {
    super();
    this["#mode-select"].addEventListener("change", () => this.#u());
    this["#charset-select"].addEventListener("change", () => this.#h());
    this["#error-correction-buttons"].addEventListener("toggle", () =>
      this.#c()
    );
    this["#value-input"].addEventListener("input", () => this.#b());
    this["#generate-button"].addEventListener("click", () => this.#d());
  }
  async connectedCallback() {
    this.#m = y(this, "bx-editor");
    let A = q.getConfig("bx-qrcodegenerator:mode", "Byte");
    let B = q.getConfig("bx-qrcodegenerator:charset", "default");
    let C = q.getConfig("bx-qrcodegenerator:errorCorrection", "L");
    let D = x[A];
    this["#mode-select"].value = A;
    this["#charset-select"].value = B;
    this["#error-correction-buttons"].value = C;
    this["#value-input"].value = D;
    this.#y();
  }
  #u() {
    let A = this["#mode-select"].value;
    this["#value-input"].value = x[A];
    q.setConfig("bx-qrcodegenerator:mode", A);
    this.#y();
  }
  #h() {
    let A = this["#charset-select"].value;
    q.setConfig("bx-qrcodegenerator:charset", A);
    this.#y();
  }
  #c() {
    let A = this["#error-correction-buttons"].value;
    q.setConfig("bx-qrcodegenerator:errorCorrection", A);
    this.#y();
  }
  #b() {
    this.#y();
  }
  #d() {
    let A = this["#preview"].cloneNode(true);
    this.#m.board.undoManager.checkpoint(
      ["#generators.qr-code"],
      "#generators-panel"
    );
    this.#m.board.insertArtwork(A);
  }
  #g(A, B, C, D) {
    let E = null;
    let F = 0;
    let G = null;
    z.stringToBytes = z.stringToBytesFuncs[B];
    try {
      let H = z(0, C);
      H.addData(D, A);
      H.make();
      let I = ((J) => {
        let K = document.createDocumentFragment();
        let L = document.createElementNS(n, "svg");
        for (L.innerHTML = J; L.firstChild; ) {
          K.append(L.firstChild);
        }
        if (K.childElementCount > 1) {
          return K;
        } else if (K.childElementCount === 1) {
          return K.children[0];
        } else {
          return null;
        }
      })(H.createSvgTag());
      E = I.querySelector("path");
      F = I.viewBox.baseVal.width;
    } catch (J) {
      G =
        typeof J == "string"
          ? J.replace("illegal char :", "Illegal char: ")
          : "Invalid value";
    }
    return [E, F, G];
  }
  #y() {
    let A = this["#mode-select"].value;
    let B = this["#charset-select"].value;
    let C = this["#error-correction-buttons"].value;
    let D = this["#value-input"].value;
    let [E, F, G] = this.#g(A, B, C, D);
    this["#charset-subsection"].hidden = A !== "Byte";
    this["#value-input"].setCustomValidity(G === null ? "" : G);
    this["#preview"].innerHTML = "";
    if (G === null) {
      this["#preview"].append(E);
      this["#preview"].setAttribute("viewBox", "0 0 " + F + " " + F);
    }
    this["#generate-button"].disabled = G !== null;
  }
}
customElements.define("bx-qrcodegenerator", f);
