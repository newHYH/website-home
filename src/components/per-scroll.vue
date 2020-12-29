<template>
    <div class="per-scroll">
        <div class="container-scroll" ref="scrollCon">
            <div class="animate-wrap">
                <div class="animate-text">
                    <div class="title-text">
                        这颗芯 震撼人心
                    </div>
                </div>
            </div>
            <div class="animate-bg-mask" ref="opacityBg">
                <div class="content-text">
                    麒麟 9000E 5G SoC 旗舰芯片，以高能，突破可能。领先的 5 nm 制程工艺，性能跨越式升级，功耗大幅降低，让你体验震撼的超前速度。智慧体验全面进化，带你先⁠见⁠未⁠来⁠。
                </div>
            </div>
        </div>
        <div class="video-scroll"  ref="scrollVideo">
            <div class="video-title">看到 听到 触到 意想不到</div>
            <video class="ggVideo" muted autoplay loop playsinline
                   webkit-playsinline="true"
                   preload="none"
                   x-webkit-airplay="true"
                   x5-video-player-type="h5"
                   x5-video-player-fullscreen="true">
                <source type="video/webm" src="../assets/o.mp4">

            </video>
        </div>
    </div>
</template>

<script>
export default {
    name: 'per-scroll',
    props: {
        
    },
    data() {
        return{
        }
    },
    mounted() {
        let scrollCon = this.$refs.scrollCon
        let opacityBg = this.$refs.opacityBg
        scrollCon.addEventListener('scroll',function (e) {
            let scrollTop = e.target.scrollTop
            let opacityAdd = (scrollTop/1080)*0.75
            opacityBg.style.background = 'rgba(0,0,0,'+opacityAdd+')'
        })
    },
    methods: {
        
    }
}
</script>

<style scoped lang=scss>
    @import "@/sass/common.scss";
    .per-scroll{
        width: 100%;
        padding: 0;
        margin: 0;
        overflow: hidden;
        .container-scroll{
            width: 100%;
            height: 100vh;
            overflow: scroll;
            position: relative;
            background: url("../assets/animate-bg.webp") no-repeat;
            background-size: 100% 100%;
            .animate-wrap{
                position: sticky;
                top: 0;
                z-index: 12;
                .animate-text{
                    .title-text{
                        font-size: torem(90);
                        font-weight: 600;
                        color: #FFFFFF;
                        line-height: torem(126);
                        text-align: left;
                        padding-top: torem(53);
                        padding-left: torem(126);
                    }
                }
            }
            .animate-bg-mask{
                width: 100%;
                height: 200vh;
                position: absolute;
                top: 0;
                left: 0;
                z-index: 10;
                .content-text{
                    width: 60%;
                    /*height: 30vh;*/
                    top: 160vh;
                    left: 0;
                    z-index: 11;
                    position: absolute;
                    font-size: torem(45);
                    font-weight: 600;
                    color: #FFFFFF;
                    /*line-height: torem(126);*/
                    text-align: left;
                    padding-top: torem(53);
                    padding-left: torem(126);
                }
            }
        }
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
    }
</style>