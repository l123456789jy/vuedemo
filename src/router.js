//第一步:引入必要的文件
import Vue from 'vue';//加载全局组件时,都需要引入Vue
import Router from 'vue-router';//引入vue-router
import flexTest from './flexTest.vue'
import app from './index.vue'
import tinym from './tinyMcePage.vue'
//第二步:加载Router
Vue.use(Router);//加载全局组件Router

//第三步:配置路由实例
export default new Router({
    routes:[
        {
            path:"/flexDemo",component:flexTest
        },
        {
            path:"/app",component:app
        },
        {
            path:"/tinyMce",component:tinym
        },
    ]
})
