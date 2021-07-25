module.exports = {
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant'],
    ['component', {
      "libraryName": "mint-ui", // 针对mint-ui库实现按需引入打包
      "style": true // 自动打包对应的css
    }]
  ],
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
