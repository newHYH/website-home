import { getApi, postApi } from './config.js'

let baseUrl = ''
//1.查询问题描述接口
export function quryQuestion(data) {
    const url = '/model/quryQuestion';
    return getApi(url, data)
}
//2.查询商品类型接口
export function quryGoodsType(data) {
    const url = '/model/quryGoodsType';
    return getApi(url, data)
}
//3.门店查询接口
export function quryDept(data) {
    const url = '/model/quryDept';
    return postApi(url, data)
}
//4.sku商品信息查询接口
export function quryGoodsSku(data) {
    const url = '/model/quryGoodsSku';
    return postApi(url, data)
}
//5.sku商品类型树形信息查询接口
export function quryGoodsTree(data) {
    const url = '/model/quryGoodsTree';
    return getApi(url, data)
}
//6.新闻列表查询接口
export function quryNews(data) {
    const url = '/news/quryNews';
    return getApi(url, data)
}
//7.新闻详情查询接口
export function quryDetailByNewsId(data) {
    const url = '/news/quryDetailByNewsId';
    return getApi(url, data)
}


