// 路由模块
import Vue from "vue";
import VueRouter from "vue-router";
//引入页面模块
import home from "@/pages/home/home";
import cart from "@/pages/cart/cart";
import profile from "@/pages/profile/profile";
import category from "@/pages/category/category";
import login from  "@/pages/Login/login";

Vue.use(VueRouter)

//暴露项目路由
export default new VueRouter({
	mode:'history',
	routes: [
		{//首页
			path: '/home',
			component: home
		},
		{//购物车
			path: '/cart',
			component: cart
		},
		{//我的
			path: '/profile',
			component: profile
		},
		{//分类
			path: '/category',
			component: category
		},
		{//登录
			path: '/login',
			component: login,
			meta: {
				isHidden: 'ture'
			}
		},
		{//重定向首页
			path:'/',
			redirect:'/home'
		}

	]

})