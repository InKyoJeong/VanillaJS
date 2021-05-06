const pendingListUl = document.getElementById("js-pending"),
  finishedListUl = document.getElementById("js-finished"),
  form = document.getElementById("js-form"),
  input = form.querySelector("input");

let pendingTasks = [];
let finishedTasks = [];

function getTaskObject(text) {
  return {
    id: String(Date.now()),
    text,
  };
}

function savePendingTask(task) {
  pendingTasks.push(task);
}

function deleteTask(e) {
  const li = e.target.parentNode;
  li.parentNode.removeChild(li);
}

function buildGenericLi(task) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");
  span.innerText = task.text;
  deleteBtn.innerText = "❌";
  deleteBtn.addEventListener("click", deleteTask);
  li.append(span, deleteBtn);
  li.id = task.id;
  return li;
}

function findInPending(taskId) {
  return pendingTasks.find(function (task) {
    return task.id === taskId;
  });
}

function removeFromFinished(taskId) {
  finishedTasks = finishedTasks.filter(function (task) {
    return task.id !== taskId;
  });
}

function findInFinished(taskId) {
  return finishedTasks.find(function (task) {
    return task.id === taskId;
  });
}

function handleBackClick(e) {
  const li = e.target.parentNode;
  li.parentNode.removeChild(li);
  const task = findInFinished(li.id);
  removeFromFinished(li.id);
  paintPendingTask(task);

  //   console.log(pendingTasks, finishedTasks);
}

function paintFinishedTask(task) {
  const genericLi = buildGenericLi(task);
  const backBtn = document.createElement("button");
  backBtn.innerText = "⏪";
  backBtn.addEventListener("click", handleBackClick);
  genericLi.append(backBtn);
  finishedListUl.append(genericLi);
}

function addToFinished(task) {
  finishedTasks.push(task);
}

function removeFromPending(taskId) {
  pendingTasks = pendingTasks.filter(function (task) {
    return task.id !== taskId;
  });
}

function handleFinishClick(e) {
  const li = e.target.parentNode;
  li.parentNode.removeChild(li);
  const task = findInPending(li.id);
  removeFromPending(li.id);
  addToFinished(task);
  paintFinishedTask(task);

  //   console.log(pendingTasks, finishedTasks);
}

function paintPendingTask(task) {
  const genericLi = buildGenericLi(task);
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "✅";
  completeBtn.addEventListener("click", handleFinishClick);
  genericLi.append(completeBtn);
  pendingListUl.append(genericLi);
}

function handleFormSubmit(e) {
  e.preventDefault();
  const taskObj = getTaskObject(input.value);
  input.value = "";
  paintPendingTask(taskObj);
  savePendingTask(taskObj);

  //   console.log(pendingTasks, finishedTasks);
}

function init() {
  form.addEventListener("submit", handleFormSubmit);
}

init();
