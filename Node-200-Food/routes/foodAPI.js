import express from "express";
const router = express.Router();
import { food_model } from "../config/mongoConfig.js";

router.get("/", (req, res, next) => {
  const query = req.query.name;
  res.json({ name: query });
});

router.post("/", (req, res) => {
  const body = req.body;
  console.table(body);
  food_model.create(body).then(() => res.send("OK"));
});

router.get("/list", (req, res) => {
  food_model.find({}).then((result) => res.json(result));
});

export default router;
