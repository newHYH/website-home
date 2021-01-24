<template>
    <div class="footer">
        <div class="container">
            <div class="connect pc">
                <p class="connect-title">联系我们</p>
                <div class="connect-box">
                    <div class="connect-item">
                        <p class="title">电话支持</p>
                        <div class="func-box call">
                            <p>消费者服务电话4000118111</p>
                            <p>7*24小时 | 普通话</p>
                        </div>
                    </div>
                    <div class="connect-item">
                        <p class="title">在线支持</p>
                        <div class="func-box online">
                            <p>在线客服</p>
                        </div>
                        <!-- <div class="func-box email">
                            <p>邮件咨询</p>
                        </div>
 -->                    </div>
                    <div class="connect-item">
                        <p class="title">线下支持</p>
                        <div class="func-box service pointer" @click="goto('service-network')">
                            <p>服务店</p>
                        </div>
                        <div class="func-box retail pointer" @click="goto('service-network')">
                            <p>零售店</p>
                        </div>
                    </div>
                    <div class="connect-item">
                        <p class="title">社交支持</p>
                        <div class="func-box wb">
                            <a href="https://weibo.com/nokiae7?is_all=1" target="view_window">微博</a>
                        </div>
                        <!-- <div class="func-box wx">
                            <p>微信公众号</p>
                        </div> -->
                    </div>
                </div>
            </div>
            <div class="connect mobile">
                <p class="connect-title">联系我们</p>
                <div class="connect-box row">
                    <div class="connect-item col-12">
                        <p class="title">电话支持</p>
                        <div class="func-box call">
                            <p>消费者服务电话<a class="tel" href="tel:950800">4000118111</a></p>
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
                        <div class="func-box service pointer"  @click="goto('service-network')">
                            <p>服务店</p>
                        </div>
                        <div class="func-box retail pointer" @click="goto('service-network')">
                            <p>零售店</p>
                        </div>
                    </div>
                    <div class="connect-item col-6">
                        <p class="title">社交支持</p>
                        <div class="func-box wb">
                            <a href="https://weibo.com/nokiae7?is_all=1" target="view_window">微博</a>
                        </div>
                        <!-- <div class="func-box wx">
                            <p>微信公众号</p>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="org-box">
            <div class="item-box" @mouseover="showBuy" @mouseout="hideBuy">
                <p class="title">购买手机</p>
                <div class="each-item pointer" >手机</div>
                <div class="buy-pop" v-show="showPop"  @mouseover="showBuy" @mouseout="hideBuy">
                  <div class="each-item">
                        <a href="http://www.woego.cn/">沃易购</a>
                    </div>
                    <div class="each-item">
                        <a href="https://lths.tmall.com/shop/view_shop.htm?spm=a230r.1.14.21.788c2756UeLhDt&user_number_id=2231547606">天猫</a>
                    </div>
                    <div class="each-item">
                        <a href="https://mall.jd.com/index-607119.html">京东</a>
                    </div>
                </div>
            </div>
            <div class="item-box">
                <p class="title">服务与支持</p>
                <div class="each-item pointer" @click="goto('support')">保修政策</div>
                <div class="each-item pointer" @click="goto('query-price')">维修备件价格</div>
                <div class="each-item">联系我们</div>
                <div class="each-item">服务隐私声明</div>
            </div>
            <div class="item-box">
                <p class="title">应用与下载</p>
                <div class="each-item">终端云服务</div>
                <div class="each-item pointer" @click="goto('notice')">预置应用公示</div>
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
                    <div class="copy">
Copyright © 2020-2023 ChinaUnicom All Rights Reserved.联通华盛通信有限公司  <span style="padding-left:12px;">京ICP备09019351号-1</span>
</div>
                    <div class="nav">
                        <ul class="footer-items">
                            <li class="f-item">网站地图</li>
                            <li class="f-item">使用条款</li>
                            <li class="f-item">隐私声明</li>
                            <li class="f-item">关于cokies</li>
                            <li class="f-item">法律信息</li>
                        </ul>
                    </div>
                    <div class="lang"><span>China-简体中文</span></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'Footer',
    data() {
        return{
            showPop:false
        }
    },
    mounted() {

    },
    methods: {
        goto(path){
            console.log(path)
            this.$router.push(path)
        },
        showBuy() {
            this.showPop = true
        },
        hideBuy(){
            this.showPop = false
        }
    }
}
</script>
<style scoped lang=scss>
@import "@/sass/common.scss";
.buy-pop{
    border-top:1px solid #fff;
    margin-top: 12px;
    width:80%;
    .each-item{
        margin-top: 10px !important;
    }
}
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
                            a{
                                color:#999
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
                    .pointer{
                         cursor: pointer;
                    }
                   
                    a{
                        color:#fff;
                    }
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
                justify-content:space-around;
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
                            .pointer{
                                cursor: pointer;
                            }
                            
                            p{
                                margin-bottom: 8px;
                            }
                            a{
                                color:#999
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
                    a{
                        color:#fff;
                    }
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
                justify-content:space-around;
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
                            a{
                                color:#999
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
                justify-content:space-around;
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