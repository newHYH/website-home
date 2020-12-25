<template>
    <div class="home">
        <Header />
    </div>
</template>
<script>
import Header from '@/components/header.vue';

export default {
    name: 'Home',
    components: {
        Header
    },
    data() {
        return{}
    },
    mounted() {

    },
    methods: {
    }
}
</script>
<style scoped lang=scss>
    @import "@/sass/common.scss";
    /*功能title样式*/
    .home{
        .px-box{
            width: 300px;
            height: 192px;
            color: #ffffff;
            font-size: 30px;
            background-color: black;
        }
        .box-1-rem{
            width: 1rem;
            height: 1rem;
            background: blue;
            color: #ffffff;
            font-size: torem(30);
        }
    }
</style>