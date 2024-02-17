import w from "../../libs/xel/xel.js";
import z from "../../libs/seed-random/seed-random.js";
import "../../libs/color/color.js";
import "../../libs/css-parser/css-parser.js";
import "../../libs/paper/paper.js";
import "../../libs/dom-purify/dom-purify.js";
import A from "../../libs/dexie/dexie.js";
import B from "../../libs/typesense/typesense.js";
import "../../libs/pako/pako.js";
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
  .map((C) => C.presentationAttributeName)
  .filter((C) => C);
let r = (C, D = 0) => {
  let E = Math.pow(10, D);
  return Math.round((C + Number.EPSILON) * E) / E;
};
let p = (C, D, E = Infinity, F = null) => {
  if (F !== null) {
    C = r(C, F);
  }
  if (C < D) {
    C = D;
  } else if (C > E) {
    C = E;
  }
  return C;
};
let m = (C, D, E = 0.5) => C * (1 - E) + D * E;
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
let u = document.createElement("template");
let c = (C, ...D) => {
  let E = [];
  for (let H = 0; H < C.length; H += 1) {
    E.push(C[H]);
    if (D[H] !== undefined) {
      E.push(D[H]);
    }
  }
  let F = E.join("");
  u.innerHTML = F;
  let G = document.importNode(u.content, true);
  if (G.children.length === 1) {
    return G.firstElementChild;
  } else {
    return G;
  }
};
let d = (C, ...D) => {
  let E = [];
  for (let H = 0; H < C.length; H += 1) {
    E.push(C[H]);
    if (D[H] !== undefined) {
      E.push(D[H]);
    }
  }
  let F = E.join("");
  let G = new CSSStyleSheet();
  G.replaceSync(F);
  return G;
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
  search(C = "", D = "alphabetical", E = "all", F = "all", G = "all") {
    return new Promise(async (H) => {
      await this.#a();
      let I = [];
      let J = this.#e.cache;
      if (C.trim() !== "") {
        J = J.filter((K) =>
          K.family.toLowerCase().includes(C.trim().toLowerCase())
        );
      }
      if (E !== "all") {
        J = J.filter((K) => K.category === E);
      }
      if (F !== "all") {
        J = J.filter((K) => K.subsets.includes(F));
      }
      I = await J.toArray();
      if (D === "date") {
        I = I.sort((K, L) => (K.dateRank > L.dateRank ? -1 : 1));
      } else if (D === "popularity") {
        I = I.sort((K, L) => (K.popularityRank > L.popularityRank ? -1 : 1));
      } else if (D === "trending") {
        I = I.sort((K, L) => (K.trendingRank > L.trendingRank ? -1 : 1));
      }
      if (G !== "all") {
        I = I.slice(G * 40, (G + 1) * 40);
      }
      H(I);
    });
  }
  refresh() {
    return new Promise(async (C, D) => {
      let E;
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
        E = await this.#t.collections("googleFonts").documents().export();
      } catch (G) {
        return D(G);
      }
      let F = E.split("\n")
        .map((H) => JSON.parse(H))
        .map((H) => ({
          family: H.family,
          faces: H.faces,
          category: H.category,
          subsets: H.subsets,
          license: H.license,
          thumbnail: H.thumbnail,
          urls: H.urls,
          dateRank: H.dateRank,
          popularityRank: H.popularityRank,
          trendingRank: H.trendingRank,
          pageURL: "https://fonts.google.com/specimen/" + H.id,
          cachedTime: Date.now(),
        }));
      await this.#e.cache.clear();
      await this.#e.cache.bulkPut(F);
      C();
    });
  }
  getFontFaceRulesFromUrl(C, D = false) {
    return new Promise(async (E) => {
      let F = [];
      await this.#a();
      if (D) {
        let G = await this.#n(C);
        for (let H of G.cssRules) {
          if (H.type === CSSRule.FONT_FACE_RULE) {
            F.push(H);
          }
        }
      } else {
        let I = [];
        let J = new URL(C);
        let K = J.searchParams.get("display") || "auto";
        if (C.startsWith("https://fonts.googleapis.com/css?")) {
          let L = J.searchParams.get("family");
          L.split("|");
          J.searchParams.get("subset");
          let M = {
            regular: "400",
            bold: "700",
            italic: "400italic",
            bolditalic: "700italic",
            r: "400",
            b: "700",
            i: "400italic",
          };
          for (let N of L.split("|")) {
            let O = [];
            let [P, Q] = N.split(":");
            for (let R of Q.split(",")) {
              R = M[R] || R;
              O.push(R);
            }
            I.push({
              family: P,
              faceNames: O,
            });
          }
        } else if (C.startsWith("https://fonts.googleapis.com/css2?")) {
          let S = J.searchParams.getAll("family");
          for (let T of S) {
            let [U, V] = T.split(":");
            if (V === undefined) {
              I.push({
                family: U,
                faceNames: ["400"],
              });
            } else {
              let W = [];
              let [X, Y] = V.split("@");
              let Z = X.split(",");
              let a0 = Y.split(";");
              for (let a1 of a0) {
                let a2 = {
                  wght: "400",
                  ital: "0",
                };
                for (let a3 = 0; a3 < Z.length; a3 += 1) {
                  a2[Z[a3]] = a1.split(",")[a3];
                }
                W.push(a2.wght + (a2.ital === "1" ? "italic" : ""));
              }
              I.push({
                family: U,
                faceNames: W,
              });
            }
          }
        }
        {
          let a4 = this.#e.cache;
          for (let { family, faceNames } of I) {
            let a7 = await a4.get({
              family: family,
            });
            if (a7) {
              for (let a8 of faceNames) {
                let a9 = a7.urls[a8];
                if (a9) {
                  let aa = a8.substring(0, 3);
                  let ab = a8.includes("italic") ? "italic" : "normal";
                  let ac = [];
                  for (let af of a7.subsets) {
                    if (h[af]) {
                      ac.push(h[af]);
                    }
                  }
                  if (ac.length === 0) {
                    ac = "U+0-10FFFF";
                  }
                  let ad = ac.join(",");
                  let ae = d`
                    @font-face {
                      font-family: "${family}";
                      font-style: ${ab};
                      font-weight: ${aa};
                      font-display: ${K};
                      font-unicode-range: ${ad};
                      src: url(${a9});
                    }
                  `;
                  F.push(ae.cssRules[0]);
                }
              }
            }
          }
        }
      }
      E(F);
    });
  }
  getFamilyDescriptor(C) {
    return new Promise(async (D) => {
      await this.#a();
      D((await this.#e.cache.where("family").equals(C).toArray())[0] || null);
    });
  }
  #n(C) {
    return new Promise(async (D) => {
      let E = null;
      if (this.#i[C]) {
        E = this.#i[C];
      } else {
        let F = await fetch(C);
        let G = await F.text();
        E = new CSSStyleSheet();
        E.replaceSync(G);
        this.#i[C] = E;
      }
      D(E);
    });
  }
  #a() {
    return new Promise(async (C) => {
      let D = await this.#e.cache.count();
      let E = true;
      if (D > 0) {
        let F = await this.#e.cache.get("Roboto");
        if (F) {
          let G = 1296000000;
          E = Date.now() - F.cachedTime > G;
        }
      }
      if (D === 0 || E === true) {
        await this.refresh();
      }
      C();
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
let b = (C, D, E) => C.split(D).join(E);
let g = (C) => {
  C = C.toLowerCase();
  C = b(C, " ", "");
  C = b(C, "-", "");
  let D = "400";
  if ((C = b(C, "_", "")).includes("thin") || C.includes("hairline")) {
    D = "100";
  } else if (C.includes("extralight") || C.includes("ultralight")) {
    D = "200";
  } else if (C.includes("light")) {
    D = "300";
  } else if (C.includes("medium")) {
    D = "500";
  } else if (C.includes("semibold") || C.includes("demibold")) {
    D = "600";
  } else if (C.includes("extrabold") || C.includes("ultrabold")) {
    D = "800";
  } else if (C.includes("bold")) {
    D = "700";
  } else if (C.includes("black") || C.includes("heavy")) {
    D = "900";
  }
  return D;
};
let y = (C) => {
  C = C.toLowerCase();
  C = b(C, " ", "");
  C = b(C, "-", "");
  let D = "normal";
  if ((C = b(C, "_", "")).includes("italic")) {
    D = "italic";
  } else if (C.includes("oblique")) {
    D = "oblique";
  }
  return D;
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
    this.#e = new A("LocalFontsManager");
    this.#e.version(1).stores({
      cache: "family",
    });
    this.#e
      .version(2)
      .stores({
        cache: "family",
      })
      .upgrade((C) => C.cache.clear());
    if (window.queryLocalFonts === undefined) {
      this.#l = "no-api";
    } else {
      navigator.permissions
        .query({
          name: "local-fonts",
        })
        .then((C) => {
          if (C.state === "granted") {
            this.refresh();
          } else if (C.state !== "prompt") {
            this.#l = "no-permission";
          }
        });
    }
  }
  search(C = "", D = "all") {
    return new Promise(async (E) => {
      let F = [];
      let G = this.#e.cache;
      if (C.trim() !== "") {
        G = G.filter((H) =>
          H.family.toLowerCase().includes(C.trim().toLowerCase())
        );
      }
      F = await G.toArray();
      if (D !== "all") {
        F = F.slice(D * 40, (D + 1) * 40);
      }
      E(F);
    });
  }
  refresh() {
    return new Promise(async (C, D) => {
      let E;
      try {
        E = await this.getLocalFontsMetadata(true);
      } catch (G) {
        return D(G);
      }
      let F = [];
      for (let H of E) {
        let I = g(H.style) + (y(H.style) === "italic" ? "i" : "");
        let J = F.find((K) => K.family === H.family);
        if (J) {
          if (J.faces.includes(I) === false) {
            J.faces.push(I);
          }
        } else {
          let K = {
            family: H.family,
            faces: [I],
          };
          F.push(K);
        }
      }
      for (let L of F) {
        L.faces.sort();
      }
      await this.#e.cache.clear();
      await this.#e.cache.bulkPut(F);
      this.#l = "ready";
      C();
    });
  }
  getLocalFontsMetadata(C = false) {
    return new Promise(async (D, E) => {
      if (this.status === "no-api") {
        D([]);
      } else {
        if (this.#o.length < 10 || C) {
          try {
            this.#o = await window.queryLocalFonts();
          } catch (F) {
            return E({
              message: F.message,
              name: F.name,
            });
          }
        }
        D(this.#o);
      }
    });
  }
  getCacheSize() {
    return new Promise(async (C) => {
      C(await this.#e.cache.count());
    });
  }
  getFamilyDescriptor(C) {
    return new Promise(async (D) => {
      D((await this.#e.cache.where("family").equals(C).toArray())[0] || null);
    });
  }
  getFamilyWeights(C) {
    return new Promise(async (D) => {
      let E = await this.getFamilyDescriptor(C);
      if (E) {
        let F = new Set();
        for (let G of E.faces) {
          let H = G.substring(0, 3);
          F.add(H);
        }
        D([...F]);
      } else {
        D(["400"]);
      }
    });
  }
})();
document.createElementNS("http://www.w3.org/2000/svg", "svg");
let f = (C, D, E = true) => {
  let F = C.closest(D);
  if (E && !F && C.getRootNode().host) {
    return f(C.getRootNode().host, D);
  } else {
    return F;
  }
};
class x extends HTMLElement {
  static #s = c` <template> <main id="main" part="main"></main> <footer id="footer" part="footer"></footer> </template>
  `;
  static #r = d`
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
  #p;
  constructor() {
    super();
    let C = this.constructor.t;
    let D = this.constructor.l;
    this.#p = this.attachShadow({
      mode: "closed",
    });
    this.#p.adoptedStyleSheets = [
      w.themeStyleSheet,
      x.#r,
      this.constructor._shadowStyleSheet,
    ];
    this.#p.append(document.importNode(x.#s.content, true));
    if (C) {
      this.#p
        .querySelector("#main")
        .append(document.importNode(C.content, true));
    }
    if (D) {
      this.#p
        .querySelector("#footer")
        .append(document.importNode(D.content, true));
    }
    for (let E of this.#p.querySelectorAll("[id]")) {
      this["#" + E.id] = E;
    }
    this.setAttribute("extends", "bx-generator");
    this.setAttribute("tabindex", "0");
  }
}
let k = ["#383838", "#F9ECA9", "#EFC900", "#D79700", "#D0BB48"];
class v extends x {
  static t = c` <template> <section id="options-section"> <h3 id="options-heading"><x-message href="#options" autocapitalize></x-message></h3> <section id="size-subsection"> <x-box id="width-box" vertical> <h4 id="width-heading"><x-message href="#width" autocapitalize></x-message></h4> <x-numberinput id="width-input" value="600" min="1" condensed> <x-stepper></x-stepper> </x-numberinput> </x-box> <x-button id="aspect-ratio-button" togglable skin="flat"> <x-icon id="aspect-ratio-icon" href="#lock-on"></x-icon> </x-button> <x-box id="height-box" vertical> <h4 id="height-heading"><x-message href="#height" autocapitalize></x-message></h4> <x-numberinput id="height-input" value="400" min="1" condensed> <x-stepper></x-stepper> </x-numberinput> </x-box> </section> <section id="offset-subsection"> <h4 id="offset-heading"><x-message href="#offset" autocapitalize></x-message></h4> <x-box id="offset-box"> <x-slider id="offset-slider" value="10" min="-100" max="100" step="1"></x-slider> <x-numberinput id="offset-input" value="10" min="-100" max="500" step="1" condensed> <x-stepper></x-stepper> </x-numberinput> </x-box> </section> <section id="seed-subsection"> <h4 id="seed-heading"><x-message href="#seed" autocapitalize></x-message></h4> <x-box id="seed-box"> <x-slider id="seed-slider" value="100" min="0" max="200" step="1"></x-slider> <x-numberinput id="seed-input" value="100" min="0" max="2000" step="1" condensed> <x-stepper></x-stepper> </x-numberinput> </x-box> </section> <section id="colors-subsection"> <h4 id="colors-heading"><x-message href="#colors" autocapitalize></x-message></h4> <x-box id="colors-box"> <x-colorselect value="rgba(255, 255, 255, 1)"></x-colorselect> <x-colorselect value="rgba(255, 255, 255, 1)"></x-colorselect> <x-colorselect value="rgba(255, 255, 255, 1)"></x-colorselect> <x-colorselect value="rgba(255, 255, 255, 1)"></x-colorselect> <x-colorselect value="rgba(255, 255, 255, 1)"></x-colorselect> </x-box> </section> <section id="blend-mode-subsection"> <h4><x-message href="#blend-mode" autocapitalize></x-message></h4> <x-select id="blend-mode-select"> <x-menu> <x-menuitem value="screen"> <x-label><x-message href="#blend-mode.screen" autocapitalize></x-message></x-label> </x-menuitem> <x-menuitem value="hard-light"> <x-label><x-message href="#blend-mode.hard-light" autocapitalize></x-message></x-label> </x-menuitem> <x-menuitem value="none"> <x-label><x-message href="#blend-mode.normal" autocapitalize></x-message></x-label> </x-menuitem> </x-menu> </x-select> </section> </section> <hr> <section id="preview-section"> <h3 id="preview-heading"><x-message href="#preview" autocapitalize></x-message></h3> <svg id="preview" part="preview" preserveAspectRatio="xMidYMid"></svg> </section> </template>
  `;
  static l = c` <template> <x-button id="generate-button" size="large"> <x-icon href="#generators-panel"></x-icon> <x-label><x-message href="#generate" autocapitalize></x-message></x-label> </x-button> </template>
  `;
  static _shadowStyleSheet = d`#size-subsection{display:flex}#size-subsection x-numberinput{width:100%;max-width:none}#size-subsection #height-box,#size-subsection #width-box{flex:1}#size-subsection #height-heading,#size-subsection #width-heading{margin-top:0}#size-subsection #aspect-ratio-button{align-self:flex-end;margin:0}#size-subsection #aspect-ratio-button x-icon{width:18px;height:18px;min-width:18px;margin:0 4px;color:#8c8c8c}#offset-subsection{margin-top:10px}#offset-subsection h4{margin:0}#offset-slider{flex:1}#offset-input{margin-left:10px;width:60px}#seed-subsection{margin-top:10px}#seed-subsection h4{margin:0}#seed-slider{flex:1}#seed-input{margin-left:10px;width:60px}#colors-subsection{margin-top:10px}#colors-subsection h4{margin:0}#colors-box{margin-top:7px}#colors-subsection x-colorselect{flex:1;margin:0 3px}#colors-subsection x-colorselect:first-child{margin-left:0}#colors-subsection x-colorselect:last-child{margin-right:0}#blend-mode-subsection{margin-top:14px}#blend-mode-select{width:100%}#preview{height:300px;shape-rendering:crispEdges}`;
  #m;
  constructor() {
    super();
    this["#width-input"].addEventListener("changestart", () => this.#h());
    this["#height-input"].addEventListener("changestart", () => this.#u());
    this["#aspect-ratio-button"].addEventListener("toggle", () => this.#c());
    this["#offset-box"].addEventListener("changestart", () => this.#d());
    this["#seed-box"].addEventListener("changestart", () => this.#b());
    this["#colors-box"].addEventListener("changestart", () => this.#g());
    this["#blend-mode-select"].addEventListener("change", () => this.#y());
    this["#generate-button"].addEventListener("click", () => this.#f());
  }
  connectedCallback() {
    this.#m = f(this, "bx-editor");
    let C = w.getConfig("bx-firegenerator:width", 300);
    let D = w.getConfig("bx-firegenerator:height", 480);
    let E = w.getConfig("bx-firegenerator:offset", 0);
    let F = w.getConfig("bx-firegenerator:seed", 100);
    let G = w.getConfig("bx-firegenerator:colors", k);
    let H = w.getConfig("bx-firegenerator:blendMode", "screen");
    let I = w.getConfig("bx-firegenerator:preserveAspectRatio", false);
    this["#width-input"].value = C;
    this["#height-input"].value = D;
    this["#aspect-ratio-button"].toggled = I;
    this["#aspect-ratio-icon"].href = I ? "#lock-on" : "#lock-off";
    this["#offset-slider"].value = r(E * 100, 2);
    this["#offset-input"].value = r(E * 100, 2);
    this["#seed-slider"].value = F;
    this["#seed-input"].value = F;
    this["#blend-mode-select"].value = H;
    for (let J = 0; J < 5; J += 1) {
      this["#colors-box"].children[J].value = G[J];
    }
    this.#x();
  }
  #h() {
    let C;
    let D;
    let E = this["#width-input"].value / this["#height-input"].value;
    this["#width-input"].addEventListener(
      "change",
      (C = () => {
        if (this["#aspect-ratio-button"].toggled) {
          let F = this["#width-input"].value / E;
          F = p(F, 1, Infinity, 0);
          this["#height-input"].value = F;
        }
        this.#x();
      })
    );
    this["#width-input"].addEventListener(
      "changeend",
      (D = () => {
        this["#width-input"].removeEventListener("change", C);
        this["#width-input"].removeEventListener("changeend", D);
        w.setConfig("bx-firegenerator:width", this["#width-input"].value);
        w.setConfig("bx-firegenerator:height", this["#height-input"].value);
      })
    );
  }
  #u() {
    let C;
    let D;
    let E = this["#height-input"].value / this["#width-input"].value;
    this["#height-input"].addEventListener(
      "change",
      (C = () => {
        if (this["#aspect-ratio-button"].toggled) {
          let F = this["#height-input"].value / E;
          F = p(F, 1, Infinity, 0);
          this["#width-input"].value = F;
        }
        this.#x();
      })
    );
    this["#height-input"].addEventListener(
      "changeend",
      (D = () => {
        this["#height-input"].removeEventListener("change", C);
        this["#height-input"].removeEventListener("changeend", D);
        w.setConfig("bx-firegenerator:width", this["#width-input"].value);
        w.setConfig("bx-firegenerator:height", this["#height-input"].value);
      })
    );
  }
  #c() {
    let C = this["#aspect-ratio-button"].toggled;
    w.setConfig("bx-firegenerator:preserveAspectRatio", C);
    this["#aspect-ratio-icon"].href = C ? "#lock-on" : "#lock-off";
  }
  #d() {
    let C;
    let D;
    this["#offset-box"].addEventListener(
      "change",
      (C = (E) => {
        if (E.target === this["#offset-slider"]) {
          this["#offset-input"].value = this["#offset-slider"].value;
        } else if (E.target === this["#offset-input"]) {
          this["#offset-slider"].value = this["#offset-input"].value;
        }
        this.#x();
      })
    );
    this["#offset-box"].addEventListener(
      "changeend",
      (D = () => {
        this["#offset-box"].removeEventListener("change", C);
        this["#offset-box"].removeEventListener("changeend", D);
        w.setConfig(
          "bx-firegenerator:offset",
          this["#offset-slider"].value / 100
        );
      })
    );
  }
  #b() {
    let C;
    let D;
    this["#seed-box"].addEventListener(
      "change",
      (C = (E) => {
        if (E.target === this["#seed-slider"]) {
          this["#seed-input"].value = this["#seed-slider"].value;
        } else if (E.target === this["#seed-input"]) {
          this["#seed-slider"].value = this["#seed-input"].value;
        }
        this.#x();
      })
    );
    this["#seed-box"].addEventListener(
      "changeend",
      (D = () => {
        this["#seed-box"].removeEventListener("change", C);
        this["#seed-box"].removeEventListener("changeend", D);
        w.setConfig("bx-firegenerator:seed", this["#seed-slider"].value);
      })
    );
  }
  #g() {
    let C;
    let D;
    this["#colors-box"].addEventListener(
      "change",
      (C = (E) => {
        this.#x();
      })
    );
    this["#colors-box"].addEventListener(
      "changeend",
      (D = () => {
        this["#colors-box"].removeEventListener("change", C);
        this["#colors-box"].removeEventListener("changeend", D);
        let E = [...this["#colors-box"].children].map((F) => F.value);
        w.setConfig("bx-firegenerator:colors", E);
      })
    );
  }
  #y() {
    let C = this["#blend-mode-select"].value;
    w.setConfig("bx-firegenerator:blendMode", C);
    this.#x();
  }
  #f() {
    let C = this["#preview"].cloneNode(true);
    C.style.shapeRendering = "crispEdges";
    this.#m.board.undoManager.checkpoint(
      ["#generators.fire"],
      "#generators-panel"
    );
    this.#m.board.insertArtwork(C);
  }
  #x() {
    let C = this["#width-input"].value;
    let D = this["#height-input"].value;
    let E = this["#offset-input"].value;
    let F = this["#seed-input"].value;
    let G = [...this["#colors-box"].children].map((I) => I.value);
    let H = this["#blend-mode-select"].value;
    this["#preview"].innerHTML = this.#k(C, D, E, F, G, H);
    this["#preview"].setAttribute("viewBox", "0 0 " + C + " " + D);
  }
  #k(C = 300, D = 480, E = 0, F = 100, G = k, H = "screen") {
    let I = new z(F === 100 ? 809 : F);
    let J = E / 100;
    let [K, ...L] = G;
    let M = "";
    for (let N = 0; N <= 3; N += 1) {
      for (let O = 0; O < N * 2; O += 1) {
        let P = I() > 0.8;
        let Q = {
          x: C / 2,
          y: D,
        };
        let R = {
          x: C / 2 + I() * (C / 2),
          y: P ? -20 : 0,
        };
        M += this.#v(Q, R, C / 4, D, P, L, H, J, I);
      }
      J += 0.15;
    }
    return (
      '<g><rect width="' +
      C +
      '" height="' +
      D +
      '" style="fill: ' +
      K +
      ';"></rect>' +
      M +
      "</g>"
    );
  }
  #v(C, D, E, F, G, H, I, J, K) {
    let L = E + Math.round(K() * 50);
    let M = 10 + Math.round(K() * 10);
    let N = K() * 100;
    let O = 0.01 + K() * 0.008;
    let P = 40 + K() * 40;
    let Q = F;
    let R = 100 + Math.round(K() * 400);
    let S = K() * 100;
    let T = S;
    let U = [];
    let V = "";
    let W = (X, Y) => {
      if (U.length) {
        if (X >= U.length) {
          X = U.length - 1;
        }
        if (X < 0) {
          X = 0;
        }
        let Z = M - L;
        let a0 = (X / U.length) * 100;
        let a1 = ((L + (Z / 100) * a0) / 2 / 100) * Y;
        return {
          x: U[X].x + a1,
          y: U[X].y,
        };
      }
      return {
        x: 0,
        y: 0,
      };
    };
    {
      let X = C.y - D.y;
      let Y = C.x - D.x;
      let Z = C.y;
      while (Z-- >= D.y) {
        let a0 = C.x + (Y - (Y / X) * Z);
        let a1 = Math.sin(Z * O + N);
        U.push({
          y: Z,
          x: a0 + ((a1 * P) / 2 + P / 2),
        });
      }
    }
    S = m(T, U.length, J);
    if ((F = m(Q, R, J)) > 0) {
      S = Math.round(S);
      let a2;
      let a3 = (F = Math.round(F)) / 6;
      a2 = G
        ? [
            [0, S],
            [10, S - a3 * 0.2],
            [20, S - a3 * 0.4],
            [30, S - a3 * 0.6],
          ]
        : [
            [0, S],
            [10, S - a3 * 0.2],
            [20, S - a3 * 0.4],
            [30, S - a3 * 0.6],
            [40, S - a3 * 0.8],
            [50, S - a3 * 1],
            [60, S - a3 * 1.2],
            [70, S - a3 * 1.4],
            [80, S - a3 * 1.6],
            [90, S - a3 * 1.8],
            [90, S - a3 * 2],
            [90, S - a3 * 2.2],
            [80, S - a3 * 2.4],
            [70, S - a3 * 2.6],
            [60, S - a3 * 2.8],
            [50, S - a3 * 3],
            [40, S - a3 * 3.1],
            [30, S - a3 * 3.2],
            [20, S - a3 * 3.3],
            [10, S - a3 * 3.4],
            [0, S - a3 * 3.5],
            [-10, S - a3 * 3.4],
            [-20, S - a3 * 3.3],
            [-30, S - a3 * 3.2],
            [-40, S - a3 * 3.1],
            [-50, S - a3 * 3],
            [-60, S - a3 * 2.8],
            [-70, S - a3 * 2.6],
            [-80, S - a3 * 2.4],
            [-90, S - a3 * 2.2],
            [-90, S - a3 * 2],
            [-90, S - a3 * 1.8],
            [-80, S - a3 * 1.6],
            [-70, S - a3 * 1.4],
            [-60, S - a3 * 1.2],
            [-50, S - a3 * 1],
            [-40, S - a3 * 0.8],
            [-30, S - a3 * 0.6],
            [-20, S - a3 * 0.4],
            [-10, S - a3 * 0.2],
            [0, S - a3 * 0],
          ];
      let a4 = [];
      for (let a5 = 0; a5 < a2.length; a5 += 1) {
        let a6 = [];
        let a7 = W(Math.round(a2[a5][1]), a2[a5][0]);
        a6.push(a7.x);
        a6.push(a7.y);
        a4.push((a5 === 0 ? "M" : "L") + a6.join(" "));
      }
      V = a4.join(" ") + "Z";
    }
    return (
      '<path d="' +
      V +
      '" style="' +
      ("fill: " +
        (G ? H[0] : H[Math.floor(K() * H.length)]) +
        "; stroke: none; opacity: " +
        (G ? 1 : 0.8) +
        "; mix-blend-mode: " +
        I +
        ";") +
      '"></path>'
    );
  }
}
customElements.define("bx-firegenerator", v);
