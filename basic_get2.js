const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.get("/room1", (req, res) => {
  res.send("This is room number 1");
});


// http://127.0.0.1:3000/room2/12345 로 GET 요청 시 
// 브라우져에 "This is room number 2 - table number 12345" 로 표출
app.get("/room2/:id", (req, res) => {
  let id = req.params.id;
  res.send(`This is room number 2 - table number ${id}`);
  // req는 request (요청)
  // req.params.id 에서 req는 우리가 http://localhost:3000/room2/:id
  // 에서 GET 해달라고 요청한 것이기 때문에
  // 그 요청에서 id 라는 parameter를 가져오는 것
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
