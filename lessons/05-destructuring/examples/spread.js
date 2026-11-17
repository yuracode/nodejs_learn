const fruits = ["りんご", "みかん"];

// 配列の中身を広げて、新しい配列を作る
const more = [...fruits, "ぶどう"];
console.log(more);
console.log(fruits); // もとの配列は変わらない

const student = { name: "佐藤", score: 70 };

// オブジェクトの中身を広げて、一部を上書きした新しいオブジェクトを作る
const updated = { ...student, score: 85 };
console.log(updated);
console.log(student); // もとのオブジェクトは変わらない

// 変数名と項目名が同じなら、まとめて書ける
const name = "鈴木";
const score = 90;
const another = { name, score }; // { name: name, score: score } と同じ
console.log(another);
