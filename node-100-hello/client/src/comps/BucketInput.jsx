import { useState, useEffect } from "react";
import BucketList from "./BucketList";

const BucketInput = () => {
  const [bucketList, setBucketList] = useState([]);

  const fetchBuckeList = async () => {
    const response = await fetch("http://localhost:3000/bucket/list");
    const jsonBuck = await response.json();
    setBucketList(jsonBuck);
  };
  useEffect(() => {
    fetchBuckeList();
  }, []);

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      console.log(e.target.value);
      const bucket = {
        b_bucket: e.target.value,
        b_flag: 0,
        b_sdate: "2022-07-06 13:20:00",
        b_cancel: false,
      };

      // fetch 를 사용하여 POST 로 서버로 데이터보내기 위한 설정
      const postData = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bucket),
      };
      fetch("http://localhost:3000/bucket", postData)
        .then((res) => res.text())
        .then((result) => {
          fetchBuckeList();
        });
    }
  };

  return (
    <>
      <BucketList bucketList={bucketList} />
      <input onKeyDown={onKeyDown} placeholder="BUCKET" className="w3-input" />
    </>
  );
};

export default BucketInput;
