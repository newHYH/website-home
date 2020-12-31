<template>
    <div class="home">
        <HeaderA :tabs="headerTabs"></HeaderA>
        <div class="box-top">
            <img class="box-top-img" src="../assets/fuwutop.png" alt=""/>
        </div>
        <div class="box-mobile">
            <div class="select-mobile" @click="gotoSel">
                <div class="sel-name">{{selProName||'请选择'}}</div>
                <img class="sel-icon" src="../assets/arrow-bottom.png" />
            </div>
            <div class="search-mobile">
                <input type="text" placeholder="请输入地址，搜索附近的服务店">
                <img class="search-icon" src="../assets/search-icon.png" />
            </div>
        </div>
        <Popup v-model:show="showPopup" position="bottom" :style="{ height: '40%' }">
            <Area
                    title="请选择省、市、区"
                    :area-list="areaListCopy"
                    :columns-num="3"
                    @confirm="handleConfirm"
                    @cancel="handleCancel"
                    :columns-placeholder="['请选择', '请选择', '请选择']"
            />
        </Popup>
        <div class="search-box">
            <div class="">搜索附近的服务店（不限区域）：</div>
            <div class="input-wrap">
                <input type="text" placeholder="请输入地址，搜索附近的服务店">
            </div>
        </div>
        <div class="select-box">
            <div class="">按区域搜索服务店：</div>
            <div class="select-wrap">
                <div class="sel-box" @click.stop="openDownList(1)">
                    <div class="selected-name">{{selProName}}</div>
                    <div class="arrow-down"></div>
                    <div class="down-list" :class="openDownFlag==1?'active-down':''">
                        <div class="down-list-opt" v-for="(province,provinceIndex) in provinceDataCopy" :key="provinceIndex" @click.stop="selOpt('pro',province)">
                            {{province.provinceName}}
                            <input type="text" v-model="provinceId" style="display: none">
                        </div>
                    </div>
                </div>
                <div class="sel-box" @click.stop="openDownList(2)">
                    <div class="selected-name">{{selCityName}}</div>
                    <div class="arrow-down"></div>
                    <div class="down-list" :class="openDownFlag==2?'active-down':''">
                        <div class="down-list-opt" v-for="(city,cityIndex) in cityDataCopy" :key="cityIndex" @click.stop="selOpt('city',city)">
                            {{city.cityName}}
                            <input type="text" v-model="cityId" style="display: none">
                        </div>
                    </div>
                </div>
                <div class="sel-box" @click.stop="openDownList(3)">
                    <div class="selected-name">{{selAreaName}}</div>
                    <div class="arrow-down"></div>
                    <div class="down-list" :class="openDownFlag==3?'active-down':''">
                        <div class="down-list-opt" v-for="(area,areaIndex) in areaDataCopy" :key="areaIndex" @click.stop="selOpt('area',area)">
                            {{area.areaName}}
                            <input type="text" v-model="areaId" style="display: none">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <CBaiduMap />
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
    import areaList from '../components/area';
    import HeaderA from '../components/headerA.vue';
    import Footer from '../components/footer.vue';
    import cityData from "../components/city";
    import CBaiduMap from "../components/CBaiduMap";
    import Area from 'vant/lib/area';
    import 'vant/lib/area/style';
    import Popup from 'vant/lib/popup';
    import 'vant/lib/popup/style';



    export default {
        name: "BaiDuMap",
        components: {
            HeaderA,
            Footer,
            CBaiduMap,
            Area,
            Popup
        },
        data() {
            return {
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
                areaListCopy: areaList,
                provinceDataCopy: cityData,
                cityDataCopy:[],
                areaDataCopy:[],
                provinceId:'',
                cityId:'',
                areaId:'',
                selProName:'请选择',
                selCityName:'请选择',
                selAreaName:'请选择',
                openDownFlag:0,
                showPopup: false
            };
        },
        mounted() {
        },
        methods: {
            handler({BMap, map}) {
                console.log(BMap, map);
                this.center.lng = 118.835;
                this.center.lat = 32.0835479;
            },
            gotoSel(){
                this.showPopup = !this.showPopup
            },
            handleCancel(){
                this.showPopup = false
            },
            handleConfirm(data){
                console.log(data)
                this.showPopup = false
                this.selProName = data[0].name
            },
            openDownList(type){
                if(this.openDownFlag != 0){
                    this.openDownFlag = 0
                } else {
                    this.openDownFlag = type
                }
            },
            selOpt(type,item){
                this.openDownFlag = 0
                if(type == 'pro'){
                    this.cityDataCopy = []
                    this.areaDataCopy = []
                    this.selCityName = '请选择'
                    this.selAreaName = '请选择'
                    this.provinceId = item.provinceCode
                    this.selProName = item.provinceName
                    this.cityDataCopy = item.mallCityList
                }
                if(type == 'city'){
                    this.areaDataCopy = []
                    this.selAreaName = '请选择'
                    this.cityId = item.cityCode
                    this.selCityName = item.cityName
                    this.areaDataCopy = item.mallAreaList
                }
                if(type == 'area'){
                    this.areaId = item.areaCode
                    this.selAreaName = item.areaName
                }
            }
        },
    };
</script>
<style scoped lang=scss>
    @import "./../sass/common.scss";

    .home{
        width: 100%;
        overflow: hidden;
        .box-top{
            width: 100%;
            height: torem(634);
            img{
                width: 100%;
                height: 100%;
            }
        }
        .box-mobile{
            display: none;
        }
        .search-box{
            padding: 0 torem(100);
            margin-top: torem(40);
            font-size: torem(29);
            font-weight: 400;
            color: #333333;
            line-height: torem(41);
            display: flex;
            align-items: center;
            justify-content: flex-start;
            .input-wrap{
                flex: 1;
                input{
                    width: 100%;
                    height: torem(57);
                    border-radius: torem(8);
                    border: 1px solid #E6E6E6;
                    padding-left: torem(20);
                }
            }
        }
        .select-box{
            padding: 0 torem(100);
            margin-top: torem(40);
            font-size: torem(29);
            font-weight: 400;
            color: #333333;
            line-height: torem(41);
            display: flex;
            align-items: center;
            justify-content: flex-start;
            .select-wrap{
                height: torem(41);
                flex: 1;
                display: flex;
                justify-content: space-around;
                align-items: center;
                .sel-box{
                    display: flex;
                    position: relative;
                    width: 30%;
                    border-bottom: 1px solid #d8d8d8;
                    color: #1d1e28;
                    font-weight: 600;
                    .arrow-down {
                        position: absolute;
                        top: torem(10);
                        right: torem(25);
                        width: torem(18);
                        height: torem(11);
                        background: url("../assets/xiala.png");
                        background-size: 100% 100%;
                    }
                    .down-list{
                        width: 100%;
                        position: absolute;
                        top: 100%;
                        margin-top: 2px;
                        display: none;
                        height: torem(248);
                        overflow-y: scroll;
                        background: rgba(250,250,250,1);
                        .down-list-opt{
                            width: 100%;
                            padding: 14px 30px 14px 14px;
                            line-height: 20px;
                            text-align: left;
                            color: rgba(0,0,0,0.5);
                        }
                        .down-list-opt:hover{
                            background: #f2f2f2;
                            color: #000;
                        }
                    }
                    .active-down{
                        display: block;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 750px){
        .home{
            width: 100%;
            overflow: hidden;
            .box-top{
                width: 100%;
                height: torem(634);
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .box-mobile{
                display: flex;
                align-items: center;
                justify-content: flex-start;
                margin-top: 20px;
                .select-mobile{
                    width: 20%;
                    font-size: 14px;
                    font-weight: 600;
                    line-height: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    .sel-name{
                        width: 80%;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                    .sel-icon{
                        width: 8px;
                        height: 5px;
                    }
                }
                .search-mobile{
                    width: 70%;
                    border: 1px solid #e5e5e5;
                    border-radius: 24px;
                    padding: 9px 40px 9px 15px;
                    font-size: 12px;
                    color: #1d1e28;
                    background: #fff;
                    position: relative;
                    .search-icon{
                        width: 14px;
                        height: 14px;
                        position: absolute;
                        right: 10px;
                        top: 9px;
                    }
                    input{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .search-box{
                display: none;
            }
            .select-box{
                display: none;
            }
        }
    }
</style>