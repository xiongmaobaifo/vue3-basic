import { createApp } from 'vue'
import './assets/css/main.css'
import App from './App.vue'

const app = createApp(App)


// 路由设置
import router from './router/index'
app.use(router)

// 挂载store
import { setupStore } from './store'
setupStore(app);

// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 导入所有的icon图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
app.use(ElementPlus)
//全局注册图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}


//要把mount('#app')放到最后
app.mount('#app')