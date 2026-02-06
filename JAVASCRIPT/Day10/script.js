const head=document.getElementById("head");

console.log(head.innerText) // it will only show the visible text

console.log(head.textcontent)// it will show the text including hidden text

console.log(head.innerhtml)

// create a new element
const newpara=document.createElement("p");
newpara.textContent="this is a dynamically created para"
console.log(newpara.textContent);

//append the new element

const container = document.getElementById("container")
container.appendChild(newpara);

//Deleting element
const p=document.getElementById("container").querySelector("p")
p.remove()

let date= new Date()

// console.log(date)
// setTimeout(()=>(
//     //alert
// ),1000)
function Handle(){
    let x =document.getElementById("output")
    x.textContent="Button Clicked"
}