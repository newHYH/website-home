<template>
    <div class="home">
        <HeaderA :tabs="headerTabs"></HeaderA>
        <div class="box-top">
            <img class="box-top-img" src="../assets/fuwutop.png" alt=""/>
        </div>
        <div class="search-box row">
            <div class="col-sm-12 col-md-4 col-lg-4">搜索附近的服务店（不限区域）：</div>
            <div class="input-wrap col-sm-12 col-md-8 col-lg-8">
                <input type="text">
            </div>
        </div>
        <div class="select-box row">
            <div class="col-sm-12 col-md-3 col-lg-3">按区域搜索服务店：</div>
            <div class="select-wrap col-sm-12 col-md-9 col-lg-9">
                <!-- <el-select v-model="model1" placeholder="请选择">
                    <el-option
                            v-for="item in areaListCopy.province_list"
                            :key="item"
                            :label="item"
                            :value="item">
                    </el-option>
                </el-select> -->
            </div>
        </div>
        <div class="map-box container">
            <CBaiduMap />
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
    import areaList from '../components/area';
    import HeaderA from '../components/headerA.vue';
    import Footer from '../components/footer.vue';
    import CBaiduMap from "../components/CBaiduMap";
    export default {
        name: "BaiDuMap",
        components: {
            HeaderA,
            Footer,
            CBaiduMap
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
            .input-wrap{
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
            .select-wrap{
                height: torem(41);

            }
        }
    }
</style>