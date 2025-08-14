function isSumEqual(number1, number2) {
  if (!Array.isArray(number1) || !Array.isArray(number2)) {
    return "Invalid";
  }
  let sum1 = 0;
  let sum2 = 0;
  
  for(let num of number1){
    sum1+=num;
  }
  for(let num of number2){
    sum2+=num;
  }
  return sum1 === sum2;
}

console.log(isSumEqual([1,2,3],[3,2,1]));
