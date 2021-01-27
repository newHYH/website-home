<template>
    <div class="footer">
        <div class="connect">
            <div class="connect-box">
                <div class="connect-item">
                    <p class="title">售后电话</p>
                    <div class="func-box">
                        <p>消费者服务电话 400-011-8111</p>
                        <p>7*24小时 | 普通话</p>
                    </div>
                </div>
                <div class="connect-item">
                    <p class="title">服务与支持</p>
                    <div class="func-box pointer" @click="goto('query-price')">
                        <p>维修备件价格</p>
                    </div>
                </div>
                <div class="connect-item">
                    <p class="title">应用与下载</p>
                    <div class="func-box pointer" @click="goto('notice')">
                        <p>预置应用公示</p>
                    </div>
                </div>
                <div class="connect-item">
                    <p class="title">线下支持</p>
                    <div class="func-box pointer" @click="goto('service-network')">
                        <p>服务门店</p>
                    </div>
                </div>
                <div class="connect-item">
                    <p class="title">关注我们</p>
                    <div class="func-box">
                        <p><a href="https://weibo.com/nokiae7?is_all=1" target="view_window"><img src="../assets/weibo.png" class="wb" alt=""></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="page-footer">
            <div class="footer-inner">
                Copyright © 2020-2023 ChinaUnicom All Rights Reserved.联通华盛通信有限公司 <span style="padding-left:12px;">京ICP备09019351号-1</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Footer',
    data() {
        return {}
    },
    mounted() {

    },
    methods: {
        goto(path) {
            this.$router.push(path)
        },
    }
}
</script>
<style scoped lang=scss>
@import "@/sass/common.scss";


.footer {
    max-width: 1278px;
    margin: 0 auto;

    .connect {
        padding: 50px 0;

        .connect-box {
            display: flex;
            justify-content: space-between;

            .connect-item {
                text-align: left;

                .title {

                    height: 33px;
                    font-size: 18px;
                    color: #333;
                    line-height: 33px;
                }

                .func-box {
                    font-size: 12px;
                    color: #666;
                    line-height: 25px;
                    position: relative;

                    p {
                        margin-top: 24px;
                        color: #666;

                    }

                    a {
                        color: #999
                    }

                    .wb {

                        width: 25px;
                        height: 20px;
                    }
                }
            }
        }

    }

    .page-footer {
        max-width: 1278px;
        margin: 0 auto;
        padding: 30px 0;
        font-size: 12px;
        color: #999999;
        line-height: 1.5;

        .footer-inner {
            text-align: left;
        }


    }
}

@media screen and (max-width:1280px) {
    .footer {
        padding:0 30px;
        max-width: 1200px;
        .page-footer {
            max-width: 1200px;
        }
    }
}

/* 手机 */
@media screen and (max-width:750px) {
    .footer .connect .connect-box {
        flex-direction: column;
        padding-left: 20px;

        .connect-item .title {
            margin-top: 20px;
            font-size: 13px;
        }

        .connect-item .func-box {
            font-size: 12px;
        }
    }

    .footer .page-footer {
        padding: 30px 15px;
        font-size: 11px;
    }
}
</style>