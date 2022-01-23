const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");
const todoList = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");

//for variable contains only STRING
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("USERNAME_KEY", username);
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  todoList.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
  todoInput.focus();
}

const savedUserName = localStorage.getItem("USERNAME_KEY");

if (savedUserName === null) {
  //show the from
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greeting <h1>
  paintGreeting(savedUserName);
}
