<template>
    <div class="not-wrapper">
        <HeaderA />
        <div class="not-box">
            <img src="../assets/404.png" />
            <div class="en_404">
                <h4>这种错误可能因为：</h4>
                <ul>
                    <li>手抖输入错了~</li>
                    <li>网络信号迷路了~</li>
                    <li>内容被回收了~</li>
                </ul>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import HeaderA from '@/components/headerA.vue';
import Footer from '@/components/footer.vue';

export default {
    name: 'notFound',
    components: {
        // Header,
        HeaderA,
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

.not-wrapper {
    width: 100%;
    overflow: hidden;


    .not-box {
        display: flex;
        padding: 20px;
        justify-content: center;

        .en_404 {
            padding: 50px;

            h4 {
                font-size: 1.041vw;
                color:#000;
                font-weight: 600;
                margin-bottom: 0.521vw;
            }

            ul {

                padding-left: 1.041vw;
                color: #707070;

                li {
                    list-style: disc;
                    font-size: 0.833vw;
                    margin-bottom: 0.521vw;
                    text-align: left;
                }
            }
        }

    }


}
</style>