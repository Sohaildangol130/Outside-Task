$(()=>{
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.above-the-fold'
        }
    });
    
    tl
    .from(".above-the-fold__bg", {opacity: 0, y: 200, duration:1})
    .from(".main__text", {opacity: 0, duration: 1}, "-=.5")
    .from(".main__button", {opacity: 0, duration:1}, "-=1")
    .from(".above-the-fold__image img", {opacity: 0, scale: 0}, "-=.7")
})