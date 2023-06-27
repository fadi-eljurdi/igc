import utilities from "../../utilities.js"
export default {
    template: await utilities.getPage('./js/components/email-form/email-form.html'),
    props:['email'],
    data(){
        return{
            subject:'',
            message:'',
            name:''
        }
    },
    computed:{
        link(){
            return `mailto:${this.email}?subject=${encodeURIComponent(this.subject)}&body=${encodeURIComponent('Name: '+this.name+'\n\n'+this.message)}`
        }
    }
    
}