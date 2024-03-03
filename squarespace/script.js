var tl= gsap.timeline();
tl.from("#nav img,#navpart1, #navpart2",{
    y: -100,
    duration: 1,
    delay: 0.5,
    stagger: 0.2,
})
tl.from("#body h3",{
    y: 100,
    opacity:0,
    stagger:0.3
})
tl.from("#body img",{
    scale: 0.3,
    opacity: 0,
})
tl.from("h4",{
    scale: 0,
    opacity: 0,
})
tl.to("h4",{
    y: 30,
    repeat: -1,
    duration: 0.7,
    yoyo: true,
})