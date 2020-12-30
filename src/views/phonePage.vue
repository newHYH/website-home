<template>
    <div class="phone-wrapper">
        <Header />
        <div class="phone-scroll">
            <kvLoader />
            <videoPhone />
            <magScroll />
            <perScroll />
            <videoScroll />
            <cameraScroll />
            <powerGif />
            <stageScroll />
            <safeBox />
            <textBox />
        </div>
        <Footer />
    </div>
</template>
<script>
import Header from '@/components/header.vue';
import kvLoader from '@/components/kv-loader.vue';
import videoPhone from '@/components/video-phone.vue';
import magScroll from '@/components/mag-scroll.vue';
import perScroll from '@/components/per-scroll.vue';
import videoScroll from '@/components/video-scroll.vue';
import cameraScroll from '@/components/camera-scroll.vue';
import powerGif from '@/components/power-gif.vue';
import stageScroll from '@/components/stage-scroll.vue';
import safeBox from '@/components/safe-box.vue';
import textBox from '@/components/text-box.vue';
import Footer from '@/components/footer.vue';

export default {
    name: 'Home',
    components: {
        Header,
        Footer,
        kvLoader,
        videoPhone,
        magScroll,
        perScroll,
        videoScroll,
        cameraScroll,
        powerGif,
        stageScroll,
        safeBox,
        textBox
    },
    data() {
        return {}
    },
    mounted() {

    },
    methods: {}
}
</script>
<style scoped lang=scss>
@import "@/sass/common.scss";
.home {
    
}
@media screen and (max-width: 768px) {
   
}
@media screen and (max-width: 750px) {
  
}
</style>