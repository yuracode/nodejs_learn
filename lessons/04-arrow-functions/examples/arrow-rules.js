// 引数が0個：( ) は省けない
const hello = () => "こんにちは";

// 引数が2個以上：( ) は省けない
const add = (a, b) => a + b;

// 処理が2行以上：{ } と return が必要
const getResult = (score) => {
  if (score >= 60) {
    return "合格";
  }
  return "不合格";
};

// オブジェクトを返す：全体を ( ) で囲む
const makeStudent = (name, score) => ({ name: name, score: score });

console.log(hello());
console.log(add(3, 5));
console.log(getResult(75));
console.log(makeStudent("佐藤", 70));
