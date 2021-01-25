<template>
    <div class="home">
        <HeaderA :tabs="headerTabs" />
        <div class="box-wrapper">
            <div class="main">
                <ul class="row">
                    <li>
                        <div class="phone-name">
                            <img src="../assets/home/1.webp" alt="">
                        </div>
                        <div class="btns">
                            <div class="more-btn" @click="goto('product1')">了解更多</div>
                            <div class="buy-now" @click="goto('product1')">立即购买</div>
                        </div>
                        <div class="phone-img" @click="goto('product1')">
                            <img src="../assets/home/4.webp" alt="">
                        </div>
                    </li>
                    <li>
                        <div class="phone-name">
                            <img src="../assets/home/2.webp" alt="">
                        </div>
                        <div class="btns">
                            <div class="more-btn" @click="goto('product2')">了解更多</div>
                            <div class="buy-now" @click="goto('product2')">立即购买</div>
                        </div>
                        <div class="phone-img" @click="goto('product2')">
                            <img src="../assets/home/3.webp" alt="">
                        </div>
                    </li>
                </ul>
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
        padding: 0.5% 0;
        background: #f2f2f2;
        .main {
            display: flex;
            justify-content: center;
            width: 100%;
            .row{
                width: 100%;
            }
            ul{
                display: flex;
                justify-content: space-evenly;
                li{
                    display: flex;
                    flex-direction: column;
                    /*flex: 1;*/
                    padding: 0;
                    /*margin: 0 5px;*/
                    background: #fff;
                    width: 49%;
                    .btns{
                        margin-bottom: 50px;
                        .more-btn{
                            cursor: pointer;
                            font-size: 1vw;
                            border-radius: 2vw;
                            border: 1px solid #000000;
                            padding: 0.1vw 1vw;
                            margin-top: 0.3vw;
                            display: inline-block;
                            margin: 0 1vw;
                            color: #000000;
                        }
                        .buy-now{
                            cursor: pointer;
                            font-size: 1vw;
                            border-radius: 2vw;
                            border: 1px solid #000000;
                            padding: 0.1vw 1vw;
                            margin-top: 0.3vw;
                            display: inline-block;
                            margin: 0 1vw;
                            background-color: #000000;
                            color: #ffffff;
                        }
                    }
                    .phone-name{
                        margin: 50px auto 30px;
                        height: 100px;
                        img{
                            height: 100%;
                        }
                    }
                    .phone-img{
                        cursor: pointer;
                        margin: 0 auto;
                        width: 360px;
                        margin-bottom: 50px;
                        /*height: 250px;*/
                        img{
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 768px) {
   .home .box-wrapper{
        flex-direction: column;
       .main {
           display: flex;
           justify-content: center;
           width: 100%;
           .row{
               width: 100%;
           }
           ul{
               display: flex;
               justify-content: space-around;
               li{
                   display: flex;
                   flex-direction: column;
                   /*flex: 1;*/
                   padding: 0;
                   /*margin: 0 5px;*/
                   background: #fff;
                   width: 100%;
                   margin-bottom: 0.5%;
                   .btns{
                       margin-bottom: 50px;
                       .more-btn{
                           font-size: 16px;
                           border-radius: 16px;
                           border: 1px solid #000000;
                           padding: 5px 10px;
                           margin-top: 0.3vw;
                           display: inline-block;
                           margin: 0 5vw;
                           color: #000000;
                       }
                       .buy-now{
                           font-size: 16px;
                           border-radius: 16px;
                           border: 1px solid #000000;
                           padding: 5px 10px;
                           margin-top: 0.3vw;
                           display: inline-block;
                           margin: 0 5vw;
                           background-color: #000000;
                           color: #ffffff;
                       }
                   }
                   .phone-name{
                       margin: 50px auto 30px;
                       height: 100px;
                       img{
                           height: 100%;
                       }
                   }
                   .phone-img{
                       margin: 0 auto;
                       width: 360px;
                       margin-bottom: 50px;
                       /*height: 250px;*/
                       img{
                           width: 100%;
                       }
                   }
               }
           }
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