$(()=>{
    const tl = gsap.timeline({
        scrollTrigger: ({
            trigger: '.benificiaries'
        })
    })

    tl
    .from('.benificiaries__heading', {opacity: 0, y: 50, duration: 1})
    .from('.benificiaries__container', {opacity: 0}, "-=.7")
})