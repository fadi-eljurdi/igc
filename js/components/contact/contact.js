import utilities from "../../utilities.js"
import store from '../../store.js'
export default {
    template: await utilities.getPage('./js/components/contact/contact.html'),
    data(){
        return{
            store,
            utilities,
            links:[
                {
                    title:' General Content Development Consultancy and Management Services',
                    url:`${utilities.env('/#services')}`
                },
                {
                    title:'Gaming Design and Development Consultancy and Management Services',
                    url:`${utilities.env('/#services')}`
                },
                {
                    title:'Content and Gaming IP Delivery and Incubation Services',
                    url:`${utilities.env('/#services')}`
                }
            ],
            checkAlso:[
                // {
                //     title:'Jurdilaw.com',
                //     url:`https://jurdilaw.com`
                // },
                // {
                //     title:'Jurdiconsult.media',
                //     url:`https://jurdiconsult.media`
                // },
                {
                    title:'Our Projects',
                    url:`${utilities.env('/#projects')}`
                },
                {
                    title:'Terms and conditions',
                    url:`${utilities.env('/terms.html')}`
                },
                {
                    title:'Privacy policy',
                    url:`${utilities.env('/privacy-policy.html')}`
                },
            ],
        }
    },
    
}