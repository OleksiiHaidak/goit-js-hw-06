const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const mainList = document.querySelector("#ingredients");
const itemList = ingredients.map(item => {
  const listEl = document.createElement('li');
  listEl.textContent = item;
  listEl.classList.add('item');
  return listEl;
});
mainList.append(...itemList);
console.log(mainList);