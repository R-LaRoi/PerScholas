let formElement = document.getElementById("registration");
let formData = new FormData();

formElement.addEventListener("submit", (e) => {
  e.preventDefault();

  formData.username = formElement.elements["username"];
  formData.email = formElement.elements["email"];
  formData.password = formElement.elements["password"];
  formData.passwordCheck = formElement.elements["passwordCheck"];
  formData.terms = formElement.elements["terms"];

  formData.username = formData.username.value.toLowerCase();
  formData.email = formData.email.value.toLowerCase;
  formData.password = formData.password.value;
  formData.terms = formData.terms.value;
  formData.passwordCheck = formData.passwordCheck.value;

  function checkPassword() {
    if (formData.password !== formData.passwordCheck) {
      alert("Passwords do not match");
    } else if (formData.username === formData.password) {
      alert("Choose another username");
    } else if (formData.password.value === formData.passwordCheck.value) {
      localStorage.setItem("registrationForm", JSON.stringify(formData));

      console.log(localStorage.getItem("registrationForm"));

      formElement.reset();
      alert("registration sucessful");
    }
  }

  checkPassword();
  return formData;
});

// ----Login

let loginFormElement = document.getElementById("login");
let loginData = new FormData();

loginFormElement.addEventListener("submit", (e) => {
  e.preventDefault();

  loginData.username = loginFormElement.elements["username"];
  loginData.password = loginFormElement.elements["password"];

  loginData.username = loginFormElement.username.value;
  loginData.password = loginFormElement.password.value;

  let userLogin = loginData.username.toLowerCase("");
  let userPassword = loginData.password;

  let dataStored = localStorage.getItem("registrationForm");
  const formStorage = JSON.parse(dataStored);

  function submitLogin() {
    e.preventDefault();
    if (
      userLogin !== formStorage.username &&
      userPassword !== formStorage.password
    ) {
      alert("Unable to login");
    } else if (
      userLogin === formStorage.username &&
      userPassword === formStorage.password
    ) {
      alert("Logged in");

      loginFormElement.reset();
    }
    return;
  }

  submitLogin();
});
