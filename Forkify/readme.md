## API

- [https://forkify-api.herokuapp.com/v2](https://forkify-api.herokuapp.com/v2)

## Start

```
$ npm start
```

## Install

```bash
# polyfill
$ npm i parcel
$ npm i core-js regenerator-runtime

# 바벨 (private method)
$ npm i @babel/plugin-proposal-class-properties @babel/plugin-proposal-private-methods

# 분수로 변환
$ npm install fractional
```

#### MVC Architecture

- Model : Business logic, state, http library (api, backend..)
- Controller : Application logic (Bridge between model and views)
- View : Presentation logic

## Error

- 에러: `Uncaught SyntaxError: Identifier '#undefined' has already been declared.`
  - 클래스문법의 **# (private method)** 을 사용하면, 바벨이 `#undefined` 로 변환함
- 해결

```bash
npm i @babel/plugin-proposal-class-properties @babel/plugin-proposal-private-methods
```

```bash
# .babelrc
{
  "plugins": [
    "@babel/plugin-syntax-class-properties",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-private-methods"
  ]
}
```
