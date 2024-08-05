
gsap.from(".firsth1", {
    opacity: 0,
    y: -30,
    delay: 1,
    duration: 1,
})
gsap.from("#secondh1", {
    opacity: 0,
    y: 30,
    delay: 1,
    duration: 1,
})
gsap.from(".name", {
    opacity: 0,
    y: 10,
    delay: 1.2,
    duration: 1,
})
gsap.from(".MENU", {
    opacity: 0,
    y: 10,
    delay: 1.2,
    duration: 1,
})
gsap.from("#nav h2", {
    opacity: 0,
    y: 10,
    delay: 1.2,
    duration: 1,
})
gsap.from(".subtitle", {
    opacity: 0,
    y: 10,
    delay: 0.5,
    duration: 1,
    scrollTrigger: ".subtitle"
})
gsap.from(".h2", {
    opacity: 0,
    y: 10,
    delay: 1.2,
    duration: 0.3,
    scrollTrigger: ".h2"
})
gsap.from(".paragraph", {
    opacity: 0,
    y: 10,
    delay: 2.4,
    duration: 0.7,
    scrollTrigger: ".paragraph"
})

gsap.to("#page2 h1", {
    transform: "translateX(-57%)",
    scrollTrigger: {
        trigger: "#page2 ",
        scroller: "body",
        marker: true,
        start: "top 20%",
        end: "top -50%",
        scrub: 1,
        pin: true,

    }
})
var swiper = new Swiper(".swiper",{
    slidesPerView: 1,
    spaceBetween:10,
    speed:40,
    preventClicks: true,
    noSwiping: true,
    freeMode:false,
    navigation:{
        nextEl:".next",
        prevEl:".prev",
    },
    breakpoints: {
    550: {
        slidesPerView:2,
        spaceBetween: 20,
    },
    950: {
        slidesPerView: 3,
       spaceBetween: 30, 
    },
    },
    });
    
