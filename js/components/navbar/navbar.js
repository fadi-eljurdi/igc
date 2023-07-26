import utilities from "../../utilities.js"
import store from '../../store.js'
export default {
    template: await utilities.getPage('./js/components/navbar/navbar.html'),
    // props:['properties'],
    data(){
        return{
            store,
            utilities
        }
    },
    mounted() {
        // if (location.href.includes('/blogs') || location.href.includes('/team')|| location.href.includes('/privacy-policy') || location.href.includes('/terms')) {
        //     // document.querySelector('header').classList.add('bg-light')
        //     // document.querySelector('header').classList.remove('text-light')

        //     // document.querySelector('icon-bar').classList.add('bg-light')
        //     // document.querySelector('icon-bar').classList.remove('text-light')
        // }

        document.addEventListener('scroll',e => {
            // console.log(window.scrollY);
            if(window.scrollY >= 1) {
                document.querySelector('header').classList.add('position-fixed')
                document.querySelector('header').classList.add('top-0')
                document.querySelector('header').classList.add('start-0')
                document.querySelector('header').classList.add('z-2')
            }else {                
                document.querySelector('header').classList.remove('position-fixed')
                document.querySelector('header').classList.remove('top-0')
                document.querySelector('header').classList.remove('start-0')
                document.querySelector('header').classList.remove('z-2')
            }
        })

    }
}