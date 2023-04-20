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
    if (amount >= Number(controlInput.min) && amount <= Number(controlInput.max)) {
      for (let i = 0, step = 0; i < amount; i += 1, step += 10) {
        let blockContent = document.createElement('div');
        blockContent.style.width = `${boxSize + step}px`;
        blockContent.style.height = `${boxSize + step}px`;
        blockContent.style.backgroundColor = getRandomHexColor();
        boxContent.appendChild(blockContent);
      }
    } else {
      return alert('Please enter a valid value from 1 to 100 !'); }
  }
const btnDataDestroy = document.querySelector('[data-destroy]');
btnDataDestroy.addEventListener('click', () => { destroyBoxes(); });
function destroyBoxes() {
  controlInput.value = '';
  boxContent.innerHTML = "";
}
