<template>
    <div class="product2">
        <HonorHeader link1="product2" link2="param2"/>
        <div class="img-wrap img1">
            <div class="top-text">
                U-MAGIC是中国联合网络通信有限公司于2021年推出的全新5G手机品牌，
                致力于为消费者打造集“优质网络、优质体验、优享权益”
                于一身的优秀5G产品，让消费者优先一步畅享5G。
            </div>
<!--            <div class="bold-text">-->
<!--                六大推荐理由-->
<!--            </div>-->
            <img src="../assets/product2/fang_a.png" alt="">
        </div>
        <div class="img-wrap img2">
            <img src="../assets/product2/fang_c.png" alt="">
            <img src="../assets/product2/fang_b.png" alt="">
        </div>
        <div class="img-wrap img3">
            <img class="imga" src="../assets/product2/fang_d_a.png" alt="">
            <img class="imgb" src="../assets/product2/fang_d_b.png" alt="">
            <img class="imgc" src="../assets/product2/fang_d_c.png" alt="">
        </div>
        <div class="img-wrap img4">
            <img src="../assets/product2/fang_shexiangtou.png" alt="">
        </div>
        <div class="img-wrap img5">
            <img src="../assets/product2/fang_e.png" alt="">
        </div>
        <div class="img-wrap img6">
            <img src="../assets/product2/fang_f.png" alt="">
        </div>
        <div class="img-wrap img7">
            <img src="../assets/product2/fang_g.png" alt="">
        </div>
        <div class="img-wrap img8">
            <img src="../assets/product2/fang_h.png" alt="">
        </div>
        <div class="img-wrap img9">
            <img src="../assets/product2/fang_i.png" alt="">
        </div>
        <div class="img-wrap img10">
            <img src="../assets/product2/fang_j.png" alt="">
        </div>
        <div class="img-wrap img11">
            <img src="../assets/product2/fang_k.png" alt="">
        </div>
        <ReturnTop/>
    </div>
</template>

<script>
    import HonorHeader from '@/components/honor-header.vue';
    import ReturnTop from '@/components/return-top.vue';
    export default {
        name: "product2",
        components: {
            HonorHeader,
            ReturnTop
        }
    }
</script>

<style scoped lang="less">
    .product2{
        .img-wrap{
            img{
                width: 100%;
                display: block;
            }
        }
        .img1{
            padding: 56px 95px 112px 95px;
            /*background: #E8EBFA;*/
            .top-text{
                width: 65%;
                margin: 0 auto;
                font-size: 36px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #333333;
                line-height: 50px;
                margin-bottom: 77px;
            }
            .bold-text{
                font-size: 80px;
                font-family: PingFangSC-Semibold, PingFang SC;
                font-weight: 600;
                background-image:-webkit-linear-gradient(180deg, #87D1FF 0%, #8CB1FE 40%, #AAA4FA 56%, #D1B4FC 100%);
                -webkit-background-clip:text;
                -webkit-text-fill-color:transparent;
                line-height: 112px;
                letter-spacing: 5px;
                margin: 58px 0;
            }
        }
        .img2{
            display: flex;
            justify-content: space-around;
            align-items: center;
            img{
                width: 40%;
                display: flex;
            }
        }
        .img3{
            width: 100vw;
            height: 91.1vw;
            margin: 0 auto;
            background: url("../assets/product2/fang_d.png") no-repeat;
            background-size: 100% 100%;
            position: relative;
            img{
                width: 19.8vw;
                height: 44.7vw;
            }
            .imga{
                position: absolute;
                left: 18%;
                top: 36.5vw;
            }
            .imgb{
                position: absolute;
                left: 41%;
                top: 31.3vw;
            }
            .imgc{
                position: absolute;
                left: 64%;
                top: 26.1vw;
            }
        }
        .img5{
            background: rgb(240,242,245);
        }
        .img6{
            background: rgb(240,242,245);
        }
        .img7{
            background: rgb(240,242,245);
        }
        .img8{
            background: rgb(240,242,245);
        }
    }
</style>