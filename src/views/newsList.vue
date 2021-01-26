<template>
    <div class="newsList">
        <Header></Header>
        <div class="newsList-wrap" v-for="(news,index) in newsList" :key="index">
            <div class="news-title">{{news.newsTitle}}</div>
            <div class="news-time">发布时间：{{timeFilter(news.creatTime)}}</div>
            <div class="news-author">作者：{{news.news_author}}</div>
            <div class="goto" @click="goto(news)">查看</div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '@/components/header.vue';
    import Footer from '@/components/footer.vue';
    import { quryNews } from '@/api/index.js'

    export default {
        name: "newsList",
        components: {
            // Header,
            Header,
            Footer
        },
        data(){
            return {
                newsList:[]
            }
        },
        mounted() {
            this.quryNews()
            this.timeFilter('2020-01-26T02:44:27.000+0000')
        },
        methods:{
            quryNews(){
                quryNews().then(res=>{
                    console.log(res)
                    if(res.RESP_CODE == '0000'){
                        this.newsList = res.data
                    }
                })
            },
            goto(news){
                let id = news.id
                this.$router.push('/newsDetail?id='+ id)
            },
            timeFilter(time){
                let newsTime = new Date(time)
                return newsTime.getFullYear() + '-' + (newsTime.getMonth() + 1) + '-' + newsTime.getDate();
            }
        }
    }
</script>

<style scoped lang="less">
    .newsList{
        width: 100%;
        .newsList-wrap{
            height: 80px;
            line-height: 80px;
            width: 80%;
            margin: 0 auto;
            display: flex;
            justify-content: flex-start;
            font-size: 20px;
            div{
                margin-right: 20px;
            }
            .goto{
                color: blue;
                cursor: pointer;
            }
        }
    }
</style>