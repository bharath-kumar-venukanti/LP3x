let score = 85;
let grade;

switch (true) {
  case score >= 90:
    grade = "A";
    break;
  case score >= 80 && score<=89:
    grade = "B";
    break;
  case score >= 70 && score<=79:
    grade = "C";
    break;
  case score >= 35 && score<=99:
    grade = "D";
    break;
  default:
    grade = "F";
}

console.log(`Score: ${score}, Grade: ${grade}`); 