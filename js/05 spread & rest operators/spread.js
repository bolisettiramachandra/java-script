const numbers = [1,2,3];
const newNumbers = [...numbers,4,5];
console.log(newNumbers)


//person object
const person = {
    name : 'ram'
};
const newPerson = {
    ...person,
    age : 23
};

console.log(newPerson);