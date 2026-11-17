// 問1：次の3つの関数を、アロー関数に書き換えよう（実行結果は変えないこと）
function square(n) {
  return n * n;
}

function greet(name) {
  return `こんにちは、${name}さん`;
}

function isAdult(age) {
  return age >= 18;
}

console.log(square(4));
console.log(greet("佐藤"));
console.log(isAdult(20));
