const name = "佐藤";
const score = 85;

// + でつなげる書き方
console.log(name + "さんの点数は" + score + "点です");

// テンプレートリテラル（` で囲み、${ } の中に変数を書く）
console.log(`${name}さんの点数は${score}点です`);

// ${ } の中には計算も書ける
console.log(`あと${100 - score}点で満点です`);
