var user = {
    firstName : "Ram",
    lastName : "Chandra",
    role : "Admin",
    loginCount : 52,
    facebookSignedIn : false,
};

console.log(user.firstName);
console.log(user["lastName"]);
user.loginCount = 65;
console.log(user.loginCount);
console.log(user);
console.table(user);