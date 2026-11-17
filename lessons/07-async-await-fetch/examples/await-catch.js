// 0.5秒後に点数を届ける。100点より大きければ失敗にする（前回と同じ関数）
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

async function main() {
  try {
    const score1 = await getScore(80);
    console.log(`成功：${score1}点`);

    const score2 = await getScore(150);
    console.log(`成功：${score2}点`);
  } catch (error) {
    console.log(`失敗：${error.message}`);
  }

  console.log("終わり");
}

main();
