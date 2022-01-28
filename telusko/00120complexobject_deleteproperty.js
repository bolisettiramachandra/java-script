let alien = {
    name : 'Ram',
    tech : 'JS',
    laptop : {
        cpu : 'I7',
        ram : '16',
        brand : 'Asus'
    }
}

console.log(alien)
console.log(alien.laptop)
console.log(alien.laptop + " "+alien.laptop.brand+ " " + alien.laptop.brand.length)
// gpu not declared in object
console.log(alien.laptop.gpu?.length)


//for in loop
for(let key in alien){
    console.log(key, alien[key])
}

//deleting
delete alien.laptop
console.log(alien)