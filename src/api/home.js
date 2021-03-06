import ajax from "@/api/ajax";

//获取轮播banner
export const reqBanner = () => ajax('home/banner')

//获取推荐商品
export const reqRecommend = () => ajax('home/recommend')
//获取商品列表
export const reqGoodsList = (commit) => ajax.get('home/pages', {params: commit})

//根据id获取商品详情
export const getGoodDetail = (gid) => ajax.get('home/searchDetail',{params:{gid}})


