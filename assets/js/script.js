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