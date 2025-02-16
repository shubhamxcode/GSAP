// // gsap.to("#box-1",{
// //     x:800,
// //     duration:2,
// //     delay:1,
// //     rotate:360,
// //     backgroundColor:"white",
// //     borderRadius:"50%",


    
// // })
// // gsap.from("box-1,h1",{
// //     color:"red",
// //     duration:"2",
// //     opacity:0,
// //     stagger:1
    
// // })
// // gsap.to("#box-3",{
// //     color:"orange",
// //     duration:1.5,
// //     delay:3,
// //     x:800,
// //     borderRadius:"50%"
// // })
// const tl=gsap.timeline()

// tl.to("#box-1",{
//     x:800,
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor:"white",
//     borderRadius:"50%",
    
// })
// gsap.to("#box-3",{
//     color:"orange",
//     duration:1.5,
//     delay:3,
//     x:800,
//     borderRadius:"50%"
// })


////nav bar

// const timeline=gsap.timeline()

// timeline.from("#shubh",{
//     y:-30,
//     opacity:0,
//     duration:0.3,
//     delay:0.5
// })
// timeline.from("#nav,ul,li",{
//     y:-30,
//     opacity:0,
//     duration:1,
//     stagger:0.3
// })

//////////////////////////// scroll Triger////////////////////////////////////////////
gsap.from("#page-1 #box",{
    scale:0,
    duration:2,
    delay:1,
    rotate:360,
})
gsap.from("#page-2 #box",{
    scale:0,
    duration:2,
    delay:1,
    rotate:360,
    scrollTrigger:{
        trigger:"#page-2 #box",
        scroller:"body",
        scrub:2,
        start:"top 60%",
        pin:true
    }
})
gsap.from("#page-3 #box", {
    scale: 0,
    duration: 2,
    delay: 1,
    rotate: 360,
    scrollTrigger: {
        trigger: "#page-3 #box",
        scroller: "body",
        start: "top 60%",
    }
});
