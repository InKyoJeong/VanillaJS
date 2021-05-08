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

function deleteTodo(e) {
  const li = e.target.parentNode;
  li.parentNode.removeChild(li);
  removeArrayPending(li.id);
  removeArrayFinished(li.id);
}

function makeSameBlock(toDoObj) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  span.innerText = toDoObj.text;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteTodo);
  li.id = toDoObj.id;
  li.append(span, delBtn);
  return li;
}

function addToFinished(toDoObj) {
  const sameLi = makeSameBlock(toDoObj);
  const backBtn = document.createElement("button");
  backBtn.innerText = "🔙";
  sameLi.append(backBtn);
  toDoFinishedUl.appendChild(sameLi);

  addArrayFinished(toDoObj);
  backBtn.addEventListener("click", handlebackBtn);
}

function addToPending(toDoObj) {
  const sameLi = makeSameBlock(toDoObj);
  const checkBtn = document.createElement("button");
  checkBtn.innerText = "✅";
  sameLi.append(checkBtn);
  toDoPendingUl.appendChild(sameLi);

  addArrayPending(toDoObj);
  checkBtn.addEventListener("click", handleCheckBtn);
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
