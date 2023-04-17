const fontInput = {
    inputRange: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
};
fontInput.text.style.fontSize = `${fontInput.inputRange.value}px`;
let fontVal = 0; 
function controlInput() {
  fontVal = fontInput.inputRange.value;
  fontInput.text.style.fontSize = `${fontVal}px`;
}
fontInput.inputRange.addEventListener("input", controlInput);