if (!window.fallback) {
  window.argv = [];
  window.addEventListener("beforeinstallprompt", (c) => {
    if (!navigator.userAgent.includes("OPR/")) {
      c.preventDefault();
      window.install = () => c.prompt();
      window.dispatchEvent(new CustomEvent("installprompt"));
    }
  });
  window.addEventListener("load", () => {
    if (navigator.serviceWorker) {
      navigator.serviceWorker.register("./workers_service.js", {
        type: "module",
        scope: "./app",
      });
    }
  });
  import("./elements/apps/bx-progressivewebapp.js");
}
