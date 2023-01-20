import { createCanvas } from "../sub_func/createCanvas.js";
import { createContext } from "../sub_func/createContext.js";
import { createDownloadButton } from "../sub_func/createDownloadButton.js";
import { getUserData } from "../sub_func/getUserData.js";


export function prev(){
  let ctx = createContext();
  let canvas = createCanvas();
  let downloadButton = createDownloadButton();
  
  const image = document.getElementById("imgDisplayed");

  const inCompany = document.getElementById('inCompany').value;
  const inName = document.getElementById('inName').value;
  const inPosition = document.getElementById('inPosition').value;
  const inEmail = document.getElementById('inEmail').value;
  const inPhoneNumber = document.getElementById('inPhoneNumber').value;

  getUserData(inCompany,inName,inPosition,inEmail,inPhoneNumber);

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#159";
  ctx.rect(0, 0, 300, 56);
  ctx.fill();
  ctx.fillStyle = "#fff";
  ctx.font = "15px Helvetica";
  ctx.fillText(company.innerHTML, 10, 25);
  ctx.font = "10px Helvetica";
  ctx.fillStyle = "#000";
  ctx.fillText('Name: ' + nameOwner.innerHTML, 90, 80);
  ctx.fillText('Position: ' + position.innerHTML, 90, 105);
  ctx.fillText('Email: ' + email.innerHTML, 90, 130);
  ctx.fillText('Phone Number: ' + phoneNumber.innerHTML, 90, 155);
  ctx.drawImage(image, 10, 65, 70, 95);
  
  downloadButton.removeAttribute("hidden");
  console.log('Previewed')
};