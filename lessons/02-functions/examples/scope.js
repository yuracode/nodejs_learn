const taxRate = 10; // 関数の外で作った変数（消費税率 %）

function getPrice(price) {
  const total = price + (price * taxRate) / 100; // 関数の中で作った変数
  return total;
}

console.log(getPrice(1000));
console.log(taxRate);

// console.log(total); // 関数の中の変数は外から使えない（先頭の // を消して試してみよう）
