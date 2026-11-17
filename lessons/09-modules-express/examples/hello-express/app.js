const express = require("express");

const app = express();
const port = 3000;

// トップページ
app.get("/", (req, res) => {
  res.send("<h1>はじめてのExpress</h1>");
});

// /hello
app.get("/hello", (req, res) => {
  res.send("こんにちは");
});

// /users/1 や /users/25 のように、パスの一部を受け取る
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  res.send(`ユーザー番号は ${id} です`);
});

// /search?q=express のように、? の後ろの値を受け取る
app.get("/search", (req, res) => {
  const q = req.query.q;
  res.send(`「${q}」を検索しました`);
});

app.listen(port, () => {
  console.log(`http://localhost:${port} で待っています`);
});
