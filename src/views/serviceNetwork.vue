<template>
    <div class="home">
        <Header></Header>
        <div class="box-top">
            <img class="box-top-img" src="../assets/fuwutop.png" alt="" />
        </div>
        <div class="box-mobile">
            <div class="select-mobile" @click="gotoSel">
                <div class="sel-name">{{selProName||'请选择'}}</div>
                <img class="sel-icon" src="../assets/arrow-bottom.png" />
            </div>
            <!-- <div class="search-mobile">
                <input type="text" @keyup.enter="handleSearch" v-model="deptAddress" placeholder="请输入地址，搜索附近的服务门店">
                <img class="search-icon" @click="handleSearch" src="../assets/search-icon.png" />
            </div> -->
        </div>
        <Popup v-model:show="showPopup" position="bottom" :style="{ height: '40%' }">
            <Area title="请选择省、市、区" :area-list="areaListCopy" :columns-num="3" @confirm="handleConfirm" @cancel="handleCancel" :columns-placeholder="['请选择', '请选择', '请选择']" />
        </Popup>
        <!-- <div class="search-box">
            <div class="">搜索附近的服务门店（不限区域）：</div>
            <div class="input-wrap">
                <input type="text" v-model="deptAddress" @keyup.enter="handleSearch" placeholder="请输入地址，搜索附近的服务门店">
            </div>
        </div> -->
        <div class="select-box">
            <div class="">按区域搜索服务门店：</div>
            <div class="select-wrap">
                <div class="sel-box" @click.stop="openDownList(1)">
                    <div class="selected-name">{{selProName}}</div>
                    <div class="arrow-down"></div>
                    <div class="down-list" :class="openDownFlag==1?'active-down':''">
                        <div class="down-list-opt" v-for="(province,provinceIndex) in provinceList" :key="provinceIndex" @click.stop="selOpt('pro',province)">
                            {{province}}
                            <input type="text" v-model="provinceId" style="display: none">
                        </div>
                    </div>
                </div>
                <div class="sel-box" @click.stop="openDownList(2)">
                    <div class="selected-name">{{selCityName}}</div>
                    <div class="arrow-down"></div>
                    <div class="down-list" :class="openDownFlag==2?'active-down':''">
                        <div class="down-list-opt" v-for="(city,cityIndex) in cityList" :key="cityIndex" @click.stop="selOpt('city',city)">
                            {{city}}
                            <input type="text" v-model="cityId" style="display: none">
                        </div>
                    </div>
                </div>
                <div class="sel-box" @click.stop="openDownList(3)">
                    <div class="selected-name">{{selAreaName}}</div>
                    <div class="arrow-down"></div>
                    <div class="down-list" :class="openDownFlag==3?'active-down':''">
                        <div class="down-list-opt" v-for="(area,areaIndex) in areaList" :key="areaIndex" @click.stop="selOpt('area',area)">
                            {{area}}
                            <input type="text" v-model="areaId" style="display: none">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <CBaiduMap :mapData="mapData" />
        </div>
        <Footer></Footer>
        <ReturnTop />
    </div>
</template>
<script>
import areaList from '../components/area';
import Header from '../components/header.vue';
import Footer from '../components/footer.vue';
import CBaiduMap from "../components/CBaiduMap";
import ReturnTop from '@/components/return-top.vue';

import Area from 'vant/lib/area';
import 'vant/lib/area/style';
import Popup from 'vant/lib/popup';
import 'vant/lib/popup/style';
import { quryProvince, quryCity, quryDistrict, quryDept } from '@/api/index.js'
import BMap from 'BMap'
export default {
    name: "serviceNetWork",
    components: {
        Header,
        Footer,
        CBaiduMap,
        Area,
        Popup,
        ReturnTop
    },
    data() {
        return {
            areaListCopy: areaList,
            cityDataCopy: [],
            areaDataCopy: [],
            provinceId: '北京',
            cityId: '北京',
            areaId: '',
            selProName: '北京',
            selCityName: '北京',
            selAreaName: '请选择',
            openDownFlag: 0,
            showPopup: false,
            provinceList: [],
            cityList: [],
            areaList: [],
            deptAddress: '',
            mapData: [],
        };
    },
    mounted() {
        this.getData()

    },
    methods: {
        getData() {
            quryProvince().then(res => {
                if (res.RESP_CODE == '0000') {
                    this.provinceList = res.data
                }
            })
            this.getMapData()
            this.getQuryCity()
            this.getquryDistrict()
        },
        getQuryCity() {
            let params = {
                province: this.provinceId
            }
            quryCity(params).then(res => {
                if (res.RESP_CODE == '0000') {
                    this.cityList = res.data
                }
            })
        },
        getquryDistrict() {
            let params = {
                city: this.cityId
            }
            quryDistrict(params).then(res => {
                console.log(res)
                if (res.RESP_CODE == '0000') {
                    this.areaList = res.data
                }
            })
        },
        getMapData() {
            let params = {
                province: this.provinceId,
                city: this.cityId,
                district: this.areaId,
            }
            let self = this
            quryDept(params).then(res => {
                if (res.RESP_CODE == '0000') {
                    let len = res.data.length
                    let list = []
                    res.data.forEach((item, index) => {
                        var myGeo = new BMap.Geocoder()
                        myGeo.getPoint(item.deptAddress, function(point) {
                            if (point) {
                                console.log(point)
                                let data = {
                                    title: item.fullname,
                                    address: item.deptAddress,
                                    tels: [item.conTel, item.phoneNo],
                                    workTime: item.workTime,
                                    lng: point.lng,
                                    lat: point.lat
                                }
                                list.push(data)
                                if (index == len - 1) {
                                    self.mapData = list
                                }
                            }
                        }, item.city)
                    })
                }
            })
        },
        handleSearch() {

            if (this.deptAddress != '') {
                let params = {
                    deptAddress: this.deptAddress
                }
                let self = this
                quryDept(params).then(res => {
                    if (res.RESP_CODE == '0000') {
                        let len = res.data.length
                        let list = []
                        res.data.forEach((item, index) => {
                            var myGeo = new BMap.Geocoder()
                            myGeo.getPoint(item.deptAddress, function(point) {
                                if (point) {
                                    let data = {
                                        title: item.fullname,
                                        address: item.deptAddress,
                                        tels: [item.conTel, item.phoneNo],
                                        workTime: item.workTime,
                                        lng: point.lng,
                                        lat: point.lat
                                    }
                                    list.push(data)
                                    if (index == len - 1) {
                                        self.mapData = list
                                    }
                                }
                            }, item.city)
                        })
                    }
                })
            } else {
                this.getMapData()
            }

        },
        gotoSel() {
            this.showPopup = !this.showPopup
        },
        handleCancel() {
            this.showPopup = false
        },
        handleConfirm(data) {
            console.log(data)
            this.showPopup = false
            this.provinceId = data[0].name
            this.cityId = data[1].name
            this.areaId = data[2].name
            this.getMapData()
            this.selProName = data[0].name
        },
        openDownList(type) {
            if (this.openDownFlag != 0) {
                this.openDownFlag = 0
            } else {
                this.openDownFlag = type
            }
        },
        selOpt(type, item) {
            this.openDownFlag = 0
            if (type == 'pro') {
                this.cityDataCopy = []
                this.areaDataCopy = []
                this.selCityName = '请选择'
                this.selAreaName = '请选择'
                this.provinceId = item
                this.selProName = item
                this.getQuryCity()
            }
            if (type == 'city') {
                this.areaDataCopy = []
                this.selAreaName = '请选择'
                this.cityId = item
                this.selCityName = item
                this.getquryDistrict()
            }
            if (type == 'area') {
                this.areaId = item
                this.selAreaName = item
                this.getMapData()
            }
        }
    },
};
</script>
<style scoped lang=scss>
@import "./../sass/common.scss";

.home {
    width: 100%;
    overflow: hidden;

    .box-top {
        width: 100%;
        height: torem(634);

        img {
            width: 100%;
            height: 100%;
        }
    }

    .box-mobile {
        display: none;
    }

    .search-box {
        padding: 0 torem(100);
        margin-top: torem(40);
        font-size: torem(29);
        font-weight: 400;
        color: #333333;
        line-height: torem(41);
        display: flex;
        align-items: center;
        justify-content: flex-start;

        .input-wrap {
            flex: 1;

            input {
                width: 100%;
                height: torem(57);
                border-radius: torem(8);
                border: 1px solid #E6E6E6;
                padding-left: torem(20);
            }
        }
    }

    .select-box {
        padding: 0 torem(100);
        margin-top: torem(40);
        font-size: torem(29);
        font-weight: 400;
        color: #333333;
        line-height: torem(41);
        display: flex;
        align-items: center;
        justify-content: flex-start;

        .select-wrap {
            height: torem(41);
            flex: 1;
            display: flex;
            justify-content: space-around;
            align-items: center;

            .sel-box {
                display: flex;
                position: relative;
                width: 30%;
                border-bottom: 1px solid #d8d8d8;
                color: #1d1e28;
                font-size: 15px;
                font-weight: 400;

                .arrow-down {
                    position: absolute;
                    top: torem(10);
                    right: torem(25);
                    width: torem(18);
                    height: torem(11);
                    background: url("../assets/xiala.png");
                    background-size: 100% 100%;
                }

                .down-list {
                    width: 100%;
                    position: absolute;
                    top: 100%;
                    margin-top: 2px;
                    display: none;
                    height: torem(248);
                    overflow-y: scroll;
                    z-index: 999;
                    background: rgba(250, 250, 250, 1);

                    .down-list-opt {
                        width: 100%;
                        padding: 14px 30px 14px 14px;
                        line-height: 20px;
                        text-align: left;
                        color: rgba(0, 0, 0, 0.5);
                    }

                    .down-list-opt:hover {
                        background: #f2f2f2;
                        color: #000;
                    }
                }

                .active-down {
                    display: block;
                }
            }
        }
    }
}

@media screen and (max-width: 750px) {
    .home {
        width: 100%;
        overflow: hidden;

        .box-top {
            width: 100%;
            height: torem(634);

            img {
                width: 100%;
                height: 100%;
            }
        }

        .box-mobile {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin-top: 20px;

            .select-mobile {
                width: 20%;
                font-size: 14px;
                font-weight: 600;
                line-height: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: space-around;

                .sel-name {
                    width: 80%;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }

                .sel-icon {
                    width: 8px;
                    height: 5px;
                }
            }

            .search-mobile {
                width: 70%;
                border: 1px solid #e5e5e5;
                border-radius: 24px;
                padding: 9px 40px 9px 15px;
                font-size: 12px;
                color: #1d1e28;
                background: #fff;
                position: relative;

                .search-icon {
                    width: 14px;
                    height: 14px;
                    position: absolute;
                    right: 10px;
                    top: 9px;
                }

                input {
                    width: 100%;
                    height: 100%;
                }
            }
        }

        .search-box {
            display: none;
        }

        .select-box {
            display: none;
        }
    }
}
</style>