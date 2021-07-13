$(()=>{
    console.log("asd")
    const tl = gsap.timeline({
        scrollTrigger: ({
            trigger: ".news"
        })
    })

    tl
    .from('.layout__item:nth-child(1)', {opacity:0, duration: 1})
    .from('.layout__item:nth-child(2)', {opacity:0, y: 50, duration: 1}, "-=.7")
    .from('.layout__item:nth-child(3)', {opacity:0, y: 50, duration: 1}, "-=.7")
    .from('.layout__item:nth-child(4)', {opacity:0, y: 50, duration: 1}, "-=.7")
    .from('.layout__item:nth-child(5)', {opacity:0, y: 50, duration: 1}, "-=1")
    .from('.layout__item:nth-child(6)', {opacity:0, duration: 1}, "-=1")
})