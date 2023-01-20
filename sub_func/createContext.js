export function createContext(){
    let canvas = document.getElementById("result");

    if (canvas != null) {
        let ctx = canvas.getContext('2d');
        return ctx;
  } else {
        let canvas = document.createElement("canvas");
        canvas.setAttribute("id","result");
        body.append(canvas);
        let ctx = canvas.getContext('2d');
        return ctx;
    }
};