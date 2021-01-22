<template>
    <div class="serach-input">
        <input type="text" :placeholder="placeholder.value"
                :style="{
                    '--height': `${height}px`,
                    '--border': border.has ? `${border.width}px ${border.type} ${border.color}` : 'none',
                    '--radius': `${border.radius}px`,
                    '--placeColor': `${placeholder.color}`,
                    '--placeSize': `${placeholder.fontSize}px`,
                    '--fontSize': `${placeholder.fontSize}px`
                }" />
        
        <ul class="results"></ul>
    </div>
</template>

<script>
export default {
    name: 'Search',
    props: {
        placeholder: {
            type: Object,
            default: () => ({
                value: '请输入要搜索的内容',
                color: '#999999',
                fontSize: 21
            })
        },
        height: {
            type: Number,
            default: 42
        },
        border: {
            type: Object,
            default: () => ({
                has: false,
                width: 1,
                type: 'solid',
                color: '#E6E6E6',
                radius: 8
            })
        }
    },
    data() {
        return{
            style: ''
        }
    },
    mounted() {
        // this.style = 
    },
    methods: {
        
    }
}
</script>

<style scoped lang=scss>
@import "@/sass/common.scss";
.serach-input{
    position: relative;
    width: 100%;
    height: 100%;
    input{
        position: relative;
        width: 100%;
        height: 100%;
        font-family: PingFangSC-Regular, PingFang SC;
        font-size: var(--placeSize);
        padding: 0 29px 0 25px;
        height: var(--height);
        line-height: var(--height);
        border: var(--border);
        border-radius: var(--radius);
        &::-webkit-input-placeholder{
            color: var(--placeColor);
            font-size: var(--placeSize);
            font-weight: 400;
        }
        
    }
    &::before{
        content: '';
        z-index: 2;
        display: block;
        position: absolute;
        width: 24px;
        height: 24px;
        top: 50%;
        margin-top: -12px; 
        right: 29px;
        background: url('../assets/sousuo-2.png') no-repeat;
        background-size: contain;
        cursor: text;
    }
    .results{
        display: none;
    }
}
</style>