<template>
    <div class="stage-scroll-wrapper">
        <div class="stage-scroll">
            <div class="scroll-text">
            <div class="title">
                出众体验
                <br>
                因人而“Yi”
            </div>
        </div>
            <div class="stage-bg">
                <div class="bg">
                    <img src="../assets/home-8.png">
                </div>
                <div class="bg-mask"></div>
            </div>
        </div>
        <div class="stage-text">
            <div class="main">
                <div class="text">
                    出色硬件性能结合出众人因交互，想不出彩都难。焕然一新的熄屏显示艺术主题，因人而⁠“艺”，更多惊喜；一镜到底的流畅动效，自然舒适的手势导航，声振一体的多感协同，因人而⁠“宜”，体验升级；智慧多窗，多屏协同，更多便捷操作，因人而⁠“易”，效率倍⁠增⁠。
                    <br>
                    <a class="linkto" href="https://consumer.huawei.com/cn/emui-11/" target="_blank">了解更多 EMUI 11 智慧功能 &gt;</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'stage-scroll',
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
.stage-scroll-wrapper{
    height:200vh;
    color: #fff;
    width: 100%;
    position: relative;
}
.stage-scroll{
    position: sticky;
    height: calc(100% - 88px);
    top: 88px;
    width: 100%;
    .scroll-text{
        height: 100%;
        position: relative;
        z-index: 2;
        width: calc(82.05128vw + 4.61538px);
        margin: 0 auto;
    }
    .stage-bg{
        position: absolute;
        width:100%;
        height:100%;
        z-index: 1;
        top:0;
        left: 0;
        .bg{
            width: 100%;
            height:100%;
        }
    }
}
</style>