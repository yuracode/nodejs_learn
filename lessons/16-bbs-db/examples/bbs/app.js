const express = require("express");
const pagesRouter = require("./routes/pages");
const apiRouter = require("./routes/api");

const app = express();
const port = 3000;

app.set("view engine", "ejs");

// public フォルダの中のファイル（CSSや、ブラウザのJavaScript）を、そのままURLで配る
app.use(express.static("public"));
// フォームの値（urlencoded）と、JSON の値の両方を受け取れるようにする
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// API（JSON）は /api/posts の下にまとめる
app.use("/api/posts", apiRouter);
// 画面（HTML）は、ほかのすべて
app.use("/", pagesRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port} で待っています`);
});
