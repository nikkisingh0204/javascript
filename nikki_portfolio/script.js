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
    var int = setInterval(function(){
       
        if(count === 99){
            clearInterval(int);
        }
        count++;
        line.style.width = count+'%';
        text.innerHTML =  count+'%';
    },80);
}

var tl = gsap.timeline();
function pageAnimation(){
    tl.to(".loaderclass , #loader h3",{
        opacity:0,
        delay: 8,
    })
    tl.to("#loader", {
        height: 0,
        duration: 2,
        ease: Expo.easeInOut,
    })
    tl.to("#contentdiv", {
        height: "100%",
        duration: 2,
        delay: -1.2,
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
    
}

revealtext();
loaderline();
pageAnimation();

