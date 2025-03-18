console.log("Dillon Robertson")
// example 1
// collect the element
let btnscrollby = document.querySelector(".btnscrollby")
btnscrollby.addEventListener("click", function(){
    window.scrollBy(100,0)
})

/**
 * example 2
 */
// collect the elements
let btnright = document.querySelector(".btnright")
let btnleft = document.querySelector(".btnleft")

// function to scroll the gallery container
function scrollgallery(pictures){
    let gallerycontainer = document.querySelector(".gallerycontainer")
    gallerycontainer.scrollBy({
        left:pictures,
        behavior: "smooth"
    })
}

// add a click event to each button
btnright.addEventListener("click", function(){
    scrollgallery(600)
})

btnleft.addEventListener("click", function(){
    scrollgallery(-600)
})

/**
 * example 3
 */
let topcontainer = document.querySelector(".topcontainer")

window.addEventListener("scoll", function(){
    let pxTop = window.scrollY
    console.log(pxTop)
    if(pxTop>100){
        topcontainer.style.display = "block"
    }
    else{
        topcontainer.style.display = "none"
    }
})