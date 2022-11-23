// express 패키지 node_modules 폴더로부터 가져오기
const express = require("express");
// express를 실행 코드를 app 이라는 변수에 할당
const app = express();

// 첫번째 GET API 
// http://127.0.0.1:PORTNUMBER 에 "hello world!" 표출
app.get("/", (req, res) => {
  res.send("hello world!");
});

// 두번째 GET API
// http://127.0.0.1:PORTNUMBER/room1 에 "This is room number 1" 표출
app.get("/room1", (req, res) => {
  res.send("This is room number 1");
});

// 세번째 GET API
// http://127.0.0.1:PORTNUMBER/room2 에 "This is room number 2" 표출
app.get("/room2", (req, res) => {
  res.send("This is room number 2");
});


const PORT = 3000;


// 아래 코드를 통해 서버를 구동시킨다.
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
