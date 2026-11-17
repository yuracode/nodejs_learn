const fs = require("fs"); // ファイルを扱うための決まり文句（くわしくは第9回）

const text = fs.readFileSync("students.json", "utf8"); // ファイルの中身を文字列として読む
const students = JSON.parse(text); // 文字列をオブジェクトの配列に直す

console.log(`${students.length}人のデータを読み込みました`);
for (const student of students) {
  console.log(`${student.name}さん：${student.score}点`);
}
