import { createCanvas } from "../sub_func/createCanvas.js";

export function save(){
    let canvas = createCanvas();
    
    if (canvas != null) {
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.href = canvas.toDataURL();
        a.download = "Card.png";
        a.click();
        document.body.removeChild(a);
        console.log('Download Successfull');
    } else {
        console.log('The Canvas is no Data');
    }
};

