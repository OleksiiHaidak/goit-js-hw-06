const loginForm = document.querySelector('.login-form');

loginForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Будь-ласка заповніть всі поля форми!");
  };
  const formData = {
    email: loginForm.email.value,
    password: loginForm.password.value,
  };
  console.log(formData);
  event.currentTarget.reset();
};