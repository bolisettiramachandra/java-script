var User = {
    name : "",
    getUserName: function (){
        console.log(`User name is : ${this.name}`);
    },
};

var ram = Object.create(User);
console.log(ram);
ram.name = "Rama Chandra";
ram.getUserName();

var nani = Object.create(User,{
    name : { value: "NANI"},
    courseCount : {value:3},
});

nani.getUserName();