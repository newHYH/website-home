<template>
    <div class="wrapper" :style="{'--navHeight': `${navHeight}px`}" ref="wrapper">
        <div class="move-container">
            <div class="bg" :style="{'--bgOpacity': `${opacityPercent}`}"></div>

            <div class="intro-box" :class="loaded ? 'active' : ''">
                <div class="title">
                    <div class="logo">China UNICOM 40 Pro</div>
                    <div class="slogan">跃见非凡</div>
                </div>

                <div class="product">
                    <picture>
                        <source type="image/webp" media="(max-aspect-ratio:1/1)" srcset="../assets/kv/1-n-xs.webp">
                        <source type="image/webp" media="(min-width: 1920px)" srcset="../assets/kv/1-n@2x.webp">
                        <source type="image/webp" media="(min-width: 1024px)" srcset="../assets/kv/1-n@2x.webp">
                        <source type="image/webp" srcset="../assets/kv/1-n.webp">
                        <source type="image/png" media="(max-aspect-ratio:1/1)" srcset="../assets/kv/1-n-xs.png">
                        <img src="../assets/kv/1-n.png">
                    </picture>
                    
                    <picture>
                        <source type="image/webp" media="(max-aspect-ratio:1/1)" srcset="../assets/kv/2-n-xs.webp">
                        <source type="image/webp" media="(min-width: 1920px)" srcset="../assets/kv/2-n@2x.webp">
                        <source type="image/webp" media="(min-width: 1024px)" srcset="../assets/kv/2-n@2x.webp">
                        <source type="image/webp" srcset="../assets/kv/2-n.webp">
                        <source type="image/png" media="(max-aspect-ratio:1/1)" srcset="../assets/kv/2-n-xs.png">
                        <img src="../assets/kv/2-n.png">
                    </picture>
                    
                    <picture>
                        <source type="image/webp" media="(max-aspect-ratio:1/1)" srcset="../assets/kv/3-n-xs.webp">
                        <source type="image/webp" media="(min-width: 1920px)" srcset="../assets/kv/3-n@2x.webp">
                        <source type="image/webp" media="(min-width: 1024px)" srcset="../assets/kv/3-n@2x.webp">
                        <source type="image/webp" srcset="../assets/kv/3-n.webp">
                        <source type="image/png" media="(max-aspect-ratio:1/1)" srcset="../assets/kv/3-n-xs.png">
                        <img src="../assets/kv/3-n.png">
                    </picture>
                    
                    <picture>
                        <source type="image/webp" media="(max-aspect-ratio:1/1)" srcset="../assets/kv/4-n-xs.webp">
                        <source type="image/webp" media="(min-width: 1920px)" srcset="../assets/kv/4-n@2x.webp">
                        <source type="image/webp" media="(min-width: 1024px)" srcset="../assets/kv/4-n@2x.webp">
                        <source type="image/webp" srcset="../assets/kv/4-n.webp">
                        <source type="image/png" media="(max-aspect-ratio:1/1)" srcset="../assets/kv/4-n-xs.png">
                        <img src="../assets/kv/4-n.png">
                    </picture>
                </div>
            </div>
        </div>
    </div>
    <div class="block"></div>
</template>

<script>
export default {
    name: 'kv-loader',
    props: {
        
    },
    created() {
        this.$nextTick(()=>{
            setTimeout(() => {
                this.loaded = true
            }, 10)
            
        })
    },
    data() {
        return{
            opacityPercent: 0, // [0-0.5]
            navHeight: 90,
            loaded: false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scrollHander)
    },
    unmounted () {
        window.removeEventListener('scroll', this.scrollHander)
    },
    methods: {
        scrollHander(){
            // let wrapperOffsetTop = this.$refs.wrapper.offsetTop // 距离页面顶端距离
            let pageYOffset = window.pageYOffset // 页面滑动高度
            let wrapperH = this.$refs.wrapper.offsetHeight // box高度

            this.opacityPercent = 0.5 * (pageYOffset / wrapperH)
        }
    }
}
</script>

<style scoped lang=scss>
@import "@/sass/common.scss";

.block{
    height: calc(6.41026vw + 76.92308px);
}

.wrapper{
    /* 计算整体高度，使用全屏高度减 */
    height: calc(100vh - var(--navHeight));
    position: relative;
    -webkit-font-smoothing: antialiased;
    .move-container{
        width: 100%;
        height: 100%;
        position: sticky;
        top: var(--navHeight);
        height: calc(100vh - var(--navHeight));
        overflow: hidden;
        .bg{
            background-color: #000;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 1;
            opacity: var(--bgOpacity);
        }
        .intro-box{
            position: relative;
            z-index: 2;
            height: 100%;
            display: flex;
            flex-direction: column;
            width: calc(82.05128vw + 4.61538px);
            margin: 0 auto;
            .title{
                height: 26%;
                flex: 2;
                display: flex;
                flex-direction: column;
                justify-content: center;
                text-align: center;
                vertical-align: baseline;
                &>*{
                    transform: translate(0,100px);
                    transition: transform 1s .2s cubic-bezier(.2,.8,.3,1), opacity 1s .2s cubic-bezier(.2,.8,.3,1);
                    opacity: 0;
                }
                .logo{
                    font-size: calc(1.53846vw + 18.46154px);
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #333333;
                }
                .slogan{
                    transition-delay: .3s;
                    font-size: calc(1.53846vw + 18.46154px);
                }
            }
            @media (min-aspect-ratio: 16/11){
                .product {
                    max-width: 112vh;
                }
            }
            @media (max-aspect-ratio: 1/1){
                .product {
                    max-height: 100%;
                }
            }
            
            .product{
                width: 100%;
                max-width: 132vh;
                height: 74%;
                max-height: 60vw;
                margin: 0 auto;
                position: relative;
                picture{
                    img{
                        position: absolute;
                        bottom: 0;
                        opacity: 0;
                        transition: transform 1s 1s cubic-bezier(.2,.8,.3,1),opacity 1s 1s cubic-bezier(.2,.8,.3,1);
                        z-index: 2;
                        height: 100%;
                    }
                    &:nth-child(1){
                        img{
                            width: 16.53846%;
                            transform: translate(100%,0);
                            transition-duration: 2s;
                            transition-delay: 2s;
                            left: 0;
                        }
                    }
                    &:nth-child(2){
                        img{
                            width: 33.84615%;
                            left: 15%;
                            transform: translate(0,25%);
                            z-index: 3;
                        }
                    }
                    &:nth-child(3){
                        img{
                            width: 33.46154%;
                            right: 15.38462%;
                            transform: translate(0,25%);
                            z-index: 3;
                        }
                    }
                    &:nth-child(4){
                        img{
                            width: 16.15385%;
                            right: 0;
                            transform: translate(-100%,0);
                            transition-duration: 2s;
                            transition-delay: 2s;
                        }
                    }
                }
            }
            &.active{
                .title{
                    .logo{
                        opacity: 1;
                        transform: translate(0,0);
                    }
                    .slogan{
                        opacity: 1;
                        transform: translate(0,0);
                    }
                }
                .product{
                    picture{
                        img{
                            transform: translate(0,0)!important;
                            opacity: 1;
                        }
                    }
                }
            }
        }
    }
}

@media (max-aspect-ratio: 1/1){
    .wrapper{
        position: relative;
        top: 0;
        height: 110vw;
        .move-container{
            height: 100%;
        }
    }
}
</style>