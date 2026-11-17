// コンソールで、一覧・登録・更新・削除を順に試す
const pool = require("./db");
const { listPosts, addPost, updatePost, deletePost } = require("./crud");

async function main() {
  console.log("--- 最初の一覧 ---");
  console.table(await listPosts());

  const added = await addPost("田中", "よろしくお願いします");
  console.log(`--- 登録しました（id=${added.id}）---`);

  const updated = await updatePost(added.id, "よろしくお願いします（直しました）");
  console.log(`--- 更新しました：${updated.message} ---`);

  const count = await deletePost(added.id);
  console.log(`--- 削除した件数：${count} ---`);

  console.log("--- 最後の一覧 ---");
  console.table(await listPosts());

  await pool.end();
}

main().catch((error) => {
  console.error("エラー：", error.message);
  pool.end();
});
