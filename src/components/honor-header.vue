<template>
    <div class="header-tab">
        <div class="header-tab-height"></div>
        <div class="container" style="background: #F5F5F5;">
            <div class="sec-navigation">
                <div class="logo">U-MAGIC</div>
                <ul class="product-tabs">
                    <li class="tab-item" :class="{'active':index==1}">
                        <a class="pointer" title="功能特征" @click="goto(link1,1)">功能特征</a>
                    </li>
                    <li class="tab-item" :class="{'active':index==2}">
                        <a class="pointer" title="规格参数" @click="goto(link2,2)">规格参数</a>
                    </li>
                </ul>
                <div class="buy-btn pointer" @mouseover="showBuy" @mouseout="hideBuy">购买</div>
                <div class="buy-pop" v-show="showPop" @mouseover="showBuy" @mouseout="hideBuy">
                    <div class="buy-pop-box">
                        <a href="https://card.10010.com/html/actv/term/product-details.html?goodsId=992101252696">10010手厅</a>
                        <a href="https://mobile.yangkeduo.com/goods.html?goods_id=219352575939">拼多多集团官旗</a>
                        <a href="https://m-zl.mucfc.com/0WEC/mall/#/pages/product/detail/index?commonId=2965099">招联</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Header-tab',
    props: {
        link1: {
            type: String,
            default: '',
        },
        link2: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            fixHeader: false,
            index: 1,
            showPop: false,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scrollHander)
        if (this.$route.path == '/' + this.link2) {
            this.index = 2
        } else {
            this.index = window.index ? window.index : 1
        }
    },
    unmounted() {
        window.removeEventListener('scroll', this.scrollHander)
    },
    methods: {
        scrollHander() {
            if (window.pageYOffset > 90) {
                this.fixHeader = true
            } else {
                this.fixHeader = false
            }
        },
        goHome() {
            this.$router.push('/home')
        },
        goto(path, index) {
            window.index = index
            this.index = index
            this.$router.push(path)
        },
        showBuy() {
            this.showPop = true
        },
        hideBuy() {
            this.showPop = false
        }
    }
}
</script>
<style scoped lang=scss>
@import "@/sass/common.scss";

.buy-pop {
    position: absolute;
    top: 40px;
    right: 12px;
    width: 180px;
    background: #fff;
    border: 1px solid #eee;
    z-index: 8;
    padding-top: 28px;
    border-radius: 10px;

    .buy-pop-box {
        display: flex;
        flex-direction: column;
        padding: 5px 10px;
        font-size: 15px;
        line-height: 36px;

        a {
            color: #000;
        }
    }

}

/* mobile phone */
@media screen and (min-width:320px) {
    .header-tab {
        height: 158px;
        width: 100%;

        .header-tab-height {
            height: 96px;
        }

        .container {
            border-bottom: 1px solid #e5e5e5;
        }


        .sec-navigation {
            height: 96px;
            background: #fff;
            position: fixed;
            top:90px;
            left: 0;
            width: 100%;
            z-index: 90;

            .logo {
                position: absolute;
                top: 18px;
                left: 12px;
                font-size: 16px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #333333;
                line-height: 33px;
            }

            .buy-btn {
                position: absolute;
                right: 12px;
                top: 18px;
                width: 180px;
                height: 32px;
                line-height: 28px;
                text-align: center;
                background: #AD0823;
                border-radius: 16px;
                font-size: 16px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #FFFFFF;
                z-index: 9;
            }

            .product-tabs {
                position: absolute;
                left: -7px;
                bottom: 0;
                display: flex;

                .tab-item {
                    position: relative;
                    margin-left: 19px;

                    &.active {
                        &::after {
                            content: '';
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            width: 100%;
                            height: 3px;
                            background: #000000;
                        }
                    }

                    &:hover {
                        a {
                            font-weight: 400;
                            color: #000;
                        }
                    }

                    &.active {
                        a {
                            font-weight: 600;
                            color: #333333;
                        }
                    }

                    a {
                        font-size: 16px;
                        display: block;
                        font-family: PingFangSC-Semibold, PingFang SC;
                        font-weight: 400;
                        color: #666666;
                        line-height: 25px;
                        padding: 0 0 12px 0;
                    }
                }
            }
        }
    }
}

/* ipad pro & PC */
@media screen and (min-width:1024px) {
    .header-tab {
        height: 180px;

        .container {
            border-bottom: 1px solid #e5e5e5;
        }
        .header-height{
            height:88px;
        }

        .sec-navigation {
            height: 88px;
            position: fixed;
            top:90px;
            left:0;
            width:100%;
            z-index: 90;
            background: #fff;

            .logo {
                position: absolute;
                top: 27px;
                left: 12px;
                font-size: 24px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #333333;
                line-height: 33px;
            }

            .buy-btn {
                position: absolute;
                right: 12px;
                top: 25px;
                width: 180px;
                height: 38px;
                line-height: 38px;
                text-align: center;
                background: #AD0823;
                border-radius: 19px;
                font-size: 18px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #FFFFFF;
                z-index: 9;
            }

            .product-tabs {
                position: absolute;
                left: 170px;
                right: auto;
                top: 34px;
                display: flex;

                .tab-item {
                    position: relative;
                    margin-left: 38px;

                    &.active {
                        &::after {
                            content: '';
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            width: 100%;
                            height: 3px;
                            background: #000000;
                        }
                    }

                    &:hover {
                        a {
                            font-weight: 400;
                            color: #000;
                        }
                    }

                    &.active {
                        a {
                            font-weight: 600;
                            color: #333333;
                        }
                    }

                    a {
                        font-size: 18px;
                        display: block;
                        font-family: PingFangSC-Semibold, PingFang SC;
                        font-weight: 400;
                        color: #666666;
                        line-height: 25px;
                        padding: 0 5px 30px;
                    }
                }
            }
        }
    }
}

/* PC */
@media screen and (min-width:1200px) {}
</style>