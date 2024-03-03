
gsap.from("#first",{
    delay:0.4,
    opacity:0,
    duration:1,
    y: 60,
})
gsap.from("#second",{
    delay:0.4,
    opacity:0,
    duration:1,
    y: -60,
})
gsap.from("#third",{
    delay:0.4,
    opacity:0,
    duration:1,
    x: 60,
})
gsap.from("#secondpart #tag,#secondpart #content", {
    opacity: 0,
    duration: 1,
    stagger:0.4,
    scrollTrigger: {
        trigger: "#secondpart h3",
        scroller:"body",
        // markers: true,
        start:"top 60%",
    }
})
