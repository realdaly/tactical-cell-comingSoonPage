// Logo Follow Cursor Effect
const imgContainer = document.querySelector(".container")
const img = document.querySelector(".img img")
document.addEventListener("mousemove", ({ clientX, clientY }) => {
    const { top: topIndent, right: rightIndent, width, height } = imgContainer.getBoundingClientRect()
    let xAxis = -((clientX - (rightIndent * 0.01)) - width / 2) / 50
    let yAxis = ((clientY - (topIndent * 0.01)) - height / 2) / 50
    img.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) rotateZ(${yAxis}deg)`
})

// Animate In
document.addEventListener("mouseenter", (e) => {
    img.style.transform = "translateZ(50vw)"
})

//Animate Out
document.addEventListener("mouseleave", (e) => {
    img.style.transform = "translateZ(0)"
})


// Text Erase Effect
const animateText = document.querySelector(".animateText")
const textWrapper = document.querySelector(".textWrapper")

setInterval(function(){
    if(animateText.innerHTML == "Coming soon . . ."){
        animateText.innerHTML = `انتظرونا قريبا . . .`
        animateText.style.borderRight = "none"
        animateText.style.borderLeft = ".05em solid #464545"
        textWrapper.dir = "rtl"
        textWrapper.lang = "ar"
    } else {
        animateText.innerHTML = `Coming soon . . .`
        animateText.style.borderRight = ".05em solid #464545"
        animateText.style.borderLeft = "none"
        textWrapper.dir = "ltr"
        textWrapper.lang = "en"

    }
}, 6000)