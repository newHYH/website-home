<template>
  <div class="home">
    <HeaderA :tabs="headerTabs"></HeaderA>
    <div class="box-top">
      <img
        class="box-top-img"
        src="../assets/fuwutop.png"
        alt=""
      />
      <!-- <div class="box-top-text">服务店查询</div> -->
    </div>
    <div
      style="width: 100%; height: 20px; background: #f5f5f5"
    ></div>
    <div class="box-zhong">
      <div style="margin-top: 20px">
        <span class="box-zhong-sousuo" style="font-size: 16px; width: 20%"
          >搜索附近的服务店（不限区域）：</span
        >
        <span @click="showPopup" class="box-zhong-chengshi">城市</span>
        <input
          class="box-zhong-input"
          placeholder="请输入地址，搜索附近的服务店"
        />
            <Popup  v-model:show="show"
                    closeable
                    position="bottom"
                    :style="{ height: '30%' }">
             <Area
                :area-list="areaList"
                :columns-placeholder="['省', '市', '区']"
                />
            </Popup>
      </div>
      <div class="bottom-yincang" style="margin-top: 20px">
        <span v-show="hide.query" style="font-size: 16px; width: 25%"
          >按区域搜索服务店：</span
        >
        <input
          v-show="hide.query"
          id="sex"
          type="text"
          placeholder="选择省份"
          list="sexlist"
          class="box-zhong-input2"
        />
        <datalist id="sexlist">
          <option>黑龙江</option>
        </datalist>
        <input
          v-show="hide.query"
          id="sex1"
          type="text"
          placeholder="选择城市"
          list="sexlist1"
          class="box-zhong-input2"
        />
        <datalist id="sexlist1">
          <option>哈尔滨</option>
        </datalist>
        <input
          v-show="hide.query"
          id="sex2"
          type="text"
          placeholder="选择区域"
          list="sexlist2"
          class="box-zhong-input2"
        />
        <datalist id="sexlist2">
          <option>香坊区</option>
        </datalist>
      </div>
    </div>
    <div class="box-ditu">
      <div class="box-ditu-list">
        <input
          v-show="hide.query"
          id="sex2"
          type="text"
          placeholder="选择产品"
          list="sexlist3"
          class="box-ditu-input"
        />
        <datalist id="sexlist3">
          <option>华为</option>
          <option>小米</option>
        </datalist>
      </div>
      <div class="map-warp">
        <baidu-map
          class="map"
          ak="tRQV1ysINWeNXFPtzdAUrtbFEfa4SOGb"
          :center="center"
          :zoom="zoom"
          @ready="handler"
        ></baidu-map>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import BaiduMap from "vue-baidu-map/components/map/Map";
import Area from 'vant/lib/area';
import 'vant/lib/area/style';
import { createApp } from 'vue';

import Popup from 'vant/lib/popup';
import 'vant/lib/popup/style';

import { ref } from 'vue';
import areaList from '../components/area';
    import HeaderA from '@/components/headerA.vue';
import Footer from '@/components/footer.vue';
export default {
  name: "BaiDuMap",
  components: {
    BaiduMap,
    HeaderA,
    Footer,
    Area,
    Popup,
  },
  setup() {
    const show = ref(false);
    const showPopup = () => {
      show.value = true;
    };
    return {
      show,
      showPopup,
    };
  },
  data() {
    return {
    //   show:false,
    //   carmodel:'',
    //   areaList,
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
      windowWidth: document.documentElement.clientWidth,
      hide: {
        query: true,
        chengshi: false,
      },
      center: { lng: 0, lat: 0 }, // //经纬度
      zoom: 15, // //地图展示级别
      shengList: [
        // {
        //     value: 'New York',
        //     label: 'New York'
        // },
      ],
      model1: "",
    //   shareType: false,
    //   num: -273,
    };
  },
  watch: {
    windowWidth(val) {
      let that = this;
      console.log("实时屏幕宽度：", val, that.windowWidth);
    },
  },
  mounted() {
    
         document.body.scrollTop = 0;
      console.log(areaList.province_list)
    var that = this;
    // <!--把window.onresize事件挂在到mounted函数上-->
    window.onresize = () => {
      return (() => {
        window.fullWidth = document.documentElement.clientWidth;
        that.windowWidth = window.fullWidth; // 宽
        // if (this.windowWidth < 750) {
        //   this.hide.query = false;
        //   this.hide.chengshi = true;
        // } else {
        //   this.hide.query = true;
        //   this.hide.chengshi = false;
        // }
      })();
    };
  },
  methods: {
    handler({ BMap, map }) {
      console.log(BMap, map);
      this.center.lng = 118.835;
      this.center.lat = 32.0835479;
    },
  },
};
</script>
<style scoped lang=scss>
@import "./../sass/transfrom.scss";
.home{
  width:100%;
  overflow: hidden;
}
.box-zhong-input {
  border: 1px solid #e5e5e5;
  border-radius: 24px;
  padding: 9px 40px 9px 15px;
  font-size: 12px;
  color: #1d1e28;
  width: 50%;
  background: #fff;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left: 8px;
}
.box-zhong-chengshi {
  font-size: 12px;
  color: #1a1a1a;
  /* line-height: 20px; */
  font-weight: 700;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 10%;
  display: inline-block;
}
.mask {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
}
.share {
  width: 100%;
  height: 273px;
  position: fixed;
  left: 10px;
  z-index: 100;
  transition: bottom 0.5s ease-in;
}
.share .share-opt {
  width: 100%;
  height: 210px;
  background:white;
}
.share .btn {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 20px;
  color: #333333;
  font-size: 14px;
  border: none;
  margin-top: 10px;
}
.mask {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
}
.share {
  width: calc(100% - 20px);
  height: 273px;
  position: fixed;
  left: 10px;
  z-index: 100;
  transition: bottom 0.5s ease-in;
}
.share .share-opt {
  width: 100%;
  height: 210px;
  border-radius: 8px;
}
.share .btn {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 20px;
  color: #333333;
  font-size: 14px;
  border: none;
  margin-top: 10px;
}
.box-top {
  display: none;
}
.box-zhong-sousuo{
      font-size: 16px;
       width: 20%;
       display: none;
  }
  .bottom-yincang{
    display: none;
  }
  .box-ditu-list {
    display: none;
  }

@media screen and (min-width: 750px) {
   .bottom-yincang{
    display: inline;
  }
  .box-zhong-chengshi {
  /* font-size: 12px;
  color: #1a1a1a;
  font-weight: 700;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 10%; */
  display: none;
}
  .box-top {
    width: 100%;
    height: torem(634);
    position: relative;
    display: inline;
  }
  .box-top-img {
    width: 100%;
    height: torem(634);
  }
  .box-top-text {
    position: relative;
    top: -300px;
    font-size: 69px;
    color: #ffffff;
  }
  .box-zhong {
    width: 100%;
    height: 200px;
  }
  .box-di {
    width: 100%;
    height: 380px;
    margin: 100px auto;
    /* background: red; */
  }
  .box-di-span {
    float: left;
    width: 20%;
    height: 380px;
    margin: 0 36px;
    /* background: blue; */
  }
  .box-di-title {
    width: 112px;
    height: 40px;
    font-size: 28px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #666666;
    line-height: 60px;
  }
  .box-di-text {
    width: 297px;
    height: 40px;
    font-size: 28px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #999999;
    line-height: 40px;
  }
  .bm-view {
    width: 100%;
    height: 300px;
  }
  .box-zhong-input {
    width: 70%;
    height: 12px;
    border-radius: 8px;
    border: 1px solid #e6e6e6;
    font-size: 12px;
  }
  .box-zhong-input2 {
    width: 25%;
    height: 20px;
    border-radius: 8px;
    border: 1px solid #e6e6e6;
    margin-left: 20px;
    font-size: 12px;
  }
  .box-zhong-sousuo{
      font-size: 16px;
       width: 20%;
       display: inline;
  }
  .box-ditu {
    width: 100%;
    height: 400px;
  }
  .map {
    width: 45%;
    height: 400px;
    float: left;
  }
  .box-ditu-list {
    width: 45%;
    height: 400px;
    float: left;
    display: inline;
  }
  .box-ditu-input {
    width: 80%;
    height: 20px;
    border-radius: 8px;
    border: 1px solid #e6e6e6;
    font-size: 16px;
    /* box-shadow: 0px 1px 0px 0px #E6E6E6; */
  }
  .box-ditu-span {
    width: 80%;
    height: 52px;
    font-size: 19px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #999999;
    line-height: 26px;
  }
}
</style>