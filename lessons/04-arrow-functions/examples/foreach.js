const scores = [70, 85, 60];

// for...of で書く（第3回）
for (const score of scores) {
  console.log(`${score}点`);
}

// forEach で書く：1つ分の処理を関数にして渡す
scores.forEach((score) => {
  console.log(`${score}点`);
});
