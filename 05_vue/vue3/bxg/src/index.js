import Vue from 'vue'
import App from './app.vue'
import router from './router.js'

// css文件
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import 'nprogress/nprogress.css'
import './assets/css/index.css'

import axios from 'axios'
// axios的拦截器
axios.interceptors.request.use( config => {
    // 每次用axios这个方法都会执行
    config.withCredentials = true
    return config
})

Vue.use(function (Vue) {
    Vue.prototype.axios = axios
})
new Vue({
    el: '#box',
    router,
    render: function (createElement) {
        return createElement(App)
    }
})