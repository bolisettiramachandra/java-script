let i = 1
console.log("WHILE LOOP")
while(i<=5){
    console.log("Hi " + i)
    i++
}

i=1
console.log("DO WHILE LOOP")
do{
    console.log("Hi "+i)
    i++
}
while(i<=5)

console.log("FOR LOOP")
for(i=0;i<=5;i++){
    console.log("Hi "+i)
}

let num1 = 12345
let num2 = 0
console.log(`number 1 is ${num1}`)
while(num1>0){
    console.log(num1%10)
    num2=num2*10 + num1%100
    num1 = parseInt(num1/10)
}

console.log(`number 2 is ${num2}`)