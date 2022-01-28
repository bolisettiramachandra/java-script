//premitive type

let number = 1;
let number2 = number ;  // premitive copies the final data 

console.log(number2);
number = 2;
console.log(number2);

//reference type

const person = {
    name : 'max'
}

const secondPerson = person ;  //referece copies only object stores pointer address of object in memory
const thirdPerson = {          //spreading the properties copies the values of the old object so values dosen't change
    ...person
}
console.log(secondPerson);
console.log(thirdPerson);

person.name = 'ram';
console.log(secondPerson);
console.log(thirdPerson);