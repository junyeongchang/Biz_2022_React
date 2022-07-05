/*
    fetch 함수를 사용하여 data.go.kr의 API 연결하기
*/

const apiURL = "/get/1360000/WthrWrnInfoService/getWthrWrnList";
const apiServiceKey =
  "7vTJSxENimlthL0DD3IxTTH4g5ZZ7uHUa%2FOiBv3qkbdVs0L6vWOXcR%2BUa7hiMxhQ0oSXLN55COOP%2FcL3gtoKrw%3D%3D";
const fetchData = async () => {
  const serviceURL = `${apiURL}?serviceKey=${apiServiceKey}&dataType=JSON&pageNo=1&numOfRows=100`;
  console.log(serviceURL);
  const response = await fetch(serviceURL);
  const json = await response.json();
  return json;
};
export { fetchData };
