<template>
    <div class="footer">
        <div class="container">
            <div class="connect pc">
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
            <div class="connect mobile">
                <p class="connect-title">联系我们</p>
                <div class="connect-box row">
                    <div class="connect-item col-12">
                        <p class="title">电话支持</p>
                        <div class="func-box call">
                            <p>消费者服务电话<a class="tel" href="tel:950800">950800</a></p>
                            <p>7*24小时 | 普通话</p>
                        </div>
                    </div>
                    <div class="connect-item col-6">
                        <p class="title">在线支持</p>
                        <div class="func-box online">
                            <p>在线客服</p>
                        </div>
                        <div class="func-box email">
                            <p>邮件咨询</p>
                        </div>
                    </div>
                    <div class="connect-item col-6">
                        <p class="title">线下支持</p>
                        <div class="func-box service"  @click="goto('service-network')">
                            <p>服务店</p>
                        </div>
                        <div class="func-box retail">
                            <p>零售店</p>
                        </div>
                    </div>
                    <div class="connect-item col-6">
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
                <div class="each-item" @click="goto('support')">保修政策</div>
                <div class="each-item">维修备件价格</div>
                <div class="each-item">联系我们</div>
                <div class="each-item">服务隐私声明</div>
            </div>
            <div class="item-box">
                <p class="title">应用与下载</p>
                <div class="each-item">终端云服务</div>
                <div class="each-item" @click="goto('notice')">预置应用共公示</div>
            </div>
            <div class="item-box">
                <p class="title">关于我们</p>
                <div class="each-item">关于我们</div>
                <div class="each-item">隐私</div>
            </div>
        </div>
        <div class="container">
            <div class="page-footer">
                <div class="footer-inner row">
                    <div class="right col-12 col-md-12 col-xl-6 col-xxl-5">版权所有 © 中国联合通信有限公司 1998-2021。保留一切权利。粤A2-20044005号</div>
                    <div class="col-md-6 col-12 col-xl-3 col-xxl-4 offset-xxl-1">
                        <ul class="footer-items">
                            <li class="f-item">网站地图</li>
                            <li class="f-item">使用条款</li>
                            <li class="f-item">隐私声明</li>
                            <li class="f-item">关于cokies</li>
                            <li class="f-item">法律信息</li>
                        </ul>
                    </div>
                    <div class="lang col-12 col-md-6 col-xl-3 col-xxl-2"><span>China-简体中文</span></div>
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
        goto(path){
            this.$router.push(path)
        }
    }
}
</script>
<style scoped lang=scss>
@import "@/sass/common.scss";

/* mobile phone */
@media screen and (min-width:320px) {
    .footer{
        .connect{
            &.mobile{
                display: block;
                background: #fff;
                padding: 0 22px;
                .connect-title{
                    padding: 37px 0;
                    line-height: 1.2;
                    font-size: 32px;
                    text-align: center;
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
                        margin-bottom: 25px;
                        .title{
                            height: 20px;
                            font-size: 16px;
                            font-family: PingFangSC-Medium, PingFang SC;
                            font-weight: 500;
                            color: #666666;
                            line-height: 20px;
                        }
                        .func-box{
                            position: relative;
                            margin: 16px 0;
                            padding-left: 30px;
                            font-size: 13px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #999999;
                            line-height: 20px;
                            p{
                                margin-bottom: 6px;
                            }
                            &.call{
                                &::before{
                                    position: absolute;
                                    content: '';
                                    display: block;
                                    left: 0;
                                    background: url('../assets/dianhua-6.png') no-repeat;
                                    top: 0;
                                    width: 20px;
                                    height: 20px;
                                    background-size: contain;
                                    background-position: center;
                                }
                                .tel{
                                    color: #0091ff;
                                }
                            }
                            &.online{
                                &::before{
                                    position: absolute;
                                    content: '';
                                    display: block;
                                    left: 0;
                                    background: url('../assets/kefu-2.png') no-repeat;
                                    top: 0;
                                    width: 20px;
                                    height: 20px;
                                    background-size: contain;
                                    background-position: center;
                                }
                            }
                            &.email{
                                &::before{
                                    position: absolute;
                                    content: '';
                                    display: block;
                                    left: 0;
                                    background: url('../assets/youjian.png') no-repeat;
                                    top: 0;
                                    width: 20px;
                                    height: 20px;
                                    background-size: contain;
                                    background-position: center;
                                }
                            }
                            &.service{
                                &::before{
                                    position: absolute;
                                    content: '';
                                    display: block;
                                    left: 0;
                                    background: url('../assets/dizhi-3.png') no-repeat;
                                    top: 0;
                                    width: 20px;
                                    height: 20px;
                                    background-size: contain;
                                    background-position: center;
                                }
                            }
                            &.retail{
                                &::before{
                                    position: absolute;
                                    content: '';
                                    display: block;
                                    left: 0;
                                    background: url('../assets/dianmianmingcheng.png') no-repeat;
                                    top: 0;
                                    width: 20px;
                                    height: 20px;
                                    background-size: contain;
                                    background-position: center;
                                }
                            }
                            &.wb{
                                &::before{
                                    position: absolute;
                                    content: '';
                                    display: block;
                                    left: 0;
                                    background: url('../assets/weibo.png') no-repeat;
                                    top: 0;
                                    width: 20px;
                                    height: 20px;
                                    background-size: contain;
                                    background-position: center;
                                }
                            }
                            &.wx{
                                &::before{
                                    position: absolute;
                                    content: '';
                                    display: block;
                                    left: 0;
                                    background: url('../assets/weixin-6.png') no-repeat;
                                    top: 0;
                                    width: 20px;
                                    height: 20px;
                                    background-size: contain;
                                    background-position: center;
                                }
                            }
                        }
                    }
                }
            }
            &.pc{
                display: none;
            }
        }
        .org-box{
            background: #FF7272;
            padding: 18px 22px 18px 22px;
            .item-box{
                width: 100%;
                color: #fff;
                text-align: left;
                margin-bottom: 16px;
                .title{
                    font-size: 16px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #FFFFFF;
                    line-height: 20px;
                    margin-bottom: 4px;
                }
                .each-item{
                    font-size: 13px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #FFFFFF;
                    line-height: 20px;
                    cursor: pointer;
                }
            }
        }
        .page-footer{
            padding: 20px 22px;
            font-size: 13px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #999999;
            line-height: 20px;
            .footer-inner{
                line-height: 20px;
            }
            .right{
                text-align: left;
            }
            .footer-items{
                max-width: 360px;
                display: flex;
                justify-content: space-between;
            }
            .lang{
                padding-right: 36px;
                text-align: left;
                span{
                    position: relative;
                    &::after{
                        position: absolute;
                        content: '';
                        top: 0;
                        right: -23px;
                        width: 14px;
                        height: 14px;
                        background: url('../assets/diqiu.png') no-repeat;
                        background-size: contain;
                    }
                }
                
            }
        }
    }
}

/* ipad */
@media screen and (min-width:768px) {
    .footer{
        .connect{
            &.mobile{
                display: none;
            }
            &.pc{
                display: block;
                background: #fff;
                padding: 0 22px;
                .connect-title{
                    padding: 37px 0;
                    line-height: 1.2;
                    font-size: 32px;
                    text-align: center;
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
                            height: 20px;
                            font-size: 16px;
                            font-family: PingFangSC-Medium, PingFang SC;
                            font-weight: 500;
                            color: #666666;
                            line-height: 20px;
                        }
                        .func-box{
                            position: relative;
                            margin: 25px 0;
                            padding-left: 30px;
                            font-size: 13px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #999999;
                            line-height: 20px;
                            cursor: pointer;
                            p{
                                margin-bottom: 8px;
                            }
                            &.call{
                                &::before{
                                    position: absolute;
                                    content: '';
                                    display: block;
                                    left: 0;
                                    background: url('../assets/dianhua-6.png') no-repeat;
                                    top: 0;
                                    width: 20px;
                                    height: 20px;
                                    background-size: contain;
                                    background-position: center;
                                }
                            }
                            &.online{
                                &::before{
                                    position: absolute;
                                    content: '';
                                    display: block;
                                    left: 0;
                                    background: url('../assets/kefu-2.png') no-repeat;
                                    top: 0;
                                    width: 20px;
                                    height: 20px;
                                    background-size: contain;
                                    background-position: center;
                                }
                            }
                            &.email{
                                &::before{
                                    position: absolute;
                                    content: '';
                                    display: block;
                                    left: 0;
                                    background: url('../assets/youjian.png') no-repeat;
                                    top: 0;
                                    width: 20px;
                                    height: 20px;
                                    background-size: contain;
                                    background-position: center;
                                }
                            }
                            &.service{
                                &::before{
                                    position: absolute;
                                    content: '';
                                    display: block;
                                    left: 0;
                                    background: url('../assets/dizhi-3.png') no-repeat;
                                    top: 0;
                                    width: 20px;
                                    height: 20px;
                                    background-size: contain;
                                    background-position: center;
                                }
                            }
                            &.retail{
                                &::before{
                                    position: absolute;
                                    content: '';
                                    display: block;
                                    left: 0;
                                    background: url('../assets/dianmianmingcheng.png') no-repeat;
                                    top: 0;
                                    width: 20px;
                                    height: 20px;
                                    background-size: contain;
                                    background-position: center;
                                }
                            }
                            &.wb{
                                &::before{
                                    position: absolute;
                                    content: '';
                                    display: block;
                                    left: 0;
                                    background: url('../assets/weibo.png') no-repeat;
                                    top: 0;
                                    width: 20px;
                                    height: 20px;
                                    background-size: contain;
                                    background-position: center;
                                }
                            }
                            &.wx{
                                &::before{
                                    position: absolute;
                                    content: '';
                                    display: block;
                                    left: 0;
                                    background: url('../assets/weixin-6.png') no-repeat;
                                    top: 0;
                                    width: 20px;
                                    height: 20px;
                                    background-size: contain;
                                    background-position: center;
                                }
                            }
                        }
                    }
                }
            }
        }
        .org-box{
            padding: 18px 30px 18px 30px;
            display: flex;
            justify-content: center;
            .item-box{
                max-width: 140px;
                color: #fff;
                text-align: left;
                margin-bottom: 16px;
                .title{
                    font-size: 16px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #FFFFFF;
                    line-height: 20px;
                    margin-bottom: 4px;
                }
                .each-item{
                    font-size: 13px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #FFFFFF;
                    line-height: 20px;
                }
            }
        }
        .page-footer{
            padding: 26px 18px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #999999;
            line-height: 22px;
            .footer-inner{
                line-height: 22px;
            }
            .right{
                text-align: center;
            }
            .footer-items{
                width: 380px;
                display: flex;
                justify-content: space-between;
            }
            .lang{
                padding-right: 36px;
                text-align: right;
                span{
                    position: relative;
                    &::after{
                        position: absolute;
                        content: '';
                        top: 0;
                        right: -23px;
                        width: 14px;
                        height: 14px;
                        background: url('../assets/diqiu.png') no-repeat;
                        background-size: contain;
                    }
                }
            }
        }
    }
}

/* PC */
@media screen and (min-width:1200px) {
    .footer{
        .connect{
            &.mobile{
                display: none;
            }
            &.pc{
                display: block;
                background: #fff;
                padding: 0 torem(22);
                .connect-title{
                    padding: torem(77) 0;
                    line-height: torem(50);
                    text-align: center;
                    font-size: torem(36);
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #333333;
                }
                .connect-box{
                    padding-bottom: torem(42);
                    display: flex;
                    justify-content: space-between;
                    .connect-item{
                        text-align: left;
                        .title{
                            height: torem(40);
                            font-size: torem(28);
                            font-family: PingFangSC-Medium, PingFang SC;
                            font-weight: 500;
                            color: #666666;
                            line-height: torem(40);
                        }
                        .func-box{
                            position: relative;
                            margin: torem(35) 0;
                            padding-left: torem(50);
                            font-size: torem(28);
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #999999;
                            line-height: torem(40);
                            p{
                                margin-bottom: torem(15);
                            }
                            &.call{
                                &::before{
                                    position: absolute;
                                    content: '';
                                    display: block;
                                    width: torem(28);
                                    height: torem(30);
                                    top: torem(4);
                                    left: 0;
                                    background: url('../assets/dianhua-6.png') no-repeat;
                                    background-size: cover;
                                }
                            }
                            &.online{
                                &::before{
                                    position: absolute;
                                    content: '';
                                    display: block;
                                    width: torem(29);
                                    height: torem(29);
                                    top: torem(3);
                                    left: 0;
                                    background: url('../assets/kefu-2.png') no-repeat;
                                    background-size: cover;
                                }
                            }
                            &.email{
                                &::before{
                                    position: absolute;
                                    content: '';
                                    display: block;
                                    width: torem(29);
                                    height: torem(21);
                                    top: torem(9);
                                    left: 0;
                                    background: url('../assets/youjian.png') no-repeat;
                                    background-size: cover;
                                }
                            }
                            &.service{
                                &::before{
                                    position: absolute;
                                    content: '';
                                    display: block;
                                    width: torem(22);
                                    height: torem(30);
                                    top: torem(3);
                                    left: 0;
                                    background: url('../assets/dizhi-3.png') no-repeat;
                                    background-size: cover;
                                }
                            }
                            &.retail{
                                &::before{
                                    position: absolute;
                                    content: '';
                                    display: block;
                                    width: torem(22);
                                    height: torem(21);
                                    top: torem(9);
                                    left: 0;
                                    background: url('../assets/dianmianmingcheng.png') no-repeat;
                                    background-size: cover;
                                }
                            }
                            &.wb{
                                &::before{
                                    position: absolute;
                                    content: '';
                                    display: block;
                                    width: torem(35);
                                    height: torem(30);
                                    top: torem(2);
                                    left: 0;
                                    background: url('../assets/weibo.png') no-repeat;
                                    background-size: cover;
                                }
                            }
                            &.wx{
                                &::before{
                                    position: absolute;
                                    content: '';
                                    display: block;
                                    width: torem(35);
                                    height: torem(28);
                                    top: torem(3);
                                    left: 0;
                                    background: url('../assets/weixin-6.png') no-repeat;
                                    background-size: cover;
                                }
                            }
                        }
                    }
                }
            }
        }
        .org-box{
            background: #FF7272;
            padding: torem(52) 0 torem(32) 0;
            display: flex;
            justify-content: center;
            .item-box{
                width: torem(270);
                max-width: torem(270);
                color: #fff;
                text-align: left;
                .title{
                    font-size: torem(24);
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #FFFFFF;
                    line-height: torem(33);
                }
                .each-item{
                    margin-top: torem(25);
                    font-size: torem(18);
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #FFFFFF;
                    line-height: torem(25);
                }
            }
        }
        .page-footer{
            padding: torem(30) torem(22);
            font-size: torem(19);
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #999999;
            line-height: torem(26);
            .footer-inner{
                line-height: torem(26);
            }
            .right{
                text-align: left;
            }
            .footer-items{
                width: torem(581);
                max-width: none;
                display: flex;
                justify-content: space-between;
            }
            .lang{
                padding-right: torem(36);
                text-align: right;
                /* &::after{
                    position: absolute;
                    content: '';
                    top: 0;
                    right: 0;
                    width: torem(21);
                    height: torem(22);
                    background: url('../assets/diqiu.png') no-repeat;
                    background-size: contain;
                } */
                span{
                    position: relative;
                    &::after{
                        position: absolute;
                        content: '';
                        top: torem(-2);
                        right: torem(-35);
                        width: torem(21);
                        height: torem(22);
                        background: url('../assets/diqiu.png') no-repeat;
                        background-size: contain;
                    }
                }
            }
        }
    }
}
</style>