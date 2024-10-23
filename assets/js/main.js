/*=============== Active Link =============== */

/*=============== Mixitup Filter =============== */
let mixerProjects = mixitup('.projects__container',{
    selectors: {
        target: '.project__item',
    },
    animation: {
        duration:500,
    },
});
/*=============== Testimonials Swiper =============== */
var testiSwiper = new Swiper('.testimonial__container',{
    loop: true, 
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    }, 
    pagination : {
        el: '.swiper-pagination',
    },
    mousewheel:true,
    keyboard:true,
    });
