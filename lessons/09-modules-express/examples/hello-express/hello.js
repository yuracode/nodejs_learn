const express = require("express");

const app = express();
const port = 3000;

// GET / へのリクエストが来たら、この関数を呼び出してもらう
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// 3000番で待ち始める
app.listen(port, () => {
  console.log(`http://localhost:${port} で待っています`);
});
