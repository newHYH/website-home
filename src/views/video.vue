<template>
    <div class="video-page">
        <Header />

        <div class="title-box">U-MAGIC 5G手机新品发布会</div>

        <div class="fake-video container">
            <div class="video-box">
                <!-- <img src="@/assets/video/video-bg.png" /> -->
                <video ref="indexVideo" class="img video" :controls="controlIndex" poster="../assets/video/video-bg.png" preload="auto" webkit-playsinline="true" x-webkit-airplay="allow" x5-video-player-type="h5" x5-video-player-fullscreen="true" x5-video-orientation="portraint" style="object-fit:fill">
                    <source src="http://www.u-magic.cn/images/5minfbh.mp4" type="video/mp4">
                    您的浏览器不支持 HTML5 video 标签。
                </video>

                <div class="cover-img" v-show="!controlIndex"></div>

                <div class="play-btn" v-show="!controlIndex" @click="indexPlay()"></div>
            </div>
        </div>

        <div class="sec-video">
            <div class="ch-box">
                <div class="video-box">
                    <video ref="secVideoA" class="img video" :controls="controlSecA" poster="../assets/video/img_shipin_plus.png" preload="auto" webkit-playsinline="true" x-webkit-airplay="allow" x5-video-player-type="h5" x5-video-player-fullscreen="true" x5-video-orientation="portraint" style="">
                        <source src="http://www.u-magic.cn/images/20Pluskx.mp4" type="video/mp4">
                        您的浏览器不支持 HTML5 video 标签。
                    </video>

                    <div class="cover-img-1" v-show="!controlSecA"></div>

                    <div class="play-btn" v-show="!controlSecA" @click="secAPlay()"></div>
                </div>

                <div class="product-info" v-show="!controlSecA">
                    优畅享 20 Plus
                </div>
            </div>

            <div class="ch-box">
                <div class="video-box">
                    <video ref="secVideoB" class="img video" :controls="controlSecB" poster="../assets/video/img_shipin_20.png" preload="auto" webkit-playsinline="true" x-webkit-airplay="allow" x5-video-player-type="h5" x5-video-player-fullscreen="true" x5-video-orientation="portraint" style="">
                        <source src="http://www.u-magic.cn/images/20cp.mp4" type="video/mp4">
                        您的浏览器不支持 HTML5 video 标签。
                    </video>

                    <div class="cover-img-2" v-show="!controlSecB"></div>

                    <div class="play-btn" v-show="!controlSecB" @click="secBPlay()"></div>
                </div>

                <div class="product-info" v-show="!controlSecB">
                    优畅享 20
                </div>
            </div>
        </div>

        <Footer />
    </div>
</template>

<script>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
export default {
    name: 'VideoPage',
    components: {
        Header,
        Footer
    },
    data() {
        return {
            indexVideo: null,
            secVideoA: null,
            secVideoB: null,
            controlIndex: false,
            controlSecA: false,
            controlSecB: false
        }
    },
    computed: {
    },
    mounted() {
        this.$nextTick(()=>{
            this.indexVideo = this.$refs.indexVideo
            this.secVideoA = this.$refs.secVideoA
            this.secVideoB = this.$refs.secVideoB
        })
    },
    methods: {
        indexPlay(){
            this.indexVideo.play()
            this.controlIndex = true
        },
        secAPlay(){
            this.secVideoA.play()
            this.controlSecA = true
        },
        secBPlay(){
            this.secVideoB.play()
            this.controlSecB = true
        }
    }
}
</script>
<style scoped lang=scss>
@import "@/sass/common.scss";

/* mobile phone */
@media screen and (min-width:320px) {
    .video-page {
        width: 100%;

        .title-box{
            font-size: torem(64);
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #333333;
            line-height: torem(90);
            padding: torem(62) 0 torem(16) 0;
        }

        .fake-video{
            padding-bottom: torem(60);
            background: #fff;
            
            .video-box{
                position: relative;

                .cover-img{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: url(../assets/video/video-bg.png) no-repeat;
                    background-size: contain;
                }

                video{
                    width: 100%;
                    height: auto;
                }
                .play-btn{
                    position: absolute;
                    width: torem(190);
                    height: torem(190);
                    background: url(../assets/home/video-play-btn.png) no-repeat;
                    background-size: cover;
                    top: 50%;
                    left: 50%;
                    margin: torem(-95) 0 0 torem(-95);
                    cursor: pointer;
                }
            }
            
        }

        .sec-video{
            box-sizing: border-box;
            width: 100%;
            padding: torem(60) 0 torem(55) 0;
            background: #F5F5F5;
            padding-top: torem(60);
            .ch-box{
                width: torem(1700);
                height: torem(1121);
                margin: auto;
                position: relative;
                margin-top: 10px;
                margin-bottom: torem(50);
                .video-box{
                    position: absolute;
                    width: 100%;
                    height: torem(956);

                    video{
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        left: 0;
                        top: 0;
                        overflow: hidden;
                        object-fit: contain;
                    }
                    .cover-img-1{
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: url(../assets/video/img_shipin_plus.png) no-repeat;
                        background-size: cover;
                    }
                    .cover-img-2{
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: url(../assets/video/img_shipin_20.png) no-repeat;
                        background-size: cover;
                    }
                    .play-btn{
                        position: absolute;
                        width: torem(190);
                        height: torem(190);
                        background: url(../assets/home/video-play-btn.png) no-repeat;
                        background-size: cover;
                        top: 50%;
                        left: 50%;
                        margin: torem(-95) 0 0 torem(-95);
                        cursor: pointer;
                    }
                }
                .product-info{
                    background: #fff;
                    line-height: torem(330);
                    height: torem(330);
                    width: torem(1400);
                    /* padding-left: torem(40); */
                    font-size: torem(56);
                    font-weight: 600;
                    color: #333333;
                    position: absolute;
                    left: torem(150);
                    bottom: 0;
                    text-align: center;
                }
            }
        }
    }
}

/* ipad pro & PC */
@media screen and (min-width:1024px) {
    .video-page{
        .fake-video{

            .video-box{
                .cover-img{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: url(../assets/video/video-bg.png) no-repeat;
                    background-size: contain;
                }

                .play-btn{
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
        .sec-video{
            box-sizing: border-box;
            width: 100%;
            height: torem(558);
            background: #F5F5F5;
            display: flex;
            justify-content: center;
            padding-top: torem(60);
            .ch-box{
                width: torem(690);
                height: torem(438);
                margin: 0 4px;
                position: relative;
                .video-box{
                    position: absolute;
                    width: 100%;
                    height: torem(388);
                    background: #fff;
                    .cover-img-1{
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        background: url(../assets/video/img_shipin_plus.png) no-repeat;
                        background-size: cover;
                    }
                    .cover-img-2{
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        background: url(../assets/video/img_shipin_20.png) no-repeat;
                        background-size: cover;
                    }
                    .video{
                        object-fit:fill;
                        top:0;
                        height:100%;
                    }
                    .play-btn{
                        position: absolute;
                        width: torem(96);
                        height: torem(96);
                        background: url(../assets/home/video-play-btn.png) no-repeat;
                        background-size: cover;
                        top: 50%;
                        left: 50%;
                        margin: torem(-48) 0 0 torem(-48);
                        cursor: pointer;
                    }
                }
                .product-info{
                    background: #fff;
                    line-height: torem(100);
                    height: torem(100);
                    width: torem(610);
                    padding-left: torem(20);
                    font-size: torem(28);
                    font-weight: 600;
                    color: #333333;
                    position: absolute;
                    left: torem(40);
                    bottom: 0;
                    text-align: left;
                }
            }
        }
    }
}

/* PC & bigScreen*/
@media screen and (min-width:1200px) {

}
</style>