import http from './utils/apiConfig'

const args_url = {

    //foundationdata
    getAllCity: '/foundationdata/region/allcity',//获取所有城市
    regionChilds: '/foundationdata/region/childs',//根据id获取对应地区的子地区
    //erp-getway
    GetLoginInfo: '/get-login-user', // 查询登陆用户信息
    //派单区域
    createDispatchregion: 'c2b-dispatcher-gateway/new-dispatch-region/create',//创建区域 post
    getDispatchRegionById: 'c2b-dispatcher-gateway/new-dispatch-region/id', //根据区域ID 获取该区域的配置信息 get
    searchDispatchRegion: 'c2b-dispatcher-gateway/new-dispatch-region/search',//查询区域配置列表 post
    updateDispatchRegion: 'c2b-dispatcher-gateway/new-dispatch-region/update',//编辑区域 post
    getSubscribeDays: 'c2b-dispatcher-gateway/subscribe-days/get',//获取全局预约天数配置 get
    updateSubscribeDays: 'c2b-dispatcher-gateway/subscribe-days/update',//更新全局预约天数配置 post
    //派单
    dispatcherBill: 'c2b-dispatcher-gateway/dispatcher-bill/dispatch',//查询取件单
    searchDispatcherBill: 'c2b-dispatcher-gateway/dispatcher-bill/search',//查询取件单
    tobeDispatchedNum:'c2b-dispatcher-gateway/dispatcher-bill/to-be-dispatched/num',//获取当前时间到当前时间+预约天数内 待派单的取件单数量
    remarkUpdate:'c2b-dispatcher-gateway/dispatcher-bill/remark/update',//新机订单更新备注信息
    dispatcherBillDetail:'c2b-dispatcher-gateway/dispatcher-bill/',//根据取件单号获取取件单详细信息
    //前置仓
    getFrontWarehouse:'c2b-stock-gateway/erp/warehouse/get-front-warehouse-by-city-id/',//通过仓库id获取前置仓
    //ob
    getobserver:'c2b-dispatcher-gateway/ob',//Observer Controller
}

function request(config) {
    let { params, data, method, url } = config
    return http.request({
        url,
        method,
        params,
        data,
    }).catch(() => false)
}

export default {
    /**
     * 查询所有城市
     */
    getAllCity(config) {
        return request({
            method: 'get',
            url: args_url.getAllCity,
            ...config
        })
    },
    GetLoginInfo(config) {
        return request({
            method: 'get',
            url: args_url.GetLoginInfo,
            ...config
        })
    },
    createDispatchregion(config) { //创建区域 post
        return request({
            method: 'post',
            url: args_url.createDispatchregion,
            ...config
        })
    },
    getDispatchRegionById(config) { //根据区域ID 获取该区域的配置信息 get
        return request({
            method: 'get',
            url: args_url.getDispatchRegionById,
            ...config
        })
    },
    searchDispatchRegion(config) { //查询区域配置列表 post
        return request({
            method: 'post',
            url: args_url.searchDispatchRegion,
            ...config
        })
    },
    updateDispatchRegion(config) { //编辑区域 post
        return request({
            method: 'post',
            url: args_url.updateDispatchRegion,
            ...config
        })
    },
    getSubscribeDays(config) { //获取全局预约天数配置 get
        return request({
            method: 'get',
            url: args_url.getSubscribeDays,
            ...config
        })
    },
    updateSubscribeDays(config) { //更新全局预约天数配置 post
        return request({
            method: 'post',
            url: args_url.updateSubscribeDays,
            ...config
        })
    },
    regionChilds(config) { //根据id获取对应地区的子地区 get
        return request({
            method: 'get',
            url: args_url.regionChilds,
            ...config
        })
    },
    //派单
    //查询取件单
    dispatcherBill(config) { //派单
        return request({
            method: 'post',
            url: args_url.dispatcherBill,
            ...config
        })
    },
    searchDispatcherBill(config) { //查询取件单 post
        return request({
            method: 'post',
            url: args_url.searchDispatcherBill,
            ...config
        })
    },
    tobeDispatchedNum(config) { //获取当前时间到当前时间+预约天数内 待派单的取件单数量 get
        return request({
            method: 'get',
            url: args_url.tobeDispatchedNum,
            ...config
        })
    },
    remarkUpdate(config) { //新机订单更新备注信息 post
        return request({
            method: 'post',
            url: args_url.remarkUpdate,
            ...config
        })
    },
    dispatcherBillDetail(config) { //根据取件单号获取取件单详细信息 get
        return request({
            method: 'get',
            url: args_url.dispatcherBillDetail,
            ...config
        })
    },
     //前置仓
     getFrontWarehouse(config) {
        return request({
            method: 'get',
            url: args_url.getFrontWarehouse+config.cityId,
        })
    },
    //Observer Controller
    getobserver(config) {
        return request({
            method: 'get',
            url: args_url.getobserver,
            ...config
        })
    },
};
