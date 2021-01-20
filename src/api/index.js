import { getApi, postApi } from './config.js'

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


export function testpost(data) {
    const url = '/api/post';
    return postApi(url, data)
}
