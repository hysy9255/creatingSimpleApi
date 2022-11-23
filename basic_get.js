const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.get("/room1", (req, res) => {
  res.send("This is room number 1");
});

app.get("/room2", (req, res) => {
  res.send("This is room number 2");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
