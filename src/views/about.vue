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
                <p>U-MAGIC是中国联合网络通信有限公司于2021年推出的全新5G手机品牌，</p>
                <p>致力于为消费者打造集“优质网络、优异体验、优享权益”于一身的优秀5G产品，</p>
                <p>让消费者优先一步畅享5G。</p>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';

export default {
    name: 'about',
    components: {
        Header,
        Footer
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
                font-size:1em;
                color:#000;
                margin:15px 0;
            }
            p {
                font-size: 0.8em;
                color: #000000;
                line-height: 2;
                max-width:530px;
                margin:0 auto;
                text-align: left;
            }
        }
    }


}
</style>