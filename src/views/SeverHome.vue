<template>
    <div class="server">
        <Header />
        <div class="serve-banner">
            <img class="bg" src="../assets/banner.jpg">
            <div class="content">
                <div class="title">
                    欢迎使用联通服务
                </div>
                <div class="text">
                    您需要什么帮助？
                </div>
                <div class="search-box">
                    <input type="search" class="search" name="" placeholder="请输入您想要了解的信息">
                    <button class="search-btn"></button>
                </div>
            </div>
        </div>
        <div class="serve-product">
            <div class="serve-hd">
                <div class="serve-title">
                    了解您的商品
                </div>
                <div class="serve-text mobile-hide">
                    查看产品使用手册、常见问题、软件及驱动，提供服务查询、维修查询，了解产品相关服务活动
                </div>
            </div>
            <div class="serve-bd">
                <div class="product-wrapper">
                    <div class="product-box">
                        <div class="img">
                            <img src="../assets/serve-1.png" alt="华为手机">
                        </div>
                        <div class="name">
                            华为手机
                        </div>
                    </div>
                    <div class="product-box">
                        <div class="img">
                            <img src="../assets/serve-1.png" alt="小米手机">
                        </div>
                        <div class="name">
                            小米手机
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="serve-repair">
            <div class="serve-hd">
                <div class="serve-title">
                    获取维修相关服务
                </div>
                <div class="serve-text mobile-hide">
                    查询客户服务中心，产品保修期及权益查询，备件价格等维修服务
                </div>
            </div>
            <div class="serve-bd">
                <div class="serve-con">
                    <div class="img">
                        <img src="../assets/serve-3.png">
                    </div>
                    <div class="con-wrapper" @click="goUrl('query-price')">
                        <div class="con-icon">
                            <img src="../assets/serve-icon-1.png">
                        </div>
                        <div class="text">备件价格查询</div>
                        <div class="text mobile-hide">查询非保修常用备件维修参考价 <img class="link-icon" src="../assets/jinru-2.png" alt=""></div>
                    </div>
                </div>
                <div class="serve-con">
                    <div class="con-wrapper" @click="goUrl('/service-network')">
                        <div class="con-icon">
                            <img src="../assets/serve-icon-2.png">
                        </div>
                        <div class="text">服务店查询</div>
                        <div class="text mobile-hide">查询服务店相关信息<img src="../assets/jinru-2.png" class="link-icon" alt=""></div>
                    </div>
                    <div class="img">
                        <img src="../assets/serve-4.png">
                    </div>
                </div>
            </div>
        </div>
        <div class="serve-question">
            <div class="serve-hd">
                <div class="serve-title">
                    常见问题
                </div>
                <div class="serve-text mobile-hide">
                    查找常见问题，帮您快速定位故障，提供有效解决方案
                </div>
            </div>
            <div class="serve-bd">
                <div class="serve-que-wrapper">
                    <div class="serve-que-inner">
                        <div class="que-list">
                            <div class="list-row">
                                <div class="text">
                                    <span class="radius">1</span>
                                    <span class="font ft38">问：</span><span>手机屏幕碎掉怎么办？</span>
                                </div>
                                <div class="content">
                                    <span class="font blue ft38">答：</span><span class="font">可以选择去售后中心更换新的屏幕。</span>
                                </div>
                            </div>
                            <div class="list-row">
                                <div class="text">
                                    <span class="radius">2</span>
                                    <span class="font ft38">问：</span><span>手机屏幕碎掉怎么办？</span>
                                </div>
                                <div class="content">
                                    <span class="font blue ft38">答：</span><span class="font">可以选择去售后中心更换新的屏幕。</span>
                                </div>
                            </div>
                            <div class="list-row">
                                <div class="text">
                                    <span class="radius">3</span>
                                    <span class="font ft38">问：</span><span>手机屏幕碎掉怎么办？</span>
                                </div>
                                <div class="content">
                                    <span class="font blue ft38">答：</span><span class="font">可以选择去售后中心更换新的屏幕。</span>
                                </div>
                            </div>
                            <div class="list-row">
                                <div class="text">
                                    <span class="radius">4</span>
                                    <span class="font ft38">问：</span><span>手机屏幕碎掉怎么办？</span>
                                </div>
                                <div class="content">
                                    <span class="font blue ft38">答：</span><span class="font">可以选择去售后中心更换新的屏幕。</span>
                                </div>
                            </div>
                            <div class="list-row">
                                <div class="text">
                                    <span class="radius">5</span>
                                    <span class="font ft38">问：</span><span>手机屏幕碎掉怎么办？</span>
                                </div>
                                <div class="content">
                                    <span class="font blue ft38">答：</span><span class="font">可以选择去售后中心更换新的屏幕。</span>
                                </div>
                            </div>
                            <div class="list-row">
                                <div class="text">
                                    <span class="radius">6</span>
                                    <span class="font ft38">问：</span><span>手机屏幕碎掉怎么办？</span>
                                </div>
                                <div class="content">
                                    <span class="font blue ft38">答：</span><span class="font">可以选择去售后中心更换新的屏幕。</span>
                                </div>
                            </div>
                        </div>
                        <div class="que-more">
                            <span class="link">查看更多热门问题</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Header from '@/components/header.vue';

export default {
    name: 'ServeHome',
    components: {
        Header
    },
    data() {
        return {}
    },
    mounted() {

    },
    methods: {
        goUrl(path){
            this.$router.push(path)
        }
    }
}
</script>
<style scoped lang=scss>
@import "@/sass/common.scss";

.server {
    width: 100%;
}

.serve-banner {
    width: 100%;
    position: relative;

    .bg {
        width: 100%;
        vertical-align: top;
    }

    .content {
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        display: flex;
        color: #fff;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        .title {
            font-size: torem(50);
            margin-bottom: torem(40);
        }

        .text {
            font-size: torem(40);
            margin-bottom: torem(80);
        }

        .search-box {
            display: flex;
            width: torem(688);
            height: torem(56);
            min-height: 40px;
            overflow: hidden;
            border-radius: torem(6);
            background: #fff;
            position: relative;

            .search {
                width: 100%;
                height: 100%;
                font-size: torem(24);
                color: #999;
                padding: 0 torem(25);
            }

            .search-btn {
                background: url(../assets/sousuo-2.png) no-repeat;
                background-size: 100%;
                z-index: 3;
                cursor: pointer;
                width: 20px;
                height: 20px;
                position: absolute;
                top: 50%;
                margin-top: -10px;
                right: torem(25);
            }
        }
    }
}

.serve-hd {
    width: 100%;
    margin-top: torem(78);
    padding-bottom: torem(68);
    text-align: center;
    color: #333;

    .serve-title {
        font-size: torem(50);
        margin-bottom: torem(28);
    }

    .serve-text {
        font-size: torem(18);
    }
}

.serve-bd {
    width: 100%;
    overflow: hidden;
}

.product-wrapper {
    width: torem(1042);
    margin: 0 auto;
    justify-content: space-between;
    display: flex;

    .product-box {
        width: torem(496);
        background: #F9F8F8;

        border-radius: torem(9);

        .img {
            width: 100%;
        }

        .name {
            padding: torem(48) 0;
            text-align: center;
            font-size: torem(48);
        }
    }
}

.serve-repair {
    padding: 0 torem(102);

    .serve-con {
        width: 100%;
        display: flex;
    }

    .img {
        width: torem(1002);
    }

    .con-wrapper {
        display: flex;
        flex: 1;
        background: #FF7272;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .con-icon {
            width: torem(202);
            height: torem(202);
            margin-bottom: torem(20);
        }

        .link-icon {
            width: torem(15);
            height: torem(28);
            margin-left: torem(6);
            margin-top: torem(4);

        }

        .text {
            font-size: torem(32);
            color: #fff;
            margin: torem(10) 0;
            display: flex;
            align-items: center;
        }
    }
}

.serve-question {
    padding: 0 torem(102);

    .serve-que-wrapper {
        background: #F7F7F7;
        padding: torem(65) torem(85);

        .serve-que-inner {
            background: #fff;
            border-radius: torem(44);
            padding: torem(55);

            .que-list {
                display: flex;
                flex-wrap: wrap;

                .list-row {
                    width: 50%;
                    text-align: left;
                    color: #333;
                    font-size: torem(34);

                    .text {
                        padding: torem(12) 0;

                        .radius {
                            width: torem(48);
                            height: torem(48);
                            border-radius: 100%;
                            display: inline-flex;
                            font-size: torem(34);
                            color: #fff;
                            background: #FF7272;
                            justify-content: center;
                            align-items: center;
                            margin-right: torem(9);
                        }
                    }

                    .font.ft38 {
                        font-size: torem(38);
                    }

                    .font.blue {
                        color: #0679FF;
                    }

                    .content {
                        padding: torem(12) 0 torem(12) torem(57);

                    }
                }
            }

            .que-more {
                padding-top: torem(60);

                .link {
                    color: #037AFF;
                    font-size: torem(32);
                }
            }
        }
    }
}

@media screen and (max-width: 750px) {
    .mobile-hide {
        display: none !important;
    }

    .serve-banner {
        margin-bottom: 53vw;

        .content {
            top: calc(100% + 8vw);
            color: #000;

            .title {
                font-size: 6.133333vw;
                font-weight: 700;
            }

            .text {
                font-size: 4.266667vw;
            }

            .search-box {
                width: 77.333333vw;
                height: 40px;
                border: 1px solid rgba(0, 0, 0, 0.25);
                border-radius: 1.066666vw;
            }
        }
    }

    .serve-hd {
        padding-top: 4vw;
        margin-top: 9.333333vw;
        margin-bottom: 10.666667vw;
        padding-bottom: 0;

        .serve-title {
            font-size: 5.066667vw;
            font-weight: 700;
        }
    }

    .product-wrapper {
        width: 100%;
        justify-content: space-between;
        display: flex;

        .product-box {
            width: 40%;
            margin: 0 5%;

            .name {
                padding: torem(48) 0;
                text-align: center;
                font-size: torem(72);
            }
        }
    }

    .serve-question {
        padding: 0;
        .serve-que-wrapper {
            .serve-que-inner {
                .que-list {
                    display: flex;
                    flex-wrap: wrap;
                    .list-row {
                        width: 100%;

                    }
                }
            }
        }
    }
}
</style>