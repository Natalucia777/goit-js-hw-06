const Items = document.querySelectorAll("li.item");
let indexItems = 0;
const quantityItems = Items.forEach(function (number, index) {
  indexItems += Number(index);
  console.log(`Number of categories: ${indexItems}`);
});
console.log(`Number of categories: ${indexItems}`);

