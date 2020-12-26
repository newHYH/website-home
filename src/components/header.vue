<template>
    <div class="header">
        <div class="container fix-navigation">
            <div class="inner-box">
                <a class="logo" href="/cn">
                    <img />
                </a>
                <div class="nav-title">手机</div>
                <div class="func-box">
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'Header',
    data() {
        return{
        }
    },
    mounted() {

    },
    methods: {
    }
}
</script>
<style scoped lang=scss>
@import "@/sass/common.scss";

/* mobile */
@media screen and (min-width:350px) {
    .header{
    }
}

/* PC */
@media screen and (min-width:1200px) {
    .header{
        height: auto;
        .fix-navigation{
            height: 90px;
            position: relative;
            .inner-box{}
            .logo{
                position: absolute;
                width: 78px;
                height: 42px;
                top: 24px;
                left: 92px;
            }
            .nav-title{
                position: absolute;
                top: 0;
                left: 50%;
                margin-left: -30px;
                width: 60px;
                line-height: 90px;
                text-align: center;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                font-size: 24px;
                color: #333333;
            }
            .func-box{
                position: absolute;
                right: 0;
            }
        }
    }
}
</style>