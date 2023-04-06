const itemsRef = document.querySelectorAll('.item');
let indexItems = 0;
const quantityItems = itemsRef.forEach(function (number, index) {
  indexItems += Number(index);
});
console.log(`Number of categories: ${indexItems}`);

let titlesContent = 0;
let titleList = 0;
itemsRef.forEach(function (content) {
  titlesContent = content.querySelector('h2').textContent;
  titleList = content.querySelectorAll('li');
  console.log(`Category: ${titlesContent}`);
  console.log(`Elements: ${titleList.length}`);
});
