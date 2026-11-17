// 表示するだけの関数（戻り値がない）
function showDouble(n) {
  console.log(n * 2);
}

// 値を返す関数（戻り値がある）
function getDouble(n) {
  return n * 2;
}

const a = showDouble(5);
const b = getDouble(5);

console.log(a);
console.log(b);
console.log(b + 1);
