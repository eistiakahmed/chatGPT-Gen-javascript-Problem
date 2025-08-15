function isEven(number) {
  if (typeof number !== "number") {
    return "Invalid";
  }
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven("10"));

