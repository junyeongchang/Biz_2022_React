import { useState, useEffect } from "react";
import FoodList from "./FoodList";
const FoodInput = () => {
  const [foodList, setFoodList] = useState([]);

  const fetchFoodList = async () => {
    const response = await fetch("http://localhost:3000/food/list");
    const jsonBuck = await response.json();
    setFoodList(jsonBuck);
  };
  useEffect(() => {
    fetchFoodList();
  }, []);

  const onClick = () => {
    const f_name = document.querySelector("input[name='f_name']");
    const f_eat = document.querySelector("input[name='f_eat']");
    const f_cal = document.querySelector("input[name='f_cal']");

    const f_data = {
      f_name: f_name.value,
      f_eat: f_eat.value,
      f_cal: f_cal.value,
    };

    const postOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(f_data),
    };

    fetch("http://localhost:3000/food", postOption)
      .then((res) => res.text())
      .then((result) => {
        fetchFoodList();
      });
  };

  return (
    <>
      <input placeholder="식품명" name="f_name" />
      <input placeholder="섭취량" name="f_eat" />
      <input placeholder="칼로리" name="f_cal" />
      <button type="button" onClick={onClick}>
        전송하기
      </button>
      <FoodList foodList={foodList} />
    </>
  );
};

export default FoodInput;
