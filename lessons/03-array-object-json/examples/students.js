const students = [
  { name: "佐藤", score: 70 },
  { name: "鈴木", score: 85 },
  { name: "高橋", score: 55 },
];

console.log(students.length);
console.log(students[1].name);

// 一覧表示
for (const student of students) {
  console.log(`${student.name}さん：${student.score}点`);
}

// 合計と平均
let total = 0;
for (const student of students) {
  total = total + student.score;
}
console.log(`合計は${total}点、平均は${total / students.length}点`);
