gsap.registerPlugin(ScrollTrigger);

gsap.from(".div3-1", {
    duration: 1,
    y: '100%',
    ease: 'bounce',
    scrollTrigger: {
        trigger:".div3-1",
        
        start: "top 100%",
        end:"bottom 10%",
        toggleActions:"restart pause restart reset"
    }
})

gsap.from(".div1-2", {
    duration: 1,
    y: '100%',
    ease: 'bounce',
    scrollTrigger: {
        trigger:".div1-2",
        
        start: "top 95%",
        end:"bottom 55%",
        toggleActions:"restart pause restart reset"
    }
    
})



gsap.from(".navbar-brand", {
    duration: 5,
    y: '-50',
    ease: 'power2.out',
    scrollTrigger: {
        trigger:".navbar-brand",
        
        start: "top 100%",
        end:"bottom 100%"
    }
    
})

gsap.from(".nav-links", {
    duration: 5,
    y: '-500',
    ease: 'power2.out',
    scrollTrigger: {
        trigger:".nav-links",
        
        start: "top 100%",
        end:"bottom 100%"
    }
    
})

