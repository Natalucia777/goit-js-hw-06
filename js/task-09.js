function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const newBodyColor = {
  nameBodyColor: document.querySelector('.color'),
  buttonChengeColor: document.querySelector('.change-color'),
};

newBodyColor.buttonChengeColor.addEventListener('click', onChangeColor);
function onChangeColor() {
const bodyNevColor = getRandomHexColor();
  document.body.style.backgroundColor = bodyNevColor;
  newBodyColor.nameBodyColor.textContent = bodyNevColor;
}
