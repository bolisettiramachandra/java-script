var name = "Rama chandra";
console.log("Line Number is 2: ", name);

function sayName(){
    //var name = "Mr. Ram";
    console.log("Line Number is 6:", name);

    function sayNameTwo(){
    console.log("Line Number is 9:", name);
    }
    sayNameTwo();
}
sayName();
name = "ram";

function sayNameThree(){
    console.log("Line Number is 17:", name);
}

sayName();
sayNameThree();