<template>
    <div class="product1">
        <HonorHeader link1="product1" link2="param1" />
        <div class="news">
            <div class="img-wrap">
                <img src="../assets/product11/img0.webp" alt="">
            </div>
            <div class="img-wrap">
                <img src="../assets/product11/img1.webp" alt="">
            </div>
            <div class="img-wrap">
                <img src="../assets/product11/img2.webp" alt="">
            </div>
            <div class="img-wrap">
                <img src="../assets/product11/img3.webp" alt="">
            </div>
            <div class="img-wrap">
                <img src="../assets/product11/img4.webp" alt="">
            </div>
            <div class="img-wrap">
                <img src="../assets/product11/img5.webp" alt="">
            </div>
            <div class="img-wrap">
                <img src="../assets/product11/img6.webp" alt="">
            </div>
            <div class="img-wrap">
                <img src="../assets/product11/img7.webp" alt="">
            </div>
            <div class="img-wrap">
                <img src="../assets/product11/img8.webp" alt="">
            </div>
            <div class="img-wrap">
                <img src="../assets/product11/img9.webp" alt="">
            </div>
            <div class="img-wrap">
                <img src="../assets/product11/img10.webp" alt="">
            </div>
        </div>
        <ReturnTop />
    </div>
</template>
<script>
import HonorHeader from '@/components/honor-header.vue';
import ReturnTop from '@/components/return-top.vue';
export default {
    name: "product1",
    components: {
        HonorHeader,
        ReturnTop
    },
    data() {
        return {
            isScroll1: false,
            isScroll2: false,
            /*isScroll3:false,*/
        }
    },
    mounted() {
    },
    methods: {
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
        opacity: 0
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