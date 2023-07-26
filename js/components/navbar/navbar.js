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
        if (location.href.includes('/blogs') || location.href.includes('/team')|| location.href.includes('/privacy-policy') || location.href.includes('/terms')) {
            // document.querySelector('header').classList.add('bg-light')
            // document.querySelector('header').classList.remove('text-light')

            // document.querySelector('icon-bar').classList.add('bg-light')
            // document.querySelector('icon-bar').classList.remove('text-light')
        }

        document.addEventListener('scroll',e => {
            // console.log(window.scrollY);
            if(window.scrollY >= 10) {
                // document.querySelector('header').classList.add('bg-light')
                // document.querySelector('header').classList.remove('text-light')

                // document.querySelector('icon-bar').classList.add('bg-light')
                document.querySelector('#icon-bar').classList.remove('text-light')
            }else {
                // document.querySelector('header').classList.remove('bg-light')
                // document.querySelector('header').classList.add('text-light')

                // document.querySelector('icon-bar').classList.remove('bg-light')
                document.querySelector('#icon-bar').classList.add('text-light')
            }
        })

    }
}