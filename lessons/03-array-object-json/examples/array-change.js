const fruits = ["りんご", "みかん", "ぶどう"];

fruits.push("もも"); // 最後に追加する
console.log(fruits);

fruits[1] = "バナナ"; // 1番の中身を入れ替える
console.log(fruits);

fruits.pop(); // 最後の1つを取り除く
console.log(fruits);
console.log(fruits.length);
