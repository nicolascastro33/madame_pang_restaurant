import gsap from "gsap"

export const slideInLeft = (elem, delay, duration) => {
    gsap.fromTo(
        elem,
        {
            opacity: 0,
            x: -200,
        },
        {
            opacity: 1,
            x: 0,
            delay: delay || 0.4, 
            duration: duration || 0.,
            scrollTrigger: {
                trigger: elem,
                start: "top center",
                end: "bottom center"
            }
        }
    )
}

export const slideInRight = (elem, delay, duration) => {
    gsap.fromTo(
        elem,
        {
            opacity: 0,
            x: 200,
        },
        {
            opacity: 1,
            y: 0,
            delay: delay || 0.4, 
            duration: duration || 0.4,
            scrollTrigger: {
                trigger: elem,
                start: "top center",
                end: "bottom center"
            }
        }
    )
}