const inputForm = document.querySelector('#name-input');
const outputForm = document.querySelector('#name-output');
inputForm.addEventListener('input', (event) => { 
    outputForm.textContent = event.currentTarget.value.trim() || 'Anonymous';
});