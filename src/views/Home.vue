<template>
    <div class="home">
        <div class="banner-box">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="@/assets/home/banner_20.png" />
                    </div>
                    <div class="swiper-slide">
                        <img src="@/assets/home/banner_20plus.png" />
                    </div>
                </div>
            </div>

            <div class="banner-btn btn-left" ></div>
            <div class="banner-btn btn-right" ></div>

            <div class="banner-pagination"></div>
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
                    delay: 3500,
                    stopOnLastSlide: false,
                    disableOnInteraction: true,
                },
                loop: true,
                slidesPerView : 1,
                slidesPerGroup : 1,
                navigation: {
                    nextEl: '.btn-right',
                    prevEl: '.btn-left',
                },
                pagination: {
                    el: '.banner-pagination',
                    bulletClass: 'banner-bullets'
                }
            })
        },
        bannerToLf(){},
        bannerToRt(){}
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
            position: relative;
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
            .banner-btn{
                position: absolute;
                background: url('../assets/home/banner-btn.png') no-repeat;
                background-size: cover;
                width: torem(42);
                height: torem(79);
                top: torem(455);
                z-index: 10;
                cursor: pointer;
            }
            .btn-left{
                left: torem(30);
                transform: rotate(180deg);
            }
            .btn-right{
                right: torem(30);
            }
            .banner-pagination{
                position: absolute;
                left: 0;
                bottom: torem(40);
                width: 100%;
                height: torem(4);
                z-index: 10;
                display: flex;
                justify-content: center;
            }
            .banner-bullets{
                display: block;
                width: torem(114);
                height: torem(4);
                margin: 0 torem(8.5);
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