let div = document.getElementById("logindown")
let imglogin = document.getElementById("loginimgdown")
let logincontdown = document.getElementById("logincontdown")

div.addEventListener("mouseover", () => {
    imglogin.style.transform = "rotate(180deg)"
    imglogin.style.transition = "transform 0.3s ease-in-out"
    logincontdown.style.display = "block"
})
div.addEventListener("mouseleave", () => {
    imglogin.style.transform = "rotate(0deg)"
    imglogin.style.transition = "transform 0.3s ease-in-out"
    logincontdown.style.display = "none"
})
logincontdown.addEventListener("mouseover",()=>{
    logincontdown.style.display="block"
})
logincontdown.addEventListener("mouseleave",()=>{
    logincontdown.style.display = "none"
})

//---------------------------------------------------------------------

let threedot = document.getElementById("threedot");
let threedothover = document.getElementById("threedothover")

threedot.addEventListener("mouseover",()=>{
    threedothover.style.display = "block"
})
threedot.addEventListener("mouseleave",()=>{
    threedothover.style.display = "none"
})
threedothover.addEventListener("mouseover",()=>{
    threedothover.style.display = "block"
})
threedothover.addEventListener("mouseleave",()=>{
    threedothover.style.display = "none"
})


//----------------------------------------------------------------------

let Fashin = document.getElementById("Fashin")
let fashinname = document.getElementById("fashinname")
let fashindown = document.getElementById("fashindown")
let fashincontdown = document.getElementById("fashincontdown")
let fashin1 = document.getElementById("fashin1")
let fashin2 = document.getElementById("fashin2")
let fashin3 = document.getElementById("fashin3")
let fashin4 = document.getElementById("fashin4")
let fashin5 = document.getElementById("fashin5")
let fashin6 = document.getElementById("fashin6")
let fashin7 = document.getElementById("fashin7")
let fashin8 = document.getElementById("fashin8")
let fashin9 = document.getElementById("fashin9")
let fashin10 = document.getElementById("fashin10")
let fashin11 = document.getElementById("fashin11")
let topwears = document.getElementById("topwears")

let fashins = document.querySelectorAll(".fashins")


Fashin.addEventListener("mouseover",()=>{
    fashindown.style.transform = "rotate(180deg)"
    fashindown.style.transition = "transform 0.3s ease-in-out"
    fashindown.style.fill = "#637AFA"
    fashinname.style.color = "#637AFA"
    fashincontdown.style.display = "block"
})
Fashin.addEventListener("mouseleave",()=>{
    fashindown.style.transform = "rotate(0deg)"
    fashindown.style.transition = "transform 0.3s ease-in-out"
    fashinname.style.color = "black"
})


fashins.forEach((x)=>{
    x.addEventListener("mouseover",()=>{
        x.style.backgroundColor = "#E7E7EA"
    })
    x.addEventListener("mouseleave",()=>{
        x.style.backgroundColor = "white"
    })
})

fashin1.addEventListener("mouseover",()=>{
    topwears.style.display = "block"
    fashincontdown.style.display = "block"
})

topwears.addEventListener("mouseleave",()=>{
    topwears.style.display = "none"
    fashincontdown.style.display = "none"
})

let Electronics = document.getElementById("Electronics")
let Electronicsname = document.getElementById("Electronicsname")
let ElectronicsDown = document.getElementById("ElectronicsDown")

Electronics.addEventListener("mouseover",()=>{
    ElectronicsDown.style.transform = "rotate(180deg)"
    ElectronicsDown.style.transition = "transform 0.3s ease-in-out"
    ElectronicsDown.style.fill = "#637AFA"
    Electronicsname.style.color = "#637AFA"
})
Electronics.addEventListener("mouseleave",()=>{
    ElectronicsDown.style.transform = "rotate(0deg)"
    ElectronicsDown.style.transition = "transform 0.3s ease-in-out"
    Electronicsname.style.color = "black"
})

let home = document.getElementById("home")
let homename = document.getElementById("homename")
let homedown = document.getElementById("homedown")

home.addEventListener("mouseover",()=>{
    homedown.style.transform = "rotate(180deg)"
    homedown.style.transition = "transform 0.3s ease-in-out"
    homedown.style.fill = "#637AFA"
    homename.style.color = "#637AFA"
})
home.addEventListener("mouseleave",()=>{
    homedown.style.transform = "rotate(0deg)"
    homedown.style.transition = "transform 0.3s ease-in-out"
    homename.style.color = "black"
})

let Beauty = document.getElementById("Beauty")
let BeautyName = document.getElementById("BeautyName")
let BeautyDown = document.getElementById("BeautyDown")

Beauty.addEventListener("mouseover",()=>{
    BeautyDown.style.transform = "rotate(180deg)"
    BeautyDown.style.transition = "transform 0.3s ease-in-out"
    BeautyDown.style.fill = "#637AFA"
    BeautyName.style.color = "#637AFA"
})
Beauty.addEventListener("mouseleave",()=>{
    BeautyDown.style.transform = "rotate(0deg)"
    BeautyDown.style.transition = "transform 0.3s ease-in-out"
    BeautyName.style.color = "black"
})

let bike = document.getElementById("bike")
let bikename = document.getElementById("bikename")
let bikedown = document.getElementById("bikedown")

bike.addEventListener("mouseover",()=>{
    bikedown.style.transform = "rotate(180deg)"
    bikedown.style.transition = "transform 0.3s ease-in-out"
    bikedown.style.fill = "#637AFA"
    bikename.style.color = "#637AFA"
})
bike.addEventListener("mouseleave",()=>{
    bikedown.style.transform = "rotate(0deg)"
    bikedown.style.transition = "transform 0.3s ease-in-out"
    bikename.style.color = "black"
})

//------------------------------------------------------------------