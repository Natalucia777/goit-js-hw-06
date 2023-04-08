const submitForm = document.querySelector('.login-form');
const submitButton = document.querySelector('button');
const emailPassword = 0;
submitForm.addEventListener("submit", (event) => {
    event.preventDefault();
    emailPassword = event.currentTarget = {
    elements: { email, password },
  };  
  if (email.value || password.value) {
    const emailPassword = { email: email.value, password: password.value };
    console.log(emailPassword);
      } else {
      return alert("Fill in the fields please!");
  }
  event.currentTarget.reset();
}); 
