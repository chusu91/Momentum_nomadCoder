const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = [];
const TODOS_KEY = "todos";

function saveToDos() {
  //change to STRING and save it as ARRAY??
  //local Storage에 array로 저장이 안되기 때문에 JASON.stringify로 array처럼 생긴
  //string으로 저장한 후 다시 JASON.parse이용해서 object array로 꺼내는 방식
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //li.id is String so change to int
  saveToDos(); //beacuse filter function makes NEW array, so have to save the array once again
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id; //id of Dom is always STRING
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span); // span is the child of li
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = ""; //input value become dissapear.
  const newTodoObj = {
    //make a object
    text: newTodo, // object's text
    id: Date.now(), // object's id as randon num
  };
  toDos.push(newTodoObj); // but push the obj to array toDos
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello() {}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  //stroing the previous todos
  toDos = parsedToDos;
  //each item in the array, function will be executed.
  parsedToDos.forEach(paintToDo);
}
