import axios from "axios";
<<<<<<< HEAD
import Loading from "@lib/vant/loading"

=======
// import loading from "@lib/loading/index.js"
>>>>>>> 94f5f8097528659bf7448a7090a1bf50701ee56d

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
<<<<<<< HEAD
    Loading.open(document.body);
=======
    // loading.open();
>>>>>>> 94f5f8097528659bf7448a7090a1bf50701ee56d
    return config;
}, err => {
    return Promise.reject(err);
})


http.interceptors.response.use(res => {
    if (res.status == 200) {
<<<<<<< HEAD
        Loading.close();
=======
        // loading.close();
>>>>>>> 94f5f8097528659bf7448a7090a1bf50701ee56d
        return res.data;
    }
})

export default http;
