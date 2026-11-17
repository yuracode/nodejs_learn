const students = [
  { name: "佐藤", score: 70 },
  { name: "鈴木", score: 85 },
  { name: "高橋", score: 55 },
];

// map：1つずつ変換して、新しい配列を作る
const names = students.map((student) => student.name);
console.log(names);

// filter：条件に合うものだけの、新しい配列を作る
const passed = students.filter((student) => student.score >= 60);
console.log(passed);

// find：条件に合う最初の1つを取り出す
const found = students.find((student) => student.name === "鈴木");
console.log(found);
