const FoodList = ({ foodList }) => {
  const foodBody = foodList.map((food) => {
    return (
      <tr>
        <td>{food.f_name}</td>
        <td>{food.f_eat}</td>
        <td>{food.f_cal}</td>
      </tr>
    );
  });

  return (
    <table className="w3-table w3-table-all">
      <tbody>{foodBody}</tbody>
    </table>
  );
};

export default FoodList;
