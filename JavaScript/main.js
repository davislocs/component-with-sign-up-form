function validateForm() {

let fName = document.getElementById("fName");
let lName = document.getElementById("lName");
let eMail = document.getElementById("eMail");
let password = document.getElementById("password");

  if(fName.value === "" || fName.value.length <= 1 || fName.value.length > 20){
    fName.classList.remove("form__input");
    fName.classList.remove("form__input::placeholder");
    document.getElementById("invalid-fName").style.display = "block";
    document.getElementById("invalid-fName").textContent = "Invalid first name";
  }
  else{
    fName.classList.add("form__input");
  }

  if(lName.value === "" || lName.value.length <= 1 || lName.value.length > 20){
    lName.classList.remove("form__input");
    lName.classList.remove("form__input::placeholder");
    document.getElementById("invalid-lName").style.display = "block";
    document.getElementById("invalid-lName").textContent = "Invalid last name";
  }
  else{
    lName.classList.add("form__input");
  }

  if(eMail.value === "" || eMail.value.length <= 4 || eMail.value.length > 30 || eMail.value.includes("@") == false || eMail.value.includes(".") == false){
    eMail.classList.remove("form__input");
    eMail.classList.remove("form__input::placeholder");
    document.getElementById("invalid-eMail").style.display = "block";
    document.getElementById("invalid-eMail").textContent = "Invalid Email";
  }
  else{
    eMail.classList.add("form__input");
  }

  if(password.value === "" || password.value.length < 8 || password.value.length > 16){
    password.classList.remove("form__input");
    password.classList.remove("form__input::placeholder");
    document.getElementById("invalid-password").style.display = "block";
    document.getElementById("invalid-password").textContent = "Invalid pasword";
  }
  else{
    password.classList.add("form__input");
  }
  }

function resetInput(input, error){
  input.classList.add("form__input");
  input.classList.add("form__input::placeholder");
  error.style.display = "none";
}

  
