import B from "../../libs/xel/xel.js";
import D from "../../libs/chroma/chroma.js";
import E from "../../libs/delaunator/delaunator.js";
import G from "../../libs/seed-random/seed-random.js";
import H from "../../libs/color/color.js";
import "../../libs/css-parser/css-parser.js";
import "../../libs/paper/paper.js";
import "../../libs/dom-purify/dom-purify.js";
import I from "../../libs/dexie/dexie.js";
import J from "../../libs/typesense/typesense.js";
import "../../libs/pako/pako.js";
const s = ["circle", "ellipse", "line", "path", "polygon", "polyline", "rect"];
const r = ["text", "textPath", "tspan"];
const f = [...s, ...r, "foreignObject", "image"];
const c = [...s, ...r];
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
    appliesTo: [...f, "svg", "g", "a", "use"],
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
    appliesTo: [...f, "use"],
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
    appliesTo: [...f, "svg", "g", "a", "use"],
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
      ...f,
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
    appliesTo: [...f, "svg", "g", "a", "use"],
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
    appliesTo: [...f, "textPath", "tspan", "svg", "g", "a", "use"],
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
    appliesTo: [...c],
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
    appliesTo: [...c],
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
    appliesTo: [...c],
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
    appliesTo: [...f, "textPath", "tspan", "g", "a", "svg", "use"],
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
      ...f,
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
    appliesTo: [...f, "g", "a", "svg", "use"],
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
      ...f,
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
      ...f,
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
    appliesTo: [...c],
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
    appliesTo: [...f, "svg", "g", "a", "use"],
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
    appliesTo: [...c],
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
    appliesTo: [...c],
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
    appliesTo: [...c],
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
    appliesTo: [...c],
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
    appliesTo: [...c],
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
    appliesTo: [...c],
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
    appliesTo: [...c],
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
    appliesTo: [...c],
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
    appliesTo: [...f, "use"],
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
    appliesTo: [...f, "text", "textPath", "tspan"],
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
  .map((K) => K.presentationAttributeName)
  .filter((K) => K);
let d = (K, L = 0) => {
  let M = Math.pow(10, L);
  return Math.round((K + Number.EPSILON) * M) / M;
};
let p = (K, L, M = Infinity, O = null) => {
  if (O !== null) {
    K = d(K, O);
  }
  if (K < L) {
    K = L;
  } else if (K > M) {
    K = M;
  }
  return K;
};
class b extends H {
  get type() {
    return "<color>";
  }
  static fromString(K, L = false) {
    if (L) {
      return new b(K);
    }
    {
      let M = null;
      try {
        M = new b(K);
      } catch (O) {}
      return M;
    }
  }
}
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
let u = (K, ...L) => {
  let M = [];
  for (let Q = 0; Q < K.length; Q += 1) {
    M.push(K[Q]);
    if (L[Q] !== undefined) {
      M.push(L[Q]);
    }
  }
  let O = M.join("");
  m.innerHTML = O;
  let P = document.importNode(m.content, true);
  if (P.children.length === 1) {
    return P.firstElementChild;
  } else {
    return P;
  }
};
let g = (K, ...L) => {
  let M = [];
  for (let Q = 0; Q < K.length; Q += 1) {
    M.push(K[Q]);
    if (L[Q] !== undefined) {
      M.push(L[Q]);
    }
  }
  let O = M.join("");
  let P = new CSSStyleSheet();
  P.replaceSync(O);
  return P;
};
let x = (K, ...L) => {
  let M = [];
  for (let R = 0; R < K.length; R += 1) {
    M.push(K[R]);
    if (L[R] !== undefined) {
      M.push(L[R]);
    }
  }
  let O =
    '<svg id="x-stub" xmlns="http://www.w3.org/2000/svg">' +
    M.join("") +
    "</svg>";
  m.innerHTML = O;
  let P = document.importNode(m.content, true);
  let Q = P.querySelector("svg#x-stub");
  if (Q.children.length === 1) {
    return Q.firstElementChild;
  }
  for (let S of [...Q.childNodes]) {
    P.appendChild(S);
  }
  Q.remove();
  return P;
};
new (class {
  #e;
  #t = null;
  #a = {};
  constructor() {
    this.#e = new I("GoogleFontsManager");
    this.#e.version(1).stores({
      cache: "family",
    });
  }
  search(K = "", L = "alphabetical", M = "all", O = "all", P = "all") {
    return new Promise(async (Q) => {
      await this.#i();
      let R = [];
      let S = this.#e.cache;
      if (K.trim() !== "") {
        S = S.filter((W) =>
          W.family.toLowerCase().includes(K.trim().toLowerCase())
        );
      }
      if (M !== "all") {
        S = S.filter((W) => W.category === M);
      }
      if (O !== "all") {
        S = S.filter((W) => W.subsets.includes(O));
      }
      R = await S.toArray();
      if (L === "date") {
        R = R.sort((W, X) => (W.dateRank > X.dateRank ? -1 : 1));
      } else if (L === "popularity") {
        R = R.sort((W, X) => (W.popularityRank > X.popularityRank ? -1 : 1));
      } else if (L === "trending") {
        R = R.sort((W, X) => (W.trendingRank > X.trendingRank ? -1 : 1));
      }
      if (P !== "all") {
        R = R.slice(P * 40, (P + 1) * 40);
      }
      Q(R);
    });
  }
  refresh() {
    return new Promise(async (K, L) => {
      let M;
      if (this.#t === null) {
        this.#t = new J.Client({
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
        M = await this.#t.collections("googleFonts").documents().export();
      } catch (P) {
        return L(P);
      }
      let O = M.split("\n")
        .map((Q) => JSON.parse(Q))
        .map((Q) => ({
          family: Q.family,
          faces: Q.faces,
          category: Q.category,
          subsets: Q.subsets,
          license: Q.license,
          thumbnail: Q.thumbnail,
          urls: Q.urls,
          dateRank: Q.dateRank,
          popularityRank: Q.popularityRank,
          trendingRank: Q.trendingRank,
          pageURL: "https://fonts.google.com/specimen/" + Q.id,
          cachedTime: Date.now(),
        }));
      await this.#e.cache.clear();
      await this.#e.cache.bulkPut(O);
      K();
    });
  }
  getFontFaceRulesFromUrl(K, L = false) {
    return new Promise(async (M) => {
      let O = [];
      await this.#i();
      if (L) {
        let P = await this.#n(K);
        for (let Q of P.cssRules) {
          if (Q.type === CSSRule.FONT_FACE_RULE) {
            O.push(Q);
          }
        }
      } else {
        let R = [];
        let S = new URL(K);
        let W = S.searchParams.get("display") || "auto";
        if (K.startsWith("https://fonts.googleapis.com/css?")) {
          let X = S.searchParams.get("family");
          X.split("|");
          S.searchParams.get("subset");
          let Y = {
            regular: "400",
            bold: "700",
            italic: "400italic",
            bolditalic: "700italic",
            r: "400",
            b: "700",
            i: "400italic",
          };
          for (let Z of X.split("|")) {
            let a0 = [];
            let [a1, a2] = Z.split(":");
            for (let a3 of a2.split(",")) {
              a3 = Y[a3] || a3;
              a0.push(a3);
            }
            R.push({
              family: a1,
              faceNames: a0,
            });
          }
        } else if (K.startsWith("https://fonts.googleapis.com/css2?")) {
          let a4 = S.searchParams.getAll("family");
          for (let a5 of a4) {
            let [a6, a7] = a5.split(":");
            if (a7 === undefined) {
              R.push({
                family: a6,
                faceNames: ["400"],
              });
            } else {
              let a8 = [];
              let [a9, aa] = a7.split("@");
              let ab = a9.split(",");
              let ac = aa.split(";");
              for (let ad of ac) {
                let ae = {
                  wght: "400",
                  ital: "0",
                };
                for (let af = 0; af < ab.length; af += 1) {
                  ae[ab[af]] = ad.split(",")[af];
                }
                a8.push(ae.wght + (ae.ital === "1" ? "italic" : ""));
              }
              R.push({
                family: a6,
                faceNames: a8,
              });
            }
          }
        }
        {
          let ag = this.#e.cache;
          for (let { family, faceNames } of R) {
            let aj = await ag.get({
              family: family,
            });
            if (aj) {
              for (let ak of faceNames) {
                let al = aj.urls[ak];
                if (al) {
                  let am = ak.substring(0, 3);
                  let an = ak.includes("italic") ? "italic" : "normal";
                  let ao = [];
                  for (let ar of aj.subsets) {
                    if (h[ar]) {
                      ao.push(h[ar]);
                    }
                  }
                  if (ao.length === 0) {
                    ao = "U+0-10FFFF";
                  }
                  let ap = ao.join(",");
                  let aq = g`
                    @font-face {
                      font-family: "${family}";
                      font-style: ${an};
                      font-weight: ${am};
                      font-display: ${W};
                      font-unicode-range: ${ap};
                      src: url(${al});
                    }
                  `;
                  O.push(aq.cssRules[0]);
                }
              }
            }
          }
        }
      }
      M(O);
    });
  }
  getFamilyDescriptor(K) {
    return new Promise(async (L) => {
      await this.#i();
      L((await this.#e.cache.where("family").equals(K).toArray())[0] || null);
    });
  }
  #n(K) {
    return new Promise(async (L) => {
      let M = null;
      if (this.#a[K]) {
        M = this.#a[K];
      } else {
        let O = await fetch(K);
        let P = await O.text();
        M = new CSSStyleSheet();
        M.replaceSync(P);
        this.#a[K] = M;
      }
      L(M);
    });
  }
  #i() {
    return new Promise(async (K) => {
      let L = await this.#e.cache.count();
      let M = true;
      if (L > 0) {
        let O = await this.#e.cache.get("Roboto");
        if (O) {
          let P = 1296000000;
          M = Date.now() - O.cachedTime > P;
        }
      }
      if (L === 0 || M === true) {
        await this.refresh();
      }
      K();
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
let y = (K, L, M) => K.split(L).join(M);
let k = (K) => {
  K = K.toLowerCase();
  K = y(K, " ", "");
  K = y(K, "-", "");
  let L = "400";
  if ((K = y(K, "_", "")).includes("thin") || K.includes("hairline")) {
    L = "100";
  } else if (K.includes("extralight") || K.includes("ultralight")) {
    L = "200";
  } else if (K.includes("light")) {
    L = "300";
  } else if (K.includes("medium")) {
    L = "500";
  } else if (K.includes("semibold") || K.includes("demibold")) {
    L = "600";
  } else if (K.includes("extrabold") || K.includes("ultrabold")) {
    L = "800";
  } else if (K.includes("bold")) {
    L = "700";
  } else if (K.includes("black") || K.includes("heavy")) {
    L = "900";
  }
  return L;
};
let v = (K) => {
  K = K.toLowerCase();
  K = y(K, " ", "");
  K = y(K, "-", "");
  let L = "normal";
  if ((K = y(K, "_", "")).includes("italic")) {
    L = "italic";
  } else if (K.includes("oblique")) {
    L = "oblique";
  }
  return L;
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
    this.#e = new I("LocalFontsManager");
    this.#e.version(1).stores({
      cache: "family",
    });
    this.#e
      .version(2)
      .stores({
        cache: "family",
      })
      .upgrade((K) => K.cache.clear());
    if (window.queryLocalFonts === undefined) {
      this.#l = "no-api";
    } else {
      navigator.permissions
        .query({
          name: "local-fonts",
        })
        .then((K) => {
          if (K.state === "granted") {
            this.refresh();
          } else if (K.state !== "prompt") {
            this.#l = "no-permission";
          }
        });
    }
  }
  search(K = "", L = "all") {
    return new Promise(async (M) => {
      let O = [];
      let P = this.#e.cache;
      if (K.trim() !== "") {
        P = P.filter((Q) =>
          Q.family.toLowerCase().includes(K.trim().toLowerCase())
        );
      }
      O = await P.toArray();
      if (L !== "all") {
        O = O.slice(L * 40, (L + 1) * 40);
      }
      M(O);
    });
  }
  refresh() {
    return new Promise(async (K, L) => {
      let M;
      try {
        M = await this.getLocalFontsMetadata(true);
      } catch (P) {
        return L(P);
      }
      let O = [];
      for (let Q of M) {
        let R = k(Q.style) + (v(Q.style) === "italic" ? "i" : "");
        let S = O.find((W) => W.family === Q.family);
        if (S) {
          if (S.faces.includes(R) === false) {
            S.faces.push(R);
          }
        } else {
          let W = {
            family: Q.family,
            faces: [R],
          };
          O.push(W);
        }
      }
      for (let X of O) {
        X.faces.sort();
      }
      await this.#e.cache.clear();
      await this.#e.cache.bulkPut(O);
      this.#l = "ready";
      K();
    });
  }
  getLocalFontsMetadata(K = false) {
    return new Promise(async (L, M) => {
      if (this.status === "no-api") {
        L([]);
      } else {
        if (this.#o.length < 10 || K) {
          try {
            this.#o = await window.queryLocalFonts();
          } catch (O) {
            return M({
              message: O.message,
              name: O.name,
            });
          }
        }
        L(this.#o);
      }
    });
  }
  getCacheSize() {
    return new Promise(async (K) => {
      K(await this.#e.cache.count());
    });
  }
  getFamilyDescriptor(K) {
    return new Promise(async (L) => {
      L((await this.#e.cache.where("family").equals(K).toArray())[0] || null);
    });
  }
  getFamilyWeights(K) {
    return new Promise(async (L) => {
      let M = await this.getFamilyDescriptor(K);
      if (M) {
        let O = new Set();
        for (let P of M.faces) {
          let Q = P.substring(0, 3);
          O.add(Q);
        }
        L([...O]);
      } else {
        L(["400"]);
      }
    });
  }
})();
document.createElementNS("http://www.w3.org/2000/svg", "svg");
let w = (K, L) => {
  let M;
  let O = (Q, R, S, W) =>
    S & 8
      ? new DOMPoint(
          Q.x + ((R.x - Q.x) * (W.height - Q.y)) / (R.y - Q.y),
          W.height
        )
      : S & 4
      ? new DOMPoint(Q.x + ((R.x - Q.x) * (W.y - Q.y)) / (R.y - Q.y), W.y)
      : S & 2
      ? new DOMPoint(
          W.width,
          Q.y + ((R.y - Q.y) * (W.width - Q.x)) / (R.x - Q.x)
        )
      : S & 1
      ? new DOMPoint(W.x, Q.y + ((R.y - Q.y) * (W.x - Q.x)) / (R.x - Q.x))
      : null;
  let P = (Q, R) => {
    let S = 0;
    if (Q.x < R.x) {
      S |= 1;
    } else if (Q.x > R.width) {
      S |= 2;
    }
    if (Q.y < R.y) {
      S |= 4;
    } else if (Q.y > R.height) {
      S |= 8;
    }
    return S;
  };
  for (let Q = 1; Q <= 8; Q *= 2) {
    let R = L[L.length - 1];
    let S = !(P(R, K) & Q);
    M = [];
    for (let W = 0; W < L.length; W++) {
      let X = L[W];
      let Y = !(P(X, K) & Q);
      if (Y !== S) {
        M.push(O(R, X, Q, K));
      }
      if (Y) {
        M.push(X);
      }
      R = X;
      S = Y;
    }
    if (!(L = M).length) {
      break;
    }
  }
  return M;
};
const N = [
  ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"],
  ["#e63946", "#f1faee", "#a8dadc", "#457b9d", "#1d3557"],
  ["#ffcdb2", "#ffb4a2", "#e5989b", "#b5838d", "#6d6875"],
  ["#000000", "#14213d", "#fca311", "#e5e5e5", "#ffffff"],
  ["#003049", "#d62828", "#f77f00", "#fcbf49", "#eae2b7"],
  ["#f4f1de", "#e07a5f", "#3d405b", "#81b29a", "#f2cc8f"],
  ["#606c38", "#283618", "#fefae0", "#dda15e", "#bc6c25"],
  ["#006d77", "#83c5be", "#edf6f9", "#ffddd2", "#e29578"],
  ["#ef476f", "#ffd166", "#06d6a0", "#118ab2", "#073b4c"],
  ["#2b2d42", "#8d99ae", "#edf2f4", "#ef233c", "#d90429"],
  ["#ffb5a7", "#fcd5ce", "#f8edeb", "#f9dcc4", "#fec89a"],
  ["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"],
  ["#f6bd60", "#f7ede2", "#f5cac3", "#84a59d", "#f28482"],
  ["#8ecae6", "#219ebc", "#023047", "#ffb703", "#fb8500"],
  ["#d8e2dc", "#ffe5d9", "#ffcad4", "#f4acb7", "#9d8189"],
  ["#3d5a80", "#98c1d9", "#e0fbfc", "#ee6c4d", "#293241"],
  ["#22223b", "#4a4e69", "#9a8c98", "#c9ada7", "#f2e9e4"],
  ["#05668d", "#028090", "#00a896", "#02c39a", "#f0f3bd"],
  ["#8e9aaf", "#cbc0d3", "#efd3d7", "#feeafa", "#dee2ff"],
  ["#cdb4db", "#ffc8dd", "#ffafcc", "#bde0fe", "#a2d2ff"],
  ["#011627", "#fdfffc", "#2ec4b6", "#e71d36", "#ff9f1c"],
  ["#1a535c", "#4ecdc4", "#f7fff7", "#ff6b6b", "#ffe66d"],
  ["#ffa69e", "#faf3dd", "#b8f2e6", "#aed9e0", "#5e6472"],
  ["#ccd5ae", "#e9edc9", "#fefae0", "#faedcd", "#d4a373"],
  ["#335c67", "#fff3b0", "#e09f3e", "#9e2a2b", "#540b0e"],
  ["#cad2c5", "#84a98c", "#52796f", "#354f52", "#2f3e46"],
  ["#355070", "#6d597a", "#b56576", "#e56b6f", "#eaac8b"],
  ["#ff9f1c", "#ffbf69", "#ffffff", "#cbf3f0", "#2ec4b6"],
  ["#5f0f40", "#9a031e", "#fb8b24", "#e36414", "#0f4c5c"],
  ["#f08080", "#f4978e", "#f8ad9d", "#fbc4ab", "#ffdab9"],
  ["#555b6e", "#89b0ae", "#bee3db", "#faf9f9", "#ffd6ba"],
  ["#0081a7", "#00afb9", "#fdfcdc", "#fed9b7", "#f07167"],
  ["#f72585", "#7209b7", "#3a0ca3", "#4361ee", "#4cc9f0"],
  ["#03045e", "#0077b6", "#00b4d8", "#90e0ef", "#caf0f8"],
  ["#463f3a", "#8a817c", "#bcb8b1", "#f4f3ee", "#e0afa0"],
  ["#353535", "#3c6e71", "#ffffff", "#d9d9d9", "#284b63"],
  ["#ecf8f8", "#eee4e1", "#e7d8c9", "#e6beae", "#b2967d"],
  ["#283d3b", "#197278", "#edddd4", "#c44536", "#772e25"],
  ["#d4e09b", "#f6f4d2", "#cbdfbd", "#f19c79", "#a44a3f"],
  ["#cfdbd5", "#e8eddf", "#f5cb5c", "#242423", "#333533"],
  ["#7bdff2", "#b2f7ef", "#eff7f6", "#f7d6e0", "#f2b5d4"],
  ["#50514f", "#f25f5c", "#ffe066", "#247ba0", "#70c1b3"],
  ["#9c89b8", "#f0a6ca", "#efc3e6", "#f0e6ef", "#b8bedd"],
  ["#588b8b", "#ffffff", "#ffd5c2", "#f28f3b", "#c8553d"],
  ["#c9cba3", "#ffe1a8", "#e26d5c", "#723d46", "#472d30"],
  ["#247ba0", "#70c1b3", "#b2dbbf", "#f3ffbd", "#ff1654"],
  ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"],
  ["#ffffff", "#84dcc6", "#a5ffd6", "#ffa69e", "#ff686b"],
  ["#0b132b", "#1c2541", "#3a506b", "#5bc0be", "#6fffe9"],
  ["#390099", "#9e0059", "#ff0054", "#ff5400", "#ffbd00"],
  ["#f7b267", "#f79d65", "#f4845f", "#f27059", "#f25c54"],
  ["#00296b", "#003f88", "#00509d", "#fdc500", "#ffd500"],
  ["#6f1d1b", "#bb9457", "#432818", "#99582a", "#ffe6a7"],
  ["#70d6ff", "#ff70a6", "#ff9770", "#ffd670", "#e9ff70"],
  ["#fe938c", "#e6b89c", "#ead2ac", "#9cafb7", "#4281a4"],
  ["#dad7cd", "#a3b18a", "#588157", "#3a5a40", "#344e41"],
  ["#fffcf2", "#ccc5b9", "#403d39", "#252422", "#eb5e28"],
  ["#ffffff", "#00171f", "#003459", "#007ea7", "#00a8e8"],
  ["#233d4d", "#fe7f2d", "#fcca46", "#a1c181", "#619b8a"],
  ["#0d3b66", "#faf0ca", "#f4d35e", "#ee964b", "#f95738"],
  ["#ff99c8", "#fcf6bd", "#d0f4de", "#a9def9", "#e4c1f9"],
  ["#4f000b", "#720026", "#ce4257", "#ff7f51", "#ff9b54"],
  ["#001427", "#708d81", "#f4d58d", "#bf0603", "#8d0801"],
  ["#eee2df", "#eed7c5", "#c89f9c", "#c97c5d", "#b36a5e"],
  ["#220901", "#621708", "#941b0c", "#bc3908", "#f6aa1c"],
  ["#0d1b2a", "#1b263b", "#415a77", "#778da9", "#e0e1dd"],
  ["#f7d1cd", "#e8c2ca", "#d1b3c4", "#b392ac", "#735d78"],
  ["#6b9080", "#a4c3b2", "#cce3de", "#eaf4f4", "#f6fff8"],
  ["#386641", "#6a994e", "#a7c957", "#f2e8cf", "#bc4749"],
  ["#ffac81", "#ff928b", "#fec3a6", "#efe9ae", "#cdeac0"],
  ["#540d6e", "#ee4266", "#ffd23f", "#3bceac", "#0ead69"],
  ["#ecc8af", "#e7ad99", "#ce796b", "#c18c5d", "#495867"],
  ["#16697a", "#489fb5", "#82c0cc", "#ede7e3", "#ffa62b"],
  ["#ed6a5a", "#f4f1bb", "#9bc1bc", "#5ca4a9", "#e6ebe0"],
  ["#64a6bd", "#90a8c3", "#ada7c9", "#d7b9d5", "#f4cae0"],
  ["#565264", "#706677", "#a6808c", "#ccb7ae", "#d6cfcb"],
  ["#2d3142", "#bfc0c0", "#ffffff", "#ef8354", "#4f5d75"],
  ["#495867", "#577399", "#bdd5ea", "#f7f7ff", "#fe5f55"],
  ["#2d3142", "#4f5d75", "#bfc0c0", "#ffffff", "#ef8354"],
  ["#177e89", "#084c61", "#db3a34", "#ffc857", "#323031"],
  ["#f9dbbd", "#ffa5ab", "#da627d", "#a53860", "#450920"],
  ["#227c9d", "#17c3b2", "#ffcb77", "#fef9ef", "#fe6d73"],
  ["#114b5f", "#1a936f", "#88d498", "#c6dabf", "#f3e9d2"],
  ["#9381ff", "#b8b8ff", "#f8f7ff", "#ffeedd", "#ffd8be"],
  ["#ffbc42", "#d81159", "#8f2d56", "#218380", "#73d2de"],
  ["#bee9e8", "#62b6cb", "#1b4965", "#cae9ff", "#5fa8d3"],
  ["#3d348b", "#7678ed", "#f7b801", "#f18701", "#f35b04"],
  ["#07beb8", "#3dccc7", "#68d8d6", "#9ceaef", "#c4fff9"],
  ["#dcdcdd", "#c5c3c6", "#46494c", "#4c5c68", "#1985a1"],
  ["#fdc5f5", "#f7aef8", "#b388eb", "#8093f1", "#72ddf7"],
  ["#bce784", "#5dd39e", "#348aa7", "#525174", "#513b56"],
  ["#001524", "#15616d", "#ffecd1", "#ff7d00", "#78290f"],
  ["#231942", "#5e548e", "#9f86c0", "#be95c4", "#e0b1cb"],
  ["#461220", "#8c2f39", "#b23a48", "#fcb9b2", "#fed0bb"],
  ["#f9c80e", "#f86624", "#ea3546", "#662e9b", "#43bccd"],
  ["#c9e4ca", "#87bba2", "#55828b", "#3b6064", "#364958"],
  ["#0a0908", "#22333b", "#eae0d5", "#c6ac8f", "#5e503f"],
  ["#132a13", "#31572c", "#4f772d", "#90a955", "#ecf39e"],
  ["#edeec9", "#dde7c7", "#bfd8bd", "#98c9a3", "#77bfa3"],
  ["#0c0f0a", "#ff206e", "#fbff12", "#41ead4", "#ffffff"],
  ["#f0ead2", "#dde5b6", "#adc178", "#a98467", "#6c584c"],
  ["#d0b8ac", "#f3d8c7", "#efe5dc", "#fbfefb", "#ffffff"],
  ["#cc5803", "#e2711d", "#ff9505", "#ffb627", "#ffc971"],
  ["#edafb8", "#f7e1d7", "#dedbd2", "#b0c4b1", "#4a5759"],
  ["#ee6055", "#60d394", "#aaf683", "#ffd97d", "#ff9b85"],
  ["#5bc0eb", "#fde74c", "#9bc53d", "#e55934", "#fa7921"],
  ["#3c1642", "#086375", "#1dd3b0", "#affc41", "#b2ff9e"],
  ["#e0fbfc", "#c2dfe3", "#9db4c0", "#5c6b73", "#253237"],
  ["#90f1ef", "#ffd6e0", "#ffef9f", "#c1fba4", "#7bf1a8"],
  ["#ef6351", "#f38375", "#f7a399", "#fbc3bc", "#ffe3e0"],
  ["#000814", "#001d3d", "#003566", "#ffc300", "#ffd60a"],
  ["#2c6e49", "#4c956c", "#fefee3", "#ffc9b9", "#d68c45"],
  ["#484a47", "#5c6d70", "#a37774", "#e88873", "#e0ac9d"],
  ["#edae49", "#d1495b", "#00798c", "#30638e", "#003d5b"],
  ["#202c39", "#283845", "#b8b08d", "#f2d492", "#f29559"],
  ["#0b3954", "#087e8b", "#bfd7ea", "#ff5a5f", "#c81d25"],
  ["#e7ecef", "#274c77", "#6096ba", "#a3cef1", "#8b8c89"],
  ["#ff6700", "#ebebeb", "#c0c0c0", "#3a6ea5", "#004e98"],
  ["#083d77", "#ebebd3", "#f4d35e", "#ee964b", "#f95738"],
  ["#250902", "#38040e", "#640d14", "#800e13", "#ad2831"],
  ["#dd6e42", "#e8dab2", "#4f6d7a", "#c0d6df", "#eaeaea"],
  ["#fbfbf2", "#e5e6e4", "#cfd2cd", "#a6a2a2", "#847577"],
  ["#ffc09f", "#ffee93", "#fcf5c7", "#a0ced9", "#adf7b6"],
  ["#a3a380", "#d6ce93", "#efebce", "#d8a48f", "#bb8588"],
  ["#00a6fb", "#0582ca", "#006494", "#003554", "#051923"],
  ["#cebebe", "#ece2d0", "#d5b9b2", "#a26769", "#6d2e46"],
  ["#2b2d42", "#8d99ae", "#edf2f4", "#ef233c", "#d80032"],
  ["#780116", "#f7b538", "#db7c26", "#d8572a", "#c32f27"],
  ["#ff6b35", "#f7c59f", "#efefd0", "#004e89", "#1a659e"],
  ["#d7263d", "#f46036", "#2e294e", "#1b998b", "#c5d86d"],
  ["#8cb369", "#f4e285", "#f4a259", "#5b8e7d", "#bc4b51"],
  ["#d3f8e2", "#e4c1f9", "#f694c1", "#ede7b1", "#a9def9"],
  ["#006ba6", "#0496ff", "#ffbc42", "#d81159", "#8f2d56"],
  ["#ffd6ff", "#e7c6ff", "#c8b6ff", "#b8c0ff", "#bbd0ff"],
  ["#55dde0", "#33658a", "#2f4858", "#f6ae2d", "#f26419"],
  ["#002642", "#840032", "#e59500", "#e5dada", "#02040f"],
  ["#585123", "#eec170", "#f2a65a", "#f58549", "#772f1a"],
  ["#e8d6cb", "#d0ada7", "#ad6a6c", "#5d2e46", "#b58db6"],
  ["#011627", "#f71735", "#41ead4", "#fdfffc", "#ff9f1c"],
  ["#cc8b86", "#f9eae1", "#7d4f50", "#d1be9c", "#aa998f"],
  ["#7a6c5d", "#2a3d45", "#ddc9b4", "#bcac9b", "#c17c74"],
  ["#0a1128", "#001f54", "#034078", "#1282a2", "#fefcfb"],
  ["#ffffff", "#ffcad4", "#b0d0d3", "#c08497", "#f7af9d"],
  ["#d88c9a", "#f2d0a9", "#f1e3d3", "#99c1b9", "#8e7dbe"],
  ["#05668d", "#427aa1", "#ebf2fa", "#679436", "#a5be00"],
  ["#2f4858", "#33658a", "#86bbd8", "#f6ae2d", "#f26419"],
  ["#f8ffe5", "#06d6a0", "#1b9aaa", "#ef476f", "#ffc43d"],
  ["#25ced1", "#ffffff", "#fceade", "#ff8a5b", "#ea526f"],
  ["#6f2dbd", "#a663cc", "#b298dc", "#b8d0eb", "#b9faf8"],
  ["#031d44", "#04395e", "#70a288", "#dab785", "#d5896f"],
  ["#1a1423", "#372549", "#774c60", "#b75d69", "#eacdc2"],
  ["#f79256", "#fbd1a2", "#7dcfb6", "#00b2ca", "#1d4e89"],
  ["#223843", "#eff1f3", "#dbd3d8", "#d8b4a0", "#d77a61"],
  ["#114b5f", "#028090", "#e4fde1", "#456990", "#f45b69"],
  ["#160f29", "#246a73", "#368f8b", "#f3dfc1", "#ddbea8"],
  ["#06aed5", "#086788", "#f0c808", "#fff1d0", "#dd1c1a"],
  ["#f3e9dc", "#c08552", "#5e3023", "#895737", "#dab49d"],
  ["#b0d0d3", "#c08497", "#f7af9d", "#f7e3af", "#f3eec3"],
  ["#b09e99", "#fee9e1", "#fad4c0", "#64b6ac", "#c0fdfb"],
  ["#292f36", "#4ecdc4", "#f7fff7", "#ff6b6b", "#ffe66d"],
  ["#0d1321", "#1d2d44", "#3e5c76", "#748cab", "#f0ebd8"],
  ["#1f2041", "#4b3f72", "#ffc857", "#119da4", "#19647e"],
  ["#f2d7ee", "#d3bcc0", "#a5668b", "#69306d", "#0e103d"],
  ["#a4243b", "#d8c99b", "#d8973c", "#bd632f", "#273e47"],
  ["#ff5e5b", "#d8d8d8", "#ffffea", "#00cecb", "#ffed66"],
  ["#2364aa", "#3da5d9", "#73bfb8", "#fec601", "#ea7317"],
  ["#f6511d", "#ffb400", "#00a6ed", "#7fb800", "#0d2c54"],
  ["#efc7c2", "#ffe5d4", "#bfd3c1", "#68a691", "#694f5d"],
  ["#022b3a", "#1f7a8c", "#bfdbf7", "#e1e5f2", "#ffffff"],
  ["#11151c", "#212d40", "#364156", "#7d4e57", "#d66853"],
  ["#000000", "#2f4550", "#586f7c", "#b8dbd9", "#f4f4f9"],
  ["#586ba4", "#324376", "#f5dd90", "#f68e5f", "#f76c5e"],
  ["#26547c", "#ef476f", "#ffd166", "#06d6a0", "#fffcf9"],
  ["#033f63", "#28666e", "#7c9885", "#b5b682", "#fedc97"],
  ["#ea8c55", "#c75146", "#ad2e24", "#81171b", "#540804"],
  ["#809bce", "#95b8d1", "#b8e0d2", "#d6eadf", "#eac4d5"],
  ["#01161e", "#124559", "#598392", "#aec3b0", "#eff6e0"],
  ["#533747", "#5f506b", "#6a6b83", "#76949f", "#86bbbd"],
  ["#b8d8ba", "#d9dbbc", "#fcddbc", "#ef959d", "#69585f"],
  ["#666a86", "#788aa3", "#92b6b1", "#b2c9ab", "#e8ddb5"],
  ["#faa275", "#ff8c61", "#ce6a85", "#985277", "#5c374c"],
  ["#faf3dd", "#c8d5b9", "#8fc0a9", "#68b0ab", "#4a7c59"],
  ["#004e64", "#00a5cf", "#9fffcb", "#25a18e", "#7ae582"],
  ["#133c55", "#386fa4", "#59a5d8", "#84d2f6", "#91e5f6"],
  ["#432371", "#714674", "#9f6976", "#cc8b79", "#faae7b"],
  ["#ddd8c4", "#a3c9a8", "#84b59f", "#69a297", "#50808e"],
  ["#d8dbe2", "#a9bcd0", "#58a4b0", "#373f51", "#1b1b1e"],
  ["#ddfff7", "#93e1d8", "#ffa69e", "#aa4465", "#462255"],
  ["#042a2b", "#5eb1bf", "#cdedf6", "#ef7b45", "#d84727"],
  ["#33658a", "#86bbd8", "#2f4858", "#f6ae2d", "#f26419"],
];
let U = (K, L, M = true) => {
  let O = K.closest(L);
  if (M && !O && K.getRootNode().host) {
    return U(K.getRootNode().host, L);
  } else {
    return O;
  }
};
class A extends HTMLElement {
  static #s = u` <template> <main id="main" part="main"></main> <footer id="footer" part="footer"></footer> </template>
  `;
  static #r = g`
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
  #f;
  constructor() {
    super();
    let K = this.constructor.t;
    let L = this.constructor.l;
    this.#f = this.attachShadow({
      mode: "closed",
    });
    this.#f.adoptedStyleSheets = [
      B.themeStyleSheet,
      A.#r,
      this.constructor._shadowStyleSheet,
    ];
    this.#f.append(document.importNode(A.#s.content, true));
    if (K) {
      this.#f
        .querySelector("#main")
        .append(document.importNode(K.content, true));
    }
    if (L) {
      this.#f
        .querySelector("#footer")
        .append(document.importNode(L.content, true));
    }
    for (let M of this.#f.querySelectorAll("[id]")) {
      this["#" + M.id] = M;
    }
    this.setAttribute("extends", "bx-generator");
    this.setAttribute("tabindex", "0");
  }
}
let { min, max, floor } = Math;
let z = ["#247ba0", "#70c1b3", "#b2dbbf", "#f3ffbd", "#ff1654"];
class V extends A {
  static t = u` <template> <section id="options-section"> <h3 id="options-heading"><x-message href="#options" autocapitalize></x-message></h3> <section id="size-subsection"> <x-box id="width-box" vertical> <h4 id="width-heading"><x-message href="#width" autocapitalize></x-message></h4> <x-numberinput id="width-input" value="600" min="1" condensed> <x-stepper></x-stepper> </x-numberinput> </x-box> <x-button id="aspect-ratio-button" togglable skin="flat"> <x-icon id="aspect-ratio-icon" href="#lock-on"></x-icon> </x-button> <x-box id="height-box" vertical> <h4 id="height-heading"><x-message href="#height" autocapitalize></x-message></h4> <x-numberinput id="height-input" value="400" min="1" condensed> <x-stepper></x-stepper> </x-numberinput> </x-box> </section> <section id="cell-size-subsection"> <h4 id="cell-size-heading"><x-message href="#cell-size" autocapitalize></x-message></h4> <x-box id="cell-size-box"> <x-slider id="cell-size-slider" value="10" min="2" max="100" step="1"></x-slider> <x-numberinput id="cell-size-input" value="10" min="2" max="100" step="1" suffix="%" condensed> <x-stepper></x-stepper> </x-numberinput> </x-box> </section> <section id="variance-subsection"> <h4 id="variance-heading"><x-message href="#variance" autocapitalize></x-message></h4> <x-box id="variance-box"> <x-slider id="variance-slider" value="10" min="2" max="100" step="1"></x-slider> <x-numberinput id="variance-input" value="10" min="2" max="100" step="1" suffix="%" condensed> <x-stepper></x-stepper> </x-numberinput> </x-box> </section> <section id="seed-subsection"> <h4 id="seed-heading"><x-message href="#seed" autocapitalize></x-message></h4> <x-box id="seed-box"> <x-slider id="seed-slider" value="100" min="0" max="200" step="1"></x-slider> <x-numberinput id="seed-input" value="100" min="0" max="200" step="1" condensed> <x-stepper></x-stepper> </x-numberinput> </x-box> </section> <section id="colors-subsection"> <h4 id="colors-heading"><x-message href="#colors" autocapitalize></x-message></h4> <x-box id="colors-box"> <x-colorselect spaces="srgb"></x-colorselect> <x-colorselect spaces="srgb"></x-colorselect> <x-colorselect spaces="srgb"></x-colorselect> <x-colorselect spaces="srgb"></x-colorselect> <x-colorselect spaces="srgb"></x-colorselect> </x-box> <x-button id="random-colors-button" condensed> <x-label><x-message href="#generate-random-colors" autocapitalize></x-message></x-label> </x-button> </section> </section> <hr> <section id="preview-section"> <h3 id="preview-heading"><x-message href="#preview" autocapitalize></x-message></h3> <svg id="preview" part="preview" preserveAspectRatio="xMidYMid"></svg> </section> </template>
  `;
  static l = u` <template> <x-button id="generate-button" size="large"> <x-icon href="#generators-panel"></x-icon> <x-label><x-message href="#generate" autocapitalize></x-message></x-label> </x-button> </template>
  `;
  static _shadowStyleSheet = g`#size-subsection{display:flex}#size-subsection x-numberinput{width:100%}#size-subsection #height-box,#size-subsection #width-box{flex:1}#size-subsection #height-heading,#size-subsection #width-heading{margin-top:0}#size-subsection #aspect-ratio-button{align-self:flex-end;margin:0}#size-subsection #aspect-ratio-button x-icon{width:18px;height:18px;min-width:18px;margin:0 4px;color:#8c8c8c}#cell-size-subsection{margin-top:14px}#cell-size-subsection h4{margin:0}#cell-size-slider{flex:1}#cell-size-input{margin-left:10px;width:60px}#variance-subsection{margin-top:10px}#variance-subsection h4{margin:0}#variance-slider{flex:1}#variance-input{margin-left:10px;width:60px}#seed-subsection{margin-top:10px}#seed-subsection h4{margin:0}#seed-slider{flex:1}#seed-input{margin-left:10px;width:60px}#colors-subsection{margin-top:10px}#colors-subsection h4{margin:0}#colors-box{margin-top:7px}#colors-subsection x-colorselect{flex:1;margin:0 3px}#colors-subsection x-colorselect:first-child{margin-left:0}#colors-subsection x-colorselect:last-child{margin-right:0}#random-colors-button{width:100%;margin-top:7px}#preview{height:160px;shape-rendering:crispEdges}`;
  #c;
  constructor() {
    super();
    this["#width-input"].addEventListener("changestart", () => this.#d());
    this["#height-input"].addEventListener("changestart", () => this.#p());
    this["#aspect-ratio-button"].addEventListener("toggle", () => this.#b());
    this["#cell-size-box"].addEventListener("changestart", () => this.#h());
    this["#variance-box"].addEventListener("changestart", () => this.#m());
    this["#seed-box"].addEventListener("changestart", () => this.#u());
    this["#colors-box"].addEventListener("changestart", () => this.#g());
    this["#random-colors-button"].addEventListener("click", () => this.#x());
    this["#generate-button"].addEventListener("click", () => this.#y());
  }
  connectedCallback() {
    this.#c = U(this, "bx-editor");
    let K = B.getConfig("bx-triangulatedsurfacegenerator:width", 500);
    let L = B.getConfig("bx-triangulatedsurfacegenerator:height", 400);
    let M = B.getConfig("bx-triangulatedsurfacegenerator:cellSize", 0.2);
    let O = B.getConfig("bx-triangulatedsurfacegenerator:variance", 0.75);
    let P = B.getConfig("bx-triangulatedsurfacegenerator:seed", 100);
    let Q = B.getConfig("bx-triangulatedsurfacegenerator:colors", z);
    let R = B.getConfig(
      "bx-triangulatedsurfacegenerator:preserveAspectRatio",
      false
    );
    this["#width-input"].value = K;
    this["#height-input"].value = L;
    this["#aspect-ratio-button"].toggled = R;
    this["#aspect-ratio-icon"].href = R ? "#lock-on" : "#lock-off";
    this["#cell-size-slider"].value = d(M * 100, 2);
    this["#cell-size-input"].value = d(M * 100, 2);
    this["#variance-slider"].value = d(O * 100, 2);
    this["#variance-input"].value = d(O * 100, 2);
    this["#seed-slider"].value = P;
    this["#seed-input"].value = P;
    for (let S = 0; S < 5; S += 1) {
      this["#colors-box"].children[S].value = Q[S];
    }
    this.#k();
  }
  #d() {
    let K;
    let L;
    let M = this["#width-input"].value / this["#height-input"].value;
    this["#width-input"].addEventListener(
      "change",
      (K = () => {
        if (this["#aspect-ratio-button"].toggled) {
          let O = this["#width-input"].value / M;
          O = p(O, 1, Infinity, 0);
          this["#height-input"].value = O;
        }
        this.#k();
      })
    );
    this["#width-input"].addEventListener(
      "changeend",
      (L = () => {
        this["#width-input"].removeEventListener("change", K);
        this["#width-input"].removeEventListener("changeend", L);
        B.setConfig(
          "bx-triangulatedsurfacegenerator:width",
          this["#width-input"].value
        );
        B.setConfig(
          "bx-triangulatedsurfacegenerator:height",
          this["#height-input"].value
        );
      })
    );
  }
  #p() {
    let K;
    let L;
    let M = this["#height-input"].value / this["#width-input"].value;
    this["#height-input"].addEventListener(
      "change",
      (K = () => {
        if (this["#aspect-ratio-button"].toggled) {
          let O = this["#height-input"].value / M;
          O = p(O, 1, Infinity, 0);
          this["#width-input"].value = O;
        }
        this.#k();
      })
    );
    this["#height-input"].addEventListener(
      "changeend",
      (L = () => {
        this["#height-input"].removeEventListener("change", K);
        this["#height-input"].removeEventListener("changeend", L);
        B.setConfig(
          "bx-triangulatedsurfacegenerator:width",
          this["#width-input"].value
        );
        B.setConfig(
          "bx-triangulatedsurfacegenerator:height",
          this["#height-input"].value
        );
      })
    );
  }
  #b() {
    let K = this["#aspect-ratio-button"].toggled;
    B.setConfig("bx-triangulatedsurfacegenerator:preserveAspectRatio", K);
    this["#aspect-ratio-icon"].href = K ? "#lock-on" : "#lock-off";
  }
  #h() {
    let K;
    let L;
    this["#cell-size-box"].addEventListener(
      "change",
      (K = (M) => {
        if (M.target === this["#cell-size-slider"]) {
          this["#cell-size-input"].value = this["#cell-size-slider"].value;
        } else if (M.target === this["#cell-size-input"]) {
          this["#cell-size-slider"].value = this["#cell-size-input"].value;
        }
        this.#k();
      })
    );
    this["#cell-size-box"].addEventListener(
      "changeend",
      (L = () => {
        this["#cell-size-box"].removeEventListener("change", K);
        this["#cell-size-box"].removeEventListener("changeend", L);
        B.setConfig(
          "bx-triangulatedsurfacegenerator:cellSize",
          this["#cell-size-slider"].value / 100
        );
      })
    );
  }
  #m() {
    let K;
    let L;
    this["#variance-box"].addEventListener(
      "change",
      (K = (M) => {
        if (M.target === this["#variance-slider"]) {
          this["#variance-input"].value = this["#variance-slider"].value;
        } else if (M.target === this["#variance-input"]) {
          this["#variance-slider"].value = this["#variance-input"].value;
        }
        this.#k();
      })
    );
    this["#variance-box"].addEventListener(
      "changeend",
      (L = () => {
        this["#variance-box"].removeEventListener("change", K);
        this["#variance-box"].removeEventListener("changeend", L);
        B.setConfig(
          "bx-triangulatedsurfacegenerator:variance",
          this["#variance-slider"].value / 100
        );
      })
    );
  }
  #u() {
    let K;
    let L;
    this["#seed-box"].addEventListener(
      "change",
      (K = (M) => {
        if (M.target === this["#seed-slider"]) {
          this["#seed-input"].value = this["#seed-slider"].value;
        } else if (M.target === this["#seed-input"]) {
          this["#seed-slider"].value = this["#seed-input"].value;
        }
        this.#k();
      })
    );
    this["#seed-box"].addEventListener(
      "changeend",
      (L = () => {
        this["#seed-box"].removeEventListener("change", K);
        this["#seed-box"].removeEventListener("changeend", L);
        B.setConfig(
          "bx-triangulatedsurfacegenerator:seed",
          this["#seed-slider"].value
        );
      })
    );
  }
  #g() {
    let K;
    let L;
    this["#colors-box"].addEventListener(
      "change",
      (K = (M) => {
        this.#k();
      })
    );
    this["#colors-box"].addEventListener(
      "changeend",
      (L = () => {
        this["#colors-box"].removeEventListener("change", K);
        this["#colors-box"].removeEventListener("changeend", L);
        let M = [...this["#colors-box"].children].map((O) => O.value);
        B.setConfig("bx-triangulatedsurfacegenerator:colors", M);
      })
    );
  }
  #x() {
    let K = ((M = 0, O = 100, P = 0, Q = null) => {
      let R = M + (Q ? new G(Q) : Math.random)() * (O - M);
      return d(R, P);
    })(0, N.length - 1);
    let L = N[K];
    for (let M = 0; M < 5; M += 1) {
      this["#colors-box"].children[M].value = L[M];
    }
    B.setConfig("bx-triangulatedsurfacegenerator:colors", L);
    this.#k();
  }
  #y() {
    let K = this["#preview"].cloneNode(true);
    K.style.shapeRendering = "crispEdges";
    this.#c.board.undoManager.checkpoint(
      ["#generators.triangulated-surface"],
      "#generators-panel"
    );
    this.#c.board.insertArtwork(K);
  }
  #v(K, L = 600, M = 400, O = 75, P = 0.75, Q = 50) {
    if (O < L * 0.02) {
      O = d(L * 0.02);
    }
    let R = floor((L + O * 4) / O);
    let S = floor((M + O * 4) / O);
    let W = (R * O - L) / 2;
    let X = (S * O - M) / 2;
    let Y = (a6, a7, a8) =>
      ((a6 - a7[0]) * (a8[1] - a8[0])) / (a7[1] - a7[0]) + a8[0];
    let Z = (a6, a7) => min(max(a6, a7[0]), a7[1]);
    let a0 = [];
    let a1 = [];
    let a2 = "";
    {
      let a6 = (O * P) / 2;
      let a7 = new G(Q);
      for (let a8 = -W; a8 < L + W; a8 += O) {
        for (let a9 = -X; a9 < M + X; a9 += O) {
          let aa = a8 + O * 0.5 + (a7() * a6 * 2 - a6);
          let ab = a9 + O * 0.5 + (a7() * a6 * 2 - a6);
          a0.push([floor(aa), floor(ab)]);
        }
      }
    }
    {
      K = K.map((ae) =>
        new b(ae).to("srgb").toString({
          format: "hex",
        })
      );
      let ac = E.from(a0).triangles;
      let ad = D.scale(K).mode("lab");
      for (let ae = 0; ae < ac.length; ae += 3) {
        let af = [ac[ae], ac[ae + 1], ac[ae + 2]].map((ak) => a0[ak]);
        let ag = {
          x: ((a5 = af)[0][0] + a5[1][0] + a5[2][0]) / 3,
          y: (a5[0][1] + a5[1][1] + a5[2][1]) / 3,
        };
        let ah = ad(((a4 = ag.x), Z(Y(a4, [0, L], [0, 1]), [0, 1])));
        let ai = ad(((a3 = ag.y), Z(Y(a3, [0, M], [0, 1]), [0, 1])));
        let aj = D.interpolate(ah, ai, 0.5, "lab").css();
        a1.push([aj, af]);
      }
    }
    var a3;
    var a4;
    var a5;
    {
      let ak = "";
      for (let [al, [am, an, ao]] of a1) {
        let ap = w(new DOMRect(0, 0, L, M), [
          new DOMPoint(am[0], am[1]),
          new DOMPoint(an[0], an[1]),
          new DOMPoint(ao[0], ao[1]),
        ]);
        if (ap.length > 1) {
          let [aq, ...ar] = ap;
          let as = "M " + aq.x + " " + aq.y;
          for (let at of ar) {
            as += " L " + at.x + " " + at.y;
          }
          as += " Z";
          ak += '<path d="' + as + '" style="fill: ' + al + ';"></path>';
        }
      }
      a2 =
        '\n        <svg viewBox="0 0 ' +
        L +
        " " +
        M +
        '" style="shape-rendering: crispedges;">\n          <g>' +
        ak +
        "</g>\n        </svg>\n      ";
    }
    return x`${a2}`;
  }
  #k() {
    let K = this["#width-input"].value;
    let L = this["#height-input"].value;
    let M = (this["#cell-size-slider"].value / 100) * min(K, L);
    let O = this["#variance-slider"].value / 100;
    let P = this["#seed-slider"].value;
    let Q = [...this["#colors-box"].children].map((S) => S.value);
    let R = this.#v(Q, K, L, M, O, P);
    this["#preview"].innerHTML = R.innerHTML;
    this["#preview"].setAttribute("viewBox", "0 0 " + K + " " + L);
  }
}
customElements.define("bx-triangulatedsurfacegenerator", V);
