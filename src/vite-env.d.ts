/// <reference types="vite/client" />

// 引入组件提示找不到模块 ts报错
declare module '*.vue' {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>
    export default component
}