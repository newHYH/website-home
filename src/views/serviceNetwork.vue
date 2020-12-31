<template>
    <div class="home">
        <HeaderA :tabs="headerTabs"></HeaderA>
        <div class="box-top">
            <img class="box-top-img" src="../assets/fuwutop.png" alt=""/>
        </div>
        <div class="search-box">
            <div class="">搜索附近的服务店（不限区域）：</div>
            <div class="input-wrap">
                <input type="text">
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
<!--        <CBaiduMap></CBaiduMap>-->
        <Footer></Footer>
    </div>
</template>
<script>
    import areaList from '../components/area';
    import HeaderA from '../components/headerA.vue';
    import Footer from '../components/footer.vue';
    import cityData from "../components/city";
    // import CBaiduMap from "../components/CBaiduMap";
    export default {
        name: "BaiDuMap",
        components: {
            HeaderA,
            Footer,
            // CBaiduMap
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
                model1:0
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
</style>