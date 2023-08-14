const validationForm = document.querySelector('#validation-input');

const correctInputLength = Number(validationForm.getAttribute('data-length'));

validationForm.addEventListener("blur", () => {
    const inputLength = validationForm.value.trim().length;
    if (inputLength === 0) {
        validationForm.classList.remove('valid', 'invalid');
    } else if (inputLength === correctInputLength) {
        validationForm.classList.remove('invalid');
        validationForm.classList.add('valid');
    } else {
        validationForm.classList.remove('valid');
        validationForm.classList.add('invalid');
    }
    });