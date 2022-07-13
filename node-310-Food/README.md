# 다이어트 도와줘

- 오늘 하루 섭취한 식품의 칼로리가 얼마인지 기록하여 다이어트를 하는데 도와주는 App
- NodeJS + Express + MongoDB + React 연동 프로젝트

## NodeJS backend Project 를 생성하기 위하여

- VSCode 열고 터미널 창 열기
- express-21c node-310-Food 프로젝트 생성
- 프로젝트 폴더에서 : npm install

## React Frontend Projcect 를 생성하기 위하여

- node-310-Food 폴더에서 React client 생성 : create-react-app client
- client 폴더에서 터미널 열기
- update 하기 : yarn
- bulid 생성하기 : yarn build
- node-310-Food/client/build 폴더 생성 확인하기

## nodeJS 에서 client 인식 시키기

- node-310-Food/app.js 파일 열기
- 변경 : app.use(express.static(path.join('./public'))); -> app.use(express.static(path.join('./client/build')));
- 변경 : app.use("/", indexRouter); -> // // app.use("/", indexRouter);
- node-310-Food 폴더에서 서버 Start : nodemon 실행
- 웹 브라우져 열어서 : http://localhost:3000/ 리액트 화면 나오는지 확인

## React 프로젝트 파일 이름 변경

- client/src 에서 App._ 으로 시작하는 파일을 모두 ReactJS._ 로 변경

- client/src 에서 index.js 열어서 :

1. 수정하기
2. reportWebVitals(); 주석 처리

## MongoDB 연동하기

- node 터미널 에서 : mongoose dependency 설치 -> npm install mongoose
- client 터미널에서 날짜와 시간 도구 설치 : yarn add moment
- client 터미널에서 UUID Key 생성 도구 설치 : yarn add react-uuid
