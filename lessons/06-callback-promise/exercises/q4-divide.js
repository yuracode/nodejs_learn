// 問4：0.5秒後に a ÷ b の答えを届ける。b が 0 のときは失敗にする
const divide = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (b === 0) {
        reject(new Error("0では割れません"));
      } else {
        resolve(a / b);
      }
    }, 500);
  });
};

// ここから下に then と catch を付けよう
divide(10, 2);

divide(10, 0);
