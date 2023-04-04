const itemsRef = document.querySelectorAll('li.item');
let indexItems = 0;
const quantityItems = itemsRef.forEach(function (number, index) {
  indexItems += Number(index);
  // console.log(`Number of categories: ${indexItems}`);
});
console.log(`Number of categories: ${indexItems}`);
let titlesContent = 0;
let titleList = 0;
const titles = document.querySelectorAll('.item h2');
const titleContent = titles.forEach(function (content, index) {
  titlesContent = content.textContent;
  titleList = document.querySelectorAll('li.item li');;

  console.log(`Category: ${titlesContent}`);
  console.log(`Elements: ${titleList.length}`);
});

//let indexItems = 0;
// const quantityItems = Items.forEach(function (number, index) {
//   indexItems += Number(index);
//   console.log(`Number of categories: ${indexItems}`);
// });

