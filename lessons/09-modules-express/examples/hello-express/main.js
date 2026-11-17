// greeting.js を読み込む（.js は省略できる）
const greeting = require("./greeting");

console.log(greeting.hello("佐藤"));
console.log(greeting.goodbye("佐藤"));

// 分割代入で、必要な関数だけ取り出すこともできる
const { hello } = require("./greeting");
console.log(hello("鈴木"));
