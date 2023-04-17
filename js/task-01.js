const itemsRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemsRef.length}`);
itemsRef.forEach(function (content) {
  const titlesContent = content.querySelector('h2').textContent;
  const titleList = content.querySelectorAll('li');
  console.log(`Category: ${titlesContent}`);
  console.log(`Elements: ${titleList.length}`);
});
