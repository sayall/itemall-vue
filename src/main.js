import Vue from 'vue'
import 'lib-flexible/flexible'
//引入vant组件
import { Button } from 'vant';
//引入自己的组件
import App from './App.vue'
import router from './router'
//引入并注册通用组件
import HeaderBar  from '@/components/HeaderBar'
Vue.component('HeaderBar',HeaderBar)
Vue.config.productionTip = false

//使用组件
Vue.use(Button);




new Vue({
	render: h => h(App),
	router,   //声明路由
}).$mount('#app')
