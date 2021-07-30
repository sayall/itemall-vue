import { Toast } from 'vant'

// 提示
export const toast = (message) => {
	Toast( { message})
}

//节流
export const throttle = (func, delay) => {
	let timer = null;
	return function() {
		let context = this;
		let args = arguments;
		if (!timer) {
			timer = setTimeout(function() {
				func.apply(context, args);
				timer = null;
			}, delay);
		}
	}
}

//防抖

export const debounce = (func, wait)=>  {
	let timeout = null;
	return function() {
		if(timeout)
		clearTimeout(timeout);
		timeout = setTimeout(func, wait);
	}
}