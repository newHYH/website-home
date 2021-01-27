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
                    <p>{{item.name}}</p>
                    <div class="nav-child" v-show="curIndex==item.index">
                        <div class="nav-container" :key="index" v-for="(child,index) in item.child">
                            <p @click="goto(child.path)">{{child.name}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="UMAGIC">
                <img src="../assets/UMAGIC.png" alt="">
            </div>
            <div class="header-nav" v-show="isShowNav">
                <div class="nav-container" v-show="navIndex==3 || navIndex==4"></div>
            </div>
            <div class="nav-mobile">
                <div class="nav-icon" @click="handleOpen()" :class="isOpenNav?'nav-icon-close':'nav-icon-open'"></div>
                <transition name="fade" enter-active-class="animate__animated animate__slideInLeft" leave-active-class="animate__animated animate__slideOutLeft">
                    <div class="nav-mobile-list" v-if="isOpenNav">
                        <div class="nav-col" :key="item.index" :class="curIndex==item.index?'cur':''" v-for="item in navList">
                            <p @click="goto(item.path,item.index)">
                                {{item.name}}
                                <span class="icon" :class="item.showChild?'icon-add':'icon-del'" v-if="item.child"></span>
                            </p>
                            <div class="nav-child" :class="item.showChild?'down':'up'">
                                <div class="nav-container" :key="index" v-for="(child,index) in item.child">
                                    <p @click="goto(child.path)">{{child.name}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
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
            isOpenNav: false,
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
                    path: 'problem'
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
            this.curIndex = -1
        },
        handleOpen() {
            this.isOpenNav = !this.isOpenNav
        },
        goto(path, index) {
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
    overflow: hidden;

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
            margin: 0 192px 0 25px;
            width: 266px;
            height: 90px;
            display: flex;
            align-items: center;
            cursor: pointer;
        }

        .UMAGIC {
            width: 149px;
            height: 90px;
            display: flex;
            align-items: center;
            position: absolute;
            right: 10px;
            top: 0;
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
                font-size: 18px;
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

                .nav-child {
                    position: fixed;
                    top: 90px;
                    display: flex;
                    height:90px;
                    margin-left: -172px;
                    width: 400px;
                    align-items: center;
                        justify-content: center;
                    z-index: 999;

                    .nav-container {
                        margin: 0 20px;
                        cursor: pointer;
                        color: #666;

                        p {
                            cursor: pointer;
                            font-size: 16px;
                            color: #666;

                            &:hover {
                                color: #333;
                            }
                        }

                    }

                }
            }
        }
    }

    .header-nav {
        position: fixed;
        width: 100%;
        top: 90px;
        left: 0;
        height: 90px;
        z-index: 900;
        overflow: hidden;

        .nav-container {
            display: flex;
            border-top: 1px solid #f0f0f0;
            height: 90px;
            width: 100%;
            background: rgba(255, 255, 255, 0.9);
            box-shadow: 0px 0 3px rgba(0, 0, 0, 0.2);
            justify-content: center;
            align-items: center;

            span {
                margin: 0 60px;
                cursor: pointer;
                font-size: 18px;
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
        width: 266px;
        margin-right: 50px;
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

    .header-wrapper .header-nav .nav-container span {
        font-size: 20px;
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
            padding-top: 12px;

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

                        .nav-child {
                            max-height: 0;
                            overflow: hidden;
                            transition: max-height 0.6s;

                            &.down {
                                max-height: 150px;
                            }

                            &.up {
                                max-height: 0;
                            }
                        }
                    }
                }

            }

            .UMAGIC {
                width: 82px;
                height: 36px;
                top: 12px;
            }
        }


    }
}
</style>