import utilities from "../../utilities.js"
import store from '../../store.js'
export default {
    template: await utilities.getPage('./js/components/about-section/about-section.html'),
    data(){
        return{
            store,
            utilities,
            
            swiperInit:{
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                loop:true,
                effect:'fade',
                grabCursor: true,
                cubeEffect: {
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                },
            }
        }
    },
    computed:{
        getYoutubeId(){
            // console.log(utilities.getYouTubeId(this.store.profile.contact.video));
            return utilities.getYouTubeId(this.store.profile.contact.video)
        }
    },
}