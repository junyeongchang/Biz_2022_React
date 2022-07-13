# 다이어트 도와줘

- 오늘 하루 섭취한 식품의 칼로리가 얼마인지 기록하여 다이어트를 하는데 도와주는 App
- NodeJS + Express + MySQL + React 연동 프로젝트

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

## MySQL 연동하기

- MySQL DB 와 연동하기 위해 Dependency 설치

```
npm install mysql2
npm install sequelize
npm install moment
```

-Sequelize 도구 설치 : 반드시 관리자 권한에서 global로 설치

```
npm install -g sequelize-cli
npm install -g sequelize-auto
npm install -g mysql2
```

-Sequelize 도구를 사용하여 mysql db 연동 정보 자동화 : 터미널

```
sequelize init
sequelize -auto -o "./models" -d mydb -h 127.0.0.1 -u callor -x '!Korea8080' -e mysql -l esm
```

- sequelize-auto 사용할때 끝에 `-l esm` 옵션을 생략하면 CommonsJS(ESS 이전)버전으로 모듈이 생성이 된다.
- 사용자의 password에 특수문자가 포함된 경우 반드시 작은따음표로 묶어 줄것
- 선택사항들

```
-o 폴더 : model 설정 파일이 출력될곳
-d db명 : 사용할 mysqlDB
-h host : MySQL 서버가 설치된 컴퓨터의 ip, localhost, 127.0.0.1
-u username : MySQL 접속할 권한이 있는 사용자
-x PASSWORD : MySQL 접속 사용자 비번
-e mysql : 사용할 데이터베이스 소프트웨어(engine)
-l ems : ES6+ 버전으로 생성하기
-l es5 : ESS 버전으로 생성하기
```
