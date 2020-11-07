// falsy values
// undefined
// null
// 0
// ''
// NAN

var user = "";
if(user){
    console.log("condition is true");
}
else{
    console.log("falsy value");
}

console.log(2+3+'5'+"7");

if(2 == "2"){
    console.log("condition is true");
}
else{
    console.log("falsy value");
}

if(2==="2"){
    console.log("condition is true");
}
else{
    console.log("falsy value");
}