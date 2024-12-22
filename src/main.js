import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入element组件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

// 应用vue控制台告警
// 定义特性标志
window.__VUE_PROD_DEVTOOLS__ = false;
window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;


const app = createApp(App)

app.use(store)
app.use(ElementPlus, {
    locale: zhCn,
})

app.use(router)

app.mount('#app')
