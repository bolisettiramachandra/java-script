var User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is ${this.courseCount}`);
    };
};

User.prototype.getFirstName = function(){
    console.log(`Your First Name is ${this.firstName}`);
};

var ram = new User("Ram",5);
console.log(ram)
ram.getCourseCount();
ram.getFirstName();

var chandra = new User("Chandra",3);
console.log(chandra);
User.getCourseCount();
User.getFirstName();