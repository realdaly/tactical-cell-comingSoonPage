// Logo Follow Cursor Effect
const img = document.querySelector(".img img")
const walk = 100
document.addEventListener('mousemove', shadow)

function shadow(e){
    const width = e.offsetWidth;
    const height = e.offsetHeight

    let x = e.offsetX
    let y = e.offsetY

    if(e !== e.target){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round(( x / width * walk) - (walk / 2))
    const yWalk = Math.round(( y /height * walk) - (walk / 2))

    img.style.boxShadow = `${xWalk}px ${yWalk}px #000`;

    console.log(xWalk, yWalk)
}


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