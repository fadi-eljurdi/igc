import utilities from "../../utilities.js"
import store from '../../store.js'
export default {
    template: await utilities.getPage('./js/components/hero/hero.html'),
    data(){
        return{
            store,
            utilities,
            slides:[

                // 'https://image.lexica.art/full_jpg/bfc6af3f-4473-4a78-8543-ee98f74361b3',
                // 'https://image.lexica.art/full_jpg/9af93040-d816-43c8-9e74-989e7b10f346',
                // 'https://image.lexica.art/full_jpg/5223e6e4-03d4-454c-b6ae-9bf5f3abc26d',
                

                // 'https://media.istockphoto.com/id/1408716658/photo/landing-strip-spaceship-interior-3d-rendering.jpg?s=612x612&w=0&k=20&c=9CnFu6nLuSrnJG1Gvs2ZB7spO8AMCmvwmgjS0mud2eA=',
                // 'https://media.istockphoto.com/id/1408716657/photo/landing-strip-spaceship-interior-3d-rendering.jpg?s=612x612&w=0&k=20&c=TrFEYAkoprA81A0eMfQH3n6oKhDO0ooD0lEx00nD_Hg=',
                // 'https://media.istockphoto.com/id/883669470/photo/inside-of-space-station-with-open-doors.jpg?s=612x612&w=0&k=20&c=9fVkpdJ3WthRJ-gh-9Qt9-H2mhMzjYgy3fMoN2F1u_w=',
                // 'https://media.istockphoto.com/id/1400239395/photo/3d-rendering-science-fiction-space-cockpit.jpg?s=612x612&w=0&k=20&c=Z7AuoEgQC2INMJ-QCfKChS62edKImQ0l6cO0gwA3fJs=',
                // 'https://media.istockphoto.com/id/1430721451/vector/abstract-dark-blue-modern-futuristic-science-technology-hi-tech-digital-abstract-dark-blue.jpg?s=612x612&w=0&k=20&c=l-Qff2GCjDOSILozZGey1yudRIAOgv_Cg64k5os4tos='

                // 'https://image.lexica.art/full_jpg/53190268-b1ea-47bc-88e9-39e406bb707d',
                // 'https://image.lexica.art/full_jpg/5a2fdd00-c5a0-4514-8215-01a7c11aef28',
                // 'https://image.lexica.art/full_jpg/234d1659-4062-4400-9f7d-f896c1e662d5',
                // 'https://image.lexica.art/full_jpg/feb2e16d-e0ab-4769-a247-e2923426d92f',
                // 'https://image.lexica.art/full_jpg/b97506ec-02fc-4b0d-8a66-a6c9a058c958'

                // 'https://media.istockphoto.com/id/1470207022/photo/3d-rendering-empty-metal-podium-with-blue-neon-light-for-product-display-sci-fi-scene.jpg?s=2048x2048&w=is&k=20&c=wCgcJL5yjvmtPi223g2Aec_rp_MFnmgnq9OlFhtQQqw=',
                'https://media.istockphoto.com/id/941866656/photo/3d-illustration-of-an-infinity-knot-reflecting-a-warping-universe.jpg?s=2048x2048&w=is&k=20&c=paozVaVnK6LJaeYAnB-0bnPKGT9qGXGgh5hLiiR8Dls=',
                // 'https://media.istockphoto.com/id/528364725/photo/ladder-to-hole-in-night-sky-reveals-day-time-skies.jpg?s=2048x2048&w=is&k=20&c=0VwDYIKyC8wXAwxwFshE3aApQjyFdfhDpw1m0IestY8=',
                // 'https://incugamecon.myshopify.com/cdn/shop/files/space_soldier_1.jpg?v=1683134138&width=1920',
                // 'https://incugamecon.myshopify.com/cdn/shop/files/robot_team_meeting.jpg?v=1683134249&width=1920',
                // 'https://incugamecon.myshopify.com/cdn/shop/files/team_of_robot_game_designers_1.jpg?v=1683134930&width=1920'
            ],
            swiperInit:{
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                loop:true,
                effect:'fade',
                grabCursor: true,
                cubeEffect: {
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                },
            }
        }
    },
    computed:{
        getYoutubeId(){
            // console.log(utilities.getYouTubeId(this.store.profile.contact.video));
            return utilities.getYouTubeId(this.store.profile.contact.video)
        }
    },
    mounted(){
    }
}