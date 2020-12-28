<template>
    <div class="footer">
        <div class="container">
            <div class="connect">
                <p class="connect-title">联系我们</p>
                <div class="connect-box">
                    <div class="connect-item">
                        <p class="title">电话支持</p>
                        <div class="func-box call">
                            <p>消费者服务电话950800</p>
                            <p>7*24小时 | 普通话</p>
                        </div>
                    </div>
                    <div class="connect-item">
                        <p class="title">在线支持</p>
                        <div class="func-box online">
                            <p>在线客服</p>
                        </div>
                        <div class="func-box email">
                            <p>邮件咨询</p>
                        </div>
                    </div>
                    <div class="connect-item">
                        <p class="title">线下支持</p>
                        <div class="func-box service">
                            <p>服务店</p>
                        </div>
                        <div class="func-box retail">
                            <p>零售店</p>
                        </div>
                    </div>
                    <div class="connect-item">
                        <p class="title">社交支持</p>
                        <div class="func-box wb">
                            <p>微博</p>
                        </div>
                        <div class="func-box wx">
                            <p>微信公众号</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="org-box">
            <div class="item-box">
                <p class="title">购买手机</p>
                <div class="each-item">手机</div>
            </div>
            <div class="item-box">
                <p class="title">服务与支持</p>
                <div class="each-item">维修备件价格</div>
                <div class="each-item">联系我们</div>
                <div class="each-item">服务隐私声明</div>
            </div>
            <div class="item-box">
                <p class="title">应用与下载</p>
                <div class="each-item">终端云服务</div>
                <div class="each-item">预置应用共公式</div>
            </div>
            <div class="item-box">
                <p class="title">关于我们</p>
                <div class="each-item">关于我们</div>
                <div class="each-item">隐私</div>
            </div>
        </div>
        <div class="container">
            <div class="page-footer">
                <div class="footer-inner">
                    <div class="right">版权所有 © 中国联合通信有限公司 1998-2021。保留一切权利。粤A2-20044005号</div>
                    <ul class="footer-items">
                        <li class="f-item">网站地图</li>
                        <li class="f-item">使用条款</li>
                        <li class="f-item">隐私声明</li>
                        <li class="f-item">关于cokies</li>
                        <li class="f-item">法律信息</li>
                    </ul>
                    <div class="lang">China-简体中文</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'Footer',
    data() {
        return{}
    },
    mounted() {

    },
    methods: {
    }
}
</script>
<style scoped lang=scss>
@import "@/sass/common.scss";

.footer{
    .connect{
        background: #fff;
        padding: 0 22px;
        .connect-title{
            padding: 77px 0;
            line-height: 50px;
            text-align: center;
            font-size: 36px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #333333;
        }
        .connect-box{
            padding-bottom: 42px;
            display: flex;
            justify-content: space-between;
            .connect-item{
                text-align: left;
                .title{
                    height: 40px;
                    font-size: 28px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #666666;
                    line-height: 40px;
                }
                .func-box{
                    position: relative;
                    margin: 35px 0;
                    padding-left: 50px;
                    font-size: 28px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #999999;
                    line-height: 40px;
                    p{
                        margin-bottom: 15px;
                    }
                    &.call{
                        &::before{
                            position: absolute;
                            content: '';
                            display: block;
                            width: 28px;
                            height: 30px;
                            top: 4px;
                            left: 0;
                            background: url('../assets/dianhua-6.png') no-repeat;
                            box-align: cover;
                        }
                    }
                    &.online{
                        &::before{
                            position: absolute;
                            content: '';
                            display: block;
                            width: 29px;
                            height: 29px;
                            top: 3px;
                            left: 0;
                            background: url('../assets/kefu-2.png') no-repeat;
                            box-align: cover;
                        }
                    }
                    &.email{
                        &::before{
                            position: absolute;
                            content: '';
                            display: block;
                            width: 29px;
                            height: 21px;
                            top: 9px;
                            left: 0;
                            background: url('../assets/youjian.png') no-repeat;
                            box-align: cover;
                        }
                    }
                    &.service{
                        &::before{
                            position: absolute;
                            content: '';
                            display: block;
                            width: 22px;
                            height: 30px;
                            top: 3px;
                            left: 0;
                            background: url('../assets/dizhi-3.png') no-repeat;
                            box-align: cover;
                        }
                    }
                    &.retail{
                        &::before{
                            position: absolute;
                            content: '';
                            display: block;
                            width: 22px;
                            height: 21px;
                            top: 9px;
                            left: 0;
                            background: url('../assets/dianmianmingcheng.png') no-repeat;
                            box-align: cover;
                        }
                    }
                    &.wb{
                        &::before{
                            position: absolute;
                            content: '';
                            display: block;
                            width: 35px;
                            height: 30px;
                            top: 2px;
                            left: 0;
                            background: url('../assets/weibo.png') no-repeat;
                            box-align: cover;
                        }
                    }
                    &.wx{
                        &::before{
                            position: absolute;
                            content: '';
                            display: block;
                            width: 35px;
                            height: 28px;
                            top: 3px;
                            left: 0;
                            background: url('../assets/weixin-6.png') no-repeat;
                            box-align: cover;
                        }
                    }
                }
            }
        }
    }
    .org-box{
        background: #FF7272;
        padding: 52px 0 32px 0;
        display: flex;
        justify-content: center;
        .item-box{
            width: 270px;
            color: #fff;
            text-align: left;
            .title{
                font-size: 24px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #FFFFFF;
                line-height: 33px;
            }
            .each-item{
                margin-top: 25px;
                font-size: 18px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #FFFFFF;
                line-height: 25px;
            }
        }
    }
    .page-footer{
        padding: 30px 22px;
        font-size: 19px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
        line-height: 26px;
        .footer-inner{
            height: 26px;
            position: relative;
        }
        
        .right{
            position: absolute;
            top: 0;
            left: 22px;
        }
        .footer-items{
            position: absolute;
            top: 0;
            left: 822px;
            width: 581px;
            display: flex;
            justify-content: space-between;
        }
        .lang{
            position: absolute;
            top: 0;
            right: 22px;
            padding-right: 36px;
            &::after{
                position: absolute;
                content: '';
                top: 0;
                right: 0;
                width: 21px;
                height: 22px;
                background: url('../assets/diqiu.png') no-repeat;
                background-size: contain;
            }
        }
    }
}
/* mobile phone */
@media screen and (min-width:320px) {}

/* ipad pro & PC */
@media screen and (min-width:1024px) {}

/* PC */
@media screen and (min-width:1200px) {}
</style>