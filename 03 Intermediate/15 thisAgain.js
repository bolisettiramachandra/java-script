// For all regular function calls .this refers to window object
console.log(this);
var user = {
    firstName : "Ram",
    courseCount : 4,
    getCourseCount : function () {
        console.log("This is line 7", this);
        function sayHello(){
            console.log("Hello");
            console.log("This is line 10",this);  // Here it is regular function call .. Refers to a indo object
        }
        sayHello();
    },
};

user.getCourseCount();    // not a regular function call :  This is through an object

function sayHello() {
    console.log("Hello");
}

sayHello();     // This is a function call

