import { useState } from "react";
import DietContext from "../context/DietContext";

const DietList = () => {
  return (
    <table className="w3-table w3-table-all">
      <thead>
        <tr>
          <th>날짜</th>
          <th>식품명</th>
          <th>섭취량</th>
          <th>칼로리</th>
        </tr>
      </thead>
    </table>
  );
};

export default DietList;
/*
식품명 표시된 곳을 click 했을때 input box 가 나타나도록 하려고 한다.
1. DietList 에서 isEdit state 변수를 만들고  item 을 생성하면서
isEdit 변수의 상태에 따라 input box 또는 그냥 문자열이 나타 나도록
하였다.
==> 모든 item 이 isEdit 상태를 공유하게 되어 한개의 항목을 클릭하면
모든 항목에 input box가 나타났다.

2. DietItem 을 별도로 분리하고  dietItem 에서 isEdit 상태변수를 생성한 후 같
*/
