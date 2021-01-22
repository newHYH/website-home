<template>
    <div class="header">
        <div class="container">
            <div class="fix-navigation">
                <a class="logo" href="/cn">
                    <img src="@/assets/logo.png" />
                </a>
                <div class="nav-title">手机</div>
                <div class="func-box">
                    <div class="search-btn">
                        <img src="@/assets/search-icon.png" />
                    </div>
                    <div class="account-btn">
                        <img src="@/assets/account-icon.png" />
                    </div>
                    <div class="login-btn">登录</div>
                </div>
            </div>
        </div>
        <div class="container" style="background: #F5F5F5;" :class="fixHeader ? 'fixed' : ''">
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
                <div class="buy-btn pointer">购买</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Header',
    props:{
        link1:{
            type:String,
            default:'',
        },
        link2:{
            type:String,
            default:''
        }
    },
    data() {
        return{
            fixHeader: false,
            index:1,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scrollHander)
        if(this.$route.path == '/'+this.link2){
            this.index = 2
        }else{
           this.index =  window.index?window.index:1 
        }
    },
    unmounted () {
        window.removeEventListener('scroll', this.scrollHander)
    },
    methods: {
        scrollHander () {
            if (window.pageYOffset > 90) {
                this.fixHeader = true
            } else {
                this.fixHeader = false
            }
        },
        goto(path,index){
             window.index = index
            this.index = index
            this.$router.push(path)
        }
    }
}
</script>
<style scoped lang=scss>
@import "@/sass/common.scss";

/* mobile phone */
@media screen and (min-width:320px) {
    .header{
        height: 158px;
        width: 100%;
        .container{
            border-bottom: 1px solid #e5e5e5;
            &.fixed{
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                background: rgba(255,255,255,0.9);
                backdrop-filter: saturate(180%) blur(20px);
                z-index: 1000;
            }
        }
        .fix-navigation{
            height: 60px;
            position: relative;
            .logo{
                position: absolute;
                width: 52px;
                height: 28px;
                top: 16px;
                left: 12px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .nav-title{
                font-size: 16px;
                line-height: 60px;
            }
            .func-box{
                position: absolute;
                right: 12px;
                top: 16px;
                display: flex;
                .login-btn{
                    width: 62px;
                    height: 28px;
                    line-height: 24px;
                    text-align: center;
                    border-radius: 12px;
                    border: 2px solid #979797;
                    font-size: 16px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #333333;
                    cursor: pointer;
                }
                .search-btn,
                .account-btn{
                    height: 28px;
                    cursor: pointer;
                }
                .account-btn{
                    margin-right: 20px;
                    padding-top: 2px;
                    img{
                        width: 20px;
                        height: 23.333px;
                    }
                }
                .search-btn{
                    margin-right: 25px;
                    padding-top: 4px;
                    img{
                        width: 20.66px;
                        height: 20.66px;
                    }
                }
            }
        }
        .sec-navigation{
            height: 96px;
            position: relative;
            .logo{
                position: absolute;
                top: 18px;
                left: 12px;
                font-size: 16px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #333333;
                line-height: 33px;
            }
            .buy-btn{
                position: absolute;
                right: 12px;
                top: 18px;
                width: 78px;
                height: 32px;
                line-height: 28px;
                text-align: center;             
                background: #AD0823;
                border-radius: 16px;
                font-size: 16px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #FFFFFF;
            }
            .product-tabs{
                position: absolute;
                left: -7px;
                bottom: 0;
                display: flex;
                .tab-item{
                    position: relative;
                    margin-left: 19px;
                    &.active{
                        &::after{
                            content: '';
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            width: 100%;
                            height: 3px;
                            background: #000000;
                        }
                    }
                    &:hover{
                        a{
                            font-weight: 400;
                            color: #000;
                        }
                    }
                    &.active{
                        a{
                            font-weight: 600;
                            color: #333333;
                        }
                    }
                    a{
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
    .header{
        height: 180px;
        .container{
            border-bottom: 1px solid #e5e5e5;
            &.fixed{
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                background: rgba(255,255,255,0.9);
                backdrop-filter: saturate(180%) blur(20px);
            }
        }
        .fix-navigation{
            height: 90px;
            position: relative;
            .logo{
                position: absolute;
                width: 78px;
                height: 42px;
                top: 24px;
                left: 12px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .nav-title{
                position: absolute;
                top: 0;
                left: 50%;
                margin-left: -30px;
                width: 60px;
                line-height: 90px;
                text-align: center;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                font-size: 24px;
                color: #333333;
            }
            .func-box{
                position: absolute;
                right: 12px;
                top: 24px;
                display: flex;
                .login-btn{
                    width: 93px;
                    height: 42px;
                    line-height: 38px;
                    text-align: center;
                    border-radius: 12px;
                    border: 2px solid #979797;
                    font-size: 24px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #333333;
                    cursor: pointer;
                }
                .search-btn,
                .account-btn{
                    height: 42px;
                    cursor: pointer;
                }
                .account-btn{
                    margin-right: 29px;
                    padding-top: 4px;
                    img{
                        width: 30px;
                        height: 35px;
                    }
                }
                .search-btn{
                    margin-right: 38px;
                    padding-top: 7px;
                    img{
                        width: 31px;
                        height: 31px;
                    }
                }
            }
        }
        .sec-navigation{
            height: 88px;
            position: relative;
            .logo{
                position: absolute;
                top: 27px;
                left: 12px;
                font-size: 24px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #333333;
                line-height: 33px;
            }
            .buy-btn{
                position: absolute;
                right: 12px;
                top: 25px;
                width: 90px;
                height: 38px;
                line-height: 38px;
                text-align: center;             
                background: #AD0823;
                border-radius: 19px;
                font-size: 18px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #FFFFFF;
            }
            .product-tabs{
                position: absolute;
                left: 170px;
                right: auto;
                top: 34px;
                display: flex;
                .tab-item{
                    position: relative;
                    margin-left: 38px;
                    &.active{
                        &::after{
                            content: '';
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            width: 100%;
                            height: 3px;
                            background: #000000;
                        }
                    }
                    &:hover{
                        a{
                            font-weight: 400;
                            color: #000;
                        }
                    }
                    &.active{
                        a{
                            font-weight: 600;
                            color: #333333;
                        }
                    }
                    a{
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
@media screen and (min-width:1200px) {
    
}
</style>