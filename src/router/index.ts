import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
const routes: Array<RouteRecordRaw> = [
    // 项目打开后进入的默认地址
    {
        path: '/',
        redirect: '/test',
    },
    {
        path: '/test',
        component:()=>import('../views/test/index.vue')
    },
]
const router = createRouter({
    history: createWebHashHistory(), // 本项目采用了哈希模式
    routes
})
export default router