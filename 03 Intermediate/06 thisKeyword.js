// TODO: Part 1 for "This" Keyword not complete THIS

console.log(this);
// Empty scope here but in browser it gives window

function sayName(){
    var name = "Ram";
    console.log(this);
}

sayName();
// Here you will get some other things
// In browser it gives same window