const form = document.querySelector(".toDoForm");
const input = document.querySelector("input");
const ul = document.querySelector(".toDoList");

const LOCAL_DB = "toDos";

let toDos = [];

function loadToDo() {
  const parseData = localStorage.getItem(LOCAL_DB);
  if (parseData !== null) {
    const realData = JSON.parse(parseData);
    realData.forEach((value) => enrollToDo(value.text));
  }
}
function saveToDos() {
  localStorage.setItem(LOCAL_DB, JSON.stringify(toDos));
}

function deleteToDo(event) {
  //   console.log(event.target);
  const { target } = event; // button
  const targetParent = target.parentNode; // li
  ul.removeChild(targetParent);
  const cleanToDo = toDos.filter(
    (toDo) => toDo.id !== parseInt(targetParent.id)
  );
  toDos = cleanToDo;
  saveToDos();
}

function enrollToDo(userText) {
  const deleteBtn = document.createElement("button");
  const li = document.createElement("li");
  const span = document.createElement("span");
  deleteBtn.innerText = "x";
  span.innerText = userText;
  ul.appendChild(li);
  li.appendChild(deleteBtn);
  li.appendChild(span);
  deleteBtn.addEventListener("click", deleteToDo);
  const newId = toDos.length + 1;
  li.id = newId;
  const toDoObj = {
    text: userText,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  input.value = "";
  enrollToDo(currentValue);
}

function init() {
  loadToDo();
  form.addEventListener("submit", handleSubmit);
}
init();
