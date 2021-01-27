<template>
    <div class="product2">
        <Header />
        <HonorHeader title="优畅享20" link1="product2" link2="param2" />
        <div class="news">
            <div class="img-wrap">
                <img src="../assets/product22/img0.webp" alt="">
            </div>
            <div class="img-wrap">
                <img src="../assets/product22/img1.webp" alt="">
            </div>
            <div class="img-wrap">
                <img src="../assets/product22/img2.webp" alt="">
            </div>
            <div class="img-wrap">
                <img src="../assets/product22/img3.webp" alt="">
            </div>
            <div class="img-wrap">
                <img src="../assets/product22/img4.webp" alt="">
            </div>
            <div class="img-wrap">
                <img src="../assets/product22/img5.webp" alt="">
            </div>
            <div class="img-wrap">
                <img src="../assets/product22/img6.webp" alt="">
            </div>
            <div class="img-wrap">
                <img src="../assets/product22/img7.webp" alt="">
            </div>
            <div class="img-wrap">
                <img src="../assets/product22/img8.webp" alt="">
            </div>
            <div class="img-wrap">
                <img src="../assets/product22/img9.webp" alt="">
            </div>
        </div>
        
        <Footer></Footer>
        <ReturnTop/>
    </div>
</template>
<script>
import Header from '@/components/header.vue';
import HonorHeader from '@/components/honor-header.vue';
import Footer from '@/components/footer.vue';
import ReturnTop from '@/components/return-top.vue';
export default {
    name: "product2",
    components: {
        Header,
        HonorHeader,
        Footer,
        ReturnTop
    },
    data() {
        return {
            isScroll1: false,
        }
    },
    mounted() {
    },
    methods: {
    }
}
</script>
<style scoped lang="less">
.product2 {
    .img-wrap {
        img {
            width: 100%;
            display: block;
        }
    }

    .opcity {
        opacity: 0
    }

    
    .img5 {
        background: rgb(240, 242, 245);
    }

    .img6 {
        background: rgb(240, 242, 245);
    }

    .img7 {
        background: rgb(240, 242, 245);
    }

    .img8 {
        background: rgb(240, 242, 245);
    }
}
</style>