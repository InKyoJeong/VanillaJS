const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = document.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LOCALSTORAGE = "toDos";

let toDos = [];

const loadToDos = () => {
  const beforeToDos = localStorage.getItem(TODOS_LOCALSTORAGE);
  if (beforeToDos !== null) {
    const changeParse = JSON.parse(beforeToDos);
    changeParse.forEach((toDo) => enrollToDo(toDo.title));
  }
};

const saveToDos = () => {
  localStorage.setItem(TODOS_LOCALSTORAGE, JSON.stringify(toDos));
};

const deleteToDo = (event) => {
  const btn = event.target;
  // console.log(btn) // <button>삭제</button>
  const removeButtonLi = btn.parentNode;
  // console.log(removeButtonLi); // li 전체
  toDoList.removeChild(removeButtonLi);
  const cleanToDo = toDos.filter(
    (toDo) => toDo.id !== parseInt(removeButtonLi.id)
  );
  //   console.log(cleanToDo); // 삭제된거 빼고 출력됨
  toDos = cleanToDo; // 그걸 toDos에 갱신
  saveToDos(); // 로컬스토리지
};

const enrollToDo = (userText) => {
  const li = document.createElement("li"),
    textSpace = document.createElement("span"),
    delBtn = document.createElement("button");
  textSpace.innerText = userText;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  li.appendChild(textSpace);
  li.appendChild(delBtn);
  toDoList.appendChild(li);
  const newId = toDos.length + 1;
  li.id = newId;
  toDos.push({
    title: userText,
    id: newId,
  });
  saveToDos();
};

const handleSubmit = (event) => {
  event.preventDefault();
  const currentValue = toDoInput.value;
  toDoInput.value = "";
  if (currentValue === "") {
    return;
  } else {
    enrollToDo(currentValue);
  }
};

const init = () => {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
};

init();
