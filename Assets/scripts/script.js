const opennav = document.getElementById("open")
const closenav = document.getElementById("close")
const nav = document.getElementById("divOne")
const likePost = document.getElementsByClassName("bi-heart-fill")
let likenum = document.getElementsByClassName("like-number")
let others = document.getElementsByClassName("bi-three-dots-vertical")
let closeothers = document.getElementsByClassName("bi-bi-x")
let othersDiv = document.getElementsByClassName("others-div")
let tutorial = document.getElementById("tutorial")


document.addEventListener("DOMContentLoaded", ()=>{
    setTimeout(displayTutorial, 1000)
    setInterval(removeTutorial, 5000)
})

function displayTutorial(){
    tutorial.style.bottom ="10rem";
}

function removeTutorial(){
    tutorial.style.bottom ="-10rem"
}

opennav.addEventListener("click", () => {
    nav.style.top = "0";    
})

closenav.addEventListener("click", () => {
    nav.style.top= "-29rem";
})

for (let i = 0; i < likePost.length; i++) {
    likePost[i].addEventListener("click", function () {
        likePost[i].style.color = "gray";
        likePost[i].style.transition = "0.5s ease-in";
    })

    likePost[i].addEventListener("dblclick", function () {
        likePost[i].style.color = "red";
        likePost[i].style.transition = "0.5s ease-in";
    }) 
}

for (let i = 0; i < others.length; i++) {
    others[i].addEventListener("click", function () {
        othersDiv[i].style.display = "unset"
    })
}

for (let i = 0; i < closeothers.length; i++) {
    closeothers[i].addEventListener("click", function () {
        othersDiv[i].style.display = "none"
    })
}