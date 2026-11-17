const scores = [70, 85, 55];

// for...of で合計を求める（第3回）
let total1 = 0;
for (const score of scores) {
  total1 = total1 + score;
}
console.log(total1);

// reduce で合計を求める
const total2 = scores.reduce((sum, score) => sum + score, 0);
console.log(total2);
