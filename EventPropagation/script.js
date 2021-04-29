// Event Propagation : Bubbling and Capturing

// 상위의 화면 요소란? HTML 요소는 기본적으로 트리 구조
// 트리 구조상으로 한 단계 위에 있는 요소 = 상위 요소,  body 태그 =최상위 요소

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
});

// this는 이벤트 핸들러가 연결된 요소를 가리킴 : document.querySelector(".nav__link")

// 랜덤 백그라운드 컬러가 적용됨
// parent 요소에 똑같이 적용하면 어떻게 될까.

//  nav__links (ul) 는  nav__link (a태그) 의 parent
document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
});

// nav__link 를 클릭해도 parent인 nav__links (ul) 도 적용되는것을 볼수있음
// 이벤트 버블링:  bubbling up means that basically it's as if the event had also happened in all of the parent elements.

document.querySelector(".nav").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
});

// nav 전체에 적용하고 nav__link 부분을 클릭해도 클릭이벤트가 세곳 모두 발생하는것을 볼수잇음

/////////////
// e.target
// target은 이벤트가 시작된 곳. 즉 이벤트가 처음 발생한 곳
document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("LINK", e.target);
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("UL", e.target);
});

document.querySelector(".nav").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("NAV", e.target);
});

// nav__link를 눌러보면 target element 가 클릭이 처음 발생한 곳으로 모두 같은것을 볼수잇음
// 이벤트 버블링덕분

//////////
// currentTarget
document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("LINK", e.target, e.currentTarget);
});
document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("UL", e.target, e.currentTarget);
});

document.querySelector(".nav").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("NAV", e.target, e.currentTarget);
});

// currentTarget은 모두 다른것을 볼 수잇음

// 이벤트핸들러에서 currentTarget은 this와 같다
console.log("LINK", e.target, e.currentTarget);
console.log(e.currentTarget === this);

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("LINK", e.target, e.currentTarget);
  console.log(e.currentTarget === this);
});
// LINK
// <a class="nav__link" href="#" style="background-color: rgb(182, 139, 210);">Features</a>
// <a class="nav__link" href="#" style="background-color: rgb(182, 139, 210);">Features</a>
// true

///////////
// stop the event propagation
// e.stopPropagation() 으로 이벤트 전파를 막을수있다.

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("LINK", e.target, e.currentTarget);
  console.log(e.currentTarget === this);
  e.stopPropagation();
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("UL", e.target);
});

document.querySelector(".nav").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("NAV", e.target);
});

// nav__link눌러도 이벤트가 나머지 두 상위요소 전파되지않는것을 볼수있다.

////////////////////////////////////////////////
// addEventListener 의 세번째 파라미터
// 디폴트 false

// true로 설정하면 이벤트 버블링과 반대 방향으로 탐색

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("LINK", e.target, e.currentTarget);
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("UL", e.target, e.currentTarget);
});

document.querySelector(".nav").addEventListener(
  "click",
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log("NAV", e.target, e.currentTarget);
  },
  true
);

////////////////////////////////////////////////////////////
// 이벤트 위임 - Event Delegation
// 앞에서 살펴본 이벤트 버블링과 캡쳐는 사실 이벤트 위임을 위한 선수 지식
// 이벤트 위임은 실제 바닐라 JS로 웹 앱을 구현할 때 자주 사용하게 되는 코딩 패턴

// 이벤트 위임을 한 문장으로 요약해보면
// ‘하위 요소에 각각 이벤트를 붙이지 않고 상위 요소에서 하위 요소의 이벤트들을 제어하는 방식’

// 이제 요소마다 이벤트를 달지 않아도 된다.

// page navigation
document.querySelectorAll(".nav__link").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// 여기서는 세개지만,리스트 아이템이 많아질수록 이벤트 리스너를 다는 작업 자체가 매우 번거로움
// 이 번거로운 작업을 해결할 수 있는 방법이 바로 이벤트 위임(Event Delegation)

// 상위 요소에 이벤트 리스너를 추가하고 하위에서 발생한 이벤트를 감지하기
// 1. add event listener to common parent element
// 2. Determine what element originated the event (Determine where the click event came from)
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  // console.log(e.target) 이렇게하고 li 사이를 눌르면 ul도 선택되므로
  // link가 아닌 click을 무시하기
  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});
