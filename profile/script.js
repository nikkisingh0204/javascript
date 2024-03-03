var tl=gsap.timeline({
    repeat: -1,
});


tl.to(".imagecontainer",{
    width: "100%",
    duration: 2,
    stagger: 2,
},'a')

tl.to("#text h1",{
    ease: Expo.easeInOut,
    top: "0%",
    stagger:2 ,
},'a')

tl.to("#text h1",{
    delay: 2,
    ease: Expo.easeInOut,
    top: "-100%",
    stagger: 2,
},'a')