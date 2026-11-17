const express = require("express");

const app = express();
const port = 3000;

app.set("view engine", "ejs");

// public フォルダの中のファイル（CSSや、ブラウザで動くJavaScript）を、そのままURLで配る
app.use(express.static("public"));

// フォームの値（urlencoded）と、JSON の値の両方を受け取れるようにする
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 投稿は、まだメモリの上の配列（サーバーを止めると消える。第15回・16回でデータベースに保存する）
const posts = [
  { id: 1, name: "佐藤", message: "こんにちは。はじめての投稿です", created_at: "2026/11/15 10:30:00" },
  { id: 2, name: "鈴木", message: "今日は暑いですね", created_at: "2026/11/15 11:05:00" },
  { id: 3, name: "高橋", message: "EJSの授業がおもしろい", created_at: "2026/11/15 13:20:00" },
];
let nextId = 4;

// ---- 画面（HTML）----

app.get("/", (req, res) => {
  res.redirect("/posts");
});

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

app.post("/posts", (req, res) => {
  const body = req.body ?? {};
  const name = (body.name ?? "").trim();
  const message = (body.message ?? "").trim();
  const form = { name, message };

  if (name === "" || message === "") {
    showList(res, 400, "名前と本文を入力してください", form);
    return;
  }
  if (name.length > 20) {
    showList(res, 400, "名前は20文字以内にしてください", form);
    return;
  }

  posts.push({ id: nextId, name, message, created_at: new Date().toLocaleString("ja-JP") });
  nextId += 1;

  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find((p) => p.id === id);

  if (post === undefined) {
    res.status(404).send("その投稿は見つかりません");
    return;
  }

  res.render("post", { title: "投稿の詳細", post });
});

// APIを使うページ（一覧も投稿も、ブラウザのJavaScriptが /api/posts を呼んで行う）
app.get("/api-view", (req, res) => {
  res.render("api-view", { title: "APIを使った掲示板" });
});

// ---- API（JSON）----

// 一覧を取得する
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

// 1件を取得する。見つからなければ 404
app.get("/api/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find((p) => p.id === id);

  if (post === undefined) {
    res.status(404).json({ error: "その投稿は見つかりません" });
    return;
  }

  res.json(post);
});

// 投稿する。成功したら 201（作成された）と、作った投稿を返す
app.post("/api/posts", (req, res) => {
  const body = req.body ?? {};
  const name = (body.name ?? "").trim();
  const message = (body.message ?? "").trim();

  if (name === "" || message === "") {
    res.status(400).json({ error: "名前と本文を入力してください" });
    return;
  }

  const post = { id: nextId, name, message, created_at: new Date().toLocaleString("ja-JP") };
  posts.push(post);
  nextId += 1;

  res.status(201).json(post);
});

app.listen(port, () => {
  console.log(`http://localhost:${port} で待っています`);
});
