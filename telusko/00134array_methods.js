let data = [2,5,33,89,45]
console.log(data.push(9))  // also prints the length
console.log(data)
console.log(data.pop())  // removed last element
console.log(data)

console.log(data.shift())  //removes 1st element and shifts all other to front
console.log(data)
console.log(data.unshift(1)) // ads value at the begining
console.log(data)
console.log(data.splice(4)) // removes all data after 4th element
console.log(data)
console.log(data.splice(1,1)) // removes 1 element after 1st element
console.log(data)
console.log(data.splice(1,1, 99,11,22))
console.log(data)