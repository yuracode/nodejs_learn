// 0.5秒後に点数を届ける。100点より大きければ失敗にする
const getScore = (score) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (score <= 100) {
        resolve(score);
      } else {
        reject(new Error("点数が正しくありません"));
      }
    }, 500);
  });
};

getScore(80)
  .then((score) => {
    console.log(`成功：${score}点`);
  })
  .catch((error) => {
    console.log(`失敗：${error.message}`);
  });

getScore(150)
  .then((score) => {
    console.log(`成功：${score}点`);
  })
  .catch((error) => {
    console.log(`失敗：${error.message}`);
  });
