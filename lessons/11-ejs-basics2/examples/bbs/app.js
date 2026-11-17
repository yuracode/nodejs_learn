const express = require("express");

const app = express();
const port = 3000;

app.set("view engine", "ejs");

// 投稿は、まだ固定のデータ（配列に3件入れておく。第13回から、フォームで増やせるようにする）
const posts = [
  { id: 1, name: "佐藤", message: "こんにちは。はじめての投稿です", created_at: "2026/11/15 10:30:00" },
  { id: 2, name: "鈴木", message: "今日は暑いですね", created_at: "2026/11/15 11:05:00" },
  { id: 3, name: "高橋", message: "EJSの授業がおもしろい", created_at: "2026/11/15 13:20:00" },
];

// トップページは、投稿の一覧に移動させる
app.get("/", (req, res) => {
  res.redirect("/posts");
});

app.get("/posts", (req, res) => {
  res.render("posts", { title: "超簡単掲示板", posts });
});

app.listen(port, () => {
  console.log(`http://localhost:${port} で待っています`);
});
