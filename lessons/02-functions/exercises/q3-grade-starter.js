// 問3のひな形：第1回の問2（点数から評価を求める）のプログラム
// これを関数 getGrade(score) に作り直そう
const score = 75;
let grade;

if (score >= 80) {
  grade = "A";
} else if (score >= 70) {
  grade = "B";
} else if (score >= 60) {
  grade = "C";
} else {
  grade = "D";
}

console.log(`${score}点の評価は${grade}です`);
