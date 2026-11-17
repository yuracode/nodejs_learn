const a = 10; // 数値
const b = "10"; // 文字列

console.log(a === b); // 型も値も同じか
console.log(a == b); // 型をそろえてから比べる（思わぬ結果になりやすい）

console.log(a === 10);
console.log(a !== 10); // !== は「等しくない」
