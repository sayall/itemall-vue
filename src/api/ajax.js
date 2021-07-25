//统一封装ajax
import axios from "axios";
import {toast} from '../util'
import { Indicator } from 'mint-ui';

const  instance = axios.create({
	baseURL: '/api',
	timeout:10000  //基本数据
});

// 异常处理方法
const handleError = (err) => {
	if (err.code == 400) {
		toast(err.message)
	}
	if (err.code == 401) {
		toast(err.message)
		window.location.href='/login'
	}
	toast('请求出错'+ err.message)
}
//请求拦截器
instance.interceptors.request.use(
	(config)=>{
		Indicator.open({
			text: '加载中...',
			spinnerType: 'fading-circle'
		});
		return config
	}
)

//响应拦截器
instance.interceptors.response.use(
	respose =>{
		Indicator.close();
		return respose.data.data
	},
	error => {
		Indicator.close();
		handleError(error.response.data)
	}
)


export default instance