function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxContent = document.querySelector('div#boxes');
const controlInput = document.querySelector('input');
const btnDataCreate = document.querySelector('[data-create]');
btnDataCreate.addEventListener('click', () => { const val = Number(controlInput.value);
  createBoxes(val);
});
function createBoxes(amount) {
  const container = document.getElementById('boxes');
  let boxSize = 30;
  for (let i = 0; i < amount; i +=1) {
    boxSize = boxSize + i * 10;
    let blockContent = document.createElement('div');
    blockContent.style.width = `${boxSize}px`;
    blockContent.style.height = `${boxSize}px`;
    blockContent.style.backgroundColor = getRandomHexColor();
    boxContent.appendChild(blockContent);
  }
}
const btnDataDestroy = document.querySelector('[data-destroy]');
btnDataDestroy.addEventListener('click', () => { destroyBoxes(); });
function destroyBoxes() {
  boxContent.innerHTML = "";
}
