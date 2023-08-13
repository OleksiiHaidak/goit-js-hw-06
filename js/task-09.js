

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const changeColorBtn = document.querySelector('.change-color');
const bodyBgColor = document.querySelector('body');
const colorName = document.querySelector('.color');

changeColorBtn.addEventListener('click', () => { 
  bodyBgColor.style.backgroundColor = getRandomHexColor();
  colorName.textContent = bodyBgColor.style.backgroundColor;
});

// changeColorBtn.addEventListener('click', () => { 
//   const randomColor = getRandomHexColor();
//   bodyBgColor.style.backgroundColor = randomColor;
//   colorName.textContent = randomColor;
// });