function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxContent = document.querySelector('#boxes');
const boxSize = 30;
let size = 0;
function createBoxes(amount) {
   for (let i = 0; i < amount; i++) {
     size = boxSize + i * 10;
     
}
 const blockContent = `
<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>
<div id="boxes"></div>`;
  boxContent.insertAdjacentHTML("beforeend", blockContent);
}

function destroyBoxes() {

}

