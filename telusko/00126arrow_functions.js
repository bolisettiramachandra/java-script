let greet = function(){
    console.log("Hello World !!!!")
    return 1
}
console.log(greet())

// Arrow function

let greet1 = () => {
    console.log("Hello World !!!!")
    return 1
}
console.log(greet1())

//Arrow function

let add = (num1,num2) => num1+num2
console.log(add(5,6))

//
let add1 = (num1,num2,num3 = 5) => num1+num2+num3
console.log(add1(5,6))