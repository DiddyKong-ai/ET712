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

//onmouseout event
// collect the element
let event6 = document.querySelector(".event6")
// add a mouseout event to open an alert dialog box
event6.onmouseout = function(){
    alert("MOUSE OUT - Example 6")
}

// example 7
// inline event
function openalert(){
    alert("CLICK EVENT - Example 7")
}

// example 8 mouseover event
// change the background color of a div when the mouse hover the element
// collect element
let divexample8 = document.querySelector(".divexample8")
divexample8.onmouseout = function(){
    let randred = Math.floor(Math.random()*255)
    let randgreen = Math.floor(Math.random()*255)
    let randpink = Math.floor(Math.random()*255)
    divexample8.style.backgroundColor = `rgb(${randred},${randgreen},${randpink})`
}

// example 9: keyboard event
// collect the elements
let inputex9 = document.querySelector(".inputex9")
let ex9paragraph = document.querySelector(".ex9paragraph")

inputex9.onkeydown = function(event){
    ex9paragraph.innerHTML = `key = ${event.key} was pressed`
}

/* lab EXCERCISE*/

/ EXERCISE
// note: use querySelector() or querySelectorAll()
// collect elements: search for the first p with class ps1
let ps1 = document.querySelector(".ps1")

// add a mouseout event to change the text content to "STUDENT'S FULL NAME"
ps1.addEventListener('mouseout', function(){
    ps1.textcontent = "Dillon Joshua Robertson";
});

// search for the second p with class ps2
const ps2 = document.querySelector('p.ps2');

// add a click event to the ps2 to change the font-size to 25px  and color to olive when is clicked
ps2.addEventListener('click', function() {
    ps2.style.fontSize = '25px';
    ps2.style.color = 'olive';
});

// search for the first div with class divs2
const divs2 = document.querySelector('div.divs2');

// add a click event to change the background color to indigo
divs2.addEventListener('click', function() {
    divs2.style.backgroundColor = 'indigo';
});

// search for the second div with class divs3
const divs3 = document.querySelector('div.divs3');

// add a keydown event to change the width of divs2 to 300px
divs3.addEventListener('keydown', function() {
    divs3.style.width = '300px';
});
