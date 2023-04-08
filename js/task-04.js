let counterValue = 0;
const buttonMinus = document.querySelector('[data-action="decrement"]');
const buttonPlus = document.querySelector('[data-action="increment"]');
let value = document.querySelector('#value');
const handleClickMinus = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};
const handleClickPlus = () => {
  counterValue += 1;
  value.textContent = counterValue;
};
buttonMinus.addEventListener("click", handleClickMinus);
buttonPlus.addEventListener("click", handleClickPlus);


