console.log("Dillon Robertson")
// collect elements
const myform = document.querySelector("#myform")
const greeting = document.querySelector("#greeting")
const greetuser = document.querySelector("#greetuser")
const btnsubmit = document.querySelector(".btnsubmit")
const errormsg = document.querySelector("#errormsg")

window.addEventListener("load",function(){
    // disabled the submit button when the webpage is loaded
    btnsubmit.disabled = true
})

myform.addEventListener("sumbit", function(event){
    event.preventDefault()

    // collect the input value
    let username = document.querySelector("#username")
    let usernamevalue = username.value

    // collect the password
    let password = document.querySelector("#password")
    let passwordvalue = password.value

    // remove whitespace before and after the username
    usernamevalue = usernamevalue.trim()
    passwordvalue = passwordvalue.trim()

    //testing
    // console.log(usernamevalue)
    // validation of username

    if(usernamevalue===""){
        alert("Please enter a username")
        return; // stop further exercution
    }

    //validate the password to have 8+ character
    if (passwordvalue < 8){
        errormsg.style.display = "block"
    }else{
        errormsg.style.display = "none"
        btnsubmit.disabled = false
    }

    // print the username in the greeting message
    greetuser.innerHTML = usernamevalue
    greeting.style.display = "block"

    // clear input value
    username.value =""
})

let password = document.querySelector("#password")
password.addEventListener("input", function(){
    // collect the password
    let passwordvalue = password.value

    passwordvalue = passwordvalue.trim()
    
    //validate the password to have 8+ character
    if (passwordvalue < 8){
        errormsg.style.display = "block"
        btnsubmit.disabled = true
    }else{
        errormsg.style.display = "none"
        btnsubmit.disabled = false
    }

})