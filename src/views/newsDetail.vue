<template>
    <div class="newsDetail">
        <HeaderA />
        <div class="detail-box">
            <div class="title">
                <h1 style="font-size: 36px;">
                    {{newsDetail.newsTitle}}
                </h1>
                <p style="text-align: left;font-size: 18px;font-weight: 400;color: #666666;line-height: 25px;width: 100%;">
                    {{newsDetail.news_author}} {{timeFilter(newsDetail.creatTime)}}
                </p>
            </div>
            <div class="body">
                <!--<iframe class="iframe" id="iframe" frameborder="0" scrolling="no" ref="iframe" src=""></iframe>-->
                <div v-html="newsDetail.newsContent"></div>
                <!--<div class="content" style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
                    &lt;!&ndash;文字&ndash;&gt;
                    <p style="text-align: left;font-size: 18px;font-weight: 400;color: #333;line-height: 25px;width: 100%;">1月25日，联通华盛通信有限公司（以下简称联通华盛）正式发布中国联通的全新5G手机品牌——U-MAGIC，并同步发布了品牌旗下优畅享20 Plus 、优畅享20两款5G手机。</p>
                    &lt;!&ndash;图片&ndash;&gt;
                    <img style="width: 73%;margin:0 auto;" src="../assets/product11/img0.webp" alt="">
                    &lt;!&ndash;图片下面的文字&ndash;&gt;
                    <p style="font-size: 14px;font-weight: 400;color: #666666;line-height: 20px;">U-MAGIC 5G手机</p>
                    &lt;!&ndash;文字&ndash;&gt;
                    <p style="text-align: left;font-size: 18px;font-weight: 400;color: #333;line-height: 25px;width: 100%;">2021年，作为十四五规划的开局之年，国家高度关注企业自主创新能力建设，企业应始终坚持创新驱动发展，全面塑造发展新优势。对于终端产业链而言，“新基建”已构筑起产业发展的新环境，众所周知，中国已拥有全球第一的5G网络，5G终端需求也呈现爆发式增长。据工信部数据显示，2020年国内5G终端销量为1.6亿台，2021年预计增长到2.8亿台。</p>
                    <p style="text-align: left;font-size: 18px;font-weight: 400;color: #333;line-height: 25px;width: 100%;">面对超过10亿的非5G用户潜在换机需求，联通华盛在联通集团的战略要求下，进行了“实现基础业务创新突破发展，全面介入产业链上游，参与构建终端产业链新生态”战略规划。</p>
                    <p style="text-align: left;font-size: 18px;font-weight: 400;color: #333;line-height: 25px;width: 100%;">作为中国联通的终端公司，联通华盛拥有超过10年的手机终端销售经验，累计销售额突破2000亿，在其“自主能力提升、自研产品丰富”的战略布局下，本次在发布会中首次推出了自有5G手机品牌 ——U-MAGIC。</p>
                    <p style="text-align: left;font-size: 18px;font-weight: 400;color: #333;line-height: 25px;width: 100%;">“年轻、创新、友爱、个性”是本次发布的全新手机品牌的品牌定位。据了解，本次发布的U-MAGIC手机品牌延展了中国联通5Gⁿ让未来生长的理念。U表示Unicom中国联通、User年轻用户、Unique生而独特、Union相向而聚，与用户共情，与伙伴共振。MAGIC则表示更热衷于追求健康、展示自我、分享喜怒哀乐，展现生活的魔力！该品牌客户群体涵盖“都市白领”“传统菁英”“校园才俊”“职场新贵”。</p>
                    <img style="width: 73%;margin:0 auto;" src="../assets/product11/img0.webp" alt="">
                    <p style="text-align: left;font-size: 18px;font-weight: 400;color: #333;line-height: 25px;width: 100%;">“优先一步，畅享5G”，现场同步发布了U-MAGIC旗下的两款优畅享系列5G手机。值得注意的是，本次发布的优畅享20、优畅享20 Plus均为5G全网通手机，中国电信、移动、联通的用户均可使用。该系列手机以“优质的5G网络、优雅的美学设计、优异的续航能力、优越的影像系统、以及优享的体验和权益”为主打，两款手机都搭载7nm 5G SoC，兼容SA/NSA双模全网通，以确保更好的信号覆盖和全场景的5G疾速体验，搭载大容量电池为强劲续航提供基础，时尚外观彰显美学，沉浸式体验让用户更加自在。</p>
                    <img style="width: 73%;margin:0 auto;" src="../assets/product11/img0.webp" alt="">
                    <p style="text-align: left;font-size: 18px;font-weight: 400;color: #333;line-height: 25px;width: 100%;">临近春节，不管是回家过年给父母送一个实用靠谱的5G手机，还是就地过年寄一份爱心给暂不能团聚的亲人，共享5G网络下的视频畅聊，优畅享系列5G手机都将会是一个不错的选择，三网通用、超级快充、强劲续航、高清大屏，随时随地与家人视频，爱，一直在身边。</p>
                    <p style="text-align: left;font-size: 18px;font-weight: 400;color: #333;line-height: 25px;width: 100%;">本次发布的优畅享20价格1699元起， 优畅享20 Plus2299元起。其中优畅享20 在2021年1月25日16：00，在线上联通手机营业厅、各大电商及线下各大联通营业厅和各大零售商开启预售，并于1月28日 10:00 正式开售；优畅享20 Plus将于2月26日 10：00正式开售。</p>
                    <p style="text-align: left;font-size: 18px;font-weight: 400;color: #333;line-height: 25px;width: 100%;">最后，关于U-MAGIC品牌下优畅享两款新品具体性能，欢迎大家扫码了解详情。</p>
                </div>-->
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
    import HeaderA from '@/components/header.vue';
    import Footer from '@/components/footer.vue';
    import { quryDetailByNewsId } from '@/api/index.js'

    export default {
        name: "newsDetail",
        components: {
            // Header,
            HeaderA,
            Footer
        },
        data(){
            return{
                newsDetail:{}
            }
        },
        mounted() {
            let newsId = this.$route.query.id
            this.quryDetailByNewsId(newsId)
        },
        methods:{
            quryDetailByNewsId(id){
                let param = {
                    id: id
                }
                quryDetailByNewsId(param).then(res=>{
                    if(res.RESP_CODE == '0000'){
                        this.newsDetail = res.data
                    }
                })
            },
            timeFilter(time){
                let newsTime = new Date(time)
                return newsTime.getFullYear() + '-' + (newsTime.getMonth() + 1) + '-' + newsTime.getDate();
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "./../sass/common.scss";
    .newsDetail{
        width: 100%;
        .detail-box{
            width: 65%;
            margin: 0 auto;
            .title{

            }
            .body {
                margin-bottom: 20px;
                padding-top: 28px;
                width: 100%;
            }
        }
    }
    @media screen and (max-width:750px) {
        .newsDetail{
            width: 100%;
            .detail-box{
                width: 85%;
                margin: 0 auto;
                .title{
                    h1{
                        font-size: 18px!important;
                    }
                    p{
                        font-size: 12px!important;
                    }
                }
                .body {
                    margin-bottom: 20px;
                    padding-top: 28px;
                    width: 100%;
                    p{
                        font-size: 12px!important;
                    }
                }
            }
        }
    }
</style>