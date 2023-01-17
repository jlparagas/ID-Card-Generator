import { ctx, hideButton, canvas, image } from '../index.js';

export function prev(){
    let inCompany = document.getElementById('inCompany').value;
    let inName = document.getElementById('inName').value;
    let inPosition = document.getElementById('inPosition').value;
    let inEmail = document.getElementById('inEmail').value;
    let inPhoneNumber = document.getElementById('inPhoneNumber').value;
  
    const company = document.getElementById('company');
    const name = document.getElementById('name');
    const position = document.getElementById('position');
    const email = document.getElementById('email');
    const phoneNumber = document.getElementById('phoneNumber');
  
  if (inCompany && inName && inPosition && inEmail && inPhoneNumber != null) {
    company.innerHTML = inCompany;
    name.innerHTML = inName;
    position.innerHTML = inPosition;
    email.innerHTML = inEmail;
    phoneNumber.innerHTML = inPhoneNumber;
  
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
    ctx.fillText('Name: ' + name.innerHTML, 90, 80);
    ctx.fillText('Position: ' + position.innerHTML, 90, 105);
    ctx.fillText('Email: ' + email.innerHTML, 90, 130);
    ctx.fillText('Phone Number: ' + phoneNumber.innerHTML, 90, 155);
    ctx.drawImage(image, 10, 65, 70, 95);
    
    hideButton.removeAttribute("hidden");
    console.log('Previewed');
  } else {
    alert('Fill up the forms');
    console.log('Fill up the forms');
  }
};