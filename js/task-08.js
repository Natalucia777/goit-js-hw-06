const submitForm = document.querySelector('.login-form');
let emailPassword = 0;
submitForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const { elements: { email, password },} = event.currentTarget;
  if (!email.value || !password.value) {
    return alert('Fill in the fields please!');
  } else {
    const emailPassword = { email: email.value, password: password.value };
    console.log(emailPassword);
    event.currentTarget.reset();}
}); 

