function validation() {
  if (document.formFill.username.value == "") {
    document.getElementById("result").innerHTML = "Enter Username";
    return false;
  } else if (document.formFill.username.value <= 3) {
    document.getElementById("result").innerHTML = "Atleast three letter*";
    return false;
  } else if (document.formFill.email.value == "") {
    document.getElementById("result").innerHTML = "Enter Your Email";
    return false;
  } else if (document.formFill.password.value == "") {
    document.getElementById("result").innerHTML = "Enter Your Password";
    return false;
  } else if (document.formFill.password.value.length < 3) {
    document.getElementById("result").innerHTML = "Password Must be 3-digits";
    return false;
  } else if (document.formFill.confirmPassword.value == "") {
    document.getElementById("result").innerHTML = "Enter Confirm Password";
    return false;
  } else if (
    document.formFill.confirmPassword.value !==
    document.formFill.password.value
  ) {
    document.getElementById("result").innerHTML = "Password doesn matched";
    return false;
  }
  else if (
    document.formFill.password.value ==
    document.formFill.confirmPassword.value
  ) {
    popup.classList.add("open-slide")
    return false;
  }

}

var popup = document.getElementById("popup");

function CloseSlide(){
  popup.classList.remove("open-slide")
}
