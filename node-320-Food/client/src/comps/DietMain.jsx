import { useState, useEffect, useContext } from "react";
import DietInput from "./DietInput";
import DietList from "./DietList";
import DietContext from "../context/DietContext";

const DietMain = () => {
  return (
    <>
      {/*
      DietContext.jsx 파일에 Context 를 하나 생성해 두고
      Context 의 Provider 에게 params에 담긴 변수와 
      함수들을 저장해 놓기(Store)

      각각 개별 Component 에 전달했던 params을 제거
    */}
      <DietContext.Provider value={params}>
        <DietList />
        <DietInput />
      </DietContext.Provider>
    </>
  );
};

// 다른 컴포넌트에서 import 하기 위하여
// 함수를 export 해주기
export default DietMain;
