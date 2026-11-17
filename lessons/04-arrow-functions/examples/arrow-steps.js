// (1) 関数式
const double1 = function (n) {
  return n * 2;
};

// (2) function を消して、( ) の後ろに => を付ける
const double2 = (n) => {
  return n * 2;
};

// (3) 中身が return だけなら、{ } と return を省ける
const double3 = (n) => n * 2;

// (4) 引数が1つなら、( ) も省ける
const double4 = n => n * 2;

console.log(double1(5));
console.log(double2(5));
console.log(double3(5));
console.log(double4(5));
