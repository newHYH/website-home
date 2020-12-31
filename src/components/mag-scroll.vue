<template>
    <div class="mag-scroll-wrapper" ref="scrollWrap">
        <div class="mag-scroll">
            <div class="title">
                一眼相识 瞬间倾心
            </div>
            <div class="g2"></div>
            <div class="scroll-wrapper" ref="scroll">
                 <img :src="require('../assets/mag-img/img'+imgIndex+'.webp')" ref="canvas" class="canvas" alt="">
            </div>
            <div class="g4"></div>
        </div>
    </div>
</template>
<script>
    let canvas, cxt;
export default {
    name: 'mag-scroll',
    props: {

    },
    data() {
        return {
            imgIndex:0,
        }
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
           window.addEventListener('scroll',this.handleScroll)
        },
        handleScroll(event){
            let scrollTop = this.$refs.scrollWrap.offsetTop
            let top = window.pageYOffset 
            let scrollBottom = scrollTop + this.$refs.scrollWrap.offsetHeight
            if(top >= scrollTop ){//判断在这个区域内
                let distace = this.$refs.scrollWrap.offsetHeight + scrollTop
                let stop = top-scrollTop
                if(distace>=top){
                    if(distace==top){
                        this.imgIndex=1
                    }else if(distace==top){
                        this.imgIndex = 109
                    }else{
                       let n = parseInt(stop/(this.$refs.canvas.offsetHeight/109));
                        if(n<=109){
                            this.imgIndex = n
                        } 
                    }   
                }else{
                     this.imgIndex = 109
                }
            }
        }
    }
}
</script>
<style scoped lang=scss>
@import "@/sass/common.scss";
.mag-scroll-wrapper{
    height:200vh;
    position: relative;
    z-index: 1;
    width: calc(82.05128vw + 4.61538px);
    margin:0 auto;
}
.g2{
    height:0.24rem;
}
.g4{
    height:0.48rem;
}
.mag-scroll {
    height: calc(100vh - 96px);
    position: sticky;
    top: 96px;
    width: 100%;
    display: flex;
    flex-direction: column;

    .title {
        font-size: torem(90);
        text-align: right;
        font-weight: 700;
    }
    .scroll-wrapper{
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
         position: relative;
        flex:1;
        display: flex;
    }
    .canvas{
        position: absolute;
        transform-style: preserve-3d;
        width:100%;
    }
}
@media screen and (max-width: 750px) {
  .mag-scroll-wrapper{
        width: 100%;
        margin:0 auto;
    }
    .mag-scroll{
        overflow: hidden;
        img.canvas{
            width:calc(1920/800*100vw);
              height: calc(1080/800*100vw);
              left:50%;
              margin-left:calc(-1920/1600*100vw);
              max-width:400%;
        } 
    }
}

</style>