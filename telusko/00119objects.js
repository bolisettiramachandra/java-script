let alien1 = {}
console.log(alien1)
console.log(alien1 +"\n type of alien is "+typeof(alien1))

let alien = {
    name:'Ram',
    tech:'JS',
    'work exp':4
}
console.log(alien)
console.log(JSON.stringify(alien) + "\n" + alien.name + "\n" + alien['tech'])

let input1 = 'name'
let input2 = 'work exp'

console.log(alien[input1])
console.log(alien.input1)