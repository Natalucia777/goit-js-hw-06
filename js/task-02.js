const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list1 = document.createElement("li");
list1.textContent = "Potatoes";
const list2 = document.createElement("li");
list2.textContent = "Mushrooms";
const list3 = document.createElement("li");
list3.textContent = "Garlic";
const list4 = document.createElement("li");
list4.textContent = "Herbs";
const list5 = document.createElement("li");
list5.textContent = "Condiments";
const listRef = document.querySelector("#ingredients");
listRef.append(list1, list2, list3, list4, list5);
console.log(listRef);