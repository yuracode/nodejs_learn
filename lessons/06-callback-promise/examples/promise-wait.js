// ms ミリ秒たったら「成功」になる Promise を返す関数
const wait = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

console.log("始め");

wait(1000).then(() => {
  console.log("1秒たった");
});

console.log("終わり");
