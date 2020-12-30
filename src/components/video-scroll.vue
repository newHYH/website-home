<template>
    <div class="video-scroll">
        <div class="video-title">看到 听到 触到 意想不到</div>
        <video class="ggVideo" muted autoplay loop playsinline
               webkit-playsinline="true"
               preload="none"
               x-webkit-airplay="true"
               x5-video-player-type="h5"
               x5-video-player-fullscreen="true">
            <source type="video/webm" src="../assets/o.webm">
            <source type="video/mp4" src="../assets/o.mp4">
        </video>
    </div>
</template>

<script>
    export default {
        name: "video-scroll"
    }
</script>

<style scoped lang="scss">
    @import "@/sass/common.scss";

    .video-scroll{
        width: 100%;
        background: #000;
        .video-title{
            padding: torem(32) 0;
            font-size: torem(72);
            font-weight: 600;
            color: #FFFFFF;
            line-height: torem(100);
            text-align: center;
        }
        video{
            width: 100%;
            height: 100%;
        }
    }
</style>