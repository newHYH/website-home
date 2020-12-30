<template>
    <div class="power-wrapper">
        <div class="box-top-span">
            <span>小憩一下 能量满满</span>
        </div>
        <div class="box-div">
            <img class="box-img" src="../assets/frame-n.png"/>
            <video class="box-video" src="../assets/screen-n-cn.webm" controls="controls" muted autoplay loop playsinline preload="none"></video>
        </div>
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
.power-wrapper{
    padding: torem(80) 0;
}
    .box-video{
        height: 100%!important;
        width: auto;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
    .box-img{
        height: auto;
        width: auto;
        margin: 0 auto;
        position: relative;
        z-index: 1;
    }
    .box-div{
        position: relative;
        overflow: hidden;
        background: #f4f3f3;
    }
    .box-top-span{
        width: 100%;
        height: 50px;
        font-size: 30px;
        font-family: PingFangSC-Semibold, PingFang SC;
        color: #333333;
        text-align: center;
        margin-bottom: 20px;
    }
@media screen and (min-width: 750px) {
    .box-top-span{
        width: 100%;
        height: 126px;
        font-size: 90px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #333333;
        line-height: 126px;
        text-align: left;
        padding-left: 120px;
        box-sizing: border-box;
    }
    video::-webkit-media-controls-fullscreen-button {
    display: none;
    }
    //播放按钮
    video::-webkit-media-controls-play-button {
        display: none;
    }
    //进度条
    video::-webkit-media-controls-timeline {
        display: none;
    }
    //观看的当前时间
    video::-webkit-media-controls-current-time-display{
        display: none;           
    }
    //剩余时间
    video::-webkit-media-controls-time-remaining-display {
        display: none;           
    }
    //音量按钮
    video::-webkit-media-controls-mute-button {
        display: none;           
    }
    video::-webkit-media-controls-toggle-closed-captions-button {
        display: none;           
    }
    //音量的控制条
    video::-webkit-media-controls-volume-slider {
        display: none;           
    }
    //所有控件
    video::-webkit-media-controls-enclosure{
        display: none;
    }
    .box-video{
        height: 100%!important;
        width: auto;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
    .box-img{
        height: var(--gg-height-box);
        width: auto;
        margin: 0 auto;
        position: relative;
        z-index: 1;
    }
    .box-div{
        position: relative;
        overflow: hidden;
    }
    .box-box{
        /* margin-top: 50px;
        margin-bottom: 50px; */
    }

}
</style>