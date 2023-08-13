
let counterValue = 0;

const counterOperator = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    valueCounter: document.querySelector('#value'),
}

counterOperator.decrementBtn.addEventListener('click', onDecrementBtn);
counterOperator.incrementBtn.addEventListener('click', onIncrementBtn);


function onDecrementBtn() { 
    counterValue -= 1;
    counterOperator.valueCounter.textContent = counterValue;
};

function onIncrementBtn() { 
    counterValue += 1;
    counterOperator.valueCounter.textContent = counterValue;
};