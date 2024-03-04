const logo =document.querySelector("#nav h1")
const link = document.querySelectorAll("#part-2")
var target = link[0].children[1]



const tl=gsap.timeline({paused: true});



tl.to(logo , {
    scale: 0.95,
    duration: 0.2,
    delay:0.2,
    ease:"power2.in"
})
logo.addEventListener("mouseenter",() => {
    tl.play();
})
logo.addEventListener("mouseleave",() => {
    tl.reverse();
})

target.addEventListener("mouseenter",function(){
    document.getElementById("services").style.visibility="visible";
})
document.getElementById("services").addEventListener("mouseleave",function(){
    document.getElementById("services").style.visibility="hidden";
})