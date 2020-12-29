<template>
    <div>
    <div class="box-zipai" style="height:550px;width:100%;background: #000000;">
        <div>
            <h2 class="h2-xs">双重生物识别 安全便捷</h2>
        </div>
        <div class="box-zipai-img">
            <img style="display: block;width:100%" src="../assets/n-cn.jpg" alt="">
        </div>
    </div>
    <div style="height:500px;width:100%;background: #000000;">
        <div class="gg-columns-5">
            <h2 class="h3-xs">全方位守护<br>你的隐私安全</h2>
        </div>
        <div class="container">
            <div class="box1">
                <div class="text-wrap">
                    <div class="top-text">安全分享</div>
                    <div class="bottom-text">使用联通分享，分享照片时，可 脱去敏感信息，分享生 活点滴，不含隐私信息。</div>
                </div>
            </div>
            <div class="box1">
                <div class="text-wrap">
                    <div class="top-text">隐私备忘录</div>
                    <div class="bottom-text">随时记录，加密存储。查看时启 用身份认证，安全快捷。</div>
                </div>
            </div>
            <div class="box1">
                <div class="text-wrap">
                    <div class="top-text">多任务模糊</div>
                    <div class="bottom-text">切换多任务时，智能模糊敏感应用界面。</div>
                </div>
            </div>
            <div class="box1">
                <div class="text-wrap">
                    <div class="top-text">AI隐私保护</div>
                    <div class="bottom-text">使用联通分享，分享照片时，可 脱去敏感信息，分享生 活点滴，不含隐私信息。</div>
                </div>
            </div>
            <div class="box1">
                <div class="text-wrap">
                    <div class="top-text">应用授权</div>
                    <div class="bottom-text">对应用权限的授予，再精细也不为过，精准掌控，安全倍增。</div>
                </div>
            </div>
            <div class="box1">
                <div class="text-wrap">
                    <div class="top-text">系统安全</div>
                    <div class="bottom-text">搭载安全系统微内核，安全级别高达CC EAL5+。</div>
                </div>
            </div>
        </div>

    </div>
    <div style="height:500px;width:100%;background: green;">
    </div>
    </div>
</template>

<script>
export default {
    name: 'safe-box',
    props: {
        
    },
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
    .gg-columns-5{
        width: 100%;
        color: #FFFFFF;
        float:left;
    }
    .container{
        float: right;
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 400px;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .box1{
        width: 95%;
        height: 45px;
        margin-bottom: 10px;
        display: flex;
    }
    .text-wrap{
        height: 42px;
        flex: 1;
        display: flex;
        flex-direction: column;
        float: left;
    }
    .top-text{
        width: 95%;
        font-size: 13px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #FFFFFF;
        line-height: 50px;
        float: left;
    }
    .bottom-text{
        width: 100%;
        font-size: 13px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
    }
    .h2-xs{
        color: #FFFFFF;
    }

@media screen and (min-width: 750px) {
    .box-zipai{
        height:550px;
        width:100%;
        background: #000000;
    }
    .gg-columns-5{
        width: 49.05%;
        color: #FFFFFF;
        float:left;
        position: sticky;
        top: 80px;
    }
    .h3-xs{
        font-size: 50px;
    }
    .h2-xs{
        font-size: 50px;
        color: #FFFFFF;
    }
    .box-zipai-img{
        display: block;
        width:100%
    }
    .container{
        float: right;
        display: flex;
        flex-direction: row;
        width: 49.05%;
        height: 500px;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .box1{
        width: 40%;
        height: 45px;
        margin-bottom: 10px;
        display: flex;
    }
    .text-wrap{
        height: 42px;
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    .top-text{
        width: 100%;
        font-size: 18px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #FFFFFF;
        line-height: 50px;
    }
    .bottom-text{
        width: 100%;
        font-size: 15px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
    }
}

</style>