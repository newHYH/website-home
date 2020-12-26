import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'
import './iconfont/iconfont.css'
import 'animate.css'

 createApp(App).use(router).mount('#app')
// createApp(App).mount('#app')
// import Vue from 'vue'
// import BaiduMap from 'vue-baidu-map'

// Vue.use(BaiduMap, {
//   // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
//   ak: 'tRQV1ysINWeNXFPtzdAUrtbFEfa4SOGb'
// })
import Vue from 'vue'
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
    // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
    ak: 'tRQV1ysINWeNXFPtzdAUrtbFEfa4SOGb' // 这里填写申请的秘钥
})