var isEven = (element) =>{
    // if(element%2 == 0){
    //     return true;
    // }
    // return false;

    return element%2 ===0;
}

console.log(isEven(2));

var result = [2,4,6,8].every(isEven);
var result1 = [2,3,6,8].every((e) => e%2 ===0 );
// here if you use {} in line 13 in "e%2 ===0" statement you need to use return 
//For more refer arrow functions
console.log(result , result1);