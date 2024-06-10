
function locoScroll(){
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});






// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}

function loaderAnimation(){
    var tl=gsap.timeline();


tl.from(".line1 h1",{
    y:160,
    stagger:0.2,
    delay:0.5,
    duration:0.8,
})

tl.from("#line1-part1",{
    opacity: 0,
    onStart: function(){
        var count = document.querySelector("#line1-part1 h5");

        let grow=0;
        setInterval(function(){
            if(grow<100){
                grow++;
                count.innerHTML = grow;
            }else{
                count.innerHTML = grow;
            }
        },33)}
})
tl.to(".line1 h2",{
    animationName:"anime",
    opacity:1,
})
tl.to("#loader",{
    opacity:0,
    duration:0.2,
    delay:3,
})
tl.from("#page1",{
    delay:0.2,
    y:1600,
    duration:0.5,
    opacity:0,
    ease: Power4,
})
tl.to("#loader",{
    display: 'none',
})
tl.from("#nav",{
    opacity:0,
})
tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1",{
    stagger:0.2,
    y: 120,
})
}


// loaderAnimation();
locoScroll();


Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

Shery.makeMagnet("#nav-part2 h5" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 2)",
    duration: 1,
});

Shery.imageEffect("#image", {
    style: 5, //Select Style
    gooey: true,
    config: {"a":{"value":1.11,"range":[0,30]},"b":{"value":-0.93,"range":[-1,1]},"zindex":{"value":"9999","range":[-9999999,9999999]},"aspect":{"value":0.837777128456116},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.33,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":1.85,"range":[0,10]},"metaball":{"value":0.35,"range":[0,2]},"discard_threshold":{"value":0.54,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.43,"range":[0,2]},"noise_scale":{"value":10.19,"range":[0,100]}},
  });


function videoCursorMove(){
    const videoContainer = document.querySelector("#videocontainer");
    const video = document.querySelector("#videocontainer video");
    const cursor = document.querySelector("#videocontainer #video-cursor");

    videoContainer.addEventListener("mouseenter",function(){
        videoContainer.addEventListener("mousemove",function(dets){
            gsap.to(".mousefollower", {
                opacity: 0
          
              });
            gsap.to("#videocontainer #video-cursor",{
                left:dets.x - 300,
                top:dets.y -270,
            },
            )
        })
        let flag = 0;
        videoContainer.addEventListener("click",function(){
            if(flag === 0){
                video.play();
                video.style.opacity = 1;
                cursor.innerHTML = `<i class="ri-pause-large-fill"></i>`
                gsap.to("#video-cursor",{
                    scale:0.5,
                })
                flag=1;
            }else {
                video.pause();
                video.style.opacity = 0;
                cursor.innerHTML = `<i class="ri-play-large-fill"></i>`
                gsap.to("#video-cursor",{
                    scale:1,
                })
                flag=0;
            }
        })
    })

    videoContainer.addEventListener("mouseleave",function(){
        gsap.to(".mousefollower", {
            opacity: 1
      
          });
        gsap.to("#videocontainer #video-cursor",{
            left: "70%",
            top: "-10%",
        })
    })
}


function flagAnimation(){
        document.querySelector("#hero3").addEventListener("mousemove",function(dets){
            gsap.to("#flag",{
                left: dets.x,
                top: dets.y,
            })
        })
    document.querySelector("#hero3").addEventListener("mouseenter", function () {
        gsap.to("#flag", {
          opacity: 1
        })
      })
      document.querySelector("#hero3").addEventListener("mouseleave", function () {
        gsap.to("#flag", {
          opacity: 0
        })
      })
}

function textAnimation(){
        gsap.from("#footer h1",{
            opacity:0,
            delay:5,
            y:60,
            duration:1,
            onStart: function(){
                $('#footer h1').textillate({ in: { effect: 'fadeIn'}  });
            }
        })
}

videoCursorMove();
flagAnimation();
textAnimation();