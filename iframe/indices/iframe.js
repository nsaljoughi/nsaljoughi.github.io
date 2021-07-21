window.onmessage = function (e) {
  const aEntity = document.querySelector("#animated-model");
  if (aEntity) {
    const scale = aEntity.getAttribute("scale");
    Object.keys(scale).forEach((key) => (scale[key] = scale[key] + e.data));
    aEntity.setAttribute("scale", scale);
  }
};

if (document.querySelector("#six")) {
          window.top.postMessage("Marker six found");
      }

document.addEventListener("DOMContentLoaded", () => {
  AFRAME.registerComponent("markerhandler", {
    init: function () {
      const animatedMarker = document.querySelector("#animated-marker"); 
      const aEntity = document.querySelector("#animated-model");

      animatedMarker.addEventListener("click", function (ev, target) {
        const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
        if (aEntity && intersectedElement === aEntity) {
          window.top.postMessage("click", "*");
        }
      });
    },
  });
});
