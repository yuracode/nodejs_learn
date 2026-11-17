function hello() {
  console.log("こんにちは");
}

// 受け取った関数を3回呼び出す関数
function repeat3(fn) {
  fn();
  fn();
  fn();
}

repeat3(hello); // 関数そのものを渡す（( ) を付けない）

repeat3(() => console.log("やあ")); // その場で作ったアロー関数を渡す
