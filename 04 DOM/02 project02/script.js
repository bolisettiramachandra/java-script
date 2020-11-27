const red = document.querySelector(".red")
const cyan = document.querySelector(".cyan")
const violet = document.querySelector(".violet")
const orange = document.querySelector(".orange")
const pink = document.querySelector(".pink")

const center = document.querySelector(".center");

console.log(window.getComputedStyle(red).background);
console.log("Hi");
console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).background;
}

console.log(getBGColor(pink));
console.log(getBGColor(cyan));

var redElementColor = getBGColor(red);

red.addEventListener('mouseenter',() => {
    center.style.background = redElementColor;
})

var cyanColor = getBGColor(cyan);
cyan.addEventListener("mouseleave",() => {
    center.style.background = cyanColor;
})

var violetColor = getBGColor(violet);
violet.addEventListener("click",() => {
    center.style.background = violetColor;
})

var pinkColor = getBGColor(pink);
pink.addEventListener("dblclick",() => {
    center.style.background = pinkColor;
})





