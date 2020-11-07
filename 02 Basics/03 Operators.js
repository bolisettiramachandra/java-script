var num1 = 5;
var num2 = 23;

console.log(num1+num2 , num1*num2 , num2-num1 , num2/num1 , num2%num1);

var answer = num1 > num2;

console.log(answer);

var listingPrice = 799;
var sellingPrice = 199;
var discountPercentage = ((listingPrice - sellingPrice)/listingPrice)*100;
console.log(discountPercentage);

displayDiscountPercentage = Math.round(discountPercentage);

console.log(displayDiscountPercentage+"% off");