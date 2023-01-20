import { save }  from "./src/download.js";
import { erase } from "./src/erase.js";
import { prev }  from "./src/prev.js";

function setCanvasHW() {
    let canvas = document.getElementById("result");
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
