<template>
    <div class="home">
        <Header />
        <div class="box-wrapper">
            <div class="sider">
                <div class="sider-text">全部手机</div>
            </div>
            <div class="main">
                <div class="pro-box">
                    <div class="pro-img">
                        <img src="../assets/phone-1.png" alt="">
                    </div>
                    <div class="pro-name">
                        HUAWEI Mate 40 Pro
                    </div>
                </div>
                <div class="pro-box-con">
                    <div class="pro-con">
                        <div class="pro-img">
                            <img src="../assets/phone-2.png" alt="">
                        </div>
                        <div class="pro-name">
                            Redmi K30 Pro 变焦版
                        </div>
                    </div>
                    <div class="pro-con">
                        <div class="pro-img">
                            <img src="../assets/phone-3.png" alt="">
                        </div>
                        <div class="pro-name">
                            Redmi K30 Pro 变焦版
                        </div>
                    </div>
                </div>
                <div class="pro-box">
                    <div class="pro-img">
                        <img src="../assets/phone-4.png" alt="">
                    </div>
                    <div class="pro-name">
                        Redmi 9A
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Header from '@/components/header.vue';

export default {
    name: 'Home',
    components: {
        Header
    },
    data() {
        return {}
    },
    mounted() {

    },
    methods: {}
}
</script>
<style scoped lang=scss>
@import "@/sass/common.scss";

/*功能title样式*/
.home {
    .box-wrapper {
        padding:torem(77) torem(102) 0;
        display: flex;
        justify-content: space-between;

        .sider {
            width: torem(367);

            .sider-text {
                width: torem(267);
                background: #FF7272;
                border-radius: 0 torem(45) torem(45) 0;
                color: #fff;
                height: torem(82);
                font-size: torem(38);
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
        .main{
            display: flex;
            width:torem(1349);
            justify-content: space-between;
            .pro-box{
                width:torem(481);
                .pro-name{
                    font-size:torem(24);
                    color:#333;
                    margin:torem(35) 0;
                }
            }
            .pro-box-con{
                width:torem(272);
                .pro-name{
                    font-size:torem(24);
                    color:#333;
                    margin:torem(35) 0;
                }
            }
        }
    }
}
</style>