const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = document.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

let toDos = [];
const TODOS_LOCALSTORAGE = "toDos";

function loadToDos() {
  const beforeToDos = localStorage.getItem(TODOS_LOCALSTORAGE);
  if (beforeToDos !== null) {
    const changeParse = JSON.parse(beforeToDos);
    // console.log(changeParse);

    changeParse.forEach((toDo) => {
      //   return console.log(toDo);
      enrollToDo(toDo.title);
    });
  }
}

function saveToDos() {
  localStorage.setItem(TODOS_LOCALSTORAGE, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const btn = event.target;
  // console.log(btn) // <button>삭제</button>
  const removeButtonLi = btn.parentNode;
  // console.log(removeButtonLi); // li 전체
  toDoList.removeChild(removeButtonLi);
  const cleanToDo = toDos.filter((toDo) => {
    return toDo.id !== parseInt(removeButtonLi.id);
  });
  //   console.log(cleanToDo); // 삭제된거 빼고 출력됨
  toDos = cleanToDo; // 그걸 toDos에 갱신
  saveToDos(); // 로컬스토리지
}

function enrollToDo(userText) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const textSpace = document.createElement("span");
  delBtn.innerText = "삭제";
  textSpace.innerText = userText;
  delBtn.addEventListener("click", deleteToDo);
  li.appendChild(delBtn);
  li.appendChild(textSpace);
  toDoList.appendChild(li);
  const newId = toDos.length + 1;
  li.id = newId;
  toDos.push({
    title: userText,
    id: newId,
  });
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  toDoInput.value = "";
  if (currentValue === "") {
    return;
  } else {
    enrollToDo(currentValue);
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
