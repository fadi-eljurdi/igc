import utilities from "../../utilities.js"
export default {
    template: await utilities.getPage('./js/components/blog/blog.html'),
    props:['blog'],
    data(){
        return{
            utilities
        }
    }
    
}