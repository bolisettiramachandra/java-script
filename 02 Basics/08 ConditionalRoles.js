var user = "admin"; // admin,subadmin, testprep, user

switch(user){
    case "admin":
        console.log("gets complete access");
        break;
    case "subadmin":
        console.log("gets access to add/delete/modify courses");
        break;
    case "testprep":
        console.log("Gets access to create/delete test");
        break;
    case "user":
        console.log("gets access to consume course content ");
        break;
    default:
        console.log("TRAIL USER")
        break;
    
    }