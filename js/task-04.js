const counterValue = 0;
const buttonMinus = document.querySelector('[data-action="decrement"]');
const buttonчPlus = document.querySelector('[data-action="increment"]');
const handleClickMinus = () => {
  counterValue -= 1;
  
  console.log(counterValue);
};
const handleClickPlus = () => {
  counterValue += 1;
  
  console.log(counterValue);
};

buttonMinus.addEventListener("click", handleClickMinus);
buttonMinus.addEventListener("click", handleClickPlus);


