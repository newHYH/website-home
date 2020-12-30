<template>
    <!-- 直接使用华为的视频链接，不使用本地视频。 -->
    <!-- https://consumer.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/pdp/phones/mate40-pro/images/pop-up-video/tvc-cn.mp4 -->
    <div class="out-container">
        <div class="inner-container">
            <div class="little-video">
                <picture>
                    <source type="image/webp" media="(min-width: 1920px)" data-srcset="../assets/video-comp/n@2x.webp" srcset="../assets/video-comp/n@2x.webp">
                    <source type="image/webp" media="(min-width: 1024px)" data-srcset="../assets/video-comp/n@2x.webp" srcset="../assets/video-comp/n@2x.webp">
                    <source type="image/webp" data-srcset="../assets/video-comp/n.webp" srcset="../assets/video-comp/n.webp">
                    <img data-src="../assets/video-comp/n.png" src="../assets/video-comp/n.png" alt="HUAWEI Mate 40 Pro">
                </picture>
                <video class="gif" muted="" autoplay="" loop="" playsinline="" webkit-playsinline="true" preload="none" x-webkit-airplay="true" x5-video-player-type="h5" x5-video-player-fullscreen="true"
                       data-poster="../assets/video-comp/teaser-cn.jpg"
                       data-poster-xs="../assets/video-comp/teaser-cn-xs.jpg"
                       poster="../assets/video-comp/teaser-cn.jpg">
                    <source type="video/webm" data-src="../assets/video-comp/teaser-cn.webm"
                                              data-src-xs="../asstes/video-comp/teaser-cn-xs.webm"
                                              src="../assets/video-comp/teaser-cn.webm">
                    <source type="video/mp4" data-src="../assets/video-comp/teaser-cn.mp4"
                                             data-src-xs="../assets/video-comp/teaser-cn-xs.mp4"
                                             src="../assets/video-comp/teaser-cn.mp4">
                </video>
                <div class="play-btn" @click="play"></div>
            </div>
            <div class="space-box"></div>
            <div class="font-box">
                目之所及，是对已知的追求。<br>心之所念，是对未知的探索。<br>超越，视界尽头。突破，想象边界。<br>HUAWEI Mate 40 系列，跃见非⁠凡。
            </div>
        </div>
    </div>
    <div class="full-screen-video" :class="playing ? 'playing' : ''">
        <video ref="fullVideo" controls="" preload="none" poster="../assets/video-comp/tvc-cn.jpg">
            <source type="video/webm" src="../assets/video-comp/tvc-cn.webm">
            <source type="video/mp4" src="../assets/video-comp/tvc-cn.mp4">
        </video>
        <div class="close-btn" @click="close"></div>
    </div>

    <div class="block"></div>
</template>

<script>
export default {
    name: 'video-phone',
    props: {
        
    },
    data() {
        return {
            imgDomain : 'https://consumer.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/pdp/phones/mate40-pro/images/',
            playing: false
        }
    },
    mounted() {
    },
    methods: {
        play(){
            this.playing = true
            this.$refs.fullVideo.currentTime = 0
            this.$refs.fullVideo.play()
        },
        close(){
            this.$refs.fullVideo.pause()
            this.playing = false
        }
    }
}
</script>

<style scoped lang=scss>
.out-container{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 10;
    .inner-container{
        width: calc(82.05128vw + 4.61538px);
        margin: 0 auto;
        text-align: center;
        .little-video{
            position: relative;
            picture{
                position: relative;
                display: block;
                z-index: 3;
                /* padding-top: 46.7639%; */
                img{
                    width: 100%;
                }
            }
            .gif{
                position: absolute;
                width: 95.4%;
                height: 99%;
                left: 2.2%;
                top: .6%;
                -o-object-fit: cover;
                object-fit: cover;
                z-index: 1;
                border-radius: 2.2vw;
            }
            .play-btn{
                position: absolute;
                top: 50%;
                left: 50%;
                cursor: pointer;
                margin: -32px 0 0 -32px;
                z-index: 20;
                width: 64px;
                height: 64px;
                background: url(../assets/video-comp/video-playBtn.svg) no-repeat;
                background-size: contain;
            }
        }
        .space-box{
            height: calc(.96154vw + 11.53846px);
        }
        .font-box{
            font-size: calc(1.02564vw + 12.30769px);
            margin-top: .8em;
            margin-bottom: .8em;
            line-height: 1.6em;
            color: #1e2022;
            font-feature-settings: 'calt' 1,'liga' 1;
        }
    }
}
@media (min-aspect-ratio: 2001/3000) and (min-height: 750px){
    .inner-container{
        max-width: 100vh;
    }
}
@media (max-aspect-ratio: 1/1) {
    .inner-container{
        width: calc(82.05128vw + 4.61538px);
    }
}
.full-screen-video{
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 999999!important;
    background: rgba(0,0,0,.8);
    display: none;
    &.playing{
        display: block;
    }
    video{
        position: absolute;
        max-width: 90%;
        max-height: 90vh;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        box-shadow: 0 20px 40px rgba(0,0,0,.5);
    }
    .close-btn{
        position: absolute;
        width: 48px;
        height: 48px;
        color: #211d1e;
        line-height: 48px;
        border-radius: 24px;
        right: 24px;
        top: 24px;
        text-decoration: none;
        transform: scale(.9,.9);
        transition: transform .2s ease;
        z-index: 100;
        background: url(../assets/video-comp/close-btn.svg) no-repeat;
        background-size: contain;
        cursor: pointer;
        &:hover{
            transform: scale(1,1);
        }
    }
}
</style>