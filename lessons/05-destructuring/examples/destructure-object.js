const student = { name: "佐藤", score: 70, club: "テニス" };

// これまでの書き方
const name1 = student.name;
const score1 = student.score;
console.log(name1, score1);

// 分割代入：必要な項目を、同じ名前の変数に取り出す
const { name, score } = student;
console.log(name, score);
