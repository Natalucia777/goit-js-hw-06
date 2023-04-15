function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxContent = document.querySelector('#boxes');
let size = 0;
function createBoxes(amount) {
  const boxSize = 30;
  for (let i = 0; i < amount; i++) {
    size = boxSize + i * 10;
    const blockContent = `<div id="boxes"></div>`;
    blockContent.style.cssText = `
    width: ${size}px;
    height: ${size}px;
    background-color: ${getRandomHexColor()};`;
    boxContent.insertAdjacentHTML("beforeend", blockContent); 
  }
}
function destroyBoxes() {
  boxContent.innerHTML = "";
}
const btnDataCreate = document.querySelector("[data-create]");
btnDataCreate.addEventListener('click', () => { createBoxes(input.value);});
const btnDataDestroy = document.querySelector("[data-destroy]");
btnDataDestroy.addEventListener('click', () => { destroyBoxes();});
