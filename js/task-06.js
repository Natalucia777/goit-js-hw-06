const textInput = document.querySelector("#validation-input");
let trueLength = Number(textInput.dataset.length);
let currentLength = 0;
textInput.addEventListener("blur", (event) => {
  let currentLength = Number(event.currentTarget.value.length);
  if (currentLength === trueLength) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
    } else {
      textInput.classList.add("invalid");
      textInput.classList.remove("valid");
      }
});
