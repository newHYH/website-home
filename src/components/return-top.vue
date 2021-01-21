<template>
    <div class="box">
        <div class="icon"></div>
        <div class="gotop" v-show="gotop" @click="toTop">TOP</div>
    </div>   
</template>

<script>

export default {
    name: 'returnTop',
    components: {
        
    },
    props: {
       
    },
    data() {
        return{
            gotop: false,
            
        }
    },
    mounted() {
         window.addEventListener("scroll", this.handleScroll, true);
    },
    methods: {
        handleScroll() {
            let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
            scrolltop > 30 ? (this.gotop = true) : (this.gotop = false);
        },
        toTop() {
            let top = document.documentElement.scrollTop || document.body.scrollTop;
            // 实现滚动效果 
            var timeTop = setInterval(() => {
                document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
                if (top <= 0) {
                clearInterval(timeTop);
                }
            }, 10);
        }
    }
}
</script>

<style scoped lang=scss>
@import "@/sass/common.scss";
.box{
     position: relative;
    width: 44px;
    height: 44px;
    color: #fff;
    text-align: center;
    box-shadow: 0 5px 5px 0 rgba(0,0,0,0.23);
    background-color: #000;
    border-radius: 50%;
}
.gotop{
    margin-top: 0px;
    margin-bottom: 10;
    font-size: 14px;
}
/* .icon {
    position:relative;
    width: 0;
    height: 0;
    border-width: 0 40px 40px;
    border-style: solid;
    border-color: transparent transparent blue;
    
} */
.icon {
    position: relative;
    width: 100%;
    height: 22px;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    border: 1px solid black;
    /* background-color: blue; */
    border-radius: 100px 100px 0 0;

}
 
.icon::before {
      content: "";
      width: 12px;
      height: 12px;
      border: solid #fff;
      border-width: 2px 2px 0 0;
      transform: translate(-50%, -50%) rotate(-45deg);
      position: absolute;
      left: 50%;
      top: 70%;
}


   
/* mobile phone */
@media screen and (min-width:320px) {
    
}

/* ipad */
@media screen and (min-width:768px) {

}

/* PC */
@media screen and (min-width:1200px) {
   
}
</style>