<template>
    <div class="camera-scroll" ref="cameraScroll">
        <div class="left-box" data-active="0" ref="leftBox">
            <div class="title-text" ref="titleText">
                超感知徕卡电影影像
                与光影同行
            </div>
            <div class="con-text" data-id="1" ref="conText1">
                <div class="con-text-title">超感知摄像头</div>
                <div class="text">
                    5000 万像素， f/1.9 光圈，1/1.28 英寸型传感器，RYYB 滤色阵列，全像素八核对焦，令人惊叹的解析力，在细节之处，更⁠见⁠真⁠章⁠。
                </div>
            </div>
            <div class="con-text" data-id="2" ref="conText2">
                <div class="con-text-title">超广角摄像头</div>
                <div class="text">
                    1600 万像素超广角，f/2.2 光圈，天高海阔也能一览无余。超微距，微小世界更可一⁠探⁠究⁠竟⁠。
                </div>
            </div>
            <div class="con-text" data-id="3" ref="conText3">
                <div class="con-text-title">长焦摄像头</div>
                <div class="text">
                    800 万像素，支持 3 倍光学变焦⁠6⁠，5 倍混合变焦7，30 倍数字变焦，放远目光，拉⁠近⁠世⁠⁠界⁠。
                </div>
            </div>
            <div class="con-text" data-id="4" ref="conText3">
                <div class="con-text-title">激光对焦传感器</div>
                <div class="text">
                    疾速对焦，轻松抓住动⁠人瞬间。
                </div>
            </div>
        </div>
        <div class="right-box">
            <div class="image" data-id="0"  ref="rightBox"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'camera-scroll',
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
            let top = window.pageYOffset
            let cameraTop = this.$refs.cameraScroll.offsetTop-88
            let titleHeight = this.$refs.titleText.offsetHeight
            let conText1 = this.$refs.conText1.offsetHeight
            let conText2 = this.$refs.conText2.offsetHeight
            let conText3 = this.$refs.conText3.offsetHeight

            let leftBox = this.$refs.leftBox
            let rightBox = this.$refs.rightBox


            if(top>0 && top <= cameraTop){
                leftBox.setAttribute("data-active","0")
                rightBox.setAttribute("data-id","0")
            } else if(top > cameraTop && top<= cameraTop + titleHeight){
                leftBox.setAttribute("data-active","1")
                rightBox.setAttribute("data-id","1")
            } else if(top > cameraTop + titleHeight && top<= cameraTop + titleHeight + conText1){
                leftBox.setAttribute("data-active","2")
                rightBox.setAttribute("data-id","2")
            } else if(top > cameraTop + titleHeight + conText1 && top<= cameraTop + titleHeight + conText1 + conText2){
                leftBox.setAttribute("data-active","3")
                rightBox.setAttribute("data-id","3")
            } else if(top > cameraTop + titleHeight + conText1 + conText2 && top<= cameraTop + titleHeight + conText1 + conText2 + conText3){
                leftBox.setAttribute("data-active","4")
                rightBox.setAttribute("data-id","4")
            }
        }
    }
}
</script>

<style scoped lang=scss>
    @import "./../sass/common.scss";

    .camera-scroll{
        width: 100%;
        background: #000;
        position: relative;
        display: flex;
        padding-left: torem(170);
        padding-bottom: 12vh;
        .left-box{
            flex-shrink: 0;
            margin-right: auto;
            width: torem(850);
            text-align: left;
            .title-text{
                display: flex;
                align-items: center;
                height: torem(600);
                font-size: torem(90);
                font-weight: 600;
                color: #FFFFFF;
            }
            .con-text{
                opacity: 0.2;
                margin-bottom: torem(130);
                .con-text-title{
                    font-size: torem(48);
                    font-weight: 600;
                    color: #FFFFFF;
                    line-height: torem(54);
                    margin-bottom: torem(28);
                }
                .text{
                    width: 70%;
                    font-size: torem(36);
                    font-weight: 600;
                    color: #FFFFFF;
                    line-height: torem(54);
                }
            }
        }
        .left-box[data-active='1']{
            .con-text[data-id="1"]{
                opacity: 1;
            }
        }
        .left-box[data-active='2']{
            .con-text[data-id="2"]{
                opacity: 1;
            }
        }
        .left-box[data-active='3']{
            .con-text[data-id="3"]{
                opacity: 1;
            }
        }
        .left-box[data-active='4']{
            .con-text[data-id="4"]{
                opacity: 1;
            }
        }
        .right-box{
            flex-shrink: 0;
            height: 50vw;
            width: 25vw;
            position: sticky;
            top: 88px;
            overflow: hidden;
            .image{
                width: 50vw;
                height: 50vw;
                background: url("../assets/camera.webp") no-repeat;
                background-size: 100% 100%;
                /*width: 200%;*/
                /*height: 100%;*/
            }
        }
        .right-box .image[data-id='0']{
            transform:rotate(0deg) !important;
            transition: transform 1s cubic-bezier(0.46, 0.03, 0.52, 0.96);
        }
        .right-box .image[data-id='1']{
            transform: rotate(135deg) !important;
            transition: transform 1s cubic-bezier(0.46, 0.03, 0.52, 0.96);
        }
        .right-box .image[data-id='2']{
            transform: rotate(225deg)!important;
            transition: transform 1s cubic-bezier(0.46, 0.03, 0.52, 0.96);
        }
        .right-box .image[data-id='3']{
            transform: rotate(315deg)!important;
            transition: transform 1s cubic-bezier(0.46, 0.03, 0.52, 0.96);
        }
        .right-box .image[data-id='4']{
            transform: rotate(405deg)!important;
            transition: transform 1s cubic-bezier(0.46, 0.03, 0.52, 0.96);
        }
    }
    @media screen and (max-width: 750px) {
        .camera-scroll{
            width: 100%;
            background: #000;
            position: relative;
            display: flex;
            padding-left: torem(170);
            padding-bottom: 12vh;
            .left-box{
                flex-shrink: 0;
                margin-right: auto;
                width: torem(850);
                text-align: left;
                .title-text{
                    display: flex;
                    align-items: center;
                    height: torem(600);
                    font-size: 22px;
                    font-weight: 600;
                    color: #FFFFFF;
                }
                .con-text{
                    opacity: 0.4;
                    margin-bottom: torem(130);
                    .con-text-title{
                        font-size: 18px;
                        font-weight: 600;
                        color: #FFFFFF;
                        line-height: 20px;
                        margin-bottom: torem(28);
                    }
                    .text{
                        width: 70%;
                        font-size: 12px;
                        font-weight: 600;
                        color: #FFFFFF;
                        line-height: 18px;
                    }
                }
            }
            .right-box{
                flex-shrink: 0;
                height: 50vw;
                width: 25vw;
                position: sticky;
                top: 88px;
                overflow: hidden;
                .image{
                    width: 50vw;
                    height: 50vw;
                    background: url("../assets/camera.webp") no-repeat;
                    background-size: 100% 100%;
                }
            }
            .right-box .image[data-id='0']{
                transform:rotate(0deg) !important;
                transition: transform 1s cubic-bezier(0.46, 0.03, 0.52, 0.96);
            }
            .right-box .image[data-id='1']{
                transform: rotate(135deg) !important;
                transition: transform 1s cubic-bezier(0.46, 0.03, 0.52, 0.96);
            }
            .right-box .image[data-id='2']{
                transform: rotate(225deg)!important;
                transition: transform 1s cubic-bezier(0.46, 0.03, 0.52, 0.96);
            }
            .right-box .image[data-id='3']{
                transform: rotate(315deg)!important;
                transition: transform 1s cubic-bezier(0.46, 0.03, 0.52, 0.96);
            }
            .right-box .image[data-id='4']{
                transform: rotate(405deg)!important;
                transition: transform 1s cubic-bezier(0.46, 0.03, 0.52, 0.96);
            }
        }
    }
</style>