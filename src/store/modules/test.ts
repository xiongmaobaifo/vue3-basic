import { defineStore } from 'pinia'
import { store } from '../index'

export const useTestStore = defineStore('test', () => {
// 此处使用的是组合式API的方式，更多情况可查看官网
    let test: testType = {
        test: 'test'
    }
    return {
        test
    }
},
)
// 最后到处定义的useTestStore
export function useTestStoreHook() {
    return useTestStore(store)
}