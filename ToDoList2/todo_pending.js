// 문제점: Finish에서 제거가안됨

const form = document.querySelector(".form");
const input = document.querySelector(".input");
const ul1 = document.querySelector(".ul1");
const ul2 = document.querySelector(".ul2");

let toDos = [];

function moveToPending(e) {
  const parentNode = e.target.parentNode;
  ul1.appendChild(parentNode);
  const backBtn = e.target;
  parentNode.removeChild(backBtn);

  const checkBtn = document.createElement("button");
  checkBtn.innerText = "✅";
  parentNode.appendChild(checkBtn);
  checkBtn.addEventListener("click", moveToFinish);
}

function moveToFinish(e) {
  const li = e.target.parentNode;
  ul2.appendChild(li);

  const checkBtn = e.target;
  li.removeChild(checkBtn);

  const backBtn = document.createElement("button");
  backBtn.innerText = "🔙";
  li.appendChild(backBtn);
  backBtn.addEventListener("click", moveToPending);
}

function deleteToDo(e) {
  const { target } = e;
  const { parentNode } = target;
  ul1.removeChild(parentNode);
}

function printToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const checkBtn = document.createElement("button");
  const userText = document.createElement("span");
  li.innerText = text;
  delBtn.innerText = "❌";
  checkBtn.innerText = "✅";
  ul1.appendChild(li);
  li.appendChild(delBtn);
  li.appendChild(checkBtn);
  li.appendChild(userText);
  let newId = toDos.length + 1;
  li.id = newId;
  toDos.push({
    id: newId,
    text: userText,
  });

  delBtn.addEventListener("click", deleteToDo);
  checkBtn.addEventListener("click", moveToFinish);
}

function handleSubmit(e) {
  e.preventDefault();
  const currentValue = input.value;
  printToDo(currentValue);
  input.value = "";
}

function init() {
  form.addEventListener("submit", handleSubmit);
}

init();
