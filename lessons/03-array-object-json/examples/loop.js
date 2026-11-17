const scores = [70, 85, 60];

// for で番号を使って取り出す
for (let i = 0; i < scores.length; i++) {
  console.log(`${i}番は${scores[i]}点`);
}

// for...of で1つずつ取り出す
let total = 0;
for (const score of scores) {
  total = total + score;
}
console.log(`合計は${total}点`);
