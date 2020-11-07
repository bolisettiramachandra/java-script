var getUserRole = function(name,role){
    switch (role){
        case "admin":
            return `${name} is admin with all the access`;
            break;
        case "subadmin":
            return `${name} is subadmin with the access to create and delete courses`;
            break;
        case "testprep":
            return `${name} is test prep with the access to create and delete tests`;
            break;
        case "user":
            return `${name} is user to consume content`;
            break;
        default:
            return `${name} ia a trail user`;
            break;
    }
}

console.log(getUserRole("ram","admin"));

var getRole = getUserRole("chandra","user");
console.log(getRole);