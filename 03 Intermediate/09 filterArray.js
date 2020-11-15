var testArray = [2,4,6,3,9,1,5,7];

console.log(testArray.fill("H",2,5));   //fill(value, start?: number, end?: number)

const myNumber = [25,22,29,35,16,42,36,55,43,48,49];

const result = myNumber.filter((num) => (num%2==0));
console.log(result);

var users = [ "Ram", "Ravi","Bob","Alice","Tim","Zim","Car"];


console.log(users.slice(1,4));
console.log(users.slice(3));

users.splice(1,3,"Hiii","Bye");
console.log(users);