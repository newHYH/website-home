<template>
    <div class="per-scroll" ref="scrollCon">
        <div class="container-scroll">
            <div class="stick-box" ref="opacityBg">
                <div class="title-text">
                    这颗芯 震撼人心
                </div>
            </div>
        </div>
        <div class="move-box" ref="moveBox">
            <div class="content-text">
                麒麟 9000E 5G SoC 旗舰芯片，以高能，突破可能。领先的 5 nm 制程工艺，性能跨越式升级，功耗大幅降低，让你体验震撼的超前速度。智慧体验全面进化，带你先⁠见⁠未⁠来⁠。
            </div>
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
                let opacityAdd = (moveLang/maxLong)*0.8
                opacityBg.style.background = 'rgba(0,0,0,'+opacityAdd+')'
            }
        }
    }
}
</script>

<style scoped lang=scss>
    @import "@/sass/common.scss";
    .per-scroll{
        width: 100%;
        padding: 0;
        margin: 0;
        /*height: 200vh;*/
        display: flex;
        flex-direction: column;
        position: relative;
        .container-scroll{
            position: sticky;
            width: 100%;
            background-color: #000;
            background-image: url("../assets/animate-bg.webp");
            background-repeat:  no-repeat;
            background-size: 100% 100%;
            /*height: 200vh;*/
            top: torem(54+88);
            .stick-box{
                width: 100vw;
                height: 100vh;
                /*position: sticky;*/
                .title-text{
                    font-size: torem(90);
                    font-weight: 600;
                    color: #FFFFFF;
                    line-height: torem(126);
                    text-align: left;
                    padding-top: torem(100);
                    padding-left: torem(126);
                }
            }
        }
        .move-box{
            position: sticky;
            top: 75vh;
            padding-bottom: 15vh;
            margin: 0;
            background: #000;
            .content-text{
                width: 60%;
                font-size: torem(45);
                font-weight: 600;
                color: #FFFFFF;
                text-align: left;
                /*margin-top: 50vh;*/
                /*padding-top: torem(53);*/
                padding-left: torem(126);
            }
        }
    }
    @media screen and (max-width: 750px) {
        .per-scroll{
            width: 100%;
            padding: 0;
            margin: 0;
            /*height: 200vh;*/
            display: flex;
            flex-direction: column;
            position: relative;
            .container-scroll{
                position: sticky;
                width: 100%;
                background-color: #000;
                background-image: url("../assets/animate-bg.webp");
                background-repeat:  no-repeat;
                background-size: 100% 100%;
                /*height: 200vh;*/
                top: 96px;
                .stick-box{
                    width: 100vw;
                    height: 100vw;
                    /*position: sticky;*/
                    .title-text{
                        font-size: 24px;
                        font-weight: 600;
                        color: #FFFFFF;
                        line-height: torem(126);
                        text-align: left;
                        padding-top: 53px;
                        padding-left: torem(126);
                    }
                }
            }
            .move-box{
                position: sticky;
                top: 75vw;
                padding-bottom: 15vw;
                margin: 0;
                background: #000;
                .content-text{
                    width: 60%;
                    font-size: 14px;
                    font-weight: 600;
                    color: #FFFFFF;
                    text-align: left;
                    /*margin-top: 50vh;*/
                    /*padding-top: torem(53);*/
                    padding-left: torem(126);
                }
            }
        }
    }
</style>