// 로컬스토리지 X
const form = document.querySelector(".form");
const input = document.querySelector(".input");
const ul1 = document.querySelector(".ul1");
const ul2 = document.querySelector(".ul2");

let pendingToDos = [];
let finishToDos = [];

function moveToPending(e) {
  const li = e.target.parentNode;
  ul1.appendChild(li);

  const backBtn = e.target;
  li.removeChild(backBtn);

  const checkBtn = document.createElement("button");
  checkBtn.innerText = "✅";
  li.appendChild(checkBtn);
  checkBtn.addEventListener("click", moveToFinish);
}

function moveToFinish(e) {
  const li = e.target.parentNode;
  ul2.appendChild(li);
  ul2.removeChild(li);

  const newLi = document.createElement("li");
  ul2.appendChild(newLi);
  let userText = li.firstChild;
  newLi.appendChild(userText);

  const newId = (Date.now() + "").slice(-10);
  newLi.id = newId;
  finishToDos.push({
    id: newId,
    text: userText,
  });

  const delFromFinish = document.createElement("button");
  delFromFinish.innerText = "❌";
  newLi.appendChild(delFromFinish);
  delFromFinish.addEventListener("click", deleteFinishToDo);

  const backBtn = document.createElement("button");
  backBtn.innerText = "🔙";
  newLi.appendChild(backBtn);
  backBtn.addEventListener("click", moveToPending);
}

function deleteFinishToDo(e) {
  const { parentNode } = e.target;
  ul2.removeChild(parentNode);
}

function deletePendingToDo(e) {
  const { parentNode } = e.target;
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

  let newId = pendingToDos.length + 1;
  li.id = newId;
  pendingToDos.push({
    id: newId,
    text: userText,
  });

  delBtn.addEventListener("click", deletePendingToDo);
  checkBtn.addEventListener("click", moveToFinish);
}

function handleSubmit(e) {
  e.preventDefault();
  const currentValue = input.value;
  if (currentValue === "") return;
  printToDo(currentValue);
  input.value = "";
}

function init() {
  form.addEventListener("submit", handleSubmit);
}

init();
