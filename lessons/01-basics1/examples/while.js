// 100を2で割り続けて、1より小さくなるまでの回数を数える
let value = 100;
let count = 0;

while (value >= 1) {
  value = value / 2;
  count++;
}

console.log(`${count}回割りました`);
