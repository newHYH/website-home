<template>
    <div class="header">
        <div class="container fixed">
            <div class="navigation">
                <span class="logo" @click="goto('/home')">
                    <img src="@/assets/logo.png" />
                </span>
                <ul class="product-tabs">
                    <li class="tab-item" v-for="(item, index) in tabs" :key="index" :class="item.active ? 'active' : ''">
                        <a class="pointer" @click="goto(item.link)"  :title="item.name">{{item.name}}</a>
                    </li>
                </ul>
                <div class="right-box big">
                    <!-- <div class="search-box">
                        <Search :border='borderSet' />
                    </div>
                    <div class="login-btn pointer">登录</div> -->
                </div>
                <div class="right-box small">
                   <!--  <div class="search-box pointer"></div>
                    <div class="login-btn pointer">登录</div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//import Search from '@/components/searchInput.vue';

export default {
    name: 'ChildPageHeader',
    components: {
        //Search
    },
    props: {
        tabs: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return{
            fixHeader: false,
            borderSet: {
                has: true,
                width: 1,
                type: 'solid',
                color: '#E6E6E6',
                radius: 8
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scrollHander)
    },
    unmounted () {
        window.removeEventListener('scroll', this.scrollHander)
    },
    methods: {
        goto(path){
            this.$router.push(path)
        },
        scrollHander () {
            if (window.pageYOffset > 0) {
                this.fixHeader = true
            } else {
                this.fixHeader = false
            }
        }
    }
}
</script>

<style scoped lang=scss>
@import "@/sass/common.scss";

/* mobile phone */
@media screen and (min-width:320px) {
    .header{
        height: 91px;
        .container{
            border-bottom: 1px solid #e5e5e5;
        }
        .fixed{
            position: fixed;
            z-index: 1000;
            top: 0;
            left: 0;
            width: 100%;
            background: rgba(255,255,255,0.9);
            backdrop-filter: saturate(180%) blur(20px);
        }
        .navigation{
            position: relative;
            width: 100%;
            height: 70px;
            padding: 0 22px;
            .logo{
                display: block;
                width: 100%;
                height: 30px;
                top: 20px;
                left: 12px;
                margin-top: 20px;
                text-align: left;
                img{
                    height: 100%;
                    width: auto;
                }
            }
            .product-tabs{
                margin-top: 5px;
                bottom: 0;
                display: flex;
                .tab-item{
                    position: relative;
                    margin-left: torem(81);
                    &:first-child{
                        margin-left: 0;
                    }
                    &.active{
                        &::after{
                            content: '';
                            position: absolute;
                            bottom: -1px;
                            left: 0;
                            width: 100%;
                            height: 3px;
                            background: #FF7272;
                            border-radius: 2px;
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
                            font-size: 14px;
                            font-family: PingFangSC-Medium, PingFang SC;
                            font-weight: 500;
                            color: #333333;
                        }
                    }
                    a{
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #999999;
                        line-height: 33px;
                        height: 33px;
                        display: block;
                        padding: 0 0 2px 0;
                    }
                }
            }
        }
    }
}

/* ipad */
@media screen and (min-width:768px) {
    .header{
        height: 61px;
        .container{
            border-bottom: 1px solid #e5e5e5;
        }
        .fixed{
            position: fixed;
            z-index: 1000;
            top: 0;
            left: 0;
            width: 100%;
            background: rgba(255,255,255,0.9);
            backdrop-filter: saturate(180%) blur(20px);
        }
        .navigation{
            position: relative;
            width: 100%;
            height: 60px;
            padding: 0 22px;
            display: flex;
            justify-content: space-between;
            .logo{
                display: block;
                width: 162px;
                height:25px;
                top: 20px;
                left: 12px;
                margin-top: 20px;
                margin-right: 12px;
            }
            .product-tabs{
                margin-top: 17px;
                bottom: 0;
                display: flex;
                .tab-item{
                    position: relative;
                    margin-left: torem(81);
                    &:first-child{
                        margin-left: 0;
                    }
                    &.active{
                        &::after{
                            content: '';
                            position: absolute;
                            bottom: -1px;
                            left: 0;
                            width: 100%;
                            height: 3px;
                            background: #FF7272;
                            border-radius: 2px;
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
                            font-size: 14px;
                            font-family: PingFangSC-Medium, PingFang SC;
                            font-weight: 500;
                            color: #333333;
                        }
                    }
                    a{
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #999999;
                        line-height: 33px;
                        height: 33px;
                        display: block;
                        padding: 0 0 13px 0;
                    }
                }
            }
            .right-box{
                position: relative;
                width: 5px;
                margin-top: 19px;
                &.big{
                    display: none;
                }
                &.small{
                    display: block;
                }
                .search-box{
                    position: absolute;
                    top: 2px;
                    left: 0;
                    width: 20px;
                    height: 20px;
                    background: url('../assets/sousuo-2.png') no-repeat;
                    background-size: contain;
                }
                .login-btn{
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 56px;
                    height: 24px;
                    line-height: 24px;
                    text-align: center;
                    background: #FF7272;
                    border-radius: 21px;
                    color: #fff;
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                }
            }
            
        }
    }
}

/* PC */
@media screen and (min-width:1200px) {
    .header{
        height: 91px;
        .container{
            border-bottom: 1px solid #e5e5e5;
        }
        .fixed{
            position: fixed;
            z-index: 1000;
            top: 0;
            left: 0;
            width: 100%;
            background: rgba(255,255,255,0.9);
            backdrop-filter: saturate(180%) blur(20px);
        }
        .navigation{
            position: relative;
            width: 100%;
            height: 90px;
            padding: 0 22px;
            display: flex;
            justify-content: space-between;
            .logo{
                display: block;
                width:200px;
                height: 29px;
                margin-top: 35px;
                cursor: pointer;
            }
            .product-tabs{
                margin-top: 29px;
                bottom: 0;
                display: flex;
                .tab-item{
                    position: relative;
                    margin-left: torem(81);
                    &:first-child{
                        margin-left: 0;
                    }
                    &.active{
                        &::after{
                            content: '';
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            width: 100%;
                            height: 5px;
                            background: #FF7272;
                            border-radius: 3px;
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
                            font-size: 24px;
                            font-family: PingFangSC-Medium, PingFang SC;
                            font-weight: 500;
                            color: #333333;
                        }
                    }
                    a{
                        font-size: 24px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #999999;
                        line-height: 33px;
                        height: 33px;
                        display: block;
                        padding: 0 9px 26px 9px;
                    }
                }
            }
            .right-box{
                position: relative;
                width: 534px;
                margin-top: 24px;
                &.big{
                    display: block;
                }
                &.small{
                    display: none;
                }
                .search-box{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 376px;
                    height: 42px;
                    background: none;
                }
                .login-btn{
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 128px;
                    height: 42px;
                    line-height: 42px;
                    text-align: center;
                    background: #FF7272;
                    border-radius: 21px;
                    color: #fff;
                    font-size: 24px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                }
            }
            
        }
    }
}
</style>