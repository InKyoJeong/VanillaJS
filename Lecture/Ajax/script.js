// AJAX (Asynchronous Javascript And Xml)

// 서버와 비동기적으로 통신할 수 있게한다.
// 페이지 리로드 없이 페이지의 일부만을 위한 데이터를 로드할 수 있다.

"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// old school way of doing AJAX in JavaScript
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText); // array[0] 과 같음
    console.log(data);

    const html = `
  <article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)}</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;

    countriesContainer.insertAdjacentHTML("beforebegin", html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData("portugal");
getCountryData("usa");

// 두개의 ajax콜이 실행되는것. 리로드하면 순서가 달라지는데, 데이터가 로드할때마다 다르게 도착하기때문.
// 논블로킹 액션
// 포르투갈 데이터가 도착하기 전에 다른 ajax콜(미국)이 즉시 시작됨
// 순서대로 하려면 요청을 chain 해야함 (첫번째 요청이 끝나고 두번째요청이 가능하게)
