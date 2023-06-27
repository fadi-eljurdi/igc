import store from './store.js'
import utilities from './utilities.js'

const app = Vue.createApp({
    data() {
        return {
            title: 'Spectrum',
            spinner: false,
            api: 'https://script.google.com/macros/s/AKfycbwM08bY_kyEOjhjRYpJm8Y3Lv-H-uhRPo3NhCvgcArs3c5whKWZHtjdmJe-mPVa7EfN/exec',
            store,
            utilities,
            translated:false,
            profile:{
                "contact": {
                    "email": "",
                    "number": "",
                    "whatsapp": "",
                    "linkedIn": "",
                    "address": "",
                    "logo": "",
                    "heading": "",
                    "bio": "",
                    "video": "",
                    "sHeading": "",
                    "sTagline": "",
                    "bHeading": "",
                    "bTagline": ""
                },
                "links": [
                    {
                        "index": "",
                        "text": "",
                        "id": "",
                        "url": ""
                    }
                ],
                "blogs": [
                    {
                        "index": "",
                        "date": "",
                        "id": "",
                        "title": "",
                        "description": "",
                        "thumbnail": "",
                        "url": ""
                    },
                ],
                "services": [
                    {
                        "index": "",
                        "date": "",
                        "id": "",
                        "title": "",
                        "description": "",
                        "thumbnail": "",
                        "url": ""
                    },
                ]
            }

        }
    },
    methods:{
        font(){
            if(document.querySelector('html').lang == 'ar'){
                //the page is already in arabic
                
                var translated = document.querySelector('#translated')
                translated.setAttribute('dir','ltr')
                translated.classList.add('bungee')
            }else{
                // the page is in english
                
                var translated = document.querySelector('#translated')
                translated.setAttribute('dir','rtl')
                translated.classList.add('arb')
            }
        },
        dir(){
            if(document.querySelector('html').lang == 'ar') return 'rtl'
            else return 'ltr'
            
        },
        async translate(){
            
            this.spinner = true
            const original = document.querySelector('#original');
            // console.log(original.innerHTML);
            var source = ()=>{
                if(this.dir() == 'rtl') return 'ar'
                return 'en'
            }
            var target = ()=>{
                if(this.dir() == 'rtl') return 'en'
                return 'ar'
            }
            var api = this.api
            api += `?translate=1`
            var res = await fetch(api,{
                method:"POST",
                headers:{
                    "Content-Type":"text/plain"
                },
                body:JSON.stringify({
                    text:original.innerHTML,
                    source:source(),
                    target:target()

                })
            })

            res = await res.json()
            console.log(res);
            this.font()
            translated.innerHTML = (this.utilities.fixClosingTags(res)).replaceAll(' & nbsp؛ ',' ')
            this.translated = true
            
            this.spinner = false


        },
        generateStars(STAR_COUNT){
            var randomNumber = (min, max) => {
                return Math.floor(Math.random() * (max - min + 1)) + min
            }
            
            // const STAR_COUNT = 50
            let result = ""
            for(let i = 0; i < STAR_COUNT; i++){
                result += `${randomNumber(-50, 50)}vw ${randomNumber(-50, 50)}vh ${randomNumber(0, 3)}px ${randomNumber(0, 3)}px #fff,`
            }
            console.log(result.substring(0, result.length - 1))
        },
        getProfile(){
            this.spinner = true
            fetch(this.api + '?getProfile=1').then(res => res.json()).then(res => {
                console.log(res);
                this.spinner = false
                this.profile = res
                this.store.profile = res
            }).catch(err => {
                console.log(err);
                alert('Network issues please refresh the page')
                location.reload()
            })
        }
    },
    mounted(){
        
        AOS.init();
        this.getProfile()
        if(document.querySelector('html').lang == 'ar'){
            if(document.getElementById('original')){
                document.getElementById('original').dir = 'rtl'
                document.getElementById('original').classList.add('arb')
            }
        }else{
            if(document.getElementById('original')){
                
                document.getElementById('original').dir = 'ltr'
                document.getElementById('original').classList.add('pop')
            }
        }
        
    },
    computed:{
        link(){
            return `mailto:${this.store.profile.contact.email}?subject=${encodeURIComponent(this.store.form.subject)}&body=${encodeURIComponent('Name: '+this.store.form.name+'\n\n'+this.store.form.message)}`
        }
    }
})


import swiper from './components/swiper/swiper.js'
app.component('swiper-container', swiper)

import title from './components/title/title.js'
app.component('title-section', title)

import navbar from './components/navbar/navbar.js'
app.component('navbar-section', navbar)

import hero from './components/hero/hero.js'
app.component('hero-section', hero)

import services from './components/services-section/services-section.js'
app.component('services-section', services)

import pot from './components/pot/pot.js'
app.component('pot', pot)

import projects from './components/projects-section/projects-section.js'
app.component('projects-section', projects)

import pagination from './components/pagination/pagination.js'
app.component('pagination', pagination)

import blogMedia from './components/blog-media/blog-media.js'
app.component('blog-media', blogMedia)

import checkAlso from './components/check-also/check-also.js'
app.component('check-also', checkAlso)

import blog from './components/blog/blog.js'
app.component('blog', blog)

import blogsSection from './components/blogs-section/blogs-section.js'
app.component('blogs-section', blogsSection)

import member from './components/member/member.js'
app.component('member', member)

import teamSection from './components/team-section/team-section.js'
app.component('team-section', teamSection)


import emailForm from './components/email-form/email-form.js'
app.component('email-form', emailForm)

import contact from './components/contact/contact.js'
app.component('contact-section', contact)

app.mount('#app')