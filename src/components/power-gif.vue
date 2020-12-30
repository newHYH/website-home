<template>
    <div class="space-block"></div>

    <div class="font-container">
        <h2>小憩一下 能量满满</h2>
        <div class="space-bottom"></div>
    </div>

    <div class="out-container">
        
        
        <video muted="" autoplay="" loop="" playsinline="" webkit-playsinline="true" preload="none" x-webkit-airplay="true" x5-video-player-type="h5" x5-video-player-fullscreen="true"
               data-poster="../assets/power-comp/screen-o-cn.jpg" data-poster-xs="../assets/power-comp/screen-o-cn-xs.jpg" poster="../assets/power-comp/screen-o-cn.jpg">
            <source type="video/webm" data-src="../assets/power-comp/screen-o-cn.webm" data-src-xs="../assets/power-comp/screen-o-cn-xs.webm" src="../assets/power-comp/screen-o-cn.webm">
            <source type="video/mp4" data-src="../assets/power-comp/screen-o-cn.mp4" data-src-xs="../assets/power-comp/screen-o-cn-xs.mp4" src="../assets/power-comp/screen-o-cn.mp4">
        </video>

        <picture>
            <source type="image/webp" media="(min-width: 1920px)" data-srcset="../assets/power-comp/frame-o@2x.webp" srcset="../assets/power-comp/frame-o@2x.webp">
            <source type="image/webp" media="(min-width: 1024px)" data-srcset="../assets/power-comp/frame-o@2x.webp" srcset="../assets/power-comp/frame-o@2x.webp">
            <source type="image/webp" data-srcset="../assets/power-comp/frame-o.webp" srcset="../assets/power-comp/frame-o.webp">
            <img data-src="../assets/power-comp/frame-o.png" src="../assets/power-comp/frame-o.png">
        </picture>
    </div>
</template>

<script>
export default {
    name: 'power-gif',
    props: {
        
    },
    data() {
        return{
        }
    },
    mounted() {
    },
    methods: {
        
    }
}
</script>

<style scoped lang=scss>
@import "@/sass/common.scss";
.space-block{
    height: calc(6.41026vw + 76.92308px)
}
.font-container{
    width: calc(82.05128vw + 4.61538px);
    margin: 0 auto;
    h2{
        font-size: calc(2.05128vw + 40.61538px);
        font-weight: 700;
        line-height: 1.25em;
        margin: 0;
    }
    .space-bottom{
        height: calc(.96154vw + 11.53846px)
    }
}
.out-container{
    width: calc(82.05128vw + 4.61538px);
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    picture{
        display: block;
        background: #f4f3f3
        img{
            height: 70vh;
            width: auto;
            margin: 0 auto;
            position: relative;
            z-index: 10;
        }
    }
    video{
        height: 100%!important;
        width: auto;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: 9;
    }
}
@media (min-aspect-ratio: 1001/1000){
    .out-container {
        width: calc(82.05128vw + 4.61538px);
        margin: 0 auto;
    }
}
@media (max-aspect-ratio: 1/1){
    .out-container {
        width: 100%;
        picture{
            img{
                height: auto!important;
                width: 100%;
                margin: 0 auto;
                position: relative;
                z-index: 10;
            }
        }
    }
}

</style>