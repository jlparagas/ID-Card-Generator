import { save }  from "./src/download.js";
import { erase } from "./src/erase.js";
import { prev }  from "./src/prev.js";
 
export const canvas = document.getElementById("result");
canvas.height = canvas.width / 1.616;

export const ctx = canvas.getContext("2d");

export const image = document.getElementById("imgDisplayed");

export const hideButton = document.getElementById('download');

const download = document.getElementById("download");
download.addEventListener("click", save);

const clear = document.getElementById("clear");
clear.addEventListener("click", erase);

const create = document.getElementById("create");
create.addEventListener("click", prev);
