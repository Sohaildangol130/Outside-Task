$(()=>{
    const tl = gsap.timeline({
        scrollTrigger: ({
            trigger: '.founders'
        })
    })

    tl.from('.founders__bg', {opacity: 0, duration: 1})
    .from('.container__all-founders', {opacity: 0, y: 50, duration: 1}, "-=.7")
})