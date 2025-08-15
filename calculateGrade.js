function calculateGrade(marks) {
  let sum = 0;
  let average = 0;
  if (!Array.isArray(marks)) {
    return "Invalid";
  }

  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  average = sum / marks.length;
  if (average >= 90) {
    return "A+";
  } else if (average >= 80) {
    return "A";
  } else if (average >= 70) {
    return "B";
  } else if (average >= 60) {
    return "C";
  } else {
    return "F";
  }
}

console.log(calculateGrade(100));
