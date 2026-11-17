const student = { name: "佐藤", score: 70 };

// オブジェクト → JSON（文字列）
const text = JSON.stringify(student);
console.log(text);
console.log(typeof text);

// JSON（文字列） → オブジェクト
const data = JSON.parse(text);
console.log(data.name);
console.log(typeof data);
