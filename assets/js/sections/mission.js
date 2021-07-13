$(()=>{
    const tl = gsap.timeline({
        scrollTrigger: ({
            trigger: '.mission'
        })
    })

    tl
    .from(".mission__bg", {opacity: 0, y: 200, duration:1})
    .from(".mission__image img", {opacity: 0, scale: 0}, "-=.7")
});