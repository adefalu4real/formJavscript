const button = document.querySelector("#button");
const emailInput = document.querySelector(".email-input");
const formContainer = document.querySelector(".form-container");
const login = document.querySelector("#login");

emailInput.addEventListener("keydown", emailChange);

function emailChange(e) {
  console.log(e.target.value);
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  let value = e;
  //   console.log(value);
  console.log("Hello world");
  alert("Welcome back");
  emailInput.style.backgroundColor = "red";
  formContainer.style.backgroundColor = "green";
});

button.addEventListener("mouseover", (e) => {
  e.preventDefault();
  // console.log("Hello world")
  // alert("welcome back")
  // emailInput.style.backgroundColor = "red";
  // formContainer.style.backgroundColor = "brown";
  login.innerHTML = "<h1> Login</h1>";
  login.style.display = "block";
  login.style.fontSize = "15px";
  login.style.color = "blueviolet";
});
