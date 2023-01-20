export function createCanvas(){
    let canvas = document.getElementById("result");

    if (canvas != null) {
        return canvas;
  } else {
        let canvas = document.createElement("canvas");
        canvas.setAttribute("id","result");
        body.append(canvas);
        return canvas;
    }
};

