import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig, AxiosHeaders } from "axios";
import axios from "axios";
import { AxiosLoading } from "./loading"

const loading = new AxiosLoading()

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL


// 创建axios实例
const service: AxiosInstance = axios.create({
    baseURL: VITE_BASE_URL,
    withCredentials: false, // 跨域请求时是否需要访问凭证 //请求头携带cookie
    timeout: 30 * 1000, // 请求超时时间
    headers: { "Content-Type": "application/json;charset=UTF-8" }
});

// 请求拦截器
service.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    // 有loading参数开启全局loanding
    config.loading && loading.addLoading();
    
    // 这里可以设置token: config!.headers!.Authorization = token
    config!.headers!.Authorization = sessionStorage.getItem('token') || ''

    return config;
},error => Promise.reject(error));

service.interceptors.response.use((response: AxiosResponse) => {

    response.config.loading && loading.closeLoading();

    return response.data;
},
    (error) => {

        error.response.config.loading && loading.closeLoading();
        console.error('%cRequest Error => %c' + JSON.stringify(error.response), 'color: red', 'color: black')

        return error.response;
    }
);

export default service;