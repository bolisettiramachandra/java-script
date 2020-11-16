var user = {
    firstName : "Ram",
    lastName : "Chandra",
    role : "Admin",
    loginCount : 52,
    facebookSignedIn : false,
    courseList : [],
    buyCourse : function (courseName){
        this.courseList.push(courseName);
    },
    getCourseCount : function(){
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    }
        
};

var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());

user.buyCourse("React js course");
user.buyCourse("Angular course");
console.log(user.getCourseCount());
console.log(user.courseList);