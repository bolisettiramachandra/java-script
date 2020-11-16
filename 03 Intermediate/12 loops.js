for(let i=0;i<10;i++){
    console.log(i);
}

const myStates = [
    "Andhra Pradesh",
    "Kerala",
    "Tamil nadu",
    "New delhi",
    1947,
    "UP",
]

for (let i=0; i< myStates.length; i++){
    if(typeof(myStates[i])!=="string") continue;
    console.log(myStates[i]);
}

let i=0;      // i can be taken as let again because before i is in for loop scope is ended

while (i <myStates.length){
    console.log(myStates[i]);
    i++;
}

let j=0;     // i can not be used again because it's scope is not ended out of {} so 

do{
    console.log(myStates[j]);
    j++;
}
while(j<myStates.length);
