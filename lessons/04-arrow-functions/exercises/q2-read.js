// 問2：省略して書かれたアロー関数を、省略しない形に直そう（実行結果は変えないこと）
const half = n => n / 2;
const area = (w, h) => w * h;
const isEven = n => n % 2 === 0;
const makePoint = (x, y) => ({ x: x, y: y });

console.log(half(10));
console.log(area(3, 4));
console.log(isEven(7));
console.log(makePoint(1, 2));
