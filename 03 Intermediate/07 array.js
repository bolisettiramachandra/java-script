var countries = ["India", "USA", "Japan", "Russia"];
var states = new Array("Ap","Rajasthan","Delhi","Kerala");
console.log(states[1], states.length);
states[1] = "Assam";
console.log(states);
var user = ["Ram","bramachandra99@gmail.com",23,5,true];
console.log(user);
user.pop();
console.log(user);
user.unshift("New Value");
console.log(user);
user.shift();
console.log(user);
console.log(user.indexOf(23),user.indexOf("XYZ"));
console.log(Array.from("RAM"));