## 구현할 기능 목록

#### 📌 초기 설정

- [x] 요구사항에 따른 태그 id값을 부여하기
- [x] 시도횟수 입력창을 숨기기

#### 📌 자동차 이름 입력

- [x] 자동자 이름을 콤마로 구분하여 입력받기
- [x] 입력시 올바른 값인지 검사하기
  - [x] 각 자동차 이름이 5자를 초과했는지 검사하기
  - [x] 빈값을 입력했는지 체크하기
  - [x] 중복된 이름이 있는지 체크하기
- [x] 이름을 잘못 입력하면 alert경고창을 표시하기
- [x] 이름을 잘못 입력하면 인풋창을 초기화하기
- [ ] Car 객체를 생성하기
- [ ] 입력한 이름에 맞게 new를 이용하여 인스턴스를 만들기

#### 📌 시도횟수 입력

- [ ] 이름을 입력하면 시도횟수 입력창을 보여주기
- [ ] 시도횟수 입력시 값 검증하기
  - [ ] 1번 이상으로 입력했는지 체크하기
- [ ] 횟수를 잘못 입력하면 alert경고창을 표시하기
- [ ] 횟수를 잘못 입력하면 인풋창을 초기화하기

#### 📌 자동차 전진

- [ ] 자동차 클래스에 조건에 따라 전진하는 기능 추가하기
- [ ] 시도횟수에 맞게 자동차를 전진시키기

#### 📌 결과 출력

- [ ] 횟수가 모두 끝나면 전진한 결과를 출력하기
- [ ] 최고로 많이 전진한 자동차를 판별하기
- [ ] 판별한 결과에 따라 우승자를 출력하기

## 폴더 구조

```
src
├── js
│ ├── classes
│ │   └── Car.js
│ ├── components
│ │   ├── App.js
│ │   ├── CountInput.js
│ │   ├── NameInput.js
│ │   └── Result.js
│ ├── constants
│ ├── utils
│ └── index.js
└── index.html
```