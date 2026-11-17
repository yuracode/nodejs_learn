// /api/posts の投稿を、画面に表示する。フォームからの投稿も、APIで送る
const list = document.querySelector("#api-list");
const form = document.querySelector("#api-form");

// 投稿1件を、<li>にして一覧に追加する（文字はtextContentで入れる）
function addItem(post) {
  const item = document.createElement("li");
  item.textContent = `${post.name}：${post.message}`;
  list.appendChild(item);
}

// 一覧を取得して表示する
async function showPosts() {
  // 1. APIに問い合わせる
  const response = await fetch("/api/posts");
  // 2. 返ってきたJSONを、JavaScriptの配列にする
  const posts = await response.json();
  // 3. 1件ずつ、画面に追加する
  posts.forEach((post) => {
    addItem(post);
  });
}

// 「APIで投稿する」が押されたら、APIにPOSTで送る
form.addEventListener("submit", async (event) => {
  // 1. ブラウザがふつうに送信して、ページが移動するのを止める
  event.preventDefault();

  // 2. 入力された値を、JSONにして送る
  const name = document.querySelector("#api-name").value;
  const message = document.querySelector("#api-message").value;
  const response = await fetch("/api/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, message }),
  });

  // 3. 返ってきた投稿を、一覧に追加する
  const post = await response.json();
  addItem(post);
  form.reset();
});

showPosts();
