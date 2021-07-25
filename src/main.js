import Vue from 'vue'
import 'lib-flexible/flexible'
//引入vant组件
import { Button } from 'vant';
import { Lazyload } from 'vant';
import { Tab, Tabs } from 'vant';

//引入并使用自己的配置内容
import App from './App.vue'
import router from './router'
import store from './store'
//引入并注册通用组件
import HeaderBar  from '@/components/HeaderBar'
Vue.component('HeaderBar',HeaderBar)


Vue.config.productionTip = false

//使用组件
Vue.use(Button);
Vue.use(Lazyload);
Vue.use(Tab);
Vue.use(Tabs);


new Vue({
	render: h => h(App),
	router,   //声明路由
	store,
}).$mount('#app')
