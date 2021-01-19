<template>
    <div class="price-detail">
        <HeaderA :tabs="headerTabs"></HeaderA>
        <div class="head-img">
            备件价格查询
        </div>
        <div class="spare-part-container">
            <div class="title row">
                <div class="device-name col-sm-12 col-md-12 col-lg-10">设备信息：麦芒7 全网通版 6GB+64GB (SNE-AL00) 铂光金</div>
                <div class="change-device col-sm-12 col-md-12 col-lg-2" @click="changeDevice">更换设备</div>
            </div>
            <div class="part-container row">
                <div class="part-box col-sm-12 col-md-6 col-lg-4"
                    v-for="(part,index) in partList" :key="index">
                    <div class="part-img">
                        <img :src="part.img" alt="">
                    </div>
                    <div class="part-name">{{part.partName}}</div>
                    <div class="part-price">{{part.partPrice}}</div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import img1 from '../assets/select-icon-1.png'
    import img2 from '../assets/select-icon-2.png'
    import img3 from '../assets/select-icon-3.png'
    import img4 from '../assets/select-icon-4.png'
    import img5 from '../assets/select-icon-5.png'
    import img6 from '../assets/select-icon-6.png'
    import img7 from '../assets/select-icon-6.png'
    import HeaderA from '@/components/headerA.vue';
    import Footer from '@/components/footer.vue';
    export default {
        name: "price-detail",
        components: {
            // Header,
            HeaderA,
            Footer
        },
        data(){
            return{
                headerTabs: [
                {
                    name: '手机',
                    link: '/home',
                    active: false
                },
                {
                    name: '售后服务',
                    link: '/serve-home',
                    active: true
                }
            ],
                partList:[
                    {
                        partName:'屏幕组件',
                        partPrice:'¥ 99.00',
                        img:img6,
                    },
                    {
                        partName:'电池',
                        partPrice:'¥ 99.00',
                        img:img1,
                    },
                    {
                        partName:'主板',
                        partPrice:'¥ 99.00',
                        img:img3,
                    },
                    {
                        partName:'前置摄像头（主）',
                        partPrice:'¥ 99.00',
                        img:img4,
                    },
                    {
                        partName:'后置摄像头',
                        partPrice:'¥ 99.00',
                        img:img7,
                    },
                    {
                        partName:'后盖',
                        partPrice:'¥ 99.00',
                        img:img5,
                    },
                ]
            }
        },
        mounted() {
        },
        methods:{
            changeDevice(){
                this.$router.push('/query-price')
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "./../sass/common.scss";
    .price-detail {
        width: 100%;
        overflow: hidden;
        .head-img {
            height: torem(633);
            background: url('../assets/banner-1.png');
            background-size: 100% 100%;
            font-size: torem(69);
            font-weight: 600;
            color: #FFFFFF;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .spare-part-container{
            margin: 0 torem(100);
            .title{
                margin-top: torem(50);
                margin-bottom: torem(60);
                display: flex;
                justify-content: space-between;
                align-items: center;
                .device-name{
                    height: torem(40);
                    font-size: torem(29);
                    font-weight: 400;
                    color: #333;
                    line-height: torem(40);
                    text-align: left;
                    margin-bottom: torem(20);
                }
                .change-device{
                    cursor: pointer;
                    height: torem(40);
                    font-size: torem(29);
                    font-weight: 400;
                    color: #037AFF;
                    line-height: torem(40);
                    text-align: left;
                }
            }
            .part-container{
                .part-box{
                    height: torem(634);
                    margin-bottom: torem(50);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    background: #F3F3F3;
                    .part-img{
                        width: torem(273);
                        height: torem(273);
                        margin-bottom: torem(63);
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .part-name{
                        margin-bottom: torem(25);
                        font-weight: 500;
                        color: #2B3764;
                    }
                    .part-price{
                        font-size: torem(39);
                        font-weight: 500;
                        color: #0279FF;
                    }
                }
                .part-box:nth-child(2), .part-box:nth-child(5) {
                    
                    background: #FAFAFA;
                }
            }

        }
    }
</style>