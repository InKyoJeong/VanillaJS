const modal = document.getElementById("modal");
const modalShow = document.getElementById("show-modal");
const modalClose = document.getElementById("close-modal");
const bookmarkForm = document.getElementById("bookmark-form");
const websiteNameEl = document.getElementById("website-name");
const websiteUrlEl = document.getElementById("website-url");
const bookmarksContainer = document.getElementById("bookmarks-container");

function showModal() {
  modal.classList.add("show-modal");
  websiteNameEl.focus();
}

function closeModal() {
  modal.classList.remove("show-modal");
}

// Modal Event listener
modalShow.addEventListener("click", showModal);
modalClose.addEventListener("click", closeModal);
window.addEventListener("click", (e) =>
  e.target === modal ? closeModal() : false
);

// Validate Form
function validate(nameValue, urlValue) {
  const expression =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
  const regex = new RegExp(expression);
  if (!nameValue || !urlValue || nameValue.trim() === "") {
    alert("빈칸을 채워주세요.");
    return false;
  }
  if (!urlValue.match(regex)) {
    alert("올바른 주소를 입력해주세요.");
    return false;
  }

  return true;
}

function storeBookmark(e) {
  e.preventDefault();
  const nameValue = websiteNameEl.value;
  let urlValue = websiteUrlEl.value;
  if (!urlValue.includes("http://", "https://")) {
    urlValue = `https://${urlValue}`;
  }
  if (!validate(nameValue, urlValue)) {
    return false;
  }
  console.log(nameValue, urlValue);
}

// Event listener
bookmarkForm.addEventListener("submit", storeBookmark);
