var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

let count =1;
setInterval(() => {
if(count<=499){
    counter.innerHTML = count;
    count++;}    
}, 2);

setTimeout(() => {
    followers.innerText = "Instagram Followers";
}, 2000);