// /api/posts から投稿の一覧を取得して、画面に表示する
async function showPosts() {
  // 1. APIに問い合わせる
  const response = await fetch("/api/posts");
  // 2. 返ってきたJSONを、JavaScriptの配列にする
  const posts = await response.json();

  const list = document.querySelector("#api-list");
  posts.forEach((post) => {
    // 3. 1件ずつ、<li>を作って画面に追加する（文字はtextContentで入れる）
    const item = document.createElement("li");
    item.textContent = `${post.name}：${post.message}`;
    list.appendChild(item);
  });
}

showPosts();
