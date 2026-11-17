// 投稿の一覧・登録・更新・削除を、関数にまとめたもの
const pool = require("./db");

// 一覧（SELECT）
async function listPosts() {
  const result = await pool.query("SELECT id, name, message, created_at FROM posts ORDER BY id");
  return result.rows;
}

// 登録（INSERT）。$1、$2 に値を入れる（プレースホルダ）。RETURNING * で、入った行を返す
async function addPost(name, message) {
  const result = await pool.query(
    "INSERT INTO posts (name, message) VALUES ($1, $2) RETURNING *",
    [name, message]
  );
  return result.rows[0];
}

// 更新（UPDATE）。直した行を返す。見つからなければ undefined
async function updatePost(id, message) {
  const result = await pool.query(
    "UPDATE posts SET message = $2 WHERE id = $1 RETURNING *",
    [id, message]
  );
  return result.rows[0];
}

// 削除（DELETE）。消せた件数を返す
async function deletePost(id) {
  const result = await pool.query("DELETE FROM posts WHERE id = $1", [id]);
  return result.rowCount;
}

module.exports = { listPosts, addPost, updatePost, deletePost };
