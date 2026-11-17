// schema.sql を読んで、posts テーブルを作る（何回実行しても、すでにあれば作らない）
const fs = require("fs");
const pool = require("./db");

async function main() {
  const sql = fs.readFileSync("schema.sql", "utf8");
  await pool.query(sql);
  console.log("posts テーブルを用意しました");
  await pool.end();
}

main().catch((error) => {
  console.error("エラー：", error.message);
  pool.end();
});
