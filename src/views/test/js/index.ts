import { defineComponent, onMounted, ref, toRefs } from 'vue';
import { useTestStore } from '@/store/modules/test.ts'
import { ElMessage } from 'element-plus'
import http from '@/request/http.ts';
export default defineComponent({
    components: {
    },
    props: {
        title: String
    },
    setup(props, context) {
        // 将 `props` 转为一个其中全是 ref 的对象，然后解构
        const { title } = toRefs(props)
        console.log("props.title==>", title)

        const { attrs, slots, emit, expose } = context
        // 透传 Attributes（非响应式的对象，等价于 $attrs）
        console.log(attrs)
        // 插槽（非响应式的对象，等价于 $slots）
        console.log(slots)
        // 触发事件（函数，等价于 $emit）
        console.log(emit)
        // 暴露公共属性（函数）
        console.log(expose)

        const testStore = useTestStore()
        const test = testStore.test
        ElMessage('你好')


        const count = ref(0)

        onMounted(async () => {
            // 接口调用默认loading:true 开启全屏loading
            await http.get({url:'/api/myip.php'}).then((res: any) => {
                console.log('res', res)
            }).catch((err: any) => {
                console.log('err', err)
            })
            console.log('async/await执行完成')
            console.log('组件已挂载，可操作DOM')
        })

        return {
            test,
            count
        }
    },
    mounted() {
        console.log('test:', this.test)
    }
});