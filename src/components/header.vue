<template>
    <div class="header">
        <div class="header-btn-box container">
            <div class="target-btn" @click="downHeadMenu()">
                <span class="target-name">消费者业务网站</span>
                <i class="iconfont icon-arrow-up"></i>
            </div>
        </div>
        <div class="container slide-down-box" :class="headerSlideDown ? 'active' : ''">
            <div class="slide-down-menu">
                <div class="platform-selection__item col-md-6 col-lg-3">
                    <a title="个人用户" class="platform-selection__link link-active" target="_blank" data-bgname="个人用户">
                        个人用户 <span class="iconfont icon-arrow-right"></span>
                    </a>
                    <p class="platform-selection__item-content">手机，PC和平板，穿戴设备等个人及家用产品</p>
                </div>
            
                <div class="platform-selection__item col-md-6 col-lg-3">
                    <a title="集团网站" class="platform-selection__link" target="_blank" data-bgname="集团网站" href="http://www.huawei.com/cn">
                        集团网站 <span class="iconfont icon-arrow-right"></span>
                    </a>
                    <p class="platform-selection__item-content">公司信息，社会责任，新闻，展会活动，行业洞察等等</p>
                </div>
            
                <div class="platform-selection__item col-md-6 col-lg-3">
                    <a title="企业用户" class="platform-selection__link" target="_blank" data-bgname="企业用户" href="http://e.huawei.com/cn">
                        企业用户 <span class="iconfont icon-arrow-right"></span>
                    </a>
                    <p class="platform-selection__item-content">企业商用产品、解决方案和云服务</p>
                </div>
            
                <div class="platform-selection__item col-md-6 col-lg-3">
                    <a title="运营商用户" class="platform-selection__link" target="_blank" data-bgname="运营商用户" href="http://carrier.huawei.com/cn">
                        运营商用户 <span class="iconfont icon-arrow-right"></span>
                    </a>
                    <p class="platform-selection__item-content">运营商网络解决方案、产品及服务</p>
                </div>
            </div>
        </div>
        <div></div>
    </div>
</template>
<script>

export default {
    name: 'Header',
    data() {
        return{
            headerSlideDown: false
        }
    },
    mounted() {

    },
    methods: {
        downHeadMenu () {
            this.headerSlideDown = !this.headerSlideDown
        }
    }
}
</script>
<style scoped lang=scss>
@import "@/sass/common.scss";

/* mobile */
@media screen and (min-width:350px) {
    .header{
        .header-btn-box{
            display: none;
        }
    }
}

/* PC */
@media screen and (min-width:1200px) {
    .header{
        height:24px + 80px ;
        .header-btn-box{
            display: block;
            background-color: #000;
            line-height: 24px;
            height: 24px;
            .target-btn{
                cursor: pointer;
                text-align: left;
                color: #fff;
                font-size: 11px;
                .target-name{
                    vertical-align: top;
                }
                .iconfont{
                    display: inline-block;
                    transform: rotate(180deg);
                }
            }
        }
        .slide-down-box{
            position: absolute;
            top: 24px;
            left: 0;
            width: 100%;
            height: 0;
            overflow: hidden;
            transition: all 1s ease-in-out;
            &.active{
                height: 145px;
            }
            .slide-down-menu{
                padding: 32px 0;
                display: flex;
                flex-wrap: wrap;
                margin-right: -20px;
                margin-left: -20px;
                font-size: 14px;
                .platform-selection__item{
                    text-align: left;
                    .platform-selection__link{
                        font-size: 14px;
                        font-weight: 500;
                        color: #c3172e;
                        line-height: 24px;
                        margin-bottom: 8px;
                        display: inline-block;
                        &.link-active{
                            color: #000;
                        }
                    }
                    .platform-selection__item-content{
                        font-size: 14px;
                        line-height: 24px;
                        font-weight: 500;
                        color: #7f7f7f;
                    }
                }
            }
        }
    }
}
</style>