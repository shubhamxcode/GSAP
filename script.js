gsap.to("#Box",{
    x:800,
    y:200,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor:"blue",
    borderRadius:"50%",
    scale:"0.7",
    
})
gsap.from("h1",{
    color:"red",
    duration:"2",
    opacity:0,
    stagger:1
    
})