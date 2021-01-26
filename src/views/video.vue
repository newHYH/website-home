<template>
    <div class="video-page">
        <Header />

        <div class="title-box">U-MAGIC 5G手机发布会</div>

        <div class="fake-video container">
            <div class="video-box">
                <img src="@/assets/video/video-bg.png" />
                <div class="play-btn"></div>
            </div>
        </div>

        <div class="sec-video">
            <div class="ch-box">
                <div class="video-box box-1">
                    <div class="play-btn"></div>
                </div>

                <div class="product-info">
                    优畅享 20 Plus
                </div>
            </div>

            <div class="ch-box">
                <div class="video-box box-2">
                    <div class="play-btn"></div>
                </div>

                <div class="product-info">
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
        }
    },
    computed: {
    },
    mounted() {
    },
    methods: {
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
            
        }

        .sec-video{
            box-sizing: border-box;
            width: 100%;
            padding: torem(60) 0 torem(55) 0;
            background: #F5F5F5;
            padding-top: torem(60);
            .ch-box{
                width: torem(1380);
                height: torem(1240);
                margin: 0 auto;
                position: relative;
                margin-bottom: torem(50);
                .video-box{
                    position: absolute;
                    width: 100%;
                    height: torem(1160);
                    
                    &.box-1{
                        background: url(../assets/video/img_shipin_plus.png) no-repeat;
                        background-size: cover;
                    }
                    &.box-2{
                        background: url(../assets/video/img_shipin_20.png) no-repeat;
                        background-size: cover;
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
                    line-height: torem(332);
                    height: torem(332);
                    width: torem(1220);
                    padding-left: torem(40);
                    font-size: torem(56);
                    font-weight: 600;
                    color: #333333;
                    position: absolute;
                    left: torem(80);
                    bottom: 0;
                }
            }
        }
    }
}

/* ipad pro & PC */
@media screen and (min-width:1024px) {
    .video-page{
        .sec-video{
            box-sizing: border-box;
            width: 100%;
            height: torem(736);
            background: #F5F5F5;
            display: flex;
            justify-content: center;
            padding-top: torem(60);
            .ch-box{
                width: torem(690);
                height: torem(620);
                margin: 0 4px;
                position: relative;
                .video-box{
                    position: absolute;
                    width: 100%;
                    height: torem(580);
                    &.box-1{
                        background: url(../assets/video/img_shipin_plus.png) no-repeat;
                        background-size: cover;
                    }
                    &.box-2{
                        background: url(../assets/video/img_shipin_20.png) no-repeat;
                        background-size: cover;
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
                    line-height: torem(166);
                    height: torem(166);
                    width: torem(610);
                    padding-left: torem(20);
                    font-size: torem(28);
                    font-weight: 600;
                    color: #333333;
                    position: absolute;
                    left: torem(40);
                    bottom: 0;
                }
            }
        }
    }
}

/* PC & bigScreen*/
@media screen and (min-width:1200px) {

}
</style>