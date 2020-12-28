<template>
    <div class="home">
        <HeaderA :tabs="headerTabs" />
        <div class="box-wrapper">
            <div class="sider">
                <div class="sider-text">全部手机</div>
            </div>
            <div class="main">
                <div class="pro-box">
                    <div class="pro-img">
                        <div class="pro-buy" @click="goto('phone-page')">
                            <span class="buy-btn">了解更多</span>
                            <span class="buy-btn">购买</span>
                        </div>
                        <img src="../assets/phone-1.png" alt="">
                    </div>
                    <div class="pro-name">
                        HUAWEI Mate 40 Pro
                    </div>
                </div>
                <div class="pro-box-con">
                    <div class="pro-con">
                        <div class="pro-img">
                            <div class="pro-buy" @click="goto('phone-page')">
                                <span class="buy-btn">了解更多</span>
                                <span class="buy-btn">购买</span>
                            </div>
                            <img src="../assets/phone-2.png" alt="">
                        </div>
                        <div class="pro-name">
                            Redmi K30 Pro 变焦版
                        </div>
                    </div>
                    <div class="pro-con">
                        <div class="pro-img" @click="goto('phone-page')">
                            <div class="pro-buy">
                                <span class="buy-btn">了解更多</span>
                                <span class="buy-btn">购买</span>
                            </div>
                            <img src="../assets/phone-3.png" alt="">
                        </div>
                        <div class="pro-name">
                            Redmi K30 Pro 变焦版
                        </div>
                    </div>
                </div>
                <div class="pro-box">
                    <div class="pro-img" @click="goto('phone-page')">
                        <div class="pro-buy">
                            <span class="buy-btn">了解更多</span>
                            <span class="buy-btn">购买</span>
                        </div>
                        <img src="../assets/phone-4.png" alt="">
                    </div>
                    <div class="pro-name">
                        Redmi 9A
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
// import Header from '@/components/header.vue';
import HeaderA from '@/components/headerA.vue';
import Footer from '@/components/footer.vue';

export default {
    name: 'Home',
    components: {
        // Header,
        HeaderA,
        Footer
    },
    data() {
        return {
            headerTabs: [
                {
                    name: '手机',
                    link: '/home',
                    active: true
                },
                {
                    name: '售后服务',
                    link: '/serve-home',
                    active: false
                }
            ]
        }
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

/*功能title样式*/
.home {
    width: 100%;
    overflow: hidden;

    .box-wrapper {
        padding: torem(77) torem(102) 0;
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

        .main {
            display: flex;
            width: torem(1349);
            justify-content: space-between;

            .pro-box {
                width: torem(481);

                .pro-img {
                    width: torem(481);
                    position: relative;
                    overflow: hidden;
                    transition: .6s ease-out;

                    .pro-buy {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(0, 0, 0, 0.4);
                        opacity: 0;
                        z-index: 1;
                        display: flex;
                        cursor: pointer;
                        align-items: center;
                        flex-direction: column;
                        justify-content: center;
                        -webkit-transition: opacity .5s cubic-bezier(0.455, 0.03, 0.515, 0.955);

                        .buy-btn {
                            margin:torem(34) 0;
                            background: #fff;
                            border-radius: torem(30);
                            width:torem(184);
                            height: torem(56);
                            line-height: torem(56);
                            color:#333;
                            font-size: torem(24);
                            transition: .3s ease-out;
                            transform: translateY(50px);
                            &:last-child{
                                transition: transform .3s ease-out .2s,opacity .3s ease-out,-webkit-transform .3s ease-out .2s;
                            }
                        }
                    }

                    &:hover {
                        .pro-buy {
                            opacity: 1;
                            .buy-btn{
                                transform: translateY(0)
                            }
                        }

                        img {
                            transform: scale(1.1);
                            transition: .3s ease-out;
                        }
                    }
                }

                .pro-name {
                    font-size: torem(24);
                    color: #333;
                    margin: torem(35) 0;
                }
            }

            .pro-box-con {
                width: torem(272);

                .pro-img {
                    width: torem(272);
                    overflow: hidden;
                    position: relative;
                    transition: .6s ease-out;
                    .pro-buy {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(0, 0, 0, 0.4);
                        opacity: 0;
                        z-index: 1;
                        display: flex;
                        cursor: pointer;
                        align-items: center;
                        flex-direction: column;
                        justify-content: center;
                        -webkit-transition: opacity .5s cubic-bezier(0.455, 0.03, 0.515, 0.955);

                        .buy-btn {
                            margin:torem(34) 0;
                            background: #fff;
                            border-radius: torem(30);
                            width:torem(184);
                            height: torem(56);
                            line-height: torem(56);
                            color:#333;
                            font-size: torem(24);
                            transition: .3s ease-out;
                            transform: translateY(50px);
                            &:last-child{
                                transition: transform .3s ease-out .2s,opacity .3s ease-out,-webkit-transform .3s ease-out .2s;
                            }
                        }
                    }

                    &:hover {
                        img {
                            transform: scale(1.1);
                            transition: .3s ease-out;
                        }
                    }

                }

                .pro-name {
                    font-size: torem(24);
                    color: #333;
                    margin: torem(35) 0;
                }
            }
        }
    }
}
@media screen and (max-width: 768px) {
   .home .box-wrapper{
        flex-direction: column;
        .sider{
            margin-bottom: 20px;
        }
        .main{
            width: 100%;
        }
    }
}
@media screen and (max-width: 750px) {
   .home .box-wrapper{
        .sider{
            width:100%;
            .sider-text{
                font-size:1rem;
                height:auto;
                width:100%;
                border-radius: 0 0.4rem 0.4rem 0;
            }
        }
        .main{
            flex-wrap: wrap;
            .pro-box{
                width:100%;
                .pro-img{
                    width:100%;
                    .pro-buy{
                        .buy-btn{
                            margin-bottom:12px;
                            width:184px;
                            height:56px;
                            line-height: 56px;
                            font-size:22px;
                            border-radius: 30px;
                        }
                    }
                }
                .pro-name{
                    font-size:0.8rem;
                }
                margin-bottom: 0.4rem;
            }
            .pro-box-con{
                width:100%;
                .pro-con{
                    margin-bottom: 0.4rem;
                }
                .pro-img{
                    width:100%;
                    .pro-buy{
                        .buy-btn{
                            margin-bottom:12px;
                            width:184px;
                            height:56px;
                            line-height: 56px;
                            font-size:22px;
                            border-radius: 30px;
                        }
                    }
                    &:hover{
                        .pro-buy {
                            opacity: 1;
                            .buy-btn{
                                transform: translateY(0)
                            }
                        }
                    }
                }
                .pro-name{
                    font-size:0.8rem;
                }
            }

        }
    }
}
</style>