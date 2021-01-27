<template>
    <div class="baidu-map">
        <div class="map-box">
            <div id="map"></div>
        </div>
        <div class="map-list">
            <!-- <div class="select" :class="slideOn ? 'on' : ''">
                <div class="placeholder" @click="open()">{{chooseVal ? chooseVal : '选择产品'}}</div>
                <ul class="option-list">
                    <li v-for="(item, index) in options" :key="index" @click="choose(index)">{{item.name}}</li>
                </ul>
            </div> -->
            <div class="result-list">
                <div class="result-item" @click="changeMap(index)" v-for="(item, index) in results" :key="index">
                    <div class="title">{{item.title}}
                        <!-- <div class="distance">{{item.distance}}</div> -->
                        <div class="index">{{index+1}}</div>
                    </div>
                    <div class="address">{{item.address}}</div>
                    <div class="tel">
                        <!-- <span v-for="(tel, telIndex) in item.tels" :key="telIndex">{{tel}}</span> -->
                        {{item.tels[0]}}
                    </div>
                    <div class="time">营业时间：{{item.workTime}}</div>
                    <!-- <div class="get-line">获取路线</div> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BMap from 'BMap'
import { quryDept } from '@/api/index.js'
export default {
    name: "CBaiduMap",
    props: {
        mapData: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            options: [
                { name: '全部产品', val: 0 },
                { name: '手机', val: 1 },
                { name: '笔记本', val: 2 },
                { name: '平板', val: 3 },
                { name: '穿戴', val: 4 },
                { name: '家居', val: 5 },
                { name: '配件', val: 6 }
            ],
            results: [],
            posList: [],
            center: {
                lat: 39.915,
                lng: 116.404
            },
            slideOn: false,
            chooseVal: ''
        }
    },
    mounted() {
        let that = this
        this.getData()
    },
    watch: {
        'mapData': function(oldval, newVal) {
            if (oldval != newVal) {
                console.log(newVal)
                this.getData()
            }
        }
    },
    methods: {
        getData() {
            if (this.mapData.length > 0) {
                this.results = this.mapData
                console.log(this.results)
                this.center = { lat: this.mapData[0].lat, lng: this.mapData[0].lng }
                this.createMap()
            }

        },
        createMap() {
            // 创建Map实例
            const map = new BMap.Map("map", { minZoom: 3, maxZoom: 12 })
            // 初始化地图,设置中心点坐标和地图级别
            map.centerAndZoom(new BMap.Point(this.center.lng, this.center.lat), 12)
            //添加地图类型控件

            // 设置地图显示的城市 此项是必须设置的
            //map.setCurrentCity("北京")
            //开启鼠标滚轮缩放
            map.enableScrollWheelZoom(true)
            this.results.forEach((item, index) => {
                let point = new BMap.Point(item.lng, item.lat);
                var marker = marker = new BMap.Marker(point)
                if (index<=50) {
                    let icon = require('../assets/maps/' + Number(index + 1) + '.png')
                     marker = new BMap.Marker(point, {
                        icon: new BMap.Icon(icon, new BMap.Size(22, 38))
                    });
                }
                map.addOverlay(marker);
                var opts = {
                    width: 350,
                    height: 200,
                    title: ''
                };
                let info = '<div style="font-size:16px; color:#333; padding:0 12px;"><p style="color:#000;font-weight:700;">'
                info += item.title
                info += '</p><p  style="color:#7f7f7f"><span>地址：</span>'
                info += item.address
                info += '</p><p style="color:#7f7f7f"><span>电话：<span>'
                info += item.tels[0]
                info += '</p></div>'
                var infoWindow = new BMap.InfoWindow(info, opts);
                // 点标记添加点击事件
                marker.addEventListener('click', function() {
                    map.openInfoWindow(infoWindow, point); // 开启信息窗口
                });
            })
        },
        changeMap(index) {
            this.center = {
                lat: this.results[index].lat,
                lng: this.results[index].lng
            }
            this.createMap()
        },
        choose(index) {
            this.chooseVal = this.options[index].name
            this.slideOn = false
        },
        open() {
            this.slideOn = !this.slideOn
        }
    }
}
</script>
<style scoped lang="scss">
@import "./../sass/common.scss";

$mapListW: torem(536);
$mapHeight: torem(769);


.baidu-map {
    position: relative;
    padding: torem(40) 0 torem(40) torem(561);

    .map-box {
        height: $mapHeight;

        #map {
            width: 100%;
            height: 100%;
        }
    }

    .map-list {
        position: absolute;
        width: $mapListW;
        height: $mapHeight;
        top: torem(40);
        left: 0;
        background: #F9F9F9;

        .select {
            text-align: left;
            position: relative;

            .placeholder {
                position: relative;
                cursor: pointer;
                padding-left: torem(25);
                height: torem(56);
                line-height: torem(56);
                font-size: torem(24);
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #999999;
                box-shadow: 0px 1px 0px 0px #E6E6E6;

                &::after {
                    content: '';
                    position: absolute;
                    width: torem(30);
                    height: torem(30);
                    top: 50%;
                    margin-top: torem(-15);
                    right: torem(20);
                    background: url('../assets/icon-arrow-down.svg') no-repeat;
                    background-size: contain;
                    background-position: center;
                }
            }

            .option-list {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                z-index: 10;
                border: 1px solid #e6e6e6;
                overflow: auto;
                max-height: torem(280);

                li {
                    background: #fff;
                    width: 100%;
                    line-height: torem(20);
                    padding: torem(14);
                    text-align: left;
                    color: #333333;
                    font-size: torem(16);
                    cursor: pointer;

                    &:hover {
                        background: #f9f9f9;
                    }
                }
            }

            &.on {
                .option-list {
                    display: block;
                }
            }
        }

        .result-list {
            padding: torem(20) torem(25);
            overflow: auto;
            height: $mapHeight - torem(60);

            .result-item {
                text-align: left;
                margin-top: torem(30);
                padding-left: torem(32);
                color: #999999;
                font-size: torem(19);
                line-height: torem(26);
                cursor: pointer;
                font-weight: 400;
                font-family: PingFangSC-Regular, PingFang SC;

                .title {
                    font-size: torem(21);
                    color: #333333;
                    line-height: torem(29);
                    padding-right: torem(80);
                    position: relative;

                    .distance {
                        position: absolute;
                        right: 0;
                        top: 0;
                    }

                    .index {
                        position: absolute;
                        top: torem(3);
                        font-size: torem(12);
                        font-weight: 400;
                        left: torem(-32);
                        width: torem(22);
                        height: torem(22);
                        border-radius: torem(11);
                        text-align: center;
                        line-height: torem(22);
                        color: #fff;
                        background: #FF8A8A;
                    }
                }

                .address {
                    margin-top: torem(15);
                    position: relative;

                    &::after {
                        position: absolute;
                        top: torem(4);
                        left: torem(-32);
                        content: '';
                        width: torem(15);
                        height: torem(19);
                        background: url('../assets/dingwei-2.png') no-repeat;
                        background-size: contain;
                        background-position: center;
                    }
                }

                .tel {
                    margin-top: torem(10);
                    position: relative;

                    &::after {
                        position: absolute;
                        top: torem(4);
                        left: torem(-32);
                        content: '';
                        width: torem(15);
                        height: torem(16);
                        background: url('../assets/dianhua-6 2.png') no-repeat;
                        background-size: contain;
                        background-position: center;
                    }
                }

                .time {
                    margin-top: torem(10);
                    position: relative;

                    &::after {
                        position: absolute;
                        top: torem(4);
                        left: torem(-32);
                        content: '';
                        width: torem(15);
                        height: torem(15);
                        background: url('../assets/shijian-2.png') no-repeat;
                        background-size: contain;
                        background-position: center;
                    }
                }

                .get-line {
                    margin-top: torem(10);
                    color: #007AFF;
                    position: relative;
                    cursor: pointer;

                    &::after {
                        position: absolute;
                        top: torem(4);
                        left: torem(-32);
                        content: '';
                        width: torem(15);
                        height: torem(16);
                        background: url('../assets/daohang.png') no-repeat;
                        background-size: contain;
                        background-position: center;
                    }
                }

                &:first-child {
                    margin-top: 0;
                }
            }
        }
    }
}

// ipad
@media screen and (max-width:1024px) {
    .baidu-map {
        position: relative;
        padding: 16px 0;

        .map-box {
            display: none;
        }

        .map-list {
            position: relative;
            width: 100%;
            height: auto;

            .select {
                .placeholder {
                    padding-left: 1em;
                    height: 38px;
                    line-height: 38px;
                    font-size: 16px;

                    &::after {
                        width: 14px;
                        height: 14px;
                        top: 50%;
                        margin-top: -6px;
                        right: 8px;
                    }
                }

                .option-list {
                    max-height: 220px;

                    li {
                        line-height: 20px;
                        padding: 14px;
                        font-size: 13px;
                    }
                }
            }

            .result-list {
                padding: 20px 25px;
                height: auto;

                .result-item {
                    text-align: left;
                    margin-top: 25px;
                    padding-left: 28px;
                    color: #999999;
                    font-size: 14px;
                    line-height: 21px;

                    .title {
                        font-size: 16px;
                        color: #333333;
                        line-height: 24px;
                        padding-right: 80px;
                        position: relative;

                        .distance {
                            position: absolute;
                            right: 0;
                            top: 0;
                        }

                        .index {
                            position: absolute;
                            top: 50%;
                            margin-top: -9px;
                            font-weight: 400;
                            left: -28px;
                            width: 18px;
                            height: 18px;
                            border-radius: 9px;
                            text-align: center;
                            line-height: 18px;
                            color: #fff;
                            background: #FF8A8A;
                        }
                    }

                    .address {
                        margin-top: 7px;
                        position: relative;

                        &::after {
                            position: absolute;
                            top: 0;
                            left: -28px;
                            content: '';
                            width: 14px;
                            height: 21px;
                            background: url('../assets/dingwei-2.png') no-repeat;
                            background-size: contain;
                            background-position: center;
                        }
                    }

                    .tel {
                        margin-top: torem(10);
                        position: relative;

                        &::after {
                            position: absolute;
                            top: 0;
                            left: -28px;
                            content: '';
                            width: 14px;
                            height: 21px;
                            background: url('../assets/dianhua-6 2.png') no-repeat;
                            background-size: contain;
                            background-position: center;
                        }
                    }

                    .time {
                        margin-top: torem(10);
                        position: relative;

                        &::after {
                            position: absolute;
                            top: 0;
                            left: -28px;
                            content: '';
                            width: 14px;
                            height: 21px;
                            background: url('../assets/shijian-2.png') no-repeat;
                            background-size: contain;
                            background-position: center;
                        }
                    }

                    .get-line {
                        margin-top: torem(10);
                        color: #007AFF;
                        position: relative;
                        cursor: pointer;

                        &::after {
                            position: absolute;
                            top: 0;
                            left: -28px;
                            content: '';
                            width: 14px;
                            height: 21px;
                            background: url('../assets/daohang.png') no-repeat;
                            background-size: contain;
                            background-position: center;
                        }
                    }

                    &:first-child {
                        margin-top: 0;
                    }
                }
            }
        }
    }
}

// mobile
@media screen and (max-width:768px) {
    .baidu-map {
        position: relative;
        padding: 0;

        .map-box {
            display: none;
        }

        .map-list {
            position: relative;
            width: 100%;
            height: auto;

            .select {
                .placeholder {
                    padding-left: 1em;
                    height: 38px;
                    line-height: 38px;
                    font-size: 16px;

                    &::after {
                        width: 14px;
                        height: 14px;
                        top: 50%;
                        margin-top: -6px;
                        right: 8px;
                    }
                }

                .option-list {
                    max-height: 220px;

                    li {
                        line-height: 20px;
                        padding: 14px;
                        font-size: 13px;
                    }
                }
            }

            .result-list {
                padding: 20px 25px;
                height: auto;

                .result-item {
                    text-align: left;
                    margin-top: 25px;
                    padding-left: 28px;
                    color: #999999;
                    font-size: 14px;
                    line-height: 21px;

                    .title {
                        font-size: 16px;
                        color: #333333;
                        line-height: 24px;
                        padding-right: 80px;
                        position: relative;

                        .distance {
                            position: absolute;
                            right: 0;
                            top: 0;
                        }

                        .index {
                            position: absolute;
                            top: 50%;
                            margin-top: -9px;
                            font-weight: 400;
                            left: -28px;
                            width: 18px;
                            height: 18px;
                            border-radius: 9px;
                            text-align: center;
                            line-height: 18px;
                            color: #fff;
                            background: #FF8A8A;
                        }
                    }

                    .address {
                        margin-top: 7px;
                        position: relative;

                        &::after {
                            position: absolute;
                            top: 0;
                            left: -28px;
                            content: '';
                            width: 14px;
                            height: 21px;
                            background: url('../assets/dingwei-2.png') no-repeat;
                            background-size: contain;
                            background-position: center;
                        }
                    }

                    .tel {
                        margin-top: torem(10);
                        position: relative;

                        &::after {
                            position: absolute;
                            top: 0;
                            left: -28px;
                            content: '';
                            width: 14px;
                            height: 21px;
                            background: url('../assets/dianhua-6 2.png') no-repeat;
                            background-size: contain;
                            background-position: center;
                        }
                    }

                    .time {
                        margin-top: torem(10);
                        position: relative;

                        &::after {
                            position: absolute;
                            top: 0;
                            left: -28px;
                            content: '';
                            width: 14px;
                            height: 21px;
                            background: url('../assets/shijian-2.png') no-repeat;
                            background-size: contain;
                            background-position: center;
                        }
                    }

                    .get-line {
                        margin-top: torem(10);
                        color: #007AFF;
                        position: relative;
                        cursor: pointer;

                        &::after {
                            position: absolute;
                            top: 0;
                            left: -28px;
                            content: '';
                            width: 14px;
                            height: 21px;
                            background: url('../assets/daohang.png') no-repeat;
                            background-size: contain;
                            background-position: center;
                        }
                    }

                    &:first-child {
                        margin-top: 0;
                    }
                }
            }
        }
    }
}
</style>