const red = document.querySelector(".red")
const cyan = document.querySelector(".cyan")
const vilot = document.querySelector(".vilot")
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
