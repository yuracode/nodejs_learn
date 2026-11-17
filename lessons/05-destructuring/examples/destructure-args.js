const student = { name: "佐藤", score: 70 };

// これまでの書き方：オブジェクトを受け取って、中で取り出す
const show1 = (s) => {
  console.log(`${s.name}さん：${s.score}点`);
};

// 引数のところで分割代入する
const show2 = ({ name, score }) => {
  console.log(`${name}さん：${score}点`);
};

show1(student);
show2(student);

// forEach や map に渡す関数でも使える
const students = [
  { name: "鈴木", score: 85 },
  { name: "高橋", score: 55 },
];
students.forEach(({ name, score }) => {
  console.log(`${name}さん：${score}点`);
});
