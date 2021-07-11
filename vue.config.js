const px2rem = require('postcss-px2rem') // postcss的一个插件
// 配置postcs-px2rem
const postcss = px2rem({
	remUnit: 75   //基准大小 baseSize，设计稿/10以后的值
})
module.exports = {
	// 选项...
	css: { // 添加postcss配置
		loaderOptions: {
			postcss: {
				plugins: [
					postcss
				]
			}
		}
	},
}