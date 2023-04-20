const listItemsRef = document.querySelector('#categories');
const itemsRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${listItemsRef.children.length}`);
itemsRef.forEach(function (content) {
  console.log(`Category: ${content.firstElementChild.textContent}`);
  console.log(`Elements: ${content.lastElementChild.children.length}`);
});
