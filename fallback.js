
// @copyright
//   © 2012-2024 Jarosław Foksa

"use strict";

if (
  window.customElements                          === undefined ||
  window.customElements.define                   === undefined ||
  window.structuredClone                         === undefined ||
  window.Animation                               === undefined ||
  window.BroadcastChannel                        === undefined ||
  window.CSSStyleSheet                           === undefined ||
  window.CSSStyleSheet.prototype.replaceSync     === undefined ||
  window.DOMPoint                                === undefined ||
  window.DOMRect                                 === undefined ||
  window.HTMLDialogElement                       === undefined ||
  window.HTMLDialogElement.prototype.showModal   === undefined ||
  window.MutationObserver                        === undefined ||
  window.OffscreenCanvas                         === undefined ||
  window.PointerEvent                            === undefined ||
  window.ResizeObserver                          === undefined ||
  window.ShadowRoot                              === undefined ||
  window.CSS                                     === undefined ||
  window.CSS.supports("color", "var(--test)")    === false     ||
  "styleMap"          in CSSStyleRule.prototype  === false     ||
  "computedStyleMap"  in Element.prototype       === false
) {
  window.fallback = true

  window.addEventListener("load", function(event) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/templates/fallback.tpl");
    xhr.send();

    xhr.addEventListener("readystatechange", function(response) {
      if (xhr.readyState === 4 && xhr.status === 200) {
        document.body.innerHTML = xhr.responseText;
        document.body.hidden = false;
        document.documentElement.style.overflow = null

        if (location.pathname !== "/") {
          document.getElementById("home-anchor").setAttribute("href", "/");
          document.getElementById("error").removeAttribute("hidden");
          document.getElementById("screenshots").setAttribute("hidden", "");
        }
      }
    });
  });
}
