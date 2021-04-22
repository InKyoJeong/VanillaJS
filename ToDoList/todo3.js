const toDoForm = document.querySelector(".toDoForm");
const toDoInput = document.querySelector("input");
const toDoList = document.querySelector(".toDoList");

let toDos = [];
const SAVE_LS = "SAVE_LS";

function saveToDos() {
  localStorage.setItem(SAVE_LS, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const { target } = event;
  const { parentNode } = target;
  toDoList.removeChild(parentNode);
  const cleanTodo = toDos.filter((toDo) => {
    return parseInt(toDo.id) !== parseInt(parentNode.id);
  });
  toDos = cleanTodo;
  saveToDos();
}

function displayToDo(text) {
  const li = document.createElement("li");
  const btn = document.createElement("button");
  const span = document.createElement("span");
  toDoList.appendChild(li);
  li.appendChild(span);
  li.appendChild(btn);
  btn.innerText = "❌";
  span.innerText = text;
  btn.addEventListener("click", deleteToDo);
  const newId = toDos.length + 1;
  li.id = newId;
  toDos.push({
    id: newId,
    text: text,
  });
  saveToDos();
}

function addToDo(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  if (currentValue === "") {
    return;
  }
  toDoInput.value = "";
  displayToDo(currentValue);
}

function loadToDo() {
  const getBeforeToDo = localStorage.getItem(SAVE_LS);
  if (getBeforeToDo !== null) {
    const parseBeforeToDo = JSON.parse(getBeforeToDo);
    // parseBeforeToDo.forEach((e) => displayToDo(e.text));
    for (let x of parseBeforeToDo) {
      displayToDo(x.text);
    }
  }
}

function init() {
  loadToDo();
  toDoForm.addEventListener("submit", addToDo);
}

init();
