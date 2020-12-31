<template>
    <div class="phone-wrapper">
        <Header />
        <div class="phone-scroll">
            <kvLoader />
            <videoPhone />
            <div class="g7"></div>
            <div class="nav-layout">
                <div class="nav-wrapper" :class="{'white':index==2|| index==3 || index==5 || index==6}">
                    <div :class="{'active':index ==1 }" class="link" @click="goLink(1)">
                        <svg>
                            <circle cx="9" cy="9" r="8" :style="'stroke-dashoffset: '+per1"></circle>
                        </svg>
                        <span>设计</span>
                    </div>
                    <div :class="{'active':index ==2 }" class="link" @click="goLink(2)">
                        <svg>
                            <circle cx="9" cy="9" r="8" :style="'stroke-dashoffset: '+per2"></circle>
                        </svg>
                        <span>性能</span>
                    </div>
                    <div :class="{'active':index ==3 }" class="link" @click="goLink(3)">
                        <svg>
                            <circle cx="9" cy="9" r="8" :style="'stroke-dashoffset: '+per3"></circle>
                        </svg>
                        <span>影像</span>
                    </div>
                    <div :class="{'active':index ==4 }" class="link" @click="goLink(4)">
                        <svg>
                            <circle cx="9" cy="9" r="8" :style="'stroke-dashoffset: '+per4"></circle>
                        </svg>
                        <span>续航</span>
                    </div>
                    <div :class="{'active':index ==5 }" class="link" @click="goLink(5)">
                        <svg>
                            <circle cx="9" cy="9" r="8" :style="'stroke-dashoffset: '+per5"></circle>
                        </svg>
                        <span>体验</span>
                    </div>
                    <div :class="{'active':index ==6 }" class="link" @click="goLink(6)">
                        <svg>
                            <circle cx="9" cy="9" r="8" :style="'stroke-dashoffset: '+per6"></circle>
                        </svg>
                        <span>安全</span>
                    </div>
                </div>
                <div class="layout-wrapper">
                    <div class="column" id="col1" ref="col1">
                        <magScroll />
                    </div>
                    <div class="column" id="col2" ref="col2">
                        <perScroll />
                        <videoScroll />
                    </div>
                    <div class="column" id="col3" ref="col3">
                        <cameraScroll />
                    </div>
                    <div class="column" id="col4" ref="col4">
                        <powerGif />
                    </div>
                    <div class="column" id="col5" ref="col5">
                        <stageScroll />
                    </div>
                    <div class="column" id="col6" ref="col6">
                        <safeBox />
                    </div>
                </div>
            </div>
            <textBox />
        </div>
        <Footer />
    </div>
</template>
<script>
import Header from '@/components/header.vue';
import kvLoader from '@/components/kv-loader.vue';
import videoPhone from '@/components/video-phone.vue';
import magScroll from '@/components/mag-scroll.vue';
import perScroll from '@/components/per-scroll.vue';
import videoScroll from '@/components/video-scroll.vue';
import cameraScroll from '@/components/camera-scroll.vue';
import powerGif from '@/components/power-gif.vue';
import stageScroll from '@/components/stage-scroll.vue';
import safeBox from '@/components/safe-box.vue';
import textBox from '@/components/text-box.vue';
import Footer from '@/components/footer.vue';

export default {
    name: 'Home',
    components: {
        Header,
        Footer,
        kvLoader,
        videoPhone,
        magScroll,
        perScroll,
        videoScroll,
        cameraScroll,
        powerGif,
        stageScroll,
        safeBox,
        textBox
    },
    data() {
        return {
            index: 0,
            per1: 0,
            per2: 0,
            per3: 0,
            per4: 0,
            per5: 0,
            per6: 0,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        goLink(index) {
            let anchor = this.$el.querySelector('#col' + index);
            console.log(window.pageYOffset)
            this.index = index
            anchor.scrollIntoView()
        },
        handleScroll(event) {
            let top1 = this.$refs.col1.offsetTop;
            let top2 = this.$refs.col2.offsetTop;
            let top3 = this.$refs.col3.offsetTop;
            let top4 = this.$refs.col4.offsetTop;
            let top5 = this.$refs.col5.offsetTop;
            let top6 = this.$refs.col6.offsetTop;
            let height1 = this.$refs.col1.offsetTop + this.$refs.col1.offsetHeight - 1
            let height2 = this.$refs.col2.offsetTop + this.$refs.col2.offsetHeight - 1
            let height3 = this.$refs.col3.offsetTop + this.$refs.col3.offsetHeight - 1
            let height4 = this.$refs.col4.offsetTop + this.$refs.col4.offsetHeight - 1
            let height5 = this.$refs.col5.offsetTop + this.$refs.col5.offsetHeight - 1
            let height6 = this.$refs.col6.offsetTop + this.$refs.col6.offsetHeight - 1
            let scrollTop = window.pageYOffset + 96
            if (scrollTop >= top1 && height1 > scrollTop) {
                this.index = 1
                this.per1 = (1 - (scrollTop-top1) / (height1 - top1)) * 49
            } else if (scrollTop >= top2 && height2 >= scrollTop) {
                this.index = 2
                this.per2 = (1 - (scrollTop -top2) / (height2 - top2)) * 49
            } else if (scrollTop >= top3 && height3 > scrollTop) {
                this.index = 3
                this.per3 = (1 - (scrollTop -top3) / (height3 - top3)) * 49
            } else if (scrollTop >= top4 && height4 > scrollTop) {
                this.index = 4
                this.per4 = (1 - (scrollTop -top4) / (height4 - top4)) * 49
            } else if (scrollTop >= top5 && height5 > scrollTop) {
                this.index = 5
                this.per5 = (1 - (scrollTop-top5) / (height5 - top5)) * 49
            } else if (scrollTop >= top6 && height6 > scrollTop) {
                this.index = 6
                this.per6 = (1 - (scrollTop-top6 )/ (height6 - top6)) * 49
            }else{
                this.index = 0;
            }
        }
    }
}
</script>
<style scoped lang=scss>
@import "@/sass/common.scss";

.g7 {
    height: calc(6.41026vw + 76.92308px);
}

.nav-layout {
    .nav-wrapper {
        display: flex;
        position: sticky;
        left: 0;
        width: calc(8.97436vw + -2.30769px);
        top: 160px;
        margin-bottom: 60px !important;
        height: 70vh;
        height: calc(100vh - 216px);
        z-index: 100;
        /* mix-blend-mode: difference; */
        white-space: nowrap;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        &.white {
            .link {
                color: #fff;

                &:before {
                    background: #fff;
                }

                svg {
                    circle {
                        stroke: #fff;
                    }
                }

            }
        }

        .link {
            height: 0;
            width: 16px;
            overflow: hidden;
            padding: 28px 7px 2px 7px;
            color: #211d1e;
            transition: color .5s ease;
            display: block;
            position: relative;
            transition: height .5s ease;
            box-sizing: content-box;
            font-size: 12px;
            font-weight: 700;

            &.active,
            &:hover {
                height: 28px;

                &:before {
                    background: 0 0;
                    transform: scale(1);
                    box-shadow: inset 0 0 0 2px rgba(255, 255, 245, .25);
                }

                svg {
                    opacity: 1;
                    transform: scale(1) rotate(-90deg);
                }

                span {
                    opacity: 1
                }
            }

            &:before {
                position: absolute;
                display: block;
                content: '';
                width: 18px;
                height: 18px;
                border-radius: 9px;
                left: 6px;
                top: 6px;
                transition: all .5s ease;
                background: #211d1e;
                box-shadow: inset 0 0 0 2px rgba(30, 32, 34, .25);
                transform: scale(.66);
            }

            svg {
                left: 6px;
                top: 6px;
                width: 18px;
                height: 18px;
                position: absolute;
                transform: rotate(-90deg);
                transition: all .5s ease;
                opacity: 0;
                transform: scale(.5) rotate(0);

                circle {
                    stroke: #211d1e;
                    stroke-width: 2px;
                    fill: none;
                    stroke-linecap: butt;
                    stroke-dasharray: 49.9416;
                    stroke-dashoffset: 49.9416;
                    transition: stroke .5s ease;
                }
            }

            span {
                display: inline-block;
                writing-mode: vertical-rl;
                line-height: 16px;
                opacity: 0;
                letter-spacing: 2px;
                transition: all .5s ease;
                transform: scale(.75) rotate(180deg);
                position: relative;
                white-space: nowrap;
                transform: scale(1);
                left: -1px;
            }
        }
    }

    .layout-wrapper {
        margin-top: -372px;
    }
}

@media screen and (max-width: 768px) {}

@media screen and (max-width: 750px) {}
</style>