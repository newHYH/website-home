<template>
    <div class="header">
        <div class="container fix-navigation">
            <a class="logo" href="/cn">
                <img />
            </a>
            <div class="nav-title">手机</div>
            <div class="func-box">
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
            .logo{
                position: absolute;
                width: 100px;
                margin-top: -4px;
            }
            .nav-title{
                position: absolute;
                top: 0;
                left: -30px;
                width: 60px;
                line-height: 90px;
                text-align: center;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
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