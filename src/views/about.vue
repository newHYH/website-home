<template>
    <div class="about-wrapper">
        <Header />
        <img src="../assets/about-banner.webp" class="about-banner" alt="">
        <div class="about-box">
            <div class="hd">
                关于我们
            </div>
            <div class="bd">
                <h5>优先一步，畅享5G！</h5>
                <p>U-MAGIC是中国联通的全新5G手机品牌，由联通华盛通信有限公司打造。作为中国联通的终端公司，联通华盛拥有超过10年的手机终端销售经验，累计销售额突破2000亿，在其“自主能力提升、自研产品丰富”的战略布局下，于2021年首次推出了自有品牌 U-MAGIC，并同步发布了品牌旗下优畅享20 Plus 、优畅享20两款5G手机。</p>
                <p>“年轻、创新、友爱、个性”是U-MAGIC手机的品牌定位，品牌延展了中国联通5Gⁿ让未来生长的理念。U表示Unicom中国联通、User年轻用户、Unique生而独特、Union相向而聚，与用户共情，与伙伴共振。MAGIC则表示更热衷于追求健康、展示自我、分享喜怒哀乐，展现生活的魔力！</p>
                <p>优畅享系列手机以“优质的5G网络、优雅的美学设计、优异的续航能力、优越的影像系统、以及优享的体验和权益”为主打，搭载7nm 5G SoC，兼容SA/NSA双模全网通，以确保更好的信号覆盖和全场景的5G疾速体验，搭载大容量电池为强劲续航提供基础，时尚外观彰显美学，沉浸式体验让用户更加自在。</p>
            </div>
        </div>
        <Footer />
        <ReturnTop/>
    </div>
</template>
<script>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import ReturnTop from '@/components/return-top.vue';

export default {
    name: 'about',
    components: {
        Header,
        Footer,
        ReturnTop
    },
    data() {
        return {}
    },
    mounted() {},
    methods: {

    }
}
</script>
<style scoped lang=scss>
@import "@/sass/common.scss";

.about-wrapper {
    width: 100%;
    overflow: hidden;
    .about-banner{
        width:30%;
        margin:0 auto;
    }
    .about-box {
        margin: 0 auto;
        width: 80%;
        padding: 20px;

        .hd {
            font-size: 21px;
            font-weight: 600;
            color: #000;
            position: relative;
            padding-bottom: 2.2vw;

            &:after {
                content: '';
                width: 3.2vw;
                height: 1px;
                background-color: #000000;
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                margin: 0 auto;
            }
        }

        .bd {
            padding:20px;
            h5{
                font-size:18px;
                color:#000;
                margin:15px 0;
            }
            p {
                font-size: 13px;
                text-indent: 2em;
                color: #000000;
                line-height: 2;
                max-width:530px;
                margin:0 auto;
                text-align: left;
                margin-bottom: 12px;
            }
        }
    }


}
/* 手机 */
@media screen and (max-width:750px) {
   .about-wrapper  .about-box{
    width:96%;
    .bd{
        padding:0
    }
    }
}
</style>