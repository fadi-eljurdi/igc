import utilities from "../../utilities.js"
import store from '../../store.js'
export default {
    template: await utilities.getPage('./js/components/hero/hero.html'),
    data(){
        return{
            store,
            utilities,
            slides:[
                // './img/hero.png',
                'https://lh3.googleusercontent.com/d/14eMqHX0HhC6r2MlCxWlajHtz9-qNj7-i'
                // 'https://image.lexica.art/full_jpg/bfc6af3f-4473-4a78-8543-ee98f74361b3',
                // 'https://image.lexica.art/full_jpg/9af93040-d816-43c8-9e74-989e7b10f346',
                // 'https://image.lexica.art/full_jpg/5223e6e4-03d4-454c-b6ae-9bf5f3abc26d',
            ],
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
    mounted(){
    }
}