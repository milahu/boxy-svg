import a2 from "../../libs/xel/xel.js";
import "../../libs/color/color.js";
import a3 from "../../libs/css-parser/css-parser.js";
import "../../libs/paper/paper.js";
import "../../libs/seed-random/seed-random.js";
import "../../libs/dom-purify/dom-purify.js";
import a4 from "../../libs/dexie/dexie.js";
import a5 from "../../libs/typesense/typesense.js";
import "../../libs/pako/pako.js";
let l = document.createElement("template");
let a = (a6, ...a7) => {
  let a8 = [];
  for (let ab = 0; ab < a6.length; ab += 1) {
    a8.push(a6[ab]);
    if (a7[ab] !== undefined) {
      a8.push(a7[ab]);
    }
  }
  let a9 = a8.join("");
  l.innerHTML = a9;
  let aa = document.importNode(l.content, true);
  if (aa.children.length === 1) {
    return aa.firstElementChild;
  } else {
    return aa;
  }
};
let s = (a6, ...a7) => {
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
class r extends HTMLElement {
  static observedAttributes = ["suffix", "disabled"];
  static #e = a` <template> <main id="main"> <x-numberinput id="top-input" value="0" min="0" condensed> <x-stepper></x-stepper> </x-numberinput> <x-box> <x-numberinput id="left-input" value="0" min="0" condensed> <x-stepper></x-stepper> </x-numberinput> <x-button id="uniform-button" condensed togglable> <x-label><x-message href="#padding.uniform"></x-message></x-label> </x-button> <x-numberinput id="right-input" value="0" min="0" condensed> <x-stepper></x-stepper> </x-numberinput> </x-box> <x-numberinput id="bottom-input" value="0" min="0" condensed> <x-stepper></x-stepper> </x-numberinput> </main> </template>
  `;
  static #t = s`
    :host {
      display: block;
      box-sizing: border-box;
    }
    :host([hidden]) {
      display: none;
    }

    #main {
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      margin-top: 2px;
    }

    x-box {
      width: 100%;
      margin: 10px 0;
      justify-content: space-between;
    }

    x-button {
      width: 72px;
    }

    x-numberinput {
      width: 72px;
    }
  `;
  get value() {
    if (Array.isArray(this.#i)) {
      return [...this.#i];
    } else {
      return this.#i;
    }
  }
  set value(a6) {
    this.#i = Array.isArray(a6) ? [...a6] : a6;
    this.#n();
  }
  get suffix() {
    if (this.hasAttribute("suffix")) {
      return this.getAttribute("suffix");
    } else {
      return "";
    }
  }
  set suffix(a6) {
    this.setAttribute("suffix", a6);
  }
  get disabled() {
    return this.hasAttribute("disabled");
  }
  set disabled(a6) {
    if (a6) {
      this.setAttribute("disabled", "");
    } else {
      this.removeAttribute("disabled");
    }
  }
  #i = [0, 0, 0, 0];
  #l;
  constructor() {
    super();
    this.#l = this.attachShadow({
      mode: "closed",
    });
    this.#l.adoptedStyleSheets = [a2.themeStyleSheet, r.#t];
    this.#l.append(document.importNode(r.#e.content, true));
    for (let a6 of this.#l.querySelectorAll("[id]")) {
      this["#" + a6.id] = a6;
    }
    this["#top-input"].addEventListener("changestart", (a7) => this.#a(a7));
    this["#right-input"].addEventListener("changestart", (a7) => this.#s(a7));
    this["#bottom-input"].addEventListener("changestart", (a7) => this.#r(a7));
    this["#left-input"].addEventListener("changestart", (a7) => this.#o(a7));
    this["#uniform-button"].addEventListener("toggle", () => this.#p());
  }
  attributeChangedCallback(a6, a7, a8) {
    if (a7 !== a8) {
      if (a6 === "suffix") {
        this.#u();
      } else if (a6 === "disabled") {
        this.#n();
      }
    }
  }
  connectedCallback() {
    this.setAttribute("aria-disabled", this.disabled);
    this.#n();
  }
  #a() {
    let a6;
    let a7;
    let a8 = Array.isArray(this.value) === false;
    this.dispatchEvent(new CustomEvent("changestart"));
    this["#top-input"].addEventListener(
      "change",
      (a6 = () => {
        if (a8) {
          this.#i = this["#top-input"].value;
          this["#left-input"].value = this["#top-input"].value;
          this["#right-input"].value = this["#top-input"].value;
          this["#bottom-input"].value = this["#top-input"].value;
        } else {
          this.#i[0] = this["#top-input"].value;
        }
        this.dispatchEvent(new CustomEvent("change"));
      })
    );
    this["#top-input"].addEventListener(
      "changeend",
      (a7 = () => {
        this["#top-input"].removeEventListener("change", a6);
        this["#top-input"].removeEventListener("changeend", a7);
        this.dispatchEvent(new CustomEvent("changeend"));
      })
    );
  }
  #s() {
    let a6;
    let a7;
    let a8 = Array.isArray(this.value) === false;
    this.dispatchEvent(new CustomEvent("changestart"));
    this["#right-input"].addEventListener(
      "change",
      (a6 = () => {
        if (a8) {
          this.#i = this["#top-input"].value;
        } else {
          this.#i[1] = this["#right-input"].value;
        }
        this.dispatchEvent(new CustomEvent("change"));
      })
    );
    this["#right-input"].addEventListener(
      "changeend",
      (a7 = () => {
        this["#right-input"].removeEventListener("change", a6);
        this["#right-input"].removeEventListener("changeend", a7);
        this.dispatchEvent(new CustomEvent("changeend"));
      })
    );
  }
  #r() {
    let a6;
    let a7;
    let a8 = Array.isArray(this.value) === false;
    this.dispatchEvent(new CustomEvent("changestart"));
    this["#bottom-input"].addEventListener(
      "change",
      (a6 = () => {
        if (a8) {
          this.#i = this["#bottom-input"].value;
        } else {
          this.#i[2] = this["#bottom-input"].value;
        }
        this.dispatchEvent(new CustomEvent("change"));
      })
    );
    this["#bottom-input"].addEventListener(
      "changeend",
      (a7 = () => {
        this["#bottom-input"].removeEventListener("change", a6);
        this["#bottom-input"].removeEventListener("changeend", a7);
        this.dispatchEvent(new CustomEvent("changeend"));
      })
    );
  }
  #o() {
    let a6;
    let a7;
    let a8 = Array.isArray(this.value) === false;
    this.dispatchEvent(new CustomEvent("changestart"));
    this["#left-input"].addEventListener(
      "change",
      (a6 = () => {
        if (a8) {
          this.#i = this["#left-input"].value;
        } else {
          this.#i[3] = this["#left-input"].value;
        }
        this.dispatchEvent(new CustomEvent("change"));
      })
    );
    this["#left-input"].addEventListener(
      "changeend",
      (a7 = () => {
        this["#left-input"].removeEventListener("change", a6);
        this["#left-input"].removeEventListener("changeend", a7);
        this.dispatchEvent(new CustomEvent("changeend"));
      })
    );
  }
  #p() {
    if (this["#uniform-button"].toggled) {
      this.value = this["#top-input"].value;
    } else {
      this.value = [
        this["#top-input"].value,
        this["#top-input"].value,
        this["#top-input"].value,
        this["#top-input"].value,
      ];
    }
    this.dispatchEvent(new CustomEvent("changestart"));
    this.dispatchEvent(new CustomEvent("change"));
    this.dispatchEvent(new CustomEvent("changeend"));
  }
  #u() {
    this["#left-input"].suffix = this.suffix;
    this["#right-input"].suffix = this.suffix;
    this["#top-input"].suffix = this.suffix;
    this["#bottom-input"].suffix = this.suffix;
  }
  #n() {
    if (Array.isArray(this.value)) {
      let [a6, a7, a8, a9] = this.value;
      this["#top-input"].value = a6;
      this["#top-input"].disabled = this.disabled;
      this["#right-input"].value = a7;
      this["#right-input"].disabled = this.disabled;
      this["#bottom-input"].value = a8;
      this["#bottom-input"].disabled = this.disabled;
      this["#left-input"].value = a9;
      this["#left-input"].disabled = this.disabled;
      this["#uniform-button"].toggled = false;
      this["#uniform-button"].disabled = this.disabled;
    } else {
      this["#top-input"].value = this.value;
      this["#top-input"].disabled = this.disabled;
      this["#right-input"].value = this.value;
      this["#right-input"].disabled = true;
      this["#bottom-input"].value = this.value;
      this["#bottom-input"].disabled = true;
      this["#left-input"].value = this.value;
      this["#left-input"].disabled = true;
      this["#uniform-button"].toggled = true;
      this["#uniform-button"].disabled = this.disabled;
    }
  }
}
if (customElements.get("bx-edgeinput") === undefined) {
  customElements.define("bx-edgeinput", r);
}
const o = "./";
const p = "http://www.w3.org/2000/svg";
const u = "http://www.w3.org/1999/xlink";
const h = "http://www.w3.org/2000/xmlns/";
const f = ["circle", "ellipse", "line", "path", "polygon", "polyline", "rect"];
const m = ["text", "textPath", "tspan"];
const c = [...f, ...m, "foreignObject", "image"];
const d = [...f, "text", "image", "g", "a", "svg", "use", "foreignObject"];
const y = [...f, ...m];
const g = ["solidcolor", "linearGradient", "radialGradient", "pattern"];
const b = [...f, "text", "use"];
const x = [...c, "clipPath", "a", "g", "use"];
const w = [...c, "a", "g"];
const v = [...c, "a", "g", "use"];
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
    appliesTo: [...c, "svg", "g", "a", "use"],
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
    appliesTo: [...c, "use"],
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
    appliesTo: [...c, "svg", "g", "a", "use"],
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
      ...c,
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
    appliesTo: [...c, "svg", "g", "a", "use"],
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
    appliesTo: [...c, "textPath", "tspan", "svg", "g", "a", "use"],
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
    appliesTo: [...y],
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
    appliesTo: [...y],
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
    appliesTo: [...y],
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
    appliesTo: [...c, "textPath", "tspan", "g", "a", "svg", "use"],
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
      ...c,
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
    appliesTo: [...f],
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
    appliesTo: [...f],
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
    appliesTo: [...f],
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
    appliesTo: [...f],
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
    appliesTo: [...c, "g", "a", "svg", "use"],
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
      ...c,
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
      ...c,
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
    appliesTo: [...y],
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
    appliesTo: [...c, "svg", "g", "a", "use"],
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
    appliesTo: [...f],
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
    appliesTo: [...y],
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
    appliesTo: [...y],
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
    appliesTo: [...y],
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
    appliesTo: [...y],
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
    appliesTo: [...y],
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
    appliesTo: [...y],
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
    appliesTo: [...y],
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
    appliesTo: [...y],
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
    appliesTo: [...c, "use"],
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
    appliesTo: [...c, "text", "textPath", "tspan"],
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
  .map((a6) => a6.presentationAttributeName)
  .filter((a6) => a6);
let M = (a6, a7 = 0) => {
  let a8 = Math.pow(10, a7);
  return Math.round((a6 + Number.EPSILON) * a8) / a8;
};
let P = (a6, a7, a8 = Infinity, a9 = null) => {
  if (a9 !== null) {
    a6 = M(a6, a9);
  }
  if (a6 < a7) {
    a6 = a7;
  } else if (a6 > a8) {
    a6 = a8;
  }
  return a6;
};
class O {
  currentToken = null;
  position = 0;
  #h;
  constructor(a6) {
    this.#h = a6;
  }
  read() {
    let a6 = this.#h[this.position];
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
class k {
  get value() {
    return this.#i;
  }
  set value(a6) {
    this.#i = a6;
  }
  get origin() {
    return new URL(this.#i).origin;
  }
  get type() {
    return "<url>";
  }
  #i;
  constructor(a6 = "") {
    this.#i = a6;
  }
  static fromString(a6, a7 = false) {
    let a8 = [...a3.tokenize(a6), new a3.EOFToken()];
    let a9 = new O(a8);
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
        return new k(aa);
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
            return new k(ab.trim());
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
let D = (a6, a7 = false) => {
  if (a7) {
    a6.unshift(a6.pop());
  } else {
    a6.push(a6.shift());
  }
  return a6;
};
let { isFinite, isNaN, parseFloat } = Number;
let N = (a6) => !isNaN(a6) && typeof a6 == "number";
let { sqrt } = Math;
const T = "Invalid argument passed to Vector contstructor";
class F {
  x = 0;
  y = 0;
  constructor(...a6) {
    if (a6.length === 1) {
      if (!N(a6[0].x) || !N(a6[0].y)) {
        throw new Error(T);
      }
      this.x = a6[0].x;
      this.y = a6[0].y;
    } else if (a6.length === 2) {
      if (N(a6[0]) && N(a6[1])) {
        this.x = a6[0];
        this.y = a6[1];
      } else {
        if (!(a6[0] instanceof DOMPoint) || !(a6[1] instanceof DOMPoint)) {
          throw new Error(T);
        }
        {
          let a7 = a6[0];
          let a8 = a6[1];
          this.x = a8.x - a7.x;
          this.y = a8.y - a7.y;
        }
      }
    } else if (a6.length >= 3) {
      throw new Error(T);
    }
  }
  static fromVector(a6) {
    return new F(a6.x, a6.y);
  }
  get length() {
    return sqrt(this.x * this.x + this.y * this.y);
  }
  set length(a6) {
    if (this.length !== 0) {
      a6 /= this.length;
      this.x = this.x * a6;
      this.y = this.y * a6;
    }
  }
  getNormalVector() {
    return new F(-this.y, this.x);
  }
  getOppositeVector() {
    return new F(-this.x, -this.y);
  }
  negate() {
    return this.multiply(-1);
  }
  multiply(a6) {
    return new F(this.x * a6, this.y * a6);
  }
  multiplySelf(a6) {
    this.x = this.x * a6;
    this.y = this.y * a6;
    return this;
  }
  divide(a6) {
    return new F(this.x / a6, this.y / a6);
  }
  divideSelf(a6) {
    this.x = this.x / a6;
    this.y = this.y / a6;
    return this;
  }
  normalize() {
    if (this.length === 0) {
      return new F(this);
    } else {
      return new F(this.x / this.length, this.y / this.length);
    }
  }
  scale(a6) {
    if (this.length === 0) {
      return new F(this);
    } else {
      a6 /= this.length;
      return new F(this.x * a6, this.y * a6);
    }
  }
  transformPoint(a6) {
    return new DOMPoint(a6.x + this.x, a6.y + this.y);
  }
  transformRect(a6) {
    return new DOMRect(a6.x + this.x, a6.y + this.y, a6.width, a6.height);
  }
  matrixTransform(a6) {
    let a7 = new DOMPoint(0, 0).matrixTransform(a6);
    let a8 = new DOMPoint(this.x, this.y).matrixTransform(a6);
    return new F(a7, a8);
  }
  toString() {
    return "(" + this.x + ", " + this.y + ")";
  }
}
let V = (a6) => {
  let a7 = null;
  if (x.includes(a6.localName)) {
    let a8 = getComputedStyle(a6).clipPath;
    if (a8 && a8 !== "none") {
      let a9 = a8.substring(6, a8.length - 2);
      let aa = pt(a6).querySelector("#" + CSS.escape(a9)) || null;
      if (aa?.localName === "clipPath" && aa !== a6) {
        a7 = aa;
      }
    }
  }
  return a7;
};
const E = {
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
new (class {
  #f;
  #m = null;
  #c = {};
  constructor() {
    this.#f = new a4("GoogleFontsManager");
    this.#f.version(1).stores({
      cache: "family",
    });
  }
  search(a6 = "", a7 = "alphabetical", a8 = "all", a9 = "all", aa = "all") {
    return new Promise(async (ab) => {
      await this.#d();
      let ac = [];
      let ad = this.#f.cache;
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
      if (this.#m === null) {
        this.#m = new a5.Client({
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
        a8 = await this.#m.collections("googleFonts").documents().export();
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
      await this.#f.cache.clear();
      await this.#f.cache.bulkPut(a9);
      a6();
    });
  }
  getFontFaceRulesFromUrl(a6, a7 = false) {
    return new Promise(async (a8) => {
      let a9 = [];
      await this.#d();
      if (a7) {
        let aa = await this.#y(a6);
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
          for (let aj of ag.split("|")) {
            let ak = [];
            let [al, am] = aj.split(":");
            for (let an of am.split(",")) {
              an = ah[an] || an;
              ak.push(an);
            }
            ac.push({
              family: al,
              faceNames: ak,
            });
          }
        } else if (a6.startsWith("https://fonts.googleapis.com/css2?")) {
          let ao = ad.searchParams.getAll("family");
          for (let ap of ao) {
            let [aq, ar] = ap.split(":");
            if (ar === undefined) {
              ac.push({
                family: aq,
                faceNames: ["400"],
              });
            } else {
              let as = [];
              let [au, av] = ar.split("@");
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
                as.push(az.wght + (az.ital === "1" ? "italic" : ""));
              }
              ac.push({
                family: aq,
                faceNames: as,
              });
            }
          }
        }
        {
          let aB = this.#f.cache;
          for (let { family, faceNames } of ac) {
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
                    if (E[aM]) {
                      aJ.push(E[aM]);
                    }
                  }
                  if (aJ.length === 0) {
                    aJ = "U+0-10FFFF";
                  }
                  let aK = aJ.join(",");
                  let aL = s`
                    @font-face {
                      font-family: "${family}";
                      font-style: ${aI};
                      font-weight: ${aH};
                      font-display: ${af};
                      font-unicode-range: ${aK};
                      src: url(${aG});
                    }
                  `;
                  a9.push(aL.cssRules[0]);
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
      await this.#d();
      a7((await this.#f.cache.where("family").equals(a6).toArray())[0] || null);
    });
  }
  #y(a6) {
    return new Promise(async (a7) => {
      let a8 = null;
      if (this.#c[a6]) {
        a8 = this.#c[a6];
      } else {
        let a9 = await fetch(a6);
        let aa = await a9.text();
        a8 = new CSSStyleSheet();
        a8.replaceSync(aa);
        this.#c[a6] = a8;
      }
      a7(a8);
    });
  }
  #d() {
    return new Promise(async (a6) => {
      let a7 = await this.#f.cache.count();
      let a8 = true;
      if (a7 > 0) {
        let a9 = await this.#f.cache.get("Roboto");
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
if (!["iPhone", "iPad"].includes(navigator.platform)) {
  navigator.platform.startsWith("Mac");
}
const B =
  navigator.userAgent.indexOf("Safari/") > -1 &&
  navigator.userAgent.indexOf("Chrome") === -1;
if (window.frameElement === null) {
  document.body.dataset.app;
}
let L = (a6, a7, a8) => a6.split(a7).join(a8);
let z = (a6) => {
  a6 = a6.toLowerCase();
  a6 = L(a6, " ", "");
  a6 = L(a6, "-", "");
  let a7 = "400";
  if ((a6 = L(a6, "_", "")).includes("thin") || a6.includes("hairline")) {
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
let G = (a6) => {
  a6 = a6.toLowerCase();
  a6 = L(a6, " ", "");
  a6 = L(a6, "-", "");
  let a7 = "normal";
  if ((a6 = L(a6, "_", "")).includes("italic")) {
    a7 = "italic";
  } else if (a6.includes("oblique")) {
    a7 = "oblique";
  }
  return a7;
};
let R = (a6) => {
  let a7;
  let a8 = document.createNodeIterator(a6, NodeFilter.SHOW_TEXT, null);
  let a9 = {
    text: true,
    textPath: true,
    tspan: true,
  };
  while ((a7 = a8.nextNode())) {
    if (!a9[a7.parentElement.localName]) {
      if ($(a7.textContent)) {
        a7.remove();
      }
    }
  }
};
let $ = (a6) => !/[^\t\n\r ]/.test(a6);
new (class extends EventTarget {
  #g = "init";
  #b = [];
  #f;
  get status() {
    return this.#g;
  }
  constructor() {
    super();
    this.#f = new a4("LocalFontsManager");
    this.#f.version(1).stores({
      cache: "family",
    });
    this.#f
      .version(2)
      .stores({
        cache: "family",
      })
      .upgrade((a6) => a6.cache.clear());
    if (window.queryLocalFonts === undefined) {
      this.#g = "no-api";
    } else {
      navigator.permissions
        .query({
          name: "local-fonts",
        })
        .then((a6) => {
          if (a6.state === "granted") {
            this.refresh();
          } else if (a6.state !== "prompt") {
            this.#g = "no-permission";
          }
        });
    }
  }
  search(a6 = "", a7 = "all") {
    return new Promise(async (a8) => {
      let a9 = [];
      let aa = this.#f.cache;
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
        let ac = z(ab.style) + (G(ab.style) === "italic" ? "i" : "");
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
      await this.#f.cache.clear();
      await this.#f.cache.bulkPut(a9);
      this.#g = "ready";
      a6();
    });
  }
  getLocalFontsMetadata(a6 = false) {
    return new Promise(async (a7, a8) => {
      if (this.status === "no-api") {
        a7([]);
      } else {
        if (this.#b.length < 10 || a6) {
          try {
            this.#b = await window.queryLocalFonts();
          } catch (a9) {
            return a8({
              message: a9.message,
              name: a9.name,
            });
          }
        }
        a7(this.#b);
      }
    });
  }
  getCacheSize() {
    return new Promise(async (a6) => {
      a6(await this.#f.cache.count());
    });
  }
  getFamilyDescriptor(a6) {
    return new Promise(async (a7) => {
      a7((await this.#f.cache.where("family").equals(a6).toArray())[0] || null);
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
let I = (a6, a7) =>
  a6.is2D
    ? new DOMMatrix([
        M(a6.a, a7),
        M(a6.b, a7),
        M(a6.c, a7),
        M(a6.d, a7),
        M(a6.e, a7),
        M(a6.f, a7),
      ])
    : new DOMMatrix([
        M(a6.m11, a7),
        M(a6.m12, a7),
        M(a6.m13, a7),
        M(a6.m14, a7),
        M(a6.m21, a7),
        M(a6.m22, a7),
        M(a6.m23, a7),
        M(a6.m24, a7),
        M(a6.m31, a7),
        M(a6.m32, a7),
        M(a6.m33, a7),
        M(a6.m34, a7),
        M(a6.m41, a7),
        M(a6.m42, a7),
        M(a6.m43, a7),
        M(a6.m44, a7),
      ]);
const j =
  "\n  position: fixed;\n  top: -1px;\n  left: -1px;\n  width: 1px;\n  height: 1px;\n  contain: strict;\n  overflow: hidden;\n".replaceAll(
    "\n  ",
    ""
  );
class Z {
  #x;
  #w;
  get shadowRoot() {
    return this.#x.shadowRoot;
  }
  constructor(a6) {
    this.#w = a6;
    this.#x = document.createElement("div");
    this.#x.setAttribute("style", j);
    this.#x.setAttribute("class", "offscreen-container");
    this.#x.attachShadow({
      mode: "open",
    });
    this.#x.shadowRoot.append(a6);
    document.body.append(this.#x);
  }
  destroy() {
    if (this.#w.parentNode === this.#x.shadowRoot) {
      this.#w.remove();
    }
    this.#x.remove();
    this.#x = null;
  }
}
let X = (a6, a7) => {
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
let H = (a6) => {
  if (a6.isConnected === false) {
    new Z(a6);
  }
  if (B) {
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
      a7 = I(a7, a8);
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
let _ = (a6) => a6.hasAttribute("transform") || a6.style.transform !== "";
let q = (a6, a7 = "auto") => {
  let a8;
  let a9;
  let aa;
  let ab;
  let ac = X(() => oe(a6));
  {
    let ad = getComputedStyle(a6);
    let { transformBox } = ad;
    if (transformBox === "fill-box" && a6.style.transformOrigin !== "") {
      let ag = a6.style.transformOrigin
        .split(" ")
        .map((ah) => ah.trim())
        .map((ah) =>
          ah === "center"
            ? CSSUnitValue.parse("50%")
            : ah === "top" || ah === "left"
            ? CSSUnitValue.parse("0%")
            : ah === "bottom" || ah === "right"
            ? CSSUnitValue.parse("100%")
            : CSSUnitValue.parse(ah)
        );
      if (ag.length === 1) {
        a8 = ag[0];
        a9 = ag[0];
      } else if (ag.length === 2) {
        a8 = ag[0];
        a9 = ag[1];
      }
      if (a8.unit === "percent") {
        a8 = a8.value / 100;
      } else {
        let ah = ac();
        a8 = a8.to("px").value / ah.width;
      }
      if (a9.unit === "percent") {
        a9 = a9.value / 100;
      } else {
        let aj = ac();
        a9 = a9.to("px").value / aj.height;
      }
      aa = "objectBoundingBox";
    } else {
      let { transformOrigin } = ad;
      let al = transformOrigin.split(" ").map((am) => CSSUnitValue.parse(am));
      if (transformBox === "fill-box") {
        let am = ac();
        a8 = al[0].value / am.width;
        a9 = al[1].value / am.height;
        aa = "objectBoundingBox";
      } else {
        a8 = al[0].value;
        a9 = al[1].value;
        aa = "userSpaceOnUse";
      }
    }
  }
  if (a7 === "auto" || a7 === aa) {
    ab = new DOMPoint(a8, a9);
  } else if (a7 === "userSpaceOnUse" && aa === "objectBoundingBox") {
    let an = ac();
    ab = new DOMPoint(an.x + a8 * an.width, an.y + a9 * an.height);
    aa = "userSpaceOnUse";
  } else if (a7 === "objectBoundingBox" && aa === "userSpaceOnUse") {
    let ao = ac();
    ab = new DOMPoint((a8 - ao.x) / ao.width, (a9 - ao.y) / ao.height);
    aa = "objectBoundingBox";
  }
  return [ab, aa];
};
let Q = (a6, a7, a8 = "userSpaceOnUse", a9 = null, aa = null) => {
  let ab = null;
  {
    let ac = H(a6);
    let [ad, af] = q(a6, "userSpaceOnUse");
    let ag = oe(a6);
    if (ag.width === 0) {
      ag.width = 1e-7;
    }
    if (ag.height === 0) {
      ag.height = 1e-7;
    }
    let ah = new DOMPoint(ag.x, ag.y);
    let aj = new DOMPoint(ag.x + ag.width, ag.y);
    let ak = new DOMPoint(ag.x, ag.y + ag.height);
    let al = null;
    if (a8 === "userSpaceOnUse") {
      al = new DOMMatrix()
        .translate(ad.x, ad.y)
        .translate(-a7.x, -a7.y)
        .multiply(ac)
        .translate(a7.x, a7.y)
        .translate(-ad.x, -ad.y);
    } else if (a8 === "objectBoundingBox") {
      let ap = new DOMPoint(a7.x * ag.width, a7.y * ag.height);
      al = new DOMMatrix()
        .translate(ad.x - ag.x, ad.y - ag.y)
        .translate(-ap.x, -ap.y)
        .multiply(ac)
        .translate(ap.x, ap.y)
        .translate(-ad.x + ag.x, -ad.y + ag.y);
    }
    let [am, an, ao] = [ah, aj, ak].map((aq) => aq.matrixTransform(al));
    ab = ee(ah, aj, ak, am, an, ao);
    if (a9 !== null && ab.a === 1 && ab.b === 0 && ab.c === 0 && ab.d === 1) {
      ab.e = M(ab.e, a9);
      ab.f = M(ab.f, a9);
    }
  }
  Y(a6, ab, aa);
  if (a8 === "objectBoundingBox") {
    a6.style.setProperty("transform-box", "fill-box");
  } else {
    a6.style.removeProperty("transform-box");
  }
  if (a8 === "userSpaceOnUse") {
    let { x: aq, y: ar } = a7;
    if (a9) {
      aq = M(aq, a9);
      ar = M(ar, a9);
    }
    if (a7.x === 0 && a7.y === 0) {
      a6.style.removeProperty("transform-origin");
    } else {
      a6.style.setProperty("transform-origin", aq + "px " + ar + "px");
    }
  } else if (a8 === "objectBoundingBox") {
    let as = a7.x * 100;
    let au = a7.y * 100;
    if (a9) {
      as = M(as, a9 + 2);
      au = M(au, a9 + 2);
    }
    if (a7.x === 0 && a7.y === 0) {
      a6.style.removeProperty("transform-origin");
    } else {
      a6.style.setProperty("transform-origin", as + "% " + au + "%");
    }
  }
};
let W = (a6) => {
  if (a6.style.transformBox !== "" || a6.style.transformOrigin !== "") {
    return true;
  }
  {
    let { transformBox, transformOrigin } = getComputedStyle(a6);
    return transformBox !== "view-box" || transformOrigin !== "0px 0px";
  }
};
let J = (a6, a7, a8 = false) => {
  let a9;
  if (a8 === false) {
    a9 = DOMMatrix.fromMatrix(
      a7.getScreenCTM().inverse().multiply(a6.getScreenCTM())
    );
  } else {
    let aa = null;
    let ab = false;
    let ac = null;
    let ad = false;
    if (a6.localName === "path") {
      let af = a6.ownerSVGElement.querySelector(
        'textPath[href="#' + CSS.escape(a6.id) + '"]'
      );
      aa = af ? af.closest("text") : null;
      ab = !!af && a6.closest("defs") !== null;
    }
    if (a7.localName === "path") {
      let ag = a6.ownerSVGElement.querySelector(
        'textPath[href="#' + CSS.escape(a7.id) + '"]'
      );
      ac = ag ? ag.closest("text") : null;
      ad = !!ag && a7.closest("defs") !== null;
    }
    a9 =
      ab && ad
        ? K(ac).multiply(H(a7)).inverse().multiply(K(aa)).multiply(H(a6))
        : ab
        ? K(a7).inverse().multiply(K(aa)).multiply(H(a6))
        : ad
        ? K(ac).multiply(H(a7)).inverse().multiply(K(a6))
        : K(a7).inverse().multiply(K(a6));
  }
  return a9;
};
let K = (a6, a7 = false) => {
  let a8;
  if (a7 === false) {
    a8 = DOMMatrix.fromMatrix(a6.getScreenCTM());
  } else {
    let a9 = null;
    let aa = false;
    if (a6.localName === "path") {
      let ab = a6.ownerSVGElement.querySelector(
        'textPath[href="#' + CSS.escape(a6.id) + '"]'
      );
      a9 = ab ? ab.closest("text") : null;
      aa = !!ab && a6.closest("defs") !== null;
    }
    a8 = aa ? K(a9).multiply(H(a6)) : DOMMatrix.fromMatrix(a6.getScreenCTM());
  }
  return a8;
};
let ee = (a6, a7, a8, a9, aa, ab) => {
  let ac = (am) =>
    am[0][0] * (am[1][1] * am[2][2] - am[1][2] * am[2][1]) -
    am[0][1] * (am[1][0] * am[2][2] - am[1][2] * am[2][0]) +
    am[0][2] * (am[1][0] * am[2][1] - am[1][1] * am[2][0]);
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
  let aj = ac([
    [a6.x, a9.y, 1],
    [a7.x, aa.y, 1],
    [a8.x, ab.y, 1],
  ]);
  let ak = ac([
    [a6.x, a6.y, a9.x],
    [a7.x, a7.y, aa.x],
    [a8.x, a8.y, ab.x],
  ]);
  let al = ac([
    [a6.x, a6.y, a9.y],
    [a7.x, a7.y, aa.y],
    [a8.x, a8.y, ab.y],
  ]);
  if (ad === 0) {
    return new DOMMatrix([1, 0, 0, 1, 0, 0]);
  }
  {
    let am = [af / ad, ag / ad, ah / ad, aj / ad, ak / ad, al / ad].map((an) =>
      M(an, 12)
    );
    return new DOMMatrix(am);
  }
};
let te = (a6, a7) => {
  let a8 = new DOMPoint(a6.x, a6.y);
  let a9 = new DOMPoint(a6.x + a6.width, a6.y);
  let aa = new DOMPoint(a6.x, a6.y + a6.height);
  let ab = new DOMPoint(a7.x, a7.y);
  let ac = new DOMPoint(a7.x + a7.width, a7.y);
  let ad = new DOMPoint(a7.x, a7.y + a7.height);
  return ee(a8, a9, aa, ab, ac, ad);
};
let ie = (a6, a7, a8 = 3) => {
  let a9 = at(a6, true);
  for (let aa of a9) {
    if (
      aa.type === "M" ||
      aa.type === "L" ||
      aa.type === "R" ||
      aa.type === "U" ||
      aa.type === "N"
    ) {
      let ab = new DOMPoint(aa.values[0], aa.values[1]).matrixTransform(a7);
      aa.values = [ab.x, ab.y];
    } else if (aa.type === "C") {
      let ac = new DOMPoint(aa.values[0], aa.values[1]).matrixTransform(a7);
      let ad = new DOMPoint(aa.values[2], aa.values[3]).matrixTransform(a7);
      let af = new DOMPoint(aa.values[4], aa.values[5]).matrixTransform(a7);
      aa.values = [ac.x, ac.y, ad.x, ad.y, af.x, af.y];
    }
    aa.values = aa.values.map((ag) => M(ag, a8));
  }
  return a9;
};
let ne = (a6) => {
  let a7 = 0;
  if (d.includes(a6.localName)) {
    let a8;
    if (W(a6)) {
      [a8] = q(a6, "userSpaceOnUse");
    } else {
      let af = oe(a6);
      a8 = new DOMPoint(af.x + af.width / 2, af.y + af.height / 2);
    }
    let a9 = K(a6);
    let aa = a8.matrixTransform(a9);
    let ab = aa;
    let ac = new DOMPoint(aa.x - 100, aa.y);
    let ad = new DOMPoint(a8.x - 100, a8.y).matrixTransform(a9);
    a7 = Pe(ab, ac, ad);
  }
  return a7;
};
let le = (a6, a7 = 0, a8 = null) => {
  if (W(a6) === false) {
    if (a6.localName === "g" || a6.localName === "a") {
      let ah = oe(a6);
      let aj = new DOMPoint(ah.x + ah.width / 2, ah.y + ah.height / 2);
      Q(a6, aj, "userSpaceOnUse");
    } else {
      Q(a6, new DOMPoint(0.5, 0.5), "objectBoundingBox");
    }
  }
  let a9 = H(a6);
  let aa = K(a6);
  let ab = aa.inverse();
  let ac = ne(a6);
  let [ad] = q(a6, "userSpaceOnUse");
  let af = ad.matrixTransform(aa);
  let ag = DOMMatrix.fromMatrix(a9);
  ag.translateSelf(-ad.x, -ad.y);
  ag.multiplySelf(aa.inverse());
  ag.translateSelf(af.x, af.y);
  ag.rotateSelf(-ac + a7);
  ag.translateSelf(-af.x, -af.y);
  ag.multiplySelf(ab.inverse());
  ag.translateSelf(ad.x, ad.y);
  Y(a6, ag, a8);
};
let ae = (a6) => {
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
let se = (a6) => a6.localName === "tspan" && a6.textContent === "​";
let re = (a6, a7) => {
  let a8 = a6.closest("text");
  let a9 = 0;
  let aa = -1;
  for (let ab of ae(a8)) {
    if (ab === a6) {
      aa = a9 + a7;
      break;
    }
    a9 += ab.length;
  }
  return [a8, aa];
};
let oe = (a6, a7 = true) => {
  let a8 = new DOMRect(0, 0, 0, 0);
  let a9 = a7 ? V(a6) : null;
  if (a9) {
    let aa = oe(a6, false);
    let ab = Se(oe(a9), H(a9));
    a8 = Ne(aa, ab);
  } else if (a6.localName === "tspan") {
    let ac = ae(a6);
    let ad = document.createRange();
    if (ac.length > 0) {
      ad.setStart(ac[0], 0);
      ad.setEnd(ac[ac.length - 1], ac[ac.length - 1].length);
    }
    if (ad.collapsed === false) {
      let af = ad.startContainer.closest("text");
      let [, ag] = re(ad.startContainer, ad.startOffset);
      let [, ah] = re(ad.endContainer, ad.endOffset);
      let aj = [];
      for (let ak = ag; ak < ah; ak += 1) {
        let al = af.getExtentOfChar(ak);
        aj.push(al);
      }
      a8 = Ce(aj);
    }
  } else if (a6.localName === "use") {
    a8 = new DOMRect(0, 0, a6.width.baseVal.value, a6.height.baseVal.value);
  } else if (a6.localName === "clipPath") {
    let am = [];
    for (let an of a6.children) {
      if (b.includes(an.localName)) {
        let ao = Se(DOMRect.fromRect(an.getBBox()), H(an));
        am.push(ao);
      }
    }
    if (am.length > 0) {
      a8 = Ce(am);
    }
  } else {
    a8 = DOMRect.fromRect(a6.getBBox());
  }
  return a8;
};
let pe = (a6, a7 = true) => {
  let a8 = K(a6);
  let a9 = oe(a6, a7);
  return Se(a9, a8);
};
let { sin, cos, acos, atan2, abs, sqrt: de, pow, PI: ge, min, max } = Math;
let { isNaN: we } = Number;
document.createElementNS("http://www.w3.org/2000/svg", "svg");
let ve = (a6, a7, a8, a9 = 0) => {
  if (a9 === 0) {
    return (
      (a6.x * (a7.y - a8.y) + a7.x * (a8.y - a6.y) + a8.x * (a6.y - a7.y)) /
        2 ===
      0
    );
  }
  {
    let ac = new F(a6, a7);
    let ad = new F(a7, a8);
    ab = ad;
    let af = (aa = ac).x * ab.x + aa.y * ab.y;
    let ag = acos(af / (ac.length * ad.length));
    if (we(ag)) {
      return true;
    }
    return ke(ag) < a9;
  }
  var aa;
  var ab;
};
let Me = (a6, a7) => {
  let a8 = a7.x - a6.x;
  a8 *= a8;
  let a9 = a7.y - a6.y;
  a9 *= a9;
  return de(a8 + a9);
};
let Pe = (a6, a7, a8) => {
  let a9 = new F(a6, a7);
  let aa = new F(a6, a8);
  let ab = atan2(aa.y, aa.x) - atan2(a9.y, a9.x);
  return Oe(ke(ab));
};
let Oe = (a6) => {
  while (a6 < -180) {
    a6 += 360;
  }
  while (a6 > 180) {
    a6 -= 360;
  }
  return a6;
};
let ke = (a6) => a6 * (180 / ge);
let De = (a6) => (ge * a6) / 180;
let Ue = (a6, a7) =>
  new DOMRect(M(a6.x, a7), M(a6.y, a7), M(a6.width, a7), M(a6.height, a7));
let Se = (a6, a7) => {
  let a8 = [
    new DOMPoint(a6.x, a6.y),
    new DOMPoint(a6.x + a6.width, a6.y),
    new DOMPoint(a6.x + a6.width, a6.y + a6.height),
    new DOMPoint(a6.x, a6.y + a6.height),
  ].map((ag) => ag.matrixTransform(a7));
  let a9 = a8.map((ag) => ag.x);
  let aa = a8.map((ag) => ag.y);
  let ab = min(...a9);
  let ac = min(...aa);
  let ad = max(...a9);
  let af = max(...aa);
  return new DOMRect(ab, ac, ad - ab, af - ac);
};
let Ce = (a6) => {
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
let Ne = (a6, a7) => {
  let a8 = Math.max(a6.left, a7.left);
  let a9 = Math.min(a6.right, a7.right);
  let aa = Math.max(a6.top, a7.top);
  let ab = Math.min(a6.bottom, a7.bottom);
  return new DOMRect(a8, aa, a9 - a8, ab - aa);
};
let { sin: Ae, asin, cos: Fe, tan, sqrt: Ee, abs: Be, PI: Le } = Math;
let ze = (a6, a7, a8, a9, aa, ab, ac, ad, af, ag) => {
  let ah;
  let aj;
  let ak;
  let al;
  let am = De(ac);
  let an = [];
  let ao = (aC, aD, aE) => ({
    x: aC * Fe(aE) - aD * Ae(aE),
    y: aC * Ae(aE) + aD * Fe(aE),
  });
  if (ag) {
    ah = ag[0];
    aj = ag[1];
    ak = ag[2];
    al = ag[3];
  } else {
    let aC = ao(a6, a7, -am);
    a6 = aC.x;
    a7 = aC.y;
    let aD;
    let aE = ao(a8, a9, -am);
    let aF = (a6 - (a8 = aE.x)) / 2;
    let aG = (a7 - (a9 = aE.y)) / 2;
    let aH = (aF * aF) / (aa * aa) + (aG * aG) / (ab * ab);
    if (aH > 1) {
      aH = Ee(aH);
      aa *= aH;
      ab *= aH;
    }
    aD = ad === af ? -1 : 1;
    let aI = aa * aa;
    let aJ = ab * ab;
    let aK =
      aD *
      Ee(
        Be(
          (aI * aJ - aI * aG * aG - aJ * aF * aF) /
            (aI * aG * aG + aJ * aF * aF)
        )
      );
    ak = (aK * aa * aG) / ab + (a6 + a8) / 2;
    al = (aK * -ab * aF) / aa + (a7 + a9) / 2;
    ah = asin(parseFloat(((a7 - al) / ab).toFixed(9)));
    aj = asin(parseFloat(((a9 - al) / ab).toFixed(9)));
    if (a6 < ak) {
      ah = Le - ah;
    }
    if (a8 < ak) {
      aj = Le - aj;
    }
    if (ah < 0) {
      ah = Le * 2 + ah;
    }
    if (aj < 0) {
      aj = Le * 2 + aj;
    }
    if (af && ah > aj) {
      ah -= Le * 2;
    }
    if (!af && aj > ah) {
      aj -= Le * 2;
    }
  }
  let ap = aj - ah;
  if (Be(ap) > (Le * 120) / 180) {
    let aL = aj;
    let aM = a8;
    let aN = a9;
    aj =
      af && aj > ah
        ? ah + ((Le * 120) / 180) * 1
        : ah + ((Le * 120) / 180) * -1;
    a8 = ak + aa * Fe(aj);
    a9 = al + ab * Ae(aj);
    an = ze(a8, a9, aM, aN, aa, ab, ac, 0, af, [aj, aL, ak, al]);
  }
  ap = aj - ah;
  let aq = Fe(ah);
  let ar = Ae(ah);
  let as = Fe(aj);
  let au = Ae(aj);
  let av = tan(ap / 4);
  let aw = (4 / 3) * aa * av;
  let ax = (4 / 3) * ab * av;
  let ay = [a6, a7];
  let az = [a6 + aw * ar, a7 - ax * aq];
  let aA = [a8 + aw * au, a9 - ax * as];
  let aB = [a8, a9];
  az[0] = ay[0] * 2 - az[0];
  az[1] = ay[1] * 2 - az[1];
  if (ag) {
    return [az, aA, aB].concat(an);
  }
  {
    an = [az, aA, aB].concat(an);
    let aO = [];
    for (let aP = 0; aP < an.length; aP += 3) {
      let aQ = ao(an[aP][0], an[aP][1], am);
      let aR = ao(an[aP + 1][0], an[aP + 1][1], am);
      let aS = ao(an[aP + 2][0], an[aP + 2][1], am);
      aO.push([aQ.x, aQ.y, aR.x, aR.y, aS.x, aS.y]);
    }
    return aO;
  }
};
let Ge = (a6, a7 = false) => {
  let a8;
  if (a6[0] instanceof DOMPoint) {
    a6 = a6.map((a9) => [a9.x, a9.y]);
  }
  a8 = a7 ? $e(a6) : Re(a6);
  return a8;
};
let Re = (a6) => {
  let a7;
  let a8;
  let a9;
  let aa;
  let ab;
  let ac;
  let ad = [];
  let af = false;
  let ag = false;
  for (let ak = 0, al = a6.length; ak <= al; ak += 1) {
    if (ak < al) {
      if (af === false) {
        af = true;
        a7 = 0;
      }
      ah = a6[ak][0];
      aj = a6[ak][1];
      if (a7 === 0) {
        a7 = 1;
        ag = true;
        if (a8) {
          ad.push({
            type: "L",
            values: [ah, aj],
          });
        } else {
          ad.push({
            type: "M",
            values: [ah, aj],
          });
        }
      } else if (a7 === 1) {
        a7 = 2;
      } else if (a7 === 2) {
        a7 = 3;
        ag = true;
        ad.push(
          {
            type: "L",
            values: [(a9 * 5 + ab) / 6, (aa * 5 + ac) / 6],
          },
          {
            type: "C",
            values: [
              (a9 * 2 + ab) / 3,
              (aa * 2 + ac) / 3,
              (a9 + ab * 2) / 3,
              (aa + ac * 2) / 3,
              (a9 + ab * 4 + ah) / 6,
              (aa + ac * 4 + aj) / 6,
            ],
          }
        );
      } else {
        ag = true;
        ad.push({
          type: "C",
          values: [
            (a9 * 2 + ab) / 3,
            (aa * 2 + ac) / 3,
            (a9 + ab * 2) / 3,
            (aa + ac * 2) / 3,
            (a9 + ab * 4 + ah) / 6,
            (aa + ac * 4 + aj) / 6,
          ],
        });
      }
      a9 = ab;
      aa = ac;
      ab = ah;
      ac = aj;
    } else if (af === true) {
      af = false;
      if (a7 === 3) {
        ag = true;
        ad.push(
          {
            type: "C",
            values: [
              (a9 * 2 + ab) / 3,
              (aa * 2 + ac) / 3,
              (a9 + ab * 2) / 3,
              (aa + ac * 2) / 3,
              (a9 + ab * 4 + ab) / 6,
              (aa + ac * 4 + ac) / 6,
            ],
          },
          {
            type: "L",
            values: [ab, ac],
          }
        );
      } else if (a7 === 2) {
        ag = true;
        ad.push({
          type: "L",
          values: [ab, ac],
        });
      }
      if ((a8 || (a8 !== 0 && a7 === 1)) && ag) {
        ad.push({
          type: "Z",
          values: [],
        });
      }
      a8 = 1 - a8;
    }
  }
  var ah;
  var aj;
  return ad;
};
let $e = (a6) => {
  let a7;
  let a8;
  let a9;
  let aa;
  let ab;
  let ac;
  let ad;
  let af;
  let ag;
  let ah;
  let aj;
  let ak = [];
  let al = false;
  let am = (an, ao) => {
    if (a7 === 0) {
      a7 = 1;
      ac = an;
      ad = ao;
    } else if (a7 === 1) {
      a7 = 2;
      af = an;
      ag = ao;
    } else if (a7 === 2) {
      a7 = 3;
      ah = an;
      aj = ao;
      ak.push({
        type: "M",
        values: [(a8 + aa * 4 + an) / 6, (a9 + ab * 4 + ao) / 6],
      });
    } else {
      ak.push({
        type: "C",
        values: [
          (a8 * 2 + aa) / 3,
          (a9 * 2 + ab) / 3,
          (a8 + aa * 2) / 3,
          (a9 + ab * 2) / 3,
          (a8 + aa * 4 + an) / 6,
          (a9 + ab * 4 + ao) / 6,
        ],
      });
    }
    a8 = aa;
    a9 = ab;
    aa = an;
    ab = ao;
  };
  for (let an = 0, ao = (a6 = D(a6, true)).length; an <= ao; an += 1) {
    if (an < ao) {
      if (al === false) {
        al = true;
        a7 = 0;
      }
      am(a6[an][0], a6[an][1]);
    } else if (al === true) {
      al = false;
      if (a7 === 1) {
        ak.push({
          type: "M",
          values: [ac, ad],
        });
        ak.push({
          type: "Z",
          values: [],
        });
      } else if (a7 === 2) {
        ak.push({
          type: "M",
          values: [(ac + af * 2) / 3, (ad + ag * 2) / 3],
        });
        ak.push({
          type: "L",
          values: [(af + ac * 2) / 3, (ag + ad * 2) / 3],
        });
        ak.push({
          type: "Z",
          values: [],
        });
      } else if (a7 === 3) {
        am(ac, ad);
        am(af, ag);
        am(ah, aj);
      }
    }
  }
  return ak;
};
const Ie = 1e-12;
let je = (a6, a7 = false, a8 = 0.5) => {
  let a9;
  if (a6[0] instanceof DOMPoint) {
    a6 = a6.map((aa) => [aa.x, aa.y]);
  }
  a9 = a7 ? Xe(a6, a8) : Ze(a6, a8);
  return a9;
};
let Ze = (a6, a7) => {
  let a8;
  let a9;
  let aa;
  let ab;
  let ac;
  let ad;
  let af;
  let ag;
  let ah;
  let aj;
  let ak;
  let al;
  let am;
  let an;
  let ao = [];
  let ap = false;
  let aq = false;
  let ar = (as, au) => {
    if (am) {
      let av = ac - as;
      let aw = ad - au;
      al = Math.pow(av * av + aw * aw, a7);
      ah = Math.sqrt(al);
    }
    if (am === 0) {
      am = 1;
      if (an) {
        aq = true;
        ao.push({
          type: "L",
          values: [as, au],
        });
      } else {
        aq = true;
        ao.push({
          type: "M",
          values: [as, au],
        });
      }
    } else if (am === 1) {
      am = 2;
    } else {
      if (am === 2) {
        am = 3;
      }
      let ax = aa;
      let ay = ab;
      let az = ac;
      let aA = ad;
      if (af > Ie) {
        let aB = aj * 2 + af * 3 * ag + ak;
        let aC = af * 3 * (af + ag);
        ax = (ax * aB - a8 * ak + ac * aj) / aC;
        ay = (ay * aB - a9 * ak + ad * aj) / aC;
      }
      if (ah > Ie) {
        let aD = al * 2 + ah * 3 * ag + ak;
        let aE = ah * 3 * (ah + ag);
        az = (az * aD + aa * al - as * ak) / aE;
        aA = (aA * aD + ab * al - au * ak) / aE;
      }
      aq = true;
      ao.push({
        type: "C",
        values: [ax, ay, az, aA, ac, ad],
      });
    }
    af = ag;
    ag = ah;
    aj = ak;
    ak = al;
    a8 = aa;
    aa = ac;
    ac = as;
    a9 = ab;
    ab = ad;
    ad = au;
  };
  for (let as = 0, au = a6.length; as <= au; as += 1) {
    if (as < au) {
      if (ap === false) {
        ap = true;
        af = 0;
        ag = 0;
        ah = 0;
        aj = 0;
        ak = 0;
        al = 0;
        am = 0;
      }
      ar(a6[as][0], a6[as][1]);
    } else if (ap === true) {
      ap = false;
      if (am === 2) {
        aq = true;
        ao.push({
          type: "L",
          values: [ac, ad],
        });
      } else if (am === 3) {
        ar(ac, ad);
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
let Xe = (a6, a7 = 0.5) => {
  let a8;
  let a9;
  let aa;
  let ab;
  let ac;
  let ad;
  let af;
  let ag;
  let ah;
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
  let au = [];
  let av = false;
  let aw = (ax, ay) => {
    if (as) {
      let az = ac - ax;
      let aA = ad - ay;
      ar = Math.pow(az * az + aA * aA, a7);
      ao = Math.sqrt(ar);
    }
    if (as === 0) {
      as = 1;
      af = ax;
      ag = ay;
    } else if (as === 1) {
      as = 2;
      ah = ax;
      aj = ay;
      au.push({
        type: "M",
        values: [ah, aj],
      });
    } else if (as === 2) {
      as = 3;
      ak = ax;
      al = ay;
    } else {
      let aB = aa;
      let aC = ab;
      let aD = ac;
      let aE = ad;
      if (am > Ie) {
        let aF = ap * 2 + am * 3 * an + aq;
        let aG = am * 3 * (am + an);
        aB = (aB * aF - a8 * aq + ac * ap) / aG;
        aC = (aC * aF - a9 * aq + ad * ap) / aG;
      }
      if (ao > Ie) {
        let aH = ar * 2 + ao * 3 * an + aq;
        let aI = ao * 3 * (ao + an);
        aD = (aD * aH + aa * ar - ax * aq) / aI;
        aE = (aE * aH + ab * ar - ay * aq) / aI;
      }
      au.push({
        type: "C",
        values: [aB, aC, aD, aE, ac, ad],
      });
    }
    am = an;
    an = ao;
    ap = aq;
    aq = ar;
    a8 = aa;
    aa = ac;
    ac = ax;
    a9 = ab;
    ab = ad;
    ad = ay;
  };
  for (let ax = 0, ay = (a6 = D(a6, true)).length; ax <= ay; ax += 1) {
    if (ax < ay) {
      if (av === false) {
        av = true;
        am = 0;
        an = 0;
        ao = 0;
        ap = 0;
        aq = 0;
        ar = 0;
        as = 0;
      }
      aw(a6[ax][0], a6[ax][1]);
    } else if (av === true) {
      av = false;
      if (as === 1) {
        au.push(
          {
            type: "M",
            values: [af, ag],
          },
          {
            type: "Z",
            values: [],
          }
        );
      } else if (as === 2) {
        au.push(
          {
            type: "L",
            values: [af, ag],
          },
          {
            type: "Z",
            values: [],
          }
        );
      } else if (as === 3) {
        aw(af, ag);
        aw(ah, aj);
        aw(ak, al);
      }
    }
  }
  return au;
};
let He = (a6) => {
  let a7 = null;
  let a8 = [];
  let a9 = a6;
  while (a9 && a9.href.baseVal !== "") {
    if (a7 === null) {
      a7 = pt(a6);
    }
    let aa = a7.querySelector(a9.href.baseVal);
    if (
      !aa ||
      (aa.localName !== "linearGradient" &&
        aa.localName !== "radialGradient") ||
      aa === a6 ||
      a8.includes(aa) !== false
    ) {
      break;
    }
    a8.push(aa);
    a9 = aa;
  }
  return a8;
};
let Ye = (a6) => {
  let a7 = pt(a6);
  let a8 = a6.id;
  return [
    ...a7.querySelectorAll(
      'linearGradient[href="#' + a8 + '"], radialGradient[href="#' + a8 + '"]'
    ),
  ];
};
let _e = (a6) => {
  let a7 = [a6, ...He(a6)];
  let a8 = {};
  {
    let a9 = null;
    for (let aa of a7) {
      if (aa.hasAttribute("gradientUnits")) {
        a9 = aa.gradientUnits.baseVal;
        break;
      }
    }
    if (a9 === null) {
      a9 = SVGUnitTypes.SVG_UNIT_TYPE_OBJECTBOUNDINGBOX;
    }
    a8.gradientUnits = a9;
  }
  {
    let ab = null;
    for (let ac of a7) {
      if (ac.hasAttribute("gradientTransform")) {
        ab = DOMMatrix.fromMatrix(
          ac.gradientTransform.baseVal.consolidate().matrix
        );
        break;
      }
    }
    if (ab === null) {
      ab = new DOMMatrix();
    }
    a8.gradientTransform = ab;
  }
  {
    let ad = null;
    for (let af of a7) {
      if (af.hasAttribute("spreadMethod")) {
        ad = af.spreadMethod.baseVal;
        break;
      }
    }
    if (ad === null) {
      ad = SVGGradientElement.SVG_SPREADMETHOD_PAD;
    }
    a8.spreadMethod = ad;
  }
  if (a6.localName === "linearGradient") {
    for (let ag of ["x1", "y1", "x2", "y2"]) {
      let ah = null;
      for (let aj of a7) {
        if (aj.localName === "linearGradient" && aj.hasAttribute(ag)) {
          ah = {
            value: aj[ag].baseVal.value,
            valueInSpecifiedUnits: aj[ag].baseVal.valueInSpecifiedUnits,
            valueAsString: aj[ag].baseVal.valueAsString,
            unitType: aj[ag].baseVal.unitType,
          };
          break;
        }
      }
      if (ah === null) {
        if (ag === "x1" || ag === "y1" || ag === "y2") {
          ah = {
            value: 0,
            valueInSpecifiedUnits: 0,
            valueAsString: "0%",
            unitType: SVGLength.SVG_LENGTHTYPE_PERCENTAGE,
          };
        } else if (ag === "x2") {
          ah = {
            value: screen.width,
            valueInSpecifiedUnits: 100,
            valueAsString: "100%",
            unitType: SVGLength.SVG_LENGTHTYPE_PERCENTAGE,
          };
        }
      }
      a8[ag] = ah;
    }
  } else if (a6.localName === "radialGradient") {
    for (let ak of ["cx", "cy", "r"]) {
      let al = null;
      for (let am of a7) {
        if (am.localName === "radialGradient" && am.hasAttribute(ak)) {
          al = {
            value: am[ak].baseVal.value,
            valueInSpecifiedUnits: am[ak].baseVal.valueInSpecifiedUnits,
            valueAsString: am[ak].baseVal.valueAsString,
            unitType: am[ak].baseVal.unitType,
          };
          break;
        }
      }
      if (al === null) {
        al = {
          value: screen.width / 2,
          valueInSpecifiedUnits: 50,
          valueAsString: "50%",
          unitType: SVGLength.SVG_LENGTHTYPE_PERCENTAGE,
        };
      }
      a8[ak] = al;
    }
    for (let an of ["fx", "fy", "fr"]) {
      let ao = null;
      for (let ap of a7) {
        if (ap.localName === "radialGradient" && ap.hasAttribute(an)) {
          ao = {
            value: ap[an].baseVal.value,
            valueInSpecifiedUnits: ap[an].baseVal.valueInSpecifiedUnits,
            valueAsString: ap[an].baseVal.valueAsString,
            unitType: ap[an].baseVal.unitType,
          };
          break;
        }
      }
      if (ao === null) {
        if (an === "fx") {
          ao = {
            value: a8.cx.value,
            valueInSpecifiedUnits: a8.cx.valueInSpecifiedUnits,
            valueAsString: a8.cx.valueAsString,
            unitType: a8.cx.unitType,
          };
        } else if (an === "fy") {
          ao = {
            value: a8.cy.value,
            valueInSpecifiedUnits: a8.cy.valueInSpecifiedUnits,
            valueAsString: a8.cy.valueAsString,
            unitType: a8.cy.unitType,
          };
        } else if (an === "fr") {
          ao = {
            value: a8.r.value,
            valueInSpecifiedUnits: a8.r.valueInSpecifiedUnits,
            valueAsString: a8.r.valueAsString,
            unitType: a8.r.unitType,
          };
        }
      }
      a8[an] = ao;
    }
  }
  return a8;
};
let qe = (a6) => {
  let a7 = null;
  let a8 = [];
  let a9 = a6;
  while (a9 && a9.href.baseVal !== "") {
    if (a7 === null) {
      a7 = pt(a6);
    }
    let aa = a7.querySelector(a9.href.baseVal);
    if (
      !aa ||
      aa.localName !== "pattern" ||
      aa === a6 ||
      a8.includes(aa) !== false
    ) {
      break;
    }
    a8.push(aa);
    a9 = aa;
  }
  return a8;
};
let Qe = (a6) => {
  let a7 = null;
  if (a6.href.baseVal !== "") {
    let a8 = pt(a6).querySelector(a6.href.baseVal);
    if (a8 && a8 !== a6 && a8.localName === "pattern") {
      a7 = a8;
    }
  }
  return a7;
};
let We = (a6) => {
  let a7 = [a6, ...qe(a6)];
  let a8 = {};
  {
    let a9 = null;
    for (let aa of a7) {
      if (aa.hasAttribute("patternUnits")) {
        a9 = aa.patternUnits.baseVal;
        break;
      }
    }
    if (a9 === null) {
      a9 = SVGUnitTypes.SVG_UNIT_TYPE_OBJECTBOUNDINGBOX;
    }
    a8.patternUnits = a9;
  }
  {
    let ab = null;
    for (let ac of a7) {
      if (ac.hasAttribute("patternContentUnits")) {
        ab = ac.patternContentUnits.baseVal;
        break;
      }
    }
    if (ab === null) {
      ab = SVGUnitTypes.SVG_UNIT_TYPE_USERSPACEONUSE;
    }
    a8.patternContentUnits = ab;
  }
  {
    let ad = null;
    for (let af of a7) {
      if (af.hasAttribute("patternTransform")) {
        let ag = af.patternTransform.baseVal.consolidate();
        ad = ag ? DOMMatrix.fromMatrix(ag.matrix) : new DOMMatrix();
        break;
      }
    }
    if (ad === null) {
      ad = new DOMMatrix();
    }
    a8.patternTransform = ad;
  }
  {
    let ah = null;
    for (let aj of a7) {
      if (aj.hasAttribute("viewBox")) {
        ah = DOMRect.fromRect(aj.viewBox.baseVal);
        break;
      }
    }
    if (ah === null) {
      ah = new DOMRect();
    }
    a8.viewBox = ah;
  }
  {
    let ak = null;
    for (let al of a7) {
      if (al.hasAttribute("preserveAspectRatio")) {
        ak = al.preserveAspectRatio.baseVal;
        break;
      }
    }
    if (ak === null) {
      ak = {
        align: SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMIDYMID,
        meetOrSlice: SVGPreserveAspectRatio.SVG_MEETORSLICE_MEET,
      };
    }
    a8.preserveAspectRatio = ak;
  }
  for (let am of ["x", "y", "width", "height"]) {
    let an = null;
    for (let ao of a7) {
      if (ao.hasAttribute(am)) {
        an = {
          value: ao[am].baseVal.value,
          valueInSpecifiedUnits: ao[am].baseVal.valueInSpecifiedUnits,
          valueAsString: ao[am].baseVal.valueAsString,
          unitType: ao[am].baseVal.unitType,
        };
        break;
      }
    }
    if (an === null) {
      an = {
        value: 0,
        valueInSpecifiedUnits: 0,
        valueAsString: "0",
        unitType: SVGLength.SVG_LENGTHTYPE_NUMBER,
      };
    }
    a8[am] = an;
  }
  return a8;
};
let Je = (a6) => {
  let a7 = pt(a6);
  let a8 = document.createNodeIterator(a7, NodeFilter.SHOW_ELEMENT);
  let a9 = null;
  let aa = [];
  while ((a9 = a8.nextNode())) {
    if (y.includes(a9.localName)) {
      let { fill, stroke } = getComputedStyle(a9);
      for (let ad of [fill, stroke]) {
        if (ad.startsWith('url("#')) {
          if (
            ad.substring(6, ad.length - 2) === a6.id &&
            aa.includes(a9) === false
          ) {
            aa.push(a9);
          }
        }
      }
    }
  }
  return aa;
};
let Ke = (a6, a7 = "fill") => {
  let a8 = null;
  let a9 = getComputedStyle(a6).getPropertyValue(a7);
  let aa = k.fromString(a9);
  if (aa) {
    let ab = pt(a6).querySelector(aa.value);
    if (ab && g.includes(ab.localName)) {
      a8 = ab;
    }
  }
  return a8;
};
let et = (a6, a7 = "hex") => {
  let a8 = 2166136261;
  for (let a9 = 0, aa = a6.length; a9 < aa; a9 += 1) {
    a8 ^= a6.charCodeAt(a9);
    a8 += (a8 << 1) + (a8 << 4) + (a8 << 7) + (a8 << 8) + (a8 << 24);
  }
  a8 >>>= 0;
  if (a7 === "hex") {
    a8 = ("0000000" + a8.toString(16)).substr(-8);
  }
  return a8;
};
let tt = new Set(["M", "Z", "L", "C", "R", "U", "N"]);
let it = new Set(["R", "U", "N"]);
let nt = (a6, a7 = true) => {
  let a8 = [];
  if (a6.localName === "path") {
    if (a7 === false) {
      a8 = rt(
        a6.getPathData({
          normalize: true,
        })
      );
    } else {
      let a9 = null;
      if (a6.hasAttribute("data-bx-d")) {
        let aa = a6
          .getAttribute("data-bx-d")
          .trim()
          .split(/[\s+,]+/);
        if (aa.length >= 3) {
          if (aa[aa.length - 1].includes("@") ? aa[aa.length - 1] : null) {
            let ab = null;
            a9 = [];
            for (let ac = 0; ac < aa.length - 1; ac += 1) {
              let ad = aa[ac];
              if (tt.has(ad)) {
                ab = {
                  type: ad,
                  values: [],
                };
                a9.push(ab);
              } else {
                ab.values.push(parseFloat(ad));
              }
            }
          }
        }
      }
      a8 =
        a9 ||
        rt(
          a6.getPathData({
            normalize: true,
          })
        );
    }
  } else if (
    ["line", "polyline", "polygon", "rect", "circle", "ellipse"].includes(
      a6.localName
    )
  ) {
    a8 = a6.getPathData({
      normalize: true,
    });
  }
  return a8;
};
let lt = (a6, a7, a8 = null) => {
  if ((a7.find((a9) => it.has(a9.type)) !== undefined) === false) {
    if (a8 !== null) {
      for (let a9 of a7) {
        a9.values = a9.values.map((aa) => M(aa, a8));
      }
    }
    a6.setPathData(a7);
    a6.removeAttribute("data-bx-d");
  } else {
    let aa = at(a7, false);
    let ab = a7;
    if (a8 !== null) {
      aa.forEach((ah) => (ah.values = ah.values.map((aj) => M(aj, a8))));
      ab.forEach((ah) => (ah.values = ah.values.map((aj) => M(aj, a8))));
    }
    let ac = st(aa);
    let ad = st(ab);
    let af = 1;
    let ag = et(ac + " / " + ad + " " + af).toString(32);
    a6.setAttribute("d", ac);
    a6.setAttribute("data-bx-d", ad + " " + af + "@" + ag);
  }
};
let at = (a6, a7 = false) => {
  let a8 = [];
  let a9 = [];
  {
    let aa = [];
    let ab = null;
    let ac = 0;
    let ad = 0;
    for (let af of a6) {
      if (af.type === "M" || af.type === "m") {
        if (aa[0]) {
          a9.push(aa);
          aa = [];
        }
        aa.push(af);
        ac = af.values[0];
        ad = af.values[1];
      } else if (af.type === "Z" || af.type === "z") {
        aa.push(af);
        a9.push(aa);
        aa = [];
      } else {
        if (ab === "Z" || ab === "z") {
          aa.push({
            type: "M",
            values: [ac, ad],
          });
        }
        aa.push(af);
      }
      ab = af.type;
    }
    if (aa[0]) {
      a9.push(aa);
    }
  }
  for (let ag of a9) {
    if (ag[1]?.type === "R") {
      if (a7) {
        a8.push(...ag);
      } else {
        let ah = [];
        let aj = false;
        for (let ak of ag) {
          if (ak.type === "M" || ak.type === "R") {
            ah.push([ak.values[0], ak.values[1]]);
          } else if (ak.type === "Z") {
            aj = true;
          }
        }
        a8.push(...je(ah, aj));
      }
    } else if (ag[1]?.type === "U") {
      if (a7) {
        a8.push(...ag);
      } else {
        let al = [];
        let am = false;
        for (let an of ag) {
          if (an.type === "M" || an.type === "U") {
            al.push([an.values[0], an.values[1]]);
          } else if (an.type === "Z") {
            am = true;
          }
        }
        a8.push(...Ge(al, am));
      }
    } else if (ag[1]?.type === "N");
    else {
      let ao = [];
      let ap = [];
      {
        let aq = null;
        let ar = null;
        let as = null;
        let au = null;
        for (let av of ag) {
          let aw = av.type;
          if (aw === "M") {
            let ax = av.values[0];
            let ay = av.values[1];
            ao.push({
              type: "M",
              values: [ax, ay],
            });
            as = ax;
            au = ay;
            aq = ax;
            ar = ay;
          } else if (aw === "m") {
            let az = aq + av.values[0];
            let aA = ar + av.values[1];
            ao.push({
              type: "M",
              values: [az, aA],
            });
            as = az;
            au = aA;
            aq = az;
            ar = aA;
          } else if (aw === "L") {
            let aB = av.values[0];
            let aC = av.values[1];
            ao.push({
              type: "L",
              values: [aB, aC],
            });
            aq = aB;
            ar = aC;
          } else if (aw === "l") {
            let aD = aq + av.values[0];
            let aE = ar + av.values[1];
            ao.push({
              type: "L",
              values: [aD, aE],
            });
            aq = aD;
            ar = aE;
          } else if (aw === "C") {
            let aF = av.values[0];
            let aG = av.values[1];
            let aH = av.values[2];
            let aI = av.values[3];
            let aJ = av.values[4];
            let aK = av.values[5];
            ao.push({
              type: "C",
              values: [aF, aG, aH, aI, aJ, aK],
            });
            aq = aJ;
            ar = aK;
          } else if (aw === "c") {
            let aL = aq + av.values[0];
            let aM = ar + av.values[1];
            let aN = aq + av.values[2];
            let aO = ar + av.values[3];
            let aP = aq + av.values[4];
            let aQ = ar + av.values[5];
            ao.push({
              type: "C",
              values: [aL, aM, aN, aO, aP, aQ],
            });
            aq = aP;
            ar = aQ;
          } else if (aw === "Q") {
            let aR = av.values[0];
            let aS = av.values[1];
            let aT = av.values[2];
            let aU = av.values[3];
            ao.push({
              type: "Q",
              values: [aR, aS, aT, aU],
            });
            aq = aT;
            ar = aU;
          } else if (aw === "q") {
            let aV = aq + av.values[0];
            let aW = ar + av.values[1];
            let aX = aq + av.values[2];
            let aY = ar + av.values[3];
            ao.push({
              type: "Q",
              values: [aV, aW, aX, aY],
            });
            aq = aX;
            ar = aY;
          } else if (aw === "A") {
            let aZ = av.values[5];
            let b0 = av.values[6];
            ao.push({
              type: "A",
              values: [
                av.values[0],
                av.values[1],
                av.values[2],
                av.values[3],
                av.values[4],
                aZ,
                b0,
              ],
            });
            aq = aZ;
            ar = b0;
          } else if (aw === "a") {
            let b1 = aq + av.values[5];
            let b2 = ar + av.values[6];
            ao.push({
              type: "A",
              values: [
                av.values[0],
                av.values[1],
                av.values[2],
                av.values[3],
                av.values[4],
                b1,
                b2,
              ],
            });
            aq = b1;
            ar = b2;
          } else if (aw === "H") {
            let b3 = av.values[0];
            ao.push({
              type: "H",
              values: [b3],
            });
            aq = b3;
          } else if (aw === "h") {
            let b4 = aq + av.values[0];
            ao.push({
              type: "H",
              values: [b4],
            });
            aq = b4;
          } else if (aw === "V") {
            let b5 = av.values[0];
            ao.push({
              type: "V",
              values: [b5],
            });
            ar = b5;
          } else if (aw === "v") {
            let b6 = ar + av.values[0];
            ao.push({
              type: "V",
              values: [b6],
            });
            ar = b6;
          } else if (aw === "S") {
            let b7 = av.values[0];
            let b8 = av.values[1];
            let b9 = av.values[2];
            let ba = av.values[3];
            ao.push({
              type: "S",
              values: [b7, b8, b9, ba],
            });
            aq = b9;
            ar = ba;
          } else if (aw === "s") {
            let bb = aq + av.values[0];
            let bc = ar + av.values[1];
            let bd = aq + av.values[2];
            let bf = ar + av.values[3];
            ao.push({
              type: "S",
              values: [bb, bc, bd, bf],
            });
            aq = bd;
            ar = bf;
          } else if (aw === "T") {
            let bg = av.values[0];
            let bh = av.values[1];
            ao.push({
              type: "T",
              values: [bg, bh],
            });
            aq = bg;
            ar = bh;
          } else if (aw === "t") {
            let bj = aq + av.values[0];
            let bk = ar + av.values[1];
            ao.push({
              type: "T",
              values: [bj, bk],
            });
            aq = bj;
            ar = bk;
          } else if (aw === "Z" || aw === "z") {
            ao.push({
              type: "Z",
              values: [],
            });
            aq = as;
            ar = au;
          }
        }
      }
      {
        let bl = 0;
        let bm = 0;
        let bn = 0;
        let bo = 0;
        let bp = null;
        let bq = null;
        let br = null;
        for (let bs = 0; bs < ao.length; bs += 1) {
          let bu = ao[bs];
          if (bu.type === "M") {
            let bv = bu.values[0];
            let bw = bu.values[1];
            ap.push({
              type: "M",
              values: [bv, bw],
            });
            bn = bv;
            bo = bw;
            bl = bv;
            bm = bw;
          } else if (bu.type === "C") {
            let bx = bu.values[0];
            let by = bu.values[1];
            let bz = bu.values[2];
            let bA = bu.values[3];
            let bB = bu.values[4];
            let bC = bu.values[5];
            ap.push({
              type: "C",
              values: [bx, by, bz, bA, bB, bC],
            });
            bp = bz;
            bq = bA;
            bl = bB;
            bm = bC;
          } else if (bu.type === "L") {
            let bD = bu.values[0];
            let bE = bu.values[1];
            ap.push({
              type: "L",
              values: [bD, bE],
            });
            bl = bD;
            bm = bE;
          } else if (bu.type === "H") {
            let bF = bu.values[0];
            ap.push({
              type: "L",
              values: [bF, bm],
            });
            bl = bF;
          } else if (bu.type === "V") {
            let bG = bu.values[0];
            ap.push({
              type: "L",
              values: [bl, bG],
            });
            bm = bG;
          } else if (bu.type === "S") {
            let bH;
            let bI;
            let bJ = bu.values[0];
            let bK = bu.values[1];
            let bL = bu.values[2];
            let bM = bu.values[3];
            if (br === "C" || br === "S") {
              bH = bl + (bl - bp);
              bI = bm + (bm - bq);
            } else {
              bH = bl;
              bI = bm;
            }
            ap.push({
              type: "C",
              values: [bH, bI, bJ, bK, bL, bM],
            });
            bp = bJ;
            bq = bK;
            bl = bL;
            bm = bM;
          } else if (bu.type === "T") {
            let bN;
            let bO;
            let bP = bu.values[0];
            let bQ = bu.values[1];
            if (br === "Q" || br === "T") {
              bN = bl + (bl - bp);
              bO = bm + (bm - bq);
            } else {
              bN = bl;
              bO = bm;
            }
            let bR = bl + ((bN - bl) * 2) / 3;
            let bS = bm + ((bO - bm) * 2) / 3;
            let bT = bP + ((bN - bP) * 2) / 3;
            let bU = bQ + ((bO - bQ) * 2) / 3;
            ap.push({
              type: "C",
              values: [bR, bS, bT, bU, bP, bQ],
            });
            bp = bN;
            bq = bO;
            bl = bP;
            bm = bQ;
          } else if (bu.type === "Q") {
            let bV = bu.values[0];
            let bW = bu.values[1];
            let bX = bu.values[2];
            let bY = bu.values[3];
            let bZ = bl + ((bV - bl) * 2) / 3;
            let c0 = bm + ((bW - bm) * 2) / 3;
            let c1 = bX + ((bV - bX) * 2) / 3;
            let c2 = bY + ((bW - bY) * 2) / 3;
            ap.push({
              type: "C",
              values: [bZ, c0, c1, c2, bX, bY],
            });
            bp = bV;
            bq = bW;
            bl = bX;
            bm = bY;
          } else if (bu.type === "A") {
            let c3 = Math.abs(bu.values[0]);
            let c4 = Math.abs(bu.values[1]);
            let c5 = bu.values[2];
            let c6 = bu.values[3];
            let c7 = bu.values[4];
            let c8 = bu.values[5];
            let c9 = bu.values[6];
            if (c3 === 0 || c4 === 0) {
              ap.push({
                type: "C",
                values: [bl, bm, c8, c9, c8, c9],
              });
              bl = c8;
              bm = c9;
            } else if (bl !== c8 || bm !== c9) {
              ze(bl, bm, c8, c9, c3, c4, c5, c6, c7).forEach(function (ca) {
                ap.push({
                  type: "C",
                  values: ca,
                });
              });
              bl = c8;
              bm = c9;
            }
          } else if (bu.type === "Z") {
            ap.push(bu);
            bl = bn;
            bm = bo;
          }
          br = bu.type;
        }
      }
      a8.push(...ap);
    }
  }
  return a8;
};
let st = (a6) => {
  let a7 = "";
  for (let a8 = 0, a9 = a6.length; a8 < a9; a8 += 1) {
    let aa = a6[a8];
    if (a8 > 0) {
      a7 += " ";
    }
    a7 += aa.type;
    if (aa?.values?.length > 0) {
      a7 += " " + aa.values.join(" ");
    }
  }
  return a7;
};
let rt = (a6) => {
  if (!a6.find((ad) => ad.type === "C" || ad.type === "L")) {
    return [];
  }
  let a7 = [];
  let a8 = null;
  let a9 = 0;
  let aa = 0;
  let ab = 0;
  let ac = 0;
  for (let ad of a6) {
    if (ad.type === "M") {
      if (a8 === "M") {
        a7.pop();
      }
      a7.push(ad);
      a9 = ad.values[0];
      aa = ad.values[1];
      ab = ad.values[0];
      ac = ad.values[1];
    } else if (ad.type === "L") {
      if (a8 === "Z") {
        a7.push({
          type: "M",
          values: [ab, ac],
        });
      } else if (ad.values[0] === a9 && ad.values[1] === aa) {
        continue;
      }
      a7.push(ad);
      a9 = ad.values[0];
      aa = ad.values[1];
    } else if (ad.type === "C") {
      if (a8 === "Z") {
        a7.push({
          type: "M",
          values: [ab, ac],
        });
      }
      a7.push(ad);
      a9 = ad.values[4];
      aa = ad.values[5];
    } else if (ad.type === "Z") {
      if (a9 !== ab || aa !== ac) {
        a7.push({
          type: "L",
          values: [ab, ac],
        });
      }
      a7.push(ad);
      a9 = ab;
      aa = ac;
    }
    a8 = ad.type;
  }
  return a7;
};
let ot = (a6, a7 = null) => {
  let a8 = a6.split(":");
  let a9 = null;
  if (a8.length === 1) {
    let [aa] = a8;
    a9 = document.createElement(aa, a7);
  } else if (a8.length === 2) {
    let [ab, ac] = a8;
    if (ab === "svg") {
      a9 = document.createElementNS(p, ac, a7);
    }
  }
  return a9;
};
let pt = (a6) => {
  let a7 = a6.localName === "svg" ? a6 : null;
  for (let a8 = a6.ownerSVGElement; a8; a8 = a8.ownerSVGElement) {
    a7 = a8;
  }
  return a7;
};
let ut = (a6, a7, a8 = true) => {
  let a9 = a6.closest(a7);
  if (a8 && !a9 && a6.getRootNode().host) {
    return ut(a6.getRootNode().host, a7);
  } else {
    return a9;
  }
};
class ht extends HTMLElement {
  static #e = a` <template> <main id="main" part="main"></main> <footer id="footer" part="footer"></footer> </template>
  `;
  static #t = s`
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
  #l;
  constructor() {
    super();
    let a6 = this.constructor.t;
    let a7 = this.constructor.l;
    this.#l = this.attachShadow({
      mode: "closed",
    });
    this.#l.adoptedStyleSheets = [
      a2.themeStyleSheet,
      ht.#t,
      this.constructor._shadowStyleSheet,
    ];
    this.#l.append(document.importNode(ht.#e.content, true));
    if (a6) {
      this.#l
        .querySelector("#main")
        .append(document.importNode(a6.content, true));
    }
    if (a7) {
      this.#l
        .querySelector("#footer")
        .append(document.importNode(a7.content, true));
    }
    for (let a8 of this.#l.querySelectorAll("[id]")) {
      this["#" + a8.id] = a8;
    }
    this.setAttribute("extends", "bx-generator");
    this.setAttribute("tabindex", "0");
  }
}
let ft = (a6, a7 = "xml", a8 = 2) => {
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
  ct(a6, a7);
  ((ac, ad = 2, af = 1) => {
    R(ac);
    let ag = "";
    let ah = {
      text: true,
      textPath: true,
      tspan: true,
      title: true,
      desc: true,
    };
    for (let ak = 0; ak < ad; ak += 1) {
      ag += " ";
    }
    let aj = (al, am = 2) => {
      if (!ah[al.localName]) {
        for (let an of al.children) {
          let ao = al.firstChild === an;
          let ap = al.lastChild === an;
          if (ao === true) {
            let as = document.createTextNode("\n");
            an.parentNode.insertBefore(as, an);
          }
          let aq = "";
          for (let au = 0; au < am; au += 1) {
            aq += ag;
          }
          let ar = document.createTextNode(aq);
          al.insertBefore(ar, an);
          if (ap === true) {
            let av = document.createTextNode("\n");
            al.appendChild(av);
            let aw = "";
            for (let ay = 0; ay < am - 1; ay += 1) {
              aw += ag;
            }
            let ax = document.createTextNode(aw);
            al.appendChild(ax);
          } else {
            let az = document.createTextNode("\n");
            al.insertBefore(az, an.nextSibling);
          }
          if (an.childElementCount > 0) {
            aj(an, am + 1);
          }
        }
      }
    };
    aj(ac, af);
  })(a6, a8);
  return mt(a6, a7);
};
let mt = (a6, a7 = "xml") => {
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
    a8 = L(a8, ' xmlns:xlink="http://www.w3.org/1999/xlink"', "");
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
let ct = (a6, a7) => {
  if (a7 === "xml") {
    let a8;
    let a9 = document.createNodeIterator(a6, NodeFilter.SHOW_ELEMENT);
    let aa = false;
    let ab = false;
    while ((a8 = a9.nextNode())) {
      if (a8.localName !== "bx-title") {
        if (a8.localName.startsWith("bx-")) {
          let ac = document.createElementNS(
            o,
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
          for (let { name, value } of [...a8.attributes]) {
            if (name === "href" || name === "_href") {
              a8.setAttribute("xlink:href", value);
              a8.removeAttribute(name);
              aa = true;
            } else if (name.startsWith("data-bx-")) {
              let aj = name.substring(8);
              a8.setAttributeNS(o, "bx:" + aj, value);
              a8.removeAttribute(name);
              ab = true;
            }
          }
        }
      } else {
        let ak = ot("svg:title");
        ak.innerHTML = a8.innerHTML;
        for (let { name, value } of a8.attributes) {
          ak.setAttribute(name, value);
        }
        a8.replaceWith(ak);
      }
    }
    a6.removeAttribute("xmlns");
    a6.removeAttribute("xmlns:bx");
    a6.removeAttribute("xmlns:xlink");
    a6.setAttributeNS(h, "xmlns", p);
    if (aa) {
      a6.setAttributeNS(h, "xmlns:xlink", u);
    }
    if (ab) {
      a6.setAttributeNS(h, "xmlns:bx", o);
    }
  } else if (a7 === "html") {
    let an;
    let ao = document.createNodeIterator(a6, NodeFilter.SHOW_ELEMENT);
    while ((an = ao.nextNode())) {
      if (an.localName !== "bx-title") {
        for (let { name, value } of [...an.attributes]) {
          if (name === "href" || name === "_href") {
            an.setAttribute("xlink:href", value);
            an.removeAttribute(name);
          }
        }
      } else {
        let ar = ot("svg:title");
        ar.innerHTML = an.innerHTML;
        for (let { name, value } of an.attributes) {
          ar.setAttribute(name, value);
        }
        an.replaceWith(ar);
      }
    }
  }
};
ot("svg:marker");
let { sin: dt, cos: yt, tan: gt, PI: bt } = Math;
const xt = {
  rect: 1,
  frame: 1,
  ring: 1,
  pie: 1,
  crescent: 1,
  triangle: 1,
  "n-gon": 1,
  star: 1,
  cog: 1,
  arrow: 1,
  cross: 1,
  spiral: 1,
};
let wt = (a6) => {
  let a7 = null;
  if (a6.hasAttribute("data-bx-shape")) {
    let a8 = a6
      .getAttribute("data-bx-shape")
      .trim()
      .split(/[\s+,]+/);
    if (a8.length >= 3) {
      let a9 = a8[0];
      if (a8[a8.length - 1].includes("@") ? a8[a8.length - 1] : null) {
        let aa = a8.slice(1, a8.length - 1);
        aa = aa.map((ab) => parseFloat(ab));
        a7 = {
          type: a9,
          values: aa,
        };
      }
    }
  }
  return a7;
};
let vt = (a6, a7, a8 = 9) => {
  let a9 = Mt(a7, a8);
  if (a9) {
    a6.setPathData(a9);
    let aa = a6.getAttribute("d");
    let ab = a7.values.map((ag) => M(ag, a8)).join(" ");
    let ac = a7.type + " " + ab;
    let ad = xt[a7.type];
    let af = et(aa + " / " + ac + " " + ad).toString(32);
    a6.setAttribute("data-bx-shape", ac + " " + ad + "@" + af);
  }
};
let Mt = (a6, a7 = 6) => {
  let a8 = null;
  if (a6.type === "rect") {
    a8 = Pt(a6, a7);
  } else if (a6.type === "frame") {
    a8 = Ot(a6, a7);
  } else if (a6.type === "ring") {
    a8 = kt(a6, a7);
  } else if (a6.type === "pie") {
    a8 = Dt(a6, a7);
  } else if (a6.type === "crescent") {
    a8 = Ut(a6, a7);
  } else if (a6.type === "triangle") {
    a8 = St(a6, a7);
  } else if (a6.type === "n-gon") {
    a8 = Ct(a6, a7);
  } else if (a6.type === "star") {
    a8 = Nt(a6, a7);
  } else if (a6.type === "cog") {
    a8 = At(a6, a7);
  } else if (a6.type === "arrow") {
    a8 = Tt(a6, a7);
  } else if (a6.type === "cross") {
    a8 = Ft(a6, a7);
  } else if (a6.type === "spiral") {
    a8 = Vt(a6, a7);
  }
  return a8;
};
let Pt = (a6, a7) => {
  let [a8, a9, aa, ab, ac, ad, af, ag, ah, aj, ak, al] = a6.values;
  if (ah === undefined) {
    ah = ac;
  }
  if (aj === undefined) {
    aj = ad;
  }
  if (ak === undefined) {
    ak = af;
  }
  if (al === undefined) {
    al = ag;
  }
  ac = ac > aa / 2 ? aa / 2 : ac;
  ad = ad > aa / 2 ? aa / 2 : ad;
  af = af > aa / 2 ? aa / 2 : af;
  ag = ag > aa / 2 ? aa / 2 : ag;
  ah = ah > ab / 2 ? ab / 2 : ah;
  aj = aj > ab / 2 ? ab / 2 : aj;
  ak = ak > ab / 2 ? ab / 2 : ak;
  al = al > ab / 2 ? ab / 2 : al;
  let am = [
    {
      type: "M",
      values: [a8 + ac, a9],
    },
    {
      type: "H",
      values: [a8 + aa - ad],
    },
    {
      type: "A",
      values: [ad, aj, 0, 0, 1, a8 + aa, a9 + aj],
    },
    {
      type: "V",
      values: [a9 + ab - ak],
    },
    {
      type: "A",
      values: [af, ak, 0, 0, 1, a8 + aa - af, a9 + ab],
    },
    {
      type: "H",
      values: [a8 + ag],
    },
    {
      type: "A",
      values: [ag, al, 0, 0, 1, a8, a9 + ab - al],
    },
    {
      type: "V",
      values: [a9 + ah],
    },
    {
      type: "A",
      values: [ac, ah, 0, 0, 1, a8 + ac, a9],
    },
    {
      type: "Z",
      values: [],
    },
  ];
  am = am.filter(
    (an) => an.type !== "A" || (an.values[0] !== 0 && an.values[1] !== 0)
  );
  for (let an of am) {
    an.values = an.values.map((ao) => M(ao, a7));
  }
  return am;
};
let Ot = (a6, a7) => {
  let [a8, a9, aa, ab, ac, ad, af, ag, ah, aj] = a6.values;
  let ak = Math.min(aa / 2, ab / 2);
  ac = P(ac, 0, aa / 2);
  ad = P(ad, 0, ab / 2);
  af = P(af, 0, ak);
  ag = P(ag, 0, ak);
  ah = P(ah, 0, ak);
  aj = P(aj, 0, ak);
  let al = aa - ac * 2;
  let am = ab - ad * 2;
  let an = a8 + ac;
  let ao = a9 + ad;
  let ap = Math.min(al / 2, am / 2);
  let aq = P(af - ac / 2, 0, ap);
  let ar = P(ag - ac / 2, 0, ap);
  let as = P(ah - ac / 2, 0, ap);
  let au = P(aj - ac / 2, 0, ap);
  let av = [
    {
      type: "M",
      values: [a8 + af, a9],
    },
    {
      type: "H",
      values: [a8 + aa - ag],
    },
    {
      type: "A",
      values: [ag, ag, 0, 0, 1, a8 + aa, a9 + ag],
    },
    {
      type: "V",
      values: [a9 + ab - ah],
    },
    {
      type: "A",
      values: [ah, ah, 0, 0, 1, a8 + aa - ah, a9 + ab],
    },
    {
      type: "H",
      values: [a8 + aj],
    },
    {
      type: "A",
      values: [aj, aj, 0, 0, 1, a8, a9 + ab - aj],
    },
    {
      type: "V",
      values: [a9 + af],
    },
    {
      type: "A",
      values: [af, af, 0, 0, 1, a8 + af, a9],
    },
    {
      type: "Z",
      values: [],
    },
    {
      type: "M",
      values: [an, ao + aq],
    },
    {
      type: "V",
      values: [ao + am - au],
    },
    {
      type: "A",
      values: [au, au, 0, 0, 0, an + au, ao + am],
    },
    {
      type: "H",
      values: [an + al - as],
    },
    {
      type: "A",
      values: [as, as, 0, 0, 0, an + al, ao + am - as],
    },
    {
      type: "V",
      values: [ao + ar],
    },
    {
      type: "A",
      values: [ar, ar, 0, 0, 0, an + al - ar, ao],
    },
    {
      type: "H",
      values: [an + aq],
    },
    {
      type: "A",
      values: [aq, aq, 0, 0, 0, an, ao + aq],
    },
    {
      type: "Z",
      values: [],
    },
  ];
  av = av.filter(
    (aw) => aw.type !== "A" || (aw.values[0] !== 0 && aw.values[1] !== 0)
  );
  for (let aw of av) {
    aw.values = aw.values.map((ax) => M(ax, a7));
  }
  return av;
};
let kt = (a6, a7) => {
  let [a8, a9, aa, ab, ac, ad] = a6.values;
  let af = [
    {
      type: "M",
      values: [a8, a9],
    },
    {
      type: "m",
      values: [-ac, 0],
    },
    {
      type: "a",
      values: [ac, ad, 0, 1, 0, ac * 2, 0],
    },
    {
      type: "a",
      values: [ac, ad, 0, 1, 0, ac * -2, 0],
    },
    {
      type: "Z",
      values: [],
    },
    {
      type: "M",
      values: [a8, a9],
    },
    {
      type: "m",
      values: [-aa, 0],
    },
    {
      type: "a",
      values: [aa, ab, 0, 0, 1, aa * 2, 0],
    },
    {
      type: "a",
      values: [aa, ab, 0, 0, 1, aa * -2, 0],
    },
    {
      type: "Z",
      values: [],
    },
  ];
  for (let ag of af) {
    ag.values = ag.values.map((ah) => M(ah, a7));
  }
  return af;
};
let Dt = (a6, a7) => {
  let [a8, a9, aa, ab, ac, ad] = a6.values;
  let af = De(ac);
  let ag = De(ad);
  let ah = ad - ac;
  let aj = ah >= 180 || (ah >= -180 && ah <= 0) ? 1 : 0;
  let ak = [
    {
      type: "M",
      values: [a8 + ab * dt(af), a9 + ab * -yt(af)],
    },
    {
      type: "A",
      values: [ab, ab, 0, aj, 1, a8 + ab * dt(ag), a9 + ab * -yt(ag)],
    },
    {
      type: "L",
      values: [a8 + aa * dt(ag), a9 + aa * -yt(ag)],
    },
  ];
  if (aa > 0) {
    let al = a8 + aa * dt(af);
    let am = a9 + aa * -yt(af);
    ak.push({
      type: "A",
      values: [aa, aa, 0, aj, 0, al, am],
    });
  }
  ak.push({
    type: "Z",
    values: [],
  });
  for (let an of ak) {
    an.values = an.values.map((ao) => M(ao, a7));
  }
  return ak;
};
let Ut = (a6, a7) => {
  let [a8, a9, aa, ab, ac] = a6.values;
  let ad = Oe(90 - ab / 2);
  let af = De(ad);
  let ag = Oe(ad + ab);
  let ah = De(ag);
  let aj = ag - ad;
  let ak = aj >= 180 || (aj >= -180 && aj <= 0) ? 1 : 0;
  let al = new DOMPoint(a8 + aa * dt(af), a9 + aa * -yt(af));
  let am = new DOMPoint(a8 + aa * dt(ah), a9 + aa * -yt(ah));
  let an = new DOMPoint(a8 - aa + aa * 2 * ac, a9);
  let ao = [];
  ao.push({
    type: "M",
    values: [al.x, al.y],
  });
  ao.push({
    type: "A",
    values: [aa, aa, 0, ak, 1, am.x, am.y],
  });
  if (ve(al, am, an) === true) {
    ao.push({
      type: "L",
      values: [al.x, al.y],
    });
  } else {
    ao.push(
      ((ap, aq, ar) => {
        if (ve(ap, aq, ar) === true) {
          throw new Error("Given points are colinear");
        }
        {
          let as = Me(aq, ar);
          let au = Me(ar, ap);
          let av = Me(ap, aq);
          let aw = acos((as * as + au * au - av * av) / (as * 2 * au));
          let ax = (as * au * av) / 4 / (as * 0.5 * au * sin(aw));
          return {
            type: "A",
            values: [
              ax,
              ax,
              0,
              +(ge / 2 > aw),
              +(
                (aq.x - ap.x) * (ar.y - ap.y) - (aq.y - ap.y) * (ar.x - ap.x) <
                0
              ),
              aq.x,
              aq.y,
            ],
          };
        }
      })(am, al, an)
    );
  }
  ao.push({
    type: "Z",
    values: [],
  });
  for (let ap of ao) {
    ap.values = ap.values.map((aq) => M(aq, a7));
  }
  return ao;
};
let St = (a6, a7) => {
  let [a8, a9, aa, ab, ac, ad] = a6.values;
  let af = [];
  if (ad === 0) {
    af.push({
      type: "M",
      values: [a8 + aa * ac, a9],
    });
    af.push({
      type: "L",
      values: [a8 + aa, a9 + ab],
    });
    af.push({
      type: "L",
      values: [a8, a9 + ab],
    });
    af.push({
      type: "L",
      values: [a8 + aa * ac, a9],
    });
  } else {
    let ag = [
      {
        x: a8 + aa * ac,
        y: a9,
      },
      {
        x: a8 + aa,
        y: a9 + ab,
      },
      {
        x: a8,
        y: a9 + ab,
      },
    ];
    for (let ah = 0; ah < ag.length; ah += 1) {
      let aj = ag[ah];
      let ak = ag[ah + 1] || ag[0];
      let al = ag[ah - 1] || ag[ag.length - 1];
      let am = {
        x: aj.x + (al.x - aj.x) * ad,
        y: aj.y + (al.y - aj.y) * ad,
      };
      let an = {
        x: aj.x + (ak.x - aj.x) * ad,
        y: aj.y + (ak.y - aj.y) * ad,
      };
      let ao = {
        x: aj.x,
        y: aj.y,
      };
      af.push({
        type: ah === 0 ? "M" : "L",
        values: [am.x, am.y],
      });
      af.push({
        type: "Q",
        values: [ao.x, ao.y, an.x, an.y],
      });
    }
  }
  af.push({
    type: "Z",
    values: [],
  });
  for (let ap of af) {
    ap.values = ap.values.map((aq) => M(aq, a7));
  }
  return af;
};
let Ct = (a6, a7) => {
  let [a8, a9, aa, ab, ac, ad] = a6.values;
  let af = [];
  if (ad === 0) {
    for (let ag = 0; ag < ac; ag += 1) {
      let ah = bt * 2 * (ag / ac) - bt / 2;
      let aj = aa * yt(ah) + a8;
      let ak = ab * dt(ah) + a9;
      if (ag === 0) {
        af.push({
          type: "M",
          values: [aj, ak],
        });
      } else {
        af.push({
          type: "L",
          values: [aj, ak],
        });
      }
    }
  } else {
    let al = [];
    for (let am = 0; am < ac; am += 1) {
      let an = bt * 2 * (am / ac) - bt / 2;
      al.push({
        x: aa * yt(an) + a8,
        y: ab * dt(an) + a9,
      });
    }
    for (let ao = 0; ao < al.length; ao += 1) {
      let ap = al[ao];
      let aq = al[ao + 1] || al[0];
      let ar = al[ao - 1] || al[al.length - 1];
      let as = {
        x: ap.x + (ar.x - ap.x) * ad,
        y: ap.y + (ar.y - ap.y) * ad,
      };
      let au = {
        x: ap.x + (aq.x - ap.x) * ad,
        y: ap.y + (aq.y - ap.y) * ad,
      };
      let av = {
        x: ap.x,
        y: ap.y,
      };
      af.push({
        type: ao === 0 ? "M" : "L",
        values: [as.x, as.y],
      });
      af.push({
        type: "Q",
        values: [av.x, av.y, au.x, au.y],
      });
    }
  }
  af.push({
    type: "Z",
    values: [],
  });
  for (let aw of af) {
    aw.values = aw.values.map((ax) => M(ax, a7));
  }
  return af;
};
let Nt = (a6, a7) => {
  let [a8, a9, aa, ab, ac, ad] = a6.values;
  let af = [];
  for (let ag = 0; ag < ad; ag += 1) {
    let ah = bt * 2 * (ag / ad) - bt / 2;
    let aj = aa * yt(ah) + a8;
    let ak = ab * dt(ah) + a9;
    if (ag === 0) {
      af.push({
        type: "M",
        values: [aj, ak],
      });
    } else {
      af.push({
        type: "L",
        values: [aj, ak],
      });
    }
    ah = bt * 2 * (ag / ad) + bt / ad - bt / 2;
    aj = ac * aa * yt(ah) + a8;
    ak = ac * ab * dt(ah) + a9;
    af.push({
      type: "L",
      values: [aj, ak],
    });
  }
  af.push({
    type: "Z",
    values: [],
  });
  for (let al of af) {
    al.values = al.values.map((am) => M(am, a7));
  }
  return af;
};
let At = (a6, a7) => {
  let [a8, a9, aa, ab, ac, ad, af] = a6.values;
  let ag = 360 / af;
  let ah = ag / 4;
  let aj = gt(De(ah - ad * ah)) * ac;
  let ak = [];
  for (let al = 0; al < af; al += 1) {
    let am = ag * al - 90;
    let an = am + ah + ad * ah;
    let ao = am + ag - ah - ad * ah;
    let ap = De(am);
    let aq = De(an);
    let ar = De(ao);
    ak.push({
      type: al === 0 ? "M" : "L",
      values: [a8 + ac * yt(ap) + dt(ap) * aj, a9 + ac * dt(ap) - yt(ap) * aj],
    });
    ak.push({
      type: "L",
      values: [a8 + ac * yt(ap) - dt(ap) * aj, a9 + ac * dt(ap) + yt(ap) * aj],
    });
    ak.push({
      type: "L",
      values: [a8 + ab * yt(aq), a9 + ab * dt(aq)],
    });
    ak.push({
      type: "A",
      values: [ab, ab, 0, 0, 1, a8 + ab * yt(ar), a9 + ab * dt(ar)],
    });
  }
  ak.push({
    type: "Z",
    values: [],
  });
  ak.push({
    type: "M",
    values: [a8, a9 - aa],
  });
  ak.push({
    type: "A",
    values: [aa, aa, 0, 0, 0, a8, a9 + aa],
  });
  ak.push({
    type: "A",
    values: [aa, aa, 0, 0, 0, a8, a9 - aa],
  });
  for (let as of ak) {
    as.values = as.values.map((au) => M(au, a7));
  }
  return ak;
};
let Tt = (a6, a7) => {
  let [a8, a9, aa, ab, ac, ad, af] = a6.values;
  if (ad > aa) {
    ad = aa;
  }
  if (af < 0) {
    af = 0;
  } else if (af > ad) {
    af = ad;
  }
  let ag = [
    {
      type: "M",
      values: [a8, a9 + ab / 2 - ac / 2],
    },
    {
      type: "H",
      values: [a8 + aa - ad + af],
    },
    {
      type: "L",
      values: [a8 + aa - ad, a9],
    },
    {
      type: "L",
      values: [a8 + aa, a9 + ab / 2],
    },
    {
      type: "L",
      values: [a8 + aa - ad, a9 + ab],
    },
    {
      type: "L",
      values: [a8 + aa - ad + af, a9 + ab / 2 + ac / 2],
    },
    {
      type: "H",
      values: [a8],
    },
    {
      type: "V",
      values: [a9 + ab / 2 - ac / 2],
    },
    {
      type: "Z",
      values: [],
    },
  ];
  for (let ah of ag) {
    ah.values = ah.values.map((aj) => M(aj, a7));
  }
  return ag;
};
let Ft = (a6, a7) => {
  let [a8, a9, aa, ab, ac, ad, af] = a6.values;
  let ag = [
    {
      type: "M",
      values: [a8 + aa / 2 - ad / 2, a9],
    },
    {
      type: "H",
      values: [a8 + aa / 2 + ad / 2],
    },
    {
      type: "V",
      values: [a9 + ab * af - ac / 2],
    },
    {
      type: "H",
      values: [a8 + aa],
    },
    {
      type: "V",
      values: [a9 + ab * af + ac / 2],
    },
    {
      type: "H",
      values: [a8 + aa / 2 + ad / 2],
    },
    {
      type: "V",
      values: [a9 + ab],
    },
    {
      type: "H",
      values: [a8 + aa / 2 - ad / 2],
    },
    {
      type: "V",
      values: [a9 + ab * af + ac / 2],
    },
    {
      type: "H",
      values: [a8],
    },
    {
      type: "V",
      values: [a9 + ab * af - ac / 2],
    },
    {
      type: "H",
      values: [a8 + aa / 2 - ad / 2],
    },
    {
      type: "Z",
      values: [],
    },
  ];
  for (let ah of ag) {
    ah.values = ah.values.map((aj) => M(aj, a7));
  }
  return ag;
};
let Vt = (a6, a7) => {
  let [a8, a9, aa, ab, ac, ad] = a6.values;
  let af = 30;
  if (ac < 0) {
    ac = 0;
  }
  if (ad < ac + 1) {
    ad = ac + 1;
  }
  if (ad - ac < af) {
    af = ad - ac;
  }
  if (aa >= ab) {
    aa = ab - 0.01;
  }
  let ag = aa;
  let ah = (ab - aa) / (ad / 360) / Math.PI / 2;
  let aj = (ac * Math.PI) / 180;
  let ak = aj;
  let al = (ad * Math.PI) / 180;
  let am = (af * Math.PI) / 180;
  let an = ag + ah * aj;
  let ao = ag + ah * ak;
  let ap = [];
  let aq = {
    x: a8 + ao * Math.cos(ak),
    y: a9 + ao * Math.sin(ak),
  };
  let ar =
    (ah * Math.sin(aj) + (ag + ah * ak) * Math.cos(aj)) /
    (ah * Math.cos(aj) - (ag + ah * ak) * Math.sin(aj));
  let as = ar;
  ap.push({
    type: "M",
    values: [aq.x, aq.y],
  });
  do {
    if (aj + am + am > al) {
      am = al - ak;
    }
    aj = ak;
    ak += am;
    an = ao;
    ao = ag + ah * ak;
    aq.x = a8 + ao * Math.cos(ak);
    aq.y = a9 + ao * Math.sin(ak);
    let au = ag + ah * ak;
    ar = as;
    as =
      (ah * Math.sin(ak) + au * Math.cos(ak)) /
      (ah * Math.cos(ak) - au * Math.sin(ak));
    let av = -(ar * an * Math.cos(aj) - an * Math.sin(aj));
    let aw = (-(as * ao * Math.cos(ak) - ao * Math.sin(ak)) - av) / (ar - as);
    let ax = {
      x: aw,
      y: ar * aw + av,
    };
    ax.x += a8;
    ax.y += a9;
    ap.push({
      type: "Q",
      values: [ax.x, ax.y, aq.x, aq.y],
    });
  } while (aj + am < al);
  {
    let ay = new DOMMatrix()
      .translateSelf(a8, a9)
      .rotateSelf(-90)
      .translateSelf(-a8, -a9);
    for (let az of ap) {
      if (az.type === "M") {
        let [aA, aB] = az.values;
        let aC = new DOMPoint(aA, aB).matrixTransform(ay);
        az.values = [aC.x, aC.y];
      } else if (az.type === "Q") {
        let [aD, aE, aF, aG] = az.values;
        let aH = new DOMPoint(aD, aE).matrixTransform(ay);
        let aI = new DOMPoint(aF, aG).matrixTransform(ay);
        az.values = [aH.x, aH.y, aI.x, aI.y];
      }
    }
  }
  for (let aJ of ap) {
    aJ.values = aJ.values.map((aK) => M(aK, a7));
  }
  return ap;
};
let {
  abs: Et,
  sqrt: Bt,
  asin: Lt,
  sin: zt,
  cos: Gt,
  tan: Rt,
  atan2: $t,
} = Math;
let It = (a6) => {
  let a7 = {};
  let a8 = [
    [a6.a, a6.b, 0, 0],
    [a6.c, a6.d, 0, 0],
    [0, 0, 1, 0],
    [a6.e, a6.f, 0, 1],
  ];
  if (a8[3][3] == 0) {
    return null;
  }
  for (let ag = 0; ag < 4; ag++) {
    for (let ah = 0; ah < 4; ah++) {
      a8[ag][ah] /= a8[3][3];
    }
  }
  let a9 = [];
  for (let aj = 0; aj < 4; aj++) {
    a9[aj] = [];
    for (let ak = 0; ak < 4; ak++) {
      a9[aj][ak] = a8[aj][ak];
    }
  }
  for (let al = 0; al < 3; al++) {
    a9[al][3] = 0;
  }
  a9[3][3] = 1;
  if (Xt(a9) == 0) {
    return null;
  }
  if (a8[0][3] !== 0 || a8[1][3] !== 0 || a8[2][3] !== 0) {
    let am = [0, 0, 0, 0];
    am[0] = a8[0][3];
    am[1] = a8[1][3];
    am[2] = a8[2][3];
    am[3] = a8[3][3];
    let an = Ht(a9);
    let ao = Yt(an);
    let ap = _t(am, ao);
    a7.perspectiveX = ap[0];
    a7.perspectiveY = ap[1];
    a7.perspectiveZ = ap[2];
    a7.perspectiveW = ap[3];
    a8[0][3] = a8[1][3] = a8[2][3] = 0;
    a8[3][3] = 1;
  } else {
    a7.perspectiveX = 0;
    a7.perspectiveY = 0;
    a7.perspectiveZ = 0;
    a7.perspectiveW = 1;
  }
  a7.translateX = a8[3][0];
  a8[3][0] = 0;
  a7.translateY = a8[3][1];
  a8[3][1] = 0;
  a7.translateZ = a8[3][2];
  a8[3][2] = 0;
  let aa = [[], [], []];
  let ab = [0, 0, 0];
  for (let aq = 0; aq < 3; aq++) {
    aa[aq][0] = a8[aq][0];
    aa[aq][1] = a8[aq][1];
    aa[aq][2] = a8[aq][2];
  }
  a7.scaleX = qt(aa[0]);
  Qt(aa[0], 1);
  a7.skewXY = Wt(aa[0], aa[1]);
  Jt(aa[1], aa[0], aa[1], 1, -a7.skewXY);
  a7.scaleY = qt(aa[1]);
  Qt(aa[1], 1);
  a7.skewXY /= a7.scaleY;
  a7.skewXZ = Wt(aa[0], aa[2]);
  Jt(aa[2], aa[0], aa[2], 1, -a7.skewXZ);
  a7.skewYZ = Wt(aa[1], aa[2]);
  Jt(aa[2], aa[1], aa[2], 1, -a7.skewYZ);
  a7.scaleZ = qt(aa[2]);
  Qt(aa[2], 1);
  a7.skewXZ /= a7.scaleZ;
  a7.skewYZ /= a7.scaleZ;
  Kt(aa[1], aa[2], ab);
  if (Wt(aa[0], ab) < 0) {
    a7.scaleX *= -1;
    a7.scaleY *= -1;
    a7.scaleZ *= -1;
    for (let ar = 0; ar < 3; ar++) {
      aa[ar][0] *= -1;
      aa[ar][1] *= -1;
      aa[ar][2] *= -1;
    }
  }
  let ac = 0;
  let ad = Lt(-aa[0][2]);
  let af = 0;
  if (Gt(ad) !== 0) {
    ac = $t(aa[1][2], aa[2][2]);
    af = $t(aa[0][1], aa[0][0]);
  } else {
    ac = $t(-aa[2][0], aa[1][1]);
  }
  a7.rotateX = ke(ac);
  a7.rotateY = ke(ad);
  a7.rotateZ = ke(af);
  for (let [as, au] of Object.entries(a7)) {
    if (Math.abs(au) < Number.EPSILON) {
      a7[as] = M(au, 9);
    }
  }
  return a7;
};
let jt = (a6, a7, a8, a9) => a6 * a9 - a7 * a8;
let Zt = (a6, a7, a8, a9, aa, ab, ac, ad, af) =>
  a6 * jt(aa, ab, ad, af) - a9 * jt(a7, a8, ad, af) + ac * jt(a7, a8, aa, ab);
let Xt = (a6) => {
  let a7 = a6[0][0];
  let a8 = a6[0][1];
  let a9 = a6[0][2];
  let aa = a6[0][3];
  let ab = a6[1][0];
  let ac = a6[1][1];
  let ad = a6[1][2];
  let af = a6[1][3];
  let ag = a6[2][0];
  let ah = a6[2][1];
  let aj = a6[2][2];
  let ak = a6[2][3];
  let al = a6[3][0];
  let am = a6[3][1];
  let an = a6[3][2];
  let ao = a6[3][3];
  return (
    a7 * Zt(ac, ah, am, ad, aj, an, af, ak, ao) -
    a8 * Zt(ab, ag, al, ad, aj, an, af, ak, ao) +
    a9 * Zt(ab, ag, al, ac, ah, am, af, ak, ao) -
    aa * Zt(ab, ag, al, ac, ah, am, ad, aj, an)
  );
};
let Ht = (a6) => {
  let a7 = ((a9) => {
    a9[0][0];
    a9[0][1];
    a9[0][2];
    a9[0][3];
    a9[1][0];
    a9[1][1];
    a9[1][2];
    a9[1][3];
    a9[2][0];
    a9[2][1];
    a9[2][2];
    a9[2][3];
    a9[3][0];
    a9[3][1];
    a9[3][2];
    a9[3][3];
  })(a6);
  let a8 = Xt(a6);
  if (Et(a8) < 1e-8) {
    return false;
  }
  for (let a9 = 0; a9 < 4; a9++) {
    for (let aa = 0; aa < 4; aa++) {
      a7[a9][aa] = a7[a9][aa] / a8;
    }
  }
  return a7;
};
let Yt = (a6) => {
  let a7 = [[], [], [], []];
  for (let a8 = 0; a8 < 4; a8++) {
    for (let a9 = 0; a9 < 4; a9++) {
      a7[a8][a9] = a6[a9][a8];
    }
  }
  return a7;
};
let _t = (a6, a7) => {
  let a8 = [];
  a8[0] =
    a6[0] * a7[0][0] + a6[1] * a7[1][0] + a6[2] * a7[2][0] + a6[3] * a7[3][0];
  a8[1] =
    a6[0] * a7[0][1] + a6[1] * a7[1][1] + a6[2] * a7[2][1] + a6[3] * a7[3][1];
  a8[2] =
    a6[0] * a7[0][2] + a6[1] * a7[1][2] + a6[2] * a7[2][2] + a6[3] * a7[3][2];
  a8[3] =
    a6[0] * a7[0][3] + a6[1] * a7[1][3] + a6[2] * a7[2][3] + a6[3] * a7[3][3];
  return a8;
};
let qt = (a6) => Bt(a6[0] * a6[0] + a6[1] * a6[1] + a6[2] * a6[2]);
let Qt = (a6, a7) => {
  let a8 = qt(a6);
  if (a8 != 0) {
    let a9 = a7 / a8;
    a6[0] *= a9;
    a6[1] *= a9;
    a6[2] *= a9;
  }
};
let Wt = (a6, a7) => a6[0] * a7[0] + a6[1] * a7[1] + a6[2] * a7[2];
let Jt = (a6, a7, a8, a9, aa) => {
  a8[0] = a9 * a6[0] + aa * a7[0];
  a8[1] = a9 * a6[1] + aa * a7[1];
  a8[2] = a9 * a6[2] + aa * a7[2];
};
let Kt = (a6, a7, a8) => {
  a8[0] = a6[1] * a7[2] - a6[2] * a7[1];
  a8[1] = a6[2] * a7[0] - a6[0] * a7[2];
  a8[2] = a6[0] * a7[1] - a6[1] * a7[0];
};
let { abs: ei, min: ti, max: ii } = Math;
let { parseFloat: ni } = Number;
const { SVG_UNIT_TYPE_OBJECTBOUNDINGBOX, SVG_UNIT_TYPE_USERSPACEONUSE } =
  SVGUnitTypes;
let si = Symbol();
let ri = Symbol();
let oi = Symbol();
let pi = Symbol();
let ui = Symbol();
let hi = Symbol();
let fi = Symbol();
let mi = Symbol();
let ci = Symbol();
let di = Symbol();
let yi = Symbol();
let gi = Symbol();
let bi = (a6, a7 = {}) => {
  if (_(a6) === false) {
    return;
  }
  if (a7.geometryPrecision === undefined) {
    a7.geometryPrecision = 3;
  }
  if (a7.transformPrecision === undefined) {
    a7.transformPrecision = 3;
  }
  if (a7.preserveStrokeWidth === undefined) {
    a7.preserveStrokeWidth = true;
  }
  if (a7.preserveRectRadii === undefined) {
    a7.preserveRectRadii = true;
  }
  if (a7.preserveRotation === undefined) {
    a7.preserveRotation = true;
  }
  if (a7.transformDirection === undefined) {
    a7.transformDirection = "bottom-right";
  }
  let a8 = a6.localName;
  if (a8 === "g") {
    xi(a6, a7);
  } else if (a8 === "a") {
    wi(a6, a7);
  } else if (a8 === "rect") {
    vi(a6, a7);
  } else if (a8 === "circle") {
    Mi(a6, a7);
  } else if (a8 === "ellipse") {
    Pi(a6, a7);
  } else if (a8 === "text") {
    $i(a6, a7);
  } else if (a8 === "image") {
    Oi(a6, a7);
  } else if (a8 === "line") {
    ki(a6, a7);
  } else if (a8 === "polyline") {
    Di(a6, a7);
  } else if (a8 === "polygon") {
    Di(a6, a7);
  } else if (a8 === "use") {
    Ui(a6, a7);
  } else if (a8 === "path") {
    if (a6.hasAttribute("data-bx-shape")) {
      let { type } = wt(a6);
      if (type === "rect") {
        Ai(a6, a7);
      } else if (type === "frame") {
        Vi(a6, a7);
      } else if (type === "ring") {
        Ei(a6, a7);
      } else if (type === "pie") {
        Bi(a6, a7);
      } else if (type === "crescent") {
        Ci(a6, a7);
      } else if (type === "triangle") {
        Ni(a6, a7);
      } else if (type === "n-gon") {
        Ti(a6, a7);
      } else if (type === "star") {
        Fi(a6, a7);
      } else if (type === "cog") {
        Li(a6, a7);
      } else if (type === "arrow") {
        zi(a6, a7);
      } else if (type === "cross") {
        Gi(a6, a7);
      } else if (type === "spiral") {
        Ri(a6, a7);
      } else {
        Si(a6, a7);
      }
    } else {
      Si(a6, a7);
    }
  }
};
let xi = (a6, { transformPrecision }) => {
  Y(a6, H(a6), transformPrecision);
};
let wi = (a6, { transformPrecision }) => {
  Y(a6, H(a6), transformPrecision);
};
let vi = (a6, a7) => {
  let a8 = H(a6);
  let { geometryPrecision, transformPrecision, preserveRectRadii } = a7;
  if (a8.is2D) {
    Ii(a6);
    let ac = Zi(a6);
    let ad = H(a6);
    let { scaleX, scaleY } = It(ad);
    let ah = a6.x.baseVal.value;
    let aj = a6.y.baseVal.value;
    let ak = a6.width.baseVal.value;
    let al = a6.height.baseVal.value;
    let am = a6.rx.baseVal.value;
    let an = a6.ry.baseVal.value;
    let ao = new DOMPoint(ah, aj).matrixTransform(ad);
    let ap = new DOMPoint(ah + ak, aj).matrixTransform(ad);
    let aq = new DOMPoint(ah, aj + al).matrixTransform(ad);
    ah *= scaleX;
    aj *= scaleY;
    ak *= ei(scaleX);
    al *= ei(scaleY);
    if (preserveRectRadii === false) {
      am *= ei(scaleX);
      an *= ei(scaleY);
    }
    let ar = new DOMPoint(ah, aj);
    let as = new DOMPoint(ah + ak, aj);
    let au = new DOMPoint(ah, aj + al);
    let av = ee(ar, as, au, ao, ap, aq);
    if (ei(av.a) === 1 && av.b === 0 && av.c === 0 && ei(av.d) === 1) {
      ah = av.a === 1 ? ah + av.e : ah - av.e;
      aj = av.d === 1 ? aj + av.f : aj - av.f;
      av.e = 0;
      av.f = 0;
    }
    for (let [aw, ax] of [
      ["x", ah],
      ["y", aj],
      ["width", ak],
      ["height", al],
      ["rx", am],
      ["ry", an],
    ]) {
      ax = M(ax, geometryPrecision);
      if (ax === 0) {
        a6.removeAttribute(aw);
      } else {
        a6.setAttribute(aw, ax);
      }
    }
    Y(a6, av, transformPrecision);
    ac(geometryPrecision, transformPrecision);
    ji(a6, a7);
  } else {
    Y(a6, a8, transformPrecision);
  }
};
let Mi = (a6, a7) => {
  let a8 = H(a6);
  let { scaleX, scaleY, skewXY, skewXZ } = It(a8);
  let { geometryPrecision, transformPrecision, preserveRotation } = a7;
  if (
    a8.is2D &&
    M(scaleX, geometryPrecision) === M(scaleY, geometryPrecision) &&
    skewXY === 0 &&
    skewXZ === 0
  ) {
    Ii(a6);
    let ah = Zi(a6);
    let aj = H(a6);
    if (preserveRotation === false) {
      let ak = new DOMPoint(a6.cx.baseVal.value, a6.cy.baseVal.value);
      let al = new DOMPoint(
        a6.cx.baseVal.value + a6.r.baseVal.value,
        a6.cy.baseVal.value
      );
      let am = ak.matrixTransform(aj);
      let an = al.matrixTransform(aj);
      let ao = new F(am, an).length;
      a6.setAttribute("cx", M(am.x, geometryPrecision));
      a6.setAttribute("cy", M(am.y, geometryPrecision));
      a6.setAttribute("r", M(ao, geometryPrecision));
      Y(a6, null);
    } else {
      let ap = scaleX;
      let aq = a6.cx.baseVal.value;
      let ar = a6.cy.baseVal.value;
      let as = a6.r.baseVal.value;
      let au = new DOMPoint(aq, ar).matrixTransform(aj);
      let av = new DOMPoint(aq + as, ar).matrixTransform(aj);
      let aw = new DOMPoint(aq, ar + as).matrixTransform(aj);
      as *= ei(ap);
      let ax = new DOMPoint(aq, ar);
      let ay = new DOMPoint(aq + as, ar);
      let az = new DOMPoint(aq, ar + as);
      let aA = ee(ax, ay, az, au, av, aw);
      aA = I(aA, transformPrecision);
      if (ei(aA.a) === 1 && aA.b === 0 && aA.c === 0 && ei(aA.d) === 1) {
        if (aA.e !== 0 || aA.f !== 0) {
          aq = aA.a === 1 ? aq + aA.e : aq - aA.e;
          ar = aA.d === 1 ? ar + aA.f : ar - aA.f;
          as = new F(new DOMPoint(aq, ar), new DOMPoint(aq + as, ar)).length;
          aA.e = 0;
          aA.f = 0;
        }
      }
      for (let [aB, aC] of [
        ["cx", aq],
        ["cy", ar],
        ["r", as],
      ]) {
        aC = M(aC, geometryPrecision);
        if (aC === 0) {
          a6.removeAttribute(aB);
        } else {
          a6.setAttribute(aB, aC);
        }
      }
      Y(a6, aA);
    }
    ah(geometryPrecision, transformPrecision);
    ji(a6, a7);
  } else {
    Y(a6, a8, transformPrecision);
  }
};
let Pi = (a6, a7) => {
  let a8 = H(a6);
  let { geometryPrecision, transformPrecision } = a7;
  if (a8.is2D) {
    Ii(a6);
    let ab = Zi(a6);
    let ac = H(a6);
    let { scaleX, scaleY } = It(ac);
    let ag = a6.cx.baseVal.value;
    let ah = a6.cy.baseVal.value;
    let aj = a6.rx.baseVal.value;
    let ak = a6.ry.baseVal.value;
    let al = new DOMPoint(ag, ah).matrixTransform(ac);
    let am = new DOMPoint(ag + aj, ah).matrixTransform(ac);
    let an = new DOMPoint(ag, ah + ak).matrixTransform(ac);
    aj *= ei(scaleX);
    ak *= ei(scaleY);
    let ao = new DOMPoint(ag, ah);
    let ap = new DOMPoint(ag + aj, ah);
    let aq = new DOMPoint(ag, ah + ak);
    let ar = ee(ao, ap, aq, al, am, an);
    ar = I(ar, transformPrecision);
    if (ei(ar.a) === 1 && ar.b === 0 && ar.c === 0 && ei(ar.d) === 1) {
      if (ar.e !== 0 || ar.f !== 0) {
        ag = ar.a === 1 ? ag + ar.e : ag - ar.e;
        ah = ar.d === 1 ? ah + ar.f : ah - ar.f;
        aj = new F(new DOMPoint(ag, ah), new DOMPoint(ag + aj, ah)).length;
        ak = new F(new DOMPoint(ag, ah), new DOMPoint(ag, ah + ak)).length;
        ar.e = 0;
        ar.f = 0;
      }
    }
    for (let [as, au] of [
      ["cx", ag],
      ["cy", ah],
      ["rx", aj],
      ["ry", ak],
    ]) {
      au = M(au, geometryPrecision);
      if (au === 0) {
        a6.removeAttribute(as);
      } else {
        a6.setAttribute(as, au);
      }
    }
    Y(a6, ar);
    ab(geometryPrecision, transformPrecision);
    ji(a6, a7);
  } else {
    Y(a6, a8, transformPrecision);
  }
};
let Oi = (a6, a7) => {
  let { geometryPrecision, transformPrecision } = a7;
  let aa = H(a6);
  let { scaleX, scaleY } = It(aa);
  if (
    !aa.is2D ||
    (scaleX !== scaleY && a6.getAttribute("preserveAspectRatio") !== "none")
  ) {
    Y(a6, aa, transformPrecision);
  } else {
    Ii(a6);
    let ad = Zi(a6);
    let af = H(a6);
    let ag = a6.x.baseVal.value;
    let ah = a6.y.baseVal.value;
    let aj = a6.width.baseVal.value;
    let ak = a6.height.baseVal.value;
    if (
      a6.hasAttribute("width") === false ||
      a6.hasAttribute("height") === false
    ) {
      let as = a6.getBBox();
      if (a6.hasAttribute("width") === false) {
        aj = as.width;
      }
      if (a6.hasAttribute("height") === false) {
        ak = as.height;
      }
    }
    let al = new DOMPoint(ag, ah).matrixTransform(af);
    let am = new DOMPoint(ag + aj, ah).matrixTransform(af);
    let an = new DOMPoint(ag, ah + ak).matrixTransform(af);
    ag *= scaleX;
    ah *= scaleY;
    aj *= ei(scaleX);
    ak *= ei(scaleY);
    let ao = new DOMPoint(ag, ah);
    let ap = new DOMPoint(ag + aj, ah);
    let aq = new DOMPoint(ag, ah + ak);
    let ar = ee(ao, ap, aq, al, am, an);
    ar = I(ar, transformPrecision);
    if (ei(ar.a) === 1 && ar.b === 0 && ar.c === 0 && ei(ar.d) === 1) {
      if (ar.e !== 0 || ar.f !== 0) {
        ag = ar.a === 1 ? ag + ar.e : ag - ar.e;
        ah = ar.d === 1 ? ah + ar.f : ah - ar.f;
        ar.e = 0;
        ar.f = 0;
      }
    }
    for (let [au, av] of [
      ["x", ag],
      ["y", ah],
      ["width", aj],
      ["height", ak],
    ]) {
      av = M(av, geometryPrecision);
      if (av === 0) {
        a6.removeAttribute(au);
      } else {
        a6.setAttribute(au, av);
      }
    }
    Y(a6, ar);
    ad(geometryPrecision, transformPrecision);
    ji(a6, a7);
  }
};
let ki = (a6, a7) => {
  let a8 = H(a6);
  let { geometryPrecision, transformPrecision, preserveRotation } = a7;
  let { skewXY, skewXZ } = It(a8);
  if (a8.is2D) {
    if (preserveRotation && skewXY === 0 && skewXZ === 0) {
      Ii(a6);
      let af = ne(a6);
      let ag = ne(a6.parentElement);
      if (af !== ag) {
        le(a6, ag);
      }
      let ah = Zi(a6);
      let aj = H(a6);
      let ak = new DOMPoint(a6.x1.baseVal.value, a6.y1.baseVal.value);
      let al = new DOMPoint(a6.x2.baseVal.value, a6.y2.baseVal.value);
      let am = ak.matrixTransform(aj);
      let an = al.matrixTransform(aj);
      a6.setAttribute("x1", M(am.x, geometryPrecision));
      a6.setAttribute("y1", M(am.y, geometryPrecision));
      a6.setAttribute("x2", M(an.x, geometryPrecision));
      a6.setAttribute("y2", M(an.y, geometryPrecision));
      Y(a6, null);
      ah(geometryPrecision, transformPrecision);
      if (af !== ag) {
        le(a6, af, transformPrecision);
      }
      ji(a6, a7);
    } else {
      Ii(a6);
      let [ao] = q(a6, "userSpaceOnUse");
      Zi(a6);
      let ap = H(a6);
      let aq = new DOMPoint(a6.x1.baseVal.value, a6.y1.baseVal.value);
      let ar = new DOMPoint(a6.x2.baseVal.value, a6.y2.baseVal.value);
      let as = aq.matrixTransform(ap);
      let au = ar.matrixTransform(ap);
      a6.setAttribute("x1", M(as.x, geometryPrecision));
      a6.setAttribute("y1", M(as.y, geometryPrecision));
      a6.setAttribute("x2", M(au.x, geometryPrecision));
      a6.setAttribute("y2", M(au.y, geometryPrecision));
      Y(a6, null);
      Q(a6, ao, "userSpaceOnUse", geometryPrecision, transformPrecision);
      ji(a6, a7);
    }
  } else {
    Y(a6, a8, transformPrecision);
  }
};
let Di = (a6, a7) => {
  let a8 = H(a6);
  let { geometryPrecision, transformPrecision, preserveRotation } = a7;
  let { skewXY, skewXZ } = It(a8);
  if (a8.is2D) {
    if (preserveRotation && skewXY === 0 && skewXZ === 0) {
      Ii(a6);
      let af = ne(a6);
      let ag = ne(a6.parentElement);
      if (af !== ag) {
        le(a6, ag);
      }
      let ah = Zi(a6);
      let aj = H(a6);
      let ak = [];
      for (let al of a6.points) {
        let { x: am, y: an } = DOMPoint.fromPoint(al).matrixTransform(aj);
        ak.push(M(am, geometryPrecision), M(an, geometryPrecision));
      }
      a6.setAttribute("points", ak.join(" "));
      Y(a6, null);
      ah(geometryPrecision, transformPrecision);
      if (af !== ag) {
        le(a6, af, transformPrecision);
      }
      ji(a6, a7);
    } else {
      Ii(a6);
      let [ao] = q(a6, "userSpaceOnUse");
      Zi(a6);
      let ap = H(a6);
      let aq = [];
      for (let ar of a6.points) {
        let { x: as, y: au } = DOMPoint.fromPoint(ar).matrixTransform(ap);
        aq.push(M(as, geometryPrecision), M(au, geometryPrecision));
      }
      a6.setAttribute("points", aq.join(" "));
      Y(a6, null);
      Q(a6, ao, "userSpaceOnUse", geometryPrecision, transformPrecision);
      ji(a6, a7);
    }
  } else {
    Y(a6, a8, transformPrecision);
  }
};
let Ui = (a6, a7) => {
  let { transformPrecision } = a7;
  if (_(a6)) {
    Y(a6, H(a6), transformPrecision);
  }
};
let Si = (a6, a7) => {
  let a8 = H(a6);
  let { geometryPrecision, transformPrecision, preserveRotation } = a7;
  let { skewXY, skewXZ } = It(a8);
  if (Math.abs(skewXY) < 0.000001) {
    skewXY = 0;
  }
  if (Math.abs(skewXZ) < 0.000001) {
    skewXZ = 0;
  }
  if (a8.is2D) {
    if (preserveRotation && skewXY === 0 && skewXZ === 0) {
      Ii(a6);
      let af = ne(a6);
      let ag = ne(a6.parentElement);
      if (af !== ag) {
        le(a6, ag);
      }
      let ah = Zi(a6);
      let aj = H(a6);
      let ak = nt(a6);
      let al = ie(ak, aj, geometryPrecision);
      lt(a6, al);
      Y(a6, null);
      ah(geometryPrecision, transformPrecision);
      if (af !== ag) {
        le(a6, af, transformPrecision);
      }
      ji(a6, a7);
    } else {
      Ii(a6);
      let [am] = q(a6, "userSpaceOnUse");
      Zi(a6);
      let an = H(a6);
      let ao = nt(a6);
      let ap = ie(ao, an, geometryPrecision);
      lt(a6, ap);
      Y(a6, null);
      Q(a6, am, "userSpaceOnUse", geometryPrecision, transformPrecision);
      ji(a6, a7);
    }
  } else {
    Y(a6, a8, transformPrecision);
  }
};
let Ci = (a6, a7) => {
  let a8 = H(a6);
  let { geometryPrecision, transformPrecision } = a7;
  if (a8.is2D) {
    if (a8.isIdentity) {
      Y(a6, null);
    } else {
      let { scaleX, scaleY } = It(a8);
      if (scaleX === scaleY) {
        let [ad] = q(a6, "userSpaceOnUse");
        a8.translateSelf(-ad.x, -ad.y);
        let [af, ag, ah, aj, ak] = wt(a6).values;
        let al = new DOMPoint(af, ag).matrixTransform(a8);
        let am = new DOMPoint(af + ah, ag).matrixTransform(a8);
        let an = new DOMPoint(af, ag + ah).matrixTransform(a8);
        ah *= ei(scaleX);
        let ao = new DOMPoint(af, ag);
        let ap = new DOMPoint(af + ah, ag);
        let aq = new DOMPoint(af, ag + ah);
        let ar = ee(ao, ap, aq, al, am, an);
        ar.translateSelf(ad.x, ad.y);
        ar = I(ar, transformPrecision);
        if (ei(ar.a) === 1 && ar.b === 0 && ar.c === 0 && ei(ar.d) === 1) {
          if (ar.e !== 0 || ar.f !== 0) {
            af = ar.a === 1 ? af + ar.e : af - ar.e;
            ag = ar.d === 1 ? ag + ar.f : ag - ar.f;
            ar.e = 0;
            ar.f = 0;
          }
        }
        let as = [af, ag, ah, aj, ak];
        as = as.map((au) => M(au, geometryPrecision));
        Ii(a6);
        vt(
          a6,
          {
            type: "crescent",
            values: as,
          },
          geometryPrecision
        );
        Y(a6, ar);
        ji(a6, a7);
      } else {
        Y(a6, a8, transformPrecision);
      }
    }
  } else {
    Y(a6, a8, transformPrecision);
  }
};
let Ni = (a6, a7) => {
  let a8 = H(a6);
  let { geometryPrecision, transformPrecision } = a7;
  if (a8.is2D) {
    let [ab] = q(a6, "userSpaceOnUse");
    a8.translateSelf(-ab.x, -ab.y);
    let { scaleX, scaleY } = It(a8);
    let [af, ag, ah, aj, ak, al] = wt(a6).values;
    let am = new DOMPoint(af, ag).matrixTransform(a8);
    let an = new DOMPoint(af + ah, ag).matrixTransform(a8);
    let ao = new DOMPoint(af, ag + aj).matrixTransform(a8);
    af *= ei(scaleX);
    ag *= ei(scaleY);
    ah *= ei(scaleX);
    aj *= ei(scaleY);
    let ap = new DOMPoint(af, ag);
    let aq = new DOMPoint(af + ah, ag);
    let ar = new DOMPoint(af, ag + aj);
    let as = ee(ap, aq, ar, am, an, ao);
    as.translateSelf(ab.x, ab.y);
    as = I(as, transformPrecision);
    if (ei(as.a) === 1 && as.b === 0 && as.c === 0 && ei(as.d) === 1) {
      if (as.e !== 0 || as.f !== 0) {
        af = as.a === 1 ? af + as.e : af - as.e;
        ag = as.d === 1 ? ag + as.f : ag - as.f;
        as.e = 0;
        as.f = 0;
      }
    }
    let au = {
      type: "triangle",
      values: [af, ag, ah, aj, ak, al].map((av) => M(av, geometryPrecision)),
    };
    Ii(a6);
    vt(a6, au, geometryPrecision);
    Y(a6, as);
    ji(a6, a7);
  } else {
    Y(a6, a8, transformPrecision);
  }
};
let Ai = (a6, a7) => {
  let a8 = H(a6);
  let { geometryPrecision, transformPrecision, preserveRectRadii } = a7;
  if (a8.is2D) {
    let [ac] = q(a6, "userSpaceOnUse");
    a8.translateSelf(-ac.x, -ac.y);
    let { scaleX, scaleY } = It(a8);
    let [ag, ah, aj, ak, al, am, an, ao, ap, aq, ar, as] = wt(a6).values;
    let au = new DOMPoint(ag, ah).matrixTransform(a8);
    let av = new DOMPoint(ag + aj, ah).matrixTransform(a8);
    let aw = new DOMPoint(ag, ah + ak).matrixTransform(a8);
    if (ap === undefined) {
      ap = al;
    }
    if (aq === undefined) {
      aq = am;
    }
    if (ar === undefined) {
      ar = an;
    }
    if (as === undefined) {
      as = ao;
    }
    ag *= ei(scaleX);
    ah *= ei(scaleY);
    aj *= ei(scaleX);
    ak *= ei(scaleY);
    if (preserveRectRadii === false) {
      al *= ei(scaleX);
      am *= ei(scaleX);
      an *= ei(scaleX);
      ao *= ei(scaleX);
      ap *= ei(scaleY);
      aq *= ei(scaleY);
      ar *= ei(scaleY);
      as *= ei(scaleY);
    }
    let ax;
    let ay = new DOMPoint(ag, ah);
    let az = new DOMPoint(ag + aj, ah);
    let aA = new DOMPoint(ag, ah + ak);
    let aB = ee(ay, az, aA, au, av, aw);
    aB.translateSelf(ac.x, ac.y);
    aB = I(aB, transformPrecision);
    if (ei(aB.a) === 1 && aB.b === 0 && aB.c === 0 && ei(aB.d) === 1) {
      if (aB.e !== 0 || aB.f !== 0) {
        ag = aB.a === 1 ? ag + aB.e : ag - aB.e;
        ah = aB.d === 1 ? ah + aB.f : ah - aB.f;
        aB.e = 0;
        aB.f = 0;
      }
    }
    ax =
      al === ap && am === aq && an === ar && ao === as
        ? [ag, ah, aj, ak, al, am, an, ao]
        : [ag, ah, aj, ak, al, am, an, ao, ap, aq, ar, as];
    ax = ax.map((aC) => M(aC, geometryPrecision));
    Ii(a6);
    vt(
      a6,
      {
        type: "rect",
        values: ax,
      },
      geometryPrecision
    );
    Y(a6, aB);
    ji(a6, a7);
  } else {
    Y(a6, a8, transformPrecision);
  }
};
let Ti = (a6, a7) => {
  let a8 = H(a6);
  let { geometryPrecision, transformPrecision } = a7;
  if (a8.is2D) {
    let [ab] = q(a6, "userSpaceOnUse");
    a8.translateSelf(-ab.x, -ab.y);
    let { scaleX, scaleY } = It(a8);
    let [af, ag, ah, aj, ak, al] = wt(a6).values;
    let am = new DOMPoint(af, ag).matrixTransform(a8);
    let an = new DOMPoint(af + ah, ag).matrixTransform(a8);
    let ao = new DOMPoint(af, ag + aj).matrixTransform(a8);
    ah *= ei(scaleX);
    aj *= ei(scaleY);
    let ap = new DOMPoint(af, ag);
    let aq = new DOMPoint(af + ah, ag);
    let ar = new DOMPoint(af, ag + aj);
    let as = ee(ap, aq, ar, am, an, ao);
    as.translateSelf(ab.x, ab.y);
    as = I(as, transformPrecision);
    if (ei(as.a) === 1 && as.b === 0 && as.c === 0 && ei(as.d) === 1) {
      if (as.e !== 0 || as.f !== 0) {
        af = as.a === 1 ? af + as.e : af - as.e;
        ag = as.d === 1 ? ag + as.f : ag - as.f;
        as.e = 0;
        as.f = 0;
      }
    }
    let au = [af, ag, ah, aj, ak, al];
    au = au.map((av) => M(av, geometryPrecision));
    Ii(a6);
    vt(
      a6,
      {
        type: "n-gon",
        values: au,
      },
      geometryPrecision
    );
    Y(a6, as);
    ji(a6, a7);
  } else {
    Y(a6, a8, transformPrecision);
  }
};
let Fi = (a6, a7) => {
  let a8 = H(a6);
  let { geometryPrecision, transformPrecision } = a7;
  if (a8.is2D) {
    let [ab] = q(a6, "userSpaceOnUse");
    a8.translateSelf(-ab.x, -ab.y);
    let { scaleX, scaleY } = It(a8);
    let [af, ag, ah, aj, ak, al] = wt(a6).values;
    let am = new DOMPoint(af, ag).matrixTransform(a8);
    let an = new DOMPoint(af + ah, ag).matrixTransform(a8);
    let ao = new DOMPoint(af, ag + aj).matrixTransform(a8);
    ah *= ei(scaleX);
    aj *= ei(scaleY);
    let ap = new DOMPoint(af, ag);
    let aq = new DOMPoint(af + ah, ag);
    let ar = new DOMPoint(af, ag + aj);
    let as = ee(ap, aq, ar, am, an, ao);
    as.translateSelf(ab.x, ab.y);
    as = I(as, transformPrecision);
    if (ei(as.a) === 1 && as.b === 0 && as.c === 0 && ei(as.d) === 1) {
      if (as.e !== 0 || as.f !== 0) {
        af = as.a === 1 ? af + as.e : af - as.e;
        ag = as.d === 1 ? ag + as.f : ag - as.f;
        as.e = 0;
        as.f = 0;
      }
    }
    let au = [af, ag, ah, aj, ak, al].map((av) => M(av, geometryPrecision));
    Ii(a6);
    vt(
      a6,
      {
        type: "star",
        values: au,
      },
      geometryPrecision
    );
    Y(a6, as);
    ji(a6, a7);
  } else {
    Y(a6, a8, transformPrecision);
  }
};
let Vi = (a6, a7) => {
  let a8 = H(a6);
  let { geometryPrecision, transformPrecision } = a7;
  if (a8.is2D) {
    let [ab] = q(a6, "userSpaceOnUse");
    a8.translateSelf(-ab.x, -ab.y);
    let ac;
    let { scaleX, scaleY } = It(a8);
    let [ag, ah, aj, ak, al, am, an, ao, ap, aq] = wt(a6).values;
    let ar = new DOMPoint(ag, ah).matrixTransform(a8);
    let as = new DOMPoint(ag + aj, ah).matrixTransform(a8);
    let au = new DOMPoint(ag, ah + ak).matrixTransform(a8);
    ag *= ei(scaleX);
    ah *= ei(scaleY);
    aj *= ei(scaleX);
    ak *= ei(scaleY);
    al *= ei(scaleX);
    am *= ei(scaleY);
    ac =
      scaleX === scaleY || M(ei(scaleX), 6) === 1
        ? ei(scaleX)
        : M(ei(scaleY), 6) === 1
        ? ei(scaleY)
        : Math.min(ei(scaleX), ei(scaleY));
    an *= ac;
    ao *= ac;
    ap *= ac;
    aq *= ac;
    let av = new DOMPoint(ag, ah);
    let aw = new DOMPoint(ag + aj, ah);
    let ax = new DOMPoint(ag, ah + ak);
    let ay = ee(av, aw, ax, ar, as, au);
    ay.translateSelf(ab.x, ab.y);
    ay = I(ay, transformPrecision);
    if (ei(ay.a) === 1 && ay.b === 0 && ay.c === 0 && ei(ay.d) === 1) {
      if (ay.e !== 0 || ay.f !== 0) {
        ag = ay.a === 1 ? ag + ay.e : ag - ay.e;
        ah = ay.d === 1 ? ah + ay.f : ah - ay.f;
        ay.e = 0;
        ay.f = 0;
      }
    }
    let az = [ag, ah, aj, ak, al, am, an, ao, ap, aq];
    az = az.map((aA) => M(aA, geometryPrecision));
    Ii(a6);
    vt(
      a6,
      {
        type: "frame",
        values: az,
      },
      geometryPrecision
    );
    Y(a6, ay);
    ji(a6, a7);
  } else {
    Y(a6, a8, transformPrecision);
  }
};
let Ei = (a6, a7) => {
  let a8 = H(a6);
  let { geometryPrecision, transformPrecision } = a7;
  if (a8.is2D) {
    let [ab] = q(a6, "userSpaceOnUse");
    a8.translateSelf(-ab.x, -ab.y);
    let [ac, ad, af, ag, ah, aj] = wt(a6).values;
    let { scaleX, scaleY } = It(a8);
    let am = new DOMPoint(ac, ad).matrixTransform(a8);
    let an = new DOMPoint(ac + ah, ad).matrixTransform(a8);
    let ao = new DOMPoint(ac, ad + aj).matrixTransform(a8);
    af *= ei(scaleX);
    ag *= ei(scaleY);
    ah *= ei(scaleX);
    aj *= ei(scaleY);
    let ap = new DOMPoint(ac, ad);
    let aq = new DOMPoint(ac + ah, ad);
    let ar = new DOMPoint(ac, ad + aj);
    let as = ee(ap, aq, ar, am, an, ao);
    as.translateSelf(ab.x, ab.y);
    as = I(as, transformPrecision);
    if (ei(as.a) === 1 && as.b === 0 && as.c === 0 && ei(as.d) === 1) {
      if (as.e !== 0 || as.f !== 0) {
        ac = as.a === 1 ? ac + as.e : ac - as.e;
        ad = as.d === 1 ? ad + as.f : ad - as.f;
        as.e = 0;
        as.f = 0;
      }
    }
    let au = [ac, ad, af, ag, ah, aj].map((av) => M(av, geometryPrecision));
    Ii(a6);
    vt(
      a6,
      {
        type: "ring",
        values: au,
      },
      geometryPrecision
    );
    Y(a6, as);
    ji(a6, a7);
  } else {
    Y(a6, a8, transformPrecision);
  }
};
let Bi = (a6, a7) => {
  let { transformPrecision } = a7;
  Y(a6, H(a6), transformPrecision);
};
let Li = (a6, a7) => {
  let { transformPrecision } = a7;
  Y(a6, H(a6), transformPrecision);
};
let zi = (a6, a7) => {
  let a8 = Zi(a6);
  let a9 = H(a6);
  let { geometryPrecision, transformPrecision } = a7;
  if (a9.is2D) {
    let [ac] = q(a6, "userSpaceOnUse");
    a9.translateSelf(-ac.x, -ac.y);
    let { scaleX, scaleY } = It(a9);
    let [ag, ah, aj, ak, al, am, an] = wt(a6).values;
    let ao = new DOMPoint(ag, ah).matrixTransform(a9);
    let ap = new DOMPoint(ag + aj, ah).matrixTransform(a9);
    let aq = new DOMPoint(ag, ah + ak).matrixTransform(a9);
    ag *= scaleX;
    ah *= scaleY;
    aj *= ei(scaleX);
    ak *= ei(scaleY);
    am *= ei(scaleX);
    an *= ei(scaleX);
    al *= ei(scaleY);
    let ar = new DOMPoint(ag, ah);
    let as = new DOMPoint(ag + aj, ah);
    let au = new DOMPoint(ag, ah + ak);
    let av = ee(ar, as, au, ao, ap, aq);
    av.translateSelf(ac.x, ac.y);
    av = I(av, transformPrecision);
    if (ei(av.a) === 1 && av.b === 0 && av.c === 0 && ei(av.d) === 1) {
      ag = av.a === 1 ? ag + av.e : ag - av.e;
      ah = av.d === 1 ? ah + av.f : ah - av.f;
      av.e = 0;
      av.f = 0;
    }
    Ii(a6);
    vt(
      a6,
      {
        type: "arrow",
        values: [ag, ah, aj, ak, al, am, an],
      },
      geometryPrecision
    );
    Y(a6, av);
    a8(geometryPrecision, transformPrecision);
    ji(a6, a7);
  } else {
    Y(a6, a9, transformPrecision);
  }
};
let Gi = (a6, a7) => {
  let a8 = H(a6);
  let { geometryPrecision, transformPrecision } = a7;
  if (a8.is2D) {
    let [ab] = q(a6, "userSpaceOnUse");
    a8.translateSelf(-ab.x, -ab.y);
    let { scaleX, scaleY } = It(a8);
    let [af, ag, ah, aj, ak, al, am] = wt(a6).values;
    let an = new DOMPoint(af, ag).matrixTransform(a8);
    let ao = new DOMPoint(af + ah, ag).matrixTransform(a8);
    let ap = new DOMPoint(af, ag + aj).matrixTransform(a8);
    af *= ei(scaleX);
    ag *= ei(scaleY);
    ah *= ei(scaleX);
    aj *= ei(scaleY);
    ak *= ei(scaleY);
    al *= ei(scaleX);
    let aq = new DOMPoint(af, ag);
    let ar = new DOMPoint(af + ah, ag);
    let as = new DOMPoint(af, ag + aj);
    let au = ee(aq, ar, as, an, ao, ap);
    au.translateSelf(ab.x, ab.y);
    au = I(au, transformPrecision);
    if (ei(au.a) === 1 && au.b === 0 && au.c === 0 && ei(au.d) === 1) {
      af = au.a === 1 ? af + au.e : af - au.e;
      ag = au.d === 1 ? ag + au.f : ag - au.f;
      au.e = 0;
      au.f = 0;
    }
    Ii(a6);
    vt(
      a6,
      {
        type: "cross",
        values: [af, ag, ah, aj, ak, al, am],
      },
      geometryPrecision
    );
    Y(a6, au);
    ji(a6, a7);
  } else {
    Y(a6, a8, transformPrecision);
  }
};
let Ri = (a6, a7) => {
  let a8 = H(a6);
  let { geometryPrecision, transformPrecision } = a7;
  if (a8.is2D) {
    if (a8.isIdentity) {
      Y(a6, null);
    } else {
      let { scaleX, scaleY } = It(a8);
      if (scaleX === scaleY) {
        let [ad] = q(a6, "userSpaceOnUse");
        a8.translateSelf(-ad.x, -ad.y);
        let [af, ag, ah, aj, ak, al] = wt(a6).values;
        let am = new DOMPoint(af, ag).matrixTransform(a8);
        let an = new DOMPoint(af + aj, ag).matrixTransform(a8);
        let ao = new DOMPoint(af, ag + aj).matrixTransform(a8);
        ah *= ei(scaleX);
        aj *= ei(scaleX);
        let ap = new DOMPoint(af, ag);
        let aq = new DOMPoint(af + aj, ag);
        let ar = new DOMPoint(af, ag + aj);
        let as = ee(ap, aq, ar, am, an, ao);
        as.translateSelf(ad.x, ad.y);
        as = I(as, transformPrecision);
        if (ei(as.a) === 1 && as.b === 0 && as.c === 0 && ei(as.d) === 1) {
          if (as.e !== 0 || as.f !== 0) {
            af = as.a === 1 ? af + as.e : af - as.e;
            ag = as.d === 1 ? ag + as.f : ag - as.f;
            as.e = 0;
            as.f = 0;
          }
        }
        let au = [af, ag, ah, aj, ak, al];
        au = au.map((av) => M(av, geometryPrecision));
        Ii(a6);
        vt(
          a6,
          {
            type: "spiral",
            values: au,
          },
          geometryPrecision
        );
        Y(a6, as);
        ji(a6, a7);
      } else {
        Y(a6, a8, transformPrecision);
      }
    }
  } else {
    Y(a6, a8, transformPrecision);
  }
};
let $i = (a6, a7) => {
  let { geometryPrecision, transformPrecision } = a7;
  let aa = [...a6.children].find((ac) => ac.localName === "textPath");
  let ab = null;
  if (aa) {
    ab = pt(aa).querySelector(aa.href.baseVal);
  }
  if (ab) {
    let ac = I(H(a6), transformPrecision);
    Y(a6, ac);
  } else {
    let ad = H(a6);
    let { scaleX, scaleY } = It(ad);
    if (
      ad.is2D &&
      scaleX === scaleY &&
      ((ah) => {
        if (ah.localName === "text") {
          for (let aj of ah.querySelectorAll("tspan")) {
            if (se(aj)) {
              return true;
            }
          }
        }
        return false;
      })(a6) === false
    ) {
      Ii(a6);
      for (let aE of a6.querySelectorAll("tspan")) {
        Ii(aE);
      }
      let ah = Zi(a6);
      let aj = H(a6);
      let [ak, al] = ((aF) => {
        let aG = 0;
        let aH = 0;
        let aI = 0;
        let aJ = 0;
        let aK = ae(aF)[0] || null;
        if (aK) {
          let aL = [];
          for (let aM = aK.parentElement; aM !== aF; aM = aM.parentElement) {
            if (aM.localName === "tspan" || aM.localName === "textPath") {
              aL.push(aM);
            }
          }
          aL.push(aF);
          aL.reverse();
          for (let aN of aL) {
            if (aN.x.baseVal.length > 0) {
              aG = aN.x.baseVal[0].value;
            }
            if (aN.y.baseVal.length > 0) {
              aH = aN.y.baseVal[0].value;
            }
            if (aN.dx.baseVal.length > 0) {
              aI = aN.dx.baseVal[0].value;
            }
            if (aN.dy.baseVal.length > 0) {
              aJ = aN.dy.baseVal[0].value;
            }
          }
        }
        return [aG + aI, aH + aJ];
      })(a6);
      let am = oe(a6).width;
      let an = oe(a6).height;
      let ao = new DOMPoint(ak, al).matrixTransform(aj);
      let ap = new DOMPoint(ak + am, al).matrixTransform(aj);
      let aq = new DOMPoint(ak, al + an).matrixTransform(aj);
      let ar = ak * scaleX;
      let as = al * scaleY;
      let au = am * ei(scaleX);
      let av = an * ei(scaleY);
      let aw = new DOMPoint(ar, as);
      let ax = new DOMPoint(ar + au, as);
      let ay = new DOMPoint(ar, as + av);
      let az = ee(aw, ax, ay, ao, ap, aq);
      az = I(az, transformPrecision);
      if (ei(az.a) === 1 && az.b === 0 && az.c === 0 && ei(az.d) === 1) {
        if (az.e !== 0 || az.f !== 0) {
          ar = az.a === 1 ? ar + az.e : ar - az.e;
          as = az.d === 1 ? as + az.f : as - az.f;
          az.e = 0;
          az.f = 0;
        }
      }
      let aA = ar - ak;
      let aB = as - al;
      let aC = [...a6.x.baseVal].map((aF) =>
        M(aF.value + aA, geometryPrecision)
      );
      let aD = [...a6.y.baseVal].map((aF) =>
        M(aF.value + aB, geometryPrecision)
      );
      ar = M(ar, geometryPrecision);
      as = M(as, geometryPrecision);
      if (aC.length > 0) {
        a6.setAttribute("x", aC.join(" "));
      } else {
        let aF = M(aA, geometryPrecision);
        if (aF === 0) {
          a6.removeAttribute("x");
        } else {
          a6.setAttribute("x", aF);
        }
      }
      if (aD.length > 0) {
        a6.setAttribute("y", aD.join(" "));
      } else {
        let aG = M(aB, geometryPrecision);
        if (aG === 0) {
          a6.removeAttribute("y");
        } else {
          a6.setAttribute("y", aG);
        }
      }
      for (let aH of a6.querySelectorAll("tspan")) {
        let aI = [...aH.x.baseVal].map((aK) =>
          M(aK.value + aA, geometryPrecision)
        );
        let aJ = [...aH.y.baseVal].map((aK) =>
          M(aK.value + aB, geometryPrecision)
        );
        if (aI.length > 0) {
          aH.setAttribute("x", aI.join(" "));
        }
        if (aJ.length > 0) {
          aH.setAttribute("y", aJ.join(" "));
        }
      }
      Y(a6, az);
      ah(geometryPrecision, transformPrecision);
      ji(a6, a7);
      if (a6.querySelectorAll("tspan").length === 0) {
        let aK = getComputedStyle(a6).getPropertyValue("font-size");
        aK = ni(aK);
        aK = M(aK * scaleY, 1);
        a6.style.setProperty("font-size", aK);
      } else {
        for (let aL of a6.querySelectorAll("tspan")) {
          let aM = getComputedStyle(aL).getPropertyValue("font-size");
          aM = ni(aM);
          aM = M(aM * scaleY, 1);
          aL.style.setProperty("font-size", aM);
          let aN = getComputedStyle(aL).getPropertyValue("word-spacing");
          aN = ni(aN);
          aN = M(aN * scaleY, 2);
          aL.style.setProperty("word-spacing", aN);
          let aO = getComputedStyle(aL).getPropertyValue("letter-spacing");
          aO = ni(aO);
          aO = M(aO * scaleY, 2);
          aL.style.setProperty("letter-spacing", aO);
          ji(aL, a7);
        }
      }
    } else if (ad.isIdentity) {
      Y(a6, null);
    } else {
      Y(a6, ad, transformPrecision);
    }
  }
};
let Ii = (a6) => {
  let a7 = K(a6);
  if (
    (x.includes(a6.localName) || v.includes(a6.localName)) &&
    (V(a6) ||
      ((a8) => {
        let a9 = null;
        if (v.includes(a8.localName)) {
          let aa = getComputedStyle(a8).mask;
          if (aa && aa !== "none") {
            let ab = aa.substring(6, aa.length - 2);
            let ac = pt(a8).querySelector("#" + CSS.escape(ab)) || null;
            if (ac?.localName === "mask" && ac !== a8) {
              a9 = ac;
            }
          }
        }
        return a9;
      })(a6))
  ) {
    a6[si] = oe(a6, false);
  }
  if (y.includes(a6.localName)) {
    let a8 = [Ke(a6, "fill"), Ke(a6, "stroke")];
    let a9 = a8.filter((ad) => ad && ad.localName.endsWith("Gradient"));
    let aa = a8.filter((ad) => ad && ad.localName === "pattern");
    let { scaleX, scaleY } = It(H(a6));
    a6[ri] = scaleX;
    a6[oi] = scaleY;
    for (let ad of a9) {
      let af = _e(ad);
      if (af.gradientUnits === SVG_UNIT_TYPE_USERSPACEONUSE) {
        if (ad.localName === "linearGradient") {
          let ag = new DOMPoint(af.x1.value, af.y1.value);
          let ah = new DOMPoint(af.x2.value, af.y2.value);
          let aj = new F(ag, ah).getNormalVector().transformPoint(ag);
          let ak = ag.matrixTransform(af.gradientTransform);
          let al = ah.matrixTransform(af.gradientTransform);
          let am = aj.matrixTransform(af.gradientTransform);
          ad[pi] = ak.matrixTransform(a7);
          ad[ui] = al.matrixTransform(a7);
          ad[hi] = am.matrixTransform(a7);
        } else if (ad.localName === "radialGradient") {
          let an = new DOMPoint(af.cx.value, af.cy.value);
          let ao = new DOMPoint(af.cx.value + af.r.value, af.cy.value);
          let ap = new DOMPoint(af.cx.value, af.cy.value - af.r.value);
          let aq = an.matrixTransform(af.gradientTransform);
          let ar = ao.matrixTransform(af.gradientTransform);
          let as = ap.matrixTransform(af.gradientTransform);
          ad[fi] = aq.matrixTransform(a7);
          ad[mi] = ar.matrixTransform(a7);
          ad[ci] = as.matrixTransform(a7);
        }
      }
    }
    for (let au of aa) {
      let av = We(au);
      if (av.patternUnits === SVG_UNIT_TYPE_USERSPACEONUSE) {
        let aw = new DOMPoint(av.x.value, av.y.value);
        let ax = new DOMPoint(av.x.value + av.width.value, av.y.value);
        let ay = new DOMPoint(
          av.x.value + av.width.value,
          av.y.value + av.height.value
        );
        let az = aw.matrixTransform(av.patternTransform);
        let aA = ax.matrixTransform(av.patternTransform);
        let aB = ay.matrixTransform(av.patternTransform);
        au[di] = az.matrixTransform(a7);
        au[yi] = aA.matrixTransform(a7);
        au[gi] = aB.matrixTransform(a7);
      } else if (av.patternUnits === SVG_UNIT_TYPE_OBJECTBOUNDINGBOX) {
        let aC = K(a6);
        let aD = oe(a6);
        let aE = av.x.valueInSpecifiedUnits;
        let aF = av.y.valueInSpecifiedUnits;
        let aG = av.width.valueInSpecifiedUnits;
        let aH = av.height.valueInSpecifiedUnits;
        if (av.x.unitType === SVGLength.SVG_LENGTHTYPE_PERCENTAGE) {
          aE /= 100;
        }
        if (av.y.unitType === SVGLength.SVG_LENGTHTYPE_PERCENTAGE) {
          aF /= 100;
        }
        if (av.width.unitType === SVGLength.SVG_LENGTHTYPE_PERCENTAGE) {
          aG /= 100;
        }
        if (av.height.unitType === SVGLength.SVG_LENGTHTYPE_PERCENTAGE) {
          aH /= 100;
        }
        let aI = new DOMPoint(aE, aF);
        let aJ = new DOMPoint(aE + aG, aF);
        let aK = new DOMPoint(aE + aG, aF + aH);
        let aL = new DOMPoint(aD.x + aI.x * aD.width, aD.y + aI.y * aD.height);
        let aM = new DOMPoint(aD.x + aJ.x * aD.width, aD.y + aJ.y * aD.height);
        let aN = new DOMPoint(aD.x + aK.x * aD.width, aD.y + aK.y * aD.height);
        let aO = aL.matrixTransform(av.patternTransform);
        let aP = aM.matrixTransform(av.patternTransform);
        let aQ = aN.matrixTransform(av.patternTransform);
        let aR = aO.matrixTransform(aC);
        let aS = aP.matrixTransform(aC);
        let aT = aQ.matrixTransform(aC);
        au[di] = aR;
        au[yi] = aS;
        au[gi] = aT;
      }
    }
  }
};
let ji = (a6, a7) => {
  let a8 = K(a6).inverse();
  let {
    geometryPrecision,
    preserveStrokeWidth,
    transformPrecision,
    transformDirection,
  } = a7;
  if (x.includes(a6.localName)) {
    let ad = getComputedStyle(a6).clipPath;
    let af = ad && ad !== "none" ? ad.substring(6, ad.length - 2) : "";
    let ag = af ? pt(a6).querySelector("#" + CSS.escape(af)) : null;
    if (ag) {
      let ah = a6[si];
      let aj = oe(a6, false);
      let ak = te(ah, aj);
      ak = ak.multiply(H(ag));
      for (let al of ag.children) {
        if (b.includes(al.localName)) {
          Y(al, ak.multiply(H(al)));
          bi(al, a7);
        }
      }
      Y(ag, null);
    }
  }
  if (v.includes(a6.localName)) {
    let am = getComputedStyle(a6).mask;
    let an = am && am !== "none" ? am.substring(6, am.length - 2) : "";
    let ao = an ? pt(a6).querySelector("#" + CSS.escape(an)) : null;
    if (ao) {
      let ap = a6[si];
      let aq = oe(a6, false);
      let ar = te(ap, aq);
      for (let as of ao.children) {
        if (w.includes(as.localName)) {
          Y(as, ar.multiply(H(as)));
          bi(as, a7);
        }
      }
      Y(ao, null);
    }
  }
  if (y.includes(a6.localName)) {
    let au = [Ke(a6, "fill"), Ke(a6, "stroke")];
    let av = au.filter((ax) => ax && ax.localName.endsWith("Gradient"));
    let aw = au.filter((ax) => ax && ax.localName === "pattern");
    if (preserveStrokeWidth === false) {
      let ax = a6[ri];
      let ay = a6[oi];
      let az = getComputedStyle(a6).getPropertyValue("stroke-width");
      az = ni(az);
      az *=
        transformDirection === "left" || transformDirection === "right"
          ? ei(ax)
          : transformDirection === "top" || transformDirection === "bottom"
          ? ei(ay)
          : (ei(ax) + ei(ay)) / 2;
      az = M(az, geometryPrecision);
      a6.style.setProperty("stroke-width", az);
    }
    for (let aA of av) {
      let aB = _e(aA);
      if (aB.gradientUnits === SVG_UNIT_TYPE_USERSPACEONUSE) {
        let aC;
        if (aA.localName === "linearGradient") {
          let aD = new DOMPoint(aB.x1.value, aB.y1.value);
          let aE = new DOMPoint(aB.x2.value, aB.y2.value);
          let aF = new F(aD, aE).getNormalVector().transformPoint(aD);
          aC = ee(
            aD,
            aE,
            aF,
            aA[pi].matrixTransform(a8),
            aA[ui].matrixTransform(a8),
            aA[hi].matrixTransform(a8)
          );
        } else if (aA.localName === "radialGradient") {
          let aG = new DOMPoint(aB.cx.value, aB.cy.value);
          let aH = new DOMPoint(aB.cx.value + aB.r.value, aB.cy.value);
          let aI = new DOMPoint(aB.cx.value, aB.cy.value - aB.r.value);
          aC = ee(
            aG,
            aH,
            aI,
            aA[fi].matrixTransform(a8),
            aA[mi].matrixTransform(a8),
            aA[ci].matrixTransform(a8)
          );
        }
        aC = I(aC, transformPrecision);
        for (let aJ of Ye(aA)) {
          if (aJ.hasAttribute("gradientTransform") === false) {
            if (aA.hasAttribute("gradientTransform")) {
              aJ.setAttribute(
                "gradientTransform",
                aA.getAttribute("gradientTransform")
              );
            } else {
              aJ.setAttribute("gradientTransform", "matrix(1, 0, 0, 1, 0, 0)");
            }
          }
        }
        aA.setAttribute("gradientTransform", aC.toString());
      }
    }
    for (let aK of aw) {
      let aL = We(aK);
      if (aK.hasAttribute("href")) {
        Qe(aK);
      }
      let aM = Je(aK);
      let aN = aK[di];
      let aO = aK[yi];
      let aP = aK[gi];
      if (aM.length > 1) {
        let aQ;
        {
          let aR = pt(aK);
          let aS = "";
          for (
            let aT = 0;
            aT < Infinity &&
            ((aS = aK.id + "-" + aT), aR.querySelector("#" + aS));
            aT += 1
          );
          aQ = ot("svg:pattern");
          aQ.setAttribute("id", aS);
          aQ.setAttribute("href", "#" + aK.id);
          aK.after(aQ);
        }
        for (let aU of ["fill", "stroke"]) {
          if (a6.style.getPropertyValue(aU) === 'url("#' + aK.id + '")') {
            a6.style.setProperty(aU, 'url("#' + aQ.id + '")');
          }
        }
        aK = aQ;
      }
      if (aL.patternUnits === SVG_UNIT_TYPE_USERSPACEONUSE) {
        let aV = new DOMPoint(aL.x.value, aL.y.value);
        let aW = new DOMPoint(aL.x.value + aL.width.value, aL.y.value);
        let aX = new DOMPoint(
          aL.x.value + aL.width.value,
          aL.y.value + aL.height.value
        );
        let aY = ee(
          aV,
          aW,
          aX,
          aN.matrixTransform(a8),
          aO.matrixTransform(a8),
          aP.matrixTransform(a8)
        );
        let aZ = I(aY, transformPrecision);
        aK.setAttribute("patternTransform", aZ.toString());
      } else if (aL.patternUnits === SVG_UNIT_TYPE_OBJECTBOUNDINGBOX) {
        let b0 = oe(a6);
        let b1 = aL.x.valueInSpecifiedUnits;
        let b2 = aL.y.valueInSpecifiedUnits;
        let b3 = aL.width.valueInSpecifiedUnits;
        let b4 = aL.height.valueInSpecifiedUnits;
        if (aL.x.unitType === SVGLength.SVG_LENGTHTYPE_PERCENTAGE) {
          b1 /= 100;
        }
        if (aL.y.unitType === SVGLength.SVG_LENGTHTYPE_PERCENTAGE) {
          b2 /= 100;
        }
        if (aL.width.unitType === SVGLength.SVG_LENGTHTYPE_PERCENTAGE) {
          b3 /= 100;
        }
        if (aL.height.unitType === SVGLength.SVG_LENGTHTYPE_PERCENTAGE) {
          b4 /= 100;
        }
        let b5 = new DOMPoint(b1, b2);
        let b6 = new DOMPoint(b1 + b3, b2);
        let b7 = new DOMPoint(b1 + b3, b2 + b4);
        let b8 = new DOMPoint(b0.x + b5.x * b0.width, b0.y + b5.y * b0.height);
        let b9 = new DOMPoint(b0.x + b6.x * b0.width, b0.y + b6.y * b0.height);
        let ba = new DOMPoint(b0.x + b7.x * b0.width, b0.y + b7.y * b0.height);
        let bb = aN.matrixTransform(a8);
        let bc = aO.matrixTransform(a8);
        let bd = aP.matrixTransform(a8);
        let bf = bb.matrixTransform(aL.patternTransform.inverse());
        let bg = bc.matrixTransform(aL.patternTransform.inverse());
        let bh = bd.matrixTransform(aL.patternTransform.inverse());
        let bj = ee(b8, b9, ba, bf, bg, bh);
        let bk = aL.patternTransform.multiply(bj);
        bk = I(bk, transformPrecision);
        aK.setAttribute("patternTransform", bk.toString());
      }
    }
  }
};
let Zi = (a6) => {
  let a7 = () => {};
  if (W(a6)) {
    let [a8, a9] = q(a6);
    if (a9 === "userSpaceOnUse") {
      let aa = K(a6);
      a8 = a8.matrixTransform(aa);
    }
    Q(a6, new DOMPoint(0, 0), "userSpaceOnUse");
    a7 = (ab, ac) => {
      let ad;
      if (a9 === "userSpaceOnUse") {
        let af = K(a6).inverse();
        ad = a8.matrixTransform(af);
      } else if (a9 === "objectBoundingBox") {
        ad = a8;
      }
      Q(a6, ad, a9, ab, ac);
    };
  }
  return a7;
};
let { isArray } = Array;
class Hi extends ht {
  static t = a` <template> <section id="options-section"> <h3 id="options-heading"><x-message href="#options"></x-message></h3> <section id="view-subsection"> <h4 id="view-heading"><x-message href="#view"></x-message></h4> <x-select id="view-select"> <x-menu id="view-menu"></x-menu> </x-select> </section> <section id="area-subsection"> <h4 id="area-heading"><x-message href="#objects"></x-message></h4> <x-buttons id="area-buttons" tracking="1"> <x-button id="all-area-button" value="all" toggled> <x-label><x-message href="#objects.all"></x-message></x-label> </x-button> <x-button id="selected-area-button" value="selected"> <x-label><x-message href="#objects.selected"></x-message></x-label> </x-button> </x-buttons> </section> <section id="padding-subsection"> <h4 id="padding-heading"><x-message href="#padding"></x-message></h4> <bx-edgeinput id="padding-input"></bx-edgeinput> </section> <section id="origin-subsection"> <x-box id="origin-heading-box"> <h4 id="origin-heading"><x-message href="#origin"></x-message></h4> <x-switch id="origin-switch" size="small"></x-switch> </x-box> <x-box id="origin-box"> <x-box id="origin-x-box" vertical> <x-label id="origin-x-label"><x-message href="#x"></x-message></x-label> <x-numberinput id="origin-x-input" value="0" condensed> <x-stepper></x-stepper> <x-label><x-message href="#origin.auto"></x-message></x-label> </x-numberinput> </x-box> <x-box id="origin-y-box" vertical> <x-label id="origin-y-label"><x-message href="#y"></x-message></x-label> <x-numberinput id="origin-y-input" value="0" condensed> <x-stepper></x-stepper> <x-label><x-message href="#origin.auto"></x-message></x-label> </x-numberinput> </x-box> </x-box> </section> </section> <hr id="preview-section-hr"> <section id="preview-section"> <h3 id="preview-heading"><x-message href="#preview"></x-message></h3> <image id="preview" part="preview"></image> <table id="preview-table"> <tr> <td><x-message href="#coords.x"></x-message>:</td> <td id="preview-x-td">0</td> </tr> <tr> <td><x-message href="#coords.y"></x-message>:</td> <td id="preview-y-td">0</td> </tr> <tr> <td><x-message href="#width"></x-message>:</td> <td id="preview-width-td">100</td> </tr> <tr> <td><x-message href="#height"></x-message>:</td> <td id="preview-height-td">100</td> </tr> </table> </section> </template>
  `;
  static l = a` <template> <x-button id="generate-button" size="large"> <x-icon href="#generators-panel"></x-icon> <x-label><x-message href="#resize"></x-message></x-label> </x-button> </template>
  `;
  static _shadowStyleSheet = s`#view-select{width:100%}#area-subsection{margin-top:14px}#area-buttons{width:100%}#area-buttons x-button{flex:1}#padding-subsection{margin-top:14px}#padding-heading{margin:0}#padding-input{width:240px;margin:0 auto}#origin-subsection{margin-top:14px}#origin-heading{margin:0;flex:1}#origin-switch{margin:0}#origin-box{display:flex;margin-top:14px}#origin-x-box{flex:1;margin-right:6px}#origin-y-box{flex:1;margin-left:6px}#origin-x-input,#origin-y-input{width:100%;margin-top:4px}#origin-x-label,#origin-y-label{font-size:12px}#preview{display:block;margin:0 auto;width:auto;height:auto;max-height:140px;max-width:100%;background-image:none}#preview-table{width:100%;margin-top:14px;font-size:12px}#preview-table td:first-child{text-align:end;font-weight:700}#preview-table td:last-child{width:50%}`;
  #v;
  #M;
  #P;
  constructor() {
    super();
    this["#area-buttons"].addEventListener("toggle", () => this.#O());
    this["#padding-input"].addEventListener("changestart", () => this.#k());
    this["#origin-switch"].addEventListener("toggle", () => this.#D());
    this["#origin-x-input"].addEventListener("changestart", () => this.#U());
    this["#origin-y-input"].addEventListener("changestart", () => this.#S());
    this["#generate-button"].addEventListener("click", () => this.#C());
  }
  connectedCallback() {
    this.#v = ut(this, "bx-editor");
    let a6 = this.#v.board;
    a6.addEventListener(
      "selectedelementschange",
      (this.#M = () => {
        this.#N();
      })
    );
    a6.addEventListener(
      "workspacemutation",
      (this.#P = () => {
        this.#A();
      })
    );
    this.#T(true);
    this.#F();
    this.#V();
  }
  disconnectedCallback() {
    let a6 = this.#v.board;
    a6.removeEventListener("selectedelementschange", this.#M);
    a6.removeEventListener("workspacemutation", this.#P);
  }
  #N() {
    if (this["#area-buttons"].value === "selected") {
      this.#F();
      this.#V();
    }
  }
  #A() {
    this.#T();
    this.#V();
    this.#E();
  }
  #O() {
    a2.setConfig("bx-resizeviewgenerator:area", this["#area-buttons"].value);
    this.#F();
    this.#V();
  }
  #k() {
    let a6;
    let a7;
    this["#padding-input"].addEventListener(
      "change",
      (a6 = () => {
        this.#T();
      })
    );
    this["#padding-input"].addEventListener(
      "changeend",
      (a7 = () => {
        this["#padding-input"].removeEventListener("change", a6);
        this["#padding-input"].removeEventListener("changeend", a7);
        this.#F();
        a2.setConfig(
          "bx-resizeviewgenerator:padding",
          this["#padding-input"].value
        );
      })
    );
  }
  #D() {
    if (this["#origin-switch"].toggled) {
      a2.setConfig("bx-resizeviewgenerator:origin", [0, 0]);
    } else {
      a2.setConfig("bx-resizeviewgenerator:origin", null);
    }
    this.#T();
    this.#F();
  }
  #U() {
    let a6;
    let a7;
    this["#origin-x-input"].addEventListener(
      "change",
      (a6 = () => {
        this["#preview-x-td"].textContent = this["#origin-x-input"].value;
      })
    );
    this["#origin-x-input"].addEventListener(
      "changeend",
      (a7 = () => {
        this["#origin-x-input"].removeEventListener("change", a6);
        this["#origin-x-input"].removeEventListener("changeend", a7);
        let a8 = [this["#origin-x-input"].value, this["#origin-y-input"].value];
        a2.setConfig("bx-resizeviewgenerator:origin", a8);
      })
    );
  }
  #S() {
    let a6;
    let a7;
    this["#origin-y-input"].addEventListener(
      "change",
      (a6 = () => {
        this["#preview-y-td"].textContent = this["#origin-y-input"].value;
      })
    );
    this["#origin-y-input"].addEventListener(
      "changeend",
      (a7 = () => {
        this["#origin-y-input"].removeEventListener("change", a6);
        this["#origin-y-input"].removeEventListener("changeend", a7);
        let a8 = [this["#origin-x-input"].value, this["#origin-y-input"].value];
        a2.setConfig("bx-resizeviewgenerator:origin", a8);
      })
    );
  }
  #C() {
    let a6 = this.#v.board;
    let a7 = [];
    if (this["#area-buttons"].value === "all") {
      for (let a8 of a6.currentWorkspace.children) {
        if (d.includes(a8.localName)) {
          a7.push(a8);
        }
      }
    } else if (this["#area-buttons"].value === "selected") {
      a7 = a6.outermostSelectedObjectElements;
    }
    if (a7.length > 0) {
      a6.undoManager.checkpoint(
        ["#generators.resize-view-to-fit-objects"],
        "#generators-panel"
      );
      let a9 = a7.map((ah) => pe(ah));
      let aa = Se(Ce(a9), K(a6.currentWorkspace).inverse());
      let ab = this["#padding-input"].value;
      if (isArray(ab) === false) {
        ab = [ab, ab, ab, ab];
      }
      let [ac, ad, af, ag] = ab;
      if (this["#origin-switch"].toggled === false) {
        aa.x -= ag;
        aa.y -= ac;
        aa.width += ag + ad;
        aa.height += ac + af;
        aa = Ue(aa, a6.geometryPrecision);
      } else {
        let ah = this["#origin-x-input"].value - aa.x + ag;
        let aj = this["#origin-y-input"].value - aa.y + ac;
        aa.x = this["#origin-x-input"].value;
        aa.y = this["#origin-y-input"].value;
        aa.width += ag + ad;
        aa.height += ac + af;
        aa = Ue(aa, a6.geometryPrecision);
        for (let ak of a7) {
          if (d.includes(ak.localName)) {
            let al = J(ak, a6.vectorCanvas);
            let am = al.inverse();
            let an = H(ak);
            let ao = DOMMatrix.fromMatrix(an);
            ao.multiplySelf(am);
            ao.translateSelf(ah, aj);
            ao.multiplySelf(al);
            Y(ak, ao);
            bi(ak, {
              geometryPrecision: a6.geometryPrecision,
              transformPrecision: a6.transformPrecision,
            });
          }
        }
      }
      if (this["#view-select"].value.startsWith("#")) {
        a6.currentWorkspace
          .querySelector(this["#view-select"].value)
          .setAttribute(
            "viewBox",
            aa.x + " " + aa.y + " " + aa.width + " " + aa.height
          );
      } else {
        a6.currentWorkspace.setAttribute(
          "viewBox",
          aa.x + " " + aa.y + " " + aa.width + " " + aa.height
        );
      }
    }
  }
  #T(a6 = false) {
    let a7 = this.#v.board;
    let a8 = a7.currentWorkspace.querySelectorAll(
      ":scope > view[id], :scope > defs > view[id]"
    );
    if (
      a7.currentWorkspace.hasAttribute("viewBox") === false &&
      a8.length === 0
    ) {
      this["#options-heading"].disabled = true;
    } else {
      this["#options-heading"].disabled = false;
    }
    {
      let a9 = [];
      if (a7.currentWorkspace.hasAttribute("viewBox")) {
        a9.push(["default", "Default view"]);
      }
      for (let aa of a8) {
        let ab = aa.querySelector(":scope > bx-title");
        let ac = "#" + aa.id;
        a9.push([ac, ab ? ab.textContent : ac]);
      }
      {
        let ad = "";
        let af = this["#view-select"].value || "default";
        for (let [ag, ah] of a9) {
          ad +=
            '<x-menuitem value="' +
            ag +
            '"><x-label>' +
            ah +
            "</x-label></x-menuitem>";
        }
        this["#view-select"].value = null;
        this["#view-menu"].innerHTML = ad;
        if (a9.length === 0) {
          this["#view-subsection"].hidden = true;
          this["#view-select"].value = null;
        } else if (a9.length === 1) {
          this["#view-subsection"].hidden = true;
          this["#view-select"].value = a9[0][0];
        } else {
          this["#view-subsection"].hidden = false;
          if (a9.find(([aj]) => aj === af) !== undefined) {
            this["#view-select"].value = af;
          } else {
            this["#view-select"].value = a9[0][0];
          }
        }
      }
    }
    if (a6) {
      let aj = a2.getConfig("bx-resizeviewgenerator:area", "all");
      this["#area-buttons"].value = aj;
    }
    if (this["#view-select"].value === null) {
      this["#area-heading"].disabled = true;
      this["#all-area-button"].disabled = true;
      this["#selected-area-button"].disabled = true;
    } else {
      this["#area-heading"].disabled = false;
      this["#all-area-button"].disabled = false;
      this["#selected-area-button"].disabled = false;
    }
    if (a6) {
      this["#padding-input"].value = a2.getConfig(
        "bx-resizeviewgenerator:padding",
        0
      );
    }
    if (this["#view-select"].value === null) {
      this["#padding-heading"].disabled = true;
      this["#padding-input"].disabled = true;
    } else {
      this["#padding-heading"].disabled = false;
      this["#padding-input"].disabled = false;
    }
    if (a6) {
      let ak = a2.getConfig("bx-resizeviewgenerator:origin", null);
      this["#origin-switch"].toggled = isArray(ak);
      this["#origin-x-input"].value = isArray(ak) ? ak[0] : 0;
      this["#origin-y-input"].value = isArray(ak) ? ak[1] : 0;
    }
    if (this["#view-select"].value === null) {
      this["#origin-heading"].disabled = true;
      this["#origin-switch"].disabled = true;
      this["#origin-x-label"].disabled = true;
      this["#origin-x-input"].disabled = true;
      this["#origin-y-label"].disabled = true;
      this["#origin-y-input"].disabled = true;
    } else {
      this["#origin-heading"].disabled = false;
      this["#origin-switch"].disabled = false;
      if (this["#origin-switch"].toggled) {
        this["#origin-x-label"].disabled = false;
        this["#origin-x-input"].disabled = false;
        this["#origin-y-label"].disabled = false;
        this["#origin-y-input"].disabled = false;
        if (this["#origin-x-input"].value === null) {
          this["#origin-x-input"].value = 0;
        }
        if (this["#origin-y-input"].value === null) {
          this["#origin-y-input"].value = 0;
        }
      } else {
        this["#origin-x-label"].disabled = true;
        this["#origin-x-input"].disabled = true;
        this["#origin-x-input"].value = null;
        this["#origin-y-label"].disabled = true;
        this["#origin-y-input"].disabled = true;
        this["#origin-y-input"].value = null;
      }
    }
  }
  async #F() {
    let a6 = this.#v.board;
    let a7 = a6.currentWorkspace.querySelectorAll(
      ":scope > view[id], :scope > defs > view[id]"
    );
    if (
      a6.currentWorkspace.hasAttribute("viewBox") === false &&
      a7.length === 0
    ) {
      this["#preview-section"].hidden = true;
      this["#preview"].src = "";
      this["#preview-section-hr"].hidden = true;
    } else {
      let a9 = [];
      let aa = [];
      for (let ab of a6.currentWorkspace.children) {
        if (d.includes(ab.localName)) {
          a9.push(ab);
        }
      }
      if (this["#area-buttons"].value === "all") {
        aa = [...a9];
      } else if (this["#area-buttons"].value === "selected") {
        aa = a6.outermostSelectedObjectElements;
      }
      if (aa.length === 0) {
        this["#preview-section"].hidden = true;
        this["#preview"].src = "";
        this["#preview-section-hr"].hidden = true;
      } else {
        let ac = a6.extractArtworkWithElements(a9);
        let ad = aa.map((ao) => pe(ao));
        let af = Ce(ad);
        let ag = this["#padding-input"].value;
        if (isArray(ag) === false) {
          ag = [ag, ag, ag, ag];
        }
        let [ah, aj, ak, al] = ag;
        af = Se(af, K(a6.currentWorkspace).inverse());
        af = Ue(af, a6.geometryPrecision);
        ac.initialViewBox = new DOMRect(af.x, af.y, af.width, af.height);
        af.width += al + aj;
        af.height += ah + ak;
        af.x -= al;
        af.y -= ah;
        af = Ue(af, a6.geometryPrecision);
        ac.setAttribute(
          "viewBox",
          af.x + " " + af.y + " " + af.width + " " + af.height
        );
        ac.setAttribute("width", af.width);
        ac.setAttribute("height", af.height);
        let am = ft(ac);
        let an = await ((a8 = am),
        new Promise(async (ao) => {
          let ap;
          let aq;
          let ar = new Blob([a8], {
            type: "image/svg+xml",
          });
          let as = new FileReader();
          as.readAsDataURL(ar);
          as.addEventListener(
            "load",
            (ap = (au) => {
              as.removeEventListener("load", ap);
              as.removeEventListener("error", aq);
              let av = au.target.result;
              ao(av);
            })
          );
          as.addEventListener(
            "error",
            (aq = (au) => {
              as.removeEventListener("load", ap);
              as.removeEventListener("error", aq);
              ao(null);
            })
          );
        }));
        this["#preview-section"].hidden = false;
        this["#preview-section-hr"].hidden = false;
        this["#preview"].setAttribute("src", an);
        if (this["#origin-switch"].toggled) {
          this["#preview-x-td"].textContent = this["#origin-x-input"].value;
          this["#preview-y-td"].textContent = this["#origin-y-input"].value;
        } else {
          this["#preview-x-td"].textContent = af.x;
          this["#preview-y-td"].textContent = af.y;
        }
        this["#preview-width-td"].textContent = af.width;
        this["#preview-height-td"].textContent = af.height;
      }
    }
    var a8;
  }
  #E = ((e, t, i, n = false) => {
    let l = null;
    let a = null;
    return (...s) => {
      let r = n && !l;
      clearTimeout(l);
      l = setTimeout(() => {
        l = null;
        if (!n) {
          a = e.apply(i, s);
        }
      }, t);
      if (r) {
        a = e.apply(i, s);
      }
      return a;
    };
  })(this.#F, 1000, this);
  #V() {
    let a6 = this.#v.board;
    let a7 = a6.outermostSelectedObjectElements;
    let a8 = a6.currentWorkspace.querySelectorAll(
      ":scope > view[id], :scope > defs > view[id]"
    );
    if (
      (a6.currentWorkspace.hasAttribute("viewBox") === false &&
        a8.length === 0) ||
      (this["#area-buttons"].value === "selected" && a7.length === 0)
    ) {
      this["#generate-button"].disabled = true;
    } else {
      this["#generate-button"].disabled = false;
    }
  }
}
customElements.define("bx-resizeviewgenerator", Hi);
