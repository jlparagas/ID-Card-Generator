function deleteRect () {
  let canvas = document.getElementById("result");

  if (canvas != null) {
      let ctx = canvas.getContext('2d');
      ctx.clearRect(0,0, canvas.width, canvas.height);
    } else {
      let canvas = document.createElement("canvas");
      canvas.setAttribute("id","result");
      body.append(canvas);
      let ctx = canvas.getContext('2d');
      ctx.clearRect(0,0, canvas.width, canvas.height);
    }
};


export function erase() {
  let hideButton = document.getElementById("download");

  deleteRect();
  document.getElementById("myForm").reset();

  if (hideButton != null){
  hideButton.setAttribute("hidden", "hidden");
  console.log('Erased');
  } else {
    let newButton = document.createElement("button");
    newButton.setAttribute("id","download");
    body.append(newButton);
    newButton.setAttribute("hidden", "hidden");
    console.log('Erase new object');
  }   
}