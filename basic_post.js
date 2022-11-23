const express = require("express");
const app = express();

app.use(express.json()); // middleware

// 직접 MySQL DB에 연결하여 데이터를 넣고 빼기 전 연습을 위해
// 서버에 아래와 같이 모의로 courses라는 DB를 만듬. 
const courses = [
  { id: 1, name: "API", type: "backend" },
  { id: 2, name: "JS", type: "backend" },
];

app.get("/", (req, res) => {
  res.send("hello world!");
});

// 위의 DB를 "http://127.0.0.1:3000/data" 에서 확인할 수 있음.
app.get("/data", (req, res) => {
  res.send(courses);
});

// 아래의 코드를 통해 DB에 데이터를 입력(POST)
app.post("/post_data", (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name,
    type: req.body.type,
  };
  courses.push(course);
  res.send("Data is stored!");
  // 그냥 "Data is stored!" response로 나오는것이 아니라
  // 어떤 데이터가 들어갔는지를 response로 표출시키기
  // res.send(
  //   `Data is stored! - {"name":"${req.body.name}", "type":"${req.body.type}",}`
  // );
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
