const fontInput = {
    inputRange: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
};
let fontVal = 0; 
function controlInput() {
  fontVal = fontInput.inputRange.value;
  fontInput.text.style.fontSize = `${fontVal}px`;
}
fontInput.inputRange.addEventListener("input", controlInput);