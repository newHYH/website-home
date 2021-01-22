<template>
    <div class="quetion-wrapper">
        <HeaderA />
        <div class="quetion-box">
            <div class="title">
                <h4>{{data.quDes}}</h4>
                <p><span>适用产品：手机</span><span>适用版本：不涉及系统版本</span></p>
            </div>
            <div class="body" :style="{height:IframeHeight+'px'}">
                <iframe class="iframe" id="iframe"  frameborder="0" scrolling="no" ref="iframe" :src="'./'+data.quResult"></iframe>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import HeaderA from '@/components/headerA.vue';
import Footer from '@/components/footer.vue';
import { quryQuestion } from '@/api/index.js'
export default {
    name: 'quetion',
    components: {
        // Header,
        HeaderA,
        Footer
    },
    data() {
        return {
            data: {
                IframeHeight:0
            }
        }
    },
    mounted() {
        this.getData()
        this.$nextTick(()=>{
            let iframe =  document.getElementById("iframe");
            this.IframeHeight = document.getElementById('iframe').contentWindow.frames.outerHeight *2     
        })
    },
    methods: {
        getData() {
            let id = this.$route.query.id
                            let self = this
            quryQuestion().then(res => {
                console.log(res)
                if (res.RESP_CODE == '0000') {
                    res.data.forEach(item => {
                        if (item.id == id) {
                            this.data = item
                        }
                    })

                }
            })
        }
    }
}
</script>
<style scoped lang=scss>
@import "@/sass/common.scss";

.quetion-wrapper {
    width: 100%;
    overflow: hidden;

    .quetion-box {
        padding: 0 16%;

        .title {
            margin-top: torem(60);

            h4 {

                font-size: 26px;
                color: #242728;
                text-align: left;
            }

            p {
                padding: 20px 0 10px 0;
                display: flex;
                justify-content: flex-start;
                text-align: left;
                font-size: 14px;
                color: #6f6f6f;
                line-height: 22px;

                span {
                    width: 50%;
                }
            }

            border-bottom:1px solid #e0e0e0;
        }

        .body {
            margin-bottom: 20px;
            padding-top: 28px;
            width:100%;
            height:auto;
            .iframe{
                width:100%;
                border:0;
                height:100%;
            }
        }
    }
}
</style>