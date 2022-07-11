const username = "junyeong";
const password = "qwer1234!";
const mongoURL = `mongodb+srv://${username}:${password}@cluster0.22yfh.mongodb.net/?retryWrites=true&w=majority`;

/*
mongoose 도구를 사용하여
NoSQL 인 mongoDB 에 DBMS Schema 방식으로 접근하기
*/
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const food = Schema({
  f_name: String,
  f_eat: String,
  f_cal: String,
});

const food_model = mongoose.model("food", food);
export { mongoURL, food_model };
