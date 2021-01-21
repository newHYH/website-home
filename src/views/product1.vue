<template>
    <div class="product1">
        <HonorHeader link1="product1" link2="param1" />
        <div class="img-wrap img1">
            <div class="top-text">
                U-MAGIC是中国联合网络通信有限公司于2021年推出的全新5G手机品牌，
                致力于为消费者打造集“优质网络、优质体验、优享权益”
                于一身的优秀5G产品，让消费者优先一步畅享5G。
            </div>
            <div class="bold-text">
                六大推荐理由
            </div>
            <img src="../assets/product1/liudaliyou.png" alt="">
        </div>
        <div class="img-wrap img2">
            <img src="../assets/product1/20quan-up.png" alt="" ref="img1">
            <img class="opcity animate__animated" :class="isScroll1?'animate__fadeInUp':''" src="../assets/product1/20quan-down.png" alt="">
        </div>
        <div class="img-wrap img3">
            <img src="../assets/product1/a_3_up.png" alt="" ref="img2">
            <img class="opcity animate__animated" :class="isScroll2?'animate__fadeInUp':''" src="../assets/product1/a_3_down.png" alt="">
        </div>
        <div class="img-wrap img4">
            <img src="../assets/product1/a_4.png" alt="">
            <!-- <img src="../assets/product1/a_4_up.png" alt="" ref="img3">
            <img class="opcity animate__animated" :class="isScroll3?'animate__fadeInUp':''" src="../assets/product1/a_4_down.png" alt=""> -->
        </div>
        <div class="img-wrap img5">
            <img src="../assets/product1/a_5.png" alt="">
        </div>
        <div class="img-wrap img6">
            <img src="../assets/product1/a_6.png" alt="">
        </div>
        <div class="img-wrap img7">
            <img src="../assets/product1/a_7.png" alt="">
        </div>
        <div class="img-wrap img8">
            <img src="../assets/product1/a_8.png" alt="">
        </div>
        <div class="img-wrap img9">
            <img src="../assets/product1/a_9.png" alt="">
            <div class="bottom-text">
                <p>
                    *1 显示屏采用圆角设计，按照标准矩形测量时，屏幕的对角线长度是6.53英寸（实际可视区域略小）。
                </p>
                <p>
                    *2 5倍光学变焦为近似值，镜头焦段分别为：17mm, 27mm, 125mm。
                </p>
                <p>
                    *3 摄像头通过不同组合实现10倍混合变焦效果。
                </p>
                <p>
                    *4 双结构OIS是指潜望式变焦镜头支持棱镜加镜头双光学防抖，使变焦拍摄效果更稳定，画面更清晰。
                </p>
                <p>
                    *5 智慧双卡上网需用户自行开启，并设置切换策略；VoLTE高清语音业务依赖运营商网络支持，并需向运营商申请开通。
                </p>
                <p>
                    *6 德国莱茵TUV安全快充认证书有效期为自发证之日起一年，相关证书信息可扫描产品包装盒上二维码查询。
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import HonorHeader from '@/components/honor-header.vue';
export default {
    name: "product1",
    components: {
        HonorHeader
    },
    data(){
        return{
            isScroll1:false,
            isScroll2:false,
            /*isScroll3:false,*/
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
            window.addEventListener('scroll', this.handelScroll)
        },
        handelScroll(e) {
            let top1 = this.$refs.img1.offsetTop
            let top2 = this.$refs.img2.offsetTop
            /*let top3 = this.$refs.img3.offsetTop*/
            let scroll = window.pageYOffset
            if(scroll>=top1){
                this.isScroll1 = true
            }else{
                this.isScroll1 = false
            }
            if(scroll>=top2){
                this.isScroll2 = true
            }else{
                this.isScroll2 = false
            }
            /*if(scroll>=top3){
                this.isScroll3 = true
            }else{
                this.isScroll3 = false
            }*/
        }
    }
}
</script>
<style scoped lang="less">
.product1 {
    .img-wrap {
        img {
            width: 100%;
            display: block;
        }
    }
    .opcity {
        opacity :0
    }

    .img1 {
        padding: 56px 95px 112px 95px;
        background: #E8EBFA;

        .top-text {
            width: 65%;
            margin: 0 auto;
            font-size: 36px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #333333;
            line-height: 50px;
        }

        .bold-text {
            font-size: 80px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #333333;
            line-height: 112px;
            letter-spacing: 5px;
            margin: 58px 0;
        }
    }

    .img9 {
        background: #000;

        .bottom-text {
            width: 70%;
            margin: 0 auto;
            font-size: 34px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #9E9D9E;
            line-height: 53px;
            text-align: left;
            padding-top: 185px;
            padding-bottom: 85px;

            p {
                margin: 0;
                text-indent: -45px;
            }
        }
    }
}
</style>