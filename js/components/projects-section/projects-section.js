import utilities from "../../utilities.js"
import store from '../../store.js'
export default {
    template: await utilities.getPage('./js/components/projects-section/projects-section.html'),
    // props:['title'],
    data(){
        return{
            store
        }
    }
    
}