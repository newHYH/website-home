<template>
    <div class="home">
        <div class="banner-box">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item, index) in swiperList" :key="index">
                        <img :src="item.url" />
                    </div>
                </div>
            </div>
        </div>

        <div class="image-box container">
            <img class="image" src="@/assets/home/home-img01.webp" />
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'

export default {
    name: 'Home',
    components: {
    },
    data() {
        return {
            swiperList: [
                {
                    url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa0.att.hudong.com%2F52%2F62%2F31300542679117141195629117826.jpg&refer=http%3A%2F%2Fa0.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614227454&t=5e42c49d70708d9761348e2f0c171d17'
                },
                {
                    url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa0.att.hudong.com%2F52%2F62%2F31300542679117141195629117826.jpg&refer=http%3A%2F%2Fa0.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614227454&t=5e42c49d70708d9761348e2f0c171d17'
                },
                {
                    url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa0.att.hudong.com%2F52%2F62%2F31300542679117141195629117826.jpg&refer=http%3A%2F%2Fa0.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614227454&t=5e42c49d70708d9761348e2f0c171d17'
                }
            ]
        }
    },
    computed: {
    },
    mounted() {
        this.setupSwiper()
    },
    methods: {
        goto(path){
            this.$router.push(path)
        },
        setupSwiper(){
            new Swiper('.swiper-container', {
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: true,
                },
                loop: true,
                slidesPerView : 1,
                slidesPerGroup : 1,
            })
        }
    }
}
</script>
<style scoped lang=scss>
@import "@/sass/common.scss";
@import '../../node_modules/swiper/css/swiper.css';

/* mobile phone */
@media screen and (min-width:320px) {
    .home {
        width: 100%;
        .banner-box{
            width: torem(1920);
            height: torem(992);
            .swiper-container{
                width: 100%;
                height: 100%;
                .swiper-wrapper{
                    width: 100%;
                    height: 100%;
                    .swiper-slide{
                        width: 100%;
                        height: 100%;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
        }

        .image-box{
            margin-top: torem(100);
        }
    }
}

/* ipad pro & PC */
@media screen and (min-width:1024px) {

}

/* PC & bigScreen*/
@media screen and (min-width:1200px) {

}
</style>