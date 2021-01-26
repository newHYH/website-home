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
            <div class="UMAGIC">
                <img src="../assets/UMAGIC.png" alt="">
            </div>
            <div class="nav-mobile">
                <div class="nav-icon" @click="handleOpen()" :class="isOpenNav?'nav-icon-close':'nav-icon-open'"></div>
                <div class="nav-mobile-list" v-show="isOpenNav">
                    <div class="nav-col" :key="item.index" :class="curIndex==item.index?'cur':''" v-for="item in navList" >
                        <p @click="goto(item.path,item.index)">
                            {{item.name}}
                            <span class="icon" :class="item.showChild?'icon-add':'icon-del'" v-if="item.child"></span>
                        </p>
                        <div class="nav-child" v-show="item.showChild">
                            <div class="nav-container" :key="index" v-for="(child,index) in item.child">
                                <p @click="goto(child.path)">{{child.name}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-nav" v-show="isShowNav" @mouseover="showNavSub()" @mouseout="hideNav()">
            <div class="nav-container" v-show="navIndex==3">
                <span @click="goto('newsList')">新闻稿</span>
                <span @click="goto('publicVideo')">视频</span>
            </div>
            <div class="nav-container" v-show="navIndex ==4">
                <span @click="goto('query-price')">备件价格查询</span>
                <span @click="goto('service-network')">服务门店</span>
                <span @click="goto('problem')">常见问题</span>
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
            isOpenNav:false,
            curIndex: 0,
            navList: [{
                name: '优畅享20Plus',
                index: 1,
                path: 'product1'
            }, {
                name: '优畅享20',
                index: 2,
                path: 'product2'
            }, {
                name: '新闻',
                index: 3,
                path: '',
                showChild: false,
                child: [{
                    name: '新闻稿',
                    path: 'newsList'
                }, {
                    name: '视频',
                    path: 'publicVideo'
                }]
            }, {
                name: '服务支持',
                index: 4,
                path: '',
                showChild: false,
                child: [{
                    name: '备件价格查询',
                    path: 'query-price'
                }, {
                    name: '服务门店',
                    path: 'service-network'
                }, {
                    name: '常见问题',
                    path: 'about'
                }]
            }, {
                name: '关于我们',
                index: 5,
                path: 'about'
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
        handleOpen(){
            this.isOpenNav = !this.isOpenNav
        },
        goto(path, index) {
                console.log(path)
            if (path) {
                this.$router.push(path)
            } else {
                let idx = index - 1
                this.navList.forEach((item, int) => {
                    if (item.child) {
                        if (idx == int) {
                            item.showChild = !item.showChild
                        } else {
                            item.showChild = false
                        }

                    }
                })
            }

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
        background: #fff;

        .logo {
            margin: 0 25px;
            width: 333px;
            height: 90px;
            display: flex;
            align-items: center;
            cursor: pointer;
        }

        .UMAGIC {
            width: 213px;
            height: 90px;
            display: flex;
            align-items: center;
            position: absolute;
            right: 10px;
            top: 0;

            img {
                width: 213px;
                height: 31px;
            }
        }

        .nav-mobile {
            display: none;
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
                margin: 0 5%;
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
                        left: 50%;
                        margin-left: -24px;
                        width: 48px;
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
                color: #666;

                &:hover {
                    color: #333;
                }
            }

        }
    }
}

@media screen and (max-width:1280px) {
    .header-wrapper .header .logo {
        width: 280px;
    }

    .header-wrapper .header .nav .nav-col {
        margin: 0 2%;
        font-size: 20px;
    }

    .header-wrapper .header .UMAGIC {
        width: 106px;
    }

    .header-wrapper .header .UMAGIC img {
        height: auto;
        width: 106px;
    }
}

/* s手机 */
@media screen and (max-width:750px) {
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
            padding-top:12px; 

            .logo {
                margin: 0 25px;
                width: 133px;
                height: 36px;
                cursor: pointer;
            }

            .nav {
                display: none;
            }

            .nav-mobile {
                display: block;
                overflow: hidden;
                position: fixed;
                top: 60px;
                left: 12px;

                .nav-icon {
                    content: '';
                    height: 16px;
                    width: 20px;

                    &.nav-icon-open {

                        background: url(../assets/zuoshangjiao_chouti.png) no-repeat;
                        background-size: 100%;
                    }

                    &.nav-icon-close {

                        background: url(../assets/zuoshangjiao_guanbi.png) no-repeat;
                        background-size: 100%;
                    }
                }

                .nav-mobile-list {
                    background: #fff;
                    width: 100%;
                    position: fixed;
                    left: 0;
                    right: 0;
                    height: 100%;
                    padding: 0 32px;

                    .nav-col {
                        font-size: 14px;
                        line-height: 50px;
                        text-align: left;
                        color: #333;
                        border-bottom: 1px solid #E3E4E5;

                        p {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                        }

                        .icon {
                            width: 11px;
                            height: 11px;

                            &.icon-add {
                                background: url(../assets/zhankai.png) no-repeat;
                                background-size: 100%;
                            }

                            &.icon-del {
                                background: url(../assets/jiahao.png) no-repeat;
                                background-size: 100%;
                            }
                        }
                    }
                }

            }

            .UMAGIC {
                width: 82px;
                height: 36px;
                top:12px;
            }
        }


    }
}
</style>