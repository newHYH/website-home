<template>
    <div class="mag-scroll-wrapper">
        <div class="mag-scroll">
            <div class="title">
                一眼相识 瞬间倾心
            </div>
            <div class="scroll-wrapper" ref="scroll">
                    <canvas class="canvas" ref="canvas" :width="canvasWidth" :height="canvasHeight"></canvas>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'mag-scroll',
    props: {

    },
    data() {
        return {
            canvasWidth: 0,
            canvasHeight: 0,
        }
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            this.canvasHeight = this.$refs.scroll.offsetHeight;
            this.canvasWidth = this.$refs.scroll.offsetWidth;
        }
    }
}
</script>
<style scoped lang=scss>
@import "@/sass/common.scss";
.mag-scroll-wrapper{
    height:200vh;
    position: relative;
    z-index: 1;
}
.mag-scroll {
    height: calc(100vh - 88px);
    position: sticky;
    top: 88px;
    width: 100%;
    display: flex;
    flex-direction: column;

    .title {
        font-size: torem(90);
        text-align: right;
        font-weight: 700;
    }
    .scroll-wrapper{
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
         position: relative;
        flex:1;
    }
    .canvas{
        position: absolute;
        transform-style: preserve-3d;
        width:100%;
        height:calc(1080 / 1920 * 100vw);
    }
}
</style>