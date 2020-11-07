tipper(80);

function tipper(a){
    var bill = parseInt(a);
    console.log(bill+5);
}
tipper("5");
tipper("a");


var bigTipper = function(a){
    var bill = parseInt(a);
    console.log(bill+15);
}

bigTipper(200);  // Here bigTipper is a variable you cannot use it before the function it ill be undefined 

// next example gives you more clarity on undefined

console.log(name);
var name = "ram";
console.log(name);

function sayName(){
    var name = "Mr. R";
    console.log(name);
}
sayName();
console.log(name);