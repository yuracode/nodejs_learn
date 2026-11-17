function getGrade(score) {
  if (score >= 80) {
    return "A";
  } else if (score >= 70) {
    return "B";
  } else if (score >= 60) {
    return "C";
  } else {
    return "D";
  }
}

const grade = getGrade(75);
console.log(`75点の評価は${grade}です`);

console.log(`90点の評価は${getGrade(90)}です`);
console.log(`55点の評価は${getGrade(55)}です`);
