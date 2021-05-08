const toDoForm = document.querySelector(".toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoPendingUl = document.querySelector(".toDoPending"),
  toDoFinishedUl = document.querySelector(".toDoFinished");

let pendingArray = [];
let finishedArray = [];

// console.log(pendingArray);
// console.log(finishedArray);

function findArrayFinished(findId) {
  return finishedArray.find((e) => {
    return e.id === findId;
  });
}

function findArrayPending(findId) {
  return pendingArray.find((e) => {
    return e.id === findId;
  });
}

function addArrayPending(toDoObj) {
  pendingArray.push(toDoObj);
}

function addArrayFinished(toDoObj) {
  finishedArray.push(toDoObj);
}

function removeArrayPending(removeId) {
  pendingArray = pendingArray.filter((e) => {
    return e.id !== removeId;
  });
}

function removeArrayFinished(removeId) {
  finishedArray = finishedArray.filter((e) => {
    return e.id !== removeId;
  });
}

function makeToDoItem(text) {
  return {
    id: Date.now() + "",
    text,
  };
}

function handlebackBtn(e) {
  const li = e.target.parentNode;
  toDoFinishedUl.removeChild(li);
  const toDoObj = findArrayFinished(li.id);
  removeArrayFinished(li.id);
  addToPending(toDoObj);
}

function handleCheckBtn(e) {
  const li = e.target.parentNode;
  toDoPendingUl.removeChild(li);
  const toDoObj = findArrayPending(li.id);
  removeArrayPending(li.id);
  addToFinished(toDoObj);
}

function addToFinished(toDoObj) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const backBtn = document.createElement("button");
  span.innerText = toDoObj.text;
  delBtn.innerText = "❌";
  backBtn.innerText = "🔙";
  li.id = toDoObj.id;
  li.append(span, delBtn, backBtn);
  toDoFinishedUl.appendChild(li);

  addArrayFinished(toDoObj);

  backBtn.addEventListener("click", handlebackBtn);
  delBtn.addEventListener("click", deleteTodo);
}

function deleteTodo(e) {
  const li = e.target.parentNode;
  li.parentNode.removeChild(li);
  removeArrayPending(li.id);
  removeArrayFinished(li.id);
}

function addToPending(toDoObj) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const checkBtn = document.createElement("button");
  span.innerText = toDoObj.text;
  delBtn.innerText = "❌";
  checkBtn.innerText = "✅";
  li.id = toDoObj.id;
  li.append(span, delBtn, checkBtn);
  toDoPendingUl.appendChild(li);

  addArrayPending(toDoObj);

  checkBtn.addEventListener("click", handleCheckBtn);
  delBtn.addEventListener("click", deleteTodo);
}

function handleSubmit(e) {
  e.preventDefault();
  const currentValue = toDoInput.value;
  if (currentValue === "") {
    return;
  }
  toDoInput.value = "";
  const toDoObj = makeToDoItem(currentValue);
  addToPending(toDoObj);
}

function init() {
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
