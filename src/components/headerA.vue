<template>
    <div class="header">
        <div class="container" :class="fixHeader ? 'fixed' : ''">
            <div class="navigation">
                <a class="logo" href="/cn">
                    <img src="@/assets/logo.png" />
                </a>
                <ul class="product-tabs">
                    <li class="tab-item active">
                        <a class="pointer" title="功能特征">功能特征</a>
                    </li>
                    <li class="tab-item">
                        <a class="pointer" title="规格参数">规格参数</a>
                    </li>
                </ul>
                <div class="search-box">
                    <Search :border='borderSet' />
                </div>
                <div class="logo-btn pointer">登录</div>
            </div>
        </div>
    </div>
</template>

<script>
import Search from '@/components/searchInput.vue';

export default {
    name: 'ChildPageHeader',
    components: {
        Search
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
            .logo{
                position: absolute;
                display: block;
                width: 98px;
                height: 53px;
                top: 19px;
                left: 22px;
            }
            .product-tabs{
                position: absolute;
                left: none;
                right: 970px;
                bottom: 0;
                display: flex;
                .tab-item{
                    position: relative;
                    margin-left: 81px;
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
                        display: block;
                        padding: 0 9px 26px 9px;
                    }
                }
            }
            .search-box{
                position: absolute;
                top: 24px;
                left: none;
                right: 180px;
                width: 376px;
                height: 42px;
            }
            .logo-btn{
                position: absolute;
                top: 24px;
                right: 22px;
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

/* ipad pro & PC */
@media screen and (min-width:1024px) {

}

/* PC */
@media screen and (min-width:1200px) {
    
}
</style>