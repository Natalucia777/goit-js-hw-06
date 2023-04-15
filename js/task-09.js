function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const nameBodyColor = document.querySelector('.color');
const bodyNevColor = getRandomHexColor();
const buttonChengeColor = document.querySelector('.change-color');

buttonChengeColor.addEventListener('click', onChangeColor);
function onChangeColor() {
  document.body.style.backgroundColor = bodyNevColor;
  nameBodyColor.backgroundColorValue.textContent = bodyNevColor;
}
