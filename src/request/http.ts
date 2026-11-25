// import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig, AxiosHeaders } from "axios";
import request from './request';
// import qs from 'qs'
const http = {
    get({ url, params, headers, loading = true }: HTTP) {
        const config = {
            method: 'GET',
            url,
            params,
            headers,
            // 默认开启全屏loading
            loading
        }
        return request(config);
    },
    post({ url, data, headers, loading = true }: HTTP) {
        const config = {
            method: 'POST',
            url,
            data,
            headers,
            // 默认开启全屏loading
            loading
        }
        return request(config);
    },
    post2({ url, data, headers, loading = true }: HTTP) {
        const config = {
            method: 'POST',
            url,
            data,
            headers: { "Content-Type": "multipart/form-data", ...headers },
            // 默认开启全屏loading
            loading
        }
        return request(config);
    }
}

export default http