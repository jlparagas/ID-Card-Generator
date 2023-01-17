import { ctx, hideButton, canvas } from '../index.js';

export function erase() {
  document.getElementById("myForm").reset();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hideButton.setAttribute("hidden", "hidden");

  console.log('Erased');   
};