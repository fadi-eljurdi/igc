import utilities from "../../utilities.js"
export default {
    template: await utilities.getPage('./js/components/blog-media/blog-media.html'),
    
    
    props:['media'],
    data(){
        return{
            swiper:'',
            blogSwiper:{
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                spaceBetween:20,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            }
        }
    }, 
}