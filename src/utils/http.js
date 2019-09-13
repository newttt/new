import axios from "axios";
import Loading from "@lib/vant/loading"


const http = axios.create({
    timeout: 5000,
    withCredentials: true
})

//拦截器
http.interceptors.request.use(config => {
    if (config.method == "get") {
        config.params = {
            ...config.data
        };
    } else if (config.method == "post") {
        //config.headers["content-type"] = "application/x-www-form-urlencoded"
    }
    Loading.open(document.body);
    return config;
}, err => {
    return Promise.reject(err);
})


http.interceptors.response.use(res => {
    if (res.status == 200) {
        Loading.close();
        return res.data;
    }
})

export default http;
