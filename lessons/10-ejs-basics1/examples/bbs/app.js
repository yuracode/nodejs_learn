const express = require("express");

const app = express();
const port = 3000;

// テンプレート（views フォルダの .ejs ファイル）を使う設定
app.set("view engine", "ejs");

// 投稿は、まだ固定のデータ（データベースも配列もこの回では使わない）
const post = {
  id: 1,
  name: "佐藤",
  message: "こんにちは。はじめての投稿です",
  created_at: "2026/11/15 10:30:00",
};

app.get("/", (req, res) => {
  // views/index.ejs を読み込み、2番目の引数の値をテンプレートに渡す
  res.render("index", { title: "超簡単掲示板", post });
});

app.listen(port, () => {
  console.log(`http://localhost:${port} で待っています`);
});
