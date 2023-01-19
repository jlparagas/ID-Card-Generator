import { save }  from "./src/download.js";
import { erase } from "./src/erase.js";
import { prev }  from "./src/prev.js";
 
export const canvas = document.getElementById("result");

export const image = document.getElementById("imgDisplayed");

export const hideButton = document.getElementById('download');

export function createCanvas () {
    let canvas = document.getElementById("result");

    if (canvas != null) {
        canvas = document.getElementById("result");
      } else {
        let newCanvas = document.createElement("canvas");
        newCanvas.setAttribute("id", "result");
        body.append(newCanvas);
    }
}

function setCanvasHW() {
    canvas.height = canvas.width / 1.616;
};

function clickButtons () {    
    const download = document.getElementById("download");
    download.addEventListener("click", save);

    const clear = document.getElementById("clear");
    clear.addEventListener("click", erase);

    const create = document.getElementById("create");
    create.addEventListener("click", prev);
};

document.addEventListener('DOMContentLoaded', function () {
    setCanvasHW();
    clickButtons();
});
