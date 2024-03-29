import utilities from "../../utilities.js"
import store from '../../store.js'
export default {
    template: await utilities.getPage('./js/components/blogs-section/blogs-section.html'),
    data(){
        return{
            blogsSwiper:{
                
                slidesPerView: 1,
                // autoplay: {
                //     delay: 2500,
                //     disableOnInteraction: false,
                // },
                // loop:true,
                pagination:{
                    el:'.swiper-pagination',
                    // dynamicBullets: true,
                },
                spaceBetween: 20,
                breakpoints: {
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }
            },
            store,
            utilities
        }
    },
    computed:{
      reversedBlogs(){
        return this.store.profile.blogs.reverse()
      }
    }
    
}