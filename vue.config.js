const px2rem = require('postcss-px2rem') // postcss的一个插件
// 配置postcs-px2rem
const postcss = px2rem({
	remUnit: 75   //基准大小 baseSize，设计稿/10以后的值
})
module.exports = {
	// 选项...
	css: { // 添加postcss配置
		loaderOptions: {
			less: {
				lessOptions: {
				modifyVars: {
					// 初始化可直接覆盖变量
					'tabs-line-height': '1.2rem',
					'tabs-card-height': '1.2rem',
				},
				}
			},
			postcss: {
				plugins: [
					postcss
				]
			},
		}
	},
	devServer: {
		open: true,
		proxy: {
			// 处理以/api开头路径的请求
			'/api': {
				target: 'http://localhost:3000', // 转发的目标地址
				pathRewrite: {
					'^/api' : ''  // 转发请求时去除路径前面的/api
				},
				changeOrigin: true, // 支持跨域, 如果协议/主机也不相同, 必须加上
			},
		}
	},

}