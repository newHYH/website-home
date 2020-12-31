import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'
import './iconfont/iconfont.css'
import 'animate.css'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

 createApp(App).use(router).use(ElementPlus).mount('#app')
