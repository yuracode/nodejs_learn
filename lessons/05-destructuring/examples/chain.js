const students = [
  { name: "佐藤", score: 70 },
  { name: "鈴木", score: 85 },
  { name: "高橋", score: 55 },
  { name: "田中", score: 90 },
];

// 60点以上の人の名前を取り出す
const passedNames = students
  .filter(({ score }) => score >= 60)
  .map(({ name }) => name);
console.log(passedNames);

// 平均点を求める
const total = students.reduce((sum, { score }) => sum + score, 0);
console.log(`平均は${total / students.length}点`);
