function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputMenu = document.querySelector('#controls input[type="number"]');
const boxElements = document.querySelector('#boxes');
const createBtn = document.querySelector('#controls button[data-create]');
const destroyBtn = document.querySelector('#controls button[data-destroy]');


createBtn.addEventListener('click', () => {
  const amount = Number(inputMenu.value);
  createBoxes(amount);
      if (amount < Number(inputMenu.min) || amount > Number(inputMenu.max)) { 
    return alert("Введено недопустиме значення");
  };
});


function createBoxes(amount) { 
  let boxItems = "";
  let dimension = 30;
  const increment = Number(inputMenu.step);
  for (let i = 1; i <= amount; i += increment) { 
    boxItems += `<div style="background-color: ${getRandomHexColor()}; width: ${dimension}px; height:${dimension}px; margin-top: 10px;"></div>`;
    dimension += 10;
  }
  boxElements.insertAdjacentHTML("beforeend", boxItems);
};


destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() { 
  boxElements.innerHTML = '';
  inputMenu.value = '';
};

