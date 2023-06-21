import utilities from "../../utilities.js"
export default {
    template: await utilities.getPage('./js/components/check-also/check-also.html'),
    data(){
        return{
            utilities
        }
    },
    props:['blogs'],
    computed:{
        filteredBlogs(){
            // return this.blogs.length <= 8 ? this.blogs : this.blogs.slice(-8);
            return this.blogs.slice(-8).reverse()
        }
    }
    
}