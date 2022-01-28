//Array Destructuring

const numbers = [1,2,3];
[num1, ,num3] = numbers;
console.log(num1 ,num3)

//Object Destructuring

const person = {
    name : 'ram',
    age : 23
};

const {name} = person
console.log(name);
