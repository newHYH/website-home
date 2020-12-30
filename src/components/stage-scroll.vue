<template>
    <div class="stage-scroll-wrapper" ref="scrollCon">
        <div class="stage-scroll">
            <div class="scroll-text">
                <div class="title">
                    <h2>
                        出众体验
                        <br>
                        因人而“Yi”
                    </h2>
                </div>
            </div>
            <div class="stage-bg">
                <div class="bg">
                    <img src="../assets/home-8.png">
                </div>
                <div class="bg-mask" ref="opacityBg" :style="'opacity:'+opacity"></div>
            </div>
        </div>
        <div class="stage-text" ref="moveBox">
            <div class="main">
                <div class="text">
                    出色硬件性能结合出众人因交互，想不出彩都难。焕然一新的熄屏显示艺术主题，因人而⁠“艺”，更多惊喜；一镜到底的流畅动效，自然舒适的手势导航，声振一体的多感协同，因人而⁠“宜”，体验升级；智慧多窗，多屏协同，更多便捷操作，因人而⁠“易”，效率倍⁠增⁠。
                    <br>
                    <a class="linkto" href="https://consumer.huawei.com/cn/emui-11/" target="_blank">了解更多 EMUI 11 智慧功能 &gt;</a>
                </div>
            </div>
            <div class="g5"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'stage-scroll',
    props: {

    },
    data() {
        return {
            opacity:0,
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init(){
            window.addEventListener('scroll',this.handelScroll)
        },
        handelScroll(e){
            let opacityBg = this.$refs.opacityBg
            let top = window.pageYOffset
            let scrollCon = this.$refs.scrollCon.offsetTop
            let moveBox = this.$refs.moveBox.offsetTop
            let moveLang = top-(scrollCon-100)
            let maxLong = moveBox - moveLang
            if(moveLang>0 && moveLang < maxLong){
                this.opacity= (moveLang/maxLong)*0.75
            }
        }
    }
}
</script>
<style scoped lang=scss>
.stage-scroll-wrapper {
    height: 200vh;
    color: #fff;
    width: 100%;
    position: relative;
    z-index: 1;
}

.stage-scroll {
    position: sticky;
    height: calc(100vh - 88px);
    top: 88px;
    width: 100%;

    .scroll-text {
        height: 100%;
        width: calc(82.05128vw + 4.61538px);
        margin: 0 auto;
        position: absolute;
        top: 0;
        left: calc(8.97436vw + 2.0769px);
        z-index: 1;

        .title {
            position: absolute;
            top: 0;
            text-align: left;

            h2 {
                font-size: calc(2.05128vw + 40.61538px);
                font-weight: 700;
            }
        }
    }

    .stage-bg {
        font-size: 0;
        line-height: 0;
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;

        .bg {
            width: 100%;
            height: 100%;
            position: relative;

            img {
                min-width: 100%;
                position: absolute;
                left: 50vw;
                max-height: 100%;
                top: 0;
                margin-left: -50vw;
            }
        }

        .bg-mask {
            background-color: #000;
            position: absolute;
            top: 0;
            right: 0;
            bottom: -.5px;
            left: 0;
            opacity: 0;
        }
    }
}

.stage-text {
    position: absolute;
    bottom: 0;
    left: calc(8.97436vw + 2.0769px);
    transform: translateZ(0);
    z-index: 10;
    width: calc(82.05128vw + 4.61538px);
    margin: 0 auto;

    .g5 {
        height: calc(1.92308vw + 43.07692px);
    }

    .main {
        width: 67%;
        transform: translateY(1em);

        .text {
            text-align: left;
            font-size: calc(1.02564vw + 10.30769px);
            line-height: 1.5;

            a {
                color: #6aa2da;
                text-decoration: none;

                &:hover {
                    color: #ce0e2d;
                }

                &:link,
                &:visited {

                    text-decoration: none;
                    transition: color .2s ease-out;
                }
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .stage-scroll {
        height: calc(100vh - 96px);
        top: 96px;

        .scroll-text {

            .title {
                text-align: center;
                width: 100%;

                h2 {
                    font-size: calc(2.05128vw + 18.61538px);
                }
            }
        }
    }

    .stage-text {

        .main {
            width: 100%;

            .text {
                text-align: center;



            }
        }
    }
}

@media screen and (max-width: 750px) {}
</style>