// API（JSON）のルート。app.js で /api/posts の下に付けている
const express = require("express");
const { listPosts, findPost, addPost } = require("../posts");

const router = express.Router();

// GET /api/posts：一覧
router.get("/", async (req, res) => {
  res.json(await listPosts());
});

// GET /api/posts/:id：1件。見つからなければ 404
router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const post = Number.isInteger(id) ? await findPost(id) : undefined;

  if (post === undefined) {
    res.status(404).json({ error: "その投稿は見つかりません" });
    return;
  }
  res.json(post);
});

// POST /api/posts：投稿。成功したら 201 と、作った投稿を返す
router.post("/", async (req, res) => {
  const body = req.body ?? {};
  const name = (body.name ?? "").trim();
  const message = (body.message ?? "").trim();

  if (name === "" || message === "") {
    res.status(400).json({ error: "名前と本文を入力してください" });
    return;
  }

  const post = await addPost(name, message);
  res.status(201).json(post);
});

module.exports = router;
