<template>
    <div class="phone-wrapper">
        <HeaderA />
        <div class="phone-scroll">
            <kvLoader />
            <videoPhone />
            <magScroll />
            <perScroll />
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
import HeaderA from '@/components/headerA.vue';
import kvLoader from '@/components/kv-loader.vue';
import videoPhone from '@/components/video-phone.vue';
import magScroll from '@/components/mag-scroll.vue';
import perScroll from '@/components/per-scroll.vue';
import cameraScroll from '@/components/camera-scroll.vue';
import powerGif from '@/components/power-gif.vue';
import stageScroll from '@/components/stage-scroll.vue';
import safeBox from '@/components/safe-box.vue';
import textBox from '@/components/text-box.vue';
import Footer from '@/components/footer.vue';

export default {
    name: 'Home',
    components: {
        HeaderA,
        Footer,
        kvLoader,
        videoPhone,
        magScroll,
        perScroll,
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