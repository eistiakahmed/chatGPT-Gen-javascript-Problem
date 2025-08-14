function calculateDiscount(number) {
    if(typeof number !== "number"|| number<0){
        return "Invalid";
    }
  if (number >= 1000) {
    let discountAmount = (number * 10) / 100;
    discountAmount = number - discountAmount; 
    return discountAmount;
  } else if (number >= 500) {
    let discountAmount = (number * 5) / 100;
     discountAmount = number - discountAmount; 
    return discountAmount;
  }else{
    return number;
  }
}

console.log(calculateDiscount("500"))
