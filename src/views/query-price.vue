<template>
    <div class="query-price">
        <HeaderA></HeaderA>
        <div class="head-img">
            备件价格查询
        </div>
        <div class="device-sel row">
            <div class="sel-wrap col-sm-12 col-md-12 col-lg-12">
                <div>选择机型：</div>
                <div class="btn-select">
                    <img src="../assets/img_jixing.png" alt="">
                </div>
            </div>
        </div>
        <div class="selection-part">
            <div class="search-wrap">
                <div class="input-warp col-sm-12 col-md-12 col-lg-12">
                    <div class="input"  @click="handleShowList(1)">{{currentPhoneName||'请选择手机型号'}}</div>
                    <span class="search-icon">
                        <img v-if="!showPhoneListFlag" src="../assets/search-icon.png" alt="">
                        <img v-if="showPhoneListFlag" src="../assets/deletes.png" alt="" @click="handleShowList(2)">
                    </span>
                </div>
                <div class="phone-list-wrap col-sm-12 col-md-12 col-lg-12" :class="showPhoneListFlag?'show':'hide'">
                    <li class="phone-type"
                        v-for="(phoneType,index) in phoneList" :key="index">
                        <div class="type-title">
                            {{phoneType.typeName}}
                        </div>
                        <div class="phone-list" v-for="(phones,index2) in phoneType.skuList" :key="index2" @click="selPhoneName(phones)">
                            {{phones.goodsName}}
                        </div>
                    </li>
                </div>
            </div>
        </div>
        <div class="phone-price-wrap" v-show="currentPhoneName">
            <div class="current-phone-name">{{currentPhoneName}}</div>
            <div class="price-list">
                <ul>
                    <li v-for="(price,index) in priceList" :key="index">
                        <div class="icons">
                            <img :src="price.img" alt="">
                        </div>
                        <div class="price-detai">
                            <div class="price-name">{{price.partName}}</div>
                            <div class="price">{{price.partPrice == '¥1'?'敬请期待':price.partPrice}}</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <Footer></Footer>
        <ReturnTop/>
    </div>
</template>
<script>
import { quryGoodsSku, quryGoodsTree } from '@/api/index.js'

import HeaderA from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import ReturnTop from '@/components/return-top.vue';

import dianchi from "../assets/dianchi.png";
import houke from "../assets/houke.png";
import houzhi from "../assets/houzhi.png";
import pingmuzujian from "../assets/pingmuzujian.png";
import qianzhi from "../assets/qianzhi.png";
import zhuban from "../assets/zhuban.png";
export default {
    name: "query-price",
    components: {
        // Header,
        HeaderA,
        Footer,
        ReturnTop
    },
    data() {
        return {
            phoneList: [],
            selectedDeviceName: '',
            showPhoneListFlag: false,
            currentPhoneName: '', //当前选择的手机名称
            priceList:[],
            phoneId:'',
        }
    },
    mounted() {
        // console.log('phoneList', this.phoneList)
        this.getData()
    },
    methods: {
        getData() {
            quryGoodsTree().then(res => {
                if (res.RESP_CODE == '0000') {
                    console.log(res.data)
                    this.phoneList = res.data
                }
            })
        },
        handleShowList(type){
            // 点击输入框
            if(type == 1){
                if(this.showPhoneListFlag == true){
                    return
                } else {
                    this.showPhoneListFlag = !this.showPhoneListFlag
                }
            } else {
                this.showPhoneListFlag = !this.showPhoneListFlag
            }
        },
        selPhoneName(phones){
            this.showPhoneListFlag = false
            this.currentPhoneName = phones.goodsName
            this.phoneId = phones.id
            this.getPrice(this.phoneId)
        },
        getPrice(phoneId){
            // let data = {
            //     "id": 1,
            //     "goodsName": "测试 蓝色",
            //     "typeId": 1,
            //     "creatTime": "2021-01-05T10:58:53.000+0000",
            //     "cellPrice": 1,  //-- 电池价格
            //     "specialPrice": 1, //-- 特惠价格
            //     "chgBoardPrice": 1, //-- 主板更换价格
            //     "backPrice": 1, //-- 后盖价格
            //     "screenPrice": 1, //-- 屏幕组件价格
            //     "fcameraPrice": 1, //-- 前置摄像头价格
            //     "rcameraPrice": 1, //-- 后置摄像头价格
            //     "hboardPrice": 1 //-- 主板惠修价格
            // }

            let params = {
                id: phoneId
            }
            quryGoodsSku(params).then(res => {
                if (res.RESP_CODE == '0000') {
                    let data = res.data[0]
                    this.priceList = []
                    let obj = {}
                    for(let keys in data){
                        switch (keys) {
                            case  'cellPrice':
                                obj = {
                                    partName: '电池',
                                    partPrice: '¥'+ data[keys]||'敬请期待…',
                                    img: dianchi,
                                }
                                this.priceList.push(obj)
                                break;
                            // case  'specialPrice':
                            //     obj = {
                            //         partName: '特惠价格',
                            //         partPrice: '¥'+ data[keys]||'敬请期待…',
                            //         img: '',
                            //     }
                            //     this.priceList.push(obj)
                            //     break;
                            case  'chgBoardPrice':
                                obj = {
                                    partName: '主板',
                                    partPrice: '¥'+ data[keys]||'敬请期待…',
                                    img: zhuban,
                                }
                                this.priceList.push(obj)
                                break;
                            case  'backPrice':
                                obj = {
                                    partName: '后壳',
                                    partPrice: '¥'+ data[keys]||'敬请期待…',
                                    img: houke,
                                }
                                this.priceList.push(obj)
                                break;
                            case  'screenPrice':
                                obj = {
                                    partName: '屏幕组件',
                                    partPrice: '¥'+ data[keys]||'敬请期待…',
                                    img: pingmuzujian,
                                }
                                this.priceList.push(obj)
                                break;
                            case  'fcameraPrice':
                                obj = {
                                    partName: '前置摄像头组件',
                                    partPrice: '¥'+ data[keys]||'敬请期待…',
                                    img: qianzhi,
                                }
                                this.priceList.push(obj)
                                break;
                            case  'rcameraPrice':
                                obj = {
                                    partName: '后置摄像头',
                                    partPrice: '¥'+ data[keys]||'敬请期待…',
                                    img: houzhi,
                                }
                                this.priceList.push(obj)
                                break;
                        }
                    }
                    console.log('priceList', this.priceList)
                }
            })
        }
    }
}
</script>
<style scoped lang="scss">
@import "./../sass/common.scss";
.query-price {
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

    .device-sel {
        width: 70%;
        margin: torem(40) auto;
        display: flex;
        justify-content: flex-start;
        .sel-wrap {
            /*width: torem(434);*/
            /*height: torem(60);*/
            font-size: torem(29);
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;

            .btn-select {
                margin-top: torem(14);
                cursor: pointer;
                width: torem(120);
                height: torem(120);
                border-radius: torem(8);
                display: flex;
                justify-content: center;
                align-items: center;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

    .selection-part {
        width: 70%;
        margin: 0 auto;
        .search-wrap {
            .input-warp {
                padding: 0;
                margin-bottom: torem(20);
                position: relative;
                .input {
                    width: 100%;
                    height: torem(57);
                    line-height: torem(57);
                    text-align: left;
                    color: #999;
                    background: #FFFFFF;
                    border-radius: torem(8);
                    border: torem(1) solid #D0D0D0;
                    font-size: torem(24);
                    padding-left: torem(40);
                }
                .search-icon{
                    width: torem(22);
                    height: torem(22);
                    position: absolute;
                    right: torem(20);
                    top: torem(18);
                    cursor: pointer;
                }
            }
            .hide{
                max-height: 0!important;
                transition: max-height 1s;
            }
            .show{
                max-height: 400px!important;
                transition: max-height 1s;
            }
            .phone-list-wrap {
                font-size: torem(24);
                font-weight: 400;
                color: #333;
                max-height: 0;
                overflow: hidden;
                .phone-type {
                    text-align: left;
                    line-height: torem(53);
                    display: flex;
                    flex-direction: column;
                    cursor: pointer;
                    .type-title {
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                    }
                    .phone-list{
                        text-align: left;
                        padding-left: torem(25);
                        height: torem(53);
                        line-height: torem(53);
                        color: #333;
                        cursor: pointer;
                    }
                    .phone-list:hover {
                        color: #E60027;
                    }
                }
            }
        }
    }
    .phone-price-wrap{
        width: 70%;
        margin: torem(50) auto;
        .current-phone-name{
            margin-bottom: torem(50);
            width: 100%;
            text-align:left;
            font-size: torem(34);
            font-weight: 600;
            color: #333333;
            line-height: torem(33);
        }
        ul{
            width: 100%;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            li{
                width: 30%;
                height: torem(265);
                display: flex;
                justify-content: space-evenly;
                align-items: flex-start;
                border: torem(1) solid #D0D0D0;
                padding: torem(50) torem(30);
                margin-bottom: torem(35);
                margin-right: torem(35);
                border-radius: torem(8);
                .icons{
                    width: 40%;
                    height: 100%;
                    img{
                        width: torem(80);
                        height: torem(80);
                    }
                }
                .price-detai{
                    display: flex;
                    height: 100%;
                    flex: 1;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                    .price-name{
                        font-size: torem(28);
                        font-weight: 500;
                        color: #333333;
                        line-height: torem(48);
                        margin-bottom: torem(40);
                    }
                    .price{
                        font-size: torem(31);
                        font-weight: 400;
                        color: #333333;
                        line-height: torem(44);
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 750px) {
    .query-price {
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

        .device-sel {
            width: 90%;
            margin: 40px auto;
            display: flex;
            justify-content: flex-start;
            .sel-wrap {
                font-size: 16px;
                padding: 0;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;

                .btn-select {
                    margin-top: 14px;
                    cursor: pointer;
                    width: 80px;
                    height: 80px;
                    border-radius: 8px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }

        .selection-part {
            width: 90%;
            margin: 0 auto;
            .search-wrap {
                .input-warp {
                    padding: 0;
                    margin-bottom: 10px;
                    position: relative;
                    .input {
                        width: 100%;
                        height: 30px;
                        line-height: 30px;
                        background: #FFFFFF;
                        border-radius: 8px;
                        border: 1px solid #D0D0D0;
                        font-size: 12px;
                        padding: 0 25px 0 10px;
                        overflow-x: hidden;
                        text-overflow: ellipsis;
                    }
                    .search-icon{
                        width: 12px;
                        height: 12px;
                        position: absolute;
                        right: 10px;
                        top: 10px;
                        cursor: pointer;
                        font-size: 12px;
                    }
                }
                .hide{
                    max-height: 0!important;
                    transition: max-height 1s;
                }
                .show{
                    max-height: 400px!important;
                    transition: max-height 1s;
                }
                .phone-list-wrap {
                    font-size: 14px;
                    font-weight: 400;
                    color: #333;
                    max-height: 0;
                    overflow: hidden;
                    padding: 0;
                    padding-left: 10px;
                    .phone-type {
                        text-align: left;
                        display: flex;
                        flex-direction: column;
                        cursor: pointer;
                        .type-title {
                            font-size: 13px;
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                            line-height: 30px;
                        }
                        .phone-list{
                            font-size: 12px;
                            text-align: left;
                            padding-left: 10px;
                            height: 20px;
                            line-height: 20px;
                            color: #333;
                            cursor: pointer;
                        }
                        .phone-list:hover {
                            color: #E60027;
                        }
                    }
                }
            }
        }
        .phone-price-wrap{
            width: 90%;
            margin: 30px auto;
            .current-phone-name{
                margin-bottom: 30px;
                width: 100%;
                text-align:left;
                font-size: 16px;
                font-weight: 600;
                color: #333333;
                line-height: 20px;
            }
            ul{
                width: 80%;
                margin: 0 auto;
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;
                li{
                    width: 100%;
                    height: 80px;
                    display: flex;
                    justify-content: space-evenly;
                    align-items: flex-start;
                    border: 1px solid #D0D0D0;
                    padding: 10px;
                    margin-bottom: 10px;
                    margin-right: 10px;
                    border-radius: 8px;
                    .icons{
                        width: 40%;
                        height: 100%;
                        img{
                            width: 40px;
                            height: 40px;
                        }
                    }
                    .price-detai{
                        display: flex;
                        height: 100%;
                        flex: 1;
                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: flex-start;
                        .price-name{
                            font-size: 16px;
                            font-weight: 600;
                            color: #333333;
                            line-height: 15px;
                            margin-bottom: 20px;
                        }
                        .price{
                            font-size: 16px;
                            font-weight: 300;
                            color: #333333;
                            line-height: 15px;
                        }
                    }
                }
            }
        }
    }
}
</style>