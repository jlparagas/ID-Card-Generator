export function getUserData (inCompany, inName, inPosition, inEmail, inPhoneNumber) {
    const company = document.getElementById('company');
    const nameOwner = document.getElementById('nameOwner');
    const position = document.getElementById('position');
    const email = document.getElementById('email');
    const phoneNumber = document.getElementById('phoneNumber');
  
    company.innerHTML = inCompany;
    nameOwner.innerHTML = inName;
    position.innerHTML = inPosition;
    email.innerHTML = inEmail;
    phoneNumber.innerHTML = inPhoneNumber;
}
   