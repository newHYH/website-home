<template>
    <div class="home">
        <HeaderA />
        <div class="banner-box">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img @click="goto('product1')" src="@/assets/20p.png" />
                    </div>
                    <div class="swiper-slide">
                        <img @click="goto('product2')" src="@/assets/20.png" />
                    </div>
                </div>
            </div>
            <div class="banner-btn btn-left"></div>
            <div class="banner-btn btn-right"></div>
            <div class="banner-pagination"></div>
        </div>
        <!-- <div class="image-box container">
            <img class="image" src="@/assets/home/home-img01.webp" />
        </div> -->
        <div class="title-box">U-MAGIC 发布会</div>
        <div class="video-box">
            <div class="fake-video">
                <video ref="video" class="img video" :controls="controls" poster="../assets/home/fake-video.png" preload="auto" webkit-playsinline="true" x-webkit-airplay="allow" x5-video-player-type="h5" x5-video-player-fullscreen="true" x5-video-orientation="portraint" style="object-fit:fill">
                    <source src="http://www.u-magic.cn/images/fbh300wkx.mp4" type="video/mp4">
                    您的浏览器不支持 HTML5 video 标签。
                </video>
                <div class="play-btn" v-show="!controls" @click="handlePlay()"></div>
            </div>
        </div>
        <Footer />
        <ReturnTop />
    </div>
</template>
<script>
import Swiper from 'swiper'
import HeaderA from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import ReturnTop from '@/components/return-top.vue';

export default {
    name: 'Home',
    components: {
        HeaderA,
        Footer,
        ReturnTop
    },
    data() {
        return {
            video: null,
            controls: false,
        }
    },
    computed: {},
    mounted() {
        this.setupSwiper()
        this.$nextTick(() => {
            this.video = this.$refs.video
        })

    },
    methods: {
        goto(path) {
            this.$router.push(path)
        },
        setupSwiper() {
            new Swiper('.swiper-container', {
                autoplay: {
                    delay: 3500,
                    stopOnLastSlide: false,
                    disableOnInteraction: true,
                },
                loop: true,
                slidesPerView: 1,
                slidesPerGroup: 1,
                navigation: {
                    nextEl: '.btn-right',
                    prevEl: '.btn-left',
                },
                pagination: {
                    el: '.banner-pagination',
                    bulletElement: 'div',
                    bulletClass: 'banner-bullet',
                    bulletActiveClass: 'banner-active'
                }
            })
        },
        bannerToLf() {},
        bannerToRt() {},
        handlePlay() {
            this.video.play();
            this.controls = true
        }
    }
}
</script>

<style lang=scss>
@import "@/sass/common.scss";
/* 覆盖swiper的样式 */
.banner-bullet {
    width: torem(114);
    height: torem(4);
    margin: 0 torem(9);
    background: #fff;
    opacity: 0.6;
}
.banner-active{
    width: torem(114);
    height: torem(4);
    margin: 0 torem(9);
    background: #fff;
    opacity: 1;
}
</style>
<style scoped lang=scss>
@import "@/sass/common.scss";
@import '../../node_modules/swiper/css/swiper.css';

/* mobile phone */

.home {
    width: 100%;
    box-sizing: border-box;

    .banner-box {
        width: 100%;
        height: torem(992);
        position: relative;

        &:hover{
            .banner-btn {
                display: block;
            }
        }

        .swiper-container {
            width: 100%;
            height: 100%;

            .swiper-wrapper {
                width: 100%;
                height: 100%;

                .swiper-slide {
                    width: 100%;
                    height: 100%;

                    img {
                        width: 100%;
                        height: 100%;
                        cursor: pointer;
                    }
                }
            }
        }

        .banner-btn {
            position: absolute;
            background: url('../assets/home/banner-btn.png') no-repeat;
            background-size: cover;
            width: torem(60);
            height: torem(60);
            top: torem(455);
            z-index: 10;
            cursor: pointer;
            display: none;
        }

        .btn-left {
            left: torem(30);
            transform: rotate(180deg);
        }

        .btn-right {
            right: torem(30);
        }

        .banner-pagination,
        .swiper-pagination-bullets {
            position: absolute;
            left: 0;
            bottom: torem(40);
            width: 100%;
            height: torem(4);
            z-index: 10;
            display: flex;
            justify-content: center;
        }
        .banner-bullet {
            width: torem(114);
            height: torem(4);
            margin: 0 torem(9);
            background: #fff;
            opacity: 0.6;
        }
        .banner-active{
            width: torem(114);
            height: torem(4);
            margin: 0 torem(9);
            background: #fff;
        }
    }

    .image-box {
        margin-top: torem(100);
    }

    .title-box {
        width: 100%;
        margin: torem(77) 0 torem(16);
        font-size: torem(48);
        font-weight: 400;
        color: #333333;
        line-height: torem(90);
    }

    .video-box {
        max-width: 1278px;
        margin: 0 auto;
        margin-bottom: 50px;
        .video {
            width: 100%;
        }

        .fake-video {
            position: relative;

            img {
                width: 100%;
                height: auto;
            }

            .play-btn {
                position: absolute;
                width: 96px;
                height: 96px;
                background: url(../assets/home/video-play-btn.png) no-repeat;
                background-size: cover;
                top: 50%;
                left: 50%;
                margin: -48px 0 0 -48px;
                cursor: pointer;
            }
        }
    }
}

@media screen and (max-width:1280px) {
    .home .video-box {
        max-width: 1200px;
        padding: 0 30px;
    }

}

@media screen and (max-width:750px) {
    .home .banner-box .banner-btn {
        display: block;
        width: 30px;
        height: 30px;
        top: torem(455);
        z-index: 10;
        cursor: pointer;
    }
    .home .video-box .fake-video .play-btn {
        width: 48px;
        height: 48px;
        margin: -24px 0 0 -24px;
    }
}
</style>