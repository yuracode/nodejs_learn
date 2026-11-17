// 問1：実行する前に、A〜D が表示される順番を予想しよう
console.log("A");

setTimeout(() => {
  console.log("B");
}, 2000);

setTimeout(() => {
  console.log("C");
}, 1000);

console.log("D");
