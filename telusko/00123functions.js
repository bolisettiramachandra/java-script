function printhello()                //function declaration  (defining a function)
{
    console.log('Hello World!!!')
}

printhello();    //  calling function
console.log(1);
printhello()
// ---------
function name0()
{
    return "Ram !!!!"
}
let firstname = name0()
console.log(firstname)
// ---------
function name1(abc)
{
    return `Hello ${abc} !!!`
}

let user = 'Rama Chandra'
let empName = name1(user)

console.log(empName)
console.log(name1('Bolisetti'))