document.addEventListener("DOMContentLoaded", () => {
  const arIframe = document.querySelector("iframe");
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const scale = button.dataset.scale;
      const scaleFactor = scale === "up" ? 1 : -1;
      arIframe.contentWindow.postMessage(scaleFactor, "*");
    });
  });
});

window.onmessage = function (e) {
  if (e.data && e.data === "click") {
    const textarea = document.querySelector("textarea");
    const time = new Date().toISOString();
    textarea.value = time + " - Click" + "\n" + textarea.value;
  }
};
