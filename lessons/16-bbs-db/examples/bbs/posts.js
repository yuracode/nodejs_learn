// 投稿を、データベース（posts テーブル）に出し入れする関数の集まり
// ルート（routes フォルダ）は、この関数を呼ぶだけで、SQL は書かない
const pool = require("./db");

// 日時（Date）を、画面に表示する文字に直す
function format(row) {
  return { ...row, created_at: row.created_at.toLocaleString("ja-JP") };
}

// 一覧（SELECT）
async function listPosts() {
  const result = await pool.query("SELECT id, name, message, created_at FROM posts ORDER BY id");
  return result.rows.map(format);
}

// 1件（SELECT ... WHERE id = $1）。見つからなければ undefined
async function findPost(id) {
  const result = await pool.query(
    "SELECT id, name, message, created_at FROM posts WHERE id = $1",
    [id]
  );
  return result.rows[0] === undefined ? undefined : format(result.rows[0]);
}

// 登録（INSERT）。登録した1件を返す
async function addPost(name, message) {
  const result = await pool.query(
    "INSERT INTO posts (name, message) VALUES ($1, $2) RETURNING id, name, message, created_at",
    [name, message]
  );
  return format(result.rows[0]);
}

module.exports = { listPosts, findPost, addPost };
