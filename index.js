const canvas = document.getElementById("result");
canvas.height = canvas.width / 1.616;

const ctx = canvas.getContext("2d");

const hideButton = document.getElementById('download');

const image = document.getElementById("imgDisplayed");

const create = document.getElementById("create");
create.addEventListener("click", prev);

const clear = document.getElementById("clear");
clear.addEventListener("click", erase);


function prev(){
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
  ctx.fillText('Name: ' + name.innerHTML, 100, 90);
  ctx.fillText('Position: ' + position.innerHTML, 100, 115);
  ctx.fillText('Email: ' + email.innerHTML, 100, 140);
  ctx.fillText('Phone Number: ' + phoneNumber.innerHTML, 100, 165);
  ctx.drawImage(image, 10, 65, 80, 105);

  hideButton.removeAttribute("hidden");
}


function erase() {
  document.getElementById("myForm").reset();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hideButton.setAttribute("hidden", "hidden");
}


const download = document.getElementById("download");
download.addEventListener("click", function(){

  if(window.navigator.msSaveBlob) {

    window.navigator.msSaveBlob(canvas.msToBlob(), "Card.png");
  } else {

    const a = document.createElement("a");
    document.body.appendChild(a);
    a.href = canvas.toDataURL();
    a.download = "Card.png";
    a.click();
    document.body.removeChild(a);
  }
});