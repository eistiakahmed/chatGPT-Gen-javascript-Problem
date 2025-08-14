function reverseString(str) {
  let reverse = "";
  if (typeof str !== "string") {
    return "Invalid";
  }
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== " ") {
      reverse += str[i].toUpperCase();
    }
  }
  return reverse;
}
console.log(reverseString(12333334));
