const env = process.env.NODE_ENV || 'development';
import axios from 'axios';
axios.defaults.withCredentials = true; //默认带取cookie
import messageTip from '@/utils/init'

import store from '@/store/index'
const http = axios.create(
    {
        'development': {
            baseURL: 'http://47.96.53.33:8080/erp-gateway',
            // baseURL:'/erp-gateway',
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        },
        'test': {
            baseURL: 'http://192.168.3.115:8512/erp-gateway',
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        },
        'fat': {
            baseURL: 'http://120.55.138.130/erp-gateway',
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        },
        'uat': {
            baseURL: 'http://47.96.53.33:8080/erp-gateway',
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        },
        'production': {
            baseURL: '/erp-gateway',
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        }
    }[env]
)

http.interceptors.request.use(config => {
   
    store.commit('setIsLoading',true)
    let s = setTimeout(() => {
        store.commit('setIsLoading',false)
        clearTimeout(s);
    }, 5000)
    return config;
}, err => Promise.reject(err));

http.interceptors.response.use(res => {
    console.info(res)
    store.commit('setIsLoading',false)    
    let body = res.data || res;
    if (!body) {
        messageTip('数据出错')
        Message({

        })
        throw body;
    } else if (body.code === 401) { // 如果401，跳转到登录
        console.info(body,'bodybody')
        messageTip('重新登录')
            let {
                casLoginUrl,
                appSecurityUrl,
                appRedirectParameter,
                casServiceParameter
            } = body.data;
            let encodeUrl = `${appSecurityUrl}?${appRedirectParameter}=${encodeURIComponent(window.location.href)}`;
            let loginUrl = `${casLoginUrl}?${casServiceParameter}=${encodeURIComponent(encodeUrl)}`;
            location.href=loginUrl
        throw body;
    } else if (body.code === 403) { // 如果403，提示无权限
        messageTip('没有权限')
        throw body;
    } else if (body.code === 441) { // 刷新页面
        throw body;
    } else if (body.code !== 200) {
        body.msg = body.resultMessage;
        throw body;
    }
    if (body.data === false) {  
        messageTip('返回数据出错')
        throw body;
    }
    if (body.totalCount) {
        return {
            items: body.data,
            totalCount: body.totalCount,
            pageSize: body.pageSize,
            page: body.page,
        }
    }
    return body.data;
}, err => {
    messageTip()
    throw err;
});

export default http;
