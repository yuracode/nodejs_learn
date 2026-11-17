const express = require("express");

const app = express();
const port = 3000;

app.set("view engine", "ejs");

// public フォルダの中のファイル（CSSなど）を、そのままURLで配る
app.use(express.static("public"));

// フォームから送られた値（name=...&message=...）を、req.body で受け取れるようにする
app.use(express.urlencoded({ extended: false }));

// 投稿は、まだメモリの上の配列（サーバーを止めると消える。第15回・16回でデータベースに保存する）
const posts = [
  { id: 1, name: "佐藤", message: "こんにちは。はじめての投稿です", created_at: "2026/11/15 10:30:00" },
  { id: 2, name: "鈴木", message: "今日は暑いですね", created_at: "2026/11/15 11:05:00" },
  { id: 3, name: "高橋", message: "EJSの授業がおもしろい", created_at: "2026/11/15 13:20:00" },
];
let nextId = 4;

// トップページは、投稿の一覧に移動させる
app.get("/", (req, res) => {
  res.redirect("/posts");
});

// 一覧と投稿フォーム。エラーがあったときは、入力した値を残すために form を渡す
function showList(res, status, error, form) {
  res.status(status).render("posts", {
    title: "超簡単掲示板",
    posts,
    error,
    form,
  });
}

app.get("/posts", (req, res) => {
  showList(res, 200, null, { name: "", message: "" });
});

// 投稿を受け取る。成功したら一覧に移動する（PRG：投稿の後は移動させて、二重投稿を防ぐ）
app.post("/posts", (req, res) => {
  const body = req.body ?? {};
  const name = (body.name ?? "").trim();
  const message = (body.message ?? "").trim();
  const form = { name, message };

  // 入力チェック
  if (name === "" || message === "") {
    showList(res, 400, "名前と本文を入力してください", form);
    return;
  }
  if (name.length > 20) {
    showList(res, 400, "名前は20文字以内にしてください", form);
    return;
  }

  const now = new Date().toLocaleString("ja-JP");
  posts.push({ id: nextId, name, message, created_at: now });
  nextId += 1;

  res.redirect("/posts");
});

// 投稿の詳細ページ。/posts/2 のように、番号で1件の投稿を探す
app.get("/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find((p) => p.id === id);

  if (post === undefined) {
    res.status(404).send("その投稿は見つかりません");
    return;
  }

  res.render("post", { title: "投稿の詳細", post });
});

app.listen(port, () => {
  console.log(`http://localhost:${port} で待っています`);
});
