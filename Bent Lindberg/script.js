var tl = gsap.timeline();

tl.to("#loader",{
    top: "-100%",
    // ease: power1.inOut,
    duration: 1,
    delay: 0.5,
})
tl.from("#nav h3",{
    y: "-200%",
    duration:2,
    delay: 0.3,
})
tl.to("#text h1", {
    transform: "translateX(-100%)",
    scrollTrigger: {
        trigger: "#text h1",
        scroller: "body",
        start: "top 100%",
        scrub: 2,
        pin: true,
    }
})
// tl.from(".elem h2",{
//     opacity:0,
//     x:100,
//     duration: 2,
//     scrollTrigger: {
//         trigger:".elem h2",
//         scroller: "body",
//         start: "top 100%",
//         scrub: 2,
//         pin: true,
//     }
// })