function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyColor = document.querySelector('.color');
const bodyNevColor = getRandomHexColor();
const buttonChengeColor = document.querySelector('.change-color');

buttonColor.addEventListener('click', onChangeColor);
function onChangeColor() {
  document.body.style.backgroundColor = bodyNevColor;
  bodyColor.backgroundColorValue.textContent = bodyNevColor;
}
