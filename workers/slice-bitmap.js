globalThis.addEventListener("message", async (c) => {
  let [d, g] = c.data;
  let h = [];
  let i = new OffscreenCanvas(d.width, d.height).getContext("2d", {
    willReadFrequently: g.length > 1,
  });
  i.drawImage(d, 0, 0);
  for (let [j, k, m, p] of g) {
    let q = i.getImageData(j, k, m, p);
    h.push(q);
  }
  globalThis.postMessage(h);
});
