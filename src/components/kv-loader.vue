<template>
    <div class="wrapper" :style="{'--navHeight': `${navHeight}px`}">
        <div class="move-container">
            <div class="bg" :style="{'--bgOpacity': `${opacityPercent}`}"></div>

            <div class="intro-box" :class="loaded ? 'active' : ''">
                <div class="title">
                    <div class="logo">China UNICOM 40 Pro | 5G</div>
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
</template>

<script>
export default {
    name: 'kv-loader',
    props: {
        
    },
    created() {
        console.log(this.loaded)
        this.$nextTick(()=>{
            setTimeout(() => {
                this.loaded = true
                console.log(this.loaded)
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
    },
    methods: {
        
    }
}
</script>

<style scoped lang=scss>
@import "@/sass/common.scss";

.wrapper{
    /* 计算整体高度，使用全屏高度减 */
    height: calc(100vh - var(--navHeight));
    position: relative;
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
            .title{
                height: 26%;
                flex: 2;
                display: flex;
                flex-direction: column;
                justify-content: center;
                text-align: center;
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
                    /* font-size: calc(1.02564vw + 12.30769px); */
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
                    height: calc(569/643*(--gg-container-width));
                    max-height: 100%;
                }
            }
            
            .product{
                width: 100%;
                max-width: 132vh;
                height: 74%;
                max-height: 50vw;
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

/* .gg-intro-product-container {
    width: 100%;
    max-width: 132vh;
    height: 74%;
    max-height: 50vw;
    margin: 0 auto;
    position: relative
}

.gg-intro-product-container picture img {
    position: absolute;
    bottom: 0;
    opacity: 0;
    transition: transform 1s 1s cubic-bezier(.2,.8,.3,1), opacity 1s 1s cubic-bezier(.2,.8,.3,1);
    z-index: 2
}

.gg-intro-product-container picture:nth-child(1) img {
    width: 16.53846%;
    transform: translate(100%,0);
    transition-duration: 2s;
    transition-delay: 2s
}

.gg-intro-product-container picture:nth-child(2) img {
    width: 33.84615%;
    left: 15%;
    transform: translate(0,25%);
    z-index: 3
}

.gg-intro-product-container picture:nth-child(3) img {
    width: 33.46154%;
    right: 15.38462%;
    transform: translate(0,25%);
    z-index: 3
}

.gg-intro-product-container picture:nth-child(4) img {
    width: 16.15385%;
    right: 0;
    transform: translate(-100%,0);
    transition-duration: 2s;
    transition-delay: 2s
}

.gg-intro-product-container picture:nth-child(1) img,
.gg-intro-product-container picture:nth-child(1) img {
    width: 16.53846%
}

.gg-intro-product-container picture:nth-child(2) img,
.gg-intro-product-container picture:nth-child(2) img {
    width: 33.84615%;
    left: 15%
}

.gg-intro-n-plus .gg-intro-product-container picture:nth-child(3) img,
.gg-intro-product-container picture:nth-child(3) img {
    width: 33.84615%;
    right: 15%
}

.gg-intro-n-plus .gg-intro-product-container picture:nth-child(4) img,
.gg-intro-product-container picture:nth-child(4) img {
    width: 16.53846%
}

.gg-intro-kv-background {
    background-color: #000;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    opacity: 0
}

.gg-fallback .gg-intro-kv-background {
    background: #f4f3f3;
    opacity: 1
}

#gg-intro-kv {
    position: sticky;
    top: 75px;
    top: var(--gg-height-nav);
    height: 90vh;
    height: var(--gg-height-full);
    width: 100%;
    overflow: hidden;
}

html[dir=rtl] .gg-fallback #gg-intro-kv {
    position: relative;
    top: 0
}

.gg-fallback .gg-intro-kv-title>*,.gg-visible .gg-intro-kv-title>* {
    opacity: 1;
    transform: translate(0,0)
}

.gg-fallback #gg-intro-kv picture img,
.gg-kv-loaded picture img {
    transform: translate(0,0)!important;
    opacity: 1
}

@media (min-aspect-ratio: 1001 / 1000) {
    .gg-kv-disclaimer {
        width:90%
    }
}

@media (min-aspect-ratio: 16 / 11) {
    .gg-intro-product-container {
        max-width:112vh
    }
}

@media (max-aspect-ratio: 1 / 1) {
    .gg-intro-kv-title>* {
        opacity:1;
        transform: translate(0,0)
    }

    #gg-intro-kv {
        position: relative;
        top: 0;
        margin-top: 10vw;
        height: 110vw
    }

    #gg-intro-kv picture img {
        transform: translate(0,0)!important;
        opacity: 1
    }

    #gg-intro-kv .gg-container {
        padding-bottom: 30px
    }

    .gg-intro-product-container {
        height: calc(569/643*(--gg-container-width));
        max-height: 100%
    }

    .gg-intro-product-container picture img {
        bottom: auto;
        top: 0
    }

    .gg-intro-product-container picture:nth-child(1) img {
        width: 15.5521%
    }

    .gg-intro-product-container picture:nth-child(2) img {
        width: 34.21462%;
        left: 14.77449%
    }

    .gg-intro-product-container picture:nth-child(3) img {
        width: 33.90358%;
        right: 14.77449%
    }

    .gg-intro-product-container picture:nth-child(4) img {
        width: 15.08554%
    }

    .gg-intro-product-container picture:nth-child(1) img,
    .gg-intro-product-container picture:nth-child(1) img {
        width: 15.5521%
    }

    .gg-intro-product-container picture:nth-child(2) img,
    .gg-intro-product-container picture:nth-child(2) img {
        width: 34.21462%;
        left: 14.77449%
    }

    .gg-intro-product-container picture:nth-child(3) img,
    .gg-intro-product-container picture:nth-child(3) img {
        width: 34.21462%;
        right: 14.77449%
    }

    .gg-intro-product-container picture:nth-child(4) img,
    .gg-intro-product-container picture:nth-child(4) img {
        width: 15.08554%
    }
}

html[dir=rtl] .gg-intro-product-container {
    direction: ltr
} */
</style>