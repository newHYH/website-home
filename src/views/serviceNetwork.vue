<template>
  <div class="home">
    <div class="box-top">
      <img
        v-show="hide.query"
        class="box-top-img"
        src="../assets/fuwutop.png"
        alt=""
      />
      <div class="box-top-text">服务店查询</div>
    </div>
    <div
      v-show="hide.query"
      style="width: 100%; height: 20px; background: #f5f5f5"
    ></div>
    <div class="box-zhong">
      <div style="margin-top: 20px">
        <span v-show="hide.query" style="font-size: 29px; width: 50%"
          >搜索附近的服务店（不限区域）：</span
        >
        <span v-show="hide.chengshi" @click="share" class="box-zhong-chengshi">城市</span>
        <input
          class="box-zhong-input"
          placeholder="请输入地址，搜索附近的服务店"
        />
        <!-- <input v-show="hide.chengshi" id="sex" type="text" placeholder="选择区域" list="sexlist3" class="box-zhong-input2">
                <datalist id="sexlist3">
                    <option>华为</option>
                    <option>小米</option>
                </datalist> -->
        <!-- <div class="popup">
                    <div class="mask" v-show="shareType"></div>
                    <div class="share" :style="{bottom: num + 'px'}">
                        <div class="share-opt bg-color"></div>
                        <div class="btn bg-color" @click="cancel">取消</div>
                    </div>
                </div> -->
        <div class="popup">
          <div class="mask" v-show="shareType"></div>
          <div class="share" :style="{ bottom: num + 'px' }">
            <div class="share-opt bg-color">
                <div>省份</div>
                <div>城市</div>
            </div>
            <div class="btn bg-color" @click="cancel">取消</div>
          </div>
        </div>
      </div>
      <div style="margin-top: 20px">
        <span v-show="hide.query" style="font-size: 29px; width: 25%"
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
          id="sex"
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
          id="sex"
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
      <!-- <baidu-map class="map" ak="tRQV1ysINWeNXFPtzdAUrtbFEfa4SOGb" :zoom="zoom" center="北京"
 :scroll-wheel-zoom="true">
                    
                </baidu-map> -->
      <div class="box-ditu-list">
        <input
          v-show="hide.query"
          class="box-ditu-input"
          type="text"
          placeholder="选择产品"
        /><br />
        <!-- <span class="box-ditu-span">华为授权服务中心</span><br />
        <span class="box-ditu-span">宣武门外大街庄胜广场南翼沿街二层</span
        ><br />
        <span class="box-ditu-span">010-63158808 010-63159890</span><br />
        <span class="box-ditu-span">营业时间：10:00-19:00(周一至周日)</span> -->
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
    <!-- <div class="box-di">
            <div>
                <span style="font-size: 36px;font-family: PingFangSC-Medium, PingFang SC;color: #333333;line-height: 100px;">联系我们</span>
            </div>
            <div>
               <div class="box-di-span">
                   <span class="box-di-title">电话支持</span><br>
                   <span class="box-di-text">电话950800</span><br>
                   <span class="box-di-text">7*24小时</span>
               </div>
               <div class="box-di-span">
                   <span class="box-di-title">在线支持</span><br>
                   <span class="box-di-text">在线客服</span><br>
                   <span class="box-di-text">邮件咨询</span>
               </div>
               <div class="box-di-span">
                   <span class="box-di-title">线下支持</span><br>
                   <span class="box-di-text">服务店</span><br>
                   <span class="box-di-text">零售店</span>
               </div>
               <div class="box-di-span">
                   <span class="box-di-title">社交支持</span><br>
                   <span class="box-di-text">微博</span><br>
                   <span class="box-di-text">微信公众号</span>
               </div>
            </div>
        </div> -->
  </div>
</template>
<script>
import BaiduMap from "vue-baidu-map/components/map/Map";
// import BaiduMap from 'vue-baidu-map'
//import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
// Vue.use(BaiduMap, {
//   // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
//   ak: 'tRQV1ysINWeNXFPtzdAUrtbFEfa4SOGb'
// })
export default {
  name: "BaiDuMap",
  components: {
    BaiduMap,
  },
  data() {
    return {
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
      shareType: false,
      num: -273,
    };
  },
  watch: {
    windowWidth(val) {
      let that = this;
      console.log("实时屏幕宽度：", val, that.windowWidth);
    },
  },
  mounted() {
    var that = this;
    // <!--把window.onresize事件挂在到mounted函数上-->
    window.onresize = () => {
      return (() => {
        window.fullWidth = document.documentElement.clientWidth;
        that.windowWidth = window.fullWidth; // 宽
        if (this.windowWidth < 750) {
          this.hide.query = false;
          this.hide.chengshi = true;
        } else {
          this.hide.query = true;
          this.hide.chengshi = false;
        }
      })();
    };
  },
  methods: {
    handler({ BMap, map }) {
      console.log(BMap, map);
      this.center.lng = 118.835;
      this.center.lat = 32.0835479;
    },
    share: function () {
      this.shareType = true;
      this.num = 0;
    },
    cancel: function () {
      this.num = -200;
      setTimeout(() => {
        this.shareType = false;
      }, 600);
    },
  },
};
</script>
<style scoped lang=scss>
@import "./../sass/transfrom.scss";

.box-zhong-input {
  border: 1px solid #e5e5e5;
  border-radius: 24px;
  padding: 9px 40px 9px 15px;
  font-size: 12px;
  color: #1d1e28;
  width: 60%;
  background: #fff;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.box-zhong-chengshi {
  font-size: 18px;
  color: #1a1a1a;
  line-height: 20px;
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
  /* border-radius: 8px; */
  background:blanchedalmond;
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

@media screen and (min-width: 750px) {
  .box-top {
    width: 100%;
    height: torem(634);
    position: relative;
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
    width: 40%;
    height: 57px;
    border-radius: 8px;
    border: 1px solid #e6e6e6;
  }
  .box-zhong-input2 {
    width: 15%;
    height: 57px;
    border-radius: 8px;
    border: 1px solid #e6e6e6;
    margin-left: 20px;
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
  }
  .box-ditu-input {
    width: 80%;
    height: 57px;
    border-radius: 8px;
    border: 1px solid #e6e6e6;
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