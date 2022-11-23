const express = require("express");
const app = express();

app.use(express.json()); // middleware

const courses = [
  { id: 1, name: "API", type: "backend" },
  { id: 2, name: "JS", type: "backend" },
];

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.get("/data", (req, res) => {
  res.send(courses);
});

app.post("/post_data", (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name,
    type: req.body.type,
  };
  courses.push(course);
  // 그냥 "Data is stored!" response로 나오는것이 아니라
  // 어떤 데이터가 들어갔는지를 response로 표출시키기
  res.send("Data is stored!");
  // res.send(
  //   `Data is stored! - {"name":"${req.body.name}", "type":"${req.body.type}",}`
  // );
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
