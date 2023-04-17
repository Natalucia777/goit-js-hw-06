const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listIngredients = ingredients.map(val => {
  const valIngredient = document.createElement('li');
  valIngredient.textContent = val;
  valIngredient.classList.add('item');
  return valIngredient;
});
const listRef = document.querySelector("#ingredients");
listRef.append(...listIngredients);
console.log(listRef);