<template>
    <div class="header">
        <div class="header-btn-box">
            <div class="target-btn">
                <span class="target-name">消费者业务网站</span>
            </div>
        </div>
        <div></div>
        <div></div>
    </div>
</template>
<script>

export default {
    name: 'Header',
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
@media screen and (min-width:1200px) {
    .header{
        height:24px + 80px ;
        .header-btn-box{
            padding: 0 40px;
            background-color: #000;
            line-height: 24px;
            height: 24px;
            .target-btn{
                color: #fff;
                font-size: 11px;
            }
        }
    }
}

    
</style>