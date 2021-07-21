window.onmessage = function (e) {
  const aEntity = document.querySelector("#box1");
  if (aEntity) {
    const scale = aEntity.getAttribute("scale");
    Object.keys(scale).forEach((key) => (scale[key] = scale[key] + e.data));
    aEntity.setAttribute("scale", scale);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  AFRAME.registerComponent("grouphandler1", {
    init: function () {
      const animatedMarker5 = document.querySelector("#five");      
      const aEntity5 = document.querySelector("#box5");

      animatedMarker5.addEventListener("click", function (ev, target) {
        const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
        if (aEntity5 && intersectedElement === aEntity5) {
          window.top.postMessage("click", "*");
          alert("Clicked marker group 5!")
        }
      });
    },
  });
  AFRAME.registerComponent("grouphandler2", {
    init: function () {
      const animatedMarker6 = document.querySelector("#seven");      
      const aEntity6 = document.querySelector("#box6");

      animatedMarker6.addEventListener("click", function (ev, target) {
        const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
        if (aEntity6 && intersectedElement === aEntity6) {
          window.top.postMessage("click", "*");
          alert("Clicked marker group 6!")
        }
      });
    },
  });
  AFRAME.registerComponent("markerhandler1", {
    init: function () {
      const animatedMarker1 = document.querySelector("#animated-marker1");      
      const aEntity1 = document.querySelector("#box1");

      animatedMarker1.addEventListener("click", function (ev, target) {
        const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
        if (aEntity1 && intersectedElement === aEntity1) {
          window.top.postMessage("click", "*");
          alert("Clicked marker 1!")
        }
      });
    },
  });
  AFRAME.registerComponent("markerhandler2", {
    init: function () {
      const animatedMarker2 = document.querySelector("#animated-marker2");      
      const aEntity2 = document.querySelector("#box2");

      animatedMarker2.addEventListener("click", function (ev, target) {
        const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
        if (aEntity2 && intersectedElement === aEntity2) {
          window.top.postMessage("click", "*");
          alert("Clicked marker 2!")
        }
      });
    },
  });
  AFRAME.registerComponent("markerhandler3", {
    init: function () {
      const animatedMarker3 = document.querySelector("#animated-marker3");      
      const aEntity3 = document.querySelector("#box3");

      animatedMarker3.addEventListener("click", function (ev, target) {
        const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
        if (aEntity3 && intersectedElement === aEntity3) {
          window.top.postMessage("click", "*");
          alert("Clicked marker 3!")
        }
      });
    },
  });
  AFRAME.registerComponent("markerhandler4", {
    init: function () {
      const animatedMarker4 = document.querySelector("#animated-marker4");      
      const aEntity4 = document.querySelector("#box4");

      animatedMarker4.addEventListener("click", function (ev, target) {
        const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
        if (aEntity4 && intersectedElement === aEntity4) {
          window.top.postMessage("click", "*");
          alert("Clicked marker 4!")
        }
      });
    },
  });
});
