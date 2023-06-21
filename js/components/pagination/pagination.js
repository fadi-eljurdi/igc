import utilities from "../../utilities.js"
export default {
    template: await utilities.getPage('./js/components/pagination/pagination.html'),
    data(){
        return{
            utilities
        }
    }
}