import axios from 'axios'

//设置全局配置
// axios.defaults.baseURL = 'https://autumnfish.cn/api/'
axios.defaults.baseURL = 'http://localhost:8019'

axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-rulencode'

const request = {
    get(url, params) {
        return new Promise((resolve, reject) => {
            axios.get(url, {
                params: params
            }).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err.data)
            })
        });
    },
    post(url, params) {
        return new Promise((resolve, reject) => {
            axios.post(url, params)
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err.data)
                })
        });
    },
    delete(url) {
        return new Promise((resolve, reject) => {
            axios.delete(url)
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err.data)
                })
        });
    }
}
export default request