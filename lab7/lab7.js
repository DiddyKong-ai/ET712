console.log("Dillon Robertson")
// select element by class name, "description"
let desc = document.querySelector(".description")
console.log(desc)
// select element by id name "title"
let titlenode = document.querySelector("#title")
console.log(titlenode)
// select element/s by tag name, "p"
let par = document.querySelectorAll("p")
console.log(par)
// select all elements with class name "methods"
let methods = document.querySelectorAll(".methods")
console.log(methods)
// loop through each elements in a node list
for(let n = 0; n<methods.length; n++){
    console.log(methods[n])
}

// select the button
let btn = document.querySelector(".btnclick")
// add an event (click) to btn
btn.addEventListener("click", function(){
    alert("BTN WAS CLICKED")
})

// select the elements, 'btnmsg' and 'msg'
let btnmsg = document.querySelector(".btnmsg")
let msg = document.querySelector(".msg")
// add an event to 'msg' that changes the text node to "Dillon Robertson"
btnmsg.addEventListener("click", function(){
    msg.innerHTML = "Hello <b> Dillon Robertson <b>"
})

// select elements
let shape = document.querySelector(".shape")
let btncircle = document.querySelector(".btncircle")
let btnsquare = document.querySelector(".btnsquare")
let btnrectangle = document.querySelector(".btnrectangle")

// add an event to each button
btncircle.addEventListener("click", function(){
    shape.className = "circle"
})
btnsquare.addEventListener("click", function(){
    shape.className = "square"
})
btnrectangle.addEventListener("click", function(){
    shape.className = "rectangle"
})