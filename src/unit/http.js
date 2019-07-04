import axios from 'axios'
import config from '../../mainconfig'
import store from '../store';
import routers from '../router';
const service = axios.create({
    withCredentials: true,
    baseURL: config[config.mode].baseURL
})
service.interceptors.request.use(config => {
    if(localStorage.loginToken==='')
    {
      routers.push('/')
    }
    else
    {
        config.headers["token"]=localStorage.loginToken
    }
    return config;
}, err => {
    Promise.reject(err)
})
service.interceptors.response.use(response => {
    if(response.status!==200)
    {
        return Promise.reject(response);
    }
    if (response.data.code !== 1) {
        switch (response.data.code) {
            case 0: // 数据错误
                return response
                break;
            case 403://服务器token过期
                localStorage.setItem('loginToken','')
                break;
            default:
                // console.log(response.data.msg);
                // console.log(response)

                break;
        }
        return Promise.reject(response)
    } else {
        return response
    }
   

}, error => {
    console.log("拦截器error:"+ error)
    
    if (error.response) {
        const res = error.response.data

        return Promise.reject(res)
    } else {
        return Promise.reject(error)
    }
})
export default service;