import ajax from "@/api/ajax";

//获取轮播banner
export const reqBanner = () => ajax('home/banner')

//获取推荐商品
export const reqRecommend = () => ajax('home/recommend')
//获取商品列表，给予默认数据
export const reqGoodsList = ({page = 1,pageSize = 10,ordersby = 'orgPrice',sort = 'ASC',type = 'pop'
                             }) => ajax('home/pages', {page, pageSize, ordersby, sort, type})
