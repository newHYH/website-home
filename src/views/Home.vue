<template>
    <div class="home">
        <div class="px-box">还是使用px固定单位</div>
        <div class="box-1-rem">使用rem单位</div>
    </div>
</template>
<script>

export default {
    name: 'Home',
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
    @import "@/sass/transfrom.scss";
    /*功能title样式*/
    .home{
        color: red;
        font-size: 1rem;
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