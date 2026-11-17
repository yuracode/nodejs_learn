// 画面（HTML）のルート
const express = require("express");
const { listPosts, findPost, addPost } = require("../posts");

const router = express.Router();

// 一覧を描く。エラーがあるときは、入力した値（form）を残す
async function showList(res, status, error, form) {
  const posts = await listPosts();
  res.status(status).render("posts", { title: "超簡単掲示板", posts, error, form });
}

router.get("/", (req, res) => {
  res.redirect("/posts");
});

router.get("/posts", async (req, res) => {
  await showList(res, 200, null, { name: "", message: "" });
});

router.post("/posts", async (req, res) => {
  const body = req.body ?? {};
  const name = (body.name ?? "").trim();
  const message = (body.message ?? "").trim();
  const form = { name, message };

  if (name === "" || message === "") {
    await showList(res, 400, "名前と本文を入力してください", form);
    return;
  }
  if (name.length > 20) {
    await showList(res, 400, "名前は20文字以内にしてください", form);
    return;
  }

  await addPost(name, message);
  res.redirect("/posts");
});

router.get("/posts/:id", async (req, res) => {
  const id = Number(req.params.id);
  // 数字でないIDは、データベースに送らず、404にする
  const post = Number.isInteger(id) ? await findPost(id) : undefined;

  if (post === undefined) {
    res.status(404).send("その投稿は見つかりません");
    return;
  }

  res.render("post", { title: "投稿の詳細", post });
});

router.get("/api-view", (req, res) => {
  res.render("api-view", { title: "APIで読み込んだ一覧" });
});

module.exports = router;
