var line =  document.querySelector(".loaderline");
var text = document.querySelector("#loader h3");

var count=0;
let elems = document.querySelectorAll(".reveal");


function revealtext(){
    elems.forEach(function(elem){
        let parent = document.createElement('span')
        let child = document.createElement('span')

        parent.classList.add('parent')
        child.classList.add('child')

        child.innerHTML=elem.innerHTML
        parent.appendChild(child)

        elem.innerHTML=''
        elem.appendChild(parent)
    })
}

function loaderline() {
    var h5Text = document.querySelector("#line-part1 h5");
    let grow=0;
    setInterval(function(){
        if(grow < 100){
            grow++;
            h5Text.innerHTML = grow;
        }else {
            h5Text.innerHTML = grow;
        }
    },33)
}

var tl = gsap.timeline();
function pageAnimation(){
    tl.from(".line h1",{
        y:150,
        opacity:0,
        duration:1,
        delay:0.5,
        stagger:0.3,
    })
    tl.from("#line-part1",{
        opacity:0,
        onStart: loaderline(),
    })
    tl.to("#loader",{
        opacity:0,
        duration:0.2,
        delay:3,
    })
    tl.from("#contentdiv", {
        y:1600,
        duration: 2,
        delay: 0.2,
        ease: Expo.easeInOut,
    })
    tl.to(".parent .child",{
        y: 0,
        duration: 0.8,
        delay: -0.8,
        stagger:0.2,
        ease:Expo.easeInOut,
    })
    tl.to("#content h4",{
        opacity:1,
    })
    tl.to("#loader",{
        display: 'none',
    })
}

revealtext();
loaderline();
pageAnimation();

