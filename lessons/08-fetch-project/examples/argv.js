// node argv.js 佐藤 のように実行する
const name = process.argv[2];

if (name === undefined) {
  console.log("使い方：node argv.js 名前");
} else {
  console.log(`こんにちは、${name}さん`);
}
