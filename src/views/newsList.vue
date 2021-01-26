<template>
    <div class="newsList">
        <Header></Header>
        <div class="news-top">
            <img src="../assets/img_xinwen.png" alt="">
        </div>
        <div class="newsList-wrap">
            <div class="news-box" v-for="(news,index) in newsList" :key="index" @click="goto(news)">
                <img :src="news.cover" alt="">
                <div class="news-content">
                    <div class="news-time">
                        {{timeFilter(news.creatTime)}} <span>NEW</span>
                    </div>
                    <div class="news-title">
                        {{news.newsTitle}}
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
        <ReturnTop />

    </div>
</template>

<script>
    import Header from '@/components/header.vue';
    import Footer from '@/components/footer.vue';
    import ReturnTop from '@/components/return-top.vue';
    import { quryNews } from '@/api/index.js'

    export default {
        name: "newsList",
        components: {
            // Header,
            Header,
            Footer,
            ReturnTop
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
                return newsTime.getFullYear() + '/' + (newsTime.getMonth() + 1) + '/' + newsTime.getDate();
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "./../sass/common.scss";
    .newsList{
        width: 100%;
        background: #F5F5F5;
        .news-top{
            width: torem(1920);
            height: torem(850);
            img{
                width: 100%;
                height: 100%;
            }
        }
        .newsList-wrap{
            width: 73%;
            margin: torem(90) auto;
            display: flex;
            justify-content: space-between;
            font-size: torem(20);
            flex-wrap: wrap;
            .news-box{
                cursor: pointer;
                width: torem(690);
                height: torem(580);
                position: relative;
                margin-bottom: torem(59);
                img{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
                .news-content{
                    width: torem(609);
                    height: torem(166);
                    background: #fff;
                    color: #000;
                    position: absolute;
                    bottom: torem(-20);
                    left: torem(40);
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    align-items: flex-start;
                    padding: torem(30);
                    .news-time{
                        font-size: torem(18);
                        font-weight: 400;
                        color: #333333;
                        line-height: torem(25);
                        span{
                            font-size: torem(14);
                            width: torem(50);
                            height: torem(20);
                            line-height: torem(20);
                            background: #000000;
                            border-radius: torem(14);
                            color: #fff;
                            padding: torem(2) torem(10);
                        }
                    }
                    .news-title{
                        font-size: torem(24);
                        font-weight: 600;
                        color: #333333;
                        line-height: torem(33);
                    }
                }
            }
        }
    }
    @media screen and (max-width: 750px){
        .newsList{
            width: 100%;
            background: #F5F5F5;
            .news-top{
                width: torem(1920);
                height: torem(850);
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .newsList-wrap{
                width: 70%;
                margin: 45px auto;
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                justify-content: space-between;
                .news-box{
                    cursor: pointer;
                    width: 100%;
                    height: 60vw;
                    position: relative;
                    margin-bottom: 80px;
                    img{
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                    }
                    .news-content{
                        width: 80%;
                        height: 80px;
                        background: #fff;
                        color: #000;
                        position: absolute;
                        bottom: -10%;
                        left: 10%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-evenly;
                        align-items: flex-start;
                        padding: 10px;
                        .news-time{
                            font-size: 16px;
                            font-weight: 400;
                            color: #333333;
                            line-height: 20px;
                            span{
                                font-size: 12px;
                                width: 30px;
                                height: 20px;
                                line-height: 20px;
                                background: #000000;
                                border-radius: 10px;
                                color: #fff;
                                padding: 2px 5px;
                            }
                        }
                        .news-title{
                            font-size: 16px;
                            font-weight: 600;
                            color: #333333;
                            line-height: 20px;
                        }
                    }
                }
            }
        }
    }
</style>