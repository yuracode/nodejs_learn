// 問2：実行する前に、A〜D が表示される順番を予想しよう
const wait = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

console.log("A");

wait(1000).then(() => {
  console.log("B");
});

wait(0).then(() => {
  console.log("C");
});

console.log("D");
