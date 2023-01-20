import { createCanvas } from "../sub_func/createCanvas.js";
import { createContext } from "../sub_func/createContext.js";
import { createDownloadButton } from "../sub_func/createDownloadButton.js";

export function erase() {
  let ctx = createContext();
  let canvas = createCanvas();
  let downloadButton = createDownloadButton();

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  document.getElementById("myForm").reset();
  downloadButton.setAttribute("hidden", "hidden");

  console.log('Erased');
}