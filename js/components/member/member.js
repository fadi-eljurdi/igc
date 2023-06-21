import utilities from "../../utilities.js"
export default {
    template: await utilities.getPage('./js/components/member/member.html'),
    props:['title','src'],
    
}