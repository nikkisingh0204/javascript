var tl = gsap.timeline();



tl.from("#nav",{
    opacity: 0,
    delay: 0.3,
})
tl.from("#navpart1,#navpart2,#navpart3",{
    y: -80,
    duration: 1,
    delay: 0.5,
    stagger: 0.2,
})
tl.from("#container h1",{
    x: -80,
    duration: 1,
    delay: 0.3,
    opacity: 0,
    stagger :0.4,
})
tl.from("#right img,#right #dots",{
    opacity: 0,
    scale: 0.5,
})

gsap.from("#part2 .card",{
    opacity: 0,
    scale:0,
    duration:1,
    delay:0.5,
    scrollTrigger: {
        trigger: "#part2 .card",
        scroller: "body",
    }
})