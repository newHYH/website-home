<template>
    <div class="query-price">
        <div class="head-img">
            价格查询页面
        </div>
        <div class="device-sel row">
            <div class="sel-wrap col-sm-12 col-md-12 col-lg-12">
                选择设备信息：
                <a class="btn-select" id="btn_select">
                    <span class="cur-select">选择设备</span>
                    <select>
                        <option>选项一</option>
                        <option>选项二</option>
                        <option>选项三</option>
                        <option>选项四</option>
                        <option>选项五</option>
                    </select>
                </a>
            </div>
        </div>
        <div class="selection-part">
            <div class="device-list">
                <ul class="row">
                    <li class="col-sm-12 col-md-6 col-lg-3">
                        <div class="content-wrap">
                            <img class="device-img" src="../assets/price/vision.png" title="华为手机" alt="华为手机">
                            <div class="device-name">
                                华为手机
                            </div>
                        </div>
                    </li>
                    <li class="col-sm-12 col-md-6 col-lg-3">
                        <div class="content-wrap">
                            <img class="device-img" src="../assets/price/vision.png" title="华为手机" alt="华为手机">
                            <div class="device-name">
                                华为手机
                            </div>
                        </div>
                    </li>
                    <li class="col-sm-12 col-md-6 col-lg-3">
                        <div class="content-wrap">
                            <img class="device-img" src="../assets/price/vision.png" title="华为手机" alt="华为手机">
                            <div class="device-name">
                                华为手机
                            </div>
                        </div>
                    </li>
                    <li class="col-sm-12 col-md-6 col-lg-3">
                        <div class="content-wrap">
                            <img class="device-img" src="../assets/price/vision.png" title="华为手机" alt="华为手机">
                            <div class="device-name">
                                华为手机
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="search-wrap">
                <div class="input-warp col-sm-12 col-md-12 col-lg-12">
                    <input type="text" placeholder="请输入您的华为手机型号信息">
                </div>
                <div class="phone-list-wrap col-sm-12 col-md-12 col-lg-12">
                    <li class="phone-type" v-for="(phoneType,index) in phoneList" :key="index">
                        <div class="type-title" @click="handleClickPhoneType(index)">
                            <div class="extend" :class="currentPhoneType == index?'is-extend':''"></div>
                            <div class="phone-name">
                                {{phoneType.phoneTypeName}}
                            </div>
                        </div>
                        <ul v-show="currentPhoneType == index">
                            <li class="phone" v-for="(phone,idx) in phoneType.phoneTypeList" :key="idx">
                                {{phone.phoneName}}
                            </li>
                        </ul>
                    </li>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "query-price",
        data(){
            return{
                phoneList:[
                    {
                        phoneTypeName:'麦芒1 全网通版 6GB+64GB',
                        phoneTypeList:[
                            {
                                phoneName:'麦芒1 全网通版 6GB+64GB (SNE-AL00)',
                            },
                            {
                                phoneName:'麦芒12 全网通版 6GB+64GB (SNE-AL00)',
                            },
                            {
                                phoneName:'麦芒13 全网通版 6GB+64GB (SNE-AL00)',
                            },
                        ]
                    },
                    {
                        phoneTypeName:'麦芒1 全网通版 6GB+64GB',
                        phoneTypeList:[
                            {
                                phoneName:'麦芒1 全网通版 6GB+64GB (SNE-AL00)',
                            },
                            {
                                phoneName:'麦芒12 全网通版 6GB+64GB (SNE-AL00)',
                            },
                            {
                                phoneName:'麦芒13 全网通版 6GB+64GB (SNE-AL00)',
                            },
                        ]
                    },
                    {
                        phoneTypeName:'麦芒1 全网通版 6GB+64GB',
                        phoneTypeList:[
                            {
                                phoneName:'麦芒1 全网通版 6GB+64GB (SNE-AL00)',
                            },
                            {
                                phoneName:'麦芒12 全网通版 6GB+64GB (SNE-AL00)',
                            },
                            {
                                phoneName:'麦芒13 全网通版 6GB+64GB (SNE-AL00)',
                            },
                        ]
                    },
                    {
                        phoneTypeName:'麦芒1 全网通版 6GB+64GB',
                        phoneTypeList:[
                            {
                                phoneName:'麦芒1 全网通版 6GB+64GB (SNE-AL00)',
                            },
                            {
                                phoneName:'麦芒12 全网通版 6GB+64GB (SNE-AL00)',
                            },
                            {
                                phoneName:'麦芒13 全网通版 6GB+64GB (SNE-AL00)',
                            },
                        ]
                    },
                    {
                        phoneTypeName:'麦芒1 全网通版 6GB+64GB',
                        phoneTypeList:[
                            {
                                phoneName:'麦芒1 全网通版 6GB+64GB (SNE-AL00)',
                            },
                            {
                                phoneName:'麦芒12 全网通版 6GB+64GB (SNE-AL00)',
                            },
                            {
                                phoneName:'麦芒13 全网通版 6GB+64GB (SNE-AL00)',
                            },
                        ]
                    },
                    {
                        phoneTypeName:'麦芒1 全网通版 6GB+64GB',
                        phoneTypeList:[
                            {
                                phoneName:'麦芒1 全网通版 6GB+64GB (SNE-AL00)',
                            },
                            {
                                phoneName:'麦芒12 全网通版 6GB+64GB (SNE-AL00)',
                            },
                            {
                                phoneName:'麦芒13 全网通版 6GB+64GB (SNE-AL00)',
                            },
                        ]
                    },
                    {
                        phoneTypeName:'麦芒7 全网通版 6GB+64GB',
                        phoneTypeList:[
                            {
                                phoneName:'麦芒7 全网通版 6GB+64GB (SNE-AL00)',
                            },
                            {
                                phoneName:'麦芒7 全网通版 6GB+64GB (SNE-AL00)',
                            },
                            {
                                phoneName:'麦芒7 全网通版 6GB+64GB (SNE-AL00)',
                            },
                        ]
                    },
                    {
                        phoneTypeName:'麦芒7 全网通版 6GB+64GB',
                        phoneTypeList:[
                            {
                                phoneName:'麦芒7 全网通版 6GB+64GB (SNE-AL00)',
                            },
                            {
                                phoneName:'麦芒7 全网通版 6GB+64GB (SNE-AL00)',
                            },
                            {
                                phoneName:'麦芒7 全网通版 6GB+64GB (SNE-AL00)',
                            },
                        ]
                    },
                    {
                        phoneTypeName:'麦芒7 全网通版 6GB+64GB',
                        phoneTypeList:[
                            {
                                phoneName:'麦芒7 全网通版 6GB+64GB (SNE-AL00)',
                            },
                            {
                                phoneName:'麦芒7 全网通版 6GB+64GB (SNE-AL00)',
                            },
                            {
                                phoneName:'麦芒7 全网通版 6GB+64GB (SNE-AL00)',
                            },
                        ]
                    },
                    {
                        phoneTypeName:'麦芒7 全网通版 6GB+64GB',
                        phoneTypeList:[
                            {
                                phoneName:'麦芒7 全网通版 6GB+64GB (SNE-AL00)',
                            },
                            {
                                phoneName:'麦芒7 全网通版 6GB+64GB (SNE-AL00)',
                            },
                            {
                                phoneName:'麦芒7 全网通版 6GB+64GB (SNE-AL00)',
                            },
                        ]
                    },
                    {
                        phoneTypeName:'麦芒7 全网通版 6GB+64GB',
                        phoneTypeList:[
                            {
                                phoneName:'麦芒7 全网通版 6GB+64GB (SNE-AL00)',
                            },
                            {
                                phoneName:'麦芒7 全网通版 6GB+64GB (SNE-AL00)',
                            },
                            {
                                phoneName:'麦芒7 全网通版 6GB+64GB (SNE-AL00)',
                            },
                        ]
                    },
                ],
                currentPhoneType:0,
            }
        },
        methods:{
            handleClickPhoneType(index){
                this.currentPhoneType = index
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "./../sass/common.scss";
    /*@media screen and (min-width:1440px){*/
        .query-price{
            width: 100%;
            .head-img{
                height: torem(633);
                background: url('../assets/price/price-banner.png');
                background-size: 100% 100%;
                font-size: torem(69);
                font-weight: 600;
                color: #FFFFFF;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .device-sel{
                display: flex;
                align-items: center;
                justify-content: flex-start;
                margin: torem(40) 0 torem(20) torem(100);
                .sel-wrap{
                    /*width: torem(434);*/
                    /*height: torem(60);*/
                    font-size: torem(29);
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    .btn-select {
                        position: relative;
                        display: inline-block;
                        width: 30%;
                        font-size: torem(24);
                        color: #ccc;
                        border: torem(1) solid #ccc;
                        border-radius: torem(5);
                        appearance:none;
                        -moz-appearance:none; /* Firefox */
                        -webkit-appearance:none; /* Safari 和 Chrome */
                    }
                    .btn-select .cur-select {
                        display: inline-block;
                        text-align: left;
                        padding-left: torem(25);
                        width: 100%;
                        height: 100%;
                        font: torem(20);
                        line-height: torem(60);
                    }
                    /*.btn-select:hover .cur-select {*/
                    /*    background-color: #f90;*/
                    /*}*/
                    .btn-select select {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        opacity: 0;
                        appearance:none;
                        -moz-appearance:none; /* Firefox */
                        -webkit-appearance:none; /* Safari 和 Chrome */
                    }
                    .btn-select select option {
                        text-indent: 10px;
                    }
                    .btn-select select option:hover {
                        background-color: #999;
                        color: #fff;
                    }
                }
            }
            .selection-part{
                width: 100%;
                padding: 0 torem(100);
                margin-bottom: torem(77);
                .device-list{
                    margin-top: torem(40);
                    ul {
                        margin-bottom: torem(48);
                        li{
                            /*display: inline-block;*/
                            cursor: pointer;
                            margin-top: torem(40);
                            .content-wrap{
                                margin: 0 auto;
                                width: 93%;
                                /*height: torem(352);*/
                                /*border: 1px solid #ccc;*/
                                border-radius: torem(16);
                                box-shadow: 0 torem(7) torem(25) 0 rgba(255, 0, 31, 0.14);
                            }
                            .content-wrap:hover .device-name{
                                color: #007AFF;
                            }
                            .device-img{
                                width: torem(259);
                                height: torem(259);
                                margin-top: torem(-32);
                                margin-bottom: torem(32);
                                border-radius: torem(16);
                                box-shadow: torem(7) 0  torem(25) 0 rgba(133, 133, 133, 0.14);
                            }
                            .device-name{
                                font-size: torem(39);
                                height: torem(75);
                                font-weight: 600;
                                color: #333333;
                            }
                        }
                    }
                }
                .search-wrap{
                        .input-warp{
                            padding: 0;
                            margin-bottom: torem(1);
                            input{
                                width: 100%;
                                height: torem(57);
                                background: #FFFFFF;
                                border-radius: torem(8);
                                border: torem(1) solid #E6E6E6;
                                font-size: torem(24);
                                padding-left: torem(40);
                                appearance:none;
                                -moz-appearance:none; /* Firefox */
                                -webkit-appearance:none; /* Safari 和 Chrome */
                            }
                        }
                        .phone-list-wrap{
                            font-size: torem(24);
                            font-weight: 400;
                            color: #666666;
                            max-height: torem(443);
                            overflow: scroll;
                            background: #F5F5F5;
                            .phone-type{
                                text-align: left;
                                line-height: torem(53);
                                display: flex;
                                flex-direction: column;
                                cursor: pointer;
                                .type-title{
                                    display: flex;
                                    justify-content: flex-start;
                                    align-items: center;
                                    .extend{
                                        width: torem(9);
                                        height: torem(15);
                                        background: url("../assets/price/arrow-right.png") no-repeat;
                                        background-size: 100% 100%;
                                        margin-right: torem(10);
                                    }
                                    .is-extend{
                                        width: torem(15);
                                        height: torem(10);
                                        background: url("../assets/price/arrow-bottom.png") no-repeat;
                                        background-size: 100% 100%;
                                        margin-right: torem(10);
                                    }
                                }
                                .phone{
                                    text-align: left;
                                    padding-left: torem(25);
                                    height: torem(53);
                                    line-height: torem(53);
                                    color: #999;
                                    cursor: pointer;
                                }
                                .phone:hover{
                                    color: #007AFF;
                                }
                            }
                        }
                    }
            }
        }
    /*}*/
@media screen and (max-width: 750px){
    .query-price{
        .device-sel{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin: 20px 0 10px 0px;
            .sel-wrap{
                /*width: torem(434);*/
                /*height: torem(60);*/
                font-size: 15px;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                .btn-select {
                    position: relative;
                    display: inline-block;
                    width: 50%;
                    font-size: 12px;
                    color: #ccc;
                    border: torem(1) solid #ccc;
                    border-radius: torem(5);
                    appearance:none;
                    -moz-appearance:none; /* Firefox */
                    -webkit-appearance:none; /* Safari 和 Chrome */
                }
                .btn-select .cur-select {
                    display: inline-block;
                    text-align: left;
                    padding-left: 25px;
                    width: 100%;
                    height: 100%;
                    font-size: 12px;
                    line-height: 30px;
                }
                /*.btn-select:hover .cur-select {*/
                /*    background-color: #f90;*/
                /*}*/
                .btn-select select {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                    appearance:none;
                    -moz-appearance:none; /* Firefox */
                    -webkit-appearance:none; /* Safari 和 Chrome */
                }
                .btn-select select option {
                    text-indent: 10px;
                }
                .btn-select select option:hover {
                    background-color: #999;
                    color: #fff;
                }
            }
        }
        .selection-part{
            .device-list{
                ul{
                    li{
                        margin-top: 40px!important;
                        .content-wrap{
                            .device-img{
                                width: 259px;
                                height: 259px;
                                margin-top: -32px;
                                margin-bottom: 32px;
                                border-radius: 16px;
                                box-shadow: 7px 0  25px 0 rgba(133, 133, 133, 0.14);
                            }
                            .device-name{
                                font-size: 20px;
                                height: 50px;
                                font-weight: 600;
                                color: #333333;
                            }
                        }
                    }
                }
            }
            .search-wrap{
                .input-warp{
                    padding: 0;
                    margin-bottom: torem(1);
                    input{
                        width: 100%;
                        height: 38px;
                        background: #FFFFFF;
                        border-radius: torem(8);
                        border: torem(1) solid #E6E6E6;
                        font-size: 12px;
                        padding-left: torem(40);
                        appearance:none;
                        -moz-appearance:none; /* Firefox */
                        -webkit-appearance:none; /* Safari 和 Chrome */
                    }
                }
                .phone-list-wrap{
                    font-size: 12px;
                    font-weight: 400;
                    color: #666666;
                    max-height: 443px;
                    overflow-y: scroll;
                    background: #F5F5F5;
                    .phone-type{
                        text-align: left;
                        line-height: 53px;
                        display: flex;
                        flex-direction: column;
                        cursor: pointer;
                        .type-title{
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                            .extend{
                                width: 9px;
                                height: 15px;
                                background: url("../assets/price/arrow-right.png") no-repeat;
                                background-size: 100% 100%;
                                margin-right: 10px;
                            }
                            .is-extend{
                                width: 15px;
                                height: 10px;
                                background: url("../assets/price/arrow-bottom.png") no-repeat;
                                background-size: 100% 100%;
                                margin-right: 10px;
                            }
                        }
                        .phone{
                            text-align: left;
                            padding-left: 25px;
                            height: 53px;
                            line-height: 53px;
                            color: #999;
                            cursor: pointer;
                        }
                        .phone:hover{
                            color: #007AFF;
                        }
                    }
                }
            }
        }
    }
}
</style>