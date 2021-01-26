<template>
    <div class="header-wrapper">
        <div class="header-fixed">
        </div>
        <div class="header">
            <h1 class="logo" @click="goto('home')">
                <img src="../assets/logo.png" alt="">
            </h1>
            <div class="nav">
                <div class="nav-col" :key="item.index" :class="curIndex==item.index?'cur':''" v-for="item in navList" @click="goto(item.path)" @mouseover="showNav(item.index)" @mouseout="hideNav()">
                    {{item.name}}
                </div>
            </div>
            <div class="top">
            </div>
        </div>
        <div class="header-nav" v-show="isShowNav" @mouseover="showNavSub()" @mouseout="hideNav()">
            <div class="nav-container" v-show="navIndex==3">
                <span>新闻稿</span>
                <span>视频</span>
            </div>
            <div class="nav-container" v-show="navIndex ==4">
                <span @click="goto('query-price')">备件价格查询</span>
                <span @click="goto('service-network')">服务门店</span>
                <span @click="goto('about')">常见问题</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Header',
    data() {
        return {
            navIndex: 0,
            isShowNav: false,
            curIndex: 0,
            navList:[{
                name:'优畅享20Plus',
                index:1,
                path:'product1'
            },{
                name:'优畅享20',
                index:2,
                path:'product2'
            },{
                name:'新闻',
                index:3,
                path:'product1'
            },{
                name:'服务支持',
                index:4,
                path:'serve-home'
            },{
                name:'关于我们',
                index:5,
                path:'about'
            }]
        }
    },
    mounted() {},
    methods: {
        showNav(index) {
            this.navIndex = index
            this.isShowNav = true
            this.curIndex = index
        },
        showNavSub() {
            this.isShowNav = true
        },
        hideNav() {
            this.isShowNav = false
        },
        goto(path, index) {
            this.$router.push(path)
        }
    }
}
</script>
<style scoped lang=scss>
@import "@/sass/common.scss";

.header-wrapper {
    width: 100%;
    position: relative;

    .header-fixed {
        height: 90px;
    }

    .header {
        position: fixed;
        height: 90px;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        z-index: 999;

        .logo {
            margin: 21px 25px;
            width: 333px;
            height: 49px;
            cursor: pointer;
        }

        .nav {
            display: flex;
            height: 90px;
            width: 60%;

            .nav-col {
                display: flex;
                align-items: center;
                height: 100%;
                font-size: 24px;
                margin: 0 2%;
                color: #666;
                cursor: pointer;
                position: relative;

                &:hover,
                &.cur {
                    color: #333;

                    &:before {
                        height: 5px;
                        background: #FF7272;
                        border-radius: 3px;
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                    }
                }
            }
        }
    }

    .header-nav {
        position: fixed;
        width: 100%;
        top: 60px;
        left: 0;
        height: 120px;
        padding-top: 30px;
        z-index: 99;

        .nav-container {
            display: flex;
            border-top: 1px solid #f0f0f0;
            height: 90px;
            width: 100%;
            background: #fff;
            justify-content: center;
            align-items: center;

            span {
                margin: 0 60px;
                cursor: pointer;
                color:#666;
                &:hover{
                    color:#333;
                }
            }

        }
    }
}

/* PC */
@media screen and (min-width:1200px) {}
</style>