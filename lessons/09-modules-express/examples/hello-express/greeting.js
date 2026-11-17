// あいさつの文を作る関数
const hello = (name) => {
  return `こんにちは、${name}さん`;
};

const goodbye = (name) => {
  return `さようなら、${name}さん`;
};

// ほかのファイルから使えるようにする
module.exports = { hello, goodbye };
